'use strict';
/**
 * Administrateurs du site : donne le rang Administrateur (~) de Pokémon Showdown
 * aux pseudos de la variable ADMINS, dans server/config/usergroups.csv.
 *
 * - Un pseudo n'est promu que s'il est déjà inscrit (sinon n'importe qui
 *   pourrait l'inscrire et devenir administrateur).
 * - Chaque pseudo n'est promu qu'une fois : une rétrogradation faite ensuite
 *   depuis le chat (/globaldemote) est respectée.
 * - Les autres lignes du fichier, écrites par le serveur, ne sont jamais touchées.
 */
const fs = require('fs');
const path = require('path');
const { toID } = require('./rooms');

const ADMIN_SYMBOL = '~';

function readJSON(file, fallback) {
	try {
		return JSON.parse(fs.readFileSync(file, 'utf8'));
	} catch {
		return fallback;
	}
}

function writeAtomic(file, content) {
	const tmp = `${file}.NEW`;
	fs.writeFileSync(tmp, content);
	fs.renameSync(tmp, file);
}

async function findRegisteredNames(settings, userids) {
	const mysql = require(path.join(settings.root, 'loginserver/node_modules/mysql2/promise'));
	const connection = await mysql.createConnection({
		host: settings.db.host,
		port: settings.db.port,
		user: settings.db.user,
		password: settings.db.password,
		database: settings.db.database,
	});
	try {
		const [rows] = await connection.query(
			'SELECT userid, username FROM ntbb_users WHERE userid IN (?) AND banstate < 100', [userids]
		);
		const names = new Map();
		for (const row of rows) names.set(String(row.userid), String(row.username));
		return names;
	} finally {
		await connection.end();
	}
}

async function seedAdmins(settings) {
	const doneFile = path.join(settings.dataDir, 'admins-promus.json');
	const done = new Set(readJSON(doneFile, []));
	const pending = settings.adminNames.filter(name => !done.has(toID(name)));
	if (!pending.length) return;

	const registered = await findRegisteredNames(settings, pending.map(toID));
	const groupsFile = path.join(settings.root, 'server/config/usergroups.csv');
	const lines = fs.existsSync(groupsFile) ? fs.readFileSync(groupsFile, 'utf8').split('\n').filter(Boolean) : [];
	const ranked = new Set(lines.map(line => toID(line.split(',')[0])));
	let changed = false;
	for (const name of pending) {
		const userid = toID(name);
		const username = registered.get(userid);
		if (!username) {
			console.log(`Administrateurs : « ${name} » n'est pas encore inscrit. Inscrivez ce pseudo sur le site, ` +
				`puis redémarrez l'application pour lui donner le rang Administrateur.`);
			continue;
		}
		if (!ranked.has(userid)) {
			lines.push(`${username},${ADMIN_SYMBOL},`);
			changed = true;
			console.log(`Administrateurs : « ${username} » est maintenant Administrateur (~).`);
		}
		done.add(userid);
	}
	if (changed) writeAtomic(groupsFile, lines.join('\n') + '\n');
	fs.mkdirSync(settings.dataDir, { recursive: true });
	writeAtomic(doneFile, JSON.stringify([...done]));
}

module.exports = { seedAdmins };
