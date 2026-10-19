'use strict';
/**
 * Équipes partagées, comme pokepast.es : /equipe/<id> affiche une équipe
 * envoyée par le bouton « Partager » du teambuilder (loginserver/src/cobblemon-pastes.ts).
 *
 * Les Pokémon sont affichés avec leurs noms en français ; le bouton « Copier l'équipe »
 * copie le texte d'export en anglais, que le teambuilder (ou Showdown) sait importer.
 */
const crypto = require('crypto');
const path = require('path');
const { page, send, escapeHTML, formatDate, HTML_TYPE, SECURITY_HEADERS } = require('./profiles');

/** Couleurs des types et des stats : [fond clair, fond sombre] (comme pokepast.es en mode sombre). */
const TYPE_COLORS = {
	Normal: ['#6d6d4e', '#A8A878'], Fire: ['#c2561a', '#F08030'], Water: ['#2e5fc9', '#6890F0'],
	Electric: ['#a88a00', '#F8D030'], Grass: ['#3e8e2a', '#78C850'], Ice: ['#2f8c8c', '#98D8D8'],
	Fighting: ['#9a1f18', '#E0584F'], Poison: ['#7a2e7a', '#C060C0'], Ground: ['#8f7020', '#E0C068'],
	Flying: ['#6a55c8', '#A890F0'], Psychic: ['#d02a5e', '#F85888'], Bug: ['#6d7a10', '#A8B820'],
	Rock: ['#7e6a1e', '#B8A038'], Ghost: ['#5a4480', '#9C84C8'], Dragon: ['#4e20c8', '#8E68F8'],
	Dark: ['#4e3a30', '#A08878'], Steel: ['#5e5e7a', '#B8B8D0'], Fairy: ['#c2557a', '#EE99AC'],
	Stellar: ['#2a8a7e', '#40B5A5'],
};
const STAT_COLORS = {
	hp: ['#d23030', '#FF5959'], atk: ['#c0651f', '#F5AC78'], def: ['#9a8000', '#FAE078'],
	spa: ['#3a62c0', '#9DB7F5'], spd: ['#3a8a2a', '#A7DB8D'], spe: ['#c03a72', '#FA92B2'],
};
const colorRules = (prefix, colors, index) => Object.entries(colors)
	.map(([key, value]) => `.${prefix}-${key} { color: ${value[index]}; }`).join('\n');
const SPRITE_ID = /^[a-z0-9-]+$/;

const PASTE_STYLE = `
main { max-width: 980px; }
.top { max-width: 980px; }
.meta { margin: 0 0 14px; text-align: center; color: #666; }
.actions { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin: 0 0 16px; }
.actions a.button { display: inline-block; padding: 5px 14px; border: 1px solid #aaa; border-radius: 5px;
	background: linear-gradient(#f6f6f6, #e3e3e3); color: #222; text-decoration: none; }
.sets { display: grid; grid-template-columns: repeat(auto-fill, minmax(420px, 1fr)); gap: 12px; }
.set { display: flex; gap: 10px; align-items: flex-start; justify-content: space-between;
	padding: 10px 12px; border: 1px solid #ccd; border-radius: 8px; background: #f7f9fc; }
.set pre { margin: 0; font: 10pt/1.5 Menlo, Consolas, "DejaVu Sans Mono", monospace; white-space: pre-wrap;
	overflow-wrap: anywhere; min-width: 0; }
.set .species { font-weight: bold; }
.set .label { font-weight: bold; }
.set .move { font-weight: bold; }
.pics { flex: none; display: flex; flex-direction: column; align-items: center; }
.pics .sprite { width: 96px; height: 96px; image-rendering: pixelated; }
.pics .icons { display: flex; gap: 4px; align-items: center; min-height: 24px; }
.pics .item { width: 24px; height: 24px; background: url(/sprites/itemicons-sheet.png?v1) no-repeat; }
.pics .type { width: 32px; height: 14px; }
.export { margin-top: 18px; }
.export summary { cursor: pointer; text-align: center; }
.export textarea { width: 100%; height: 16em; margin-top: 8px; font: 10pt/1.4 Menlo, Consolas, monospace; }
#copied { visibility: hidden; color: #2a7a3a; align-self: center; }
${colorRules('type', TYPE_COLORS, 0)}
${colorRules('stat', STAT_COLORS, 0)}
@media (max-width: 480px) {
	.sets { grid-template-columns: 1fr; }
	.set pre { font-size: 9pt; }
	.pics .sprite { width: 72px; height: 72px; }
}
@media (prefers-color-scheme: dark) {
	.meta { color: #a0a8b8; }
	.set { background: #161c28; border-color: #3a4458; }
	.actions a.button { background: #2a3242; border-color: #4a5468; color: #ddd; }
	.export textarea { background: #141a25; color: #ddd; border-color: #4a5468; }
	#copied { color: #7fd08f; }
	${colorRules('type', TYPE_COLORS, 1)}
	${colorRules('stat', STAT_COLORS, 1)}
}
`;

/** Lit une chaîne courte venant de la base (déjà vérifiée par le serveur de comptes). */
function str(value, max = 100) {
	return typeof value === 'string' ? value.slice(0, max) : '';
}

/** `kind` : 'type' ou 'stat' ; la couleur vient des classes de PASTE_STYLE. */
function colored(text, cls, kind = '', key = '') {
	const colors = kind === 'type' ? TYPE_COLORS : STAT_COLORS;
	const color = kind && Object.hasOwn(colors, key) ? ` ${kind}-${key}` : '';
	return `<span class="${cls}${color}">${escapeHTML(text)}</span>`;
}

function statLine(label, stats) {
	if (!Array.isArray(stats) || !stats.length) return '';
	const parts = stats.slice(0, 6).map(stat => {
		return colored(`${Number(stat?.value) || 0} ${str(stat?.label, 12)}`, 'stat', 'stat', str(stat?.stat, 3));
	});
	return `<span class="label">${label} :</span> ${parts.join(' / ')}\n`;
}

function setCard(set) {
	if (!set || typeof set !== 'object') return '';
	const species = str(set.species);
	const nickname = str(set.nickname, 30);
	let header = nickname && nickname !== species ?
		`${escapeHTML(nickname)} (${colored(species, 'species')})` : colored(species, 'species');
	if (set.gender === 'M' || set.gender === 'F') header += ` (${set.gender})`;
	if (set.item) header += ` @ ${escapeHTML(str(set.item))}`;
	let text = header + '\n';
	if (set.ability) text += `<span class="label">Talent :</span> ${escapeHTML(str(set.ability))}\n`;
	if (set.level && Number(set.level) !== 100) text += `<span class="label">Niveau :</span> ${Number(set.level) || 100}\n`;
	if (set.shiny) text += `<span class="label">Chromatique :</span> Oui\n`;
	if (set.tera) {
		text += `<span class="label">Téracristal :</span> ${colored(str(set.tera), 'tera', 'type', str(set.teraType))}\n`;
	}
	text += statLine('EVs', set.evs);
	if (set.nature) text += `<span class="label">Nature</span> ${escapeHTML(str(set.nature))}\n`;
	text += statLine('IVs', set.ivs);
	for (const move of Array.isArray(set.moves) ? set.moves.slice(0, 8) : []) {
		text += `- ${colored(str(move?.name), 'move', 'type', str(move?.type))}\n`;
	}

	const spriteid = str(set.spriteid);
	const sprite = SPRITE_ID.test(spriteid) ?
		`<img class="sprite" src="/sprites/${set.shiny ? 'gen5-shiny' : 'gen5'}/${spriteid}.png" alt="${escapeHTML(species)}">` : '';
	// Même planche d'icônes que le client (Dex.getItemIcon).
	const itemnum = Math.max(0, Math.floor(Number(set.itemnum) || 0));
	const item = set.item ? `<span class="item" title="${escapeHTML(str(set.item))}" ` +
		`style="background-position:-${(itemnum % 16) * 24}px -${Math.floor(itemnum / 16) * 24}px"></span>` : '';
	const types = (Array.isArray(set.types) ? set.types.slice(0, 2) : [])
		.filter(type => Object.hasOwn(TYPE_COLORS, type))
		.map(type => `<img class="type" src="/sprites/types/${type}.png" alt="${type}">`).join('');
	return `<div class="set"><pre>${text.trimEnd()}</pre>
<div class="pics">${sprite}<div class="icons">${types}${item}</div></div></div>`;
}

function pasteBody(paste, sets, nonce) {
	const title = paste.title || 'Équipe sans nom';
	const meta = [
		paste.format && escapeHTML(paste.format),
		paste.ownerid && `par <a href="/users/${escapeHTML(paste.ownerid)}">${escapeHTML(paste.ownerid)}</a>`,
		paste.created && `le ${escapeHTML(formatDate(paste.created))}`,
	].filter(Boolean).join(' · ');
	return `<h1>${escapeHTML(title)}</h1>
${meta ? `<p class="meta">${meta}</p>` : ''}
<div class="actions">
<button type="button" id="copy">Copier l'équipe</button>
<a class="button" href="/teambuilder">Ouvrir le teambuilder</a>
<span id="copied">Copiée !</span>
</div>
<div class="sets">
${sets.map(setCard).join('\n')}
</div>
<details class="export"><summary>Texte à importer (en anglais)</summary>
<textarea id="export" readonly>${escapeHTML(paste.team)}</textarea>
</details>
<script nonce="${nonce}">
document.getElementById('copy').addEventListener('click', function () {
	var text = document.getElementById('export').value;
	var done = function () { document.getElementById('copied').style.visibility = 'visible'; };
	if (navigator.clipboard) {
		navigator.clipboard.writeText(text).then(done);
	} else {
		var area = document.getElementById('export');
		area.parentNode.open = true;
		area.select();
		document.execCommand('copy');
		done();
	}
});
</script>`;
}

function createPastes(settings) {
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

	function sendPage(req, res, status, title, body, nonce = '') {
		const headers = { ...SECURITY_HEADERS };
		// Script de copie et sprites servis par play.pokemonshowdown.com (voir /sprites/ dans front.js).
		headers['Content-Security-Policy'] = headers['Content-Security-Policy']
			.replace("img-src 'self'", "img-src 'self' https://play.pokemonshowdown.com") +
			(nonce ? `; script-src 'nonce-${nonce}'` : '');
		send(req, res, status, HTML_TYPE,
			page(title, 'Équipe partagée sur CobblemonShowdown', body, `<style>${PASTE_STYLE}</style>\n`), headers);
	}

	return async function showPaste(req, res, pathname) {
		const id = /^\/equipe\/([a-f0-9]{12})\/?$/.exec(pathname)?.[1];
		const notFound = () => sendPage(req, res, 404, 'Équipe introuvable - CobblemonShowdown',
			`<h1>Équipe introuvable</h1>
<p class="info">Ce lien de partage n'existe pas ou a été mal copié.</p>`);
		if (!id) return notFound();
		let paste;
		try {
			const [rows] = await getPool().query(
				'SELECT `title`, `format`, `ownerid`, `team`, `data`, `created` FROM `ntbb_cobblemon_pastes` WHERE `id` = ? LIMIT 1',
				[id]
			);
			if (rows.length) {
				const row = rows[0];
				paste = {
					title: String(row.title), format: String(row.format), ownerid: String(row.ownerid),
					team: String(row.team), data: String(row.data), created: Number(row.created) || 0,
				};
			}
		} catch (err) {
			console.error(`Équipes partagées : impossible de lire « ${id} » :`, err);
			return sendPage(req, res, 500, 'Erreur - CobblemonShowdown', `<h1>Équipe indisponible</h1>
<p class="info">Impossible d'afficher cette équipe pour le moment. Réessayez dans quelques instants.</p>`);
		}
		if (!paste) return notFound();
		let sets = [];
		try {
			sets = JSON.parse(paste.data);
		} catch {}
		if (!Array.isArray(sets)) sets = [];
		const nonce = crypto.randomBytes(12).toString('base64');
		sendPage(req, res, 200, `${paste.title || 'Équipe'} - CobblemonShowdown`, pasteBody(paste, sets, nonce), nonce);
	};
}

module.exports = { createPastes };
