/**
 * Moderation commands
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * These are commands for staff.
 *
 * For the API, see chat-plugins/COMMANDS.md
 *
 * @license MIT
 */
import { Utils } from '../../lib';
import { TLkey, type Translator } from '../../sim/dex-text';
import { type RoomSection, RoomSections } from './room-settings';

/* eslint no-else-return: "error" */

const MAX_REASON_LENGTH = 600;
const MUTE_LENGTH = 7 * 60 * 1000;
const HOURMUTE_LENGTH = 60 * 60 * 1000;
const DAY = 24 * 60 * 60 * 1000;

/** Require reasons for punishment commands */
const REQUIRE_REASONS = true;

/**
 * Translator for text shown to everyone in `room` (mod actions, announcements): the room's
 * language, like room.TL. Without a room (PMs), only the user sees it, so `fallback` is used.
 */
function roomTL(room: Room | null | undefined, fallback: Translator = Chat.TLto(null)): Translator {
	return room ? Chat.TLto(room.settings.language || null) : fallback;
}

/** Translated name of a room section (the names are marked with TLkey in room-settings.ts) */
function sectionName(section: RoomSection, TL: Translator) {
	return TL(RoomSections.sectionNames[section] || section);
}

/**
 * Promotes a user within a room. Returns a User object if a popup should be shown to the user,
 * and null otherwise. Throws a Chat.ErrorMessage on an error.
 *
 * @param promoter the User object of the user who is promoting
 * @param room the Room in which the promotion is happening
 * @param userid the ID of the user to promote
 * @param symbol the GroupSymbol to promote to
 * @param username the username of the user to promote
 * @param force whether or not to forcibly promote
 * @param TL the translator for the error messages (defaults to the promoter's language)
 */
export function runPromote(
	promoter: User,
	room: Room,
	userid: ID,
	symbol: GroupSymbol,
	username?: string,
	force?: boolean,
	TL: Translator = promoter.TL
) {
	const targetUser = Users.getExact(userid);
	username = username || userid;
	if (!username) return;

	if (userid.length > 18) {
		throw new Chat.ErrorMessage(TL`User '${username}' does not exist (the username is too long).`);
	}
	if (!targetUser && !Users.isUsernameKnown(userid) && !force) {
		throw new Chat.ErrorMessage(TL`User '${username}' is offline and unrecognized, and so can't be promoted.`);
	}
	if (targetUser && !targetUser.registered) {
		throw new Chat.ErrorMessage(TL`User '${username}' is unregistered, and so can't be promoted.`);
	}

	let currentSymbol: GroupSymbol | 'whitelist' = room.auth.getDirect(userid);
	if (room.auth.has(userid) && currentSymbol === Users.Auth.defaultSymbol()) {
		currentSymbol = 'whitelist';
	}
	const currentGroup = Users.Auth.getGroup(currentSymbol);
	const currentGroupName = currentGroup.name || TL`regular user`;

	const nextGroup = Config.groups[symbol];

	if (currentSymbol === symbol) {
		const groupName = nextGroup?.name || symbol || TL`regular user`;
		throw new Chat.ErrorMessage(TL`User '${username}' is already a ${groupName} in this room.`);
	}
	if (!promoter.can('makeroom')) {
		if (currentGroup.id && !promoter.can(`room${currentGroup.id || 'voice'}` as 'roomvoice', null, room)) {
			throw new Chat.ErrorMessage(TL`Access denied for promoting/demoting ${username} from ${currentGroupName}.`);
		}
		if (symbol !== ' ' && !promoter.can(`room${nextGroup.id || 'voice'}` as 'roomvoice', null, room)) {
			throw new Chat.ErrorMessage(TL`Access denied for promoting/demoting ${username} to ${nextGroup.name}.`);
		}
	}
	if (targetUser?.locked && room.persist && room.settings.isPrivate !== true && nextGroup.rank > 2) {
		throw new Chat.ErrorMessage(TL`${username} is locked and can't be promoted.`);
	}

	if (symbol === Users.Auth.defaultSymbol()) {
		room.auth.delete(userid);
	} else {
		room.auth.set(userid, symbol);
	}

	if (targetUser) {
		targetUser.updateIdentity(room.roomid);
		if (room.subRooms) {
			for (const subRoom of room.subRooms.values()) {
				targetUser.updateIdentity(subRoom.roomid);
			}
		}
	}

	// Only show popup if: user is online and in the room, the room is public, and not a groupchat or a battle.
	if (targetUser && room.users[targetUser.id] && room.persist && room.settings.isPrivate !== true) {
		return targetUser;
	}
	return null;
}

export function runCrisisDemote(userid: ID) {
	const from = [];
	const section = Users.globalAuth.sectionLeaders.get(userid);
	if (section) {
		from.push(`Section Leader (${RoomSections.sectionNames[section] || section})`);
		Users.globalAuth.deleteSection(userid);
	}
	const globalGroup = Users.globalAuth.get(userid);
	if (globalGroup && globalGroup !== ' ') {
		from.push(globalGroup);
		Users.globalAuth.delete(userid);
	}
	for (const room of Rooms.global.chatRooms) {
		if (!room.settings.isPrivate && room.auth.isStaff(userid)) {
			let oldGroup: string = room.auth.getDirect(userid);
			if (oldGroup === ' ') {
				oldGroup = 'whitelist in ';
			} else {
				room.auth.set(userid, '+');
			}
			from.push(`${oldGroup}${room.roomid}`);
		}
	}
	return from;
}

Punishments.addPunishmentType({
	type: 'YEARLOCK',
	desc: TLkey`Locked for a year`, // shown by the user info commands, which can translate it with TL(desc)
	onActivate: (user, punishment) => {
		user.locked = user.id;
		Chat.punishmentfilter(user, punishment);
	},
});

export const commands: Chat.ChatCommands = {
	roomowner(target, room, user) {
		room = this.requireRoom();
		if (!room.persist) {
			return this.sendReply(this.TL`/roomowner - This room isn't designed for per-room moderation to be added`);
		}
		if (!target) return this.parse('/help roomowner');
		const { targetUser, targetUsername, rest } = this.splitUser(target, { exactName: true });
		if (rest) throw new Chat.ErrorMessage(this.TL`This command does not support specifying a reason.`);
		const userid = toID(targetUsername);

		if (!Users.isUsernameKnown(userid)) {
			throw new Chat.ErrorMessage(this.TL`User '${targetUsername}' is offline and unrecognized, and so can't be promoted.`);
		}

		this.checkCan('makeroom');
		if (room.auth.getDirect(userid) === '#') {
			throw new Chat.ErrorMessage(this.TL`${targetUsername} is already a room owner.`);
		}

		room.auth.set(userid, '#');
		const message = room.TL`${targetUsername} was appointed Room Owner by ${user.name}.`;
		if (room.settings.isPrivate === true) {
			this.addModAction(message);
			Rooms.get(`upperstaff`)?.addByUser(user, `<<${room.roomid}>> ${message}`).update();
		} else {
			this.addGlobalModAction(message);
		}
		this.modlog('ROOMOWNER', userid);
		if (targetUser) {
			targetUser.popup(targetUser.TL`You were appointed Room Owner by ${user.name} in ${room.roomid}.`);
			room.onUpdateIdentity(targetUser);
			if (room.subRooms) {
				for (const subRoom of room.subRooms.values()) {
					subRoom.onUpdateIdentity(targetUser);
				}
			}
		}
		room.saveSettings();
	},
	roomownerhelp: [TLkey`/roomowner [username] - Appoints [username] as a room owner. Requires: ~`],

	roomdemote: 'roompromote',
	forceroompromote: 'roompromote',
	forceroomdemote: 'roompromote',
	roompromote(target, room, user, connection, cmd) {
		if (!room) {
			// this command isn't marked as room-only because it's usable in PMs through /invite
			throw new Chat.ErrorMessage(this.TL`This command is only available in rooms`);
		}
		this.checkChat();
		if (!target) return this.parse('/help roompromote');

		const force = cmd.startsWith('force');
		const users = target.split(',').map(part => part.trim());
		let nextSymbol = users.pop() as GroupSymbol | 'deauth';
		if (nextSymbol === 'deauth') nextSymbol = Users.Auth.defaultSymbol();
		const nextGroup = Users.Auth.getGroup(nextSymbol);

		if (!nextSymbol) {
			throw new Chat.ErrorMessage(this.TL`Please specify a group such as /roomvoice or /roomdeauth`);
		}
		if (!Config.groups[nextSymbol]) {
			if (!force || !user.can('bypassall')) {
				const forceHint = user.can('bypassall') ?
					` ${this.TL`If you want to promote to a nonexistent group, use /forceroompromote.`}` : '';
				throw new Chat.ErrorMessage(this.TL`Group '${nextSymbol}' does not exist.` + forceHint);
			} else if (!Users.Auth.isValidSymbol(nextSymbol)) {
				// yes I know this excludes astral-plane characters and includes combining characters
				throw new Chat.ErrorMessage(this.TL`Admins can forcepromote to nonexistent groups only if they are one character long`);
			}
		}

		if (!force && (nextGroup.globalonly || (nextGroup.battleonly && !room.battle))) {
			const roomGroup = `room${nextGroup.id || nextSymbol}`;
			throw new Chat.ErrorMessage(this.TL`Group '${roomGroup}' does not exist as a room rank.`);
		}
		// English group name for the modlog; shown names translate the "regular user" fallback
		const nextGroupName = nextGroup.name || "regular user";
		const groupNameFor = (TL: Translator) => nextGroup.name || TL`regular user`;
		const roomGroupName = groupNameFor(roomTL(room));

		for (const toPromote of users) {
			const userid = toID(toPromote);
			if (!userid) return this.parse('/help roompromote');

			// weird ts bug (?) - 7022
			// it implicitly is 'any' because it has no annotation and is "is referenced directly or indirectly in its own initializer."
			// dunno why this happens, but for now we can just cast over it.
			let oldSymbol: GroupSymbol | 'whitelist' = room.auth.getDirect(userid);
			if (room.auth.has(userid) && oldSymbol === Users.Auth.defaultSymbol()) {
				oldSymbol = 'whitelist';
			}

			let shouldPopup;
			try {
				shouldPopup = runPromote(user, room, userid, nextSymbol, toPromote, force, this.TL);
			} catch (err: any) {
				if (err.name?.endsWith('ErrorMessage')) {
					this.errorReply(err.message);
					continue;
				}
				throw err;
			}
			const targetUser = Users.getExact(userid);
			const name = targetUser?.name || toPromote;
			const userGroupName = targetUser ? groupNameFor(targetUser.TL) : roomGroupName;

			if (this.pmTarget && targetUser) {
				const text = room.TL`${targetUser.name} was invited (and promoted to Room ${roomGroupName}) by ${user.name}.`;
				room.add(`|c|${user.getIdentity(room)}|/log ${text}`).update();
				this.modlog('INVITE', targetUser, null, { noip: 1, noalts: 1 });
			} else if (
				nextSymbol in Config.groups && oldSymbol in Config.groups &&
				nextGroup.rank < Config.groups[oldSymbol].rank
			) {
				if (targetUser && room.users[targetUser.id] && !nextGroup.modlog) {
					// if the user can't see the demotion message (i.e. rank < %), it is shown in the chat
					targetUser.send(`>${room.roomid}\n(${targetUser.TL`You were demoted to Room ${userGroupName} by ${user.name}.`})`);
				}
				this.privateModAction(room.TL`${name} was demoted to Room ${roomGroupName} by ${user.name}.`);
				this.modlog(`ROOM${nextGroupName.toUpperCase()}`, userid, '(demote)');
				if (shouldPopup) {
					shouldPopup.popup(shouldPopup.TL`You were demoted to Room ${userGroupName} by ${user.name} in ${room.roomid}.`);
				}
			} else if (nextSymbol === '#') {
				this.addModAction(room.TL`${name} was promoted to ${roomGroupName} by ${user.name}.`);
				const logRoom = Rooms.get(room.settings.isPrivate === true ? 'upperstaff' : 'staff');
				if (logRoom) {
					logRoom.addByUser(user, `<<${room.roomid}>> ${logRoom.TL`${name} was appointed Room Owner by ${user.name}.`}`);
				}
				this.modlog('ROOM OWNER', userid);
				if (shouldPopup) {
					shouldPopup.popup(shouldPopup.TL`You were promoted to ${userGroupName} by ${user.name} in ${room.roomid}.`);
				}
			} else {
				this.addModAction(room.TL`${name} was promoted to Room ${roomGroupName} by ${user.name}.`);
				this.modlog(`ROOM${nextGroupName.toUpperCase()}`, userid);
				if (shouldPopup) {
					shouldPopup.popup(shouldPopup.TL`You were promoted to Room ${userGroupName} by ${user.name} in ${room.roomid}.`);
				}
			}

			if (targetUser) {
				targetUser.updateIdentity(room.roomid);
				if (room.subRooms) {
					for (const subRoom of room.subRooms.values()) {
						targetUser.updateIdentity(subRoom.roomid);
					}
				}
				if (targetUser.trusted && !Users.isTrusted(targetUser.id)) {
					targetUser.trusted = '';
				}
			}
		}
		room.saveSettings();
	},
	roompromotehelp: [
		TLkey`/roompromote OR /roomdemote [comma-separated usernames], [group symbol] - Promotes/demotes the user(s) to the specified room rank. Requires: @ # ~`,
		TLkey`/room[group] [comma-separated usernames] - Promotes/demotes the user(s) to the specified room rank. Requires: @ # ~`,
		TLkey`/roomdeauth [comma-separated usernames] - Removes all room rank from the user(s). Requires: @ # ~`,
	],

	auth: 'authority',
	stafflist: 'authority',
	globalauth: 'authority',
	authlist: 'authority',
	authority(target, room, user, connection) {
		if (target && target !== '+') {
			const targetRoom = Rooms.search(target);
			const availableRoom = targetRoom?.checkModjoin(user);
			if (targetRoom && availableRoom) return this.parse(`/roomauth1 ${target}`);
			return this.parse(`/userauth ${target}`);
		}
		const showAll = !!target;
		const rankLists: { [k: string]: string[] } = {};
		for (const [id, symbol] of Users.globalAuth) {
			if (symbol === ' ' || (symbol === '+' && !showAll)) continue;
			if (!rankLists[symbol]) rankLists[symbol] = [];
			rankLists[symbol].push(Users.globalAuth.usernames.get(id) || id);
		}

		const buffer = Utils.sortBy(
			Object.entries(rankLists) as [GroupSymbol, string[]][],
			([symbol]) => -Users.Auth.getGroup(symbol).rank
		).map(
			([symbol, names]) => (
				`${(Config.groups[symbol] ? `**${Config.groups[symbol].name}s** (${symbol})` : symbol)}:\n` +
				Utils.sortBy(names, name => toID(name)).join(", ")
			)
		);
		if (!showAll) buffer.push(`(${this.TL`Use \`\`/auth +\`\` to show global voice users.`})`);

		if (!buffer.length) return connection.popup(this.TL`This server has no global authority.`);
		connection.popup(buffer.join("\n\n"));
	},
	authhelp: [
		TLkey`/auth - Show global staff for the server.`,
		TLkey`/auth + - Show global staff for the server, including voices.`,
		TLkey`/auth [room] - Show what roomauth a room has.`,
		TLkey`/auth [user] - Show what global and roomauth a user has.`,
	],

	roomstaff: 'roomauth',
	roomauth1: 'roomauth',
	roomauth(target, room, user, connection, cmd) {
		let userLookup = '';
		if (cmd === 'roomauth1') userLookup = `\n\n${this.TL`To look up auth for a user, use /userauth ${target}`}`;
		let targetRoom = room;
		if (target) targetRoom = Rooms.search(target)!;
		if (!targetRoom?.checkModjoin(user)) {
			throw new Chat.ErrorMessage(this.TL`The room "${target}" does not exist.`);
		}
		const showAll = user.can('mute', null, targetRoom);

		const rankLists: { [groupSymbol: string]: ID[] } = {};
		for (const [id, rank] of targetRoom.auth) {
			if (rank === ' ' && !showAll) continue;
			if (!rankLists[rank]) rankLists[rank] = [];
			rankLists[rank].push(id);
		}

		const buffer = Utils.sortBy(
			Object.entries(rankLists) as [GroupSymbol, ID[]][],
			([symbol]) => -Users.Auth.getGroup(symbol).rank
		).map(([symbol, names]) => {
			let group = Config.groups[symbol] ? `${Config.groups[symbol].name}s (${symbol})` : symbol;
			if (symbol === ' ') group = this.TL`Whitelisted (this list is only visible to staff)`;
			return `${group}:\n` +
				Utils.sortBy(names).map(userid => {
					const isOnline = Users.get(userid)?.statusType === 'online';
					// targetRoom guaranteed to exist above
					return userid in targetRoom.users && isOnline ? `**${userid}**` : userid;
				}).join(', ');
		});

		let curRoom = targetRoom;
		while (curRoom.parent) {
			const modjoinSetting = curRoom.settings.modjoin === true ? curRoom.settings.modchat : curRoom.settings.modjoin;
			if (curRoom.parent) {
				// the same values are named twice, since placeholder names must be unique in a TL string
				const subroomTitle = curRoom.title;
				const parentTitle = curRoom.parent.title;
				const parentUsersTitle = parentTitle;
				const minRank = modjoinSetting;
				const also = buffer.length !== 0;
				if (modjoinSetting) {
					buffer.push(also ?
						this.TL`${subroomTitle} is a modjoin ${modjoinSetting} subroom of ${parentTitle}, so ${parentUsersTitle} users of rank ${minRank} and above also have authority in this room.` :
						this.TL`${subroomTitle} is a modjoin ${modjoinSetting} subroom of ${parentTitle}, so ${parentUsersTitle} users of rank ${minRank} and above have authority in this room.`);
				} else {
					buffer.push(also ?
						this.TL`${subroomTitle} is a subroom of ${parentTitle}, so ${parentUsersTitle} users also have authority in this room.` :
						this.TL`${subroomTitle} is a subroom of ${parentTitle}, so ${parentUsersTitle} users have authority in this room.`);
				}
			}
			curRoom = curRoom.parent;
		}
		if (!buffer.length) {
			connection.popup(`${this.TL`The room '${targetRoom.title}' has no auth.`} ${userLookup}`);
			return;
		}
		if (!curRoom.settings.isPrivate) {
			buffer.push(this.TL`${curRoom.title} is a public room, so global auth with no relevant roomauth will have authority in this room.`);
		} else if (curRoom.settings.isPrivate === 'hidden' || curRoom.settings.isPrivate === 'voice') {
			buffer.push(this.TL`${curRoom.title} is a hidden room, so global auth with no relevant roomauth will have authority in this room.`);
		}
		buffer.push(this.TL`Names in **bold** are online.`);
		if (targetRoom !== room) buffer.unshift(this.TL`${targetRoom.title} room auth:`);
		connection.popup(`${buffer.join("\n\n")}${userLookup}`);
	},
	roomauthhelp: [
		TLkey`/roomauth [room] - Shows a list of the staff and authority in the given [room].`,
		TLkey`If no room is given, it defaults to the current room.`,
	],

	userauth(target, room, user, connection) {
		const targetId = toID(target) || user.id;
		const targetUser = Users.getExact(targetId);
		const targetUsername = targetUser?.name || target;

		const buffer = [];
		let innerBuffer = [];
		const group = Users.globalAuth.get(targetId);
		if (group !== ' ' || Users.isTrusted(targetId)) {
			const globalGroup = group === ' ' ? this.TL`trusted` : group;
			buffer.push(this.TL`Global auth: ${globalGroup}`);
		}
		const sectionLeader = Users.globalAuth.sectionLeaders.get(targetId);
		if (sectionLeader) {
			const leaderSection = sectionName(sectionLeader, this.TL);
			buffer.push(this.TL`Section leader: ${leaderSection}`);
		}
		for (const curRoom of Rooms.rooms.values()) {
			if (curRoom.settings.isPrivate) continue;
			if (!curRoom.auth.has(targetId)) continue;
			innerBuffer.push(curRoom.auth.getDirect(targetId).trim() + curRoom.roomid);
		}
		if (innerBuffer.length) {
			const roomAuthList = innerBuffer.join(', ');
			buffer.push(this.TL`Room auth: ${roomAuthList}`);
		}
		if (targetId === user.id || user.can('lock')) {
			innerBuffer = [];
			for (const curRoom of Rooms.rooms.values()) {
				if (!curRoom.settings.isPrivate) continue;
				if (curRoom.settings.isPrivate === true) continue;
				if (!curRoom.auth.has(targetId)) continue;
				innerBuffer.push(curRoom.auth.getDirect(targetId).trim() + curRoom.roomid);
			}
			if (innerBuffer.length) {
				const hiddenRoomAuthList = innerBuffer.join(', ');
				buffer.push(this.TL`Hidden room auth: ${hiddenRoomAuthList}`);
			}
		}
		if (targetId === user.id || user.can('makeroom')) {
			innerBuffer = [];
			for (const chatRoom of Rooms.global.chatRooms) {
				if (!chatRoom.settings.isPrivate) continue;
				if (chatRoom.settings.isPrivate !== true) continue;
				if (!chatRoom.auth.has(targetId)) continue;
				innerBuffer.push(chatRoom.auth.getDirect(targetId).trim() + chatRoom.roomid);
			}
			if (innerBuffer.length) {
				const privateRoomAuthList = innerBuffer.join(', ');
				buffer.push(this.TL`Private room auth: ${privateRoomAuthList}`);
			}
		}
		if (!buffer.length) {
			buffer.push(this.TL`No global or room auth.`);
		}

		buffer.unshift(this.TL`${targetUsername} user auth:`);
		connection.popup(buffer.join("\n\n"));
	},
	userauthhelp: [
		TLkey`/userauth [username] - Shows all authority visible to the user for the given [username].`,
		TLkey`If no username is given, it defaults to the current user.`,
	],

	sectionleaders(target, room, user, connection) {
		const usernames = Users.globalAuth.usernames;
		const buffer = [];
		const sections: { [k in RoomSection]: Set<string> } = Object.create(null);
		for (const [id, username] of usernames) {
			const sectionid = Users.globalAuth.sectionLeaders.get(id);
			if (!sectionid) continue;
			if (!sections[sectionid]) sections[sectionid] = new Set();
			sections[sectionid].add(username);
		}
		let sectionid: RoomSection;
		for (sectionid in sections) {
			if (!sections[sectionid].size) continue;
			buffer.push(`**${sectionName(sectionid, this.TL)}**:\n` + Utils.sortBy([...sections[sectionid]]).join(', '));
		}
		if (!buffer.length) throw new Chat.ErrorMessage(this.TL`There are no Section Leaders currently.`);
		connection.popup(buffer.join(`\n\n`));
	},
	sectionleadershelp: [
		TLkey`/sectionleaders - Shows the current room sections and their section leaders.`,
	],

	async autojoin(target, room, user, connection) {
		const targets = target.split(',').filter(Boolean);
		if (targets.length > 16 || connection.inRooms.size > 1) {
			return connection.popup(this.TL`To prevent DoS attacks, you can only use /autojoin for 16 or fewer rooms, when you haven't joined any rooms yet. Please use /join for each room separately.`);
		}
		Rooms.global.autojoinRooms(user, connection);
		const autojoins: string[] = [];

		const promises = targets.map(
			roomid => user.tryJoinRoom(roomid as RoomID, connection).then(ret => {
				if (ret === Rooms.RETRY_AFTER_LOGIN) {
					autojoins.push(roomid);
				}
			})
		);

		await Promise.all(promises);
		// eslint-disable-next-line require-atomic-updates
		connection.autojoins = autojoins.join(',');
	},
	autojoinhelp: [TLkey`/autojoin [rooms] - Automatically joins all the given rooms.`],

	joim: 'join',
	j: 'join',
	async join(target, room, user, connection) {
		target = target.trim();
		if (!target) return this.parse('/help join');
		if (target.startsWith('http://')) target = target.slice(7);
		if (target.startsWith('https://')) target = target.slice(8);
		if (target.startsWith(`${Config.routes.client}/`)) target = target.slice(Config.routes.client.length + 1);
		if (target.startsWith(`${Config.routes.replays}/`)) target = `battle-${target.slice(Config.routes.replays.length + 1)}`;
		if (target.startsWith('psim.us/')) target = target.slice(8);
		// isn't in tryJoinRoom so you can still join your own battles / gameRooms etc
		const numRooms = [...Rooms.rooms.values()].filter(r => user.id in r.users).length;
		if (!user.can('altsself') && !target.startsWith('view-') && numRooms >= 50) {
			return connection.sendTo(target as RoomID, `|noinit||${this.TL`You can only join 50 rooms at a time.`}`);
		}
		const ret = await user.tryJoinRoom(target as RoomID, connection);
		if (ret === Rooms.RETRY_AFTER_LOGIN) {
			connection.sendTo(
				target as RoomID,
				`|noinit|namerequired|${this.TL`The room '${target}' does not exist or requires a login to join.`}`
			);
		}
	},
	joinhelp: [TLkey`/join [roomname] - Attempt to join the room [roomname].`],

	leave: 'part',
	part(target, room, user, connection) {
		const targetRoom = target ? Rooms.search(target) : room;
		if (!targetRoom) {
			if (target.startsWith('view-')) {
				connection.openPages?.delete(target.slice(5));
				if (!connection.openPages?.size) connection.openPages = null;
				if (target.startsWith('view-bot-')) {
					const [botId, pageId] = target.slice('view-bot-'.length).split('-');
					const bot = Users.get(botId);
					if (bot) bot.sendTo(null, `|pm|${user.getIdentity()}|${botId}||closepage|${user.name}|${pageId}`);
				}
				Chat.handleRoomClose(target as RoomID, user, connection);
				return;
			}
			throw new Chat.ErrorMessage(this.TL`The room '${target}' does not exist.`);
		}
		Chat.handleRoomClose(targetRoom.roomid, user, connection);
		user.leaveRoom(targetRoom, connection);
	},
	leavehelp: [TLkey`/leave - Leave the current room, or a given room.`],

	/*********************************************************
	 * Moderating: Punishments
	 *********************************************************/

	kick: 'warn',
	k: 'warn',
	warn(target, room, user) {
		if (!target) return this.parse('/help warn');
		this.checkChat();
		if (room?.settings.isPersonal && !user.can('warn' as any)) {
			throw new Chat.ErrorMessage(this.TL`Warning is unavailable in group chats.`);
		}
		// If used in pms, staff, help tickets or battles, log the warn to the global modlog.
		const globalWarn = (
			!room || ['staff', 'adminlog'].includes(room.roomid) ||
			room.roomid.startsWith('help-') || (room.battle && (!room.parent || room.parent.type !== 'chat'))
		);

		const { targetUser, inputUsername, targetUsername, rest: reason } = this.splitUser(target);
		const targetID = toID(targetUsername);
		const { privateReason, publicReason } = this.parseSpoiler(reason);

		const saveReplay = globalWarn && room?.battle;
		const TL = roomTL(room, this.TL);
		const reasonText = publicReason ? ` (${publicReason})` : ``;
		if (!targetUser?.connected) {
			if (!globalWarn) throw new Chat.ErrorMessage(this.TL`User '${targetUsername}' not found.`);
			if (room) {
				this.checkCan('warn', null, room);
			} else {
				this.checkCan('lock');
			}

			this.addGlobalModAction(
				TL`${targetID} was warned by ${user.name} while offline.${reasonText}`
			);
			this.globalModlog('WARN OFFLINE', targetUser || targetID, privateReason);
			Punishments.offlineWarns.set(targetID, publicReason);
			if (saveReplay) this.parse('/savereplay forpunishment');
			return;
		}
		if (!globalWarn && !(targetUser.id in room.users)) {
			throw new Chat.ErrorMessage(this.TL`User ${targetUsername} is not in the room ${room.roomid}.`);
		}
		if (publicReason.length > MAX_REASON_LENGTH) {
			throw new Chat.ErrorMessage(this.TL`The reason is too long. It cannot exceed ${MAX_REASON_LENGTH} characters.`);
		}
		if (room) {
			this.checkCan('warn', targetUser, room);
		} else {
			this.checkCan('lock', targetUser);
		}
		if (targetUser.can('makeroom')) throw new Chat.ErrorMessage(this.TL`You are not allowed to warn upper staff members.`);

		const now = Date.now();
		const timeout = now - targetUser.lastWarnedAt;
		if (timeout < 15 * 1000) {
			const remainder = (15 - (timeout / 1000)).toFixed(2);
			throw new Chat.ErrorMessage(this.TL`You must wait ${remainder} more seconds before you can warn ${targetUser.name} again.`);
		}

		const logMessage = TL`${targetUser.name} was warned by ${user.name}.${reasonText}`;
		if (globalWarn) {
			this.addGlobalModAction(logMessage);
			this.globalModlog('WARN', targetUser, privateReason);
		} else {
			this.addModAction(logMessage);
			this.modlog('WARN', targetUser, privateReason, { noalts: 1 });
		}
		targetUser.send(`|c|~|/warn ${publicReason}`);

		const userid = targetUser.getLastId();

		if (room) {
			this.add(`|hidelines|unlink|${userid}`);
			if (userid !== toID(inputUsername)) this.add(`|hidelines|unlink|${toID(inputUsername)}`);
		}

		targetUser.lastWarnedAt = now;

		// Automatically upload replays as evidence/reference to the punishment
		if (saveReplay) this.parse('/savereplay forpunishment');
		return true;
	},
	warnhelp: [
		TLkey`/warn OR /k [username], [reason] - Warns a user showing them the site rules and [reason] in an overlay.`,
		TLkey`/warn OR /k [username], [reason] spoiler: [private reason] - Warns a user, marking [private reason] only in the modlog.`,
		TLkey`Requires: % @ # ~`,
	],

	redirect: 'redir',
	redir(target, room, user, connection) {
		room = this.requireRoom();
		if (!target) return this.parse('/help redirect');
		if (room.settings.isPrivate || room.settings.isPersonal) {
			throw new Chat.ErrorMessage(this.TL`Users cannot be redirected from private or personal rooms.`);
		}
		const { targetUser, targetUsername, rest: targetRoomid } = this.splitUser(target);
		const targetRoom = Rooms.search(targetRoomid);
		if (!targetRoom || targetRoom.settings.modjoin || targetRoom.settings.staffRoom) {
			throw new Chat.ErrorMessage(this.TL`The room "${targetRoomid}" does not exist.`);
		}
		this.checkCan('warn', targetUser, room);
		this.checkCan('warn', targetUser, targetRoom);

		if (!user.can('rangeban', targetUser)) {
			throw new Chat.ErrorMessage(this.TL`Redirects have been deprecated. Instead of /redirect, use <<room links>> or /invite to guide users to the correct room, and punish if users don't cooperate.`);
		}

		if (!targetUser?.connected) {
			throw new Chat.ErrorMessage(this.TL`User ${targetUsername} not found.`);
		}
		if (targetRoom.roomid === "global") {
			throw new Chat.ErrorMessage(this.TL`Users cannot be redirected to the global room.`);
		}
		if (targetRoom.settings.isPrivate || targetRoom.settings.isPersonal) {
			throw new Chat.ErrorMessage(this.TL`The room "${targetRoom.title}" is not public.`);
		}
		if (targetUser.inRooms.has(targetRoom.roomid)) {
			throw new Chat.ErrorMessage(this.TL`User ${targetUser.name} is already in the room ${targetRoom.title}!`);
		}
		if (!targetUser.inRooms.has(room.roomid)) {
			throw new Chat.ErrorMessage(this.TL`User ${targetUsername} is not in the room ${room.roomid}.`);
		}
		targetUser.leaveRoom(room.roomid);
		targetUser.popup(targetUser.TL`You are in the wrong room; please go to <<${targetRoom.roomid}>> instead`);
		this.addModAction(room.TL`${targetUser.name} was redirected to room ${targetRoom.title} by ${user.name}.`);
		this.modlog('REDIRECT', targetUser, `to ${targetRoom.title}`, { noip: 1, noalts: 1 });
		targetUser.leaveRoom(room);
	},
	redirhelp: [
		TLkey`/redirect OR /redir [username], [roomname] - [DEPRECATED]`,
		TLkey`Attempts to redirect the [username] to the [roomname]. Requires: ~`,
	],

	m: 'mute',
	mute(target, room, user, connection, cmd) {
		room = this.requireRoom();
		if (!target) return this.parse('/help mute');
		this.checkChat();

		const { targetUser, inputUsername, targetUsername, rest: reason } = this.splitUser(target);
		if (!targetUser) throw new Chat.ErrorMessage(this.TL`User '${targetUsername}' not found.`);
		if (reason.length > MAX_REASON_LENGTH) {
			throw new Chat.ErrorMessage(this.TL`The reason is too long. It cannot exceed ${MAX_REASON_LENGTH} characters.`);
		}
		const { publicReason, privateReason } = this.parseSpoiler(reason);

		const muteDuration = ((cmd === 'hm' || cmd === 'hourmute') ? HOURMUTE_LENGTH : MUTE_LENGTH);
		this.checkCan('mute', targetUser, room);
		if (targetUser.can('makeroom')) throw new Chat.ErrorMessage(this.TL`You are not allowed to mute upper staff members.`);
		const canBeMutedFurther = ((room.getMuteTime(targetUser) || 0) <= (muteDuration * 5 / 6));
		if (targetUser.locked ||
			(room.isMuted(targetUser) && !canBeMutedFurther) ||
			Punishments.isRoomBanned(targetUser, room.roomid)) {
			const reasonText = reason ? ` (${publicReason})` : '';
			let message;
			if (targetUser.locked) {
				message = room.TL`${targetUser.name} would be muted by ${user.name}  but was already locked.${reasonText}`;
			} else if (room.isMuted(targetUser)) {
				message = room.TL`${targetUser.name} would be muted by ${user.name}  but was already muted.${reasonText}`;
			} else {
				message = room.TL`${targetUser.name} would be muted by ${user.name}  but was already room banned.${reasonText}`;
			}
			if (!reason) {
				return this.privateModAction(message);
			}
			return this.addModAction(message);
		}

		// whole sentences for each duration, so that translations don't depend on the English duration string
		const isHourMute = muteDuration === HOURMUTE_LENGTH;
		if (targetUser.id in room.users) {
			targetUser.popup(`|modal|${isHourMute ?
				targetUser.TL`${user.name} has muted you in ${room.roomid} for 1 hour. ${publicReason}` :
				targetUser.TL`${user.name} has muted you in ${room.roomid} for 7 minutes. ${publicReason}`}`);
		}
		const muteReasonText = publicReason ? ` (${publicReason})` : ``;
		this.addModAction(isHourMute ?
			room.TL`${targetUser.name} was muted by ${user.name} for 1 hour.${muteReasonText}` :
			room.TL`${targetUser.name} was muted by ${user.name} for 7 minutes.${muteReasonText}`);
		this.modlog(`${cmd.includes('h') ? 'HOUR' : ''}MUTE`, targetUser, privateReason);
		this.update(); // force an update so the (hide lines from x user) message is on the mod action above

		const ids = [targetUser.getLastId()];
		if (ids[0] !== toID(inputUsername)) {
			ids.push(toID(inputUsername));
		}
		room.hideText(ids);

		if (targetUser.autoconfirmed && targetUser.autoconfirmed !== targetUser.id) {
			const displayMessage = room.TL`${targetUser.name}'s ac account: ${targetUser.autoconfirmed}`;
			this.privateModAction(displayMessage);
		}

		Chat.runHandlers('onPunishUser', 'MUTE', user, room);
		room.mute(targetUser, muteDuration);
	},
	mutehelp: [TLkey`/mute OR /m [username], [reason] - Mutes a user with reason for 7 minutes. Requires: % @ # ~`],

	hm: 'hourmute',
	hourmute(target) {
		if (!target) return this.parse('/help hourmute');
		this.run('mute');
	},
	hourmutehelp: [TLkey`/hourmute OR /hm [username], [reason] - Mutes a user with reason for an hour. Requires: % @ # ~`],

	um: 'unmute',
	unmute(target, room, user) {
		room = this.requireRoom();
		if (!target) return this.parse('/help unmute');
		const { targetUser, targetUsername, rest } = this.splitUser(target);
		if (rest) throw new Chat.ErrorMessage(this.TL`This command does not support specifying a reason.`);
		this.checkChat();
		this.checkCan('mute', null, room);

		// the notice is only shown to the unmuted user, if online
		const unmuteNotice = targetUser ?
			targetUser.TL`Your mute in '${room.title}' has been lifted.` :
			room.TL`Your mute in '${room.title}' has been lifted.`;
		const successfullyUnmuted = room.unmute(
			targetUser?.id || toID(targetUsername), unmuteNotice
		);

		if (successfullyUnmuted) {
			const unmutedName = targetUser ? targetUser.name : successfullyUnmuted;
			this.addModAction(room.TL`${unmutedName} was unmuted by ${user.name}.`);
			this.modlog('UNMUTE', (targetUser || successfullyUnmuted), null, { noip: 1, noalts: 1 });
		} else {
			const notMutedName = targetUser ? targetUser.name : targetUsername;
			throw new Chat.ErrorMessage(this.TL`${notMutedName} is not muted.`);
		}
	},
	unmutehelp: [TLkey`/unmute [username] - Removes mute from user. Requires: % @ # ~`],

	rb: 'ban',
	weekban: 'ban',
	wb: 'ban',
	wrb: 'ban',
	forceroomban: 'ban',
	forceweekban: 'ban',
	weekroomban: 'ban',
	forcerb: 'ban',
	roomban: 'ban',
	b: 'ban',
	ban(target, room, user, connection, cmd) {
		room = this.requireRoom();
		if (!target) return this.parse('/help ban');
		this.checkChat();
		const week = ['wrb', 'wb'].includes(cmd) || cmd.includes('week');

		const { targetUser, inputUsername, targetUsername, rest: reason } = this.splitUser(target);
		const { publicReason, privateReason } = this.parseSpoiler(reason);
		if (!targetUser) throw new Chat.ErrorMessage(this.TL`User '${targetUsername}' not found.`);
		if (reason.length > MAX_REASON_LENGTH) {
			throw new Chat.ErrorMessage(this.TL`The reason is too long. It cannot exceed ${MAX_REASON_LENGTH} characters.`);
		}
		this.checkCan('ban', targetUser, room);
		if (targetUser.can('makeroom')) throw new Chat.ErrorMessage(this.TL`You are not allowed to ban upper staff members.`);
		if (Punishments.hasRoomPunishType(room, toID(targetUsername), 'BLACKLIST')) {
			throw new Chat.ErrorMessage(this.TL`This user is already blacklisted from ${room.roomid}.`);
		}
		const name = targetUser.getLastName();
		const userid = targetUser.getLastId();
		const force = cmd.startsWith('force');
		if (targetUser.trusted) {
			if (!force) {
				const forceCommand = `/force${week ? 'week' : 'room'}ban`;
				return this.sendReply(
					this.TL`${name} is a trusted user. If you are sure you would like to ban them, use ${forceCommand}.`
				);
			}
		} else if (force) {
			const banCommand = `/${week ? 'week' : 'room'}ban`;
			throw new Chat.ErrorMessage(this.TL`Use ${banCommand}; ${name} is not a trusted user.`);
		}
		if (!reason && !week && Punishments.isRoomBanned(targetUser, room.roomid)) {
			return this.privateModAction(room.TL`${name} would be banned by ${user.name}  but was already banned.`);
		}

		if (targetUser.trusted && room.settings.isPrivate !== true && !room.settings.isPersonal) {
			const TL = roomTL(Rooms.get('staff')); // shown in the staff room
			const trustedID = targetUser.trusted !== targetUser.id ? ` (${targetUser.trusted})` : ``;
			Monitor.log(`[CrisisMonitor] ${TL`Trusted user ${targetUser.name} ${trustedID} was roombanned from ${room.roomid} by ${user.name}, and should probably be demoted.`}`);
		}

		if (targetUser.id in room.users || user.can('lock')) {
			const TL = targetUser.TL;
			const bannerName = Utils.escapeHTML(user.name);
			let banText;
			if (room.subRooms) {
				banText = week ?
					TL`${bannerName} has banned you from the room ${room.roomid}  and its subrooms for 1 week.` :
					TL`${bannerName} has banned you from the room ${room.roomid}  and its subrooms for 2 days.`;
			} else {
				banText = week ?
					TL`${bannerName} has banned you from the room ${room.roomid}  for 1 week.` :
					TL`${bannerName} has banned you from the room ${room.roomid}  for 2 days.`;
			}
			const reasonHTML = Utils.escapeHTML(publicReason);
			targetUser.popup(
				`|modal||html|<p>${banText}</p>${(publicReason ? `<p>${TL`Reason: ${reasonHTML}`}</p>` : ``)}` +
				(room.persist ?
					`<p>${TL`To appeal the ban, PM the staff member that banned you or a room owner.`} </p>` +
					`<p><button name="send" value="/roomauth ${room.roomid}">${TL`List Room Staff`}</button></p>` :
					`<p>${TL`To appeal the ban, PM the staff member that banned you.`}</p>`)
			);
		}

		const reasonText = publicReason ? ` (${publicReason})` : ``;
		this.addModAction(week ?
			room.TL`${name} was banned for 1 week from ${room.title} by ${user.name}.${reasonText}` :
			room.TL`${name} was banned for 2 days from ${room.title} by ${user.name}.${reasonText}`);

		const time = week ? Date.now() + 7 * 24 * 60 * 60 * 1000 : null;
		const affected = Punishments.roomBan(room, targetUser, time, null, privateReason);

		for (const u of affected) Chat.runHandlers('onPunishUser', 'ROOMBAN', u, room);
		if (!room.settings.isPrivate && room.persist) {
			const acAccount = (targetUser.autoconfirmed !== userid && targetUser.autoconfirmed);
			let displayMessage = '';
			if (affected.length > 1) {
				const alts = affected.slice(1).map(curUser => curUser.getLastName()).join(", ");
				displayMessage = acAccount ?
					room.TL`${name}'s  ac account: ${acAccount},  banned alts: ${alts}` :
					room.TL`${name}'s  banned alts: ${alts}`;
				this.privateModAction(displayMessage);
			} else if (acAccount) {
				displayMessage = room.TL`${name}'s ac account: ${acAccount}`;
				this.privateModAction(displayMessage);
			}
		}
		room.hideText([
			...affected.map(u => u.id),
			toID(inputUsername),
		]);

		if (room.settings.isPrivate !== true && room.persist) {
			this.globalModlog(`${week ? 'WEEK' : ''}ROOMBAN`, targetUser, privateReason);
		} else {
			this.modlog(`${week ? 'WEEK' : ''}ROOMBAN`, targetUser, privateReason);
		}
		return true;
	},
	banhelp: [
		TLkey`/ban [username], [reason] - Bans the user from the room you are in. Requires: @ # ~`,
		TLkey`/weekban [username], [reason] - Bans the user from the room you are in for a week. Requires: @ # ~`,
	],

	unroomban: 'unban',
	roomunban: 'unban',
	unban(target, room, user, connection) {
		room = this.requireRoom();
		if (!target) return this.parse('/help unban');
		this.checkCan('ban', null, room);

		const name = Punishments.roomUnban(room, target);

		if (name) {
			this.addModAction(room.TL`${name} was unbanned from ${room.title} by ${user.name}.`);
			if (room.settings.isPrivate !== true && room.persist) {
				this.globalModlog("UNROOMBAN", name);
			}
		} else {
			throw new Chat.ErrorMessage(this.TL`User '${target}' is not banned from this room.`);
		}
	},
	unbanhelp: [TLkey`/unban [username] - Unbans the user from the room you are in. Requires: @ # ~`],

	forcelock: 'lock',
	forceweeklock: 'lock',
	forcemonthlock: 'lock',
	l: 'lock',
	ipmute: 'lock',
	wl: 'lock',
	weeklock: 'lock',
	monthlock: 'lock',
	async lock(target, room, user, connection, cmd) {
		const week = cmd === 'wl' || cmd.includes('week');
		const month = cmd.includes('month');
		const force = cmd.includes('force');

		if (!target) {
			if (week) return this.parse('/help weeklock');
			return this.parse('/help lock');
		}

		const { targetUser, inputUsername, targetUsername, rest: reason } = this.splitUser(target);
		let userid: ID = toID(targetUsername);
		const TL = roomTL(room, this.TL);
		const forceCommand = `/force${month ? 'month' : (week ? 'week' : '')}lock`;

		if (!targetUser && !Punishments.search(userid).length && !force) {
			throw new Chat.ErrorMessage(
				this.TL`User '${targetUsername}' not found. Use \`\`${forceCommand}\`\` if you need to to lock them anyway.`
			);
		}
		if (reason.length > MAX_REASON_LENGTH) {
			throw new Chat.ErrorMessage(this.TL`The reason is too long. It cannot exceed ${MAX_REASON_LENGTH} characters.`);
		}
		this.checkCan('lock', userid);
		if (month) this.checkCan('rangeban');

		let name;

		if (targetUser) {
			name = targetUser.getLastName();
			userid = targetUser.getLastId();

			if (targetUser.locked && !targetUser.locked.startsWith('#') && !week && !month) {
				return this.privateModAction(TL`${name} would be locked by ${user.name} but was already locked.`);
			}
		} else {
			name = targetUsername;
			userid = toID(targetUsername);
		}

		if (Users.isTrusted(userid)) {
			if (force) {
				const from = runCrisisDemote(userid);
				const staff = { TL: roomTL(Rooms.get('staff')) }; // shown in the staff room (TL is already the room's translator)
				const demotedFrom = from.join(", ");
				Monitor.log(`[CrisisMonitor] ${staff.TL`${name} was locked by ${user.name} and demoted from ${demotedFrom}.`}`);
				this.globalModlog("CRISISDEMOTE", targetUser, ` from ${from.join(", ")}`);
			} else {
				return this.sendReply(this.TL`${name} is a trusted user. If you are sure you would like to lock them use ${forceCommand}.`);
			}
		} else if (force && targetUser) {
			throw new Chat.ErrorMessage(this.TL`Use /lock; ${name} is not a trusted user and is online.`);
		}

		const { privateReason, publicReason } = this.parseSpoiler(reason);

		// Use default time for locks.
		const duration = week ? Date.now() + 7 * 24 * 60 * 60 * 1000 : (month ? Date.now() + 30 * 24 * 60 * 60 * 1000 : null);
		let affected = [];

		if (targetUser) {
			const ignoreAlts = Punishments.isSharedIp(targetUser.latestIp);
			affected = await Punishments.lock(targetUser, duration, null, ignoreAlts, publicReason);
		} else {
			affected = await Punishments.lock(userid, duration, null, false, publicReason);
		}

		for (const u of affected) Chat.runHandlers('onPunishUser', 'LOCK', u, room);
		this.globalModlog(
			(force ? `FORCE` : ``) + (week ? "WEEKLOCK" : (month ? "MONTHLOCK" : "LOCK")), targetUser || userid, privateReason
		);

		const reasonText = publicReason ? ` (${publicReason})` : "";
		let lockMessage;
		if (week) {
			lockMessage = TL`${name} was locked from talking for a week by ${user.name}.${reasonText}`;
		} else if (month) {
			lockMessage = TL`${name} was locked from talking for a month by ${user.name}.${reasonText}`;
		} else {
			lockMessage = TL`${name} was locked from talking by ${user.name}.${reasonText}`;
		}
		this.addGlobalModAction(lockMessage);

		if (room && !room.settings.isHelp) {
			room.hideText([
				...affected.map(u => u.id),
				toID(inputUsername),
			]);
		}

		const acAccount = (targetUser && targetUser.autoconfirmed !== userid && targetUser.autoconfirmed);
		let displayMessage = '';
		if (affected.length > 1) {
			const alts = affected.slice(1).map((curUser: User) => curUser.getLastName()).join(", ");
			displayMessage = acAccount ?
				TL`${name}'s  ac account: ${acAccount},  locked alts: ${alts}` :
				TL`${name}'s  locked alts: ${alts}`;
			this.privateModAction(displayMessage);
		} else if (acAccount) {
			displayMessage = TL`${name}'s ac account: ${acAccount}`;
			this.privateModAction(displayMessage);
		}

		if (targetUser) {
			const lockerName = user.name;
			let message = `|popup||html|`;
			if (week) {
				message += targetUser.TL`${lockerName} has locked you from talking in chats, battles, and PMing regular users for a week`;
			} else if (month) {
				message += targetUser.TL`${lockerName} has locked you from talking in chats, battles, and PMing regular users for a month`;
			} else {
				message += targetUser.TL`${lockerName} has locked you from talking in chats, battles, and PMing regular users`;
			}
			if (publicReason) message += `\n\n${targetUser.TL`Reason: ${publicReason}`}`;

			if (Chat.pages.help) {
				const appealButton = `<a href="view-help-request--appeal"><button class="button"><strong>${targetUser.TL`Appeal your punishment`}</strong></button></a>`;
				message += `\n\n${targetUser.TL`If you feel that your lock was unjustified, you can ${appealButton}.`}`;
			} else if (Config.appealurl) {
				const appealLink = `<a href="${Config.appealurl}">${Config.appealurl}</a>`;
				message += `\n\n${targetUser.TL`If you feel that your lock was unjustified, you can appeal: ${appealLink}.`}`;
			}
			message += `\n\n${targetUser.TL`Your lock will expire in a few days.`}`;
			targetUser.send(message);

			const roomauth = Rooms.global.destroyPersonalRooms(userid);
			if (roomauth.length) {
				const staff = { TL: roomTL(Rooms.get('staff')) }; // shown in the staff room (TL is already the room's translator)
				const roomauthList = roomauth.join(', ');
				Monitor.log(`[CrisisMonitor] ${staff.TL`Locked user ${name} has public roomauth (${roomauthList}), and should probably be demoted.`}`);
			}
		}

		// Automatically upload replays as evidence/reference to the punishment
		if (room?.battle) this.parse('/savereplay forpunishment');
		return true;
	},
	lockhelp: [
		TLkey`/lock OR /l [username], [reason] - Locks the user from talking in all chats. Requires: % @ ~`,
		TLkey`/weeklock OR /wl [username], [reason] - Same as /lock, but locks users for a week.`,
		TLkey`/lock OR /l [username], [reason] spoiler: [private reason] - Marks [private reason] in modlog only.`,
	],

	unlock(target, room, user) {
		if (!target) return this.parse('/help unlock');
		this.checkCan('lock');

		const targetUser = Users.get(target);
		if (targetUser?.namelocked) {
			throw new Chat.ErrorMessage(this.TL`User ${targetUser.name} is namelocked, not locked. Use /unnamelock to unnamelock them.`);
		}
		let reason = '';
		if (targetUser?.locked && targetUser.locked.startsWith('#')) {
			reason = ` (${targetUser.locked})`;
		}

		const unlocked = Punishments.unlock(target);

		if (unlocked) {
			const TL = roomTL(room, this.TL);
			const unlockedNames = unlocked.join(", ");
			this.addGlobalModAction(unlocked.length > 1 ?
				TL`${unlockedNames} were unlocked by ${user.name}.${reason}` :
				TL`${unlockedNames} was unlocked by ${user.name}.${reason}`);
			if (!reason) this.globalModlog("UNLOCK", toID(target));
			if (targetUser) targetUser.popup(targetUser.TL`${user.name} has unlocked you.`);
		} else {
			throw new Chat.ErrorMessage(this.TL`User '${target}' is not locked.`);
		}
	},
	unlockname(target, room, user) {
		if (!target) return this.parse('/help unlock');
		this.checkCan('lock');

		const userid = toID(target);
		if (userid.startsWith('guest')) {
			throw new Chat.ErrorMessage(this.TL`You cannot unlock the guest userid - provide their original username instead.`);
		}
		const punishment = Punishments.userids.getByType(userid, 'LOCK') || Punishments.userids.getByType(userid, 'NAMELOCK');
		if (!punishment) throw new Chat.ErrorMessage(this.TL`This name isn't locked.`);
		if (punishment.id === userid || Users.get(userid)?.previousIDs.includes(punishment.id as ID)) {
			throw new Chat.ErrorMessage(this.TL`"${userid}" was specifically locked by a staff member (check the global modlog). Use /unlock if you really want to unlock this name.`);
		}
		Punishments.userids.delete(userid);
		Punishments.savePunishments();

		for (const curUser of Users.findUsers([userid], [])) {
			const locked = Punishments.hasPunishType(curUser.id, ['LOCK', 'NAMELOCK'], curUser.latestIp);
			if (curUser.locked && !curUser.locked.startsWith('#') && !locked) {
				curUser.locked = null;
				curUser.namelocked = null;
				curUser.destroyPunishmentTimer();
				curUser.updateIdentity();
			}
		}

		const TL = roomTL(room, this.TL);
		this.addGlobalModAction(TL`The name '${target}' was unlocked by ${user.name}.`);
		this.globalModlog("UNLOCKNAME", userid);
	},
	unrangelock: 'unlockip',
	rangeunlock: 'unlockip',
	unlockip(target, room, user) {
		target = target.trim();
		if (!target) return this.parse('/help unlock');
		this.checkCan('globalban');
		const range = target.endsWith('*');
		if (range) this.checkCan('rangeban');

		if (!(range ? IPTools.ipRangeRegex : IPTools.ipRegex).test(target)) {
			throw new Chat.ErrorMessage(this.TL`Please enter a valid IP address.`);
		}

		const punishment = Punishments.ips.get(target);
		if (!punishment) throw new Chat.ErrorMessage(this.TL`${target} is not a locked/banned IP or IP range.`);

		Punishments.ips.delete(target);
		Punishments.savePunishments();

		for (const curUser of Users.findUsers([], [target])) {
			if (
				(range ? curUser.locked === '#rangelock' : !curUser.locked?.startsWith('#')) &&
				!Punishments.getPunishType(curUser.id)
			) {
				curUser.locked = null;
				if (curUser.namelocked) {
					curUser.namelocked = null;
					curUser.resetName();
				}
				curUser.destroyPunishmentTimer();
				curUser.updateIdentity();
			}
		}

		const TL = roomTL(room, this.TL);
		this.privateGlobalModAction(range ?
			TL`${user.name} unlocked the IP range: ${target}` :
			TL`${user.name} unlocked the IP: ${target}`);
		this.globalModlog(`UNLOCK${range ? 'RANGE' : 'IP'}`, null, null, target);
	},
	unlockiphelp: [TLkey`/unlockip [ip] - Unlocks a punished ip while leaving the original punishment intact. Requires: @ ~`],
	unlocknamehelp: [TLkey`/unlockname [name] - Unlocks a punished alt, leaving the original lock intact. Requires: % @ ~`],
	unlockhelp: [
		TLkey`/unlock [username] - Unlocks the user. Requires: % @ ~`,
		TLkey`/unlockname [username] - Unlocks a punished alt while leaving the original punishment intact. Requires: % @ ~`,
		TLkey`/unlockip [ip] - Unlocks a punished ip while leaving the original punishment intact. Requires: @ ~`,
	],

	forceglobalban: 'globalban',
	gban: 'globalban',
	async globalban(target, room, user, connection, cmd) {
		if (!target) return this.parse('/help globalban');
		const force = cmd.includes('force');

		const { targetUser, inputUsername, targetUsername, rest: reason } = this.splitUser(target);
		let userid: ID = toID(targetUsername);

		if (!targetUser && !force) {
			throw new Chat.ErrorMessage(this.TL`User '${targetUsername}' not found. Use /forceglobalban to ban them anyway.`);
		}
		if (reason.length > MAX_REASON_LENGTH) {
			throw new Chat.ErrorMessage(this.TL`The reason is too long. It cannot exceed ${MAX_REASON_LENGTH} characters.`);
		}
		if (!reason && REQUIRE_REASONS) {
			throw new Chat.ErrorMessage(this.TL`Global bans require a reason.`);
		}
		this.checkCan('globalban', targetUser);
		let name;

		if (targetUser) {
			name = targetUser.getLastName();
			userid = targetUser.getLastId();
		} else {
			name = targetUsername;
		}

		if (Users.isTrusted(userid)) {
			if (force) {
				const from = runCrisisDemote(userid);
				const TL = roomTL(Rooms.get('staff')); // shown in the staff room
				const demotedFrom = from?.join(", ");
				Monitor.log(`[CrisisMonitor] ${TL`${name} was globally banned by ${user.name} and demoted from ${demotedFrom}.`}`);
				this.globalModlog("CRISISDEMOTE", targetUser, ` from ${from?.join(", ")}`);
			} else {
				return this.sendReply(this.TL`${name} is a trusted user. If you are sure you would like to ban them use /forceglobalban.`);
			}
		}

		const roomauth = Rooms.global.destroyPersonalRooms(userid);
		if (roomauth.length) {
			const TL = roomTL(Rooms.get('staff')); // shown in the staff room
			const roomauthList = roomauth.join(', ');
			Monitor.log(`[CrisisMonitor] ${TL`Globally banned user ${name} has public roomauth (${roomauthList}), and should probably be demoted.`}`);
		}
		const { privateReason, publicReason } = this.parseSpoiler(reason);
		if (targetUser) {
			const TL = targetUser.TL;
			targetUser.popup(
				`|modal|${TL`${user.name} has globally banned you.`}${(publicReason ? `\n\n${TL`Reason: ${publicReason}`}` : ``)} ` +
				`${(Config.appealurl ? `\n\n${TL`If you feel that your ban was unjustified, you can appeal:`}\n${Config.appealurl}` : ``)}` +
				`\n\n${TL`Your ban will expire in a few days.`}`
			);
		}

		const TL = roomTL(room, this.TL);
		const reasonText = publicReason ? ` (${publicReason})` : ``;
		this.addGlobalModAction(TL`${name} was globally banned by ${user.name}.${reasonText}`);

		const affected = await Punishments.ban(userid, null, null, false, publicReason);
		for (const u of affected) Chat.runHandlers('onPunishUser', 'BAN', u, room);
		const acAccount = (targetUser && targetUser.autoconfirmed !== userid && targetUser.autoconfirmed);
		let displayMessage = '';
		if (affected.length > 1) {
			let guests = affected.length - 1;
			const affectedAlts = affected.slice(1)
				.map(curUser => curUser.getLastName())
				.filter(alt => !alt.startsWith('[Guest '));
			guests -= affectedAlts.length;
			const alts = affectedAlts.join(", ");
			displayMessage = acAccount ?
				TL`${name}'s ac account: ${acAccount},  banned alts: ${alts}` :
				TL`${name}'s  banned alts: ${alts}`;
			displayMessage += ` ${(guests ? ` ${TL`[${guests} guests]`}` : ``)}`;
			this.privateModAction(displayMessage);
			for (const id of affectedAlts) {
				this.add(`|hidelines|unlink|${toID(id)}`);
			}
		} else if (acAccount) {
			displayMessage = TL`${name}'s ac account: ${acAccount}`;
			this.privateModAction(displayMessage);
		}

		room?.hideText([
			...affected.map(u => u.id),
			toID(inputUsername),
		]);

		this.globalModlog(`${force ? `FORCE` : ''}BAN`, targetUser, privateReason);
		return true;
	},
	globalbanhelp: [
		TLkey`/globalban OR /gban [username], [reason] - Kick user from all rooms and ban user's IP address with reason. Requires: @ ~`,
		TLkey`/globalban OR /gban [username], [reason] spoiler: [private reason] - Marks [private reason] in modlog only.`,
	],

	globalunban: 'unglobalban',
	unglobalban(target, room, user) {
		if (!target) return this.parse(`/help unglobalban`);
		this.checkCan('globalban');

		const name = Punishments.unban(target);

		if (!name) {
			throw new Chat.ErrorMessage(this.TL`User '${target}' is not globally banned.`);
		}

		const TL = roomTL(room, this.TL);
		this.addGlobalModAction(TL`${name} was globally unbanned by ${user.name}.`);
		this.globalModlog("UNBAN", target);
	},
	unglobalbanhelp: [TLkey`/unglobalban [username] - Unban a user. Requires: @ ~`],

	deroomvoiceall(target, room, user) {
		room = this.requireRoom();
		this.checkCan('editroom', null, room);
		if (!room.auth.size) throw new Chat.ErrorMessage(this.TL`Room does not have roomauth.`);
		if (!target) {
			user.lastCommand = '/deroomvoiceall';
			throw new Chat.ErrorMessage([this.TL`THIS WILL DEROOMVOICE ALL ROOMVOICED USERS.`,
				this.TL`To confirm, use: /deroomvoiceall confirm`]);
		}
		if (user.lastCommand !== '/deroomvoiceall' || target !== 'confirm') {
			return this.parse('/help deroomvoiceall');
		}
		user.lastCommand = '';
		let count = 0;
		for (const [userid, symbol] of room.auth) {
			if (symbol === '+') {
				room.auth.delete(userid);
				if (userid in room.users) room.users[userid].updateIdentity(room.roomid);
				count++;
			}
		}
		if (!count) {
			return this.sendReply(`(${this.TL`This room has zero roomvoices`})`);
		}
		room.saveSettings();
		this.addModAction(room.TL`All ${count} roomvoices have been cleared by ${user.name}.`);
		this.modlog('DEROOMVOICEALL');
	},
	deroomvoiceallhelp: [TLkey`/deroomvoiceall - Devoice all roomvoiced users. Requires: # ~`],

	// this is a separate command for two reasons
	// a - yearticketban is preferred over /ht yearban
	// b - it would be messy to switch
	//   from both Punishments.punishRange and #punish in /ht ban
	//   since this takes ips / userids
	async yearticketban(target, room, user) {
		this.checkCan('rangeban');
		target = target.trim();
		let reason = '';
		[target, reason] = this.splitOne(target);
		let isIP = false;
		let descriptor: 'ip' | 'iprange' | '' = '';
		if (IPTools.ipRangeRegex.test(target)) {
			isIP = true;
			if (IPTools.ipRegex.test(target)) {
				descriptor = 'ip';
			} else {
				descriptor = 'iprange';
			}
		} else {
			target = toID(target);
		}
		if (!target) return this.parse(`/help yearticketban`);
		const expireTime = Date.now() + 365 * 24 * 60 * 60 * 1000;
		if (isIP) {
			Punishments.punishRange(target, reason, expireTime, 'TICKETBAN');
		} else {
			await Punishments.punish(target as ID, {
				type: 'TICKETBAN',
				id: target as ID,
				expireTime,
				reason,
				rest: [],
			}, true);
		}
		const TL = roomTL(room, this.TL);
		const reasonText = reason ? ` (${reason})` : "";
		let message;
		if (descriptor === 'ip') {
			message = TL`${user.name} banned the IP ${target} from opening tickets for a year${reasonText}`;
		} else if (descriptor === 'iprange') {
			message = TL`${user.name} banned the IP range ${target} from opening tickets for a year${reasonText}`;
		} else {
			message = TL`${user.name} banned ${target} from opening tickets for a year${reasonText}`;
		}
		this.addGlobalModAction(message);
		this.globalModlog(
			'YEARTICKETBAN',
			isIP ? null : target,
			reason,
			isIP ? target : undefined
		);
	},
	yearticketbanhelp: [
		TLkey`/yearticketban [IP/userid] - Ban an IP or a userid from opening tickets for a year. `,
		TLkey`Accepts wildcards to ban ranges. Requires: ~`,
	],

	rangeban: 'banip',
	yearbanip: 'banip',
	banip(target, room, user, connection, cmd) {
		const [ip, reason] = this.splitOne(target);
		if (!ip || !/^[0-9.]+(?:\.\*)?$/.test(ip)) return this.parse('/help banip');
		if (!reason) throw new Chat.ErrorMessage(this.TL`/banip requires a ban reason`);

		this.checkCan('rangeban');
		const isRange = ip.endsWith('*');

		const year = cmd.startsWith('year');
		const time = year ? Date.now() + 365 * 24 * 60 * 60 * 1000 : null;

		const curPunishment = Punishments.ipSearch(ip, 'BAN');
		if (curPunishment?.type === 'BAN' && !time) {
			throw new Chat.ErrorMessage(isRange ?
				this.TL`The IP range ${ip} is already temporarily banned.` :
				this.TL`The IP ${ip} is already temporarily banned.`);
		}
		Punishments.punishRange(ip, reason, time, 'BAN');

		if (!this.room || this.room.roomid !== 'staff') {
			let reply;
			if (year) {
				reply = isRange ? this.TL`You year-banned the IP range ${ip}.` : this.TL`You year-banned the IP ${ip}.`;
			} else {
				reply = isRange ? this.TL`You hour-banned the IP range ${ip}.` : this.TL`You hour-banned the IP ${ip}.`;
			}
			this.sendReply(reply);
		}
		this.room = Rooms.get('staff') || null;
		const TL = roomTL(this.room, this.TL);
		let message;
		if (year) {
			message = isRange ?
				TL`${user.name} year-banned the IP range ${ip}: ${reason}` :
				TL`${user.name} year-banned the IP ${ip}: ${reason}`;
		} else {
			message = isRange ?
				TL`${user.name} hour-banned the IP range ${ip}: ${reason}` :
				TL`${user.name} hour-banned the IP ${ip}: ${reason}`;
		}
		this.addGlobalModAction(message);
		this.globalModlog(
			`${year ? "YEAR" : ""}RANGEBAN`,
			null,
			`${ip.endsWith('*') ? ip : `[${ip}]`}: ${reason}`
		);
	},
	baniphelp: [
		TLkey`/banip [ip] OR /yearbanip [ip] - Globally bans this IP or IP range for an hour. Accepts wildcards to ban ranges.`,
		TLkey`Existing users on the IP will not be banned. Requires: ~`,
	],

	unrangeban: 'unbanip',
	unbanip(target, room, user) {
		target = target.trim();
		if (!target) {
			return this.parse('/help unbanip');
		}
		this.checkCan('rangeban');
		if (!Punishments.ips.has(target)) {
			throw new Chat.ErrorMessage(this.TL`${target} is not a locked/banned IP or IP range.`);
		}
		Punishments.ips.delete(target);

		const TL = roomTL(room, this.TL);
		this.addGlobalModAction(target.endsWith('*') ?
			TL`${user.name} unbanned the IP range: ${target}` :
			TL`${user.name} unbanned the IP: ${target}`);
		this.modlog('UNRANGEBAN', null, target);
	},
	unbaniphelp: [TLkey`/unbanip [ip] - Unbans. Accepts wildcards to ban ranges. Requires: ~`],

	forceyearlockname: 'yearlockname',
	yearlockid: 'yearlockname',
	forceyearlockid: 'yearlockname',
	yearlockuserid: 'yearlockname',
	forceyearlockuserid: 'yearlockname',
	yearlockname(target, room, user) {
		this.checkCan('rangeban');
		const [targetUsername, rest] = Utils.splitFirst(target, ',').map(k => k.trim());
		const targetUser = Users.get(targetUsername);
		const targetUserid = toID(targetUsername);
		if (!targetUserid || targetUserid.length > 18) {
			throw new Chat.ErrorMessage(this.TL`Invalid userid.`);
		}
		const force = this.cmd.includes('force');
		if (targetUser?.registered && !force) {
			throw new Chat.ErrorMessage(this.TL`That user is registered. Either permalock them normally or use /forceyearlockname.`);
		}
		const punishment = {
			type: 'YEARLOCK',
			id: targetUserid,
			expireTime: Date.now() + 365 * 24 * 60 * 60 * 1000,
			reason: rest || "",
		};
		Punishments.userids.add(targetUserid, punishment);
		Punishments.savePunishments();
		const TL = roomTL(room, this.TL);
		const reasonText = rest ? ` (${rest})` : '';
		this.addGlobalModAction(TL`${user.name} locked the userid '${targetUserid}' for a year${reasonText}.`);
		this.globalModlog(`${force ? `FORCE` : ''}YEARLOCKNAME`, targetUserid, rest);
		if (targetUser) {
			Chat.punishmentfilter(targetUser, punishment);
			targetUser.locked = targetUserid;
		}
	},
	rangelock: 'lockip',
	yearlockip: 'lockip',
	yearnamelockip: 'lockip',
	lockip(target, room, user, connection, cmd) {
		const [ip, reason] = this.splitOne(target);
		if (!ip || !/^[0-9.]+(?:\.\*)?$/.test(ip)) return this.parse('/help lockip');
		if (!reason) throw new Chat.ErrorMessage(this.TL`/lockip requires a lock reason`);

		this.checkCan('rangeban');
		const isRange = ip.endsWith('*');

		const year = cmd.startsWith('year');
		const curPunishment = Punishments.byWeight(Punishments.ipSearch(ip) || [])[0];
		if (!year && curPunishment && (curPunishment.type === 'BAN' || curPunishment.type === 'LOCK')) {
			let error;
			if (curPunishment.type === 'BAN') {
				error = isRange ?
					this.TL`The IP range ${ip} is already temporarily banned.` : this.TL`The IP ${ip} is already temporarily banned.`;
			} else {
				error = isRange ?
					this.TL`The IP range ${ip} is already temporarily locked.` : this.TL`The IP ${ip} is already temporarily locked.`;
			}
			throw new Chat.ErrorMessage(error);
		}

		const time = year ? Date.now() + 365 * 24 * 60 * 60 * 1000 : null;
		const type = cmd.includes('name') ? 'NAMELOCK' : 'LOCK';
		Punishments.punishRange(ip, reason, time, type);

		const TL = roomTL(room, this.TL);
		let message;
		if (type === 'NAMELOCK' && year) {
			message = isRange ?
				TL`${user.name} year-namelocked the IP range ${ip}: ${reason}` : TL`${user.name} year-namelocked the IP ${ip}: ${reason}`;
		} else if (type === 'NAMELOCK') {
			message = isRange ?
				TL`${user.name} hour-namelocked the IP range ${ip}: ${reason}` : TL`${user.name} hour-namelocked the IP ${ip}: ${reason}`;
		} else if (year) {
			message = isRange ?
				TL`${user.name} year-locked the IP range ${ip}: ${reason}` : TL`${user.name} year-locked the IP ${ip}: ${reason}`;
		} else {
			message = isRange ?
				TL`${user.name} hour-locked the IP range ${ip}: ${reason}` : TL`${user.name} hour-locked the IP ${ip}: ${reason}`;
		}
		this.addGlobalModAction(message);
		this.globalModlog(
			`${year ? 'YEAR' : 'RANGE'}${type}`,
			null,
			`${ip.endsWith('*') ? ip : `[${ip}]`}: ${reason}`,
			ip.endsWith('*') ? `${ip.slice(0, -2)}` : ip
		);
	},
	lockiphelp: [
		TLkey`/lockip [ip] - Globally locks this IP or IP range for an hour. Accepts wildcards to ban ranges.`,
		TLkey`/yearlockip [ip] - Globally locks this IP or IP range for one year. Accepts wildcards to ban ranges.`,
		TLkey`/yearnamelockip [ip] - Namelocks this IP or IP range for one year. Accepts wildcards to ban ranges.`,
		TLkey`Existing users on the IP will not be banned. Requires: ~`,
	],

	/*********************************************************
	 * Moderating: Other
	 *********************************************************/

	mn: 'modnote',
	modnote(target, room, user, connection) {
		room = this.requireRoom();
		if (!target) return this.parse('/help modnote');
		this.checkChat();

		if (target.length > MAX_REASON_LENGTH) {
			throw new Chat.ErrorMessage(this.TL`The note is too long. It cannot exceed ${MAX_REASON_LENGTH} characters.`);
		}
		this.checkCan('receiveauthmessages', null, room);
		target = target.replace(/\n/g, "; ");
		let targeted = /\[([^\]]+)\]/.exec(target)?.[1] || null;
		if (!targeted) {
			// allow `name, note` and `name - note` syntax
			targeted = target.split(/[,-]/)[0]?.trim() || "";
			if (!targeted || !(
				Users.get(targeted) || Punishments.search(target).length || IPTools.ipRegex.test(targeted)
			) || toID(targeted) === toID(target)) {
				targeted = null;
			}
		}
		let targetUserid, targetIP;

		if (targeted) {
			if (IPTools.ipRegex.test(targeted)) {
				targetIP = targeted;
			} else {
				targetUserid = toID(targeted);
			}
		}
		if (
			['staff', 'upperstaff'].includes(room.roomid) ||
			(Rooms.Modlog.getSharedID(room.roomid) && user.can('modlog'))
		) {
			this.globalModlog('NOTE', targetUserid || null, target, targetIP);
		} else {
			this.modlog('NOTE', targetUserid || null, target);
		}

		this.privateModAction(room.TL`${user.name} notes: ${target}`);
	},
	modnotehelp: [
		TLkey`/modnote <note> - Adds a moderator note that can be read through modlog. Requires: % @ # ~`,
		TLkey`/modnote [<userid>] <note> - Adds a moderator note to a user's modlog that can be read through modlog. Requires: % @ # ~`,
	],

	globalpromote: 'promote',
	promote(target, room, user, connection, cmd) {
		if (!target) return this.parse('/help promote');

		const { targetUser, targetUsername, rest: nextGroupName } = this.splitUser(target, { exactName: true });
		const userid = toID(targetUsername);
		const name = targetUser?.name || targetUsername;

		if (!userid) return this.parse('/help promote');

		const currentGroup = targetUser?.tempGroup || Users.globalAuth.get(userid);
		let nextGroup = nextGroupName as GroupSymbol;
		if (nextGroupName === 'deauth') nextGroup = Users.Auth.defaultSymbol();
		if (!nextGroup) {
			throw new Chat.ErrorMessage(this.TL`Please specify a group such as /globalvoice or /globaldeauth`);
		}
		if (!Config.groups[nextGroup]) {
			throw new Chat.ErrorMessage(this.TL`Group '${nextGroup}' does not exist.`);
		}
		if (!cmd.startsWith('global')) {
			let groupid = Config.groups[nextGroup].id;
			if (!groupid && nextGroup === Users.Auth.defaultSymbol()) groupid = 'deauth' as ID;
			const globalCommand = `/global${groupid}`;
			const roomCommand = `/room${groupid}`;
			if (Config.groups[nextGroup].globalonly) throw new Chat.ErrorMessage(this.TL`Did you mean "${globalCommand}"?`);
			if (Config.groups[nextGroup].roomonly) throw new Chat.ErrorMessage(this.TL`Did you mean "${roomCommand}"?`);
			throw new Chat.ErrorMessage(this.TL`Did you mean "${roomCommand}" or "${globalCommand}"?`);
		}
		if (Config.groups[nextGroup].roomonly || Config.groups[nextGroup].battleonly) {
			throw new Chat.ErrorMessage(this.TL`Group '${nextGroup}' does not exist as a global rank.`);
		}

		// English group name for the modlog; shown names translate the "regular user" fallback
		const groupName = Config.groups[nextGroup].name || "regular user";
		const groupNameFor = (TL: Translator) => Config.groups[nextGroup].name || TL`regular user`;
		const shownGroupName = groupNameFor(this.TL);
		const command = `/${cmd}`;
		if (currentGroup === nextGroup) {
			throw new Chat.ErrorMessage(this.TL`User '${name}' is already a ${shownGroupName}`);
		}
		if (!Users.Auth.hasPermission(user, 'promote', currentGroup)) {
			const jurisdiction = Users.Auth.listJurisdiction(user, 'promote');
			throw new Chat.ErrorMessage([this.TL`${command} - Access denied for promoting from ${currentGroup}`,
				this.TL`You can only promote to/from: ${jurisdiction}`]);
		}
		if (!Users.Auth.hasPermission(user, 'promote', nextGroup)) {
			const jurisdiction = Users.Auth.listJurisdiction(user, 'promote');
			throw new Chat.ErrorMessage([this.TL`${command} - Access denied for promoting to ${shownGroupName}`,
				this.TL`You can only promote to/from: ${jurisdiction}`]);
		}

		if (!Users.isUsernameKnown(userid)) {
			throw new Chat.ErrorMessage(this.TL`/globalpromote - WARNING: '${name}' is offline and unrecognized. The username might be misspelled (either by you or the person who told you) or unregistered. Use /forcepromote if you're sure you want to risk it.`);
		}
		if (targetUser && !targetUser.registered) {
			throw new Chat.ErrorMessage(this.TL`User '${name}' is unregistered, and so can't be promoted.`);
		}
		if (nextGroup === Users.Auth.defaultSymbol()) {
			Users.globalAuth.delete(targetUser ? targetUser.id : userid);
		} else {
			Users.globalAuth.set(targetUser ? targetUser.id : userid, nextGroup);
		}
		const TL = roomTL(room, this.TL);
		const roomGroupName = groupNameFor(TL);
		const userGroupName = targetUser ? groupNameFor(targetUser.TL) : roomGroupName;
		if (Users.Auth.getGroup(nextGroup).rank < Users.Auth.getGroup(currentGroup).rank) {
			this.privateGlobalModAction(TL`${name} was demoted to Global ${roomGroupName} by ${user.name}.`);
			this.globalModlog(`GLOBAL ${groupName.toUpperCase()}`, userid, `(demote)`);
			if (targetUser) targetUser.popup(targetUser.TL`You were demoted to Global ${userGroupName} by ${user.name}.`);
		} else {
			this.addGlobalModAction(TL`${name} was promoted to Global ${roomGroupName} by ${user.name}.`);
			this.globalModlog(`GLOBAL ${groupName.toUpperCase()}`, userid);
			if (targetUser) targetUser.popup(targetUser.TL`You were promoted to Global ${userGroupName} by ${user.name}.`);
		}

		if (targetUser) {
			targetUser.updateIdentity();
			Rooms.global.checkAutojoin(targetUser);
			if (targetUser.trusted && !Users.isTrusted(targetUser.id)) {
				targetUser.trusted = '';
			}
		}
	},
	promotehelp: [TLkey`/promote [username], [group] - Promotes the user to the specified group. Requires: ~`],

	untrustuser: 'trustuser',
	unconfirmuser: 'trustuser',
	confirmuser: 'trustuser',
	forceconfirmuser: 'trustuser',
	forcetrustuser: 'trustuser',
	trustuser(target, room, user, connection, cmd) {
		if (!target) return this.parse('/help trustuser');
		this.checkCan('promote');

		const force = cmd.includes('force');
		const untrust = cmd.includes('un');
		const { targetUser, targetUsername, rest } = this.splitUser(target, { exactName: true });
		if (rest) throw new Chat.ErrorMessage(this.TL`This command does not support specifying a reason.`);
		const userid = toID(targetUsername);
		const name = targetUser?.name || targetUsername;

		const currentGroup = Users.globalAuth.get(userid);
		const TL = roomTL(room, this.TL);

		if (untrust) {
			if (currentGroup !== Users.Auth.defaultSymbol()) {
				throw new Chat.ErrorMessage(this.TL`User '${name}' is trusted indirectly through global rank ${currentGroup}. Demote them from that rank to remove trusted status.`);
			}
			const trustedSourceRooms = Rooms.global.chatRooms
				.filter(authRoom => authRoom.persist && authRoom.settings.isPrivate !== true && authRoom.auth.isStaff(userid))
				.map(authRoom => authRoom.auth.get(userid) + authRoom.roomid).join(' ');
			if (trustedSourceRooms.length && !Users.globalAuth.has(userid)) {
				throw new Chat.ErrorMessage(this.TL`User '${name}' is trusted indirectly through room ranks ${trustedSourceRooms}. Demote them from those ranks to remove trusted status.`);
			}
			if (!Users.globalAuth.has(userid)) throw new Chat.ErrorMessage(this.TL`User '${name}' is not trusted.`);

			if (targetUser) {
				targetUser.setGroup(Users.Auth.defaultSymbol());
			} else {
				Users.globalAuth.delete(userid);
			}

			this.privateGlobalModAction(TL`${name} was set to no longer be a trusted user by ${user.name}.`);
			this.globalModlog('UNTRUSTUSER', userid);
		} else {
			const forceCommand = `/force${cmd}`;
			if (!targetUser && !force) {
				throw new Chat.ErrorMessage(this.TL`User '${name}' is offline. Use ${forceCommand} if you're sure.`);
			}
			if (currentGroup) {
				if (Users.globalAuth.has(userid)) {
					if (currentGroup === Users.Auth.defaultSymbol()) {
						throw new Chat.ErrorMessage(this.TL`User '${name}' is already trusted.`);
					}
					throw new Chat.ErrorMessage(this.TL`User '${name}' has a global rank higher than trusted.`);
				}
			}
			if (targetUser) {
				targetUser.setGroup(Users.Auth.defaultSymbol(), true);
			} else {
				Users.globalAuth.set(userid, Users.Auth.defaultSymbol());
			}

			this.privateGlobalModAction(TL`${name} was set as a trusted user by ${user.name}.`);
			this.globalModlog('TRUSTUSER', userid);
		}
	},
	trustuserhelp: [
		TLkey`/trustuser [username] - Trusts the user (makes them immune to locks). Requires: ~`,
		TLkey`/untrustuser [username] - Removes the trusted user status from the user. Requires: ~`,
	],

	desectionleader: 'sectionleader',
	sectionleader(target, room, user, connection, cmd) {
		this.checkCan('gdeclare');
		room = this.requireRoom();
		const demoting = cmd === 'desectionleader';
		if (!target || (target.split(',').length < 2 && !demoting)) return this.parse(`/help sectionleader`);

		const { targetUser, targetUsername, rest: sectionid } = this.splitUser(target, { exactName: true });
		const userid = toID(targetUsername);
		const section = demoting ? Users.globalAuth.sectionLeaders.get(userid)! : room.validateSection(sectionid);
		const name = targetUser ? targetUser.name : targetUsername;
		if (Users.globalAuth.sectionLeaders.has(targetUser?.id || userid) && !demoting) {
			const leaderSection = sectionName(section, this.TL);
			throw new Chat.ErrorMessage(this.TL`${name} is already a Section Leader of ${leaderSection}.`);
		} else if (!Users.globalAuth.sectionLeaders.has(targetUser?.id || userid) && demoting) {
			throw new Chat.ErrorMessage(this.TL`${name} is not a Section Leader.`);
		}
		const roomSection = sectionName(section, roomTL(room));
		if (!demoting) {
			Users.globalAuth.setSection(userid, section);
			this.addGlobalModAction(room.TL`${name} was appointed Section Leader of ${roomSection} by ${user.name}.`);
			this.globalModlog(`SECTION LEADER`, userid, section);
			if (targetUser) {
				const userSection = sectionName(section, targetUser.TL);
				targetUser.popup(targetUser.TL`You were appointed Section Leader of ${userSection} by ${user.name}.`);
			}
		} else {
			const group = Users.globalAuth.get(userid);
			Users.globalAuth.deleteSection(userid);
			this.privateGlobalModAction(room.TL`${name} was demoted from Section Leader of ${roomSection} by ${user.name}.`);
			if (group === ' ') {
				this.sendReply(this.TL`They are also no longer manually trusted. If they should be, use '/trustuser'.`);
			}
			this.globalModlog(`DESECTION LEADER`, userid, section);
			if (targetUser) {
				const userSection = sectionName(section, targetUser.TL);
				targetUser.popup(targetUser.TL`You were demoted from Section Leader of ${userSection} by ${user.name}.`);
			}
		}

		if (targetUser) {
			targetUser.updateIdentity();
			Rooms.global.checkAutojoin(targetUser);
			if (targetUser.trusted && !Users.isTrusted(targetUser.id)) {
				targetUser.trusted = '';
			}
		}
	},
	sectionleaderhelp() {
		// a function rather than a help array, since the list of sections can't be part of a TLkey string
		if (!this.runBroadcast()) return;
		const validSections = RoomSections.sections.join(', ');
		this.sendReply([
			this.TL`/sectionleader [target user], [sectionid] - Appoints [target user] Section Leader.`,
			this.TL`/desectionleader [target user] - Demotes [target user] from Section Leader.`,
			this.TL`Valid sections: ${validSections}`,
			this.TL`If you want to change which section someone leads, demote them and then re-promote them in the desired section.`,
			this.TL`Requires: ~`,
		].join('\n'));
	},

	globaldemote: 'demote',
	demote(target) {
		if (!target) return this.parse('/help demote');
		this.run('promote');
	},
	demotehelp: [TLkey`/demote [username], [group] - Demotes the user to the specified group. Requires: ~`],

	forcepromote(target, room, user, connection) {
		// warning: never document this command in /help
		this.checkCan('forcepromote');
		const { targetUsername, rest: nextGroupName } = this.splitUser(target, { exactName: true });
		let name = this.filter(targetUsername);
		if (!name) return;
		name = name.slice(0, 18);
		const nextGroup = nextGroupName as GroupSymbol;
		if (!Config.groups[nextGroup]) throw new Chat.ErrorMessage(this.TL`Group '${nextGroup}' does not exist.`);
		if (Config.groups[nextGroup].roomonly || Config.groups[nextGroup].battleonly) {
			throw new Chat.ErrorMessage(this.TL`Group '${nextGroup}' does not exist as a global rank.`);
		}

		if (Users.isUsernameKnown(name)) {
			throw new Chat.ErrorMessage(this.TL`/forcepromote - Don't forcepromote unless you have to.`);
		}
		Users.globalAuth.set(name as ID, nextGroup);

		const TL = roomTL(room, this.TL);
		const groupName = Config.groups[nextGroup].name || TL`regular user`;
		this.addGlobalModAction(TL`${name} was promoted to Global ${groupName} by ${user.name}.`);
		this.globalModlog(`GLOBAL${(Config.groups[nextGroup].name || "regular").toUpperCase()}`, toID(name));
	},

	devoice: 'deauth',
	deauth(target, room, user) {
		return this.parse(`/demote ${target}, deauth`);
	},

	deglobalvoice: 'globaldeauth',
	deglobalauth: 'globaldeauth',
	globaldevoice: 'globaldeauth',
	globaldeauth(target, room, user) {
		return this.parse(`/globaldemote ${target}, deauth`);
	},

	deroomvoice: 'roomdeauth',
	roomdevoice: 'roomdeauth',
	deroomauth: 'roomdeauth',
	roomdeauth(target, room, user) {
		return this.parse(`/roomdemote ${target}, deauth`);
	},

	declare(target, room, user) {
		target = target.trim();
		if (!target) return this.parse('/help declare');
		room = this.requireRoom();
		this.checkCan('declare', null, room);
		this.checkChat();
		if (target.length > 2000) throw new Chat.ErrorMessage(this.TL`Declares should not exceed 2000 characters.`);

		const notifyTitle = room.TL`${room.title} announcement!`;
		for (const id in room.users) {
			room.users[id].sendTo(room, `|notify|${notifyTitle}|${target}`);
		}
		this.add(Utils.html`|raw|<div class="broadcast-blue"><b>${target}</b></div>`);
		this.modlog('DECLARE', null, target);
	},
	declarehelp: [TLkey`/declare [message] - Anonymously announces a message. Requires: # * ~`],

	htmldeclare(target, room, user) {
		if (!target) return this.parse('/help htmldeclare');
		room = this.requireRoom();
		this.checkCan('declare', null, room);
		this.checkChat();
		this.checkHTML(target);

		const notifyTitle = room.TL`${room.title} announcement!`;
		for (const u in room.users) {
			Users.get(u)?.sendTo(
				room,
				`|notify|${notifyTitle}|${Utils.stripHTML(target)}`
			);
		}
		this.add(`|raw|<div class="broadcast-blue"><b>${target}</b></div>`);
		this.modlog(`HTMLDECLARE`, null, target);
	},
	htmldeclarehelp: [TLkey`/htmldeclare [message] - Anonymously announces a message using safe HTML. Requires: # * ~`],

	gdeclare: 'globaldeclare',
	globaldeclare(target, room, user) {
		if (!target) return this.parse('/help globaldeclare');
		this.checkCan('gdeclare');
		this.checkHTML(target);

		for (const u of Users.users.values()) {
			if (u.connected) u.send(`|pm|~|${u.tempGroup}${u.name}|/raw <div class="broadcast-blue"><b>${target}</b></div>`);
		}
		this.globalModlog(`GLOBALDECLARE`, null, target);
	},
	globaldeclarehelp: [TLkey`/globaldeclare [message] - Anonymously sends a private message to all the users on the site. Requires: ~`],

	cdeclare: 'chatdeclare',
	chatdeclare(target, room, user) {
		if (!target) return this.parse('/help chatdeclare');
		this.checkCan('gdeclare');
		this.checkHTML(target);

		for (const curRoom of Rooms.rooms.values()) {
			if (curRoom.type !== 'battle') {
				curRoom.addRaw(`<div class="broadcast-blue"><b>${target}</b></div>`).update();
			}
		}
		this.globalModlog(`CHATDECLARE`, null, target);
	},
	chatdeclarehelp: [TLkey`/cdeclare [message] - Anonymously announces a message to all chatrooms on the server. Requires: ~`],

	wall: 'announce',
	announce(target, room, user) {
		if (!target) return this.parse('/help announce');

		if (room) this.checkCan('announce', null, room);

		this.checkChat(target);

		return `/announce ${target}`;
	},
	announcehelp: [TLkey`/announce OR /wall [message] - Makes an announcement. Requires: % @ # ~`],

	notifyoffrank: 'notifyrank',
	notifyrank(target, room, user, connection, cmd) {
		room = this.requireRoom();
		if (!target) return this.parse(`/help notifyrank`);
		this.checkCan('addhtml', null, room);
		this.checkChat();
		let [rank, titleNotification] = this.splitOne(target);
		if (rank === 'all') rank = ` `;
		if (!(rank in Config.groups)) throw new Chat.ErrorMessage(this.TL`Group '${rank}' does not exist.`);
		const id = `${room.roomid}-rank-${(Config.groups[rank].id || `all`)}`;
		if (cmd === 'notifyoffrank') {
			if (rank === ' ') {
				room.send(`|tempnotifyoff|${id}`);
			} else {
				room.sendRankedUsers(`|tempnotifyoff|${id}`, rank as GroupSymbol);
			}
		} else {
			let [title, notificationHighlight] = this.splitOne(titleNotification);
			if (!title) {
				const groupName = Config.groups[rank].name;
				title = groupName ? room.TL`${room.title} ${groupName}+ message!` : room.TL`${room.title} message!`;
			}
			if (!user.can('addhtml')) {
				title += ` (${room.TL`notification from ${user.name}`})`;
			}
			const [notification, highlight] = this.splitOne(notificationHighlight);
			if (notification.length > 300) throw new Chat.ErrorMessage(this.TL`Notifications should not exceed 300 characters.`);
			const message = `|tempnotify|${id}|${title}|${notification}${(highlight ? `|${highlight}` : ``)}`;
			if (rank === ' ') {
				room.send(message);
			} else {
				room.sendRankedUsers(message, rank as GroupSymbol);
			}
			this.modlog(`NOTIFYRANK`, null, target);
		}
	},
	notifyrankhelp: [
		TLkey`/notifyrank [rank], [title], [message], [highlight] - Sends a notification to users who are [rank] or higher (and highlight on [highlight], if specified). Requires: # * ~`,
		TLkey`/notifyoffrank [rank] - Closes the notification previously sent with /notifyrank [rank]. Requires: # * ~`,
	],

	notifyoffuser: 'notifyuser',
	notifyuser(target, room, user, connection, cmd) {
		room = this.requireRoom();
		if (!target) return this.parse(`/help notifyuser`);
		this.checkCan('addhtml', null, room);
		this.checkChat();
		const { targetUser, targetUsername, rest: titleNotification } = this.splitUser(target);
		if (!targetUser?.connected) throw new Chat.ErrorMessage(this.TL`User '${targetUsername}' not found.`);
		const id = `${room.roomid}-user-${toID(targetUsername)}`;
		if (cmd === 'notifyoffuser') {
			room.sendUser(targetUser, `|tempnotifyoff|${id}`);
			this.sendReply(this.TL`Closed the notification previously sent to ${targetUser.name}.`);
		} else {
			let [title, notification] = this.splitOne(titleNotification);
			if (!title) title = targetUser.TL`${room.title} notification!`;
			if (!user.can('addhtml')) {
				title += ` (${targetUser.TL`notification from ${user.name}`})`;
			}
			if (notification.length > 300) throw new Chat.ErrorMessage(this.TL`Notifications should not exceed 300 characters.`);
			const message = `|tempnotify|${id}|${title}|${notification}`;
			room.sendUser(targetUser, message);
			this.sendReply(this.TL`Sent a notification to ${targetUser.name}.`);
		}
	},
	notifyuserhelp: [
		TLkey`/notifyuser [username], [title], [message] - Sends a notification to [user]. Requires: # * ~`,
		TLkey`/notifyoffuser [user] - Closes the notification previously sent with /notifyuser [user]. Requires: # * ~`,
	],

	fr: 'forcerename',
	ofr: 'forcerename',
	offlineforcerename: 'forcerename',
	forcerename(target, room, user) {
		if (!target) return this.parse('/help forcerename');

		const { targetUser, targetUsername, rest: reason } = this.splitUser(target, { exactName: true });
		const offline = this.cmd.startsWith('o');
		const targetID = targetUser?.id || toID(targetUsername);
		// && !offline because maybe we're trying to disallow the name after they namechanged
		if (!targetUser && !offline) {
			const { targetUser: targetUserInexact, inputUsername } = this.splitUser(target);
			if (targetUserInexact) {
				throw new Chat.ErrorMessage(this.TL`User has already changed their name to '${targetUserInexact.name}'.`);
			}
			throw new Chat.ErrorMessage(this.TL`User '${inputUsername}' not found. (use /offlineforcerename to rename anyway.)`);
		}
		if (Punishments.namefilterwhitelist.has(targetID)) {
			const errorMessage = [this.TL`That name is blocked from being forcerenamed.`];
			if (user.can('bypassall')) {
				errorMessage.push(this.TL`Use /noforcerename remove to remove it from the list if you wish to rename it.`);
			}
			throw new Chat.ErrorMessage(errorMessage);
		}
		this.checkCan('forcerename', targetID);
		const { publicReason, privateReason } = this.parseSpoiler(reason);

		Monitor.forceRenames.set(targetID, false);

		const reasonText = publicReason ? `: ${publicReason}` : ``;
		const online = !!targetUser?.connected;
		if (targetUser?.connected) {
			this.globalModlog('FORCERENAME', targetUser, reason);
			Ladders.cancelSearches(targetUser);
			targetUser.send(`|nametaken||${targetUser.TL`${user.name} considers your name inappropriate${reasonText}`}`);
		} else {
			this.globalModlog('FORCERENAME OFFLINE', targetID, privateReason);
		}
		Monitor.forceRenames.set(targetID, false);

		const renamedName = targetUser?.name || targetID;
		if (room?.roomid !== 'staff') {
			const TL = roomTL(room, this.TL);
			const message = online ?
				TL`${renamedName} was forced to choose a new name by ${user.name}${reasonText}` :
				TL`${renamedName} was forced to choose a new name by ${user.name} while offline${reasonText}`;
			if (room?.roomid.startsWith('help-')) {
				this.addModAction(message);
			} else {
				this.privateModAction(message);
			}
		}
		const roomMessage = this.pmTarget ? `<PM:${this.pmTarget.id}>` :
			room && room.roomid !== 'staff' ? `«<a href="/${room.roomid}" target="_blank">${room.roomid}</a>» ` :
			'';
		const rankMessage = targetUser?.getAccountStatusString() || "";
		const TL = roomTL(Rooms.get('staff')); // shown in the staff room
		const nameHTML = Utils.html`<span class="username">${renamedName}</span>`;
		const rankHTML = Utils.escapeHTML(rankMessage);
		const renamerHTML = Utils.escapeHTML(user.name);
		const reasonHTML = Utils.escapeHTML(reasonText);
		Rooms.global.notifyRooms(
			['staff'],
			`|html|${roomMessage}` + (online ?
				TL`${nameHTML} ${rankHTML} was forced to choose a new name by ${renamerHTML}${reasonHTML}` :
				TL`${nameHTML} ${rankHTML} was forced to choose a new name by ${renamerHTML} while offline${reasonHTML}`)
		);

		targetUser?.resetName(true);
		return true;
	},
	forcerenamehelp: [
		TLkey`/forcerename OR /fr [username], [reason] - Forcibly change a user's name and shows them the [reason]. Requires: % @ ~`,
		TLkey`/allowname [username] - Unmarks a forcerenamed username, stopping staff from being notified when it is used. Requires % @ ~`,
	],

	nfr: 'noforcerename',
	noforcerename: {
		add(target, room, user) {
			const [targetUsername, rest] = Utils.splitFirst(target, ',').map(f => f.trim());
			const targetId = toID(targetUsername);
			if (!targetId) return this.parse('/help noforcerename');
			this.checkCan('bypassall');
			if (!Punishments.whitelistName(targetId, user.name)) {
				throw new Chat.ErrorMessage(this.TL`${targetUsername} is already on the noforcerename list.`);
			}
			const TL = roomTL(room, this.TL);
			const reasonText = rest ? ` (${rest})` : '';
			this.addGlobalModAction(TL`${user.name} added the name ${targetId} to the no forcerename list.${reasonText}`);
			this.globalModlog('NOFORCERENAME', targetId, rest);
		},
		remove(target, room, user) {
			const { targetUsername, rest } = this.splitUser(target);
			const targetId = toID(targetUsername);
			if (!targetId) return this.parse('/help noforcerename');
			this.checkCan('bypassall');
			if (!Punishments.namefilterwhitelist.has(targetId)) {
				throw new Chat.ErrorMessage(this.TL`${targetUsername} is not on the noforcerename list.`);
			}
			Punishments.unwhitelistName(targetId);
			const TL = roomTL(room, this.TL);
			const reasonText = rest ? ` (${rest})` : '';
			this.addGlobalModAction(TL`${user.name} removed ${targetId} from the no forcerename list.${reasonText}`);
			this.globalModlog('UNNOFORCERENAME', targetId, rest);
		},
	},
	noforcerenamehelp: [
		TLkey`/noforcerename add OR /nfr add [username] - Adds [username] to the list of users who can't be forcerenamed by staff.`,
		TLkey`/noforcerename remove OR /nfr remove [username] - Removes [username] from the list of users who can't be forcerenamed by staff.`,
	],

	forceclearstatus(target, room, user) {
		const { targetUser, rest: reason } = this.requireUser(target, { allowOffline: true });
		this.checkCan('forcerename', targetUser);

		if (!targetUser.userMessage) throw new Chat.ErrorMessage(this.TL`${targetUser.name} does not have a status set.`);

		const displayReason = reason ? `: ${reason}` : ``;
		const TL = roomTL(room, this.TL);
		this.privateGlobalModAction(TL`${targetUser.name}'s status "${targetUser.userMessage}" was cleared by ${user.name}${displayReason}.`);
		this.globalModlog('CLEARSTATUS', targetUser, ` from "${targetUser.userMessage}"${displayReason}`);
		targetUser.clearStatus();
		targetUser.popup(reason ?
			targetUser.TL`${user.name} has cleared your status message for being inappropriate: ${reason}` :
			targetUser.TL`${user.name} has cleared your status message for being inappropriate.`);
	},

	nl: 'namelock',
	forcenamelock: 'namelock',
	weeknamelock: 'namelock',
	wnl: 'namelock',
	fwnl: 'namelock',
	forceweeknamelock: 'namelock',
	async namelock(target, room, user, connection, cmd) {
		if (!target) return this.parse('/help namelock');
		const week = cmd.includes('w');
		const force = cmd.includes('f');

		const { targetUser, inputUsername, targetUsername, rest: reason } = this.splitUser(target);
		const userid = toID(targetUsername);
		const forceCommand = `/force${week ? 'week' : ''}namelock`;

		if (!targetUser && !force) {
			throw new Chat.ErrorMessage(
				this.TL`User '${targetUsername}' not found. Use \`\`${forceCommand}\`\` if you need to namelock them anyway.`
			);
		}
		if (targetUser && targetUser.id !== toID(inputUsername) && !force) {
			throw new Chat.ErrorMessage(this.TL`${inputUsername} has already changed their name to ${targetUser.name}. To namelock anyway, use ${forceCommand}.`);
		}
		this.checkCan('forcerename', userid);
		if (targetUser?.namelocked && !week) {
			throw new Chat.ErrorMessage(this.TL`User '${targetUser.name}' is already namelocked.`);
		}
		if (!force && !week) {
			const existingPunishments = Punishments.search(userid);
			for (const [,, punishment] of existingPunishments) {
				if (punishment.type === 'LOCK' && (punishment.expireTime - Date.now()) > (2 * DAY)) {
					throw new Chat.ErrorMessage([
						this.TL`User '${userid}' is already normally locked for more than 2 days.`,
						this.TL`Use /weeknamelock to namelock them instead, so you don't decrease the existing punishment.`,
						this.TL`If you really need to override this, use /forcenamelock.`,
					]);
				}
			}
		}
		const { privateReason, publicReason } = this.parseSpoiler(reason);
		const reasonText = publicReason ? ` (${publicReason})` : `.`;
		const TL = roomTL(room, this.TL);
		const namelockedName = targetUser?.name || userid;
		this.privateGlobalModAction(week ?
			TL`${namelockedName} was weeknamelocked by ${user.name}${reasonText}` :
			TL`${namelockedName} was namelocked by ${user.name}${reasonText}`);
		this.globalModlog(`${force ? `FORCE` : ``}${week ? 'WEEK' : ""}NAMELOCK`, targetUser || userid, privateReason);

		const roomauth = Rooms.global.destroyPersonalRooms(userid);
		if (roomauth.length) {
			const staff = { TL: roomTL(Rooms.get('staff')) }; // shown in the staff room (TL is already the room's translator)
			const roomauthList = roomauth.join(', ');
			Monitor.log(`[CrisisMonitor] ${staff.TL`Namelocked user ${userid} has public roomauth (${roomauthList}), and should probably be demoted.`}`);
		}
		if (targetUser) {
			Ladders.cancelSearches(targetUser);
			targetUser.popup(`|modal|${targetUser.TL`${user.name} has locked your name and you can't change names anymore${reasonText}`}`);
		}
		const duration = week ? 7 * 24 * 60 * 60 * 1000 : 48 * 60 * 60 * 1000;
		await Punishments.namelock(userid, Date.now() + duration, null, false, publicReason);
		if (targetUser) Chat.runHandlers('onPunishUser', 'NAMELOCK', targetUser, room);
		// Automatically upload replays as evidence/reference to the punishment
		if (room?.battle) this.parse('/savereplay forpunishment');
		Monitor.forceRenames.set(userid, false);
		if (connection.openPages) {
			// this hardcode is necessary because when /namelock and /uspage are send together in one button
			// the uspage output is sent before the user's name is reset
			// so it takes two clicks, which is bad behavior
			for (const page of connection.openPages) {
				if (page.includes('usersearch-')) {
					this.refreshPage(page);
				}
			}
		}

		return true;
	},
	namelockhelp: [TLkey`/namelock OR /nl [user], [reason] - Name locks a [user] and shows the [reason]. Requires: % @ ~`],

	unl: 'unnamelock',
	unnamelock(target, room, user) {
		if (!target) return this.parse('/help unnamelock');
		this.checkCan('forcerename');

		const targetUser = Users.get(target);
		let reason = '';
		if (targetUser?.namelocked) {
			reason = ` (${targetUser.namelocked})`;
		}

		const unlocked = Punishments.unnamelock(target);

		if (!unlocked) {
			throw new Chat.ErrorMessage(this.TL`User '${target}' is not namelocked.`);
		}

		const TL = roomTL(room, this.TL);
		this.addGlobalModAction(TL`${unlocked} was unnamelocked by ${user.name}.${reason}`);
		this.globalModlog("UNNAMELOCK", toID(target));
		this.parse(`/allowname ${toID(target)}`);
		if (targetUser) targetUser.popup(targetUser.TL`${user.name} has unnamelocked you.`);
	},
	unnamelockhelp: [TLkey`/unnamelock [username] - Unnamelocks the user. Requires: % @ ~`],

	hidetextalts: 'hidetext',
	hidealttext: 'hidetext',
	hidealtstext: 'hidetext',
	htext: 'hidetext',
	forcehidetext: 'hidetext',
	hidelines: 'hidetext',
	hlines: 'hidetext',
	cleartext: 'hidetext',
	ctext: 'hidetext',
	clearaltstext: 'hidetext',
	clearlines: 'hidetext',
	forcecleartext: 'hidetext',
	hidetext(target, room, user, connection, cmd) {
		if (!target) return this.parse(`/help hidetext`);
		room = this.requireRoom();
		const hasLineCount = cmd.includes('lines');
		const hideRevealButton = cmd.includes('clear') || cmd === 'ctext';
		let { targetUser, inputUsername, targetUsername: name, rest: reason } = this.splitUser(target);
		let lineCount = 0;
		if (/^[0-9]+\s*(,|$)/.test(reason)) {
			if (hasLineCount) {
				let lineCountString;
				[lineCountString, reason] = Utils.splitFirst(reason, ',').map(p => p.trim());
				lineCount = parseInt(lineCountString);
			} else if (!cmd.includes('force')) {
				throw new Chat.ErrorMessage(this.TL`Your reason was a number; use /hidelines if you wanted to clear a specific number of lines, or /forcehidetext if you really wanted your reason to be a number.`);
			}
		}
		const showAlts = cmd.includes('alt');
		if (!lineCount && hasLineCount) {
			throw new Chat.ErrorMessage(this.TL`You must specify a number of messages to clear. To clear all messages, use /hidetext.`);
		}
		if (reason.length > MAX_REASON_LENGTH) {
			throw new Chat.ErrorMessage(this.TL`The reason is too long. It cannot exceed ${MAX_REASON_LENGTH} characters.`);
		}

		if (!targetUser && !room.log.hasUsername(name)) {
			throw new Chat.ErrorMessage(this.TL`User ${name} not found or has no roomlogs.`);
		}
		if (lineCount && showAlts) {
			throw new Chat.ErrorMessage(this.TL`You can't specify a line count when using /hidealtstext.`);
		}
		const userid = toID(inputUsername);

		this.checkCan('mute', null, room);

		// if the user hiding their own text, it would clear the "cleared" message,
		// so we can't attribute it in that case
		// and sending the message after `|unlink|` puts the "show lines" button in the wrong place
		const sender = user === targetUser ? null : user;

		let message = '';
		const reasonText = reason ? ` (${reason})` : ``;
		if (targetUser && showAlts) {
			message = room.TL`${name}'s alts messages were cleared from ${room.title} by ${user.name}.${reasonText}`;
			room.sendByUser(sender, message);
			this.modlog('HIDEALTSTEXT', targetUser, reason, { noip: 1 });
			room.hideText([
				userid,
				...targetUser.previousIDs,
				...targetUser.getAltUsers(true).map((curUser: User) => curUser.getLastId()),
			] as ID[]);
		} else {
			if (lineCount > 0) {
				message = room.TL`${lineCount} of ${name}'s messages were cleared from ${room.title} by ${user.name}.${reasonText}`;
				room.sendByUser(sender, message);
			} else {
				message = room.TL`${name}'s messages were cleared from ${room.title} by ${user.name}.${reasonText}`;
				room.sendByUser(sender, message);
			}
			this.modlog('HIDETEXT', targetUser || userid, reason, { noip: 1, noalts: 1 });
			room.hideText([userid], lineCount, hideRevealButton);
			this.roomlog(`|c|${user.getIdentity()}|/log ${message}`);
		}
	},
	hidetexthelp: [
		TLkey`/hidetext [username], [optional reason] - Removes a user's messages from chat, with an optional reason. Requires: % @ # ~`,
		TLkey`/hidealtstext [username], [optional reason] - Removes a user's messages and their alternate accounts' messages from the chat, with an optional reason.  Requires: % @ # ~`,
		TLkey`/hidelines [username], [number], [optional reason] - Removes the [number] most recent messages from a user, with an optional reason. Requires: % @ # ~`,
		TLkey`Use /cleartext, /clearaltstext, and /clearlines to remove messages without displaying a button to reveal them.`,
	],

	ab: 'blacklist',
	bl: 'blacklist',
	forceblacklist: 'blacklist',
	forcebl: 'blacklist',
	permanentblacklist: 'blacklist',
	permablacklist: 'blacklist',
	permabl: 'blacklist',
	blacklist(target, room, user, connection, cmd) {
		room = this.requireRoom();
		if (!target) return this.parse('/help blacklist');
		this.checkChat();
		if (toID(target) === 'show') throw new Chat.ErrorMessage(this.TL`You're looking for /showbl`);

		const { targetUser, targetUsername, rest: reason } = this.splitUser(target);
		if (!targetUser) {
			throw new Chat.ErrorMessage([this.TL`User ${targetUsername} not found.`,
				this.TL`If you want to blacklist an offline account by name (not IP), consider /blacklistname`]);
		}
		this.checkCan('editroom', targetUser, room);
		if (!room.persist) {
			throw new Chat.ErrorMessage(this.TL`This room is not going to last long enough for a blacklist to matter - just ban the user`);
		}
		const punishment = Punishments.isRoomBanned(targetUser, room.roomid);
		if (punishment && punishment.type === 'BLACKLIST') {
			throw new Chat.ErrorMessage(this.TL`This user is already blacklisted from this room.`);
		}
		const force = cmd === 'forceblacklist' || cmd === 'forcebl';
		if (targetUser.trusted) {
			if (!force) {
				return this.sendReply(
					this.TL`${targetUser.name} is a trusted user. If you are sure you would like to blacklist them use /forceblacklist.`
				);
			}
		} else if (force) {
			throw new Chat.ErrorMessage(this.TL`Use /blacklist; ${targetUser.name} is not a trusted user.`);
		}
		if (!reason && REQUIRE_REASONS) {
			throw new Chat.ErrorMessage(this.TL`Blacklists require a reason.`);
		}
		if (reason.length > MAX_REASON_LENGTH) {
			throw new Chat.ErrorMessage(this.TL`The reason is too long. It cannot exceed ${MAX_REASON_LENGTH} characters.`);
		}
		const name = targetUser.getLastName();
		const userid = targetUser.getLastId();

		if (targetUser.trusted && room.settings.isPrivate !== true) {
			const TL = roomTL(Rooms.get('staff')); // shown in the staff room
			const trustedID = targetUser.trusted !== targetUser.id ? ` (${targetUser.trusted})` : '';
			Monitor.log(`[CrisisMonitor] ${TL`Trusted user ${targetUser.name}${trustedID} was blacklisted from ${room.roomid} by ${user.name}, and should probably be demoted.`}`);
		}

		if (targetUser.id in room.users || user.can('lock')) {
			const TL = targetUser.TL;
			const blacklisterName = Utils.escapeHTML(user.name);
			const reasonHTML = Utils.escapeHTML(reason);
			const blacklistMessage = room.subRooms ?
				TL`${blacklisterName} has blacklisted you from the room ${room.roomid} and its subrooms. Reason: ${reasonHTML}` :
				TL`${blacklisterName} has blacklisted you from the room ${room.roomid}. Reason: ${reasonHTML}`;
			let appealMessage = `<p>${TL`To appeal the ban, PM the staff member that blacklisted you.`}</p>`;
			if (room.persist) {
				appealMessage = `<p>${TL`To appeal the ban, PM the staff member that blacklisted you or a room owner.`} </p>`;
				appealMessage += `<p><button name="send" value="/roomauth ${room.roomid}">${TL`List Room Staff`}</button></p>`;
			}
			targetUser.popup(`|modal||html|<p>${blacklistMessage}</p>${appealMessage}`);
		}

		const expireTime = cmd.includes('perma') ? Date.now() + (10 * 365 * 24 * 60 * 60 * 1000) : null;
		const action = expireTime ? 'PERMABLACKLIST' : 'BLACKLIST';

		const reasonText = reason ? ` (${reason})` : '';
		this.privateModAction(expireTime ?
			room.TL`${name} was blacklisted from ${room.title} by ${user.name} for ten years.${reasonText}` :
			room.TL`${name} was blacklisted from ${room.title} by ${user.name}.${reasonText}`);

		const affected = Punishments.roomBlacklist(room, targetUser, expireTime, null, reason);

		for (const u of affected) Chat.runHandlers('onPunishUser', 'BLACKLIST', u, room);
		if (!room.settings.isPrivate && room.persist) {
			const acAccount = (targetUser.autoconfirmed !== userid && targetUser.autoconfirmed);
			let displayMessage = '';
			if (affected.length > 1) {
				const alts = affected.slice(1).map(curUser => curUser.getLastName()).join(", ");
				displayMessage = acAccount ?
					room.TL`${name}'s  ac account: ${acAccount}, blacklisted alts: ${alts}` :
					room.TL`${name}'s  blacklisted alts: ${alts}`;
				this.privateModAction(displayMessage);
			} else if (acAccount) {
				displayMessage = room.TL`${name}'s ac account: ${acAccount}`;
				this.privateModAction(displayMessage);
			}
		}

		if (!room.settings.isPrivate && room.persist) {
			this.globalModlog(action, targetUser, reason);
		} else {
			// Room modlog only
			this.modlog(action, targetUser, reason);
		}
		return true;
	},
	blacklisthelp: [
		TLkey`/blacklist [username], [reason] - Blacklists the user from the room you are in for a year. Requires: # ~`,
		TLkey`/permablacklist OR /permabl - blacklist a user for 10 years. Requires: # ~`,
		TLkey`/unblacklist [username] - Unblacklists the user from the room you are in. Requires: # ~`,
		TLkey`/showblacklist OR /showbl - show a list of blacklisted users in the room. Requires: % @ # ~`,
		TLkey`/expiringblacklists OR /expiringbls - show a list of blacklisted users from the room whose blacklists are expiring in 3 months or less. Requires: % @ # ~`,
	],

	forcebattleban: 'battleban',
	async battleban(target, room, user, connection, cmd) {
		room = this.requireRoom();
		if (!target) return this.parse(`/help battleban`);

		const { targetUser, targetUsername, rest: reason } = this.splitUser(target);
		if (!targetUser) throw new Chat.ErrorMessage(this.TL`User ${targetUsername} not found.`);
		if (target.length > MAX_REASON_LENGTH) {
			throw new Chat.ErrorMessage(this.TL`The reason is too long. It cannot exceed ${MAX_REASON_LENGTH} characters.`);
		}
		if (!reason) {
			throw new Chat.ErrorMessage(this.TL`Battle bans require a reason.`);
		}
		const includesUrl = reason.includes(`.${Config.routes.root}/`); // lgtm [js/incomplete-url-substring-sanitization]
		if (!room.battle && !includesUrl && cmd !== 'forcebattleban') {
			throw new Chat.ErrorMessage(this.TL`Battle bans require a battle replay if used outside of a battle; if the battle has expired, use /forcebattleban.`);
		}
		if (!user.can('rangeban', targetUser)) {
			throw new Chat.ErrorMessage([
				this.TL`Battlebans have been deprecated. Alternatives:`,
				this.TL`- timerstalling and bragging about it: lock`,
				this.TL`- other timerstalling: they're not timerstalling, leave them alone`,
				this.TL`- bad nicknames: lock, locks prevent nicknames from appearing; you should always have been locking for this`,
				this.TL`- ladder cheating: gban, get a moderator if necessary`,
				this.TL`- serious ladder cheating: permaban, get an administrator`,
				this.TL`- other: get an administrator`,
			]);
		}
		if (Punishments.isBattleBanned(targetUser)) {
			throw new Chat.ErrorMessage(this.TL`User '${targetUser.name}' is already banned from battling.`);
		}
		this.privateGlobalModAction(room.TL`${targetUser.name} was banned from starting new battles by ${user.name} (${reason})`);

		if (targetUser.trusted) {
			const TL = roomTL(Rooms.get('staff')); // shown in the staff room
			Monitor.log(`[CrisisMonitor] ${TL`Trusted user ${targetUser.name} was banned from battling by ${user.name}, and should probably be demoted.`}`);
		}

		this.globalModlog("BATTLEBAN", targetUser, reason);
		Ladders.cancelSearches(targetUser);
		await Punishments.battleban(targetUser, null, null, reason);
		targetUser.popup(`|modal|${targetUser.TL`${user.name} has prevented you from starting new battles for 2 days (${reason})`}`);

		// Automatically upload replays as evidence/reference to the punishment
		if (room.battle) this.parse('/savereplay forpunishment');
		return true;
	},
	battlebanhelp: [
		TLkey`/battleban [username], [reason] - [DEPRECATED]`,
		TLkey`Prevents the user from starting new battles for 2 days and shows them the [reason]. Requires: ~`,
	],

	unbattleban(target, room, user) {
		if (!target) return this.parse('/help unbattleban');
		this.checkCan('lock');

		const targetUser = Users.get(target);
		const unbanned = Punishments.unbattleban(target);

		if (unbanned) {
			const TL = roomTL(room, this.TL);
			this.addModAction(TL`${unbanned} was allowed to battle again by ${user.name}.`);
			this.globalModlog("UNBATTLEBAN", toID(target));
			if (targetUser) targetUser.popup(targetUser.TL`${user.name} has allowed you to battle again.`);
		} else {
			throw new Chat.ErrorMessage(this.TL`User ${target} is not banned from battling.`);
		}
	},
	unbattlebanhelp: [TLkey`/unbattleban [username] - [DEPRECATED] Allows a user to battle again. Requires: % @ ~`],

	monthgroupchatban: 'groupchatban',
	monthgcban: 'groupchatban',
	gcban: 'groupchatban',
	async groupchatban(target, room, user, connection, cmd) {
		room = this.requireRoom();
		if (!target) return this.parse(`/help groupchatban`);
		if (!user.can('rangeban')) {
			throw new Chat.ErrorMessage([this.TL`/groupchatban has been deprecated.`,
				this.TL`For future groupchat misuse, lock the creator, it will take away their trusted status and their ability to make groupchats.`]);
		}

		const { targetUser, targetUsername, rest: reason } = this.splitUser(target);
		if (!targetUser) throw new Chat.ErrorMessage(this.TL`User ${targetUsername} not found.`);
		if (target.length > MAX_REASON_LENGTH) {
			throw new Chat.ErrorMessage(this.TL`The reason is too long. It cannot exceed ${MAX_REASON_LENGTH} characters.`);
		}

		const isMonth = cmd.startsWith('month');

		if (!isMonth && Punishments.isGroupchatBanned(targetUser)) {
			throw new Chat.ErrorMessage(this.TL`User '${targetUser.name}' is already banned from using groupchats.`);
		}

		const reasonText = reason ? `: ${reason}` : ``;
		this.privateGlobalModAction(isMonth ?
			room.TL`${targetUser.name} was banned from using groupchats for a month by ${user.name}${reasonText}.` :
			room.TL`${targetUser.name} was banned from using groupchats for a week by ${user.name}${reasonText}.`);

		if (targetUser.trusted) {
			const TL = roomTL(Rooms.get('staff')); // shown in the staff room
			Monitor.log(`[CrisisMonitor] ${TL`Trusted user ${targetUser.name} was banned from using groupchats by ${user.name}, and should probably be demoted.`}`);
		}

		const createdGroupchats = await Punishments.groupchatBan(
			targetUser, (isMonth ? Date.now() + 30 * DAY : null), null, reason
		);
		targetUser.popup(`|modal|${isMonth ?
			targetUser.TL`${user.name} has banned you from using groupchats for a month${reasonText}` :
			targetUser.TL`${user.name} has banned you from using groupchats for a week${reasonText}`}`);
		this.globalModlog("GROUPCHATBAN", targetUser, ` by ${user.id}${reasonText}`);

		for (const roomid of createdGroupchats) {
			const targetRoom = Rooms.get(roomid);
			if (!targetRoom) continue;
			const deletedReason = reason ? ` (${targetRoom.TL`reason: ${reason}`})` : ``;
			const participants = targetRoom.warnParticipants?.(
				targetRoom.TL`This groupchat (${targetRoom.title}) has been deleted due to inappropriate conduct by its creator, ${targetUser.name}.` +
				` ${targetRoom.TL`Do not attempt to recreate it, or you may be punished.`}${deletedReason}`
			);

			if (participants) {
				const modlogEntry = {
					action: 'NOTE',
					loggedBy: user.id,
					isGlobal: true,
					note: `participants in ${roomid} (creator: ${targetUser.id}): ${participants.join(', ')}`,
				};
				targetRoom.modlog(modlogEntry);
			}

			targetRoom.destroy();
		}
	},
	groupchatbanhelp: [
		TLkey`/groupchatban [user], [optional reason]`,
		TLkey`/monthgroupchatban [user], [optional reason]`,
		TLkey`Bans the user from joining or creating groupchats for a week (or month). Requires: % @ ~`,
	],

	ungcban: 'ungroupchatban',
	gcunban: 'ungroupchatban',
	groucphatunban: 'ungroupchatban',
	ungroupchatban(target, room, user) {
		if (!target) return this.parse('/help ungroupchatban');
		this.checkCan('lock');

		const targetUser = Users.get(target);
		const unbanned = Punishments.groupchatUnban(targetUser || toID(target));

		if (unbanned) {
			const TL = roomTL(room, this.TL);
			this.addGlobalModAction(TL`${unbanned} was ungroupchatbanned by ${user.name}.`);
			this.globalModlog("UNGROUPCHATBAN", toID(target), ` by ${user.id}`);
			if (targetUser) targetUser.popup(targetUser.TL`${user.name} has allowed you to use groupchats again.`);
		} else {
			throw new Chat.ErrorMessage(this.TL`User ${target} is not banned from using groupchats.`);
		}
	},
	ungroupchatbanhelp: [TLkey`/ungroupchatban [user] - Allows a groupchatbanned user to use groupchats again. Requires: % @ ~`],

	nameblacklist: 'blacklistname',
	permablacklistname: 'blacklistname',
	blacklistname(target, room, user) {
		room = this.requireRoom();
		if (!target) return this.parse('/help blacklistname');
		this.checkChat();
		this.checkCan('editroom', null, room);
		if (!room.persist) {
			throw new Chat.ErrorMessage(this.TL`This room is not going to last long enough for a blacklist to matter - just ban the user`);
		}

		const [targetStr, reason] = target.split('|').map(val => val.trim());
		if (!targetStr || (!reason && REQUIRE_REASONS)) {
			throw new Chat.ErrorMessage(this.TL`Usage: /blacklistname name1, name2, ... | reason`);
		}

		const targets = targetStr.split(',').map(s => toID(s));

		const duplicates = targets.filter(userid => (
			// can be asserted, room should always exist
			Punishments.roomUserids.nestedGetByType(room.roomid, userid, 'BLACKLIST')
		));
		if (duplicates.length) {
			const duplicateList = duplicates.join(', ');
			throw new Chat.ErrorMessage(duplicates.length !== 1 ?
				this.TL`[${duplicateList}] are already blacklisted.` :
				this.TL`[${duplicateList}] is already blacklisted.`);
		}
		const expireTime = this.cmd.includes('perma') ? Date.now() + (10 * 365 * 24 * 60 * 60 * 1000) : null;
		const action = expireTime ? 'PERMANAMEBLACKLIST' : 'NAMEBLACKLIST';

		for (const userid of targets) {
			if (!userid) throw new Chat.ErrorMessage(this.TL`User '${userid}' is not a valid userid.`);
			if (!Users.Auth.hasPermission(user, 'ban', room.auth.get(userid), room)) {
				throw new Chat.ErrorMessage(this.TL`/blacklistname - Access denied: ${userid} is of equal or higher authority than you.`);
			}

			Punishments.roomBlacklist(room, userid, expireTime, null, reason);

			const trusted = Users.isTrusted(userid);
			if (trusted && room.settings.isPrivate !== true) {
				const TL = roomTL(Rooms.get('staff')); // shown in the staff room
				const trustedID = trusted !== userid ? ` (${trusted})` : ``;
				Monitor.log(`[CrisisMonitor] ${TL`Trusted user ${userid}${trustedID} was nameblacklisted from ${room.roomid} by ${user.name}, and should probably be demoted.`}`);
			}
			if (!room.settings.isPrivate && room.persist) {
				this.globalModlog(action, userid, reason);
			}
		}

		const targetList = targets.join(', ');
		let message;
		if (targets.length !== 1) {
			message = expireTime ?
				room.TL`${targetList} were nameblacklisted from ${room.title} by ${user.name} for ten years.` :
				room.TL`${targetList} were nameblacklisted from ${room.title} by ${user.name}.`;
		} else {
			message = expireTime ?
				room.TL`${targetList} was nameblacklisted from ${room.title} by ${user.name} for ten years.` :
				room.TL`${targetList} was nameblacklisted from ${room.title} by ${user.name}.`;
		}
		this.privateModAction(message);
		return true;
	},
	blacklistnamehelp: [
		TLkey`/blacklistname OR /nameblacklist [name1, name2, etc.] | reason - Blacklists all name(s) from the room you are in for a year. Requires: # ~`,
		TLkey`/permablacklistname [name1, name2, etc.] | reason - Blacklists all name(s) from the room you are in for 10 years. Requires: # ~`,
	],

	unab: 'unblacklist',
	unblacklist(target, room, user) {
		room = this.requireRoom();
		if (!target) return this.parse('/help unblacklist');
		this.checkCan('editroom', null, room);

		const name = Punishments.roomUnblacklist(room, target);

		if (name) {
			this.privateModAction(room.TL`${name} was unblacklisted by ${user.name}.`);
			if (!room.settings.isPrivate && room.persist) {
				this.globalModlog("UNBLACKLIST", name);
			}
		} else {
			throw new Chat.ErrorMessage(this.TL`User '${target}' is not blacklisted.`);
		}
	},
	unblacklisthelp: [TLkey`/unblacklist [username] - Unblacklists the user from the room you are in. Requires: # ~`],

	unblacklistall(target, room, user) {
		room = this.requireRoom();
		this.checkCan('editroom', null, room);

		if (!target) {
			user.lastCommand = '/unblacklistall';
			throw new Chat.ErrorMessage([this.TL`THIS WILL UNBLACKLIST ALL BLACKLISTED USERS IN THIS ROOM.`,
				this.TL`To confirm, use: /unblacklistall confirm`]);
		}
		if (user.lastCommand !== '/unblacklistall' || target !== 'confirm') {
			return this.parse('/help unblacklistall');
		}
		user.lastCommand = '';
		const unblacklisted = Punishments.roomUnblacklistAll(room);
		if (!unblacklisted) {
			throw new Chat.ErrorMessage(this.TL`No users are currently blacklisted in this room to unblacklist.`);
		}
		this.addModAction(room.TL`All blacklists in this room have been lifted by ${user.name}.`);
		this.modlog('UNBLACKLISTALL');
		const unblacklistedList = unblacklisted.join(', ');
		this.roomlog(room.TL`Unblacklisted users: ${unblacklistedList}`);
	},
	unblacklistallhelp: [TLkey`/unblacklistall - Unblacklists all blacklisted users in the current room. Requires: # ~`],

	expiringbls: 'showblacklist',
	expiringblacklists: 'showblacklist',
	blacklists: 'showblacklist',
	showbl: 'showblacklist',
	showblacklist(target, room, user, connection, cmd) {
		if (target) room = Rooms.search(target)!;
		if (!room) throw new Chat.ErrorMessage(this.TL`The room "${target}" was not found.`);
		this.checkCan('mute', null, room);
		const SOON_EXPIRING_TIME = 3 * 30 * 24 * 60 * 60 * 1000; // 3 months

		if (!room.persist) throw new Chat.ErrorMessage(this.TL`This room does not support blacklists.`);

		const roomUserids = Punishments.roomUserids.get(room.roomid);
		if (!roomUserids || roomUserids.size === 0) {
			return this.sendReply(this.TL`This room has no blacklisted users.`);
		}
		const blMap = new Map<ID | PunishType, any[]>();
		let ips = '';

		for (const [userid, punishmentList] of roomUserids) {
			for (const punishment of punishmentList) {
				const { type, id, expireTime } = punishment;
				if (type === 'BLACKLIST') {
					if (!blMap.has(id)) blMap.set(id, [expireTime]);
					if (id !== userid) blMap.get(id)!.push(userid);
				}
			}
		}

		if (user.can('ip')) {
			const roomIps = Punishments.roomIps.get(room.roomid);

			if (roomIps) {
				ips = '/ips';
				for (const [ip, punishments] of roomIps) {
					for (const punishment of punishments) {
						const { type, id } = punishment;
						if (type === 'BLACKLIST') {
							if (!blMap.has(id)) blMap.set(id, []);
							blMap.get(id)!.push(ip);
						}
					}
				}
			}
		}

		const soonExpiring = (cmd === 'expiringblacklists' || cmd === 'expiringbls');
		const roomTitle = Utils.escapeHTML(room.title);
		let buf = soonExpiring ?
			this.TL`Blacklist for ${roomTitle} (expiring within 3 months):` :
			this.TL`Blacklist for ${roomTitle}:`;
		buf += `<br />`;

		for (const [userid, data] of blMap) {
			const [expireTime, ...alts] = data;
			if (soonExpiring && expireTime > Date.now() + SOON_EXPIRING_TIME) continue;
			const expiresIn = new Date(expireTime).getTime() - Date.now();
			const expiresDays = Math.round(expiresIn / 1000 / 60 / 60 / 24);
			buf += `- <strong>${userid}</strong>, `;
			buf += expiresDays > 1 ? this.TL`for ${expiresDays} days` : this.TL`for ${expiresDays} day`;
			if (alts.length) {
				const altList = alts.join(', ');
				buf += ips ? this.TL`, alts/ips: ${altList}` : this.TL`, alts: ${altList}`;
			}
			buf += `<br />`;
		}

		this.sendReplyBox(buf);
	},
	showblacklisthelp: [
		TLkey`/showblacklist OR /showbl - show a list of blacklisted users in the room. Requires: % @ # ~`,
		TLkey`/expiringblacklists OR /expiringbls - show a list of blacklisted users from the room whose blacklists are expiring in 3 months or less. Requires: % @ # ~`,
	],
};
