'use strict';
/**
 * Salons du chat : s'assure que le salon officiel « Discussion » existe et que
 * tout le monde le rejoint automatiquement, comme le Lobby de Pokémon Showdown,
 * et crée les autres salons officiels (« Enchère ») s'ils n'existent pas encore.
 *
 * Le serveur de combat garde la liste des salons dans server/config/chatrooms.json
 * et la réécrit lui-même : ce fichier n'est modifié ici qu'avant son démarrage.
 */
const fs = require('fs');
const path = require('path');

const MAIN_ROOM = 'Discussion';
const MAIN_ROOM_DESC = 'Le salon de discussion de CobblemonShowdown';
/**
 * Autres salons officiels, créés au démarrage s'ils n'existent pas (un administrateur peut
 * ensuite les modifier ; un salon supprimé revient tant qu'il est dans cette liste).
 * Les identifiants de salon perdent les accents (« Enchère » → enchre) : les alias gardent
 * une adresse lisible (/enchere).
 */
const OFFICIAL_ROOMS = [
	// Seuls les Capitaines (♛) et le staff y parlent ; tout le monde peut suivre les enchères.
	{ title: 'Enchère', desc: 'Les enchères de CobblemonShowdown', aliases: ['enchere', 'encheres'], modchat: '♛' },
];

function toID(text) {
	return String(text || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
}

/** Même mise en forme que le serveur de combat (une ligne par salon). */
function formatRooms(rooms) {
	return JSON.stringify(rooms).replace(/\{"title":/g, '\n{"title":').replace(/\]$/, '\n]');
}

function ensureChatRooms(settings) {
	const file = path.join(settings.root, 'server/config/chatrooms.json');
	let rooms = [];
	let original = '';
	if (fs.existsSync(file)) {
		original = fs.readFileSync(file, 'utf8');
		try {
			rooms = JSON.parse(original || '[]');
		} catch {
			console.error(`Salons : ${file} est illisible, il n'a pas été modifié.`);
			return;
		}
		if (!Array.isArray(rooms)) {
			console.error(`Salons : ${file} n'a pas le format attendu, il n'a pas été modifié.`);
			return;
		}
	}
	if (!rooms.length) {
		// Salon réservé à l'équipe de modération, créé par défaut par Pokémon Showdown.
		rooms.push({ title: 'Staff', auth: {}, creationTime: Date.now(), isPrivate: 'hidden', modjoin: '%', autojoin: true });
	}

	const mainID = toID(MAIN_ROOM);
	let room = rooms.find(entry => toID(entry.title) === mainID) ||
		rooms.find(entry => Array.isArray(entry.aliases) && entry.aliases.map(toID).includes(mainID));
	if (!room) {
		// Les sites déjà installés avaient le Lobby de Showdown : il devient Discussion, en gardant
		// ses modérateurs et sa présentation (les bannissements du Lobby ne sont pas repris).
		room = rooms.find(entry => toID(entry.title) === 'lobby');
		if (room) {
			room.title = MAIN_ROOM;
		} else {
			room = { title: MAIN_ROOM, auth: {}, creationTime: Date.now() };
			rooms.unshift(room);
		}
		room.desc = MAIN_ROOM_DESC;
		room.section = 'official';
		room.language = 'french';
		// Les anciens liens et favoris vers /lobby mènent à Discussion.
		const lobbyTaken = rooms.some(entry => toID(entry.title) === 'lobby' ||
			(entry !== room && Array.isArray(entry.aliases) && entry.aliases.map(toID).includes('lobby')));
		if (!lobbyTaken) {
			room.aliases = [...new Set([...(room.aliases || []), 'lobby'])];
		}
	}
	// Aucune commande du chat ne permet de régler ce point : c'est lui qui fait
	// rejoindre le salon à chaque visiteur.
	room.autojoin = true;

	for (const official of OFFICIAL_ROOMS) {
		const ids = [official.title, ...official.aliases].map(toID);
		const existing = rooms.find(entry => ids.includes(toID(entry.title)) ||
			(Array.isArray(entry.aliases) && entry.aliases.map(toID).some(alias => ids.includes(alias))));
		if (existing) {
			// Salon créé avant ce réglage : on l'applique une fois (un /modchat off ensuite est respecté).
			if (official.modchat && !('modchat' in existing)) existing.modchat = official.modchat;
			continue;
		}
		rooms.push({
			title: official.title, auth: {}, creationTime: Date.now(), desc: official.desc,
			section: 'official', language: 'french', aliases: official.aliases, modchat: official.modchat || null,
		});
		console.log(`Salons : « ${official.title} » est créé.`);
	}

	const content = formatRooms(rooms);
	if (content === original) return;
	const tmp = `${file}.NEW`;
	fs.writeFileSync(tmp, content);
	fs.renameSync(tmp, file);
	console.log(`Salons : « ${MAIN_ROOM} » est prêt (${file}).`);
}

module.exports = { ensureChatRooms, toID };
