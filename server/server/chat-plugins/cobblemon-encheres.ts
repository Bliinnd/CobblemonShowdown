/**
 * CobblemonShowdown : enchères du salon « Enchère », pour composer les équipes des teamtours.
 *
 * - L'admin nomme les capitaines (rang ♛ Capitaine dans le salon, seul rang qui peut y parler)
 *   et donne un nom à leur équipe ; chaque capitaine part avec le même budget.
 * - L'admin remplit la liste des joueurs à vendre.
 * - Chacun son tour, un capitaine propose un joueur de la liste : il en est le premier enchérisseur,
 *   à la mise de départ. Les capitaines surenchérissent avec /mise (ou en tapant juste un montant).
 *   Sans nouvelle mise avant la fin du chrono, le joueur rejoint l'équipe du meilleur enchérisseur
 *   et le tableau des équipes est affiché.
 *
 * Tout est enregistré dans config/chat-plugins/encheres.json : un redémarrage du site ne perd ni
 * les équipes, ni les joueurs, ni l'argent (seule une vente en cours est annulée).
 */
import { FS, Utils } from '../../lib';

const DATA_FILE = 'config/chat-plugins/encheres.json';
/** Le salon des enchères (son identifiant perd l'accent : « enchre », l'alias est « enchere »). */
const ROOM_ALIAS = 'enchere';
export const CAPTAIN_SYMBOL = '♛' as GroupSymbol;

interface AuctionPlayer {
	id: ID;
	name: string;
	/** Précisions libres : formats joués, disponibilités… */
	note?: string;
	/** Capitaine de l'équipe qui l'a acheté. */
	team?: ID;
	price?: number;
}

interface AuctionTeam {
	captain: ID;
	captainName: string;
	name: string;
	/** Argent ajouté ou retiré à la main par l'admin. */
	bonus: number;
}

interface AuctionData {
	/** Argent de départ de chaque capitaine. */
	budget: number;
	/** Mise de départ d'un joueur proposé. */
	startingBid: number;
	/** Écart minimum entre deux mises. */
	increment: number;
	/** Secondes sans nouvelle mise avant que le joueur soit adjugé. */
	timer: number;
	/** Nombre maximum de joueurs par équipe (0 : pas de limite). */
	maxPlayers: number;
	/** Dans l'ordre de passage. */
	teams: AuctionTeam[];
	players: AuctionPlayer[];
	/** Indice de l'équipe dont c'est le tour de proposer un joueur. */
	turn: number;
	started: boolean;
}

interface Lot {
	player: AuctionPlayer;
	bid: number;
	bidder: AuctionTeam;
	timeLeft: number;
	interval: NodeJS.Timeout;
}

function defaultData(): AuctionData {
	return {
		budget: 100000, startingBid: 3000, increment: 500, timer: 15, maxPlayers: 0,
		teams: [], players: [], turn: 0, started: false,
	};
}

function loadData(): AuctionData {
	try {
		return { ...defaultData(), ...JSON.parse(FS(DATA_FILE).readIfExistsSync() || '{}') };
	} catch {
		return defaultData();
	}
}

const data = loadData();
let lot: Lot | null = null;

function save() {
	FS(DATA_FILE).writeUpdate(() => JSON.stringify(data));
}

function money(amount: number) {
	return amount.toLocaleString('fr-FR');
}

/** « 15000 », « 15 000 », « 15k » ou « 15,5k » */
function parseAmount(text: string) {
	const match = /^([+-]?)\s*(\d+(?:[.,]\d+)?)\s*(k?)$/i.exec(text.replace(/[\s\u202f\u00a0]/g, ''));
	if (!match) return null;
	let amount = Number(match[2].replace(',', '.'));
	if (match[3]) amount *= 1000;
	amount = Math.round(amount);
	return match[1] === '-' ? -amount : amount;
}

function requireAmount(text: string, what: string) {
	const amount = parseAmount(text);
	if (amount === null || amount < 0) throw new Chat.ErrorMessage(`${what} : « ${text} » n'est pas un montant valide (ex. 5000 ou 5k).`);
	return amount;
}

function auctionRoom() {
	return Rooms.search(ROOM_ALIAS) || null;
}

function teamPlayers(team: AuctionTeam) {
	return data.players.filter(p => p.team === team.captain);
}

function spent(team: AuctionTeam) {
	return teamPlayers(team).reduce((total, p) => total + (p.price || 0), 0);
}

function credits(team: AuctionTeam) {
	return data.budget + team.bonus - spent(team);
}

function isFull(team: AuctionTeam) {
	return !!data.maxPlayers && teamPlayers(team).length >= data.maxPlayers;
}

/** Mise maximum : le capitaine doit pouvoir compléter son équipe à la mise de départ. */
function maxBid(team: AuctionTeam) {
	const slotsAfter = data.maxPlayers ? Math.max(0, data.maxPlayers - teamPlayers(team).length - 1) : 0;
	return credits(team) - slotsAfter * data.startingBid;
}

function canBuy(team: AuctionTeam) {
	return !isFull(team) && maxBid(team) >= data.startingBid;
}

function availablePlayers() {
	return data.players.filter(p => !p.team);
}

function findTeam(name: string) {
	const id = toID(name);
	const team = data.teams.find(t => t.captain === id || toID(t.name) === id);
	if (!team) throw new Chat.ErrorMessage(`Aucun capitaine ni équipe « ${name} ».`);
	return team;
}

function findPlayer(name: string) {
	const player = data.players.find(p => p.id === toID(name));
	if (!player) throw new Chat.ErrorMessage(`« ${name} » n'est pas dans la liste des joueurs.`);
	return player;
}

function teamLabel(team: AuctionTeam) {
	return Utils.html`<strong>${team.name}</strong> (${team.captainName})`;
}

function send(room: Room, html: string) {
	room.add(`|html|${html}`).update();
}

function teamsTable() {
	if (!data.teams.length) return `<div class="infobox">Aucun capitaine pour l'instant.</div>`;
	const current = data.started && !lot ? data.teams[data.turn] : null;
	let buf = `<div class="infobox"><div class="ladder"><table style="width:100%">`;
	buf += `<tr><th>Équipe</th><th>Capitaine</th><th>Joueurs</th><th>Argent</th></tr>`;
	for (const team of data.teams) {
		const players = teamPlayers(team);
		const list = players.length ?
			players.map(p => Utils.html`<username>${p.name}</username> <small>(${money(p.price || 0)})</small>`).join('<br />') :
			`<em>aucun</em>`;
		const turn = team === current ? ' <small>← à son tour</small>' : '';
		buf += `<tr><td><strong>${Utils.escapeHTML(team.name)}</strong>${turn}</td>`;
		buf += Utils.html`<td><username class="username">${team.captainName}</username></td>`;
		buf += `<td>${list}</td>`;
		buf += `<td style="white-space:nowrap">${money(credits(team))}` +
			`${data.maxPlayers ? `<br /><small>${players.length}/${data.maxPlayers} joueurs</small>` : ''}</td></tr>`;
	}
	buf += `</table></div>`;
	const left = availablePlayers();
	buf += `<details><summary>Joueurs encore disponibles (${left.length})</summary>`;
	buf += left.length ? left.map(p => Utils.html`<username>${p.name}</username>${p.note ? ` <small>(${p.note})</small>` : ''}`).join(', ') : `<em>aucun</em>`;
	buf += `</details></div>`;
	return buf;
}

function showTable(room: Room) {
	// Un seul tableau à jour dans le salon : le précédent est remplacé par celui-ci, en bas.
	room.add(`|uhtml|encheres-tableau|${teamsTable()}`).update();
}

function lotHTML() {
	if (!lot) return '';
	const { player, bid, bidder, timeLeft } = lot;
	let buf = `<div class="infobox" style="text-align:center">`;
	buf += Utils.html`<div style="font-size:12pt">En vente : <strong><username>${player.name}</username></strong></div>`;
	if (player.note) buf += Utils.html`<div><small>${player.note}</small></div>`;
	buf += `<div style="font-size:14pt;margin:4px 0"><strong>${money(bid)}</strong></div>`;
	buf += `<div>Meilleure offre : ${teamLabel(bidder)}</div>`;
	buf += `<div class="${timeLeft <= 5 ? 'message-error' : ''}"><i class="fa fa-hourglass-half"></i> ${timeLeft} s</div>`;
	buf += `<div><small>Surenchérir : <code>/mise</code> (+${money(data.increment)}) ou <code>/mise montant</code>, ` +
		`ou tapez simplement le montant.</small></div></div>`;
	return buf;
}

function announceTurn(room: Room) {
	if (!data.started) return;
	if (!availablePlayers().length) return finish(room, `Tous les joueurs ont trouvé une équipe.`);
	if (!data.teams.some(canBuy)) return finish(room, `Plus aucun capitaine ne peut acheter de joueur.`);
	// Prochain capitaine qui peut encore acheter.
	for (let i = 0; i < data.teams.length && !canBuy(data.teams[data.turn % data.teams.length]); i++) {
		data.turn = (data.turn + 1) % data.teams.length;
	}
	data.turn %= data.teams.length;
	save();
	const team = data.teams[data.turn];
	showTable(room);
	send(room, `<div class="broadcast-blue">C'est au tour de ${teamLabel(team)} de proposer un joueur ` +
	`(<code>/proposer pseudo</code>).</div>`);
	Users.getExact(team.captain)?.sendTo(room, `|notify|Enchères|À toi de proposer un joueur !`);
}

function finish(room: Room, reason: string) {
	data.started = false;
	save();
	showTable(room);
	send(room, `<div class="broadcast-green"><strong>Enchères terminées.</strong> ${Utils.escapeHTML(reason)}</div>`);
}

function nextTurn(room: Room) {
	if (data.teams.length) data.turn = (data.turn + 1) % data.teams.length;
	announceTurn(room);
}

function stopLot() {
	if (!lot) return null;
	clearInterval(lot.interval);
	const stopped = lot;
	lot = null;
	return stopped;
}

function tick(room: Room) {
	if (!lot) return;
	lot.timeLeft--;
	if (lot.timeLeft > 0) {
		room.add(`|uhtmlchange|encheres-lot|${lotHTML()}`).update();
		return;
	}
	const { player, bid, bidder } = stopLot()!;
	room.add(`|uhtmlchange|encheres-lot|`);
	player.team = bidder.captain;
	player.price = bid;
	save();
	send(room, `<div class="broadcast-green">` + Utils.html`<strong>${player.name}</strong> rejoint ` +
	`${teamLabel(bidder)} pour <strong>${money(bid)}</strong> !</div>`);
	nextTurn(room);
}

function startLot(room: Room, player: AuctionPlayer, team: AuctionTeam) {
	lot = {
		player, bid: data.startingBid, bidder: team, timeLeft: data.timer,
		interval: setInterval(() => tick(room), 1000),
	};
	send(room, `<div class="broadcast-blue">${teamLabel(team)} propose ` +
	Utils.html`<strong>${player.name}</strong>, mise de départ ${money(data.startingBid)}.</div>`);
	room.add(`|uhtml|encheres-lot|${lotHTML()}`).update();
	for (const other of data.teams) {
		if (other !== team) Users.getExact(other.captain)?.sendTo(room, Utils.html`|notify|Enchères|${player.name} est en vente !`);
	}
}

function placeBid(room: Room, user: User, amount: number | null) {
	if (!lot) throw new Chat.ErrorMessage(`Aucun joueur n'est en vente pour l'instant.`);
	const team = data.teams.find(t => t.captain === user.id);
	if (!team) throw new Chat.ErrorMessage(`Seuls les capitaines peuvent miser.`);
	if (lot.bidder === team) throw new Chat.ErrorMessage(`Ton équipe a déjà la meilleure offre.`);
	if (isFull(team)) throw new Chat.ErrorMessage(`Ton équipe est complète.`);
	const bid = amount ?? lot.bid + data.increment;
	if (bid < lot.bid + data.increment) {
		throw new Chat.ErrorMessage(`La mise doit être d'au moins ${money(lot.bid + data.increment)}.`);
	}
	if (bid > maxBid(team)) {
		throw new Chat.ErrorMessage(`Tu peux miser au plus ${money(maxBid(team))}` +
			`${data.maxPlayers ? ` (il faut garder de quoi compléter ton équipe)` : ''}.`);
	}
	lot.bid = bid;
	lot.bidder = team;
	// Chaque mise relance le chrono.
	lot.timeLeft = data.timer;
	room.add(`|uhtmlchange|encheres-lot|${lotHTML()}`).update();
}

function checkInRoom(context: Chat.CommandContext) {
	const room = context.requireRoom();
	const target = auctionRoom();
	if (!target || room.roomid !== target.roomid) {
		throw new Chat.ErrorMessage(`Les commandes d'enchères s'utilisent dans le salon Enchère.`);
	}
	return room;
}

function checkAdmin(context: Chat.CommandContext) {
	const room = checkInRoom(context);
	context.checkCan('editroom', null, room);
	return room;
}

function checkSetup(what: string) {
	if (lot) throw new Chat.ErrorMessage(`Impossible de ${what} pendant une vente (/enchere annuler pour l'arrêter).`);
}

function names(target: string) {
	return target.split(',').map(name => name.trim()).filter(name => toID(name));
}

/** Donne (ou retire) le rang Capitaine dans le salon, sans toucher aux rangs plus élevés. */
function setCaptainRank(room: Room, userid: ID, give: boolean) {
	const current = room.auth.getDirect(userid);
	if (give) {
		if (!Users.Auth.atLeast(current, CAPTAIN_SYMBOL)) room.auth.set(userid, CAPTAIN_SYMBOL);
	} else if (current === CAPTAIN_SYMBOL) {
		room.auth.delete(userid);
		const user = Users.get(userid);
		if (user) room.onUpdateIdentity(user);
	}
}

export const commands: Chat.ChatCommands = {
	encheres: 'enchere',
	enchre: 'enchere',
	enchere: {
		''(target, room, user) {
			this.parse('/help enchere');
		},

		// --- Capitaines et équipes ---
		capitaine(target, room, user) {
			room = checkAdmin(this);
			const [name, teamName] = target.split(',').map(part => part.trim());
			const id = toID(name);
			if (!id || id.length > 18) return this.parse('/help enchere');
			if (data.teams.some(t => t.captain === id)) {
				throw new Chat.ErrorMessage(`${name} est déjà capitaine (/enchere equipe pour renommer son équipe).`);
			}
			checkSetup('ajouter un capitaine');
			const captainName = Users.getExact(id)?.name || name;
			const team: AuctionTeam = { captain: id, captainName, name: teamName || `Équipe ${captainName}`, bonus: 0 };
			if (team.name.length > 40) throw new Chat.ErrorMessage(`Le nom d'équipe doit faire 40 caractères au plus.`);
			data.teams.push(team);
			save();
			setCaptainRank(room, id, true);
			this.addModAction(`${captainName} devient Capitaine de l'équipe « ${team.name} » (par ${user.name}).`);
			this.modlog('ENCHERE CAPITAINE', id, team.name);
		},
		retirercapitaine(target, room, user) {
			room = checkAdmin(this);
			if (!target) return this.parse('/help enchere');
			checkSetup('retirer un capitaine');
			const team = findTeam(target);
			for (const player of teamPlayers(team)) {
				delete player.team;
				delete player.price;
			}
			data.teams.splice(data.teams.indexOf(team), 1);
			if (data.turn >= data.teams.length) data.turn = 0;
			save();
			setCaptainRank(room, team.captain, false);
			this.addModAction(`${team.captainName} n'est plus Capitaine ; ses joueurs retournent dans la liste (par ${user.name}).`);
			this.modlog('ENCHERE RETIRERCAPITAINE', team.captain);
		},
		renommer: 'equipe',
		equipe(target, room, user) {
			room = checkAdmin(this);
			const [name, teamName] = target.split(',').map(part => part.trim());
			if (!name || !teamName) return this.parse('/help enchere');
			if (teamName.length > 40) throw new Chat.ErrorMessage(`Le nom d'équipe doit faire 40 caractères au plus.`);
			const team = findTeam(name);
			team.name = teamName;
			save();
			this.addModAction(`L'équipe de ${team.captainName} s'appelle maintenant « ${teamName} » (par ${user.name}).`);
		},
		ordre(target, room, user) {
			room = checkAdmin(this);
			checkSetup(`changer l'ordre`);
			const list = names(target);
			if (!list.length) return this.parse('/help enchere');
			const ordered = list.map(findTeam);
			if (new Set(ordered).size !== ordered.length) throw new Chat.ErrorMessage(`Un capitaine est cité deux fois.`);
			data.teams = [...ordered, ...data.teams.filter(t => !ordered.includes(t))];
			data.turn = 0;
			save();
			this.addModAction(`Ordre de passage : ${data.teams.map(t => t.captainName).join(', ')} (par ${user.name}).`);
		},
		melanger(target, room, user) {
			room = checkAdmin(this);
			checkSetup(`changer l'ordre`);
			data.teams = Utils.shuffle(data.teams);
			data.turn = 0;
			save();
			this.addModAction(`Ordre de passage tiré au sort : ${data.teams.map(t => t.captainName).join(', ')} (par ${user.name}).`);
		},

		// --- Joueurs ---
		ajouter(target, room, user) {
			room = checkAdmin(this);
			const list = names(target);
			if (!list.length) return this.parse('/help enchere');
			const added = [];
			for (const name of list) {
				if (name.length > 25) throw new Chat.ErrorMessage(`Pseudo trop long : ${name}`);
				if (data.players.some(p => p.id === toID(name))) continue;
				data.players.push({ id: toID(name), name });
				added.push(name);
			}
			if (!added.length) throw new Chat.ErrorMessage(`Ces joueurs sont déjà dans la liste.`);
			save();
			this.addModAction(`${user.name} ajoute ${added.length} joueur${Chat.plural(added)} : ${added.join(', ')}.`);
		},
		supprimer: 'retirer',
		retirer(target, room, user) {
			room = checkAdmin(this);
			const list = names(target);
			if (!list.length) return this.parse('/help enchere');
			const players = list.map(findPlayer);
			if (lot && players.includes(lot.player)) throw new Chat.ErrorMessage(`${lot.player.name} est en vente.`);
			data.players = data.players.filter(p => !players.includes(p));
			save();
			this.addModAction(`${user.name} retire de la liste : ${players.map(p => p.name).join(', ')}.`);
		},
		note(target, room, user) {
			room = checkAdmin(this);
			const [name, ...rest] = target.split(',');
			if (!toID(name)) return this.parse('/help enchere');
			const player = findPlayer(name);
			const note = rest.join(',').trim();
			if (note.length > 100) throw new Chat.ErrorMessage(`La note doit faire 100 caractères au plus.`);
			if (note) player.note = note;
			else delete player.note;
			save();
			this.sendReply(note ? `Note de ${player.name} : ${note}` : `Note de ${player.name} effacée.`);
		},
		attribuer(target, room, user) {
			room = checkAdmin(this);
			checkSetup('attribuer un joueur');
			const [name, captain, price] = target.split(',').map(part => part.trim());
			if (!name || !captain) return this.parse('/help enchere');
			let player = data.players.find(p => p.id === toID(name));
			if (!player) {
				player = { id: toID(name), name };
				data.players.push(player);
			}
			const team = findTeam(captain);
			player.team = team.captain;
			player.price = price ? requireAmount(price, 'Prix') : 0;
			save();
			this.addModAction(`${player.name} est placé dans l'équipe « ${team.name} » pour ${money(player.price)} (par ${user.name}).`);
			showTable(room);
		},
		liberer(target, room, user) {
			room = checkAdmin(this);
			checkSetup('libérer un joueur');
			if (!target) return this.parse('/help enchere');
			const player = findPlayer(target);
			if (!player.team) throw new Chat.ErrorMessage(`${player.name} n'a pas d'équipe.`);
			const team = data.teams.find(t => t.captain === player.team);
			delete player.team;
			delete player.price;
			save();
			this.addModAction(`${player.name} retourne dans la liste ; ${team ? `l'équipe « ${team.name} » est remboursée` : `il est libre`} (par ${user.name}).`);
			showTable(room);
		},
		vider(target, room, user) {
			room = checkAdmin(this);
			checkSetup('vider la liste');
			if (toID(target) !== 'confirmer') {
				return this.sendReplyBox(`Retirer les ${data.players.length} joueurs de la liste, y compris ceux déjà achetés ? ` +
					`<button class="button" name="send" value="/enchere vider confirmer">Confirmer</button>`);
			}
			data.players = [];
			save();
			this.addModAction(`${user.name} a vidé la liste des joueurs.`);
		},
		liste: 'joueurs',
		joueurs(target, room, user) {
			checkInRoom(this);
			if (!this.runBroadcast()) return;
			if (!data.players.length) return this.sendReplyBox(`La liste des joueurs est vide.`);
			const rows = Utils.sortBy(data.players.slice(), p => [p.team ? 1 : 0, p.name.toLowerCase()]).map(p => {
				const team = p.team && data.teams.find(t => t.captain === p.team);
				return Utils.html`<tr><td><username>${p.name}</username></td><td>${p.note || ''}</td>` +
					`<td>${team ? `${Utils.escapeHTML(team.name)} (${money(p.price || 0)})` : '<em>disponible</em>'}</td></tr>`;
			});
			this.sendReplyBox(`<div class="ladder"><table><tr><th>Joueur</th><th>Note</th><th>Équipe</th></tr>` +
				`${rows.join('')}</table></div>`);
		},

		// --- Argent et réglages ---
		budget(target, room, user) {
			room = checkAdmin(this);
			if (!target) return this.parse('/help enchere');
			checkSetup('changer le budget');
			data.budget = requireAmount(target, 'Budget');
			save();
			this.addModAction(`Budget de départ des capitaines : ${money(data.budget)} (par ${user.name}).`);
		},
		misedepart(target, room, user) {
			room = checkAdmin(this);
			if (!target) return this.parse('/help enchere');
			checkSetup('changer la mise de départ');
			data.startingBid = requireAmount(target, 'Mise de départ');
			save();
			this.addModAction(`Mise de départ : ${money(data.startingBid)} (par ${user.name}).`);
		},
		palier(target, room, user) {
			room = checkAdmin(this);
			const amount = requireAmount(target, 'Palier');
			if (!amount) throw new Chat.ErrorMessage(`Le palier doit être supérieur à 0.`);
			data.increment = amount;
			save();
			this.addModAction(`Écart minimum entre deux mises : ${money(amount)} (par ${user.name}).`);
		},
		chrono(target, room, user) {
			room = checkAdmin(this);
			const seconds = parseInt(target);
			if (!seconds || seconds < 5 || seconds > 120) throw new Chat.ErrorMessage(`Le chrono doit être entre 5 et 120 secondes.`);
			data.timer = seconds;
			save();
			this.addModAction(`Chrono des ventes : ${seconds} secondes (par ${user.name}).`);
		},
		taille: 'tailleequipe',
		tailleequipe(target, room, user) {
			room = checkAdmin(this);
			const amount = parseInt(target);
			if (isNaN(amount) || amount < 0 || amount > 50) throw new Chat.ErrorMessage(`Indique un nombre de joueurs entre 1 et 50, ou 0 pour ne pas limiter.`);
			checkSetup('changer la taille des équipes');
			data.maxPlayers = amount;
			save();
			this.addModAction(amount ? `Équipes limitées à ${amount} joueurs (par ${user.name}).` : `Taille des équipes illimitée (par ${user.name}).`);
		},
		argent(target, room, user) {
			room = checkAdmin(this);
			const [name, amountText] = target.split(',').map(part => part.trim());
			if (!name || !amountText) return this.parse('/help enchere');
			checkSetup(`modifier l'argent d'un capitaine`);
			const team = findTeam(name);
			const amount = parseAmount(amountText);
			if (amount === null || !amount) throw new Chat.ErrorMessage(`« ${amountText} » n'est pas un montant valide (ex. +5000 ou -2k).`);
			if (credits(team) + amount < 0) throw new Chat.ErrorMessage(`${team.captainName} n'a que ${money(credits(team))}.`);
			team.bonus += amount;
			save();
			this.addModAction(`${amount > 0 ? `${money(amount)} ajoutés à` : `${money(-amount)} retirés à`} ` +
				`${team.captainName}, qui a maintenant ${money(credits(team))} (par ${user.name}).`);
		},
		reglages(target, room, user) {
			checkInRoom(this);
			if (!this.runBroadcast()) return;
			this.sendReplyBox(`Budget de départ : <strong>${money(data.budget)}</strong><br />` +
				`Mise de départ : <strong>${money(data.startingBid)}</strong><br />` +
				`Écart minimum entre deux mises : <strong>${money(data.increment)}</strong><br />` +
				`Chrono : <strong>${data.timer} s</strong><br />` +
				`Joueurs par équipe : <strong>${data.maxPlayers || 'illimité'}</strong><br />` +
				`Ordre de passage : ${Utils.escapeHTML(data.teams.map(t => t.captainName).join(', ') || 'aucun capitaine')}`);
		},

		// --- Déroulé ---
		tableau(target, room, user) {
			checkInRoom(this);
			if (!this.runBroadcast()) return;
			this.sendReply(`|html|${teamsTable()}`);
		},
		lancer: 'demarrer',
		demarrer(target, room, user) {
			room = checkAdmin(this);
			if (data.started) throw new Chat.ErrorMessage(`Les enchères sont déjà lancées.`);
			if (data.teams.length < 2) throw new Chat.ErrorMessage(`Il faut au moins 2 capitaines.`);
			if (!availablePlayers().length) throw new Chat.ErrorMessage(`Aucun joueur disponible dans la liste.`);
			data.started = true;
			if (data.turn >= data.teams.length) data.turn = 0;
			save();
			this.addModAction(`${user.name} lance les enchères !`);
			announceTurn(room);
		},
		arreter(target, room, user) {
			room = checkAdmin(this);
			if (!data.started && !lot) throw new Chat.ErrorMessage(`Les enchères ne sont pas lancées.`);
			const stopped = stopLot();
			if (stopped) room.add(`|uhtmlchange|encheres-lot|`);
			data.started = false;
			save();
			this.addModAction(`${user.name} met les enchères en pause${stopped ? ` (la vente de ${stopped.player.name} est annulée)` : ''}. ` +
				`/enchere demarrer pour reprendre.`);
		},
		annuler(target, room, user) {
			room = checkAdmin(this);
			const stopped = stopLot();
			if (!stopped) throw new Chat.ErrorMessage(`Aucune vente en cours.`);
			room.add(`|uhtmlchange|encheres-lot|`);
			this.addModAction(`${user.name} annule la vente de ${stopped.player.name}, qui reste dans la liste.`);
			announceTurn(room);
		},
		passer(target, room, user) {
			room = checkAdmin(this);
			if (!data.started) throw new Chat.ErrorMessage(`Les enchères ne sont pas lancées.`);
			checkSetup('passer un tour');
			this.addModAction(`${user.name} passe le tour de ${data.teams[data.turn]?.captainName}.`);
			nextTurn(room);
		},
		nominer: 'proposer',
		proposer(target, room, user) {
			room = checkInRoom(this);
			if (!target) return this.parse('/help enchere');
			if (!data.started) throw new Chat.ErrorMessage(`Les enchères ne sont pas lancées.`);
			if (lot) throw new Chat.ErrorMessage(`${lot.player.name} est déjà en vente.`);
			const team = data.teams[data.turn];
			if (!team) throw new Chat.ErrorMessage(`Aucun capitaine.`);
			if (team.captain !== user.id && !user.can('editroom', null, room)) {
				throw new Chat.ErrorMessage(`C'est au tour de ${team.captainName} de proposer un joueur.`);
			}
			const player = findPlayer(target);
			if (player.team) throw new Chat.ErrorMessage(`${player.name} a déjà une équipe.`);
			startLot(room, player, team);
		},
		bid: 'miser',
		miser(target, room, user) {
			room = checkInRoom(this);
			let amount = null;
			if (target.trim()) {
				amount = parseAmount(target);
				if (amount === null || amount <= 0) throw new Chat.ErrorMessage(`« ${target} » n'est pas un montant valide (ex. 5000 ou 5k).`);
			}
			placeBid(room, user, amount);
		},
		reinitialiser(target, room, user) {
			room = checkAdmin(this);
			checkSetup('tout réinitialiser');
			const everything = toID(target).startsWith('tout');
			if (!toID(target).endsWith('confirmer')) {
				return this.sendReplyBox(
					`<button class="button" name="send" value="/enchere reinitialiser confirmer">Recommencer les enchères</button> ` +
					`: les joueurs achetés retournent dans la liste et chaque capitaine retrouve son budget.<br /><br />` +
					`<button class="button" name="send" value="/enchere reinitialiser tout confirmer">Tout effacer</button> ` +
					`: retire aussi tous les capitaines et tous les joueurs.`
				);
			}
			if (everything) {
				for (const team of data.teams) setCaptainRank(room, team.captain, false);
				data.teams = [];
				data.players = [];
			} else {
				for (const team of data.teams) team.bonus = 0;
				for (const player of data.players) {
					delete player.team;
					delete player.price;
				}
			}
			data.turn = 0;
			data.started = false;
			save();
			this.addModAction(everything ? `${user.name} a tout effacé (capitaines et joueurs).` :
				`${user.name} a réinitialisé les enchères : tous les joueurs sont de nouveau disponibles.`);
		},
	},
	enchereaide: 'encherehelp',
	encherehelp() {
		if (!this.runBroadcast()) return;
		this.sendReplyBox(
			`<strong>Enchères du salon Enchère</strong><br />` +
			`<code>/proposer pseudo</code> : à ton tour, met un joueur de la liste en vente (tu es le premier enchérisseur).<br />` +
			`<code>/mise</code> ou <code>/mise montant</code> : surenchérit (sans montant : +palier). Taper juste un montant (ex. <code>12k</code>) marche aussi.<br />` +
			`<code>/enchere tableau</code>, <code>/enchere joueurs</code>, <code>/enchere reglages</code> : affichent l'état des enchères.<br />` +
			`<details class="readmore"><summary>Commandes de l'admin</summary>` +
			`<code>/enchere capitaine pseudo, nom d'équipe</code> : nomme un capitaine (rang ♛ Capitaine dans le salon).<br />` +
			`<code>/enchere retirercapitaine pseudo</code> : retire un capitaine, ses joueurs retournent dans la liste.<br />` +
			`<code>/enchere equipe capitaine, nom</code> : renomme l'équipe d'un capitaine.<br />` +
			`<code>/enchere ordre capitaine1, capitaine2…</code> ou <code>/enchere melanger</code> : ordre de passage.<br />` +
			`<code>/enchere ajouter pseudo1, pseudo2…</code> / <code>/enchere retirer pseudo1, pseudo2…</code> : liste des joueurs.<br />` +
			`<code>/enchere note pseudo, texte</code> : précision affichée à côté du joueur (formats joués…).<br />` +
			`<code>/enchere attribuer joueur, capitaine, prix</code> / <code>/enchere liberer joueur</code> : placer ou retirer un joueur à la main.<br />` +
			`<code>/enchere vider</code> : vide la liste des joueurs.<br />` +
			`<code>/enchere budget montant</code> : argent de départ de chaque capitaine.<br />` +
			`<code>/enchere misedepart montant</code> : mise de départ d'un joueur proposé.<br />` +
			`<code>/enchere palier montant</code> : écart minimum entre deux mises.<br />` +
			`<code>/enchere chrono secondes</code> : temps sans nouvelle mise avant la vente.<br />` +
			`<code>/enchere tailleequipe nombre</code> : joueurs maximum par équipe (0 : illimité).<br />` +
			`<code>/enchere argent capitaine, +5000</code> (ou <code>-5000</code>) : ajoute ou retire de l'argent.<br />` +
			`<code>/enchere demarrer</code>, <code>/enchere arreter</code> : lance ou met en pause les enchères.<br />` +
			`<code>/enchere annuler</code> : annule la vente en cours. <code>/enchere passer</code> : passe le tour du capitaine.<br />` +
			`<code>/enchere reinitialiser</code> : recommence les enchères, ou efface tout.` +
			`</details>`
		);
	},
	proposer(target) {
		this.parse(`/enchere proposer ${target}`);
	},
	mise(target) {
		this.parse(`/enchere miser ${target}`);
	},
};

/** Un capitaine peut miser en tapant juste un montant (« 12000 », « 12k ») pendant une vente. */
export const chatfilter: Chat.ChatFilter = function (message, user, room) {
	if (!lot || !room || room.roomid !== auctionRoom()?.roomid) return;
	if (!data.teams.some(t => t.captain === user.id)) return;
	const amount = /^\.?\d[\d\s.,]*k?$/i.test(message.trim()) ? parseAmount(message.trim().replace(/^\./, '')) : null;
	if (!amount) return;
	try {
		placeBid(room, user, amount);
	} catch (e: any) {
		if (!e.name?.endsWith('ErrorMessage')) throw e;
		this.errorReply(e.message);
		return false;
	}
};
