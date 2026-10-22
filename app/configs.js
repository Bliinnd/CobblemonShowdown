'use strict';
/**
 * Écrit les fichiers de configuration du serveur de combat (server/) et du
 * serveur de comptes (loginserver/) à partir des réglages. Ces fichiers sont
 * régénérés à chaque démarrage : ne pas les modifier à la main.
 */
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const HEADER = `// Fichier généré par app/configs.js au démarrage du site. Ne pas modifier à la main.\n\n`;

function js(value) {
	return JSON.stringify(value, null, '\t');
}

/** Identifiant de clé partagé entre le serveur de comptes et le serveur de combat. */
const LOGIN_KEY_ID = 1;

function writeServerConfig(settings, keys) {
	const file = path.join(settings.root, 'server/config/config.js');
	fs.writeFileSync(file, HEADER + [
		`exports.port = ${settings.simPort};`,
		`exports.bindaddress = '127.0.0.1';`,
		// Toutes les connexions passent par le site (app/front.js), qui transmet l'IP du joueur.
		`exports.proxyip = ['127.0.0.0/8', '::1'];`,
		`exports.serverid = ${js(settings.serverId)};`,
		`exports.loginserver = 'http://127.0.0.1:${settings.loginPort}/';`,
		`exports.loginserverkeyalgo = 'RSA-SHA1';`,
		`exports.loginserverpublickeyid = ${LOGIN_KEY_ID};`,
		`exports.loginserverpublickey = ${js(keys.publicKey)};`,
		// Identifie le serveur de combat auprès du serveur de comptes (envoi des replays).
		`exports.servertoken = ${js(keys.serverToken)};`,
		`exports.routes = ${js({
			root: settings.siteHost,
			client: settings.siteHost,
			dex: 'dex.pokemonshowdown.com',
			replays: settings.siteHost,
		})};`,
		// Pas d'accès « système » : les administrateurs ont le rang ~ (voir app/admins.js).
		`exports.backdoor = false;`,
		`exports.repl = false;`,
		// Les commandes qui exécutent du code sur le serveur (>>, /eval, /bash...) sont
		// désactivées : derrière Plesk, tous les joueurs peuvent sembler venir de 127.0.0.1.
		`exports.consoleips = [];`,
		`exports.crashguardemail = null;`,
		// Pas d'annonce « combat lancé » dans le salon Discussion.
		`exports.reportbattles = false;`,
		// Liste d'amis de Showdown (base SQLite intégrée à Node, server/databases/friends.db).
		`exports.usesqlitefriends = 'unlocked';`,
		// Site en français : langue des salons sans langue choisie (salons de combat...).
		`exports.defaultlanguage = 'french';`,
		// Ladder : deux joueurs de la même adresse IP peuvent être opposés (même foyer, ou Plesk
		// qui peut faire paraître tous les joueurs sur la même adresse).
		`exports.ladderallowsameip = true;`,
		'',
	].join('\n'));
}

function writeLoginServerConfig(settings, keys) {
	const file = path.join(settings.root, 'loginserver/config/config.cjs');
	const dbConfig = {
		driver: 'mysql',
		host: settings.db.host,
		port: settings.db.port,
		user: settings.db.user,
		password: settings.db.password,
		database: settings.db.database,
		charset: 'utf8mb4',
		prefix: 'ntbb_',
	};
	fs.mkdirSync(path.join(settings.dataDir, 'customcss'), { recursive: true });
	fs.writeFileSync(file, HEADER + [
		`exports.logindb = ${js(dbConfig)};`,
		// Replays dans la même base MySQL, tables sans préfixe (replays, replayplayers).
		`exports.replaysdb = ${js({ ...dbConfig, prefix: '' })};`,
		// Le serveur de combat, reconnu grâce à son jeton (voir app/keys.js).
		`exports.mainservertoken = ${js(crypto.createHash('md5').update(keys.serverToken).digest('hex'))};`,
		`exports.ladderdb = null;`,
		`exports.friendsdb = null;`,
		`exports.routes = ${js({ root: settings.cookieDomain })};`,
		`exports.mainserver = ${js(settings.serverId)};`,
		`exports.serverlist = null;`,
		`exports.pspath = ${js(path.join(settings.root, 'server/dist/sim'))};`,
		`exports.cssdir = ${js(path.join(settings.dataDir, 'customcss') + '/')};`,
		`exports.cors = [];`,
		`exports.sysops = [];`,
		`exports.privatekey = ${js(keys.privateKey)};`,
		`exports.challengekeyid = ${LOGIN_KEY_ID};`,
		`exports.port = ${settings.loginPort};`,
		`exports.bindaddress = '127.0.0.1';`,
		`exports.watchconfig = false;`,
		`exports.loadprivaterelayips = false;`,
		'',
	].join('\n'), { mode: 0o600 });
}

/** Configuration du client (servie à l'adresse /config/config.js). */
function clientConfig(settings) {
	const base = fs.readFileSync(path.join(settings.root, 'client/play.pokemonshowdown.com/config/config.js'), 'utf8');
	const [hostname, port] = settings.siteHost.split(':');
	return base + '\n\n// CobblemonShowdown (généré par app/configs.js)\n' + [
		`Config.defaultserver = ${js({
			id: settings.serverId,
			host: hostname,
			port: Number(port) || 443,
			httpport: 80,
			altport: 80,
			registered: true,
		})};`,
		`Config.routes = ${js({
			root: settings.siteHost,
			client: settings.siteHost,
			dex: 'dex.pokemonshowdown.com',
			replays: settings.siteHost,
			users: settings.siteHost + '/users',
			teams: settings.siteHost,
		})};`,
		`Config.customcolors = {};`,
		// Classement affiché, sauf si CLASSEMENT_VISIBLE vaut 0.
		`Config.showLadder = ${js(settings.showLadder)};`,
		'',
	].join('\n');
}

function writeConfigs(settings, keys) {
	writeServerConfig(settings, keys);
	writeLoginServerConfig(settings, keys);
}

module.exports = { writeConfigs, clientConfig };
