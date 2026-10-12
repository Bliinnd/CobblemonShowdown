/**
 * Friends chat-plugin database handler.
 * @author mia-pi-git
 */
// CobblemonShowdown : la base des amis utilise le module SQLite intégré à Node (node:sqlite)
// au lieu de better-sqlite3, qui ne s'installe pas sur beaucoup d'hébergements Plesk.
import type * as sqlite from 'node:sqlite';
import type { Translator } from '../sim/dex-text';
import { Utils, FS, ProcessManager } from '../lib';
import * as ConfigLoader from './config-loader';
import * as path from 'path';

/** Max friends per user */
export const MAX_FRIENDS = 100;
/** Max friend requests. */
export const MAX_REQUESTS = 6;
export const DEFAULT_FILE = FS('databases/friends.db').path;
const REQUEST_EXPIRY_TIME = 30 * 24 * 60 * 60 * 1000;
const PM_TIMEOUT = 30 * 60 * 1000;

export interface DatabaseRequest {
	statement: string;
	type: 'all' | 'get' | 'run' | 'transaction';
	data: AnyObject | any[];
}

export interface DatabaseResult {
	/**
	 * Specify this to return an error message to the user.
	 * CobblemonShowdown : c'est l'identifiant d'un message de FAILURES, traduit dans le processus principal.
	 */
	error?: string;
	/** CobblemonShowdown : paramètres du message d'erreur (pseudos, nombres). */
	errorArgs?: string[];
	result?: any;
}

/** CobblemonShowdown : une ligne renvoyée par getFriends(). */
export interface Friend {
	/** ID du compte ami. */
	friend: ID;
	/** 1 si l'ami cache ses heures de connexion (null s'il n'a pas de ligne dans friend_settings). */
	send_login_data: number | null;
	last_login: number | null;
	public_list: number | null;
}

/**
 * CobblemonShowdown : messages d'échec du processus de la base. Le processus enfant ne renvoie
 * qu'un identifiant et ses paramètres ; le texte est traduit ici, dans le processus principal,
 * dans la langue de l'utilisateur.
 */
const FAILURES = {
	crash: (TL: Translator) => TL`Sorry! The database process crashed. We've been notified and will fix this.`,
	maxFriends: (TL: Translator) => TL`You are at the maximum number of friends.`,
	alreadyFriends: (TL: Translator, username: string) => TL`You are already friends with ${username}.`,
	alreadySent: (TL: Translator, username: string) => TL`You have already sent a friend request to ${username}.`,
	alreadyReceived: (TL: Translator, username: string) => (
		TL`${username} has already sent you a friend request. Use "/friends view received" to accept it.`
	),
	maxRequests: (TL: Translator, max: string) => (
		TL`You already have ${max} pending friend requests. Use "/friends view sent" to see your outgoing requests and "/friends view received" to see your incoming requests.`
	),
	noRequest: (TL: Translator, username: string) => TL`You have no friend request pending from ${username}.`,
};
type FailureID = keyof typeof FAILURES;

function failureMessage(TL: Translator, result: DatabaseResult) {
	const failure = FAILURES[result.error as FailureID] as ((TL: Translator, ...args: string[]) => string) | undefined;
	if (!failure) return result.error!;
	return failure(TL, ...(result.errorArgs || []));
}

/** Like Chat.ErrorMessage, but made for the subprocess so we can throw errors to the user not using errorMessage
 * because errorMessage crashes when imported (plus we have to spawn dex, etc, all unnecessary - this is easier)
 */
export class FailureMessage extends Error {
	/** CobblemonShowdown : paramètres du message, traduit dans le processus principal (voir FAILURES). */
	args: string[];
	constructor(message: FailureID, ...args: (string | number)[]) {
		super(message);
		this.name = 'FailureMessage';
		this.args = args.map(String);
		Error.captureStackTrace(this, FailureMessage);
	}
}

export function sendPM(message: string, to: string, from: string) {
	const senderID = toID(from);
	const receiverID = toID(to);
	const sendingUser = Users.get(senderID);
	const receivingUser = Users.get(receiverID);
	const fromIdentity = sendingUser?.connected ? sendingUser.getIdentity() : ` ${senderID}`;
	const toIdentity = receivingUser?.connected ? receivingUser.getIdentity() : ` ${receiverID}`;

	if (from === '~') {
		return receivingUser?.send(`|pm|~|${toIdentity}|${message}`);
	}
	receivingUser?.send(`|pm|${fromIdentity}|${toIdentity}|${message}`);
}

function requestDisclaimer(TL: Translator) {
	return `/raw <small>${TL`Note: If this request is accepted, your friend will be notified when you come online, and you will be notified when they do, unless you opt out of receiving them.`}</small>`;
}

/**
 * CobblemonShowdown : messages privés d'une demande d'ami reçue (avec les boutons Accepter / Refuser),
 * dans la langue du destinataire. Utilisé à l'envoi de la demande et à la connexion du destinataire.
 */
export function sendRequestNotification(receiver: User, senderID: ID, senderName: string) {
	const TL = receiver.TL;
	const sender = Utils.html`<span class="username">${senderName}</span>`;
	sendPM(`/raw ${TL`${sender} sent you a friend request!`}`, receiver.id, senderID);
	let buf = Utils.html`/uhtml sent-${senderID},<button class="button" name="send" value="/friends accept ${senderID}">`;
	buf += `${TL`Accept`}</button> | `;
	buf += Utils.html`<button class="button" name="send" value="/friends reject ${senderID}">`;
	buf += `${TL`Deny`}</button><br /> `;
	buf += `<small>${TL`(You can also stop this user from sending you friend requests with <code>/ignore</code>)`}</small>`;
	sendPM(buf, receiver.id, senderID);
	sendPM(requestDisclaimer(TL), receiver.id, senderID);
}

function canPM(sender: User, receiver: User | null) {
	if (!receiver?.settings.blockPMs) return true;
	if (receiver.settings.blockPMs === true) return sender.can('lock');
	if (receiver.settings.blockPMs === 'friends') return false;
	return Users.globalAuth.atLeast(sender, receiver.settings.blockPMs);
}

export class FriendsDatabase {
	file: string;
	constructor(file: string = DEFAULT_FILE) {
		this.file = file === ':memory:' ? file : path.resolve(file);
	}
	async updateUserCache(user: User) {
		user.friends = new Set(); // we clear to account for users who may have been deleted
		const friends = await this.getFriends(user.id, user.language);
		for (const friend of friends) {
			// CobblemonShowdown : `friend.userid` valait null pour un ami sans réglages (LEFT JOIN)
			user.friends.add(friend.friend);
		}
		return user.friends;
	}
	static setupDatabase(fileName?: string) {
		const file = fileName || process.env.filename || DEFAULT_FILE;
		const exists = FS(file).existsSync() || file === ':memory:';
		const { DatabaseSync } = require('node:sqlite') as typeof sqlite;
		const database = new DatabaseSync(file);
		if (!exists) {
			database.exec(FS('databases/schemas/friends.sql').readSync());
		} else {
			let val;
			try {
				val = (database
					.prepare(`SELECT val FROM database_settings WHERE name = 'version'`)
					.get() as AnyObject).val;
			} catch {}
			const actualVersion = FS(`databases/migrations/friends`).readdirIfExistsSync().length;
			if (val === undefined) {
				// hasn't been set up before, write new version.
				database.exec(FS('databases/schemas/friends.sql').readSync());
			}
			if (typeof val === 'number' && val !== actualVersion) {
				throw new Error(`Friends DB is out of date, please migrate to latest version.`);
			}
		}
		database.exec(FS(`databases/schemas/friends-startup.sql`).readSync());

		for (const k in FUNCTIONS) {
			database.function(k, FUNCTIONS[k]);
		}

		for (const k in ACTIONS) {
			try {
				statements[k] = database.prepare(ACTIONS[k as keyof typeof ACTIONS]);
			} catch (e: any) {
				throw new Error(`Friends DB statement crashed: ${ACTIONS[k as keyof typeof ACTIONS]} (${e.message})`);
			}
		}

		for (const k in TRANSACTIONS) {
			transactions[k] = makeTransaction(database, TRANSACTIONS[k]);
		}

		statements.expire.run();
		return { database, statements };
	}
	async getFriends(userid: ID, language: ID | null = null): Promise<Friend[]> {
		return (await this.all('get', [userid, MAX_FRIENDS], language)) || [];
	}
	async getRequests(user: User) {
		const sent = new Set<string>();
		const received = new Set<string>();
		if (user.settings.blockFriendRequests) {
			// delete any pending requests that may have been sent to them while offline
			// we used to return but we will not since you can send requests while blocking
			await this.run('deleteReceivedRequests', [user.id], user.language);
		}
		const sentResults = await this.all('getSent', [user.id], user.language);
		if (sentResults === null) return { sent, received };
		for (const request of sentResults) {
			sent.add(request.receiver);
		}
		const receivedResults = await this.all('getReceived', [user.id], user.language) || [];
		if (!receivedResults) {
			return { received, sent };
		}
		for (const request of receivedResults) {
			received.add(request.sender);
		}
		return { sent, received };
	}
	all(statement: string, data: any[] | AnyObject, language: ID | null = null): Promise<any[] | null> {
		return this.query({ type: 'all', data, statement }, language);
	}
	transaction(
		statement: string, data: any[] | AnyObject, language: ID | null = null
	): Promise<{ result: any } | null> {
		return this.query({ data, statement, type: 'transaction' }, language);
	}
	run(
		statement: string, data: any[] | AnyObject, language: ID | null = null
	): Promise<{ changes: number, lastInsertRowid: number }> {
		return this.query({ statement, data, type: 'run' }, language);
	}
	get(statement: string, data: any[] | AnyObject, language: ID | null = null): Promise<AnyObject | null> {
		return this.query({ statement, data, type: 'get' }, language);
	}
	/** CobblemonShowdown : `language` sert à traduire les messages d'échec renvoyés par la base. */
	private async query(input: DatabaseRequest, language: ID | null) {
		// CobblemonShowdown : la liste d'amis dépend seulement de Config.usesqlitefriends ;
		// Config.usesqlite (les autres bases, qui demandent better-sqlite3) peut rester désactivé.
		if (!Config.usesqlitefriends) return null;
		const process = PM.acquire();
		if (!process) return null;
		const result = await process.query(input);
		if (result.error) {
			throw new Chat.ErrorMessage(failureMessage(Chat.getTranslator(language), result));
		}
		return result.result;
	}
	async request(user: User, receiverID: ID) {
		const receiver = Users.getExact(receiverID);
		const receiverName = receiver?.name || receiverID;
		const TL = user.TL;
		if (receiverID === user.id || receiver?.previousIDs.includes(user.id)) {
			throw new Chat.ErrorMessage(TL`You can't friend yourself.`);
		}
		// CobblemonShowdown : pas de demande d'ami vers un invité (seuls les comptes enregistrés ont des amis)
		if (receiverID.startsWith('guest') || (receiver && !receiver.registered)) {
			throw new Chat.ErrorMessage(TL`${receiverID} is not a registered account, and cannot be friended.`);
		}
		if (receiver?.settings.blockFriendRequests) {
			throw new Chat.ErrorMessage(TL`${receiverName} is blocking friend requests.`);
		}
		if (!canPM(user, receiver)) {
			throw new Chat.ErrorMessage(TL`This user is blocking PMs, and cannot be friended right now.`);
		}

		const result = await this.transaction('send', [user.id, receiverID], user.language);
		if (receiver) {
			sendRequestNotification(receiver, user.id, user.name);
		}
		sendPM(`/nonotify ${TL`You sent a friend request to ${receiverName}!`}`, user.name, receiverID);
		sendPM(
			`/uhtml undo-${receiverID},<button class="button" name="send" value="/friends undorequest ${Utils.escapeHTML(receiverID)}">` +
			`<i class="fa fa-undo"></i> ${TL`Undo`}</button>`, user.name, receiverID
		);
		sendPM(requestDisclaimer(TL), user.id, receiverID);
		return result;
	}
	async removeRequest(receiverID: ID, senderID: ID, language: ID | null = null) {
		const TL = Chat.getTranslator(language);
		if (!senderID) throw new Chat.ErrorMessage(TL`Invalid sender username.`);
		if (!receiverID) throw new Chat.ErrorMessage(TL`Invalid receiver username.`);

		return this.run('deleteRequest', [senderID, receiverID], language);
	}
	async approveRequest(receiverID: ID, senderID: ID, language: ID | null = null) {
		return this.transaction('accept', [senderID, receiverID], language);
	}
	async removeFriend(userid: ID, friendID: ID, language: ID | null = null) {
		const TL = Chat.getTranslator(language);
		if (!friendID || !userid) throw new Chat.ErrorMessage(TL`Invalid usernames supplied.`);

		const result = await this.run('delete', { user1: userid, user2: friendID }, language);
		if (!result || result.changes < 1) {
			throw new Chat.ErrorMessage(TL`You do not have ${friendID} friended.`);
		}
	}
	writeLogin(user: ID) {
		return this.run('login', [user, Date.now(), Date.now()]);
	}
	hideLoginData(id: ID, language: ID | null = null) {
		return this.run('hideLogin', [id, Date.now()], language);
	}
	allowLoginData(id: ID, language: ID | null = null) {
		return this.run('showLogin', [id], language);
	}
	async getLastLogin(userid: ID) {
		const result = await this.get('checkLastLogin', [userid]);
		return parseInt(result?.['last_login']) || null;
	}
	async getSettings(userid: ID, language: ID | null = null) {
		return (await this.get('getSettings', [userid], language)) || {};
	}
	setHideList(userid: ID, setting: boolean, language: ID | null = null) {
		const num = setting ? 1 : 0;
		// name, send_login_data, last_login, public_list
		return this.run('toggleList', [userid, num, num], language);
	}
	async findFriendship(user1: string, user2: string): Promise<boolean> {
		user1 = toID(user1);
		user2 = toID(user2);
		// CobblemonShowdown : get() renvoie une seule ligne (ou rien), qui n'a pas de .length
		return !!(await this.get('findFriendship', { user1, user2 }));
	}
}

const statements: { [k: string]: sqlite.StatementSync } = {};
const transactions: { [k: string]: (input: any[]) => DatabaseResult } = {};

const ACTIONS = {
	add: (
		`REPLACE INTO friends (user1, user2) VALUES ($user1, $user2) ON CONFLICT (user1, user2) ` +
		`DO UPDATE SET user1 = $user1, user2 = $user2`
	),
	// CobblemonShowdown : colonnes nommées, car `SELECT *` renvoyait deux colonnes `userid`
	// (celle de friend_settings, null pour un ami sans réglages, écrasait celle de la vue).
	get: (
		`SELECT f.friend AS friend, fs.send_login_data AS send_login_data, fs.last_login AS last_login, ` +
		`fs.public_list AS public_list ` +
		`FROM friends_simplified f LEFT JOIN friend_settings fs ON f.friend = fs.userid WHERE f.userid = ? LIMIT ?`
	),
	delete: `DELETE FROM friends WHERE (user1 = $user1 AND user2 = $user2) OR (user1 = $user2 AND user2 = $user1)`,
	getSent: `SELECT receiver, sender FROM friend_requests WHERE sender = ?`,
	getReceived: `SELECT receiver, sender FROM friend_requests WHERE receiver = ?`,
	insertRequest: `INSERT INTO friend_requests(sender, receiver, sent_at) VALUES (?, ?, ?)`,
	deleteRequest: `DELETE FROM friend_requests WHERE sender = ? AND receiver = ?`,
	deleteReceivedRequests: `DELETE FROM friend_requests WHERE receiver = ?`,
	findFriendship: `SELECT * FROM friends WHERE (user1 = $user1 AND user2 = $user2) OR (user2 = $user1 AND user1 = $user2)`,
	findRequest: (
		`SELECT count(*) as num FROM friend_requests WHERE ` +
		`(sender = $user1 AND receiver = $user2) OR (sender = $user2 AND receiver = $user1)`
	),
	// CobblemonShowdown : demande dans un seul sens (expéditeur -> destinataire)
	findSentRequest: `SELECT count(*) as num FROM friend_requests WHERE sender = $sender AND receiver = $receiver`,
	countRequests: `SELECT count(*) as num FROM friend_requests WHERE (sender = ? OR receiver = ?)`,
	login: (
		`INSERT INTO friend_settings (userid, send_login_data, last_login, public_list) VALUES (?, 0, ?, 0) ` +
		`ON CONFLICT (userid) DO UPDATE SET last_login = ?`
	),
	checkLastLogin: `SELECT last_login FROM friend_settings WHERE userid = ?`,
	deleteLogin: `UPDATE friend_settings SET last_login = 0 WHERE userid = ?`,
	// CobblemonShowdown : ne supprime que les demandes de plus de 30 jours (avant, une seule vieille
	// demande suffisait pour supprimer toutes les demandes en attente).
	expire: `DELETE FROM friend_requests WHERE should_expire(sent_at) = 1`,
	hideLogin: ( // this works since if the insert works, they have no data, which means no public_list
		`INSERT INTO friend_settings (userid, send_login_data, last_login, public_list) VALUES (?, 1, ?, 0) ` +
		`ON CONFLICT (userid) DO UPDATE SET send_login_data = 1`
	),
	// CobblemonShowdown : remet seulement send_login_data à 0 (avant, la ligne entière était supprimée,
	// ce qui effaçait aussi le réglage de liste publique et l'heure de dernière connexion).
	showLogin: `UPDATE friend_settings SET send_login_data = 0 WHERE userid = ?`,
	countFriends: `SELECT count(*) as num FROM friends WHERE (user1 = ? OR user2 = ?)`,
	getSettings: `SELECT * FROM friend_settings WHERE userid = ?`,
	toggleList: (
		`INSERT INTO friend_settings (userid, send_login_data, last_login, public_list) VALUES (?, 0, 0, ?) ` +
		`ON CONFLICT (userid) DO UPDATE SET public_list = ?`
	),
};

const FUNCTIONS: { [k: string]: (...input: any[]) => any } = {
	'should_expire': (sentTime: number) => {
		if (Date.now() - sentTime > REQUEST_EXPIRY_TIME) return 1;
		return 0;
	},
};

/**
 * CobblemonShowdown : équivalent de database.transaction() de better-sqlite3 pour node:sqlite.
 * BEGIN puis COMMIT autour de la fonction, ROLLBACK si elle lève une erreur ;
 * un appel imbriqué dans une transaction en cours utilise un SAVEPOINT.
 */
function makeTransaction(database: sqlite.DatabaseSync, fn: (input: any[]) => DatabaseResult) {
	return (input: any[]) => {
		const nested = database.isTransaction;
		database.exec(nested ? `SAVEPOINT friends_transaction` : `BEGIN`);
		let result;
		try {
			result = fn(input);
		} catch (e) {
			try {
				database.exec(nested ? `ROLLBACK TO friends_transaction; RELEASE friends_transaction` : `ROLLBACK`);
			} catch {}
			throw e;
		}
		database.exec(nested ? `RELEASE friends_transaction` : `COMMIT`);
		return result;
	};
}

const TRANSACTIONS: { [k: string]: (input: any[]) => DatabaseResult } = {
	send: requests => {
		for (const request of requests) {
			const [senderID, receiverID] = request;
			const hasSentRequest = (
				statements.findSentRequest.get({ sender: senderID, receiver: receiverID }) as AnyObject
			)['num'];
			const hasReceivedRequest = (
				statements.findSentRequest.get({ sender: receiverID, receiver: senderID }) as AnyObject
			)['num'];
			const friends = (statements.countFriends.get(senderID, senderID) as AnyObject)['num'];
			const totalRequests = (statements.countRequests.get(senderID, senderID) as AnyObject)['num'];
			if (friends >= MAX_FRIENDS) {
				throw new FailureMessage('maxFriends');
			}
			const existingFriendship = statements.findFriendship.all({ user1: senderID, user2: receiverID });
			if (existingFriendship.length) {
				throw new FailureMessage('alreadyFriends', receiverID);
			}
			if (hasSentRequest) {
				throw new FailureMessage('alreadySent', receiverID);
			}
			// CobblemonShowdown : l'autre joueur nous a déjà envoyé une demande : il suffit de l'accepter
			if (hasReceivedRequest) {
				throw new FailureMessage('alreadyReceived', receiverID);
			}
			if (totalRequests >= MAX_REQUESTS) {
				throw new FailureMessage('maxRequests', MAX_REQUESTS);
			}
			statements.insertRequest.run(senderID, receiverID, Date.now());
		}
		return { result: [] };
	},
	add: requests => {
		for (const request of requests) {
			const [senderID, receiverID] = request;
			statements.add.run({ user1: senderID, user2: receiverID });
		}
		return { result: [] };
	},
	accept: requests => {
		for (const request of requests) {
			const [senderID, receiverID] = request;
			const friends = statements.get.all(receiverID, 101);
			if (friends?.length >= MAX_FRIENDS) {
				throw new FailureMessage('maxFriends');
			}
			const { result } = TRANSACTIONS.removeRequest([request]);
			if (!result.length) throw new FailureMessage('noRequest', senderID);
			TRANSACTIONS.add([request]);
		}
		return { result: [] };
	},
	removeRequest: requests => {
		const result = [];
		for (const request of requests) {
			const [to, from] = request;
			const { changes } = statements.deleteRequest.run(to, from);
			if (changes) result.push(changes);
		}
		return { result };
	},
};

/**
 * API STUFF - For use in other database child processes that may want to interface with the friends list.
 * todo: should these be under a namespace?
 */

/** Find if a friendship exists between two users. */
export function findFriendship(users: [string, string]) {
	setup();
	return !!statements.findFriendship.get({ user1: users[0], user2: users[1] });
}

// internal for child process api - ensures statements are only set up
const setup = () => {
	if (!process.send) throw new Error("You should not be using this function in the main process");
	if (!Object.keys(statements).length) FriendsDatabase.setupDatabase();
};

/**
 * CobblemonShowdown : node:sqlite refuse un tableau comme premier argument (« Unknown named parameter '0' ») :
 * les paramètres positionnels sont passés un par un, un objet sert pour les paramètres nommés ($user1...).
 */
function bindings(data: AnyObject | any[]): any[] {
	return Array.isArray(data) ? data : [data];
}

/** Process manager for main process use. */
export const PM = new ProcessManager.QueryProcessManager<DatabaseRequest, DatabaseResult>('friends', module, query => {
	const { type, statement, data } = query;
	const startTime = Date.now();
	const result: DatabaseResult = {};
	try {
		switch (type) {
		case 'run':
			result.result = statements[statement].run(...bindings(data));
			break;
		case 'get':
			result.result = statements[statement].get(...bindings(data));
			break;
		case 'transaction':
			result.result = transactions[statement]([data]);
			break;
		case 'all':
			result.result = statements[statement].all(...bindings(data));
			break;
		}
	} catch (e: any) {
		if (!e.name.endsWith('FailureMessage')) {
			result.error = 'crash';
			Monitor.crashlog(e, "A friends database process", query);
		} else {
			result.error = e.message;
			result.errorArgs = e.args;
		}
		return result;
	}
	const delta = Date.now() - startTime;
	if (delta > 1000) {
		Monitor.slow(`[Slow friends list query] ${JSON.stringify(query)}`);
	}
	return result;
}, PM_TIMEOUT, message => {
	if (message.startsWith('SLOW\n')) {
		Monitor.slow(message.slice(5));
	}
});

if (!PM.isParentProcess) {
	ConfigLoader.ensureLoaded();
	// CobblemonShowdown : seul Config.usesqlitefriends est nécessaire (voir FriendsDatabase#query)
	if (Config.usesqlitefriends) {
		FriendsDatabase.setupDatabase();
	}
	global.Monitor = {
		crashlog(error: Error, source = 'A friends database process', details: AnyObject | null = null) {
			const repr = JSON.stringify([error.name, error.message, source, details]);
			process.send!(`THROW\n@!!@${repr}\n${error.stack}`);
		},
		slow(message: string) {
			process.send!(`CALLBACK\nSLOW\n${message}`);
		},
	} as any;
	process.on('uncaughtException', err => {
		if (Config.crashguard) {
			Monitor.crashlog(err, 'A friends child process');
		}
	});
	// eslint-disable-next-line no-eval
	PM.startRepl(cmd => eval(cmd));
}

export function start(processCount: ConfigLoader.SubProcessesConfig) {
	PM.spawn(processCount['friends'] ?? 1);
}

export function destroy() {
	void PM.destroy();
}
