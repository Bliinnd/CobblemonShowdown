'use strict';
/**
 * Pages publiques des joueurs, comme pokemonshowdown.com/users/<pseudo> :
 * - /users/                 formulaire de recherche (/users/?user=Pseudo redirige vers la page du joueur)
 * - /users/<pseudo>         rang, date d'inscription et classements du joueur
 * - /users/<pseudo>.json    les mêmes informations en JSON, au format de Pokémon Showdown
 *   (utilisé par la commande /registertime du serveur de combat)
 *
 * Les comptes sont lus dans la base MySQL (table ntbb_users), les rangs dans
 * server/config/usergroups.csv et les classements dans server/config/ladders/.
 * Les données privées (IP, e-mail, mot de passe) ne sont jamais lues.
 */
const fs = require('fs');
const path = require('path');

/** Rangs globaux (grouplist de server/config/config-example.js), du plus haut au plus bas. */
const GLOBAL_RANKS = [
	// `group` : numéro de groupe utilisé par pokemonshowdown.com dans le JSON (ntbb_users.group).
	{ symbol: '~', name: 'Administrateur', group: 2 },
	// Ancien rang de Showdown, fusionné depuis avec Administrateur.
	{ symbol: '&', name: 'Leader', group: 6 },
	{ symbol: '@', name: 'Modérateur', group: 5 },
	{ symbol: '%', name: 'Driver', group: 4 },
	{ symbol: '*', name: 'Bot', group: 0 },
	{ symbol: '+', name: 'Voice', group: 3 },
];

/** États des comptes (ntbb_users.banstate) utilisés par pokemonshowdown.com. */
const BANNED_STATES = [20, 30];
const DISABLED_STATE = 100;

const DAY = 24 * 60 * 60;
const DATE_FORMAT = new Intl.DateTimeFormat('fr-FR', {
	day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Paris',
});

function toID(text) {
	return String(text ?? '').toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function escapeHTML(text) {
	return String(text ?? '')
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

/** « 1er octobre 2026 », « 12 octobre 2026 » (heure de Paris). */
function formatDate(timestamp) {
	return DATE_FORMAT.formatToParts(new Date(timestamp * 1000))
		.map(part => (part.type === 'day' && part.value === '1' ? '1er' : part.value))
		.join('');
}

/**
 * Lit un fichier et garde le résultat de `parse` tant que le fichier ne change
 * pas. Renvoie null si le fichier n'existe pas ou ne peut pas être lu.
 */
const fileCache = new Map();
async function readParsed(file, parse) {
	try {
		const stat = await fs.promises.stat(file);
		const cached = fileCache.get(file);
		if (cached && cached.mtimeMs === stat.mtimeMs && cached.size === stat.size) return cached.value;
		const value = parse(await fs.promises.readFile(file, 'utf8'));
		fileCache.set(file, { mtimeMs: stat.mtimeMs, size: stat.size, value });
		return value;
	} catch {
		fileCache.delete(file);
		return null;
	}
}

/** server/config/usergroups.csv : lignes « Pseudo,SYMBOLE,section ». On garde le plus haut rang de chacun. */
function parseUsergroups(data) {
	const ranks = new Map();
	for (const line of data.split('\n')) {
		const [name, symbol = ''] = line.trim().split(',');
		const userid = toID(name);
		const index = GLOBAL_RANKS.findIndex(rank => rank.symbol === symbol.charAt(0));
		if (!userid || index < 0) continue;
		if (ranks.has(userid) && ranks.get(userid) <= index) continue;
		ranks.set(userid, index);
	}
	return ranks;
}

function count(value) {
	const number = Number(value);
	return Number.isFinite(number) && number > 0 ? Math.floor(number) : 0;
}

/**
 * server/config/ladders/<format>.tsv : une ligne d'en-tête puis
 * « Elo, Pseudo, Victoires, Défaites, Nuls, Dernière mise à jour ».
 * Les lignes incomplètes ou abîmées sont ignorées.
 */
function parseLadder(data) {
	const rows = new Map();
	for (const line of data.split('\n')) {
		const [elo = '', username = '', w, l, t] = line.trim().split('\t');
		const userid = toID(username);
		const rating = Number(elo);
		if (!userid || !elo.trim() || !Number.isFinite(rating) || rows.has(userid)) continue;
		rows.set(userid, { username: username.trim(), elo: rating, w: count(w), l: count(l), t: count(t) });
	}
	return rows;
}

/** Les formats affichés sur la page : noms en clair et ordre de la liste du serveur. */
function createFormatList(root) {
	let formats = null;
	return () => {
		if (formats) return formats;
		formats = new Map();
		try {
			const { Formats } = require(path.join(root, 'server/dist/config/formats.js'));
			for (const format of Formats) {
				const id = toID(format?.name);
				if (id && !formats.has(id)) formats.set(id, { name: format.name, order: formats.size });
			}
		} catch (err) {
			console.error(`Profils : noms des formats indisponibles, affichage des identifiants (${err.message})`);
		}
		return formats;
	};
}

/* Mise en page */

const STYLE = `
* { box-sizing: border-box; }
html {
	min-height: 100%;
	background: #0b1530 linear-gradient(180deg, #0b1530 0%, #1b3263 60%, #24467e 100%) fixed;
}
body {
	margin: 0; min-height: 100vh; display: flex; flex-direction: column;
	color: #222; font: 11pt/1.45 Verdana, Helvetica, Arial, sans-serif;
}
a { color: #3a4a66; }
a:hover { color: #6a85b5; }
.top {
	display: flex; align-items: center; justify-content: space-between; gap: 12px;
	width: 100%; max-width: 752px; margin: 0 auto; padding: 12px 16px;
}
.brand {
	display: flex; align-items: center; gap: 10px; min-width: 0;
	color: #fff; font-size: 17pt; font-weight: bold; text-decoration: none; text-shadow: 0 1px 2px rgba(0,0,0,.6);
}
.brand:hover { color: #fff; }
.brand img { flex: none; width: 44px; height: 44px; }
.play {
	flex: none; padding: 7px 15px; border: 1px solid #1e4a2c; border-radius: 8px;
	background: linear-gradient(#4ca363, #276136); box-shadow: inset .5px 1px 1px rgba(255,255,255,.5);
	color: #fff; font-weight: bold; text-decoration: none; text-shadow: 0 -1px 0 #000;
}
.play:hover { color: #fff; background: linear-gradient(#5ac777, #2f7f44); }
main { flex: 1 0 auto; width: 100%; max-width: 752px; margin: 0 auto; padding: 0 16px; }
.panel { background: #fff; border-radius: 8px; box-shadow: 0 2px 12px rgba(0,0,0,.4); padding: 4px 24px 24px; }
.back { display: inline-block; margin-top: 16px; font-size: 10pt; text-decoration: none; }
.back:hover { text-decoration: underline; }
h1 { margin: 0; padding: 12px 0 6px; text-align: center; font-size: 18pt; overflow-wrap: anywhere; }
h2 { margin: 24px 0 10px; font-size: 13pt; text-align: center; }
.info { margin: 6px 0; text-align: center; }
.rank { font-size: 12pt; }
.muted { color: #666; }
.banned, .error { color: #c22; }
.error { text-align: center; }
.empty { color: #666; text-align: center; font-style: italic; }
.scroll { overflow-x: auto; }
table { border-collapse: collapse; margin: 0 auto; }
th, td { border: 1px solid #bbb; padding: 4px 10px; }
th { background: #eee; font-size: 9pt; text-align: left; }
.num { text-align: center; }
td.format { min-width: 12em; }
form { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin: 8px 0 12px; }
input {
	width: 16em; max-width: 100%; padding: 5px 7px; border: 1px solid #aaa; border-radius: 4px;
	background: #f8fbfd; font: inherit; box-shadow: inset 0 1px 2px #ccc;
}
input:focus { outline: 0; border-color: #048; box-shadow: inset 0 1px 2px #d2d2d2, 0 0 5px #26a; background: #fff; }
button {
	padding: 5px 14px; border: 1px solid #aaa; border-radius: 5px;
	background: linear-gradient(#f6f6f6, #e3e3e3); font: inherit; cursor: pointer;
}
button:hover { background: linear-gradient(#f2f2f2, #cfcfcf); }
footer { padding: 20px 16px; text-align: center; font-size: 10pt; }
footer a, footer a:hover { color: #dde6f7; }
@media (max-width: 480px) {
	body { font-size: 10pt; }
	.top { padding: 10px 12px; }
	.brand { font-size: 13pt; gap: 8px; }
	.brand img { width: 36px; height: 36px; }
	.play { padding: 6px 11px; }
	main { padding: 0 8px; }
	.panel { padding: 2px 12px 18px; }
	th, td { padding: 4px 6px; }
	td.format { min-width: 0; }
}
@media (prefers-color-scheme: dark) {
	.panel { background: #1e2533; color: #ddd; }
	a { color: #9db6e3; }
	a:hover { color: #c3d4f2; }
	.muted, .empty { color: #a0a8b8; }
	.banned, .error { color: #f07070; }
	th, td { border-color: #4a5468; }
	th { background: #2a3242; }
	input, input:focus { background: #141a25; border-color: #4a5468; color: #ddd; box-shadow: none; }
}
`;

const HTML_TYPE = 'text/html; charset=utf-8';
const JSON_TYPE = 'application/json; charset=utf-8';

/** Les pages n'utilisent ni script ni ressource externe. */
const SECURITY_HEADERS = {
	'Content-Security-Policy': [
		"default-src 'none'", "img-src 'self'", "style-src 'unsafe-inline'", "form-action 'self'", "base-uri 'none'",
	].join('; '),
	'X-Content-Type-Options': 'nosniff',
};

function page(title, description, body) {
	return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHTML(title)}</title>
<meta name="description" content="${escapeHTML(description)}">
<link rel="icon" href="/favicon.ico">
<style>${STYLE}</style>
</head>
<body>
<header class="top">
<a class="brand" href="/">
<img src="/cobblemonshowdown-logo.svg" alt="" width="44" height="44"><span>CobblemonShowdown</span>
</a>
<a class="play" href="/">Jouer</a>
</header>
<main><div class="panel">
${body}
</div></main>
<footer><a href="/">Retour à l'accueil de CobblemonShowdown</a></footer>
</body>
</html>
`;
}

function send(req, res, status, type, body, headers = {}) {
	const data = Buffer.from(body);
	res.writeHead(status, {
		'Content-Type': type, 'Cache-Control': 'no-cache', 'Content-Length': data.length, ...headers,
	});
	res.end(req.method === 'HEAD' ? undefined : data);
}

function sendPage(req, res, status, title, description, body) {
	send(req, res, status, HTML_TYPE, page(title, description, body), SECURITY_HEADERS);
}

function redirect(res, location) {
	res.writeHead(302, { 'Location': location, 'Cache-Control': 'no-cache' });
	res.end();
}

function searchForm(message = '') {
	return `<h1>Trouver un joueur</h1>
${message ? `<p class="error">${escapeHTML(message)}</p>\n` : ''}<form action="/users/" method="get">
<input type="text" name="user" placeholder="Pseudo" aria-label="Pseudo" maxlength="18" autofocus required>
<button type="submit">Chercher</button>
</form>`;
}

function ratingsTable(ratings, formats) {
	if (!ratings.length) return `<p class="empty">Aucun classement pour le moment.</p>`;
	const header = ['Elo', 'Victoires', 'Défaites', 'Nuls'].map(title => `<th class="num">${title}</th>`).join('');
	const rows = ratings.map(rating => {
		const name = formats.get(rating.formatid)?.name || rating.formatid;
		const elo = `<td class="num"><strong>${Math.round(rating.elo)}</strong></td>`;
		const counts = [rating.w, rating.l, rating.t].map(value => `<td class="num">${value}</td>`).join('');
		return `<tr><td class="format">${escapeHTML(name)}</td>${elo}${counts}</tr>`;
	});
	return `<div class="scroll"><table>
<tr><th>Format</th>${header}</tr>
${rows.join('\n')}
</table></div>`;
}

function profileBody(profile, formats) {
	const { account, rank, ratings } = profile;
	const joined = account?.registertime ?
		`<p class="info muted">Inscrit le ${escapeHTML(formatDate(account.registertime))}</p>` : '';
	let status;
	if (!account) {
		status = `<p class="info muted"><small>(Pseudo non inscrit)</small></p>`;
	} else if (account.banstate >= DISABLED_STATE) {
		status = `<p class="info muted"><small>(Compte désactivé)</small></p>`;
	} else if (BANNED_STATES.includes(account.banstate)) {
		status = `<p class="info"><small class="banned">(Banni)</small></p>\n${joined}`;
	} else {
		const rankName = rank ? escapeHTML(`${rank.symbol} ${rank.name}`) : '';
		status = (rank ? `<p class="info rank"><strong>${rankName}</strong></p>\n` : '') + joined;
	}
	return `<a class="back" href="/users/">&lsaquo; Trouver un joueur</a>
<h1>${escapeHTML(profile.username)}</h1>
${status}
<h2>Classements</h2>
${ratingsTable(ratings, formats)}`;
}

function profileJSON(profile) {
	const { account, rank } = profile;
	const ratings = {};
	for (const rating of profile.ratings) {
		ratings[rating.formatid] = { elo: rating.elo, w: rating.w, l: rating.l, t: rating.t };
	}
	return JSON.stringify({
		username: profile.username,
		userid: profile.userid,
		// Arrondi au jour, comme pokemonshowdown.com.
		registertime: account ? Math.floor(account.registertime / DAY) * DAY : 0,
		group: account ? (rank?.group || account.group || 1) : 0,
		ratings,
	});
}

function createProfiles(settings) {
	const configDir = path.join(settings.root, 'server/config');
	const ladderDir = path.join(configDir, 'ladders');
	const getFormats = createFormatList(settings.root);
	let pool = null;

	function getPool() {
		if (!pool) {
			const mysql = require(path.join(settings.root, 'loginserver/node_modules/mysql2/promise'));
			pool = mysql.createPool({
				host: settings.db.host,
				port: settings.db.port,
				user: settings.db.user,
				password: settings.db.password,
				database: settings.db.database,
				connectionLimit: 2,
			});
		}
		return pool;
	}

	async function findAccount(userid) {
		const [rows] = await getPool().query(
			'SELECT `username`, `registertime`, `group`, `banstate` FROM `ntbb_users` WHERE `userid` = ? LIMIT 1', [userid]
		);
		if (!rows.length) return null;
		const row = rows[0];
		return {
			username: String(row.username),
			registertime: Number(row.registertime) || 0,
			group: Number(row.group) || 0,
			banstate: Number(row.banstate) || 0,
		};
	}

	async function findRatings(userid) {
		let files;
		try {
			files = await fs.promises.readdir(ladderDir);
		} catch {
			return [];
		}
		const ratings = [];
		await Promise.all(files.map(async file => {
			const formatid = /^([a-z0-9]+)\.tsv$/.exec(file)?.[1];
			if (!formatid) return;
			const row = (await readParsed(path.join(ladderDir, file), parseLadder))?.get(userid);
			// Comme pokemonshowdown.com : une place jamais jouée n'est pas affichée.
			if (!row || (row.w + row.l + row.t === 0 && row.elo < 1050)) return;
			ratings.push({ formatid, ...row });
		}));
		const formats = getFormats();
		const order = id => formats.get(id)?.order ?? Infinity;
		return ratings.sort((a, b) => (order(a.formatid) - order(b.formatid)) || a.formatid.localeCompare(b.formatid));
	}

	async function findProfile(userid) {
		const account = await findAccount(userid);
		const ranks = await readParsed(path.join(configDir, 'usergroups.csv'), parseUsergroups);
		const rankIndex = ranks?.get(userid);
		// Comme pokemonshowdown.com : pas de classement pour les comptes désactivés ou bannis du ladder.
		const hidden = account && (account.banstate >= DISABLED_STATE || account.banstate === 30);
		const ratings = hidden ? [] : await findRatings(userid);
		return {
			userid,
			username: account?.username || ratings[0]?.username || userid,
			account,
			rank: rankIndex === undefined ? null : GLOBAL_RANKS[rankIndex],
			ratings,
		};
	}

	async function showProfile(req, res, userid, json) {
		let profile;
		try {
			profile = await findProfile(userid);
		} catch (err) {
			console.error(`Profils : impossible de lire le compte « ${userid} » :`, err);
			if (json) return send(req, res, 500, JSON_TYPE, JSON.stringify({ error: 'Base de données indisponible' }));
			return sendPage(req, res, 500, 'Erreur - CobblemonShowdown', 'Profil momentanément indisponible',
				`<h1>Profil indisponible</h1>
<p class="info">Impossible d'afficher ce profil pour le moment. Réessayez dans quelques instants.</p>`);
		}
		if (json) {
			// 404 pour un pseudo non inscrit ou un compte désactivé, comme pokemonshowdown.com
			// (la commande /registertime affiche alors « non inscrit »).
			const found = profile.account && profile.account.banstate < DISABLED_STATE;
			if (!found) res.statusMessage = 'Not found';
			return send(req, res, found ? 200 : 404, JSON_TYPE, profileJSON(profile), { 'Access-Control-Allow-Origin': '*' });
		}
		const { username } = profile;
		sendPage(req, res, 200, `${username} - CobblemonShowdown`, `Profil de ${username} sur CobblemonShowdown`,
			profileBody(profile, getFormats()));
	}

	/** Répond aux adresses /users/... (pathname déjà décodé). */
	return (req, res, pathname) => {
		const rest = pathname.slice('/users/'.length);
		if (!rest) {
			const name = new URL(req.url, 'http://localhost').searchParams.get('user');
			if (name && toID(name)) return redirect(res, `/users/${toID(name)}`);
			return sendPage(req, res, 200, 'Trouver un joueur - CobblemonShowdown',
				'Chercher un joueur de CobblemonShowdown', searchForm(name ? 'Pseudo invalide.' : ''));
		}
		const match = /^([^/]+?)(\.json)?\/?$/.exec(rest);
		const userid = toID(match?.[1]);
		if (!userid) {
			return sendPage(req, res, 404, 'Joueur introuvable - CobblemonShowdown', 'Joueur introuvable',
				searchForm('Pseudo invalide.'));
		}
		const json = !!match[2];
		// Adresse canonique : /users/AnthonyTest et /users/anthonytest/ mènent à /users/anthonytest.
		if (!json && match[0] !== userid) return redirect(res, `/users/${userid}`);
		showProfile(req, res, userid, json).catch(err => {
			console.error(`Profils : erreur sur ${pathname} :`, err);
			if (!res.headersSent) res.writeHead(500);
			res.end();
		});
	};
}

module.exports = { createProfiles };
