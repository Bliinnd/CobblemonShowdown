#!/usr/bin/env node
/**
 * Génère le mod Showdown `cobblemon` (server/data/mods/cobblemon/) à partir
 * des données extraites par extract.mjs.
 *
 * - learnsets.ts : les attaques que chaque Pokémon apprend dans Cobblemon
 * - formats-data.ts : disponibilité et tiers de chaque Pokémon
 * - moves.ts : réactive les anciennes attaques présentes dans Cobblemon
 * - cobblemon.json : liste des Pokémon disponibles, lue par les règles des formats
 *
 * Prérequis : le serveur doit être compilé (`cd server && node build`).
 * Usage : node tools/cobblemon-data/build-mod.mjs [tag]   (défaut : 1.8.2)
 */
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const TAG = process.argv[2] || '1.8.2';
const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '../..');
const MOD_DIR = path.join(ROOT, 'server/data/mods/cobblemon');
const require = createRequire(import.meta.url);
const { Dex, toID } = require(path.join(ROOT, 'server/dist/sim/dex'));
const dex = Dex.mod('gen9');

const cobblemon = JSON.parse(fs.readFileSync(path.join(HERE, `cobblemon-${TAG}.json`), 'utf8'));

/** Pokémon interdits en OU (et Monotype) en plus des légendaires, fabuleux, Ultra-Chimères et Paradoxe. */
const OU_EXTRA_BANS = [
	'Archaludon', 'Dracovish', 'Kingambit', 'Gliscor', 'Palafin', 'Sneasler', 'Annihilape', 'Espathra',
];
/** Pas pleinement évolués, mais autorisés en OU. */
const OU_NFE_ALLOWED = ['Porygon2', 'Chansey'];
const BANNED_LABELS = ['legendary', 'mythical', 'ultra_beast', 'paradox'];
const BANNED_TAGS = ['Restricted Legendary', 'Sub-Legendary', 'Mythical', 'Ultra Beast', 'Paradox'];

// ---------------------------------------------------------------------------
// 1. Associer chaque espèce / forme Cobblemon à son identifiant Showdown
// ---------------------------------------------------------------------------

/** id Showdown -> { implemented, labels, moves } */
const entries = new Map();
const unmatchedForms = [];

function sourcesFor(cobbleSources) {
	const out = [];
	for (const source of cobbleSources) {
		let ps;
		if (source.startsWith('L')) ps = `9${source}`;
		else if (source === 'tm') ps = '9M';
		else if (source === 'egg') ps = '9E';
		else ps = '9T'; // tutor, legacy, special, form_change
		if (!out.includes(ps)) out.push(ps);
	}
	// Showdown lit les sources dans l'ordre : on met les plus simples en premier.
	return out.sort((a, b) => sourceRank(a) - sourceRank(b) || a.localeCompare(b));
}
function sourceRank(s) {
	return { M: 0, T: 1, L: 2, E: 3 }[s.charAt(1)] ?? 4;
}
function learnsetFrom(moves) {
	const learnset = {};
	for (const [move, sources] of Object.entries(moves)) {
		const id = toID(move);
		if (!dex.moves.get(id).exists) throw new Error(`Attaque inconnue : ${move}`);
		learnset[id] = sourcesFor(sources);
	}
	return learnset;
}

for (const sp of cobblemon.species) {
	const base = dex.species.get(sp.name);
	if (!base.exists) throw new Error(`Espèce inconnue de Showdown : ${sp.name}`);
	entries.set(base.id, {
		name: base.name, implemented: sp.implemented, labels: sp.labels, learnset: learnsetFrom(sp.moves),
	});
	for (const form of sp.forms) {
		const formSpecies = dex.species.get(`${sp.name}-${form.name}`);
		if (!formSpecies.exists || formSpecies.id === base.id) {
			unmatchedForms.push(`${sp.name}-${form.name}`);
			continue;
		}
		entries.set(formSpecies.id, {
			name: formSpecies.name,
			implemented: sp.implemented,
			labels: [...new Set([...sp.labels, ...form.labels])],
			learnset: form.moves ? learnsetFrom(form.moves) : null,
		});
	}
}

// ---------------------------------------------------------------------------
// 2. Disponibilité et tiers
// ---------------------------------------------------------------------------

const championsDex = Dex.mod('champions');
function inChampions(species) {
	const s = championsDex.species.get(species.id);
	return s.exists && !s.isNonstandard && s.tier !== 'Illegal';
}

function isBannedInOU(species, entry) {
	if (OU_EXTRA_BANS.includes(species.baseSpecies) || OU_EXTRA_BANS.includes(species.name)) return true;
	if (entry?.labels.some(l => BANNED_LABELS.includes(l))) return true;
	return species.tags.some(t => BANNED_TAGS.includes(t));
}

/** Pokémon jouables dans les formats Cobblemon (hors National Dex). */
const available = new Set();
const formatsData = {};
const natDexOnly = [];

for (const species of dex.species.all()) {
	if (species.isCosmeticForme) continue;
	const entry = entries.get(species.id) ||
		(species.changesFrom || species.forme ? entries.get(toID(species.changesFrom || species.baseSpecies)) : undefined);
	const base = dex.species.get(species.baseSpecies);
	const baseEntry = entries.get(base.id);
	const isMegaOrPrimal = ['Mega', 'Mega-X', 'Mega-Y', 'Mega-Z', 'Primal'].includes(species.forme) || species.isMega;
	const isGmax = species.forme?.endsWith('Gmax') || species.isNonstandard === 'Gigantamax';
	const cobbleAvailable = !!(entries.get(species.id) || (species.battleOnly && baseEntry)) &&
		!!baseEntry?.implemented && !isMegaOrPrimal && !isGmax &&
		!['CAP', 'Custom', 'LGPE'].includes(species.isNonstandard);

	const data = {};
	if (cobbleAvailable) {
		available.add(species.id);
		data.isNonstandard = null;
		if (isBannedInOU(species, entry)) data.tier = 'Uber';
		else if (species.nfe && !OU_NFE_ALLOWED.includes(species.name)) data.tier = species.prevo ? 'NFE' : 'LC';
		else data.tier = 'OU';
		// National Dex : on garde les tiers de Smogon quand ils existent.
		data.natDexTier = species.natDexTier && species.natDexTier !== 'Illegal' ? species.natDexTier : data.tier;
	} else if (
		isMegaOrPrimal && (baseEntry?.implemented || inChampions(base)) &&
		!['CAP', 'Custom'].includes(species.isNonstandard)
	) {
		// Méga-évolutions (anciennes et nouvelles) : National Dex uniquement.
		natDexOnly.push(species.id);
		data.isNonstandard = 'Past';
		data.tier = 'Illegal';
		data.natDexTier = species.natDexTier && species.natDexTier !== 'Illegal' ? species.natDexTier :
			base.natDexTier === 'Uber' ? 'Uber' : 'OU';
	} else if (inChampions(species)) {
		// Présent dans Pokémon Champions mais pas dans Cobblemon : National Dex uniquement.
		natDexOnly.push(species.id);
		data.isNonstandard = 'Past';
		data.tier = 'Illegal';
		data.natDexTier = species.natDexTier && species.natDexTier !== 'Illegal' ? species.natDexTier : 'OU';
	} else {
		data.isNonstandard = 'Unobtainable';
		data.tier = 'Illegal';
		data.natDexTier = 'Illegal';
	}
	formatsData[species.id] = data;
}

// ---------------------------------------------------------------------------
// 3. Learnsets
// ---------------------------------------------------------------------------

const learnsets = {};
for (const [id, entry] of entries) {
	// Une forme sans liste d'attaques propre reprend celle de sa forme de base.
	learnsets[id] = entry.learnset ? { learnset: entry.learnset } : {};
}

// Anciennes attaques (retirées de Écarlate/Violet) que Cobblemon permet d'apprendre.
const usedMoves = new Set();
for (const entry of entries.values()) for (const move in entry.learnset || {}) usedMoves.add(move);
const pastMoves = [...usedMoves].filter(id => dex.moves.get(id).isNonstandard === 'Past').sort();

// Méga-gemmes des nouvelles méga-évolutions (Légendes Pokémon : Z-A, Champions) :
// Showdown les marque "Future", on les rend utilisables en National Dex.
const futureItems = new Set();
for (const id of natDexOnly) {
	const species = dex.species.get(id);
	for (const itemName of [species.requiredItem, ...(species.requiredItems || [])]) {
		const item = itemName && dex.items.get(itemName);
		if (item?.exists && item.isNonstandard === 'Future') futureItems.add(item.id);
	}
}

// ---------------------------------------------------------------------------
// 4. Écriture des fichiers
// ---------------------------------------------------------------------------

const HEADER = `// Fichier généré par tools/cobblemon-data/build-mod.mjs à partir de Cobblemon ${TAG}.\n` +
	`// Ne pas modifier à la main : relancer le script.\n\n`;

function tsObject(obj, indent = '\t') {
	const lines = [];
	for (const [key, value] of Object.entries(obj)) {
		const k = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key) ? key : JSON.stringify(key);
		if (value && typeof value === 'object' && !Array.isArray(value)) {
			const inner = tsObject(value, indent + '\t');
			lines.push(inner ? `${indent}${k}: {\n${inner}\n${indent}},` : `${indent}${k}: {},`);
		} else {
			lines.push(`${indent}${k}: ${JSON.stringify(value)},`);
		}
	}
	return lines.join('\n');
}

fs.mkdirSync(MOD_DIR, { recursive: true });
fs.writeFileSync(path.join(MOD_DIR, 'learnsets.ts'), HEADER + '/* eslint-disable max-len */\n\n' +
	`export const Learnsets: import('../../../sim/dex-species').ModdedLearnsetDataTable = {\n${tsObject(learnsets)}\n};\n`);
fs.writeFileSync(path.join(MOD_DIR, 'formats-data.ts'), HEADER +
	`export const FormatsData: import('../../../sim/dex-species').ModdedSpeciesFormatsDataTable = {\n${tsObject(formatsData)}\n};\n`);
fs.writeFileSync(path.join(MOD_DIR, 'moves.ts'), HEADER +
	`export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {\n` +
	pastMoves.map(id => `\t${id}: {\n\t\tinherit: true,\n\t\tisNonstandard: null,\n\t},`).join('\n') + '\n};\n');
fs.writeFileSync(path.join(MOD_DIR, 'items.ts'), HEADER +
	`export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {\n` +
	[...futureItems].sort().map(id => `\t${id}: {\n\t\tinherit: true,\n\t\tisNonstandard: "Past",\n\t},`).join('\n') +
	'\n};\n');
fs.writeFileSync(path.join(MOD_DIR, 'new-mega-stones.ts'), HEADER +
	'/** Méga-gemmes absentes des anciennes générations, autorisées en National Dex. */\n' +
	`export const NEW_MEGA_STONES = [\n${[...futureItems].sort().map(id => `\t${JSON.stringify(dex.items.get(id).name)},`).join('\n')}\n];\n`);
fs.writeFileSync(path.join(MOD_DIR, 'cobblemon.json'), JSON.stringify({
	tag: TAG,
	available: [...available].sort(),
	natDexOnly: natDexOnly.sort(),
}, null, '\t') + '\n');

console.log(`Pokémon disponibles : ${available.size}`);
console.log(`National Dex uniquement (méga-évolutions, Pokémon Champions) : ${natDexOnly.length}`);
console.log(`Nouvelles méga-gemmes ajoutées à la National Dex : ${futureItems.size}`);
console.log(`Anciennes attaques réactivées : ${pastMoves.length}`);
console.log(`Formes Cobblemon sans équivalent Showdown (ignorées) : ${unmatchedForms.length}`);
