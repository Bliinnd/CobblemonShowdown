'use strict';
/**
 * Réglages du site, lus dans les variables d'environnement (à remplir dans
 * Plesk, rubrique Node.js) ou dans un fichier `.env` à la racine du dépôt.
 * Voir `.env.example` pour la liste complète.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function readDotEnv() {
	const file = path.join(ROOT, '.env');
	const values = {};
	if (!fs.existsSync(file)) return values;
	for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
		const match = /^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/.exec(line);
		if (!match || line.trim().startsWith('#')) continue;
		values[match[1]] = match[2].replace(/^(['"])(.*)\1$/, '$2');
	}
	return values;
}

function loadSettings() {
	const env = { ...readDotEnv(), ...process.env };
	const siteHost = (env.SITE_HOST || 'localhost').trim().toLowerCase();
	const hostname = siteHost.split(':')[0];
	const dataDir = path.resolve(ROOT, env.DATA_DIR || 'data');
	// Sans réglage ADMINS, Bliinnd (le propriétaire du site) est administrateur.
	const adminNames = (env.ADMINS ?? 'Bliinnd').split(',').map(name => name.trim()).filter(name => /[a-z0-9]/i.test(name));
	return {
		root: ROOT,
		dataDir,
		/** Adresse publique du site, sans https:// (ex. cobblemonshowdown.fr). */
		siteHost,
		/** Domaine des cookies de connexion (vide pour localhost). */
		cookieDomain: hostname === 'localhost' || /^[0-9.]+$/.test(hostname) ? '' : hostname,
		/** Port sur lequel le site écoute (Plesk le fournit automatiquement). */
		port: Number(env.PORT) || 8080,
		/** Ports internes du serveur de combat et du serveur de comptes. */
		simPort: Number(env.SIM_PORT) || 8000,
		loginPort: Number(env.LOGIN_PORT) || 9000,
		serverId: env.SERVER_ID || 'cobblemon',
		db: {
			host: env.DB_HOST || 'localhost',
			port: Number(env.DB_PORT) || 3306,
			database: env.DB_NAME || 'cobblemon',
			user: env.DB_USER || 'cobblemon',
			password: env.DB_PASSWORD || '',
		},
		/** Pseudos (séparés par des virgules) qui reçoivent le rang Administrateur (~) une fois inscrits. */
		adminNames,
		/** Développement uniquement : sert le site en HTTPS avec un certificat auto-signé. */
		devHttps: env.DEV_HTTPS === '1',
	};
}

module.exports = { loadSettings, ROOT };
