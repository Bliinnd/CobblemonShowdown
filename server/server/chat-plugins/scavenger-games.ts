/**
 * Scavengers Games Plugin
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * This plugin stores the different possible game modes and twists that take place in scavengers room
 *
 * @license MIT license
 */

import { ScavengerHunt, type ScavengerHuntPlayer, sanitizeAnswer, gameTypeName } from './scavengers';
import { Utils } from '../../lib';
import { TLkey, type Translator } from '../../sim/dex-text';

export type TwistEvent = (this: ScavengerHunt, ...args: any[]) => void;
interface Twist {
	name: string;
	id: string;
	isGameMode?: true;
	desc?: string;
	[eventid: string]: string | number | TwistEvent | boolean | undefined;
}

type GameModeFunction = (this: ScavengerGameTemplate, ...args: any[]) => void;
interface GameMode {
	name: string;
	id: string;
	mod: Twist;
	round?: number;
	leaderboard?: true;
	teamAnnounce?: GameModeFunction;
	getPlayerTeam?: GameModeFunction;
	advanceTeam?: GameModeFunction;
	[k: string]: any;
}

function toSeconds(time: string) {
	// hhmmss => ss
	const parts = time.split(':').reverse();
	return parts.map((value, index) => parseInt(value) * (60 ** index)).reduce((a, b) => a + b);
}

class Leaderboard {
	data: { [userid: string]: AnyObject };

	constructor() {
		this.data = {};
	}

	addPoints(name: string, aspect: string, points: number, noUpdate?: boolean) {
		const userid: string = toID(name);

		if (!userid || userid === 'constructor' || !points) return this;
		if (!this.data[userid]) this.data[userid] = { name };

		if (!this.data[userid][aspect]) this.data[userid][aspect] = 0;
		this.data[userid][aspect] += points;

		if (!noUpdate) this.data[userid].name = name; // always keep the last used name

		return this; // allow chaining
	}

	visualize(sortBy: string): Promise<({ rank: number } & AnyObject)[]>;
	visualize(sortBy: string, userid: string): Promise<({ rank: number } & AnyObject) | undefined>;
	visualize(sortBy: string, userid?: string) {
		// FIXME: this is not how promises work
		// return a promise for async sorting - make this less exploitable
		return new Promise((resolve, reject) => {
			let lowestScore = Infinity;
			let lastPlacement = 1;

			const ladder = Utils.sortBy(
				Object.entries(this.data).filter(([u, bit]) => sortBy in bit),
				([u, bit]) => -bit[sortBy]
			).map(([u, bit], i) => {
				if (bit[sortBy] !== lowestScore) {
					lowestScore = bit[sortBy];
					lastPlacement = i + 1;
				}
				return {
					rank: lastPlacement,
					...bit,
				} as { rank: number } & AnyObject;
			}); // identify ties
			if (userid) {
				const rank = ladder.find(entry => toID(entry.name) === userid);
				resolve(rank);
			} else {
				resolve(ladder);
			}
		});
	}

	async htmlLadder(TL: Translator): Promise<string> {
		const data = await this.visualize('points');
		return `<div class="ladder" style="overflow-y: scroll; max-height: 170px;"><table style="width: 100%"><tr><th>${TL`Rank`}</th><th>${TL`Name`}</th><th>${TL`Points`}</th></tr>${data.map(line =>
			`<tr><td>${line.rank}</td><td>${line.name}</td><td>${line.points}</td></tr>`).join('')
		}</table></div>`;
	}
}

const TWISTS: { [k: string]: Twist } = {
	perfectscore: {
		name: TLkey`Perfect Score`,
		id: 'perfectscore',
		desc: TLkey`Players who finish the hunt without submitting a single wrong answer get a shoutout!`,

		onLeave(player) {
			if (!this.leftGame) this.leftGame = [];
			this.leftGame.push(player.id);
		},

		onSubmitPriority: 1,
		onSubmit(player, value) {
			const currentQuestion = player.currentQuestion;

			if (!player.answers) player.answers = {};
			if (!player.answers[currentQuestion]) player.answers[currentQuestion] = [];

			if (player.answers[currentQuestion].includes(value)) return;

			player.answers[currentQuestion].push(value);
		},

		onComplete(player, time, blitz) {
			const isPerfect = !this.leftGame?.includes(player.id) &&
				Object.values(player.answers).every((attempts: any) => attempts.length <= 1);
			return { name: player.name, time, blitz, isPerfect };
		},

		onAfterEndPriority: 1,
		onAfterEnd(isReset) {
			if (isReset) return;
			const perfect = this.completed.filter(entry => entry.isPerfect).map(entry => entry.name);
			if (perfect.length) {
				const names = Utils.escapeHTML(this.TL.andList(perfect));
				this.announce(perfect.length > 1 ?
					this.TL`${names} have completed the hunt without a single wrong answer!` :
					this.TL`${names} has completed the hunt without a single wrong answer!`);
			}
		},
	},

	bonusround: {
		name: TLkey`Bonus Round`,
		id: 'bonusround',
		desc: TLkey`Players can choose whether or not they choose to complete the 4th question.`,

		onAfterLoad() {
			if (this.questions.length === 3) {
				this.announce(this.TL`This twist requires at least four questions.  Please reset the hunt and make it again.`);
				this.huntLocked = true;
			} else {
				// added to the hint everyone sees, so it follows the room's language
				const skipNote = this.TL`(You may choose to skip this question using \`\`/scavenge skip\`\`.)`;
				this.questions[this.questions.length - 1].hint += ' ' + skipNote;
			}
		},

		onAnySubmit(player) {
			if (this.huntLocked) {
				player.sendRoom(player.TL`The hunt was not set up correctly.  Please wait for the host to reset the hunt and create a new one.`);
				return true;
			}
		},

		onSubmitPriority: 1,
		onSubmit(player, value) {
			const currentQuestion = player.currentQuestion;

			if (value === 'skip' && currentQuestion + 1 === this.questions.length) {
				player.sendRoom(player.TL`You have opted to skip the current question.`);
				player.skippedQuestion = true;
				this.onComplete(player);
				return true;
			}
		},

		onComplete(player, time, blitz) {
			const noSkip = !player.skippedQuestion;
			return { name: player.name, time, blitz, noSkip };
		},

		onAfterEndPriority: 1,
		onAfterEnd(isReset) {
			if (isReset) return;
			const noSkip = this.completed.filter(entry => entry.noSkip).map(entry => entry.name);
			if (noSkip.length) {
				const names = Utils.escapeHTML(this.TL.andList(noSkip));
				this.announce(noSkip.length > 1 ?
					this.TL`${names} have completed the hunt without skipping the last question!` :
					this.TL`${names} has completed the hunt without skipping the last question!`);
			}
		},
	},

	incognito: {
		name: TLkey`Incognito`,
		id: 'incognito',
		desc: TLkey`Upon answering the last question correctly, the player's finishing time will not be announced in the room!  Results will only be known at the end of the hunt.`,

		onCorrectAnswer(player, value) {
			if (player.currentQuestion + 1 >= this.questions.length) {
				this.runEvent('PreComplete', player);

				player.sendRoom(player.TL`Congratulations! You have gotten the correct answer.`);
				player.sendRoom(player.TL`This is a special style where finishes aren't announced! To see your placement, wait for the hunt to end. Until then, it's your secret that you finished!`);
				return false;
			}
		},

		onPreComplete(player) {
			const now = Date.now();
			const time = Chat.toDurationString(now - this.startTime, { hhmmss: true });
			const canBlitz = this.completed.length < 3;

			const blitz = now - this.startTime <= 60000 && canBlitz &&
				(this.room.settings.scavSettings?.blitzPoints?.[this.gameType] || this.gameType === 'official');

			const result = this.runEvent('Complete', player, time, blitz) || { name: player.name, time, blitz };

			this.preCompleted = this.preCompleted ? [...this.preCompleted, result] : [result];
			player.completed = true;
			player.destroy();
		},

		onEnd() {
			this.completed = this.preCompleted || [];
		},
	},

	spamfilter: {
		name: TLkey`Spam Filter`,
		id: 'spamfilter',

		desc: TLkey`Every wrong answer adds 30 seconds to your final time!`,

		onIncorrectAnswer(player: ScavengerHuntPlayer, value: string) {
			if (!player.incorrect) player.incorrect = [];
			const id = `${player.currentQuestion}-${value}`;
			if (player.incorrect.includes(id)) return;

			player.incorrect.push(id);
		},

		onComplete(player, time, blitz) {
			const seconds = toSeconds(time);
			if (!player.incorrect) return { name: player.name, total: seconds, blitz, time, original_time: time };

			const total = seconds + (30 * player.incorrect.length);
			const finalTime = Chat.toDurationString(total * 1000, { hhmmss: true });
			if (total > 60) blitz = false;

			return { name: player.name, total, blitz, time: finalTime, original_time: time };
		},

		onConfirmCompletion(player, time, blitz, place, result) {
			blitz = result.blitz;
			time = result.time;
			const TL = this.TL;
			const name = `<em>${Utils.escapeHTML(player.name)}</em>`;
			const wrong = player.incorrect?.length || 0;
			const deductionMessage = !wrong ? TL`Perfect!` :
				wrong === 1 ? TL`1 incorrect guess` : TL`${wrong} incorrect guesses`;
			return blitz ?
				TL`${name} has finished the hunt! (Final Time: ${time} - ${deductionMessage} - BLITZ)` :
				TL`${name} has finished the hunt! (Final Time: ${time} - ${deductionMessage})`;
		},

		onEnd() {
			Utils.sortBy(this.completed, entry => entry.total);
		},
	},

	blindincognito: {
		name: TLkey`Blind Incognito`,
		id: 'blindincognito',
		desc: TLkey`Upon completing the last question, neither you nor other players will know if the last question is correct!  You may be in for a nasty surprise when the hunt ends!`,

		onAnySubmit(player, value) {
			if (player.precompleted) {
				player.sendRoom(player.TL`That may or may not be the right answer - if you aren't confident, you can try again!`);
				return true;
			}
		},

		onCorrectAnswer(player, value) {
			if (player.currentQuestion + 1 >= this.questions.length) {
				this.runEvent('PreComplete', player);

				player.sendRoom(player.TL`That may or may not be the right answer - if you aren't confident, you can try again!`);
				return true;
			}
		},

		onIncorrectAnswer(player, value) {
			if (player.currentQuestion + 1 >= this.questions.length) {
				player.sendRoom(player.TL`That may or may not be the right answer - if you aren't confident, you can try again!`);
				return false;
			}
		},

		onPreComplete(player) {
			const now = Date.now();
			const time = Chat.toDurationString(now - this.startTime, { hhmmss: true });
			const canBlitz = this.completed.length < 3;

			const blitz = now - this.startTime <= 60000 && canBlitz &&
				(this.room.settings.scavSettings?.blitzPoints?.[this.gameType] || this.gameType === 'official');

			const result = this.runEvent('Complete', player, time, blitz) || { name: player.name, time, blitz };

			this.preCompleted = this.preCompleted ? [...this.preCompleted, result] : [result];
			player.precompleted = true;
		},

		onEnd() {
			this.completed = this.preCompleted || [];
		},
	},

	timetrial: {
		name: TLkey`Time Trial`,
		id: 'timetrial',
		desc: TLkey`Time starts when the player starts the hunt!`,

		onAfterLoad() {
			if (this.questions.length === 3) {
				this.announce(this.TL`This twist requires at least four questions. Please reset the hunt and make it again.`);
				this.huntLocked = true;
			}
			this.altIps = {};
			this.startTimes = {};
		},

		onJoin(user: User) {
			const TL = this.room.userTL(user);
			if (!Config.noipchecks) {
				const altIp = user.ips.find(ip => this.altIps[ip] && this.altsIps[ip].id !== user.id);
				if (altIp) {
					user.sendTo(this.room, TL`You already have started the hunt as ${this.altIps[altIp].name}.`);
					return true;
				}
			}
			if (!this.startTimes[user.id]) this.startTimes[user.id] = Date.now();
			if (this.addPlayer(user)) {
				this.cacheUserIps(user);
				delete this.leftHunt[user.id];
				user.sendTo(this.room, TL`You joined the scavenger hunt! Use the command /scavenge to answer.`);
				this.onSendQuestion(user);
			} else {
				user.sendTo(this.room, TL`You have already joined the hunt.`);
			}
			return true;
		},

		onLeave(player) {
			for (const ip of player.joinIps) {
				this.altIps[ip] = { id: player.id, name: player.name };
			}
		},

		onAnySubmit(player) {
			if (this.huntLocked) {
				player.sendRoom(player.TL`The hunt was not set up correctly.  Please wait for the host to reset the hunt and create a new one.`);
				return true;
			}
		},

		onComplete(player, time, blitz) {
			const now = Date.now();
			const takenTime = now - this.startTimes[player.id];
			const result = {
				name: player.name,
				id: player.id,
				time: Chat.toDurationString(takenTime, { hhmmss: true }),
				duration: takenTime,
				blitz,
			};
			this.completed.push(result);
			const place = Utils.formatOrder(this.completed.length);

			const name = Utils.html`<em>${result.name}</em>`;
			this.announce(blitz ?
				this.TL`${name} is the ${place} player to finish the hunt! (${takenTime} - BLITZ)` :
				this.TL`${name} is the ${place} player to finish the hunt! (${takenTime})`);
			Utils.sortBy(this.completed, entry => entry.duration);

			player.destroy(); // remove from user.games;
			return true;
		},
	},

	scavengersfeud: {
		id: 'scavengersfeud',
		name: TLkey`Scavengers Feud`,
		desc: TLkey`After completing the hunt, players will guess what the most common incorrect answer for each question is.`,
		onAfterLoad() {
			this.guesses = {};
			this.incorrect = this.questions.map(() => ({}));

			this.questions.push({
				hint: this.TL`Please enter what you think are the most common incorrect answers to each question.  (Enter your guesses in the order of the previous questions, and separate them with a comma)`,
				answer: [this.TL`Any`],
				spoilers: [],
			});
		},

		onIncorrectAnswer(player: ScavengerHuntPlayer, value: string) {
			const curr = player.currentQuestion;

			if (!this.incorrect[curr][value]) this.incorrect[curr][value] = [];
			if (this.incorrect[curr][value].includes(player.id)) return;

			this.incorrect[curr][value].push(player.id);
		},

		onSubmitPriority: 1,
		onSubmit(player, jumble, value) {
			const currentQuestion = player.currentQuestion;

			if (currentQuestion + 1 === this.questions.length) {
				this.guesses[player.id] = value.split(',').map((part: string) => sanitizeAnswer(part));

				this.onComplete(player);
				return true;
			}
		},

		onEnd() {
			this.questions = this.questions.slice(0, -1); // remove the automatically added last question.
		},

		onAfterEnd(isReset) {
			if (isReset) return;

			const buffer = [];
			for (const [idx, data] of this.incorrect.entries()) {
				// collate the data for each question
				let collection = [];
				for (const str in data) {
					collection.push({ count: data[str].length, value: str });
				}
				collection = collection.sort((a, b) => b.count - a.count);
				const maxValue = collection[0]?.count || 0;

				const matches = collection
					.filter(pair => pair.count === maxValue)
					.map(pair => pair.value);

				const matchedPlayers = [];
				for (const playerid in this.guesses) {
					const guesses = this.guesses[playerid];
					if (matches.includes(guesses[idx])) matchedPlayers.push(playerid);
				}

				// display the data
				const matchDisplay = matches.length ? matches.join(', ') : this.TL`No wrong answers!`;
				const playerDisplay = matches.length ?
					matchedPlayers.length ? `- ${matchedPlayers.join(', ')}` : `- ${this.TL`No one guessed correctly!`}` :
					'';
				buffer.push(`Q${idx + 1}: ${matchDisplay} ${playerDisplay}`);
			}

			this.announce(`<h3>${this.TL`Most common incorrect answers:`}</h3>${buffer.join('<br />')}`);
		},
	},

	pointless: {
		id: 'pointless',
		name: TLkey`Pointless`,
		desc: TLkey`Players get bonus points for guessing the least commonly guessed answers.`,
		onAfterLoad() {
			this.correct = this.questions.map(() => ({}));
		},

		onCorrectAnswer(player: ScavengerHuntPlayer, value: string) {
			const curr = player.currentQuestion;

			if (!this.correct[curr][value]) this.correct[curr][value] = [];
			if (this.correct[curr][value].includes(player.id)) return;

			this.correct[curr][value].push(player.id);
		},

		onAfterEnd(isReset) {
			if (isReset) return;

			const buffer = [];

			for (const [idx, data] of this.correct.entries()) {
				// collect the data for each question
				const list = Object.entries<string[]>(data).map(([value, players]) => ({ players, count: players.length, value }));
				const minValue = Math.min(...list.map(entry => entry.count));

				const minEntries = list.filter(entry => entry.count === minValue);
				const matchDisplay = minEntries.map(entry =>
					this.questions[idx].answer.find(answer => toID(answer) === entry.value)).join(', ');
				const playerDisplay = minEntries.flatMap(entry =>
					entry.players.map(foundPlayer => this.players.find(player => player.id === foundPlayer)!.name)).join(', ');
				buffer.push(`Q${idx + 1}: ${matchDisplay} - ${playerDisplay}`);
			}

			this.announce(`<h3>${this.TL`Least frequent correct answers:`}</h3>${buffer.join('<br />')}`);
		},
	},

	minesweeper: {
		id: 'minesweeper',
		name: TLkey`Minesweeper`,
		desc: TLkey`The huntmaker adds 'mines' to the hunt using \`!(mine)\` - players that dodge all mines get extra points, while the huntmaker gets points every time a mine is hit.`,
		onAfterLoad() {
			this.guesses = this.questions.map(() => []);
			this.mines = [];
			for (const question of this.questions) {
				this.mines.push(question.answer.filter(ans => ans.startsWith('!')));
				question.answer = question.answer.filter(ans => !ans.startsWith('!'));
			}
			if ((this.mines as string[][]).some(mineSet => mineSet.length === 0)) {
				this.announce(this.TL`This twist requires at least one mine for each question. Please reset the hunt and make it again.`);
				this.huntLocked = true;
			}
		},

		onEditQuestion(questionNumber: number, questionAnswer: string, value: string) {
			if (questionAnswer === 'question') questionAnswer = 'hint';
			if (!['hint', 'answer'].includes(questionAnswer)) return false;

			let answer: string[] = [];
			if (questionAnswer === 'answer') {
				answer = value.split(';').map(p => p.trim());
			}

			if (!questionNumber || questionNumber < 1 || questionNumber > this.questions.length || (!answer && !value)) {
				return false;
			}

			questionNumber--; // indexOf starts at 0

			if (questionAnswer === 'answer') {
				// These two lines are the only difference from the original
				this.mines[questionNumber] = answer.filter(ans => ans.startsWith('!'));
				this.questions[questionNumber].answer = answer.filter(ans => !ans.startsWith('!'));
			} else {
				this.questions[questionNumber].hint = value;
			}

			const questionNum = questionNumber + 1;
			this.announce(questionAnswer === 'hint' ?
				this.TL`The hint for question ${questionNum} has been edited.` :
				this.TL`The answer for question ${questionNum} has been edited.`);
			if (questionAnswer === 'hint') {
				for (const p in this.playerTable) {
					this.playerTable[p].onNotifyChange(questionNumber);
				}
			}
			return true;
		},

		onAnySubmit(player) {
			if (this.huntLocked) {
				player.sendRoom(player.TL`The hunt was not set up correctly.  Please wait for the host to reset the hunt and create a new one.`);
				return true;
			}
		},

		onIncorrectAnswer(player: ScavengerHuntPlayer, value: string) {
			const curr = player.currentQuestion;

			if (!this.guesses[curr][player.id]) this.guesses[curr][player.id] = new Set();
			this.guesses[curr][player.id].add(sanitizeAnswer(value));

			throw new Chat.ErrorMessage(player.TL`That is not the answer - try again!`);
		},

		onShowEndBoard(endedBy?: User) {
			const TL = this.TL;
			const mines: { mine: string, users: string[] }[][] = [];

			for (const mineSet of this.mines as string[][]) {
				mines.push(mineSet.map(mine => ({ mine: mine.substr(1), users: [] as string[] })));
			}

			for (const player of Object.values(this.playerTable)) {
				if (!player) continue;
				if (player.mines) {
					for (const { index, mine } of player.mines) {
						mines[index].find(obj => obj.mine === mine)?.users.push(player.name);
					}
				}
			}

			for (const mineSet of mines) mineSet.sort();

			this.announce(
				this.getEndBoardHeader(endedBy) +
				`<details style="cursor: pointer;"><summary>${TL`Solution:`} </summary><br />` +
				`${this.questions.map((q, i) => (
					`${i + 1}) ${this.formatOutput(q.hint)} <span style="color: lightgreen">[<em>${Utils.escapeHTML(q.answer.join(' / '))}</em>]</span><br/>` +
					`<details style="cursor: pointer;"><summary>${TL`Mines:`} </summary>${mines[i].map(({ mine, users }) => Utils.escapeHTML(`${mine}: ${users.join(' / ') || '-'}`)).join('<br />')}</details>`
				)).join("<br />")}` +
				`</details>`
			);
			return true;
		},

		onEnd(isReset) {
			if (isReset) return;
			for (const [q, guessObj] of this.guesses.entries()) {
				const mines: string[] = this.mines[q];
				for (const [playerId, guesses] of Object.entries(guessObj)) {
					const player = this.playerTable[playerId];
					if (!player) continue;
					if (!player.mines) player.mines = [];
					(player.mines as { index: number, mine: string }[]).push(...mines
						.filter(mine => (guesses as Set<string>).has(sanitizeAnswer(mine)))
						.map(mine => ({ index: q, mine: mine.substr(1) })));
				}
			}
		},

		onAfterEndPriority: 1,
		onAfterEnd(isReset) {
			if (isReset) return;
			const noMines = [];
			for (const { name } of this.completed) {
				const player = this.playerTable[toID(name)];
				if (!player) continue;
				if (!player.mines?.length) noMines.push(name);
			}
			if (noMines.length) {
				const names = Utils.escapeHTML(this.TL.andList(noMines));
				this.announce(noMines.length > 1 ?
					this.TL`${names} have completed the hunt without hitting a single mine!` :
					this.TL`${names} has completed the hunt without hitting a single mine!`);
				// Points are awarded manually
			}
		},
	},
};

const MODES: { [k: string]: GameMode | string } = {
	ko: 'kogames',
	kogames: {
		name: TLkey`KO Games`,
		id: 'kogames',

		mod: {
			name: TLkey`KO Games`,
			id: 'KO Games',
			isGameMode: true,

			onLoad() {
				this.allowRenames = false; // don't let people change their name in the middle of the hunt.
			},

			onJoin(user: User) {
				const game = this.room.scavgame!;
				if (game.playerlist && !game.playerlist.includes(user.id)) {
					const TL = this.room.userTL(user);
					user.sendTo(this.room, TL`You are not allowed to join this scavenger hunt.`);
					return true;
				}
			},

			onAfterEnd() {
				const game = this.room.scavgame!;
				if (!this.completed.length) {
					this.announce(this.TL`No one has completed the hunt - the round has been void.`);
					return;
				}

				game.round++;

				// elimination
				if (!game.playerlist) {
					game.playerlist = this.completed.map(entry => toID(entry.name));
					const finishers = this.TL.andList(this.completed.map(p => `<em>${p.name}</em>`));
					this.announce(this.TL`Round ${game.round} - ${finishers} have successfully completed the last hunt and have moved on to the next round!`);
				} else {
					let eliminated = [];
					const completed = this.completed.map(entry => toID(entry.name)) as string[];
					if (completed.length === game.playerlist.length) {
						eliminated.push(completed.pop()); // eliminate one
						game.playerlist = game.playerlist.filter(userid => completed.includes(userid));
					} else {
						eliminated = game.playerlist.filter(userid => !completed.includes(userid));
						for (const username of eliminated) {
							const userid = toID(username);
							game.playerlist = game.playerlist.filter(pid => pid !== userid);
						}
					}

					const eliminatedList = this.TL.andList(eliminated.map(n => `<em>${n}</em>`));
					const survivors = this.TL.andList(game.playerlist.map(p => `<em>${this.playerTable[p].name}</em>`));
					this.announce(eliminated.length === 1 ?
						this.TL`Round ${game.round} - ${eliminatedList} has been eliminated! ${survivors} have successfully completed the last hunt and have moved on to the next round!` :
						this.TL`Round ${game.round} - ${eliminatedList} have been eliminated! ${survivors} have successfully completed the last hunt and have moved on to the next round!`);
				}

				// process end of game
				if (game.playerlist.length === 1) {
					const winningUser = Users.get(game.playerlist[0]);
					const winner = winningUser ? winningUser.name : game.playerlist[0];

					this.announce(this.TL`Congratulations to the winner - ${winner}!`);
					game.destroy();
				} else if (!game.playerlist.length) {
					this.announce(this.TL`Everyone has been eliminated!  Better luck next time!`);
					game.destroy();
				}
			},
		},

		round: 0,
		playerlist: null,
	},

	scav: 'scavengergames',
	scavgames: 'scavengergames',
	scavengergames: {
		name: TLkey`Scavenger Games`,
		id: 'scavengergames',

		mod: {
			name: TLkey`Scavenger Games`,
			id: 'scavengergames',
			isGameMode: true,

			onLoad() {
				this.allowRenames = false; // don't let people change their name in the middle of the hunt.
				this.setTimer(1);
			},

			onJoin(user) {
				const game = this.room.scavgame!;
				if (game.playerlist && !game.playerlist.includes(user.id)) {
					const TL = this.room.userTL(user);
					user.sendTo(this.room, TL`You are not allowed to join this scavenger hunt.`);
					return true;
				}
			},

			onAfterEnd() {
				const game = this.room.scavgame!;
				if (!this.completed.length) {
					this.announce(this.TL`No one has completed the hunt - the round has been void.`);
					return;
				}
				game.round++;

				let eliminated: string[] = [];
				if (!game.playerlist) {
					game.playerlist = this.completed.map(entry => toID(entry.name) as string);
				} else {
					const completed = this.completed.map(entry => toID(entry.name) as string);
					eliminated = game.playerlist.filter(userid => !completed.includes(userid));
					for (const username of eliminated) {
						const userid = toID(username);
						game.playerlist = game.playerlist.filter(pid => pid !== userid);
					}
				}

				const eliminatedList = this.TL.andList(eliminated.map(n => `<em>${n}</em>`));
				const survivors = this.TL.andList(game.playerlist.map(p => `<em>${this.playerTable[p].name}</em>`));
				if (!eliminated.length) {
					this.announce(this.TL`Round ${game.round} - ${survivors} have successfully completed the last hunt and have moved on to the next round!`);
				} else if (eliminated.length === 1) {
					this.announce(this.TL`Round ${game.round} - ${eliminatedList} has been eliminated! ${survivors} have successfully completed the last hunt and have moved on to the next round!`);
				} else {
					this.announce(this.TL`Round ${game.round} - ${eliminatedList} have been eliminated! ${survivors} have successfully completed the last hunt and have moved on to the next round!`);
				}

				// process end of game
				if (game.playerlist.length === 1) {
					const winningUser = Users.get(game.playerlist[0]);
					const winner = winningUser ? winningUser.name : game.playerlist[0];

					this.announce(this.TL`Congratulations to the winner - ${winner}!`);
					game.destroy();
				} else if (!game.playerlist.length) {
					this.announce(this.TL`Everyone has been eliminated!  Better luck next time!`);
					game.destroy();
				}
			},
		},

		round: 0,
		playerlist: null,
	},

	pr: 'pointrally',
	pointrally: {
		name: TLkey`Point Rally`,
		id: 'pointrally',

		pointDistribution: [50, 40, 32, 25, 20, 15, 10],

		mod: {
			name: TLkey`Point Rally`,
			id: 'pointrally',
			isGameMode: true,

			onLoad() {
				const game = this.room.scavgame!;
				this.announce(this.TL`Round ${++game.round}`);
			},

			async onAfterEnd() {
				const game = this.room.scavgame!;
				for (const [i, completed] of this.completed.map(e => e.name).entries()) {
					const points = (game.pointDistribution[i] ||
						game.pointDistribution[game.pointDistribution.length - 1]);
					game.leaderboard.addPoints(completed, 'points', points);
				}
				// post leaderboard
				const room = this.room;
				const html = await game.leaderboard.htmlLadder(this.TL) as string;
				room.add(`|raw|${html}`).update();
			},
		},
		round: 0,
		leaderboard: true,
	},

	js: 'jumpstart',
	jump: 'jumpstart',
	jumpstart: {
		name: TLkey`Jump Start`,
		id: 'jumpstart',

		jumpstart: [60, 40, 30, 20, 10],
		round: 0,
		mod: {
			name: TLkey`Jump Start`,
			id: 'jumpstart',
			isGameMode: true,

			onLoad() {
				const game = this.room.scavgame!;
				if (game.round === 0) return;
				const maxTime = Math.max(...game.jumpstart);

				this.jumpstartTimers = [];
				this.answerLock = true;

				for (const [i, time] of game.jumpstart.entries()) {
					if (!game.completed[i]) break;

					this.jumpstartTimers[i] = setTimeout(() => {
						const target = game.completed.shift();
						if (!target) return;

						const staffHost = Users.get(this.staffHostId);
						const targetUser = Users.get(target);

						if (targetUser) {
							if (staffHost) {
								const forStaff = { TL: this.room.userTL(staffHost) };
								staffHost.sendTo(this.room, forStaff.TL`${targetUser.name} has received their first hint early.`);
							}
							const TL = this.room.userTL(targetUser);
							targetUser.sendTo(
								this.room,
								`|raw|<strong>${TL`The first hint to the next hunt is:`}</strong> <div style="overflow:auto; max-height: 50vh"> ${this.formatOutput(this.questions[0].hint)}</div>`
							);
							targetUser.sendTo(
								this.room,
								`|notify|${TL`Early Hint`}|${TL`The first hint to the next hunt is:`} <div style="overflow:auto; max-height: 50vh">  ${this.formatOutput(this.questions[0].hint)}</div>`
							);
						}
					}, (maxTime - time) * 1000 + 5000);
				}

				// when the jump starts are all given to eligible players
				this.jumpstartTimers[this.jumpstartTimers.length] = setTimeout(() => {
					this.answerLock = false;
					const message = this.getCreationMessage(true);
					this.room.add(message).update();
					this.announce(this.TL`You may start guessing!`);
					this.startTime = Date.now();
				}, 1000 * (maxTime + 5));
			},

			onJoin(user) {
				if (this.answerLock) {
					const TL = this.room.userTL(user);
					user.sendTo(this.room, TL`The hunt is not open for guesses yet!`);
					return true;
				}
			},

			onViewHunt(user) {
				if (this.answerLock && !(this.hosts.some(h => h.id === user.id) || user.id === this.staffHostId)) {
					return true;
				}
			},

			onCreateCallback(TL: Translator) {
				if (this.answerLock) {
					const type = gameTypeName(TL, this.gameType);
					const hosts = `<em>${Utils.escapeHTML(TL.andList(this.hosts.map(h => h.name)))}</em>`;
					const staffHost = this.hosts.some(h => h.id === this.staffHostId) ?
						'' : `<em>${Utils.escapeHTML(this.staffHostName)}</em>`;
					let announcement;
					if (['official', 'unrated'].includes(this.gameType)) {
						announcement = staffHost ?
							TL`An ${type} Scavenger Hunt by ${hosts} has been started by ${staffHost}.` :
							TL`An ${type} Scavenger Hunt by ${hosts} has been started.`;
					} else {
						announcement = staffHost ?
							TL`A ${type} Scavenger Hunt by ${hosts} has been started by ${staffHost}.` :
							TL`A ${type} Scavenger Hunt by ${hosts} has been started.`;
					}
					return `|raw|<div class="broadcast-blue"><strong>${announcement}` +
						`<br />${TL`The first hint is currently being handed out to early finishers.`}`;
				}
			},

			onEnd(reset) {
				if (this.jumpstartTimers) {
					for (const timer of this.jumpstartTimers) {
						clearTimeout(timer);
					}
				}
				const game = this.room.scavgame!;
				if (!reset) {
					if (game.round === 0) {
						game.completed = this.completed.map(entry => toID(entry.name));
						game.round++;
					} else {
						game.destroy();
					}
				}
			},
		},
	},

	ts: 'teamscavs',
	tscav: 'teamscavs',
	teamscavengers: 'teamscavs',
	teamscavs: {
		name: TLkey`Team Scavs`,
		id: 'teamscavs',
		/* {
			[team
			name: string]: {
			  name: string[],
			  players: UserID[],
			  answers: string[],
			  question: number,
			  completed: boolean
			}
		  } */
		teams: {},

		/** `message` should be in the room's language, like other hunt announcements */
		teamAnnounce(player: ScavengerHuntPlayer | User, message: string) {
			const team = this.getPlayerTeam(player);

			for (const userid of team.players) {
				const user = Users.getExact(userid);
				if (!user?.connected) continue; // user is offline

				user.sendTo(this.room, `|raw|<div class="infobox">${message}</div>`);
			}
		},

		getPlayerTeam(player: ScavengerHuntPlayer | User) {
			const game = this.room.scavgame!;
			for (const teamID in game.teams) {
				const team = game.teams[teamID];
				if (team.players.includes(player.id)) {
					return team;
				}
			}
			return null;
		},

		advanceTeam(answerer: ScavengerHuntPlayer, isFinished?: boolean) {
			const hunt = this.room.getGame(ScavengerHunt)!;

			const team = this.getPlayerTeam(answerer);

			team.question++;
			for (const userid of team.players) {
				const user = Users.getExact(userid);
				if (!user) continue;

				user.sendTo(this.room, hunt.getQuestion(team.question, false, this.room.userTL(user)));
			}
			team.answers = [];
		},

		mod: {
			name: TLkey`Team Scavs`,
			id: 'teamscavs',
			isGameMode: true,

			onLoad() {
				// don't let people change their name in the middle of the hunt.
				this.allowRenames = false;
			},

			onViewHunt(user) {
				const game = this.room.scavgame!;
				const team = game.getPlayerTeam(user);
				const player = this.playerTable[user.id];

				if (!player || !team) return;

				if (player.currentQuestion !== team.question - 1) player.currentQuestion = team.question - 1;
				if (team.completed) player.completed = true;
			},

			onSendQuestion(player) {
				const game = this.room.scavgame!;
				const team = game.getPlayerTeam(player);

				if (!team) return;

				if (player.currentQuestion !== team.question - 1) player.currentQuestion = team.question - 1;
				if (team.completed) {
					player.completed = true;
					player.sendRoom(player.TL`Your team has already completed the hunt!`);
					return true;
				}
			},

			onConnect(user) {
				const player = this.playerTable[user.id];
				if (!player) return;

				const game = this.room.scavgame!;
				const team = game.getPlayerTeam(player);

				if (team) {
					if (player.currentQuestion !== team.question - 1) player.currentQuestion = team.question - 1;
					if (team.completed) player.completed = true;
				}
			},

			onJoin(user) {
				const game = this.room.scavgame!;
				const team = game.getPlayerTeam(user);
				if (!team) {
					const TL = this.room.userTL(user);
					user.sendTo(this.room, TL`You are not allowed to join this scavenger hunt as you are not on any of the teams.`);
					return true;
				}
			},

			onAfterLoadPriority: -9999,
			onAfterLoad() {
				const game = this.room.scavgame!;

				if (Object.keys(game.teams).length === 0) {
					this.announce(this.TL`Teams have not been set up yet.  Please reset the hunt.`);
				}
			},

			// -1 so that blind incog takes precedence of this
			onCorrectAnswerPriority: -1,
			onCorrectAnswer(player, value) {
				const game = this.room.scavgame!;

				if (player.currentQuestion + 1 < this.questions.length) {
					const name = Utils.escapeHTML(player.name);
					const answer = Utils.escapeHTML(value);
					const questionNum = player.currentQuestion + 1;
					game.teamAnnounce(
						player,
						this.TL`<strong>${name}</strong> has gotten the correct answer (${answer}) for question #${questionNum}.`
					);
					game.advanceTeam(player);

					return false;
				}
			},

			onAnySubmit(player, value) {
				const game = this.room.scavgame!;

				const team = game.getPlayerTeam(player);

				if (!team) return true; // handle players who get kicked during the hunt.

				if (player.currentQuestion !== team.question - 1) player.currentQuestion = team.question - 1;
				if (team.completed) player.completed = true;

				if (player.completed) return;

				if (team.answers.includes(value)) return;
				const name = Utils.escapeHTML(player.name);
				const guess = Utils.escapeHTML(value);
				game.teamAnnounce(player, this.TL`${name} has guessed "${guess}".`);
				team.answers.push(value);
			},

			onCompletePriority: 2,
			onComplete(player, time, blitz) {
				const game = this.room.scavgame!;

				const team = game.getPlayerTeam(player);
				return { name: team.name, time, blitz };
			},

			// workaround that gives the answer after verifying that completion should not be hidden
			onConfirmCompletion(player, time, blitz) {
				const game = this.room.scavgame!;
				const team = game.getPlayerTeam(player);
				team.completed = true;
				team.question++;

				const name = Utils.escapeHTML(player.name);
				const questionNum = player.currentQuestion;
				game.teamAnnounce(
					player,
					this.TL`<strong>${name}</strong> has gotten the correct answer for question #${questionNum}.  Your team has completed the hunt!`
				);
			},

			onEnd() {
				const game = this.room.scavgame!;
				for (const teamID in game.teams) {
					const team = game.teams[teamID];
					team.answers = [];
					team.question = 1;
					team.completed = false;
				}
			},
		},
	},
};

export class ScavengerGameTemplate {
	room: Room;
	playerlist: null | string[];
	timer: NodeJS.Timeout | null;

	[k: string]: any;
	constructor(room: Room) {
		this.room = room;
		this.playerlist = null;
		this.timer = null;
	}

	destroy(force?: boolean) {
		if (this.timer) clearTimeout(this.timer);
		const game = this.room.getGame(ScavengerHunt);
		if (force && game) game.onEnd(false);
		this.room.scavgame = null;
	}

	eliminate(userid: string) {
		if (!this.playerlist?.includes(userid)) return false;
		this.playerlist = this.playerlist.filter(pid => pid !== userid);

		if (this.leaderboard) delete this.leaderboard.data[userid];
		return true;
	}

	announce(msg: string) {
		this.room.add(`|raw|<div class="broadcast-blue"><strong>${msg}</strong></div>`).update();
	}

	/** Translator for what the whole room sees: the room's language. */
	get TL() {
		return Chat.getTranslator(this.room.settings.language || null);
	}
}

const LoadGame = function (room: Room, gameid: string) {
	let game = MODES[gameid];
	if (!game) return false; // invalid id
	if (typeof game === 'string') game = MODES[game];

	const base = new ScavengerGameTemplate(room);

	const scavgame = Object.assign(base, Utils.deepClone(game));

	// initialize leaderboard if required
	if (scavgame.leaderboard) {
		scavgame.leaderboard = new Leaderboard();
	}
	return scavgame;
};

export const ScavMods = {
	LoadGame,
	twists: TWISTS,
	modes: MODES,
};
