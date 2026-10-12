'use strict';
/**
 * Salons du chat : s'assure que le salon officiel « Discussion » existe et que
 * tout le monde le rejoint automatiquement, comme le Lobby de Pokémon Showdown.
 *
 * Le serveur de combat garde la liste des salons dans server/config/chatrooms.json
 * et la réécrit lui-même : ce fichier n'est modifié ici qu'avant son démarrage.
 */
const fs = require('fs');
const path = require('path');

const MAIN_ROOM = 'Discussion';
const MAIN_ROOM_DESC = 'Le salon de discussion de CobblemonShowdown';

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

	let room = rooms.find(entry => toID(entry.title) === toID(MAIN_ROOM));
	if (!room) {
		// Les sites déjà installés avaient le Lobby de Showdown : il devient Discussion,
		// en gardant ses modérateurs, sa présentation et ses bannissements.
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
		if (!rooms.some(entry => toID(entry.title) === 'lobby')) {
			room.aliases = [...new Set([...(room.aliases || []), 'lobby'])];
		}
	}
	// Aucune commande du chat ne permet de régler ce point : c'est lui qui fait
	// rejoindre le salon à chaque visiteur.
	room.autojoin = true;

	const content = formatRooms(rooms);
	if (content === original) return;
	const tmp = `${file}.NEW`;
	fs.writeFileSync(tmp, content);
	fs.renameSync(tmp, file);
	console.log(`Salons : « ${MAIN_ROOM} » est prêt (${file}).`);
}

module.exports = { ensureChatRooms, toID };
