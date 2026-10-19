'use strict';
/**
 * Le site public : sert le client (client/play.pokemonshowdown.com) et
 * redirige vers les deux serveurs internes :
 * - /showdown/...            -> serveur de combat (connexion temps réel)
 * - /action.php, /api/...    -> serveur de comptes
 *
 * Il sert aussi les pages des joueurs (/users/<pseudo>, voir app/profiles.js),
 * les équipes partagées (/equipe/<id>, voir app/pastes.js),
 * les avatars personnalisés du serveur de combat (/avatars/<fichier>)
 * et les fonds d'écran Cobblemon du dossier fonds/ (/fonds/<fichier>).
 */
const fs = require('fs');
const http = require('http');
const https = require('https');
const net = require('net');
const path = require('path');
const childProcess = require('child_process');
const zlib = require('zlib');
const { clientConfig } = require('./configs');
const { createProfiles } = require('./profiles');
const { createPastes } = require('./pastes');

const TYPES = {
	'.html': 'text/html; charset=utf-8',
	'.js': 'text/javascript; charset=utf-8',
	'.mjs': 'text/javascript; charset=utf-8',
	'.css': 'text/css; charset=utf-8',
	'.json': 'application/json; charset=utf-8',
	'.map': 'application/json; charset=utf-8',
	'.png': 'image/png',
	'.gif': 'image/gif',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.webp': 'image/webp',
	'.svg': 'image/svg+xml',
	'.ico': 'image/x-icon',
	'.woff': 'font/woff',
	'.woff2': 'font/woff2',
	'.ttf': 'font/ttf',
	'.mp3': 'audio/mpeg',
	'.wav': 'audio/wav',
	'.txt': 'text/plain; charset=utf-8',
	'.webmanifest': 'application/manifest+json',
};

/** Fichiers texte envoyés compressés (les données du teambuilder font ~20 Mo, ~2 Mo compressées). */
const COMPRESSIBLE = new Set(['.html', '.js', '.mjs', '.css', '.json', '.map', '.svg', '.txt', '.webmanifest']);
const gzipCache = new Map();

function readGzipped(file, stat, callback) {
	const cached = gzipCache.get(file);
	if (cached && cached.mtimeMs === stat.mtimeMs && cached.size === stat.size) return callback(null, cached.data);
	fs.readFile(file, (err, content) => {
		if (err) return callback(err);
		zlib.gzip(content, (err2, data) => {
			if (err2) return callback(err2);
			gzipCache.set(file, { mtimeMs: stat.mtimeMs, size: stat.size, data });
			callback(null, data);
		});
	});
}

/**
 * Images et sons absents de ce dépôt (avec les positions des images dans
 * pokedex-mini.js) : en attendant les rendus Cobblemon, on les charge depuis
 * Pokémon Showdown.
 */
const EXTERNAL_RESOURCES = /^\/((sprites|audio)\/|data\/pokedex-mini(-bw)?\.js$)/;
const EXTERNAL_HOST = 'https://play.pokemonshowdown.com';

/** Avatars personnalisés (/addavatar, /personalavatar) : fichiers de server/config/avatars/. */
const AVATAR_FILE = /^(?!.*\.\.)[a-z0-9-][a-z0-9.-]*\.(png|gif|jpe?g|webp)$/;

/** Fonds d'écran Cobblemon : images du dossier fonds/ (voir fonds/LISEZMOI.md). */
const BACKGROUND_FILE = /^(?!\.)[^/\\]+\.(png|jpe?g|webp)$/i;

/**
 * Liste des fonds d'écran pour le client, avec les crédits facultatifs de
 * fonds/credits.json ({"fichier.jpg": {"title": "...", "artist": "...", "link": "..."}}).
 */
/** Fonds par défaut, dessinés par tools/fonds-pixel.py (client/play.pokemonshowdown.com/cobblemon/fonds/). */
const DEFAULT_BACKGROUNDS = [
	['prairie', 'Prairie'], ['crepuscule', 'Crépuscule'], ['nuit', 'Nuit'],
].map(([file, title]) => ({ url: `/cobblemon/fonds/${file}.png`, title, artist: 'CobblemonShowdown' }));

function listBackgrounds(dir) {
	let files;
	try {
		files = fs.readdirSync(dir).filter(file => BACKGROUND_FILE.test(file)).sort();
	} catch {
		return [];
	}
	let credits = {};
	try {
		credits = JSON.parse(fs.readFileSync(path.join(dir, 'credits.json'), 'utf8')) || {};
	} catch {}
	return files.map(file => {
		const credit = credits[file] || {};
		const background = { url: '/fonds/' + encodeURIComponent(file) };
		for (const key of ['title', 'artist', 'link']) {
			if (typeof credit[key] === 'string' && credit[key]) background[key] = credit[key];
		}
		return background;
	});
}

function forwardedHeaders(req) {
	// Une adresse IPv4 reçue sur une socket IPv6 (« ::ffff:1.2.3.4 ») est transmise sous sa forme IPv4.
	const ip = (req.socket.remoteAddress || '').replace(/^::ffff:(?=\d+\.\d+\.\d+\.\d+$)/i, '');
	// Sans adresse, on n'ajoute rien : une entrée vide deviendrait l'IP du joueur pour le serveur de combat.
	const forwardedFor = [req.headers['x-forwarded-for'], ip].filter(Boolean).join(', ');
	const headers = {
		...req.headers,
		'x-forwarded-for': forwardedFor,
		'x-forwarded-host': req.headers['x-forwarded-host'] || req.headers.host || '',
		'x-forwarded-proto': req.headers['x-forwarded-proto'] || (req.socket.encrypted ? 'https' : 'http'),
	};
	if (!forwardedFor) delete headers['x-forwarded-for'];
	return headers;
}

function proxyRequest(req, res, port, pathOverride) {
	const upstream = http.request({
		host: '127.0.0.1', port, method: req.method, path: pathOverride || req.url, headers: forwardedHeaders(req),
	}, upstreamRes => {
		res.writeHead(upstreamRes.statusCode || 502, upstreamRes.headers);
		upstreamRes.pipe(res);
	});
	upstream.on('error', () => {
		if (!res.headersSent) res.writeHead(502, { 'Content-Type': 'text/plain; charset=utf-8' });
		res.end('Service momentanément indisponible, réessayez dans quelques secondes.');
	});
	req.pipe(upstream);
}

function proxyUpgrade(req, socket, head, port) {
	const upstream = net.connect({ host: '127.0.0.1', port }, () => {
		const headers = forwardedHeaders(req);
		let raw = `${req.method} ${req.url} HTTP/${req.httpVersion}\r\n`;
		for (const [name, value] of Object.entries(headers)) {
			for (const v of Array.isArray(value) ? value : [value]) raw += `${name}: ${v}\r\n`;
		}
		upstream.write(raw + '\r\n');
		if (head?.length) upstream.write(head);
		upstream.pipe(socket);
		socket.pipe(upstream);
	});
	upstream.on('error', () => socket.destroy());
	socket.on('error', () => upstream.destroy());
}

function sendFile(res, file, req) {
	fs.stat(file, (err, stat) => {
		if (err || !stat.isFile()) {
			res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
			res.end('Introuvable');
			return;
		}
		const ext = path.extname(file).toLowerCase();
		const headers = {
			'Content-Type': TYPES[ext] || 'application/octet-stream',
			// Les pages changent à chaque mise à jour ; le reste a des URLs versionnées.
			'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=3600',
		};
		if (COMPRESSIBLE.has(ext) && stat.size > 1024) {
			headers['Vary'] = 'Accept-Encoding';
			if (/\bgzip\b/.test(req.headers['accept-encoding'] || '')) {
				return readGzipped(file, stat, (err2, data) => {
					if (err2) {
						res.writeHead(500);
						return res.end();
					}
					res.writeHead(200, { ...headers, 'Content-Encoding': 'gzip', 'Content-Length': data.length });
					res.end(req.method === 'HEAD' ? undefined : data);
				});
			}
		}
		res.writeHead(200, { ...headers, 'Content-Length': stat.size });
		if (req.method === 'HEAD') return res.end();
		fs.createReadStream(file).pipe(res);
	});
}

function createHandler(settings) {
	const publicDir = path.join(settings.root, 'client/play.pokemonshowdown.com');
	const indexPage = path.join(publicDir, 'caches/index-new.html');
	const avatarsDir = path.join(settings.root, 'server/config/avatars');
	const backgroundsDir = path.join(settings.root, 'fonds');
	const profiles = createProfiles(settings);
	const pastes = createPastes(settings);
	let configJs = null;

	return (req, res) => {
		let pathname;
		try {
			pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
		} catch {
			res.writeHead(400);
			return res.end();
		}

		if (pathname.startsWith('/showdown/') || pathname === '/showdown') {
			return proxyRequest(req, res, settings.simPort);
		}
		// Le client appelle /~~<serveur>/action.php ; le serveur de comptes répond aussi sur /api/<action>.
		if (/^\/(~~[a-z0-9-]+\/)?action\.php$/.test(pathname)) {
			const query = req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : '';
			return proxyRequest(req, res, settings.loginPort, '/action.php' + query);
		}
		if (pathname.startsWith('/api/')) return proxyRequest(req, res, settings.loginPort);
		// Replays sauvegardés : /replays/<id>.json, lu par le client pour rejouer un combat (/battle-<id>).
		const replay = /^\/replays\/([a-z0-9-]+)\.json$/.exec(pathname);
		if (replay && (req.method === 'GET' || req.method === 'HEAD')) {
			return proxyRequest(req, res, settings.loginPort, `/api/replays/get.json?id=${replay[1]}&countview`);
		}

		if (req.method !== 'GET' && req.method !== 'HEAD') {
			res.writeHead(405);
			return res.end();
		}
		// Pages des joueurs, comme pokemonshowdown.com/users/<pseudo> (/users seul reste une page de l'application).
		if (pathname.startsWith('/users/')) return profiles(req, res, pathname);
		// Équipes partagées depuis le teambuilder, comme pokepast.es.
		if (pathname.startsWith('/equipe/')) return pastes(req, res, pathname);
		if (pathname === '/config/config.js') {
			configJs ||= clientConfig(settings);
			// Relu à chaque fois : un fond ajouté dans fonds/ apparaît sans redémarrer le site.
			// Sans image dans fonds/, les paysages en pixels du site (tools/fonds-pixel.py) sont utilisés.
			const list = listBackgrounds(backgroundsDir);
			const backgrounds = `Config.cobblemonBackgrounds = ${JSON.stringify(list.length ? list : DEFAULT_BACKGROUNDS)};\n`;
			res.writeHead(200, { 'Content-Type': TYPES['.js'], 'Cache-Control': 'no-cache' });
			return res.end(configJs + backgrounds);
		}
		// Couleurs de pseudo personnalisées : aucune pour l'instant.
		if (pathname === '/config/colors.json') {
			res.writeHead(200, { 'Content-Type': TYPES['.json'], 'Cache-Control': 'no-cache' });
			return res.end('{}');
		}
		if (pathname.startsWith('/avatars/')) {
			const name = pathname.slice('/avatars/'.length);
			if (!AVATAR_FILE.test(name)) {
				res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
				return res.end('Introuvable');
			}
			return sendFile(res, path.join(avatarsDir, name), req);
		}
		if (pathname.startsWith('/fonds/')) {
			const name = pathname.slice('/fonds/'.length);
			if (!BACKGROUND_FILE.test(name)) {
				res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
				return res.end('Introuvable');
			}
			return sendFile(res, path.join(backgroundsDir, name), req);
		}
		if (EXTERNAL_RESOURCES.test(pathname) && !fs.existsSync(path.join(publicDir, pathname))) {
			res.writeHead(302, { Location: EXTERNAL_HOST + req.url });
			return res.end();
		}

		const file = path.normalize(path.join(publicDir, pathname));
		if (!file.startsWith(publicDir + path.sep) && file !== publicDir) {
			res.writeHead(403);
			return res.end();
		}
		// Les adresses sans extension (/, /teambuilder, /battle-...) affichent l'application.
		if (pathname === '/' || !path.extname(pathname)) return sendFile(res, indexPage, req);
		if (/\.(php|inc|sql)$/.test(pathname)) {
			res.writeHead(404);
			return res.end();
		}
		return sendFile(res, file, req);
	};
}

function devCertificate(settings) {
	const dir = path.join(settings.dataDir, 'dev-cert');
	const key = path.join(dir, 'key.pem');
	const cert = path.join(dir, 'cert.pem');
	if (!fs.existsSync(key)) {
		fs.mkdirSync(dir, { recursive: true });
		childProcess.execFileSync('openssl', [
			'req', '-x509', '-newkey', 'rsa:2048', '-nodes', '-days', '365',
			'-subj', `/CN=${settings.siteHost.split(':')[0]}`, '-keyout', key, '-out', cert,
		], { stdio: 'ignore' });
	}
	return { key: fs.readFileSync(key), cert: fs.readFileSync(cert) };
}

function startFront(settings) {
	const handler = createHandler(settings);
	const server = settings.devHttps ?
		https.createServer(devCertificate(settings), handler) :
		http.createServer(handler);
	server.on('upgrade', (req, socket, head) => {
		if (req.url.startsWith('/showdown/')) return proxyUpgrade(req, socket, head, settings.simPort);
		socket.destroy();
	});
	server.listen(settings.port, () => {
		console.log(`Site disponible sur le port ${settings.port} (adresse publique : https://${settings.siteHost})`);
	});
	return server;
}

module.exports = { startFront };
