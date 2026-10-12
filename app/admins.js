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

async function findRegisteredAccounts(settings, userids) {
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
			'SELECT userid, username, registertime, ip FROM ntbb_users WHERE userid IN (?) AND banstate < 100', [userids]
		);
		const accounts = new Map();
		for (const row of rows) {
			accounts.set(String(row.userid), {
				username: String(row.username),
				registered: Number(row.registertime) > 0 ? new Date(Number(row.registertime) * 1000).toISOString() : '?',
				ip: String(row.ip || '?'),
			});
		}
		return accounts;
	} finally {
		await connection.end();
	}
}

async function seedAdmins(settings) {
	const doneFile = path.join(settings.dataDir, 'admins-promus.json');
	const done = new Set(readJSON(doneFile, []));
	const pending = settings.adminNames.filter(name => !done.has(toID(name)));
	if (!pending.length) return;

	const registered = await findRegisteredAccounts(settings, pending.map(toID));
	const groupsFile = path.join(settings.root, 'server/config/usergroups.csv');
	const lines = fs.existsSync(groupsFile) ? fs.readFileSync(groupsFile, 'utf8').split('\n').filter(Boolean) : [];
	const ranked = new Set(lines.map(line => toID(line.split(',')[0])));
	let changed = false;
	for (const name of pending) {
		const userid = toID(name);
		const account = registered.get(userid);
		if (!account) {
			console.log(`Administrateurs : « ${name} » n'est pas encore inscrit. Inscrivez ce pseudo sur le site, ` +
				`puis redémarrez l'application pour lui donner le rang Administrateur.`);
			continue;
		}
		if (!ranked.has(userid)) {
			// Le fichier est un CSV lu par le serveur : pas de virgule ni de retour à la ligne dans le nom.
			const cleanName = account.username.replace(/[,|\r\n]/g, '').trim();
			const username = toID(cleanName) === userid ? cleanName : userid;
			lines.push(`${username},${ADMIN_SYMBOL},`);
			ranked.add(userid);
			changed = true;
			// Inscription et adresse IP du compte, pour vérifier que c'est bien le bon.
			const message = `Administrateurs : « ${username} » est maintenant Administrateur (~) ` +
				`(compte inscrit le ${account.registered}, adresse IP ${account.ip}).`;
			console.log(message);
			const logs = path.join(settings.dataDir, 'logs');
			fs.mkdirSync(logs, { recursive: true });
			fs.appendFileSync(path.join(logs, 'admins.log'), `${new Date().toISOString()} ${message}\n`);
		}
		done.add(userid);
	}
	if (changed) writeAtomic(groupsFile, lines.join('\n') + '\n');
	fs.mkdirSync(settings.dataDir, { recursive: true });
	writeAtomic(doneFile, JSON.stringify([...done]));
}

module.exports = { seedAdmins };
