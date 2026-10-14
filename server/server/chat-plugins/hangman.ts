/*
* Hangman chat plugin
* By bumbadadabum and Zarel. Art by crobat.
*/
import { FS, Utils } from '../../lib';
import { TLkey, type Translator } from '../../sim/dex-text';

const HANGMAN_FILE = 'config/chat-plugins/hangman.json';

const DIACRITICS_AFTER_UNDERSCORE = /_[\u0300-\u036f\u0483-\u0489\u0610-\u0615\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06ED\u0E31\u0E34-\u0E3A\u0E47-\u0E4E]+/g;
const MAX_HANGMAN_LENGTH = 30;
const MAX_INDIVIDUAL_WORD_LENGTH = 20;
const MAX_HINT_LENGTH = 150;

interface HangmanEntry {
	hints: string[];
	tags?: string[];
}

// futureproofing this into one single object so that new params can be added
// more easily
interface HangmanOptions {
	allowCreator?: boolean;
}

export let hangmanData: { [roomid: string]: { [phrase: string]: HangmanEntry } } = {};

try {
	hangmanData = JSON.parse(FS(HANGMAN_FILE).readSync());
	let save = false;
	for (const roomid in hangmanData) {
		const roomData = hangmanData[roomid] || {};
		const roomKeys = Object.keys(roomData);
		if (roomKeys.length && !roomData[roomKeys[0]].hints) {
			save = true;
			for (const key of roomKeys) {
				roomData[key] = { hints: roomData[key] as any };
			}
		}
	}
	if (save) {
		FS(HANGMAN_FILE).writeUpdate(() => JSON.stringify(hangmanData));
	}
} catch {}

const maxMistakes = 6;

export class Hangman extends Rooms.SimpleRoomGame {
	override readonly gameid = 'hangman' as ID;
	gameNumber: number;
	creator: ID;
	word: string;
	hint: string;
	incorrectGuesses: number;
	options: HangmanOptions;

	guesses: string[];
	letterGuesses: string[];
	lastGuesser: string;
	wordSoFar: string[];
	override readonly checkChat = true;

	constructor(
		room: Room,
		user: User,
		word: string,
		hint = '',
		gameOptions: HangmanOptions = {}
	) {
		super(room);

		this.gameNumber = room.nextGameNumber();

		this.title = 'Hangman';
		this.creator = user.id;
		// NFD splits accents apart from their letters (é -> e + ◌́), so that accented
		// letters are guessed like plain ones (also for saved words stored before NFD)
		word = word.normalize('NFD');
		this.word = word;
		this.hint = hint;
		this.incorrectGuesses = 0;
		this.options = gameOptions;

		this.guesses = [];
		this.letterGuesses = [];
		this.lastGuesser = '';
		this.wordSoFar = [];

		for (const letter of word) {
			if (/[a-zA-Z]/.test(letter)) {
				this.wordSoFar.push('_');
			} else {
				this.wordSoFar.push(letter);
			}
		}
	}

	/** Translator for messages the whole room sees. */
	roomTL() {
		return Chat.getTranslator(this.room.settings.language || null);
	}

	/** Translator for a message only `user` sees: the room's language, else the user's (like command replies). */
	userTL(user: User) {
		return Chat.getTranslator(this.room.settings.language || user.language);
	}

	override choose(user: User, word: string) {
		const TL = this.userTL(user);
		if (user.id === this.creator && !this.options.allowCreator) {
			throw new Chat.ErrorMessage(TL`You can't guess in your own hangman game.`);
		}

		// NFD + removing non-letters strips accents, so "é" can be guessed as "e"
		// and a whole word can be guessed with or without its accents
		const sanitized = word.normalize('NFD').replace(/[^A-Za-z ]/g, '');
		const normalized = toID(sanitized);
		if (normalized.length < 1) {
			throw new Chat.ErrorMessage(TL`Use "/guess [letter]" to guess a letter, or "/guess [phrase]" to guess the entire Hangman phrase.`);
		}
		if (sanitized.length > MAX_HANGMAN_LENGTH) {
			throw new Chat.ErrorMessage(TL`Guesses must be ${MAX_HANGMAN_LENGTH} or fewer letters – "${word}" is too long.`);
		}

		for (const guessid of this.guesses) {
			if (normalized === toID(guessid)) throw new Chat.ErrorMessage(TL`Your guess "${word}" has already been guessed.`);
		}

		if (sanitized.length > 1) {
			if (!this.guessWord(sanitized, user.name)) {
				throw new Chat.ErrorMessage(TL`Your guess "${sanitized}" is invalid.`);
			} else {
				const name = user.name;
				this.room.addByUser(user, this.room.TL`${name} guessed "${sanitized}"!`);
			}
		} else {
			if (!this.guessLetter(sanitized, user.name)) {
				throw new Chat.ErrorMessage(TL`Your guess "${sanitized}" is not a valid letter.`);
			}
		}
	}

	guessLetter(letter: string, guesser: string) {
		letter = letter.toUpperCase();
		if (this.guesses.includes(letter)) return false;
		if (this.word.toUpperCase().includes(letter)) {
			for (let i = 0; i < this.word.length; i++) {
				if (this.word[i].toUpperCase() === letter) {
					this.wordSoFar[i] = this.word[i];
				}
			}

			if (!this.wordSoFar.includes('_')) {
				this.incorrectGuesses = -1;
				this.guesses.push(letter);
				this.letterGuesses.push(`${letter}1`);
				this.lastGuesser = guesser;
				this.finish();
				return true;
			}
			this.letterGuesses.push(`${letter}1`);
		} else {
			this.incorrectGuesses++;
			this.letterGuesses.push(`${letter}0`);
		}

		this.guesses.push(letter);
		this.lastGuesser = guesser;
		this.update();
		return true;
	}

	guessWord(word: string, guesser: string) {
		const ourWord = toID(this.word.replace(/[0-9]+/g, ''));
		const guessedWord = toID(word.replace(/[0-9]+/g, ''));
		const wordSoFar = this.wordSoFar.filter(letter => /[a-zA-Z_]/.test(letter)).join('').toLowerCase();

		// Can't be a correct guess if the lengths don't match
		if (ourWord.length !== guessedWord.length) return false;

		for (let i = 0; i < ourWord.length; i++) {
			if (wordSoFar.charAt(i) === '_') {
				// Can't be a correct guess if it contains letters already guessed
				if (this.letterGuesses.some(guess => guess.toLowerCase().startsWith(guessedWord.charAt(i)))) return false;
			} else if (wordSoFar.charAt(i) !== guessedWord.charAt(i)) {
				// Can't be a correct guess if the guess has incorrect letters in already guessed indexes
				return false;
			}
		}

		if (ourWord === guessedWord) {
			for (const [i, letter] of this.wordSoFar.entries()) {
				if (letter === '_') {
					this.wordSoFar[i] = this.word[i];
				}
			}
			this.incorrectGuesses = -1;
			this.guesses.push(word);
			this.lastGuesser = guesser;
			this.finish();
		} else {
			this.incorrectGuesses++;
			this.guesses.push(word);
			this.lastGuesser = guesser;
			this.update();
		}
		return true;
	}

	hangingMan() {
		return `<img width="120" height="120" src="//${Config.routes.client}/fx/hangman${this.incorrectGuesses === -1 ? 7 : this.incorrectGuesses}.png" />`;
	}

	generateWindow(TL: Translator = this.roomTL()) {
		let result = 0;

		if (this.incorrectGuesses === maxMistakes) {
			result = 1;
		} else if (!this.wordSoFar.includes('_')) {
			result = 2;
		}

		const color = result === 1 ? 'red' : (result === 2 ? 'green' : 'blue');
		const message = result === 1 ? TL`Too bad! The mon has been hanged.` :
			result === 2 ? TL`The word has been guessed. Congratulations!` : TL`Hangman`;
		let output = `<div class="broadcast-${color}">`;
		output += `<p style="text-align:left;font-weight:bold;font-size:10pt;margin:5px 0 0 15px">${message}</p>`;
		output += `<table><tr><td style="text-align:center;">${this.hangingMan()}</td><td style="text-align:center;width:100%;word-wrap:break-word">`;

		let escapedWord = this.wordSoFar.map(Utils.escapeHTML);
		if (result === 1) {
			const word = this.word;
			escapedWord = escapedWord.map((letter, index) =>
				letter === '_' ? `<font color="#7af87a">${word.charAt(index)}</font>` : letter);
		}
		const wordString = escapedWord.join('').replace(DIACRITICS_AFTER_UNDERSCORE, '_');

		if (this.hint) {
			const hint = Utils.escapeHTML(this.hint);
			output += `<div>${TL`(Hint: ${hint})`}</div>`;
		}
		output += `<p style="font-weight:bold;font-size:12pt;letter-spacing:3pt">${wordString}</p>`;
		if (this.guesses.length) {
			if (this.letterGuesses.length) {
				const letters = this.letterGuesses.map(
					g => `<strong${g[1] === '1' ? '' : ' style="color: #DBA"'}>${g[0]}</strong>`
				).join(', ');
				output += TL`Letters: ${letters}`;
			}
			const guesser = Utils.escapeHTML(this.lastGuesser);
			if (result === 2) {
				output += `<br />${TL`Winner: ${guesser}`}`;
			} else if (this.guesses[this.guesses.length - 1].length === 1) {
				// last guess was a letter
				output += ` <small>&ndash; ${guesser}</small>`;
			} else {
				const guess = Utils.escapeHTML(this.guesses[this.guesses.length - 1]);
				output += `<br />${TL`Guessed: ${guess}`} <small>&ndash; ${guesser}</small>`;
			}
		}

		output += '</td></tr></table></div>';

		return output;
	}

	display(user: User, broadcast = false) {
		if (broadcast) {
			this.room.add(`|uhtml|hangman${this.gameNumber}|${this.generateWindow()}`);
		} else {
			user.sendTo(this.room, `|uhtml|hangman${this.gameNumber}|${this.generateWindow(this.userTL(user))}`);
		}
	}

	update() {
		this.room.uhtmlchange(`hangman${this.gameNumber}`, this.generateWindow());

		if (this.incorrectGuesses === maxMistakes) {
			this.finish();
		}
	}

	end() {
		this.room.uhtmlchange(`hangman${this.gameNumber}`, `<div class="infobox">(${this.room.TL`The game of hangman was ended.`})</div>`);
		this.room.add(this.room.TL`The game of hangman was ended.`);
		this.room.game = null;
	}

	finish() {
		this.room.uhtmlchange(
			`hangman${this.gameNumber}`,
			`<div class="infobox">(${this.room.TL`The game of hangman has ended &ndash; scroll down to see the results`})</div>`
		);
		this.room.add(`|html|${this.generateWindow()}`);
		this.room.game = null;
	}
	static save() {
		FS(HANGMAN_FILE).writeUpdate(() => JSON.stringify(hangmanData));
	}
	static getRandom(room: RoomID, tag: string | undefined, TL: Translator) {
		if (!hangmanData[room]) {
			hangmanData[room] = {};
			this.save();
		}
		let phrases = Object.keys(hangmanData[room]);
		if (!phrases.length) throw new Chat.ErrorMessage(TL`The room ${room} has no saved hangman words.`);
		if (tag) {
			tag = toID(tag);
			phrases = phrases.filter(key => hangmanData[room][key].tags?.map(toID).includes(tag as ID));
			if (!phrases.length) {
				throw new Chat.ErrorMessage(TL`No terms found with tag ${tag}`);
			}
		}

		const shuffled = Utils.randomElement(phrases);
		const entry = hangmanData[room][shuffled];
		return {
			question: shuffled,
			hint: Utils.randomElement(entry.hints),
		};
	}
	static validateParams(params: string[], TL: Translator) {
		// NFD splits diacritics apart from letters, allowing the letters to be guessed
		// underscore is used to signal "letter hasn't been guessed yet", so replace it with Japanese underscore as a workaround
		const phrase = params[0].normalize('NFD').trim().replace(/_/g, '\uFF3F');

		if (!phrase.length) throw new Chat.ErrorMessage(TL`Enter a valid word`);
		if (phrase.length > MAX_HANGMAN_LENGTH) {
			throw new Chat.ErrorMessage(TL`Phrase must be less than ${MAX_HANGMAN_LENGTH} characters long.`);
		}
		if (phrase.split(' ').some(w => w.length > MAX_INDIVIDUAL_WORD_LENGTH)) {
			throw new Chat.ErrorMessage(TL`Each word in the phrase must be less than ${MAX_INDIVIDUAL_WORD_LENGTH} characters long.`);
		}
		if (!/[a-zA-Z]/.test(phrase)) throw new Chat.ErrorMessage(TL`Word must contain at least one letter.`);
		let hint;
		if (params.length > 1) {
			hint = params.slice(1).join(',').trim();
			if (hint.length > MAX_HINT_LENGTH) {
				throw new Chat.ErrorMessage(TL`Hint must be less than ${MAX_HINT_LENGTH} characters long.`);
			}
		}
		return { phrase, hint };
	}
}

export const commands: Chat.ChatCommands = {
	hangman: {
		create: 'new',
		new(target, room, user, connection) {
			room = this.requireRoom();
			target = target.trim();
			const text = this.filter(target);
			if (target !== text) throw new Chat.ErrorMessage(this.TL`You are not allowed to use filtered words in hangmans.`);
			const params = text.split(',');

			this.checkCan('minigame', null, room);
			if (room.settings.hangmanDisabled) throw new Chat.ErrorMessage(this.TL`Hangman is disabled for this room.`);
			this.checkChat();
			if (room.game) {
				const gameTitle = room.game.title;
				throw new Chat.ErrorMessage(this.TL`There is already a game of ${gameTitle} in progress in this room.`);
			}

			if (!params) throw new Chat.ErrorMessage(this.TL`No word entered.`);
			const { phrase, hint } = Hangman.validateParams(params, this.TL);

			const game = new Hangman(room, user, phrase, hint);
			room.game = game;
			game.display(user, true);

			this.modlog('HANGMAN');
			const name = user.name;
			return this.addModAction(room.TL`A game of hangman was started by ${name} – use /guess to play!`);
		},
		createhelp: [TLkey`/hangman create [word], [hint] - Makes a new hangman game. Requires: % @ # ~`],

		guess(target, room, user) {
			const word = this.filter(target);
			if (word !== target) throw new Chat.ErrorMessage(this.TL`You may not use filtered words in guesses.`);
			this.parse(`/choose ${target}`);
		},
		guesshelp: [
			TLkey`/guess [letter] - Makes a guess for the letter entered.`,
			TLkey`/guess [word] - Same as a letter, but guesses an entire word.`,
		],

		stop: 'end',
		end(target, room, user) {
			room = this.requireRoom();
			this.checkCan('minigame', null, room);
			this.checkChat();
			const game = this.requireGame(Hangman);
			game.end();
			this.modlog('ENDHANGMAN');
			const name = user.name;
			return this.privateModAction(room.TL`The game of hangman was ended by ${name}.`);
		},
		endhelp: [TLkey`/hangman end - Ends the game of hangman before the man is hanged or word is guessed. Requires: % @ # ~`],

		disable(target, room, user) {
			room = this.requireRoom();
			this.checkCan('gamemanagement', null, room);
			if (room.settings.hangmanDisabled) {
				throw new Chat.ErrorMessage(this.TL`Hangman is already disabled.`);
			}
			room.settings.hangmanDisabled = true;
			room.saveSettings();
			return this.sendReply(this.TL`Hangman has been disabled for this room.`);
		},

		enable(target, room, user) {
			room = this.requireRoom();
			this.checkCan('gamemanagement', null, room);
			if (!room.settings.hangmanDisabled) {
				throw new Chat.ErrorMessage(this.TL`Hangman is already enabled.`);
			}
			delete room.settings.hangmanDisabled;
			room.saveSettings();
			return this.sendReply(this.TL`Hangman has been enabled for this room.`);
		},

		display(target, room, user) {
			room = this.requireRoom();
			const game = this.requireGame(Hangman);
			if (!this.runBroadcast()) return;
			room.update();

			game.display(user, this.broadcasting);
		},

		''(target, room, user) {
			return this.parse('/help hangman');
		},

		random(target, room, user) {
			room = this.requireRoom();
			this.checkCan('mute', null, room);
			if (room.game) {
				const gameTitle = room.game.title;
				throw new Chat.ErrorMessage(this.TL`There is already a game of ${gameTitle} running.`);
			}
			target = toID(target);
			const { question, hint } = Hangman.getRandom(room.roomid, target, this.TL);
			const game = new Hangman(room, user, question, hint, { allowCreator: true });
			room.game = game;
			const name = user.name;
			this.addModAction(room.TL`${name} started a random game of hangman - use /guess to play!`);
			game.display(user, true);
			this.modlog(`HANGMAN RANDOM`, null, target ? `tag: ${target}` : '');
		},
		addrandom(target, room, user) {
			room = this.requireRoom();
			this.checkCan('mute', null, room);
			if (!hangmanData[room.roomid]) hangmanData[room.roomid] = {};
			if (!target) return this.parse('/help hangman');
			// validation
			const args = target.split(target.includes('|') ? '|' : ',');
			const { phrase } = Hangman.validateParams(args, this.TL);
			if (!hangmanData[room.roomid][phrase]) hangmanData[room.roomid][phrase] = { hints: [] };
			args.shift();
			hangmanData[room.roomid][phrase].hints.push(...args);
			Hangman.save();
			const name = user.name;
			const count = args.length;
			// like Chat.count, which uses the plural form only above 1
			this.privateModAction(count > 1 ?
				room.TL`${name} added a random hangman with ${count} hints.` :
				room.TL`${name} added a random hangman with ${count} hint.`);
			this.modlog(`HANGMAN ADDRANDOM`, null, `${phrase}: ${args.join(', ')}`);
		},
		rr: 'removerandom',
		removerandom(target, room, user) {
			room = this.requireRoom();
			this.checkCan('mute', null, room);
			let [word, ...hints] = target.split(',');
			if (!toID(target) || !word) return this.parse('/help hangman');
			for (const [i, hint] of hints.entries()) {
				if (hint.startsWith('room:')) {
					const newID = hint.slice(5);
					const targetRoom = Rooms.search(newID);
					if (!targetRoom) {
						throw new Chat.ErrorMessage(this.TL`Invalid room: ${newID}`);
					}
					this.room = targetRoom;
					room = targetRoom;
					hints.splice(i, 1);
				}
			}
			if (!hangmanData[room.roomid]) {
				throw new Chat.ErrorMessage(this.TL`There are no hangman words for this room.`);
			}
			const roomKeys = Object.keys(hangmanData[room.roomid]);
			const roomKeyIDs = roomKeys.map(toID);
			// saved words are stored in NFD (accents split apart), so accented input has to match them
			const index = roomKeyIDs.indexOf(toID(word.normalize('NFD')));
			if (index < 0) {
				throw new Chat.ErrorMessage(this.TL`That word is not a saved hangman.`);
			}
			word = roomKeys[index];
			hints = hints.map(toID);

			const name = user.name;
			if (!hints.length) {
				delete hangmanData[room.roomid][word];
				this.privateModAction(room.TL`${name} deleted the hangman entry for '${word}'`);
				this.modlog(`HANGMAN REMOVERANDOM`, null, word);
			} else {
				hangmanData[room.roomid][word].hints = hangmanData[room.roomid][word].hints.filter(item => !hints.includes(toID(item)));
				if (!hangmanData[room.roomid][word].hints.length) {
					delete hangmanData[room.roomid][word];
				}
				const count = hints.length;
				// like Chat.count, which uses the plural form only above 1
				this.privateModAction(count > 1 ?
					room.TL`${name} deleted ${count} hints for the hangman term '${word}'` :
					room.TL`${name} deleted ${count} hint for the hangman term '${word}'`);
				this.modlog(`HANGMAN REMOVERANDOM`, null, `${word}: ${hints.join(', ')}`);
			}
			this.refreshPage(`hangman-${room.roomid}`);
			Hangman.save();
		},
		addtag(target, room, user) {
			room = this.requireRoom();
			this.checkCan('mute', null, room);
			let [term, ...tags] = target.split(',');
			// only a .trim() because toID will make it unable to find the term if it has caps
			// (and NFD, since saved terms are stored with their accents split apart)
			term = term.trim().normalize('NFD');
			tags = tags.map(i => toID(i)).filter(Boolean);
			if (!term || !tags?.length) {
				return this.parse('/help hangman');
			}
			if (!hangmanData[room.roomid]) {
				hangmanData[room.roomid] = {};
			}
			if (!hangmanData[room.roomid][term]) {
				throw new Chat.ErrorMessage(this.TL`Term ${term} not found.`);
			}
			if (!hangmanData[room.roomid][term].tags) hangmanData[room.roomid][term].tags = [];
			for (const [i, tag] of tags.entries()) {
				if (hangmanData[room.roomid][term].tags!.includes(tag)) {
					this.errorReply(this.TL`The tag ${tag} is already on the term ${term} and has been skipped.`);
					tags.splice(i, 1);
				}
			}
			if (!tags.length) {
				this.errorReply(this.TL`Specify at least one valid tag.`);
				return this.parse(`/help hangman`);
			}
			hangmanData[room.roomid][term].tags!.push(...tags);
			Hangman.save();
			const name = user.name;
			const count = tags.length;
			// like Chat.count, which uses the plural form only above 1
			this.privateModAction(count > 1 ?
				room.TL`${name} added ${count} tags to the hangman term ${term}` :
				room.TL`${name} added ${count} tag to the hangman term ${term}`);
			this.modlog(`HANGMAN ADDTAG`, null, `${term}: ${tags.map(Utils.escapeHTML).join(', ')}`);
			this.refreshPage(`hangman-${room.roomid}`);
		},
		untag(target, room, user) {
			room = this.requireRoom();
			this.checkCan('mute', null, room);
			if (!toID(target)) {
				return this.parse(`/help hangman`);
			}
			let [term, ...tags] = target.split(',');
			// saved terms are stored in NFD (accents split apart)
			term = term.normalize('NFD');
			tags = tags.map(i => toID(i)).filter(Boolean);
			if (!term || !tags) {
				return this.parse('/help hangman');
			}
			if (!hangmanData[room.roomid]) {
				throw new Chat.ErrorMessage(this.TL`This room has no hangman terms.`);
			}
			if (!hangmanData[room.roomid][term]) {
				throw new Chat.ErrorMessage(this.TL`That term was not found.`);
			}
			if (!hangmanData[room.roomid][term].tags) {
				throw new Chat.ErrorMessage(this.TL`That term has no tags.`);
			}
			const name = user.name;
			if (tags.length) {
				const count = tags.length;
				// like Chat.count, which uses the plural form only above 1
				this.privateModAction(count > 1 ?
					room.TL`${name} removed ${count} tags from the hangman term ${term}` :
					room.TL`${name} removed ${count} tag from the hangman term ${term}`);
				this.modlog(`HANGMAN UNTAG`, null, `${term}: ${tags.map(Utils.escapeHTML).join(', ')}`);
				hangmanData[room.roomid][term].tags = hangmanData[room.roomid][term].tags?.filter(t => !tags.includes(t));
			} else {
				this.privateModAction(room.TL`${name} removed all tags from the hangman term ${term}`);
				this.modlog(`HANGMAN UNTAG`, null, `${term}`);
				hangmanData[room.roomid][term].tags = [];
			}

			if (!hangmanData[room.roomid][term].tags!.length) {
				delete hangmanData[room.roomid][term].tags;
			}
			Hangman.save();
			this.refreshPage(`hangman-${room.roomid}`);
		},
		view: 'terms',
		terms(target, room, user) {
			room = this.requireRoom();
			return this.parse(`/j view-hangman-${target || room.roomid}`);
		},
	},

	hangmanhelp: [
		TLkey`/hangman allows users to play the popular game hangman in PS rooms.`,
		TLkey`Accepts the following commands:`,
		TLkey`/hangman create [word], [hint] - Makes a new hangman game. Requires: % @ # ~`,
		TLkey`/hangman guess [letter] - Makes a guess for the letter entered.`,
		TLkey`/hangman guess [word] - Same as a letter, but guesses an entire word.`,
		TLkey`/hangman display - Displays the game.`,
		TLkey`/hangman end - Ends the game of hangman before the man is hanged or word is guessed. Requires: % @ # ~`,
		TLkey`/hangman [enable/disable] - Enables or disables hangman from being started in a room. Requires: # ~`,
		TLkey`/hangman random [tag]- Runs a random hangman, if the room has any added. `,
		TLkey`If a tag is given, randomizes from only terms with those tags. Requires: % @ # ~`,
		TLkey`/hangman addrandom [word], [...hints] - Adds an entry for [word] with the [hints] provided to the room's hangman pool. Requires: % @ # ~`,
		TLkey`/hangman removerandom [word][, hints] - Removes data from the hangman entry for [word]. If hints are given, removes only those hints. Otherwise it removes the entire entry. Requires: % @ ~ #`,
		TLkey`/hangman addtag [word], [...tags] - Adds tags to the hangman term matching [word]. Requires: % @ ~ #`,
		TLkey`/hangman untag [term][, ...tags] - Removes tags from the hangman [term]. If tags are given, removes only those tags. Requires: % @ # * `,
		TLkey`/hangman terms - Displays all random hangman in a room. Requires: % @ # ~`,
	],
};

export const pages: Chat.PageTable = {
	hangman(args, user) {
		const room = this.requireRoom();
		this.title = this.TL`[Hangman]`;
		this.checkCan('mute', null, room);
		const roomTitle = room.title;
		let buf = `<div class="pad"><button style="float:right;" class="button" name="send" value="/join view-hangman-${room.roomid}"><i class="fa fa-refresh"></i> ${this.TL`Refresh`}</button>`;
		buf += `<div class="pad"><h2>${this.TL`Hangman entries on ${roomTitle}`}</h2>`;
		const roomTerms = hangmanData[room.roomid];
		if (!roomTerms) {
			throw new Chat.ErrorMessage(this.TL`No hangman terms found for ${roomTitle}.`);
		}
		const deleteLabel = this.TL`Delete`;
		for (const t in roomTerms) {
			buf += `<div class="infobox">`;
			buf += `<h3>${t}</h3><hr />`;
			if (user.can('mute', null, room, 'hangman addrandom')) {
				buf += `<strong>${this.TL`Hints:`}</strong> `;
				buf += roomTerms[t].hints.map(
					hint => `${hint} <button class="button" name="send" value="/msgroom ${room.roomid}, /hangman rr ${t},${hint}" aria-label="${deleteLabel}"><i class="fa fa-trash"></i></button>`
				).join(', ');
				buf += `<button style="float:right;" class="button" name="send" value="/msgroom ${room.roomid}, /hangman rr ${t}"><i class="fa fa-trash"></i> ${this.TL`Delete all terms`}</button>`;
				if (roomTerms[t].tags) {
					buf += `<br /><strong>${this.TL`Tags:`} </strong> `;
					buf += roomTerms[t].tags?.map(
						tag => `${tag} <button class="button" name="send" value="/msgroom ${room.roomid}, /hangman untag ${t},${tag}" aria-label="${deleteLabel}"><i class="fa fa-trash"></i></button>`
					).join(', ');
					buf += `<button style="float:right;" class="button" name="send" value="/msgroom ${room.roomid}, /hangman untag ${t}"><i class="fa fa-trash"></i> ${this.TL`Delete all tags`}</button>`;
				}
			}
			buf += `</div><br />`;
		}
		buf += `</div>`;
		return buf;
	},
};

export const roomSettings: Chat.SettingsHandler = room => ({
	label: TLkey`Hangman`,
	permission: 'editroom',
	options: [
		[TLkey`disabled`, room.settings.hangmanDisabled || 'hangman disable'],
		[TLkey`enabled`, !room.settings.hangmanDisabled || 'hangman enable'],
	],
});
