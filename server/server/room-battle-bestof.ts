import { Utils } from '../lib';
import { RoomGamePlayer, RoomGame } from "./room-game";
import type { RoomBattlePlayerOptions, RoomBattleOptions } from './room-battle';
import type { PrivacySetting, RoomSettings } from './rooms';

const BEST_OF_IN_BETWEEN_TIME = 40;

export class BestOfPlayer extends RoomGamePlayer<BestOfGame> {
	wins = 0;
	ready: boolean | null = null;
	options: Omit<RoomBattlePlayerOptions, 'user'> & { user: null };
	dcAutoloseTime: number | null = null;
	constructor(user: User | null, game: BestOfGame, num: number, options: RoomBattlePlayerOptions) {
		super(user, game, num);
		this.options = { ...options, user: null };
	}
	avatar() {
		let avatar = Users.get(this.id)?.avatar;
		if (!avatar || typeof avatar === 'number') avatar = 'unknownf';
		const url = Chat.plugins.avatars?.Avatars.src(avatar) ||
			`https://${Config.routes.client}/sprites/trainers/${avatar}.png`;
		return url;
	}
	updateReadyButton() {
		const user = this.getUser();
		if (!user?.connected) return;

		this.dcAutoloseTime = null;
		const room = this.game.room;
		const battleRoom = Rooms.get(this.game.games[this.game.games.length - 1]?.room);
		const gameNum = this.game.games.length + 1;

		if (this.ready === false) {
			const notification = `|tempnotify|choice|${user.TL`Next game`}|` +
				user.TL`It's time for game ${gameNum} in your best-of-${this.game.bestOf}!`;
			if (battleRoom && user.inRooms.has(battleRoom.roomid)) {
				battleRoom.send(notification);
			} else {
				this.sendRoom(notification);
			}
		} else {
			const notification = `|tempnotifyoff|choice`;
			battleRoom?.sendUser(user, notification);
			this.sendRoom(notification);
		}

		if (this.ready === null) {
			const button = `|c|~|/uhtml controls,`;
			this.sendRoom(button);
			battleRoom?.sendUser(user, button);
			return;
		}

		const cmd = `/msgroom ${room.roomid},/confirmready`;
		const button = `|c|~|/uhtml controls,<div class="infobox"><p style="margin:6px">${user.TL`Are you ready for game ${gameNum}, ${this.name}?`}</p><p style="margin:6px">` +
			(this.ready ?
				`<button class="button" disabled><i class="fa fa-check"></i> ${user.TL`I'm ready!`}</button> &ndash; ${user.TL`waiting for opponent...`}` :
				`<button class="button notifying" name="send" value="${cmd}">${user.TL`I'm ready!`}</button>`
			) +
			`</p></div>`;
		this.sendRoom(button);
		battleRoom?.sendUser(user, button);
	}
}

export class BestOfGame extends RoomGame<BestOfPlayer> {
	override readonly gameid = 'bestof' as ID;
	override allowRenames = false;
	override room!: GameRoom;
	bestOf: number;
	format: Format;
	winThreshold: number;
	options: Omit<RoomBattleOptions, 'players'> & { parent: Room, players: null };
	forcedSettings: { modchat?: string | null, privacy?: string | null } = {};
	ties = 0;
	games: { room: RoomID, winner: BestOfPlayer | null | undefined, rated: number }[] = [];
	playerNum = 0;
	/** null = tie, undefined = not ended */
	winner: BestOfPlayer | null | undefined = undefined;
	/** when waiting between battles, this is the just-ended battle room, the one with the |tempnotify| */
	waitingBattle: GameRoom | null = null;
	nextBattleTimerEnd: number | null = null;
	nextBattleTimer: NodeJS.Timeout | null = null;
	/** Does NOT control bestof's own timer, which is always-on. Controls timers in sub-battles. */
	needsTimer = false;
	score: number[] | null = null;
	constructor(room: GameRoom, options: RoomBattleOptions) {
		super(room);
		this.gameid = 'bestof' as ID;
		this.format = Dex.formats.get(options.format);
		this.bestOf = Number(Dex.formats.getRuleTable(this.format).valueRules.get('bestof'))!;
		this.winThreshold = Math.floor(this.bestOf / 2) + 1;
		this.title = this.format.name;
		if (!toID(this.title).includes('bestof')) {
			this.title += ` (Best-of-${this.bestOf})`;
		}
		this.room.bestOf = this;
		this.options = {
			...options,
			isBestOfSubBattle: true,
			parent: this.room,
			allowRenames: false,
			players: null,
		};
		for (const playerOpts of options.players) {
			this.addPlayer(playerOpts.user, playerOpts);
		}
		process.nextTick(() => this.nextGame());
	}
	override onConnect(user: User) {
		const player = this.playerTable[user.id];
		player?.sendRoom('|cantleave|');
		player?.updateReadyButton();
	}
	override makePlayer(user: User | null, options: RoomBattlePlayerOptions): BestOfPlayer {
		return new BestOfPlayer(user, this, ++this.playerNum, options);
	}
	override addPlayer(user: User, options: RoomBattlePlayerOptions) {
		const player = super.addPlayer(user, options);
		if (!player) throw new Error(`Failed to make player ${user} in ${this.roomid}`);
		this.room.auth.set(user.id, Users.PLAYER_SYMBOL);
		return player;
	}
	checkPrivacySettings(options: RoomBattleOptions & Partial<RoomSettings>) {
		let inviteOnly = false;
		const privacySetter = new Set<ID>([]);
		for (const p of options.players) {
			if (p.user) {
				if (p.inviteOnly) {
					inviteOnly = true;
					privacySetter.add(p.user.id);
				} else if (p.hidden) {
					privacySetter.add(p.user.id);
				}
				this.checkForcedUserSettings(p.user);
			}
		}

		if (privacySetter.size) {
			const room = this.room;
			if (this.forcedSettings.privacy) {
				room.setPrivate(false);
				room.settings.modjoin = null;
				room.add(`|raw|<div class="broadcast-blue"><strong>${room.TL`This best-of set is required to be public due to a player having a name starting with '${this.forcedSettings.privacy}'.`}</div>`);
			} else if (!options.tour || (room.tour?.allowModjoin)) {
				room.setPrivate('hidden');
				if (inviteOnly) room.settings.modjoin = '%';
				room.privacySetter = privacySetter;
				if (inviteOnly) {
					room.settings.modjoin = '%';
					room.add(
						`|raw|<div class="broadcast-red"><strong>${room.TL`This best-of set is invite-only!`}</strong><br />` +
						`${room.TL`Users must be invited with <code>/invite</code> (or be staff) to join`}</div>`
					);
				}
			}
		}
	}
	checkForcedUserSettings(user: User) {
		this.forcedSettings = {
			modchat: this.forcedSettings.modchat || Rooms.RoomBattle.battleForcedSetting(user, 'modchat'),
			privacy: this.forcedSettings.privacy || Rooms.RoomBattle.battleForcedSetting(user, 'privacy'),
		};
		if (
			this.players.some(p => p.getUser()?.battleSettings.special) ||
			(this.options.rated && this.forcedSettings.modchat)
		) {
			this.room.settings.modchat = '\u2606';
		}
	}
	setPrivacyOfGames(privacy: PrivacySetting) {
		for (let i = 0; i < this.games.length; i++) {
			const room = Rooms.get(this.games[i].room)!;
			const prevRoom = Rooms.get(this.games[i - 1]?.room);
			const gameNum = i + 1;

			room.setPrivate(privacy);
			this.room.add(`|uhtmlchange|game${gameNum}|<a href="/${room.roomid}">${room.title}</a>`);
			room.add(`|uhtmlchange|bestof|${this.gameHeader(room, gameNum)}`).update();
			if (prevRoom) {
				prevRoom.add(`|uhtmlchange|next|${this.nextGameLink(prevRoom, room.roomid, gameNum)}`).update();
			}
		}
		this.updateDisplay();
	}
	/** `<h2>`: "Game 2 of a best-of-3", in the given battle room's language */
	gameHeader(battleRoom: Room, gameNum: number) {
		return `<h2>${battleRoom.TL`<strong>Game ${gameNum}</strong> of <a href="/${this.roomid}">a best-of-${this.bestOf}</a>`}</h2>`;
	}
	/** "Next: Game 2 of 3" link to the next battle, in `room`'s language */
	nextGameLink(room: Room, nextRoomid: RoomID, gameNum: number) {
		return `${room.TL`Next:`} <a href="/${nextRoomid}"><strong>${room.TL`Game ${gameNum} of ${this.bestOf}`}</strong></a>`;
	}
	clearWaiting() {
		this.waitingBattle = null;
		for (const player of this.players) {
			player.ready = null;
			player.updateReadyButton();
		}
		if (this.nextBattleTimer) {
			clearInterval(this.nextBattleTimer);
			this.nextBattleTimerEnd = null;
		}
		this.nextBattleTimerEnd = null;
		this.nextBattleTimer = null;
	}
	getOptions(): (RoomBattleOptions & Partial<RoomSettings>) | null {
		const players = this.players.map(player => ({
			...player.options,
			user: player.getUser()!,
		}));
		if (players.some(p => !p.user)) {
			return null;
		}
		return {
			...this.options,
			players,
		};
	}
	nextGame() {
		const prevBattleRoom = this.waitingBattle;
		if (!prevBattleRoom && this.games.length) return; // should never happen
		this.clearWaiting();

		const options = this.getOptions();
		if (options) {
			// "Game 2: Sacha vs. Ondine", so the tab of each game says which game it is
			const gameNum = this.games.length + 1;
			const [p1name, p2name] = this.players.map(p => p.name);
			options.title = this.room.TL`Game ${gameNum}: ${p1name} vs. ${p2name}`;
		}
		if (!options) {
			for (const p of this.players) {
				if (!p.getUser()) {
					// tbc this isn't just being offline, it's changing name or being offline for 15 minutes
					this.forfeitPlayer(p, ' lost by being unavailable at the start of a game.');
					return;
				}
			}
			throw new Error(`Failed to get options for ${this.roomid}`);
		}
		const battleRoom = Rooms.createBattle(options);
		// shouldn't happen even in lockdown
		if (!battleRoom) throw new Error("Failed to create battle for " + this.title);
		this.games.push({
			room: battleRoom.roomid,
			winner: undefined,
			rated: battleRoom.rated,
		});
		// the absolute result is what counts for rating
		battleRoom.rated = 0;
		if (this.needsTimer) {
			battleRoom.battle?.timer.start();
		}
		const gameNum = this.games.length;
		const p1 = this.players[0];
		const p2 = this.players[1];
		battleRoom.add(
			Utils.html`|html|<table width="100%"><tr><td align="left">${p1.name}</td><td align="right">${p2.name}</tr>` +
			`<tr><td align="left">${this.renderWins(p1)}</td><td align="right">${this.renderWins(p2)}</tr></table>`
		);
		battleRoom.add(`|uhtml|bestof|${this.gameHeader(battleRoom, gameNum)}`).update();

		this.room.add(`|html|<h2>${this.room.TL`Game ${gameNum}`}</h2>`);
		this.room.add(Utils.html`|uhtml|game${gameNum}|<a href="/${battleRoom.roomid}">${battleRoom.title}</a>`);
		this.updateDisplay();

		if (prevBattleRoom) {
			prevBattleRoom.add(`|uhtml|next|${this.nextGameLink(prevBattleRoom, battleRoom.roomid, gameNum)}`).update();
		}
	}
	renderWins(player: BestOfPlayer) {
		const wins = this.games.filter(game => game.winner === player).length;
		const winBuf = `<i class="fa fa-circle"></i> `.repeat(wins);
		const restBuf = `<i class="fa fa-circle-o"></i> `.repeat(this.winThreshold - wins);
		return player.num === 1 ? winBuf + restBuf : restBuf + winBuf;
	}
	updateDisplay() {
		const TL = this.room.TL.bind(this.room);
		const p1name = Utils.escapeHTML(this.players[0].name);
		const p2name = Utils.escapeHTML(this.players[1].name);
		let buf = `<br /><strong>${TL`${p1name} and ${p2name}'s Best-of-${this.bestOf} progress:`}</strong><br />`;
		buf += '<table>';
		for (const p of this.players) {
			buf += Utils.html`<tr><td>${p.name}: </td><td>`;
			for (let i = 0; i < this.bestOf; i++) {
				if (this.games[i]?.winner === p) {
					buf += `<i class="fa fa-circle"></i>`;
				} else {
					buf += `<i class="fa fa-circle-o"></i>`;
				}
				if (i !== this.bestOf - 1) {
					buf += ` `;
				}
			}
			buf += `</td></tr>`;
		}
		buf += `</table><br /><br />`;
		buf += `<table><tr>`;

		for (const i of [0, null, 1]) {
			if (i === null) {
				buf += `<td></td>`;
				continue;
			}
			buf += Utils.html`<td><center><strong>${this.players[i].name}</strong></center></td>`;
		}

		buf += `</tr><tr>`;

		for (const i of [0, null, 1]) {
			if (i === null) {
				buf += `<td></td>`;
				continue;
			}
			const p = this.players[i];
			const mirrorLeftPlayer = !i ? ' style="transform: scaleX(-1)"' : "";
			buf += `<td><center>`;
			buf += `<img class="trainersprite"${mirrorLeftPlayer} src="${p.avatar()}" />`;
			buf += `</center></td>`;
		}

		buf += `</tr><tr>`;

		for (const i of [0, null, 1]) {
			if (i === null) {
				buf += `<td> vs </td>`;
				continue;
			}
			const team = Teams.unpack(this.players[i].options.team || "");
			if (!team || !Dex.formats.getRuleTable(this.format).has('teampreview')) {
				buf += `<td>`;
				buf += `<psicon pokemon="unknown" /> `.repeat(3);
				buf += `<br />`;
				buf += `<psicon pokemon="unknown" /> `.repeat(3);
				buf += `</td>`;
				continue;
			}
			const mirrorLeftPlayer = !i ? ' style="transform: scaleX(-1)"' : "";
			buf += `<td>`;
			for (const [j, set] of team.entries()) {
				if (j % 3 === 0 && j > 1) buf += `<br />`;
				buf += `<psicon pokemon="${set.species}"${mirrorLeftPlayer} />`;
			}
			buf += `</td>`;
		}
		buf += `</tr></table>`;
		this.room.add(`|fieldhtml|<center>${buf}</center>`);

		buf = this.games.map(({ room, winner }, index) => {
			let progress = TL`being played`;
			if (winner) progress = TL`won by ${winner.name}`;
			if (winner === null) progress = TL`tied`;
			const gameNumber = index + 1;
			return Utils.html`<p>${TL`Game ${gameNumber}:`} <a href="/${room}"><strong>${progress}</strong></a></p>`;
		}).join('');
		if (this.winner) {
			const winnerName = Utils.escapeHTML(this.winner.name);
			buf += `<p>${TL`${winnerName} won!`}</p>`;
		} else if (this.winner === null) {
			buf += `<p>${TL`The battle was tied.`}</p>`;
		}
		this.room.add(`|controlshtml|<center>${buf}</center>`);
		this.room.update();
	}

	override startTimer() {
		this.needsTimer = true;
		for (const { room } of this.games) {
			Rooms.get(room)?.battle?.timer.start();
		}
	}

	override onBattleWin(room: Room, winnerid: ID) {
		if (this.ended) return; // can happen if the bo3 is destroyed fsr

		const winner = winnerid ? this.playerTable[winnerid] : null;
		this.games[this.games.length - 1].winner = winner;
		if (winner) {
			winner.wins++;
			const loserPlayer = room.battle!.players.find(p => p.num !== winner.num);
			if (loserPlayer && loserPlayer.dcSecondsLeft <= 0) { // disconnection means opp wins the set
				return this.forfeit(loserPlayer.name, ' lost the series due to inactivity.');
			}
			const winnerName = Utils.escapeHTML(winner.name);
			const gameNumber = this.games.length;
			this.room.add(`|html|${this.room.TL`${winnerName} won game ${gameNumber}!`}`).update();
		} else {
			this.ties++;
			this.winThreshold = Math.floor((this.bestOf - this.ties) / 2) + 1;
			this.room.add(`|html|${this.room.TL`Game ${this.games.length} was a tie.`}`).update();
		}

		const overallWinner = this.players.find(p => p.wins >= this.winThreshold);
		if (overallWinner) return this.end(overallWinner.id);
		if (this.games.length >= this.bestOf) return this.end(''); // overall tie

		// no one has won, skip onwards
		this.promptNextGame(room);
	}
	promptNextGame(room: Room) {
		if (!room.battle || this.winner) return; // ???
		this.updateDisplay();
		this.waitingBattle = room;
		const now = Date.now();
		this.nextBattleTimerEnd = now + BEST_OF_IN_BETWEEN_TIME * 1000;
		for (const player of this.players) {
			player.ready = false;
			const dcAutoloseTime = now + room.battle.players[player.num - 1].dcSecondsLeft * 1000;
			if (dcAutoloseTime < this.nextBattleTimerEnd) {
				player.dcAutoloseTime = dcAutoloseTime;
			}
			player.updateReadyButton();
		}
		this.nextBattleTimer = setInterval(() => this.pokeNextBattleTimer(), 10000);
	}
	pokeNextBattleTimer() {
		if (!this.nextBattleTimerEnd || !this.nextBattleTimer) return; // ??
		if (Date.now() >= this.nextBattleTimerEnd) {
			return this.nextGame();
		}
		for (const p of this.players) {
			if (!p.ready) {
				const now = Date.now() - 100; // fudge to make rounding work better
				if (p.dcAutoloseTime && now > p.dcAutoloseTime) {
					return this.forfeit(p.name, ' lost the series due to inactivity.');
				}
				const timeLeft = Chat.toDurationString((p.dcAutoloseTime || this.nextBattleTimerEnd) - now);
				const message = (room: Room) => (p.dcAutoloseTime ?
					`|inactive|${room.TL`${p.name} has ${timeLeft} to reconnect!`}` :
					`|inactive|${room.TL`${p.name} has ${timeLeft} to confirm battle start!`}`
				);
				this.waitingBattle?.add(message(this.waitingBattle));
				this.room.add(message(this.room));
			}
		}
		this.waitingBattle?.update();
		this.room.update();
	}
	confirmReady(user: User) {
		const player = this.playerTable[user.id];
		if (!player) {
			throw new Chat.ErrorMessage(user.TL`You aren't a player in this best-of set.`);
		}
		if (!this.waitingBattle) {
			throw new Chat.ErrorMessage(user.TL`The battle is not currently waiting for ready confirmation.`);
		}

		player.ready = true;
		player.updateReadyButton();
		const nextGameNum = this.games.length + 1;
		const readyMsg = (room: Room) => `||${room.TL`${player.name} is ready for game ${nextGameNum}.`}`;
		this.waitingBattle.add(readyMsg(this.waitingBattle)).update();
		this.room.add(readyMsg(this.room)).update();
		if (this.players.every(p => p.ready)) {
			this.nextGame();
		}
	}
	override setEnded() {
		this.clearWaiting();
		super.setEnded();
	}
	end(winnerid: ID) {
		if (this.ended) return;
		this.setEnded();
		this.room.add(`|allowleave|`).update();
		const winner = winnerid ? this.playerTable[winnerid] : null;
		this.winner = winner;
		if (winner) {
			this.room.add(`|win|${winner.name}`);
		} else {
			this.room.add(`|tie`);
		}
		this.updateDisplay();
		this.room.update();
		const p1 = this.players[0];
		const p2 = this.players[1];
		this.score = this.players.map(p => p.wins);
		this.room.parent?.game?.onBattleWin?.(this.room, winnerid);
		// run elo stuff here
		let p1score = 0.5;
		if (winner === p1) {
			p1score = 1;
		} else if (winner === p2) {
			p1score = 0;
		}

		const { rated, room } = this.games[this.games.length - 1];
		if (rated) {
			void Rooms.get(room)?.battle?.updateLadder(p1score, winnerid);
		}
	}
	override forfeit(user: User | string, message = '') {
		const userid = (typeof user !== 'string') ? user.id : toID(user);

		const loser = this.playerTable[userid];
		if (loser) this.forfeitPlayer(loser, message);
	}
	forfeitPlayer(loser: BestOfPlayer, message = '') {
		if (this.ended || this.winner) return false;

		message ||= ' forfeited the series.';
		this.winner = this.players.find(p => p !== loser)!;
		this.room.add(`||${Rooms.RoomBattle.forfeitMessage(this.room, loser.name, message)}`);
		this.end(this.winner.id);

		const lastBattle = Rooms.get(this.games[this.games.length - 1].room)?.battle;
		if (lastBattle && !lastBattle.ended) lastBattle.forfeit(loser.id, message);
		return true;
	}
	override destroy() {
		this.setEnded();
		for (const { room } of this.games) Rooms.get(room)?.setParent(null);
		this.games = [];
		for (const p of this.players) p.destroy();
		this.players = [];
		this.playerTable = {};
		this.winner = null;
	}
}
