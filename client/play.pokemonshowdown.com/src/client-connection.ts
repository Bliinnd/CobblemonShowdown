/**
 * Connection library
 *
 * @author Guangcong Luo <guangcongluo@gmail.com>
 * @license MIT
 */

import { Config, PS } from "./client-main";
import { Dex, TL } from "./battle-dex";

declare const SockJS: any;
declare const POKEMON_SHOWDOWN_TESTCLIENT_KEY: string | undefined;
const KEEPALIVE_INTERVAL = 25000;
const KEEPALIVE_RANGE = 20000;

export class PSConnection {
	socket: WebSocket | null = null;
	/** true for either worker or direct connections. `.worker` or `.socket` will be truthy */
	connected = false;
	lastMessageTimeBeforeReconnect = 0;
	queue: string[] = [];
	reconnectDelay = 1000;
	private reconnectCap = 60000;
	private shouldReconnect = true;
	reconnectTimer: ReturnType<typeof setTimeout> | null = null;
	private worker: Worker | null = null;
	lastReceiveTime = Date.now();
	/** the next time we'll attempt a reconnect; 0 means we're not scheduled to retry */
	nextRetryTime = 0;

	constructor() {
		const loading = PSStorage.init();
		if (loading) {
			loading.then(() => {
				this.initConnection();
			});
		} else {
			this.initConnection();
		}
		setInterval(() => this.keepAlive(), KEEPALIVE_INTERVAL);
	}

	/**
	 * Keepalive for direct (non-worker) connections; see the worker for
	 * the full explanation. Worker connections use the worker's own
	 * keepalive timer, which has the advantage of not being throttled
	 * in background tabs.
	 */
	keepAlive() {
		if (this.worker) return;
		if (!this.connected) return;
		if (Date.now() - this.lastReceiveTime > 3 * KEEPALIVE_INTERVAL) {
			// zombie connection; close it so the reconnect logic kicks in
			this.socket?.close();
			return;
		}
		if (Date.now() - this.lastReceiveTime >= KEEPALIVE_RANGE) {
			this.send(`|/cmd ping`);
		}
	}

	initConnection() {
		if (!this.tryConnectInWorker()) this.directConnect();
	}

	canReconnect() {
		const uptime = Date.now() - PS.startTime;
		if (uptime > 24 * 60 * 60 * 1000) {
			PS.confirm(TL`It's been over a day since you first connected. Please refresh.`, {
				okButton: TL`[Refresh]`,
			}).then(confirmed => {
				if (confirmed) PS.room?.send(`/refresh`);
			});
			return false;
		}
		return this.shouldReconnect;
	}

	tryConnectInWorker(): boolean {
		if (this.socket) return false; // must be one or the other
		if (this.connected) return true;

		if (this.worker) {
			this.worker.postMessage({ type: 'connect', server: PS.server });
			return true;
		}

		try {
			const worker = new Worker('/js/client-connection-worker.js');
			this.worker = worker;

			worker.postMessage({ type: 'connect', server: PS.server });

			worker.onmessage = event => {
				const { type, data } = event.data;
				switch (type) {
				case 'connected':
					this.handleConnect();
					break;
				case 'message':
					PS.receive(data);
					break;
				case 'disconnected':
					this.handleDisconnect();
					break;
				case 'retrying':
					this.nextRetryTime = data;
					break;
				case 'error':
					console.warn(`Worker connection error: ${data}`);
					this.worker = null;
					// onerror can occur on abrupt disconnects or fatal errors.
					// handleDisconnect ensures proper cleanup and also attemps to reconnect.
					this.handleDisconnect(); // fallback
					break;
				}
			};

			worker.onerror = (ev: ErrorEvent) => {
				console.warn('Worker connection error:', ev);
				this.worker = null;
				this.directConnect(); // fallback
			};

			return true;
		} catch {
			console.warn('Worker connection failed, falling back to regular connection.');
			this.worker = null;
			return false;
		}
	}

	directConnect() {
		if (this.worker) return; // must be one or the other

		const server = PS.server;
		const port = server.protocol === 'https' ? `:${server.port}` : `:${server.httpport!}`;
		const url = `${server.protocol}://${server.host}${port}${server.prefix}`;

		try {
			this.socket = new SockJS(url, [], { timeout: 5 * 60 * 1000 });
		} catch {
			this.socket = new WebSocket(url.replace('http', 'ws') + '/websocket');
		}

		const socket = this.socket!;

		socket.onopen = () => {
			this.handleConnect();
		};

		socket.onmessage = (ev: MessageEvent) => {
			const data = '' + ev.data;
			this.lastReceiveTime = Date.now();
			if (data.startsWith('|queryresponse|ping|')) return;
			PS.receive(data);
		};

		socket.onclose = () => {
			console.log('\u274C (DISCONNECTED)');
			this.handleDisconnect();
		};

		socket.onerror = (ev: Event) => {
			PS.isOffline = true;
			// no useful info to print from the event
			this.retryConnection();
			PS.update();
		};
	}

	private handleDisconnect() {
		this.markDisconnected();
		if (this.worker) {
			// worker handles reconnect timer
			if (!this.canReconnect()) this.worker.postMessage({ type: 'disconnect' });
		} else {
			this.retryConnection();
		}
	}

	private markDisconnected() {
		this.connected = false;
		PS.isOffline = true;
		this.socket = null;
		for (const roomid in PS.rooms) {
			const room = PS.rooms[roomid]!;
			// other rooms also connect after reconnecting but this flag is for rooms that were already connected
			if (room.connected === true) room.connectMode = 'pending-reconnect';
			room.connected = false;
		}
		PS.update();
	}

	/**
	 * Happens on connect and reconnect for worker and direct connections
	 */
	private handleConnect() {
		console.log(`\u2705 (CONNECTED${this.worker ? ' via worker' : ''})`);
		this.lastMessageTimeBeforeReconnect = parseInt(PS.lastMessageTime) || 0;
		this.connected = true;
		PS.isOffline = false;
		this.reconnectDelay = 1000;
		this.nextRetryTime = 0;
		this.lastReceiveTime = Date.now();

		// CobblemonShowdown : le serveur répond dans la langue du site (français par défaut).
		// Avatar et langue partent dans un seul message, pour ne pas remplir la file d'attente
		// anti-spam du serveur avant la connexion au compte.
		const settings: { avatar?: string, language?: string } = {};
		if (PS.prefs.avatar) settings.avatar = `${PS.prefs.avatar},1`;
		const language = Dex.text.findLanguage(Dex.text.getLanguage())?.legacyId;
		if (language) settings.language = language;
		if (settings.avatar || settings.language) PS.send(`/updatesettings ${JSON.stringify(settings)}`);
		const queue = this.queue;
		this.queue = [];
		for (const msg of queue) this.send(msg);

		PS.prefs.doAutojoin();

		PS.update();
	}

	private retryConnection() {
		if (!this.canReconnect()) return;
		if (this.reconnectTimer) return;

		this.nextRetryTime = Date.now() + this.reconnectDelay;
		this.reconnectTimer = setTimeout(() => {
			this.reconnectTimer = null;
			if (!this.connected && this.canReconnect()) {
				PS.mainmenu.send('/reconnect');
				this.reconnectDelay = Math.min(this.reconnectDelay * 2, this.reconnectCap);
			}
			PS.update();
		}, this.reconnectDelay);
	}

	disconnect() {
		this.shouldReconnect = false;
		this.socket?.close();
		this.worker?.terminate();
		this.worker = null;
		this.handleDisconnect();
		PS.update();
	}
	reconnect() {
		if (this.connected) return;
		if (this.worker && this.tryConnectInWorker()) return;
		this.directConnect();
	}

	send(msg: string) {
		if (!this.connected) {
			this.queue.push(msg);
			return;
		}
		if (this.worker) {
			this.worker.postMessage({ type: 'send', data: msg });
		} else if (this.socket) {
			this.socket.send(msg);
		}
	}

	static connect() {
		if (PS.connection?.socket) return;
		PS.isOffline = false;
		if (!PS.connection) {
			PS.connection = new PSConnection();
		} else {
			PS.connection.reconnect();
		}
	}
}

export class PSStorage {
	static frame: WindowProxy | null = null;
	static requests: Record<string, (data: any) => void> | null = null;
	static requestCount = 0;
	static readonly origin = `https://${Config.routes.client}`;
	static loader?: () => void;
	static loaded: Promise<void> | boolean = false;
	static init(): void | Promise<void> {
		if (this.loaded) {
			if (this.loaded === true) return;
			return this.loaded;
		}
		if (Config.testclient) {
			return;
		} else if (`${location.protocol}//${location.hostname}` === PSStorage.origin) {
			// Same origin, everything can be kept as default
			Config.server ||= Config.defaultserver;
			return;
		}

		// Cross-origin
		if (!('postMessage' in window)) {
			// browser does not support cross-document messaging
			PS.alert(TL`Sorry, psim connections are unsupported by your browser.`);
			return;
		}

		window.addEventListener('message', this.onMessage);

		if (document.location.hostname !== Config.routes.client) {
			const iframe = document.createElement('iframe');
			iframe.src = 'https://' + Config.routes.client + '/crossdomain.php?host=' +
				encodeURIComponent(document.location.hostname) +
				'&path=' + encodeURIComponent(document.location.pathname.substr(1)) +
				'&protocol=' + encodeURIComponent(document.location.protocol);
			iframe.style.display = 'none';
			document.body.appendChild(iframe);
		} else {
			Config.server ||= Config.defaultserver;
			$(
				`<iframe src="https://${Config.routes.client}/crossprotocol.html?v1.2" style="display: none;"></iframe>`
			).appendTo('body');
			setTimeout(() => {
				// HTTPS may be blocked
				// yes, this happens, blame Avast! and BitDefender and other antiviruses
				// that feel a need to MitM HTTPS poorly
			}, 2000);
		}
		this.loaded = new Promise(resolve => {
			this.loader = resolve;
		});
		return this.loaded;
	}

	static onMessage = (e: MessageEvent) => {
		if (e.origin !== PSStorage.origin) return;

		const data = e.data;
		if (typeof data !== 'string') return; // we don't do this but external code can

		this.frame = e.source as WindowProxy;
		// console.log(`top recv: ${data}`);
		switch (data.charAt(0)) {
		case 'c':
			Config.server = JSON.parse(data.substr(1));
			if (location.host === 'localhost.psim.us' || /[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+\.psim\.us/.test(location.host)) {
				// normally we assume HTTPS means HTTPS, but make an exception for
				// localhost and IPs which generally can't have a signed cert anyway.
				Config.server.port = 8000;
				(Config.server as any).https = false;
			}
			if (Config.server.registered && Config.server.id !== 'showdown' && Config.server.id !== 'smogtours') {
				const link = document.createElement('link');
				link.rel = 'stylesheet';
				link.href = `//${Config.routes.client}/customcss.php?server=${encodeURIComponent(Config.server.id)}`;
				document.head.appendChild(link);
			}
			if ((Config.server as any).https === false) {
				Config.server.protocol = 'http';
				Config.server.httpport = Config.server.port;
			}
			Object.assign(PS.server, Config.server);
			break;
		case 'p':
			const newData = JSON.parse(data.substr(1));
			if (newData) PS.prefs.load(newData, true);
			PS.prefs.save = function () {
				const prefData = JSON.stringify(PS.prefs.storage);
				PSStorage.postCrossOriginMessage('P' + prefData);

				// in Safari, cross-origin local storage is apparently treated as session
				// storage, so mirror the storage in the current origin just in case
				try {
					localStorage.setItem('showdown_prefs', prefData);
				} catch {}
			};
			PS.prefs.update(null);
			break;
		case 't':
			if (window.nodewebkit) return;
			let oldTeams;
			if (PS.teams.list.length) {
				// Teams are still stored in the old location; merge them with the
				// new teams.
				oldTeams = PS.teams.list;
			}
			PS.teams.unpackAll(data.substr(1));
			PS.teams.save = function () {
				const packedTeams = PS.teams.packAll(PS.teams.list);
				PSStorage.postCrossOriginMessage('T' + packedTeams);

				// in Safari, cross-origin local storage is apparently treated as session
				// storage, so mirror the storage in the current origin just in case
				if (document.location.hostname === Config.routes.client) {
					try {
						localStorage.setItem('showdown_teams_local', packedTeams);
					} catch {}
				}
				PS.teams.update('team');
			};
			if (oldTeams) {
				PS.teams.list = PS.teams.list.concat(oldTeams);
				PS.teams.save();
				localStorage.removeItem('showdown_teams');
			}
			if (data === 'tnull' && !PS.teams.list.length) {
				PS.teams.unpackAll(localStorage.getItem('showdown_teams_local'));
			}
			break;
		case 'a':
			if (data === 'a0') {
				PS.alert(TL`Your browser doesn't support third-party cookies. Some things might not work correctly.`);
			}
			if (!window.nodewebkit) {
				// for whatever reason, Node-Webkit doesn't let us make remote
				// Ajax requests or something. Oh well, making them direct
				// isn't a problem, either.

				try {
					// I really hope this is a Chrome bug that this can fail
					PSStorage.frame!.postMessage("", PSStorage.origin);
				} catch {
					return;
				}

				PSStorage.requests = {};
			}
			PSStorage.loaded = true;
			PSStorage.loader?.();
			PSStorage.loader = undefined;
			break;
		case 'r':
			const reqData = JSON.parse(data.slice(1));
			const idx = reqData[0];
			if (PSStorage.requests![idx]) {
				PSStorage.requests![idx](reqData[1]);
				delete PSStorage.requests![idx];
			}
			break;
		}
	};
	static request(type: 'GET' | 'POST', uri: string, data: any): void | Promise<string> {
		if (!PSStorage.requests) return;
		const idx = PSStorage.requestCount++;
		return new Promise(resolve => {
			PSStorage.requests![idx] = resolve;
			PSStorage.postCrossOriginMessage((type === 'GET' ? 'R' : 'S') + JSON.stringify([uri, data, idx, 'text']));
		});
	}
	static postCrossOriginMessage = function (data: string) {
		try {
			// I really hope this is a Chrome bug that this can fail
			return PSStorage.frame!.postMessage(data, PSStorage.origin);
		} catch {
		}
		return false;
	};
};

PSConnection.connect();

/**
 * CobblemonShowdown : the login server (loginserver/src) sends its error
 * messages in English. The ones a player can get while logging in, choosing
 * or changing a name, registering, changing their password or loading their
 * teams are translated here; any other message is shown as the server sent it.
 *
 * Each key must stay identical to the login server's message. (The known
 * messages are `TL` calls rather than `TLkey` markers: the build only inlines
 * `TL` and `eHTML` tagged templates, and any other tagged template compiles to
 * a global `_templateObject` cache shared by every client script.)
 */
const LOGIN_SERVER_ERRORS: { [message: string]: (() => string) | undefined } = Object.assign(Object.create(null), {
	// `login` action (Session#login, Session#passwordVerify)
	"Wrong password.": () => TL`Wrong password.`,
	"Too many unrecognized login attempts have been made against this account. Please try again later.": () => TL`Too many unrecognized login attempts have been made against this account. Please try again later.`,
	"For security reasons, logins must happen with POST data.": () => TL`For security reasons, logins must happen with POST data.`,
	'incorrect login data, you need "name" and "pass" fields': () => TL`incorrect login data, you need "name" and "pass" fields`,
	"incorrect login data, userid must contain at least one letter or number": () => TL`incorrect login data, userid must contain at least one letter or number`,

	// assertions (Session#getAssertion): logging in, choosing a name, registering
	"Your username cannot start with 'guest'.": () => TL`Your username cannot start with 'guest'.`,
	"Your username must be less than 19 characters long.": () => TL`Your username must be less than 19 characters long.`,
	"Your username contains disallowed text.": () => TL`Your username contains disallowed text.`,
	"Your username is no longer available.": () => TL`Your username is no longer available.`,
	"Your username must contain at least one letter.": () => TL`Your username must contain at least one letter.`,
	"Corrupt challenge": () => TL`Corrupt challenge`,
	"This server is requesting an invalid login key. This probably means that either you are not connected to a server, or the server is set up incorrectly.": () => TL`This server is requesting an invalid login key. This probably means that either you are not connected to a server, or the server is set up incorrectly.`,
	"Unknown key ID": () => TL`Unknown key ID`,

	// `register` action
	"You must specify a username.": () => TL`You must specify a username.`,
	"Your username must include at least one letter.": () => TL`Your username must include at least one letter.`,
	"Your username is already taken.": () => TL`Your username is already taken.`,
	"You must specify a password.": () => TL`You must specify a password.`,
	"Your password must have at least 5 characters.": () => TL`Your password must have at least 5 characters.`,
	"Your passwords do not match.": () => TL`Your passwords do not match.`,
	"Answer the anti-spam question.": () => TL`Answer the anti-spam question.`,
	// The login server's text says 2, but it refuses a registration once the IP has already
	// registered 3 accounts in the last 2 hours (`regcount > 2`): translations should say 3.
	"You cannot register more than 2 names every 2 hours.": () => TL`You cannot register more than 2 names every 2 hours.`,
	"Invalid challenge string argument.": () => TL`Invalid challenge string argument.`,

	// `changepassword` action
	"'changepassword' requests can only be made with POST data.": () => TL`'changepassword' requests can only be made with POST data.`,
	"Specify your current password.": () => TL`Specify your current password.`,
	"Specify your new password.": () => TL`Specify your new password.`,
	"Repeat your new password.": () => TL`Repeat your new password.`,
	"Your session has expired. Please log in again.": () => TL`Your session has expired. Please log in again.`,
	"Your new passwords do not match.": () => TL`Your new passwords do not match.`,
	"Your old password was incorrect.": () => TL`Your old password was incorrect.`,
	"Your new password must be at least 5 characters long.": () => TL`Your new password must be at least 5 characters long.`,

	// `changeusername` action
	"Invalid request (username changing must be done through POST requests).": () => TL`Invalid request (username changing must be done through POST requests).`,
	"Specify a username.": () => TL`Specify a username.`,
	"You're not logged in as that user.": () => TL`You're not logged in as that user.`,

	// `getteams` and `getteam` actions
	"The server could not load your teams. Please try again later.": () => TL`The server could not load your teams. Please try again later.`,
	"Invalid team ID": () => TL`Invalid team ID`,
	"Failed to fetch team. Please try again later.": () => TL`Failed to fetch team. Please try again later.`,
});
const OLD_LOGIN_KEY_ERROR = /^This server is using login key (\d+), which is no longer supported\. Please tell the server operator to update their config\.js file\.$/;

export const PSLoginServer = new class {
	/** Translates an error message sent by the login server, if it's a known one. */
	errorText(message: string): string {
		const translate = LOGIN_SERVER_ERRORS[message];
		if (translate) return translate();
		const keyid = OLD_LOGIN_KEY_ERROR.exec(message)?.[1];
		if (keyid) {
			return TL`This server is using login key ${keyid}, which is no longer supported. Please tell the server operator to update their config.js file.`;
		}
		return message;
	}
	rawQuery(act: string, data: PostData): Promise<string | null> {
		// commenting out because for some reason this is working in Chrome????
		// if (location.protocol === 'file:') {
		// 	alert("Sorry, login server queries don't work in the testclient. To log in, see README.md to set up testclient-key.js");
		// 	return Promise.resolve(null);
		// }
		data.act = act;
		let url = '/~~' + PS.server.id + '/action.php';
		if (location.pathname.endsWith('.html')) {
			url = 'https://' + Config.routes.client + url;
			if (typeof POKEMON_SHOWDOWN_TESTCLIENT_KEY === 'string') {
				data.sid = POKEMON_SHOWDOWN_TESTCLIENT_KEY.replace(/%2C/g, ',');
			}
		}
		return PSStorage.request('POST', url, data) || Net(url).get({ method: 'POST', body: data }).then(
			res => res ?? null
		).catch(
			() => null
		);
	}
	query(act: string, data: PostData = {}): Promise<{ [k: string]: any } | null> {
		return this.rawQuery(act, data).then(
			res => res ? JSON.parse(res.slice(1)) : null
		).catch(
			() => null
		);
	}
};

interface PostData {
	[key: string]: string | number | boolean | null | undefined;
}
interface NetRequestOptions {
	method?: 'GET' | 'POST';
	body?: string | PostData;
	query?: PostData;
}
class HttpError extends Error {
	statusCode?: number;
	body: string;
	constructor(message: string, statusCode: number | undefined, body: string) {
		super(message);
		this.name = 'HttpError';
		this.statusCode = statusCode;
		this.body = body;
		try {
			(Error as any).captureStackTrace(this, HttpError);
		} catch {}
	}
}
class NetRequest {
	uri: string;
	constructor(uri: string) {
		this.uri = uri;
	}

	/**
	 * Makes a basic http/https request to the URI.
	 * Returns the response data.
	 *
	 * Will throw if the response code isn't 200 OK.
	 *
	 * @param opts request opts
	 */
	get(opts: NetRequestOptions = {}): Promise<string> {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			let uri = this.uri;
			if (opts.query) {
				uri += (uri.includes('?') ? '&' : '?') + Net.encodeQuery(opts.query);
			}
			xhr.open(opts.method || 'GET', uri);
			xhr.onreadystatechange = function () {
				const DONE = 4;
				if (xhr.readyState === DONE) {
					if (xhr.status === 200) {
						resolve(xhr.responseText || '');
						return;
					}
					const err = new HttpError(xhr.statusText || "Connection error", xhr.status, xhr.responseText);
					reject(err);
				}
			};
			if (opts.body) {
				xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xhr.send(Net.encodeQuery(opts.body));
			} else {
				xhr.send();
			}
		});
	}

	/**
	 * Makes a http/https POST request to the given link.
	 * @param opts request opts
	 * @param body POST body
	 */
	post(opts: Omit<NetRequestOptions, 'body'>, body: PostData | string): Promise<string>;
	/**
	 * Makes a http/https POST request to the given link.
	 * @param opts request opts
	 */
	post(opts?: NetRequestOptions): Promise<string>;
	post(opts: NetRequestOptions = {}, body?: PostData | string) {
		if (!body) body = opts.body;
		return this.get({
			...opts,
			method: 'POST',
			body,
		});
	}
}

export function Net(uri: string) {
	if (uri.startsWith('/') && !uri.startsWith('//') && Net.defaultRoute) uri = Net.defaultRoute + uri;
	if (uri.startsWith('//') && document.location.protocol === 'file:') uri = 'https:' + uri;
	return new NetRequest(uri);
}

Net.defaultRoute = '';

Net.encodeQuery = function (data: string | PostData): string {
	if (typeof data === 'string') return data;
	let urlencodedData = '';
	for (const key in data) {
		if (urlencodedData) urlencodedData += '&';
		let value = data[key];
		if (value === true) value = 'on';
		if (value === false || value === null || value === undefined) value = '';
		urlencodedData += encodeURIComponent(key) + '=' + encodeURIComponent(value);
	}
	return urlencodedData;
};

Net.formData = function (form: HTMLFormElement): { [name: string]: string | boolean } {
	// not technically all `HTMLInputElement`s but who wants to cast all these?
	const elements = form.querySelectorAll<HTMLInputElement>('input[name], select[name], textarea[name]');
	const out: { [name: string]: string | boolean } = {};
	for (const element of elements) {
		if (element.type === 'checkbox') {
			out[element.name] = element.getAttribute('value') ? (
				element.checked ? element.value : ''
			) : (
				!!element.checked
			);
		} else if (element.type !== 'radio' || element.checked) {
			out[element.name] = element.value;
		}
	}
	return out;
};
