import { FS, Utils } from '../../lib';
import type { ModlogSearch, ModlogEntry } from '../modlog';
import {
	type TicketState, getBattleLog, getBattleLinks,
	writeTickets, notifyStaff, writeStats, HelpTicket,
	tickets,
} from './helptickets';
import * as Artemis from '../artemis';
import { TLkey, type Translator } from '../../sim/dex-text';

const ORDERED_PUNISHMENTS = ['WARN', 'FORCERENAME', 'LOCK', 'NAMELOCK', 'WEEKLOCK', 'WEEKNAMELOCK'];
const PMLOG_IGNORE_TIME = 24 * 60 * 60 * 1000;
const WHITELIST = ['mia'];

export interface AutoPunishment {
	modlogCount?: number;
	severity?: { type: string[], certainty: number };
	/**
	 * Should it be run on just one message?
	 * or is it safe to run on averages (for the types that use averages)
	 */
	isSingleMessage?: boolean;
	punishment: string;
	ticketType: string;
}

export interface AutoSettings {
	punishments: AutoPunishment[];
	applyPunishments: boolean;
}

const defaults: AutoSettings = {
	punishments: [{
		ticketType: 'inapname',
		punishment: 'forcerename',
		severity: { type: ['sexual_explicit', 'severe_toxicity', 'identity_attack'], certainty: 0.4 },
	}, {
		ticketType: 'pmharassment',
		punishment: 'warn',
		severity: { type: ['sexual_explicit', 'severe_toxicity', 'identity_attack'], certainty: 0.15 },
	}],
	applyPunishments: false,
};

export const settings: AutoSettings = (() => {
	try {
		// spreading w/ default means that
		// adding new things won't crash by not existing
		return { ...defaults, ...JSON.parse(FS('config/chat-plugins/ht-auto.json').readSync()) };
	} catch {
		return defaults;
	}
})();

function saveSettings() {
	return FS('config/chat-plugins/ht-auto.json').writeUpdate(() => JSON.stringify(settings));
}

/** The translator defaults to English, which modlog notes must stay in. */
function visualizePunishment(punishment: AutoPunishment, TL: Translator = Chat.getTranslator()) {
	const punishmentName = punishment.punishment?.toUpperCase();
	const buf = [TL`punishment: ${punishmentName}`];
	buf.push(TL`ticket type: ${punishment.ticketType}`);
	if (punishment.severity) {
		const certainty = punishment.severity.certainty;
		const types = punishment.severity.type.join(', ');
		buf.push(TL`severity: ${certainty} (for ${types})`);
	}
	if (punishment.modlogCount) {
		buf.push(TL`required modlog: ${punishment.modlogCount}`);
	}
	if (punishment.isSingleMessage) {
		buf.push(TL`for single messages only`);
	}
	return buf.join(', ');
}

/**
 * Mod actions are shown to the room the command was used in (and copied to the staff room),
 * so they use that room's language; in PMs, only the user sees them.
 */
function modActionTL(context: Chat.CommandContext) {
	return { TL: context.room ? inRoom(context.room.roomid).TL : context.TL };
}

/** Messages shown in the given room use its language (the default one if none): inRoom('staff').TL */
function inRoom(roomid: string) {
	return { TL: Chat.getTranslator(Rooms.get(roomid)?.settings.language || null) };
}

/**
 * The ticket results Artemis writes are addressed to the reporter, so they use the reporter's
 * language (they are stored with the ticket, like the replies written by staff): forReporter(ticket).TL
 */
function forReporter(ticket: TicketState) {
	return { TL: Chat.getTranslator(Users.get(ticket.userid)?.language || null) };
}

function checkAccess(context: Chat.CommandContext | Chat.PageContext) {
	if (!WHITELIST.includes(context.user.id)) context.checkCan('bypassall');
}

export function punishmentsFor(type: string) {
	return settings.punishments.filter(t => t.ticketType === type);
}

/** Is punishment1 higher than punishment2 on the list? */
function supersedes(p1: string, p2: string) {
	return ORDERED_PUNISHMENTS.indexOf(p1) > ORDERED_PUNISHMENTS.indexOf(p2);
}

export function determinePunishment(
	ticketType: string, results: Record<string, number>, modlog: ModlogEntry[], isSingleMessage = false
) {
	const punishments = punishmentsFor(ticketType);
	let action: string | null = null;
	const types = [];
	Utils.sortBy(punishments, p => -ORDERED_PUNISHMENTS.indexOf(p.punishment));
	for (const punishment of punishments) {
		if (isSingleMessage && !punishment.isSingleMessage) continue;
		if (punishment.modlogCount && modlog.length < punishment.modlogCount) continue;
		if (punishment.severity) {
			let hit = false;
			for (const type of punishment.severity.type) {
				if (results[type] < punishment.severity.certainty) continue;
				hit = true;
				types.push(type);
				break;
			}
			if (!hit) continue;
		}
		if (!action || supersedes(punishment.punishment, action)) {
			action = punishment.punishment;
		}
	}
	return { action, types };
}

export function globalModlog(action: string, user: User | ID | null, note: string, roomid?: string) {
	user = Users.get(user) || user;
	void Rooms.Modlog.write(roomid || 'global', {
		action,
		ip: user && typeof user === 'object' ? user.latestIp : undefined,
		userid: toID(user) || undefined,
		loggedBy: 'artemis' as ID,
		note,
	});
}

export function addModAction(message: string) {
	Rooms.get('staff')?.add(`|c|~|/log ${message}`).update();
}

export async function getModlog(params: { user?: ID, ip?: string, actions?: string[] }) {
	const search: ModlogSearch = {
		note: [],
		user: [],
		ip: [],
		action: [],
		actionTaker: [],
	};
	if (params.user) search.user = [{ search: params.user, isExact: true }];
	if (params.ip) search.ip = [{ search: params.ip }];
	if (params.actions) search.action = params.actions.map(s => ({ search: s }));
	const res = await Rooms.Modlog.search('global', search);
	return res?.results || [];
}

function closeTicket(ticket: TicketState, msg?: string) {
	if (!ticket.open) return;
	ticket.open = false;
	ticket.active = false;
	const TL = forReporter(ticket).TL;
	const threadLink = `https://www.smogon.com/forums/threads/3570628/#post-9056769`;
	ticket.resolved = {
		time: Date.now(),
		by: TL`the Artemis AI`, // we want it to be clear to end users that it was not a human
		seen: false,
		staffReason: '',
		result: msg || '',
		note: TL`Want to learn more about the AI? <a href="${threadLink}">Visit the information thread</a>.`,
	};
	writeTickets();
	notifyStaff();
	const tarUser = Users.get(ticket.userid);
	if (tarUser) {
		HelpTicket.notifyResolved(tarUser, ticket, ticket.userid);
	}
	// TODO: Support closing as invalid
	writeStats(`${ticket.type}\t${Date.now() - ticket.created}\t0\t0\tresolved\tvalid\tartemis`);
}

async function lock(
	user: User | ID,
	result: CheckerResult,
	ticket: TicketState,
	isWeek?: boolean,
	isName?: boolean
) {
	const id = toID(user);
	const expireTime = isWeek ? Date.now() + 7 * 24 * 60 * 60 * 1000 : null;
	if (isName) {
		if (typeof user === 'object') user.resetName();
		await Punishments.namelock(id, expireTime, null, false, result.reason || "Automatically locked due to a user report");
	} else {
		await Punishments.lock(id, expireTime, null, false, result.reason || "Automatically locked due to a user report");
	}
	if (typeof user !== 'string') {
		const TL = user.TL;
		const days = isWeek ? '7' : '2';
		const lockMessage = isName ?
			TL`${user.name} has locked your username and prevented you from changing names for ${days} days.` :
			TL`${user.name} has locked you from talking in chats, battles, and PMing regular users for ${days} days.`;
		let message = `|popup||html|${lockMessage}`;
		if (result.reason) message += `\n\n${TL`Reason: ${result.reason}`}`;
		let appeal = '';
		if (Chat.pages.help) {
			appeal += `<a href="view-help-request--appeal"><button class="button"><strong>${TL`Appeal your punishment`}</strong></button></a>`;
		} else if (Config.appealurl) {
			appeal += `${TL`appeal:`} <a href="${Config.appealurl}">${Config.appealurl}</a>`;
		}
		if (appeal) message += `\n\n${TL`If you feel that your lock was unjustified, you can ${appeal}.`}`;
		message += `\n\n${TL`Your lock will expire in a few days.`}`;
		user.send(message);
	}
	const TL = inRoom('staff').TL;
	const reason = result.reason || TL`report from ${ticket.creator}`;
	let modAction;
	if (isName) {
		modAction = isWeek ?
			TL`${id} was locked from talking for a week by Artemis. (${reason})` :
			TL`${id} was locked from talking by Artemis. (${reason})`;
	} else {
		modAction = isWeek ?
			TL`${id} was weeknamelocked by Artemis. (${reason})` :
			TL`${id} was namelocked by Artemis. (${reason})`;
	}
	addModAction(modAction);
	globalModlog(
		`${isWeek ? 'WEEK' : ""}${isName ? "NAME" : ""}LOCK`, id,
		(result.reason || `report from ${ticket.creator}`) + (result.proof ? ` PROOF: ${result.proof}` : "")
	);
}

export const actionHandlers: {
	[k: string]: (user: User | ID, result: CheckerResult, ticket: TicketState) => string | void | Promise<string | void>,
} = {
	forcerename(user, result, ticket) {
		if (typeof user === 'string') return; // they can only submit users with existing userobjects anyway
		const id = toID(user);
		user.resetName();
		user.trackRename = id;
		Monitor.forceRenames.set(id, true);
		const reasonText = result.reason ? `${user.TL`Reason: ${result.reason}.`} ` : "";
		user.send(
			`|nametaken|${user.TL`Your name was detected to be breaking our name rules.`} ` +
			reasonText +
			user.TL`Please change it, or submit a help ticket by typing /ht in chat to appeal this action.`
		);
		const staffRoom = Rooms.get('staff');
		if (staffRoom) {
			const username = `<span class="username">${id}</span>`;
			staffRoom.add(
				`|html|${staffRoom.TL`${username} was automatically forced to choose a new name by Artemis (report from ${ticket.userid}).`}`
			).update();
		}
		globalModlog(
			'FORCERENAME', id, `username determined to be inappropriate due to a report by ${ticket.creator}`, result.roomid
		);
		return forReporter(ticket).TL`${id} was automatically forcerenamed. Thank you for reporting.`;
	},
	async namelock(user, result, ticket) {
		await lock(user, result, ticket, false, true);
		return forReporter(ticket).TL`${toID(user)} was automatically namelocked. Thank you for reporting.`;
	},
	async weeknamelock(user, result, ticket) {
		await lock(user, result, ticket, true, true);
		return forReporter(ticket).TL`${toID(user)} was automatically weeknamelocked. Thank you for reporting.`;
	},
	async lock(user, result, ticket) {
		await lock(user, result, ticket);
		return forReporter(ticket).TL`${toID(user)} was automatically locked. Thank you for reporting.`;
	},
	async weeklock(user, result, ticket) {
		await lock(user, result, ticket, true);
		return forReporter(ticket).TL`${toID(user)} was automatically weeklocked. Thank you for reporting.`;
	},
	warn(user, result, ticket) {
		user = toID(user);
		user = Users.get(user) || user;
		if (typeof user === 'object') {
			user.send(`|c|~|/warn ${result.reason || ""}`);
		} else {
			Punishments.offlineWarns.set(user, result.reason);
		}
		const staffRoom = inRoom('staff');
		const reason = result.reason || staffRoom.TL`report from ${ticket.creator}`;
		addModAction(
			typeof user === 'string' ?
				staffRoom.TL`${user} was warned by Artemis. while offline (${reason})` :
				staffRoom.TL`${user} was warned by Artemis. (${reason})`
		);
		globalModlog(
			'WARN', user, result.reason || `report from ${ticket.creator}`
		);
		return forReporter(ticket).TL`${user} was automatically warned. Thank you for reporting.`;
	},
};

function shouldNotProcess(message: string) {
	return (
		// special 'command', blocks things like /log, /raw, /html
		// (but not a // message)
		(message.startsWith('/') && !message.startsWith('//')) ||
		// broadcasted chat command
		message.startsWith('!')
	);
}

export async function getMessageAverages(messages: string[]) {
	const counts: Record<string, { count: number, raw: number }> = {};
	const classified = [];
	for (const message of messages) {
		if (shouldNotProcess(message)) continue;
		const res = await classifier.classify(message);
		if (!res) continue;
		classified.push(res);
		for (const k in res) {
			if (!counts[k]) counts[k] = { count: 0, raw: 0 };
			counts[k].count++;
			counts[k].raw += res[k];
		}
	}
	const averages: Record<string, number> = {};
	for (const k in counts) {
		averages[k] = counts[k].raw / counts[k].count;
	}
	return { averages, classified };
}

interface CheckerResult {
	action: string;
	user: User | ID;
	result: Record<string, number>;
	reason: string;
	roomid?: string;
	displayReason?: string;
	proof?: string;
}

type CheckerOutput = void | Map<string, CheckerResult>;

export const checkers: {
	[k: string]: (ticket: TicketState & { text: [string, string] }) => CheckerOutput | Promise<CheckerOutput>,
} = {
	async inapname(ticket) {
		const id = toID(ticket.text[0]);
		const user = Users.getExact(id);
		if (user && !user.trusted) {
			const result = await classifier.classify(user.name);
			if (!result) return;
			const keys = ['identity_attack', 'sexual_explicit', 'severe_toxicity'];
			const matched = keys.some(k => result[k] >= 0.4);
			if (matched) {
				const modlog = await getModlog({
					ip: user.latestIp,
					actions: ['FORCERENAME', 'NAMELOCK', 'WEEKNAMELOCK'],
				});
				let { action } = determinePunishment('inapname', result, modlog);
				if (!action) action = 'forcerename';
				return new Map([[user.id, {
					action,
					user,
					result,
					reason: "Username detected to be breaking username rules",
				}]]);
			}
		}
	},
	async inappokemon(ticket) {
		const actions = new Map();
		const links = [...getBattleLinks(ticket.text[0]), ...getBattleLinks(ticket.text[1])];
		for (const link of links) {
			const log = await getBattleLog(link);
			if (!log) continue;
			for (const [user, pokemon] of Object.entries(log.pokemon)) {
				const userid = toID(user);
				let result: {
					action: string, name: string, result: Record<string, number>, replay: string,
				} | null = null;
				for (const set of pokemon) {
					if (!set.name) continue;
					const results = await classifier.classify(set.name);
					if (!results) continue;
					// atm don't factor in modlog
					const curAction = determinePunishment('inappokemon', results, []).action;
					if (curAction && (!result || supersedes(curAction, result.action))) {
						result = { action: curAction, name: set.name, result: results, replay: link };
					}
				}
				if (result) {
					actions.set(user, {
						action: result.action,
						user: userid,
						result: result.result,
						reason: `Pokemon name detected to be breaking rules - '${result.name}'`,
						roomid: link,
					});
				}
			}
		}
		if (actions.size) return actions;
	},
	async battleharassment(ticket) {
		const urls = getBattleLinks(ticket.text[0]);
		const actions = new Map<string, CheckerResult>();
		for (const url of urls) {
			const log = await getBattleLog(url);
			if (!log) continue;
			const messages: Record<string, string[]> = {};
			for (const message of log.log) {
				const [username, text] = Utils.splitFirst(message.slice(3), '|').map(f => f.trim());
				const id = toID(username);
				if (!id) continue;
				if (!messages[id]) messages[id] = [];
				messages[id].push(text);
			}
			for (const [id, messageList] of Object.entries(messages)) {
				const { averages, classified } = await getMessageAverages(messageList);
				const { action } = determinePunishment('battleharassment', averages, []);
				if (action) {
					const existingPunishment = actions.get(id);
					if (!existingPunishment || supersedes(action, existingPunishment.action)) {
						actions.set(id, {
							action,
							user: toID(id),
							result: averages,
							reason: `Not following rules in battles (https://${Config.routes.client}/${url})`,
							proof: urls.join(', '),
						});
					}
				}

				for (const result of classified) {
					const curPunishment = determinePunishment('battleharassment', result, [], true).action;
					if (!curPunishment) continue;
					const exists = actions.get(id);
					if (!exists || supersedes(curPunishment, exists.action)) {
						actions.set(id, {
							action: curPunishment,
							user: toID(id),
							result: averages,
							reason: `Not following rules in battles (https://${Config.routes.client}/${url})`,
							proof: urls.join(', '),
						});
					}
				}
			}
		}
		// ensure reasons are clear
		const creatorWasPunished = actions.get(ticket.userid);
		if (creatorWasPunished) {
			const { TL } = forReporter(ticket);
			let displayReason = TL`You were punished for your behavior.`;
			if (actions.size !== 1) { // more than 1 was punished
				displayReason += ` ${TL`${actions.size - 1} other(s) were also punished.`}`;
			}
			creatorWasPunished.displayReason = displayReason;
		}

		if (actions.size) return actions;
	},
	async pmharassment(ticket) {
		const actions = new Map<string, CheckerResult>();
		const targetId = toID(ticket.text[0]);
		const creator = ticket.userid;
		if (!Config.getpmlog) return;
		const pmLog = await Config.getpmlog(targetId, creator) as {
			message: string, from: string, to: string, timestamp: string,
		}[];
		const messages: Record<string, string[]> = {};
		const ids = new Set<ID>();
		// sort messages by user who sent them, also filter out old ones
		for (const { from, message, timestamp } of pmLog) {
			// ignore pmlogs more than 24h old
			if ((Date.now() - new Date(timestamp).getTime()) > PMLOG_IGNORE_TIME) continue;
			const id = toID(from);
			ids.add(id);
			if (!messages[id]) messages[id] = [];
			messages[id].push(message);
		}
		for (const id of ids) {
			let punishment;
			const { averages, classified } = await getMessageAverages(messages[id]);
			const curPunishment = determinePunishment('pmharassment', averages, []).action;
			if (curPunishment) {
				if (!punishment || supersedes(curPunishment, punishment)) {
					punishment = curPunishment;
				}
				if (punishment) {
					actions.set(id, {
						action: punishment,
						user: id,
						result: {},
						reason: `PM harassment (against ${ticket.userid === id ? targetId : ticket.userid})`,
					});
				}
			}
			for (const result of classified) {
				const { action } = determinePunishment('pmharassment', result, [], true);
				if (!action) continue;
				const exists = actions.get(id);
				if (!exists || supersedes(action, exists.action)) {
					actions.set(id, {
						action,
						user: id,
						result: {},
						reason: `PM harassment (against ${ticket.userid === id ? targetId : ticket.userid})`,
					});
				}
			}
		}

		const creatorWasPunished = actions.get(ticket.userid);
		if (creatorWasPunished) {
			const { TL } = forReporter(ticket);
			let displayReason = `${TL`You were punished for your behavior.`} `;
			if (actions.has(targetId) && targetId !== ticket.userid) {
				displayReason += ` ${TL`The person you reported was also punished.`}`;
			}
			creatorWasPunished.displayReason = displayReason;
		}

		if (actions.size) return actions;
	},
};

export const classifier = new Artemis.LocalClassifier();

export async function runPunishments(ticket: TicketState & { text: [string, string] }, typeId: string) {
	let result: Map<string, CheckerResult> | null = null;
	if (checkers[typeId]) {
		result = await checkers[typeId](ticket) || null;
	}
	if (result) {
		if (settings.applyPunishments) {
			const responses: [string, string][] = [];
			for (const res of result.values()) {
				const curResult = await actionHandlers[res.action.toLowerCase()](res.user, res, ticket);
				if (curResult) responses.push([res.action, res.displayReason || curResult]);
				if (toID(res.user) === ticket.creator) {
					// just close the ticket here.
					closeTicket(ticket, res.displayReason);
				}
			}
			if (responses.length) {
				// if we don't have one for the user, find one.
				Utils.sortBy(responses, r => -ORDERED_PUNISHMENTS.indexOf(r[0]));
				closeTicket(ticket, responses[0][1]);
			} else {
				closeTicket(ticket); // no good response. just close it, because we __have__ dispatched an action.
			}
		} else {
			// eslint-disable-next-line require-atomic-updates
			ticket.recommended = [];
			const abuseLog = Rooms.get('abuselog');
			for (const res of result.values()) {
				abuseLog?.add(
					`|c|~|/log ${abuseLog.TL`[${ticket.type} Monitor] Recommended: ${res.action}: for ${res.user} (${res.reason})`}`
				).update();
				ticket.recommended.push(`${res.action}: for ${res.user} (${res.reason})`);
			}
		}
	}
}

export const commands: Chat.ChatCommands = {
	aht: 'autohelpticket',
	autohelpticket: {
		''() {
			return this.parse(`/help autohelpticket`);
		},
		async test(target) {
			checkAccess(this);
			target = target.trim();
			const response = await classifier.classify(target) || {};
			const escapedTarget = Utils.escapeHTML(target);
			let buf = `<strong>${this.TL`Results for "${escapedTarget}":`}</strong><br />`;
			buf += `<strong>${this.TL`Score breakdown:`}</strong><br />`;
			for (const k in response) {
				buf += `&bull; ${k}: ${response[k]}<br />`;
			}
			this.runBroadcast();
			this.sendReplyBox(buf);
		},
		ap: 'addpunishment',
		add: 'addpunishment',
		addpunishment(target, room, user) {
			checkAccess(this);
			if (!toID(target)) return this.parse(`/help autohelpticket`);
			const args = Chat.parseArguments(target);
			const punishment: Partial<AutoPunishment> = {};
			for (const [k, list] of Object.entries(args)) {
				if (k !== 'type' && list.length > 1) throw new Chat.ErrorMessage(this.TL`More than one ${k} param provided.`);
				const val = list[0]; // if key exists, val must exist too
				switch (k) {
				case 'type': case 't':
					const types = list.map(f => f.toLowerCase().replace(/\s/g, '_'));
					for (const type of types) {
						if (!Artemis.LocalClassifier.ATTRIBUTES[type]) {
							const validTypes = Object.keys(Artemis.LocalClassifier.ATTRIBUTES).join(', ');
							throw new Chat.ErrorMessage(this.TL`Invalid classifier type '${type}'. Valid types are ${validTypes}`);
						}
					}
					if (!punishment.severity) {
						punishment.severity = { certainty: 0, type: [] };
					}
					punishment.severity.type.push(...types);
					break;
				case 'certainty': case 'c':
					const num = parseFloat(val);
					if (isNaN(num) || num < 0 || num > 1) {
						throw new Chat.ErrorMessage(this.TL`Certainty must be a number below 1 and above 0.`);
					}
					if (!punishment.severity) {
						punishment.severity = { certainty: 0, type: [] };
					}
					punishment.severity.certainty = num;
					break;
				case 'modlog': case 'm':
					const count = parseInt(val);
					if (isNaN(count) || count < 0) {
						throw new Chat.ErrorMessage(this.TL`Modlog count must be a number above 0.`);
					}
					punishment.modlogCount = count;
					break;
				case 'ticket': case 'tt': case 'tickettype':
					const type = toID(val);
					if (!(type in checkers)) {
						const supportedTypes = Object.keys(checkers).join(', ');
						throw new Chat.ErrorMessage(
							this.TL`The ticket type '${type}' does not exist or is not supported.` + ' ' +
							this.TL`Supported types are ${supportedTypes}.`
						);
					}
					punishment.ticketType = type;
					break;
				case 'p': case 'punishment':
					const name = toID(val).toUpperCase();
					if (!ORDERED_PUNISHMENTS.includes(name)) {
						const supportedPunishments = ORDERED_PUNISHMENTS.join(', ');
						throw new Chat.ErrorMessage(
							this.TL`Punishment '${name}' not supported.` + ' ' +
							this.TL`Supported punishments: ${supportedPunishments}`
						);
					}
					punishment.punishment = name;
					break;
				case 'single': case 's':
					if (!this.meansYes(toID(val))) {
						throw new Chat.ErrorMessage(
							this.TL`The 'single' value must always be 'on'.` + ' ' +
							this.TL`If you don't want it enabled, just do not use this argument type.`
						);
					}
					punishment.isSingleMessage = true;
					break;
				}
			}
			if (!punishment.ticketType) {
				throw new Chat.ErrorMessage(this.TL`Must specify a ticket type to handle.`);
			}
			if (!punishment.punishment) {
				throw new Chat.ErrorMessage(this.TL`Must specify a punishment to apply.`);
			}
			if (!(punishment.severity?.certainty && punishment.severity?.type.length)) {
				throw new Chat.ErrorMessage(this.TL`A severity to monitor for must be specified (certainty).`);
			}
			for (const curP of settings.punishments) {
				let matches = 0;
				for (const k in curP) {
					if (punishment[k as keyof AutoPunishment] === curP[k as keyof AutoPunishment]) {
						matches++;
					}
				}
				if (matches === Object.keys(punishment).length) {
					throw new Chat.ErrorMessage(this.TL`That punishment is already added.`);
				}
			}
			settings.punishments.push(punishment as AutoPunishment);
			saveSettings();
			const modTL = modActionTL(this);
			this.privateGlobalModAction(
				modTL.TL`${user.name} added a ${punishment.punishment} punishment to the Artemis helpticket handler.`
			);
			this.globalModlog(`AUTOHELPTICKET ADDPUNISHMENT`, null, visualizePunishment(punishment as AutoPunishment));
		},
		dp: 'deletepunishment',
		delete: 'deletepunishment',
		deletepunishment(target, room, user) {
			checkAccess(this);
			const num = parseInt(target) - 1;
			if (isNaN(num)) return this.parse(`/h autohelpticket`);
			const punishment = settings.punishments[num];
			if (!punishment) throw new Chat.ErrorMessage(this.TL`There is no punishment at index ${num + 1}.`);
			settings.punishments.splice(num, 1);
			const modTL = modActionTL(this);
			this.privateGlobalModAction(
				modTL.TL`${user.name} removed the Artemis helpticket ${punishment.punishment} punishment indexed at ${num + 1}`
			);
			this.globalModlog(`AUTOHELPTICKET REMOVE`, null, visualizePunishment(punishment));
		},
		vp: 'viewpunishments',
		view: 'viewpunishments',
		viewpunishments() {
			checkAccess(this);
			let buf = `<strong>${this.TL`Artemis helpticket punishments`}</strong><hr />`;
			if (!settings.punishments.length) {
				buf += this.TL`None.`;
				return this.sendReplyBox(buf);
			}
			buf += settings.punishments.map(
				(curP, i) => `<strong>${i + 1}:</strong> ${visualizePunishment(curP, this.TL)}`
			).join('<br />');
			return this.sendReplyBox(buf);
		},
		togglepunishments(target, room, user) {
			checkAccess(this);
			let message;
			const modTL = modActionTL(this);
			if (this.meansYes(target)) {
				if (settings.applyPunishments) {
					throw new Chat.ErrorMessage(this.TL`Automatic punishments are already enabled.`);
				}
				settings.applyPunishments = true;
				message = modTL.TL`${user.name} enabled automatic punishments for the Artemis ticket handler`;
			} else if (this.meansNo(target)) {
				if (!settings.applyPunishments) {
					throw new Chat.ErrorMessage(this.TL`Automatic punishments are already disabled.`);
				}
				settings.applyPunishments = false;
				message = modTL.TL`${user.name} disabled automatic punishments for the Artemis ticket handler`;
			} else {
				throw new Chat.ErrorMessage(this.TL`Invalid setting. Must be 'on' or 'off'.`);
			}
			this.privateGlobalModAction(message);
			this.globalModlog(`AUTOHELPTICKET TOGGLE`, null, settings.applyPunishments ? 'on' : 'off');
			saveSettings();
		},
		stats(target) {
			if (!target) target = Chat.toTimestamp(new Date()).split(' ')[0];
			return this.parse(`/j view-autohelpticket-stats-${target}`);
		},
		logs(target) {
			if (!target) target = Chat.toTimestamp(new Date()).split(' ')[0];
			return this.parse(`/j view-autohelpticket-logs-${target}`);
		},
		resolve(target, room, user) {
			this.checkCan('lock');
			const [ticketId, result] = Utils.splitFirst(target, ',').map(toID);
			const ticket = tickets[ticketId];
			if (!ticket?.open) {
				return this.popupReply(this.TL`The user '${ticketId}' does not have a ticket open at present.`);
			}
			if (!['success', 'failure'].includes(result)) {
				return this.popupReply(this.TL`The result must be 'success' or 'failure'.`);
			}
			(ticket.state ||= {}).recommendResult = result;
			writeTickets();
			Chat.refreshPageFor(`help-text-${ticketId}`, 'staff');
		},
	},
	autohelptickethelp: [
		TLkey`/aht addpunishment [args] - Adds a punishment with the given [args]. Requires: whitelist ~`,
		TLkey`/aht deletepunishment [index] - Deletes the automatic helpticket punishment at [index]. Requires: whitelist ~`,
		TLkey`/aht viewpunishments - View automatic helpticket punishments. Requires: whitelist ~`,
		TLkey`/aht togglepunishments [on | off] - Turn [on | off] automatic helpticket punishments. Requires: whitelist ~`,
		TLkey`/aht stats - View success rates of the Artemis ticket handler. Requires: whitelist ~`,
	],
};

export const pages: Chat.PageTable = {
	autohelpticket: {
		async stats(query, user) {
			checkAccess(this);
			let month;
			if (query.length) {
				month = /[0-9]{4}-[0-9]{2}/.exec(query.join('-'))?.[0];
			} else {
				month = Chat.toTimestamp(new Date()).split(' ')[0].slice(0, -3);
			}
			if (!month) {
				throw new Chat.ErrorMessage(this.TL`Invalid month. Must be in YYYY-MM format.`);
			}

			this.title = `[${this.TL`Artemis Ticket Stats`}] ${month}`;
			this.setHTML(`<div class="pad"><h3>${this.TL`Artemis ticket stats`}</h3><hr />${this.TL`Searching...`}`);

			const found = await HelpTicket.getTextLogs(['recommendResult'], month, this.TL);
			const percent = (numerator: number, denom: number) => Math.floor((numerator / denom) * 100);

			let buf = `<div class="pad">`;
			buf += `<button style="float:right;" class="button" name="send" value="/join ${this.pageid}">`;
			buf += `<i class="fa fa-refresh"></i> ${this.TL`Refresh`}</button>`;
			buf += `<h3>${this.TL`Artemis ticket stats`}</h3><hr />`;
			const dayStats: Record<string, { successes: number, failures: number, total: number }> = {};
			const total = { successes: 0, failures: 0, total: 0 };
			const failed = [];
			for (const ticket of found) {
				const day = Chat.toTimestamp(new Date(ticket.created)).split(' ')[0];
				if (!dayStats[day]) dayStats[day] = { successes: 0, failures: 0, total: 0 };
				dayStats[day].total++;
				total.total++;
				switch (ticket.state.recommendResult) {
				case 'success':
					dayStats[day].successes++;
					total.successes++;
					break;
				case 'failure':
					dayStats[day].failures++;
					total.failures++;
					failed.push([ticket.userid, ticket.type]);
					break;
				}
			}
			buf += `<strong>${this.TL`Total:`}</strong> ${total.total}<br />`;
			buf += `<strong>${this.TL`Success rate:`}</strong> ${percent(total.successes, total.total)}% (${total.successes})<br />`;
			buf += `<strong>${this.TL`Failure rate:`}</strong> ${percent(total.failures, total.total)}% (${total.failures})<br />`;
			buf += `<strong>${this.TL`Day stats:`}</strong><br />`;
			buf += `<div class="ladder pad"><table>`;
			let header = '';
			let data = '';
			const sortedDays = Utils.sortBy(Object.keys(dayStats), d => new Date(d).getTime());
			for (const [i, day] of sortedDays.entries()) {
				const cur = dayStats[day];
				if (!cur.total) continue;
				header += `<th>${day.split('-')[2]} (${cur.total})</th>`;
				data += `<td><small>${cur.successes} (${percent(cur.successes, cur.total)}%)`;
				if (cur.failures) {
					data += ` | ${cur.failures} (${percent(cur.failures, cur.total)}%)`;
				} else { // so one cannot confuse dead tickets ~ false hit tickets
					data += ' | 0 (0%)';
				}
				data += '</small></td>';
				// i + 1 ensures it's above 0 always (0 % 5 === 0)
				if ((i + 1) % 5 === 0 && sortedDays[i + 1]) {
					buf += `<tr>${header}</tr><tr>${data}</tr>`;
					buf += `</div></table>`;
					buf += `<div class="ladder pad"><table>`;
					header = '';
					data = '';
				}
			}
			buf += `<tr>${header}</tr><tr>${data}</tr>`;
			buf += `</div></table>`;
			buf += `<br />`;
			if (failed.length) {
				buf += `<details class="readmore"><summary>${this.TL`Marked as inaccurate`}</summary>`;
				buf += failed.map(([userid, type]) => (
					`<a href="/view-help-text-${userid}">${userid}</a> (${type})`
				)).join('<br />');
				buf += `</details>`;
			}
			return buf;
		},
		async logs(query, user) {
			checkAccess(this);
			let month;
			if (query.length) {
				month = /[0-9]{4}-[0-9]{2}/.exec(query.join('-'))?.[0];
			} else {
				month = Chat.toTimestamp(new Date()).split(' ')[0].slice(0, -3);
			}
			if (!month) {
				throw new Chat.ErrorMessage(this.TL`Invalid month. Must be in YYYY-MM format.`);
			}
			this.title = `[${this.TL`Artemis Ticket Logs`}]`;
			let buf = `<div class="pad"><h3>${this.TL`Artemis ticket logs`}</h3><hr />`;
			const allHits = await HelpTicket.getTextLogs(['recommended'], month, this.TL);
			Utils.sortBy(allHits, h => -h.created);
			if (allHits.length) {
				buf += `<strong>${this.TL`All hits:`}</strong><hr />`;
				for (const hit of allHits) {
					if (!hit.recommended) continue; // ???
					buf += `<a href="/view-help-text-${hit.userid}">${hit.userid}</a> (${hit.type}) `;
					buf += `[${Chat.toTimestamp(new Date(hit.created))}]<br />`;
					buf += Utils.html`&bull; <code><small>${hit.recommended.join(', ')}</small></code><hr />`;
				}
			} else {
				buf += `<div class="message-error">${this.TL`No hits found.`}</div>`;
			}
			return buf;
		},
	},
};
