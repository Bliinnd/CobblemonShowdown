#!/usr/bin/env node
/**
 * Génère le mod Showdown `cobblemon` (server/data/mods/cobblemon/) à partir
 * des données extraites par extract.mjs.
 *
 * - learnsets.ts : les attaques que chaque Pokémon apprend dans Cobblemon (niveau, CT, tuteur, œuf),
 *   alignées sur https://cobblemon.tools/pokedex/ grâce à cobblemon-tools-diff.txt
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
/** Pas pleinement évolués, mais classés OU (les autres Pokémon qui peuvent évoluer vont dans « Autres »). */
const OU_NFE_ALLOWED = ['Porygon2', 'Chansey'];
const BANNED_LABELS = ['legendary', 'mythical', 'ultra_beast', 'paradox'];
const BANNED_TAGS = ['Restricted Legendary', 'Sub-Legendary', 'Mythical', 'Ultra Beast', 'Paradox'];

// ---------------------------------------------------------------------------
// 1. Associer chaque espèce / forme Cobblemon à son identifiant Showdown
// ---------------------------------------------------------------------------

/** id Showdown -> { implemented, labels, moves } */
const entries = new Map();
const unmatchedForms = [];

/**
 * Sources retenues : niveau, CT, œuf et tuteur, les quatre onglets de cobblemon.tools.
 * "legacy" et "special" (anciennes attaques, événements) ne sont pas apprenables en jeu.
 */
function sourcesFor(cobbleSources) {
	const out = [];
	for (const source of cobbleSources) {
		let ps;
		if (/^L\d+$/.test(source)) ps = `9${source}`;
		else if (source === 'tm') ps = '9M';
		else if (source === 'egg') ps = '9E';
		else if (source === 'tutor') ps = '9T';
		else continue;
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
		const psSources = sourcesFor(sources);
		if (psSources.length) learnset[id] = psSources;
	}
	return learnset;
}

/**
 * Écarts entre les données du mod et cobblemon.tools (relevés sur le site), appliqués aux espèces
 * de base pour que leurs attaques correspondent exactement au site.
 * Une ligne : `<espèce> +tm=a,b -tutor=c -L=32:d` (catégories L, tm, egg, tutor).
 */
const toolsDiff = new Map();
for (const line of fs.readFileSync(path.join(HERE, 'cobblemon-tools-diff.txt'), 'utf8').split('\n')) {
	if (!line.trim() || line.startsWith('#')) continue;
	const [slug, ...changes] = line.trim().split(/\s+/);
	toolsDiff.set(slug, changes.map(change => {
		const [, sign, cat, list] = /^([+-])(L|tm|egg|tutor)=(.+)$/.exec(change) || [];
		if (!sign) throw new Error(`Ligne invalide dans cobblemon-tools-diff.txt : ${line}`);
		return { sign, cat, moves: list.split(',') };
	}));
}
const usedDiffs = new Set();
function applyToolsDiff(speciesId, moves) {
	const changes = toolsDiff.get(speciesId);
	if (!changes) return moves;
	usedDiffs.add(speciesId);
	const out = {};
	for (const [move, sources] of Object.entries(moves)) out[toID(move)] = [...sources];
	for (const { sign, cat, moves: list } of changes) {
		for (const item of list) {
			let move = item, source = cat;
			if (cat === 'L') [source, move] = [`L${item.split(':')[0]}`, item.split(':')[1]];
			if (sign === '+') {
				out[move] ||= [];
				if (!out[move].includes(source)) out[move].push(source);
			} else {
				if (!out[move]?.includes(source)) throw new Error(`${speciesId} n'apprend pas ${move} par ${source}`);
				out[move] = out[move].filter(s => s !== source);
				if (!out[move].length) delete out[move];
			}
		}
	}
	return out;
}

for (const sp of cobblemon.species) {
	const base = dex.species.get(sp.name);
	if (!base.exists) throw new Error(`Espèce inconnue de Showdown : ${sp.name}`);
	entries.set(base.id, {
		name: base.name, implemented: sp.implemented, labels: sp.labels,
		learnset: learnsetFrom(applyToolsDiff(base.id, sp.moves)),
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

const gen8Dex = Dex.mod('gen8');
const DOUBLES_TIERS = ['DUber', 'DOU', 'DBL', 'DUU', '(DUU)'];
/**
 * Tier en double (règles Doubles OU de Smogon) : celui d'Écarlate/Violet quand il existe, sinon
 * "DUber" pour les légendaires majeurs et les fabuleux, sinon celui d'Épée/Bouclier, sinon (DUU).
 * Le tag "LC" de Showdown repose sur ce tier : les Pokémon qui peuvent évoluer restent NFE / LC.
 */
function doublesTierFor(species) {
	if (species.nfe) return species.prevo ? 'NFE' : 'LC';
	if (DOUBLES_TIERS.includes(species.doublesTier)) return species.doublesTier;
	const tags = dex.species.get(species.baseSpecies).tags;
	if (tags.includes('Restricted Legendary') || tags.includes('Mythical')) return 'DUber';
	const gen8Tier = gen8Dex.species.get(species.id).doublesTier;
	return DOUBLES_TIERS.includes(gen8Tier) ? gen8Tier : '(DUU)';
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
		// "AG" : interdits même en Ubers (comme sur Showdown).
		if (species.tier === 'AG') data.tier = 'AG';
		else if (isBannedInOU(species, entry)) data.tier = 'Uber';
		else if (species.nfe && !OU_NFE_ALLOWED.includes(species.name)) data.tier = species.prevo ? 'NFE' : 'LC';
		else data.tier = 'OU';
		data.doublesTier = doublesTierFor(species);
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
const unusedDiffs = [...toolsDiff.keys()].filter(id => !usedDiffs.has(id));
if (unusedDiffs.length) throw new Error(`Espèces de cobblemon-tools-diff.txt introuvables : ${unusedDiffs.join(', ')}`);
console.log(`Formes Cobblemon sans équivalent Showdown (ignorées) : ${unmatchedForms.length}`);
