/**
 * Friends list plugin.
 * Allows for adding and removing friends, as well as seeing their activity.
 * Written by Mia.
 * @author mia-pi-git
 */

import { Utils } from '../../lib/utils';
import { TLkey, type Translator } from '../../sim/dex-text';
import { MAX_REQUESTS, sendPM, sendRequestNotification } from '../friends';

const STATUS_COLORS: { [k: string]: string } = {
	idle: '#ff7000',
	online: '#009900',
	busy: '#cc3838',
};

const STATUS_TITLES: { [k: string]: string } = {
	online: TLkey`Online`,
	idle: TLkey`Idle`,
	busy: TLkey`Busy`,
	offline: TLkey`Offline`,
};

// once every 15 minutes
const LOGIN_NOTIFY_THROTTLE = 15 * 60 * 1000;

/** CobblemonShowdown : aide des commandes, partagée par /friendshelp et la page d'aide (traduite avec TL). */
const HELP_LINES = [
	TLkey`<code>/friend list</code> - View current friends.`,
	TLkey`<code>/friend add [name]</code> OR <code>/friend [name]</code> - Send a friend request to [name], if you don't have them added.`,
	TLkey`<code>/friend remove [username]</code> OR <code>/unfriend [username]</code>  - Unfriend the user.`,
	TLkey`<code>/friend accept [username]</code> - Accepts the friend request from [username], if it exists.`,
	TLkey`<code>/friend reject [username]</code> - Rejects the friend request from [username], if it exists.`,
	TLkey`<code>/friend toggle [off/on]</code> - Enable or disable receiving of friend requests.`,
	TLkey`<code>/friend hidenotifications</code> OR <code>hidenotifs</code> - Opts out of receiving friend notifications.`,
	TLkey`<code>/friend viewnotifications</code> OR <code>viewnotifs</code> - Opts into view friend notifications.`,
	TLkey`<code>/friend listdisplay [on/off]</code> - Opts [in/out] of letting others view your friends list.`,
	TLkey`<code>/friend viewlist [user]</code> - View the given [user]'s friend list, if they're allowing others to see.`,
	TLkey`<code>/friends sharebattles [on|off]</code> - Allow or disallow your friends from seeing your ongoing battles.`,
];

/**
 * CobblemonShowdown : « il y a 3 heures » / « 3 hours ago » dans la langue de l'utilisateur
 * (Chat.toDurationString n'existe qu'en anglais).
 */
function timeAgo(language: ID | null, duration: number) {
	const UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
		['year', 365 * 24 * 60 * 60 * 1000],
		['month', 30 * 24 * 60 * 60 * 1000],
		['day', 24 * 60 * 60 * 1000],
		['hour', 60 * 60 * 1000],
		['minute', 60 * 1000],
		['second', 1000],
	];
	const [unit, length] = UNITS.find(([, ms]) => duration >= ms) || UNITS[UNITS.length - 1];
	const value = -Math.round(duration / length);
	try {
		return new Intl.RelativeTimeFormat(Chat.getDexLanguage(language), { numeric: 'auto' }).format(value, unit);
	} catch {
		return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(value, unit);
	}
}

export const Friends = new class {
	async notifyPending(user: User) {
		if (user.settings.blockFriendRequests) return;
		const friendRequests = await Chat.Friends.getRequests(user);
		const pendingCount = friendRequests.received.size;
		if (pendingCount < 1) return;
		if (pendingCount === 1) {
			const sender = [...friendRequests.received][0] as ID;
			const senderName = Users.getExact(sender)?.name || sender;
			sendRequestNotification(user, sender, senderName);
		} else {
			sendPM(`/nonotify ${user.TL`You have ${pendingCount} friend requests pending!`}`, user.id, '~');
			sendPM(
				`/raw <button class="button" name="send" value="/j view-friends-received">${user.TL`View requests`}</button>`,
				user.id,
				'~'
			);
		}
	}
	async notifyConnection(user: User) {
		const connected = await Chat.Friends.getLastLogin(user.id);
		if (connected && (Date.now() - connected) < LOGIN_NOTIFY_THROTTLE) {
			return;
		}
		const friends = await Chat.Friends.getFriends(user.id);
		const friendName = `<username class="username">${Utils.escapeHTML(user.name)}</username>`;
		for (const f of friends) {
			const curUser = Users.getExact(f.friend);
			if (curUser?.settings.allowFriendNotifications) {
				// CobblemonShowdown : message dans la langue de chaque ami prévenu
				const message = `/nonotify ${curUser.TL`Your friend ${friendName} has just connected!`}`;
				curUser.send(`|pm|~|${curUser.getIdentity()}|${message}`);
			}
		}
	}
	addFriendForm(TL: Translator) {
		let buf = `<form data-submitsend="/friend addfrompage {username}">${TL`Add friend:`} <input class="textbox" name="username" /><br />`;
		buf += `<button class="button" type="submit">${TL`Add`} <i class="fa fa-paper-plane"></i></button></form>`;
		return buf;
	}
	async visualizeList(userid: ID, context: Chat.PageContext) {
		const TL = context.TL;
		const friends = await Chat.Friends.getFriends(userid, context.language);
		const categorized: { [k: string]: string[] } = {
			online: [],
			idle: [],
			busy: [],
			offline: [],
		};
		const loginTimes: { [k: string]: number } = {};
		// CobblemonShowdown : la colonne s'appelle send_login_data (allowing_login n'existe pas,
		// donc les heures de connexion étaient toujours affichées)
		for (const { friend: friendID, last_login, send_login_data: hideLogin } of friends) {
			const friend = Users.getExact(friendID);
			if (friend?.connected) {
				categorized[friend.statusType].push(friend.id);
			} else {
				categorized.offline.push(friendID);
				// hidelogin - 1 to disable it being visible
				if (!hideLogin && last_login) {
					loginTimes[toID(friendID)] = last_login;
				}
			}
		}

		const sorted = Object.keys(categorized)
			.filter(item => categorized[item].length > 0)
			.map(item => `${TL(STATUS_TITLES[item])} (${categorized[item].length})`);

		let buf = `<h3>${TL`Your friends:`} `;
		if (sorted.length > 0) {
			buf += `<small> ${TL`Total`} (${friends.length}) | ${sorted.join(' | ')}</small></h3> `;
		} else {
			buf += `</h3><em>${TL`You currently have no friends added.`}</em><br /><br />`;
			buf += `<strong>${TL`To add a friend, use <code>/friend add [username]</code>.`}</strong><br /><br />`;
			buf += this.addFriendForm(TL);
			return buf;
		}

		buf += this.addFriendForm(TL);

		for (const key in categorized) {
			const friendArray = categorized[key].sort();
			if (friendArray.length === 0) continue;
			buf += `<h4>${TL(STATUS_TITLES[key])} (${friendArray.length})</h4>`;
			for (const friend of friendArray) {
				const friendID = toID(friend);
				buf += `<div class="pad"><div>`;
				buf += this.displayFriend(friendID, context, loginTimes[friendID]);
				buf += `</div></div>`;
			}
		}

		return buf;
	}
	// much more info redacted
	async visualizePublicList(userid: ID, context: Chat.PageContext) {
		const TL = context.TL;
		const friends: string[] = (await Chat.Friends.getFriends(userid, context.language)).map(f => f.friend);
		let buf = `<h3>${TL`${userid}'s friends:`}</h3><hr />`;
		if (!friends.length) {
			buf += TL`This user has no friends added.`;
			return buf;
		}
		for (const friend of friends) {
			buf += `- <username>${friend}</username><br />`;
		}
		return buf;
	}
	displayFriend(userid: ID, context: Chat.PageContext, login?: number) {
		const TL = context.TL;
		const user = Users.getExact(userid); // we want this to be exact
		const name = Utils.escapeHTML(user ? user.name : userid);
		const statusType = user?.connected ?
			`<strong style="color:${STATUS_COLORS[user.statusType]}">◉ ${TL(STATUS_TITLES[user.statusType])}</strong>` :
			`◌ ${TL(STATUS_TITLES.offline)}`;
		let buf = user ?
			`<span class="username"> <username>${name}</username></span><span><small> (${statusType})</small></span>` :
			Utils.html`<i>${name}</i> <small>(${statusType})</small>`;
		buf += `<br />`;

		const curUser = Users.get(userid); // might be an alt
		if (user) {
			if (user.userMessage) {
				const status = Utils.html`<i>${user.userMessage}</i>`;
				buf += `${TL`Status: ${status}`}<br />`;
			}
		} else if (curUser && curUser.id !== userid) {
			buf += `<small>${TL`On an alternate account`}</small><br />`;
		}
		if (login && typeof login === 'number' && !user?.connected) {
			const time = `<time>${new Date(Number(login)).toISOString()}</time>`;
			const ago = timeAgo(context.language, Date.now() - login);
			buf += TL`Last seen: ${time} (${ago})`;
		} else if (typeof login === 'string') {
			buf += `${login}`;
		}
		buf = `<div class="infobox">${buf}</div>`;
		return toLink(buf);
	}
	checkCanUse(context: Chat.CommandContext | Chat.PageContext) {
		const user = context.user;
		// CobblemonShowdown : seul Config.usesqlitefriends active la liste d'amis (pas besoin de Config.usesqlite)
		if (!Config.usesqlitefriends) {
			throw new Chat.ErrorMessage(context.TL`The friends list feature is currently disabled.`);
		}
		// CobblemonShowdown : un compte enregistré suffit (autoconfirmed demande une victoire classée
		// sur le ladder officiel, impossible à obtenir sur ce site)
		if (!user.registered) {
			throw new Chat.ErrorMessage(
				context.TL`To use the friends list, you must be logged in to a registered account.`
			);
		}
		if (user.locked || user.namelocked || user.semilocked || user.permalocked) {
			throw new Chat.ErrorMessage(context.TL`You are locked, and so cannot use the friends feature.`);
		}
		if (!Users.globalAuth.atLeast(user, Config.usesqlitefriends)) {
			throw new Chat.ErrorMessage(context.TL`You are currently unable to use the friends feature.`);
		}
	}
	request(user: User, receiver: ID) {
		return Chat.Friends.request(user, receiver);
	}
	removeFriend(userid: ID, friendID: ID, language: ID | null = null) {
		return Chat.Friends.removeFriend(userid, friendID, language);
	}
	approveRequest(receiverID: ID, senderID: ID, language: ID | null = null) {
		return Chat.Friends.approveRequest(receiverID, senderID, language);
	}
	removeRequest(receiverID: ID, senderID: ID, language: ID | null = null) {
		return Chat.Friends.removeRequest(receiverID, senderID, language);
	}
	updateSpectatorLists(user: User) {
		if (!user.friends) return; // probably should never happen
		for (const id of user.friends) {
			// should only work if theyre on that userid, since friends list is by userid
			const curUser = Users.getExact(id);
			if (curUser) {
				for (const conn of curUser.connections) {
					if (conn.openPages?.has('friends-spectate')) {
						void Chat.parse('/friends view spectate', null, curUser, conn);
					}
				}
			}
		}
	}
};

/** UI functions chiefly for the chat page. */

function toLink(buf: string) {
	return buf.replace(/<a roomid="/g, `<a target="replace" href="/`);
}

function headerButtons(type: string, TL: Translator) {
	const buf = [];
	const icons: { [k: string]: string } = {
		sent: '<i class="fa fa-paper-plane"></i>',
		received: '<i class="fa fa-get-pocket"></i>',
		all: '<i class="fa fa-users"></i>',
		help: '<i class="fa fa-question-circle"></i>',
		settings: '<i class="fa fa-cog"></i>',
		spectate: '<i class="fa fa-binoculars"></i>',
	};
	const titles: { [k: string]: string } = {
		all: TL`All Friends`,
		spectate: TL`Spectate`,
		sent: TL`Sent`,
		received: TL`Received`,
		help: TL`Help`,
		settings: TL`Settings`,
	};
	for (const page in titles) {
		const title = titles[page];
		const icon = icons[page];
		if (page === type) {
			buf.push(`${icon} <strong>${title}</strong>`);
		} else {
			buf.push(`${icon} <a roomid="view-friends-${page}">${title}</a>`);
		}
	}
	const refresh = (
		`<button class="button" name="send" value="/j view-friends${type?.trim() ? `-${type}` : ''}" style="float: right">` +
		` <i class="fa fa-refresh"></i> ${TL('Refresh')}</button>`
	);
	return `<div style="line-height:25px">${buf.join(' / ')}${refresh}</div><hr />`;
}

/** CobblemonShowdown : deux boutons Activer / Désactiver (ou Autoriser / Cacher) d'un réglage. */
function settingButtons(
	enabled: unknown, disableCommand: string, enableCommand: string, disableLabel: string, enableLabel: string
) {
	let buf = `<button class="button${enabled ? `` : ` disabled`}" name="send" value="${disableCommand}">${disableLabel}</button> `;
	buf += `<button class="button${enabled ? ` disabled` : ``}" name="send" value="${enableCommand}">${enableLabel}</button>`;
	return buf;
}

export const commands: Chat.ChatCommands = {
	unfriend(target) {
		return this.parse(`/friend remove ${target}`);
	},
	friend: 'friends',
	friendslist: 'friends',
	friends: {
		''(target) {
			if (toID(target)) {
				return this.parse(`/friend add ${target}`);
			}
			return this.parse(`/friends list`);
		},
		viewlist(target, room, user) {
			Friends.checkCanUse(this);
			target = toID(target);
			if (!target) throw new Chat.ErrorMessage(this.TL`Specify a user.`);
			if (target === user.id) return this.parse(`/friends list`);
			return this.parse(`/j view-friends-viewuser-${target}`);
		},
		request: 'add',
		async add(target, room, user, connection) {
			Friends.checkCanUse(this);
			target = toID(target);
			if (target.length > 18) {
				throw new Chat.ErrorMessage(this.TL`That name is too long - choose a valid name.`);
			}
			if (!target) return this.parse('/help friends');
			await Friends.request(user, target as ID);
			this.refreshPage('friends-sent');
			if (toID(this.pmTargetName) !== target) {
				this.sendReply(this.TL`You sent a friend request to ${target}!`);
			}
		},
		/**
		 * CobblemonShowdown : demande d'ami envoyée depuis la page Amis ou la fiche d'un joueur.
		 * La réponse s'affiche en fenêtre au lieu d'un onglet caché sur téléphone.
		 */
		async addfrompage(target, room, user) {
			target = toID(target);
			if (!target) return;
			try {
				Friends.checkCanUse(this);
				if (target.length > 18) {
					throw new Chat.ErrorMessage(this.TL`That name is too long - choose a valid name.`);
				}
				await Friends.request(user, target as ID);
			} catch (e) {
				if (e instanceof Chat.ErrorMessage) return this.popupReply(e.message);
				throw e;
			}
			this.refreshPage('friends-sent');
			this.popupReply(this.TL`You sent a friend request to ${target}!`);
		},
		unfriend: 'remove',
		async remove(target, room, user) {
			Friends.checkCanUse(this);
			target = toID(target);
			if (!target) return this.parse('/help friends');

			await Friends.removeFriend(user.id, target as ID, this.language);
			this.sendReply(this.TL`Removed friend ${target}.`);

			await Chat.Friends.updateUserCache(user);
			this.refreshPage('friends-all');
			const targetUser = Users.get(target);
			if (targetUser) await Chat.Friends.updateUserCache(targetUser);
		},
		view(target) {
			return this.parse(`/join view-friends-${target}`);
		},
		list() {
			return this.parse(`/join view-friends-all`);
		},
		async accept(target, room, user, connection) {
			Friends.checkCanUse(this);
			target = toID(target);
			if (user.settings.blockFriendRequests) {
				throw new Chat.ErrorMessage(this.TL`You are currently blocking friend requests, and so cannot accept your own.`);
			}
			if (!target) return this.parse('/help friends');
			await Friends.approveRequest(user.id, target as ID, this.language);
			const targetUser = Users.get(target);
			sendPM(`/text ${user.TL`You accepted a friend request from ${target}.`}`, user.id, target);
			sendPM(`/uhtmlchange sent-${target},`, user.id, target);
			this.refreshPage('friends-received');
			if (targetUser) {
				const userName = user.name;
				sendPM(`/text ${targetUser.TL`${userName} accepted your friend request!`}`, targetUser.id, user.id);
				sendPM(`/uhtmlchange undo-${user.id},`, targetUser.id, user.id);
			}
			await Chat.Friends.updateUserCache(user);
			if (targetUser) await Chat.Friends.updateUserCache(targetUser);
		},
		deny: 'reject',
		async reject(target, room, user, connection) {
			Friends.checkCanUse(this);
			target = toID(target);
			if (!target) return this.parse('/help friends');
			const res = await Friends.removeRequest(user.id, target as ID, this.language);
			if (!res?.changes) {
				throw new Chat.ErrorMessage(this.TL`You have no friend request pending from ${target}.`);
			}
			const targetUser = Users.get(target);
			this.refreshPage('friends-received');
			sendPM(`/text ${user.TL`You denied a friend request from ${target}.`}`, user.id, target);
			sendPM(`/uhtmlchange sent-${target},`, user.id, target);
			if (targetUser) sendPM(`/uhtmlchange undo-${user.id},`, targetUser.id, user.id);
		},
		toggle(target, room, user, connection) {
			Friends.checkCanUse(this);
			const setting = user.settings.blockFriendRequests;
			target = target.trim();
			if (this.meansYes(target)) {
				if (!setting) throw new Chat.ErrorMessage(this.TL`You already are allowing friend requests.`);
				user.settings.blockFriendRequests = false;
				this.sendReply(this.TL`You are now allowing friend requests.`);
			} else if (this.meansNo(target)) {
				if (setting) throw new Chat.ErrorMessage(this.TL`You already are blocking incoming friend requests.`);
				user.settings.blockFriendRequests = true;
				this.sendReply(this.TL`You are now blocking incoming friend requests.`);
			} else {
				if (target) this.errorReply(this.TL`Unrecognized setting.`);
				this.sendReply(
					setting ? this.TL`You are currently blocking friend requests.` : this.TL`You are not blocking friend requests.`
				);
			}
			this.refreshPage('friends-settings');
			user.update();
		},
		async undorequest(target, room, user, connection) {
			Friends.checkCanUse(this);
			target = toID(target);
			const res = await Friends.removeRequest(target as ID, user.id, this.language);
			if (!res?.changes) {
				throw new Chat.ErrorMessage(this.TL`You have no pending friend request to ${target}.`);
			}
			const targetUser = Users.get(target);
			this.refreshPage('friends-sent');
			sendPM(`/text ${user.TL`You removed your friend request to ${target}.`}`, user.id, target);
			sendPM(`/uhtmlchange undo-${target},`, user.id, target);
			if (targetUser) sendPM(`/uhtmlchange sent-${user.id},`, targetUser.id, user.id);
		},
		hidenotifs: 'viewnotifications',
		hidenotifications: 'viewnotifications',
		viewnotifs: 'viewnotifications',
		viewnotifications(target, room, user, connection, cmd) {
			// Friends.checkCanUse(this);
			const setting = user.settings.allowFriendNotifications;
			target = target.trim();
			if (!cmd.includes('hide') || target && this.meansYes(target)) {
				if (setting) throw new Chat.ErrorMessage(this.TL`You are already allowing friend notifications.`);
				user.settings.allowFriendNotifications = true;
				this.sendReply(this.TL`You will now receive friend notifications.`);
			} else if (cmd.includes('hide') || target && this.meansNo(target)) {
				if (!setting) throw new Chat.ErrorMessage(this.TL`You are already not receiving friend notifications.`);
				user.settings.allowFriendNotifications = false;
				this.sendReply(this.TL`You will not receive friend notifications.`);
			} else {
				if (target) this.errorReply(this.TL`Unrecognized setting.`);
				this.sendReply(
					setting ? this.TL`You are currently allowing friend notifications.` : this.TL`Your friend notifications are disabled.`
				);
			}
			this.refreshPage('friends-settings');
			user.update();
		},
		hidelogins: 'togglelogins',
		showlogins: 'togglelogins',
		async togglelogins(target, room, user, connection, cmd) {
			Friends.checkCanUse(this);
			const hide = cmd.includes('hide');
			if (!hide && !cmd.includes('show')) throw new Chat.ErrorMessage(this.TL`Invalid setting.`);
			// CobblemonShowdown : le réglage enregistré dans la base fait foi (c'est lui que lisent
			// la page des réglages et la liste d'amis) ; user.settings.hideLogins suit la demande.
			user.settings.hideLogins = hide;
			const { send_login_data: setting } = await Chat.Friends.getSettings(user.id, this.language);
			if (hide) {
				if (setting) throw new Chat.ErrorMessage(this.TL`You are already hiding your logins from friends.`);
				await Chat.Friends.hideLoginData(user.id, this.language);
				this.sendReply(this.TL`You are now hiding your login times from your friends.`);
			} else {
				if (!setting) throw new Chat.ErrorMessage(this.TL`You are already allowing friends to see your login times.`);
				await Chat.Friends.allowLoginData(user.id, this.language);
				this.sendReply(this.TL`You are now allowing your friends to see your login times.`);
			}
			this.refreshPage('friends-settings');
			user.update();
		},
		async listdisplay(target, room, user, connection) {
			Friends.checkCanUse(this);
			target = toID(target);
			const { public_list: setting } = await Chat.Friends.getSettings(user.id, this.language);
			if (this.meansYes(target)) {
				if (setting) {
					throw new Chat.ErrorMessage(this.TL`You are already allowing other people to view your friends list.`);
				}
				await Chat.Friends.setHideList(user.id, true, this.language);
				this.refreshPage('friends-settings');
				return this.sendReply(this.TL`You are now allowing other people to view your friends list.`);
			} else if (this.meansNo(target)) {
				if (!setting) {
					throw new Chat.ErrorMessage(this.TL`You are already hiding your friends list.`);
				}
				await Chat.Friends.setHideList(user.id, false, this.language);
				this.refreshPage('friends-settings');
				return this.sendReply(this.TL`You are now hiding your friends list.`);
			}
			this.sendReply(setting ?
				this.TL`You are currently displaying your friends list.` :
				this.TL`You are currently hiding your friends list.`);
		},
		invalidatecache(target, room, user) {
			this.canUseConsole();
			for (const curUser of Users.users.values()) {
				void Chat.Friends.updateUserCache(curUser);
			}
			Rooms.global.notifyRooms(
				['staff', 'development'],
				`|c|${user.getIdentity()}|/log ${user.name} used /friends invalidatecache`,
			);
			this.sendReply(this.TL`You invalidated each entry in the friends database cache.`);
		},
		sharebattles(target, room, user) {
			Friends.checkCanUse(this);
			target = toID(target);
			if (this.meansYes(target)) {
				if (user.settings.displayBattlesToFriends) {
					throw new Chat.ErrorMessage(this.TL`You are already sharing your battles with friends.`);
				}
				user.settings.displayBattlesToFriends = true;
				this.sendReply(this.TL`You are now allowing your friends to see your ongoing battles.`);
			} else if (this.meansNo(target)) {
				if (!user.settings.displayBattlesToFriends) {
					throw new Chat.ErrorMessage(this.TL`You are already not sharing your battles with friends.`);
				}
				user.settings.displayBattlesToFriends = false;
				this.sendReply(this.TL`You are now hiding your ongoing battles from your friends.`);
			} else {
				if (!target) return this.parse('/help friends sharebattles');
				throw new Chat.ErrorMessage(this.TL`Invalid setting '${target}'. Provide 'on' or 'off'.`);
			}
			user.update();
			this.refreshPage('friends-settings');
		},
		sharebattleshelp: [
			TLkey`/friends sharebattles [on|off] - Allow or disallow your friends from seeing your ongoing battles.`,
		],
	},
	friendshelp() {
		this.runBroadcast();
		if (this.broadcasting) {
			const lines = HELP_LINES.map(line => this.TL(line));
			// les trois premières commandes, puis les autres dans « Plus de commandes... »
			return this.sendReplyBox([
				...lines.slice(0, 3),
				`<details class="readmore"><summary>${this.TL`More commands...`}</summary>`,
				`${lines.slice(3).join('<br />')}</details>`,
			].join('<br />'));
		}
		return this.parse('/join view-friends-help');
	},
};

export const pages: Chat.PageTable = {
	async friends(args, user) {
		if (!user.named) return Rooms.RETRY_AFTER_LOGIN;
		Friends.checkCanUse(this);
		const type = args.shift();
		let buf = '<div class="pad">';
		switch (toID(type)) {
		case 'outgoing': case 'sent':
			this.title = this.TL`[Friends] Sent`;
			buf += headerButtons('sent', this.TL);
			if (user.settings.blockFriendRequests) {
				buf += `<h3>${this.TL`You are currently blocking friend requests.`}</h3>`;
			}
			const { sent } = await Chat.Friends.getRequests(user);
			if (sent.size < 1) {
				buf += `<strong>${this.TL`You have no outgoing friend requests pending.`}</strong><br />`;
				buf += `<br />${this.TL`To add a friend, use <code>/friend add [username]</code>.`}`;
				buf += `</div>`;
				return toLink(buf);
			}
			const sentCount = sent.size;
			buf += `<h3>`;
			buf += sentCount === 1 ?
				this.TL`You have 1 outgoing friend request pending.` :
				this.TL`You have ${sentCount} outgoing friend requests pending.`;
			if (sentCount >= MAX_REQUESTS) buf += ` ${this.TL`(maximum reached)`}`;
			buf += `</h3>`;
			for (const request of sent) {
				buf += `<br /><div class="infobox">`;
				buf += `<strong>${request}</strong>`;
				buf += ` <button class="button" name="send" value="/friends undorequest ${request}">`;
				buf += `<i class="fa fa-undo"></i> ${this.TL('Undo')}</button>`;
				buf += `</div>`;
			}
			break;
		case 'received': case 'incoming':
			this.title = this.TL`[Friends] Received`;
			buf += headerButtons('received', this.TL);
			const { received } = await Chat.Friends.getRequests(user);
			if (received.size < 1) {
				buf += `<strong>${this.TL`You have no pending friend requests.`}</strong>`;
				buf += `</div>`;
				return toLink(buf);
			}
			const receivedCount = received.size;
			buf += `<h3>`;
			buf += receivedCount === 1 ?
				this.TL`You have 1 incoming friend request pending.` :
				this.TL`You have ${receivedCount} incoming friend requests pending.`;
			buf += `</h3>`;
			for (const request of received) {
				buf += `<br /><div class="infobox">`;
				buf += `<strong>${request}</strong>`;
				buf += ` <button class="button" name="send" value="/friends accept ${request}">${this.TL('Accept')}</button> |`;
				buf += ` <button class="button" name="send" value="/friends reject ${request}">${this.TL('Deny')}</button>`;
				buf += `</div>`;
			}
			break;
		case 'viewuser':
			const target = toID(args.shift());
			if (!target) throw new Chat.ErrorMessage(this.TL`Specify a user.`);
			if (target === user.id) {
				throw new Chat.ErrorMessage(this.TL`Use /friends list to view your own list.`);
			}
			const { public_list: isAllowing } = await Chat.Friends.getSettings(target, this.language);
			if (!isAllowing) {
				throw new Chat.ErrorMessage(this.TL`${target}'s friends list is not public or they do not have one.`);
			}
			this.title = this.TL`[Friends List] ${target}`;
			buf += await Friends.visualizePublicList(target, this);
			break;
		case 'help':
			this.title = this.TL`[Friends] Help`;
			buf += headerButtons('help', this.TL);
			buf += `<h3>${this.TL`Help`}</h3>`;
			buf += `<strong>${this.TL`/friend OR /friends OR /friendslist:`}</strong><br /><ul><li>`;
			buf += HELP_LINES.map(line => this.TL(line)).join('</li><li>');
			buf += `</li></ul>`;
			break;
		case 'settings':
			this.title = this.TL`[Friends] Settings`;
			buf += headerButtons('settings', this.TL);
			buf += `<h3>${this.TL`Friends Settings:`}</h3>`;
			const settings = user.settings;
			const { public_list, send_login_data } = await Chat.Friends.getSettings(user.id, this.language);
			const [enable, disable] = [this.TL`Enable`, this.TL`Disable`];
			buf += `<strong>${this.TL`Notify me when my friends come online:`}</strong><br />`;
			buf += settingButtons(
				settings.allowFriendNotifications, `/friends hidenotifs`, `/friends viewnotifs`, disable, enable
			);
			buf += ` <br /><br />`;

			buf += `<strong>${this.TL`Receive friend requests:`}</strong><br />`;
			buf += settingButtons(
				!settings.blockFriendRequests, `/friends toggle off`, `/friends toggle on`, disable, enable
			);
			buf += ` <br /><br />`;

			buf += `<strong>${this.TL`Allow others to see your list:`}</strong><br />`;
			buf += settingButtons(
				public_list, `/friends listdisplay no`, `/friends listdisplay yes`, this.TL`Hide`, this.TL`Allow`
			);
			buf += ` <br /><br />`;

			buf += `<strong>${this.TL`Allow friends to see my login times:`}</strong><br />`;
			buf += settingButtons(!send_login_data, `/friends hidelogins`, `/friends showlogins`, disable, enable);
			buf += `<br /><br />`;

			buf += `<strong>${this.TL`Allow friends to see my hidden battles on the spectator list:`}</strong><br />`;
			buf += settingButtons(
				settings.displayBattlesToFriends, `/friends sharebattles off`, `/friends sharebattles on`, disable, enable
			);
			buf += ` <br /><br />`;

			buf += `<strong>${this.TL`Block PMs except from friends (and staff):`}</strong><br />`;
			buf += settingButtons(
				settings.blockPMs, `/unblockpms&#10;/j view-friends-settings`, `/blockpms friends&#10;/j view-friends-settings`,
				disable, enable
			);
			buf += ` <br /><br />`;

			buf += `<strong>${this.TL`Block challenges except from friends (and staff):`}</strong><br />`;
			buf += settingButtons(
				settings.blockChallenges, `/unblockchallenges&#10;/j view-friends-settings`,
				`/blockchallenges friends&#10;/j view-friends-settings`, disable, enable
			);
			buf += ` <br /><br />`;
			break;
		case 'spectate':
			this.title = this.TL`[Friends] Spectating`;
			buf += headerButtons('spectate', this.TL);
			buf += `<h3>${this.TL`Spectate your friends:`}</h3>`;

			const toggleMessage = user.settings.displayBattlesToFriends ?
				this.TL`Use the <a roomid="view-friends-settings">settings page</a> to disallow your friends from seeing your hidden battles on this page.` :
				this.TL`Use the <a roomid="view-friends-settings">settings page</a> to allow your friends to see your hidden battles on this page.`;
			buf += `<i><small>${toggleMessage}</small></i><br />`;
			buf += `<br />`;
			if (!user.friends?.size) {
				buf += `<h3>${this.TL`You have no friends to spectate.`}</h3>`;
				break;
			}
			const friends = [];
			for (const friendID of user.friends) {
				const friend = Users.getExact(friendID);
				if (!friend) continue;
				friends.push(friend);
			}
			if (!friends.length) {
				buf += `<em>${this.TL`None of your friends are currently around to spectate.`}</em>`;
				break;
			}

			const battles: [User, string][] = [];
			for (const friend of friends) {
				const curBattles: [User, string][] = [...friend.inRooms]
					.filter(id => {
						const battle = Rooms.get(id)?.battle;
						return (
							battle?.playerTable[friend.id] &&
							(!battle.roomid.endsWith('pw') || friend.settings.displayBattlesToFriends)
						);
					})
					.map(id => [friend, id]);
				if (!curBattles.length) continue;
				battles.push(...curBattles);
			}
			Utils.sortBy(battles, ([, id]) => -Number(id.split('-')[2]));

			if (!battles.length) {
				buf += `<em>${this.TL`None of your friends are currently in a battle.`}</em>`;
			} else {
				buf += battles.map(([friend, battle]) => {
					// we've already ensured the battle exists in the filter above
					// (and .battle only exists if it's a GameRoom, so this cast is safe)
					const room = Rooms.get(battle) as GameRoom & { battle: Rooms.RoomBattle };
					const format = Dex.formats.get(room.battle.format).name;
					const rating = room.battle.rated;
					const rated = rating ? `<small style="float:right">(${this.TL`Rated: ${rating}`})</small>` : '';
					const friendName = friend.name;
					const title = room.title.includes(friend.name) ?
						room.title.replace(friend.name, `<strong>${friend.name}</strong>`) :
						(room.title + ` ${this.TL`(with ${friendName})`}`);
					return `<a class="blocklink" href="/${room.roomid}"><small>[${format}]</small>${rated}<br /> ${title}</a>`;
				}).join('<br />');
			}
			break;
		default:
			this.title = this.TL`[Friends] All Friends`;
			buf += headerButtons('all', this.TL);
			buf += await Friends.visualizeList(user.id, this);
		}
		buf += `</div>`;
		return toLink(buf);
	},
};

export const handlers: Chat.Handlers = {
	onBattleStart(user) {
		return Friends.updateSpectatorLists(user);
	},
	onBattleLeave(user, room) {
		return Friends.updateSpectatorLists(user);
	},
	onBattleEnd(battle, winner, players) {
		for (const id of players) {
			const user = Users.get(id);
			if (!user) continue;
			Friends.updateSpectatorLists(user);
		}
	},
	onDisconnect(user) {
		// CobblemonShowdown : rien n'est écrit pour les invités (seuls les comptes enregistrés ont des amis)
		if (!Config.usesqlitefriends || !user.registered) return;
		void Chat.Friends.writeLogin(user.id);
	},
};

export const loginfilter: Chat.LoginFilter = user => {
	if (!Config.usesqlitefriends || !Users.globalAuth.atLeast(user, Config.usesqlitefriends)) {
		return;
	}
	// CobblemonShowdown : seuls les comptes enregistrés ont une liste d'amis (pas de lignes pour les invités)
	if (!user.registered) return;

	// notify users of pending requests
	void Friends.notifyPending(user);

	// (quietly) notify their friends (that have opted in) that they are online
	void Friends.notifyConnection(user);
	// write login time
	void Chat.Friends.writeLogin(user.id);

	void Chat.Friends.updateUserCache(user);
};
