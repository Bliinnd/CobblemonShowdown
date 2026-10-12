#!/usr/bin/env node
/**
 * Télécharge les fichiers d'espèces officiels de Cobblemon (dépôt GitLab
 * cable-mc/cobblemon, au tag demandé) et en extrait ce dont le teambuilder
 * a besoin : disponibilité, labels, formes et attaques apprises.
 *
 * Usage : node tools/cobblemon-data/extract.mjs [tag]   (défaut : 1.8.2)
 * Sortie : tools/cobblemon-data/cobblemon-<tag>.json
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const TAG = process.argv[2] || '1.8.2';
const HERE = path.dirname(fileURLToPath(import.meta.url));
const SPECIES_PATH = 'common/src/main/resources/data/cobblemon/species';
const ARCHIVE_URL = 'https://gitlab.com/api/v4/projects/cable-mc%2Fcobblemon/repository/archive.tar.gz' +
	`?sha=${encodeURIComponent(TAG)}&path=${encodeURIComponent(SPECIES_PATH)}`;

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'cobblemon-'));
const archive = path.join(tmp, 'species.tar.gz');
console.log(`Téléchargement des espèces Cobblemon ${TAG}...`);
execFileSync('curl', ['-sSfL', '-o', archive, ARCHIVE_URL], { stdio: 'inherit' });
execFileSync('tar', ['xzf', archive, '-C', tmp]);

function findJson(dir) {
	const out = [];
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) out.push(...findJson(full));
		else if (entry.name.endsWith('.json')) out.push(full);
	}
	return out;
}

/** "1:tackle" -> ['tackle', 'L1'] ; "tm:surf" -> ['surf', 'tm'] */
function parseMoves(list) {
	const moves = {};
	for (const raw of list || []) {
		const sep = raw.indexOf(':');
		const kind = raw.slice(0, sep);
		const move = raw.slice(sep + 1).trim();
		const source = /^\d+$/.test(kind) ? `L${kind}` : kind;
		(moves[move] ||= []).includes(source) || moves[move].push(source);
	}
	return moves;
}

const species = [];
for (const file of findJson(tmp).sort()) {
	const data = JSON.parse(fs.readFileSync(file, 'utf8'));
	species.push({
		name: data.name,
		num: data.nationalPokedexNumber,
		implemented: data.implemented === true,
		labels: data.labels || [],
		abilities: data.abilities || [],
		preEvolution: data.preEvolution || null,
		evolutions: (data.evolutions || []).map(e => e.result),
		moves: parseMoves(data.moves),
		forms: (data.forms || []).map(form => ({
			name: form.name,
			battleOnly: form.battleOnly === true,
			labels: form.labels || [],
			abilities: form.abilities || null,
			moves: form.moves?.length ? parseMoves(form.moves) : null,
		})),
	});
}
species.sort((a, b) => a.num - b.num || a.name.localeCompare(b.name));

const out = path.join(HERE, `cobblemon-${TAG}.json`);
fs.writeFileSync(out, JSON.stringify({ tag: TAG, source: 'https://gitlab.com/cable-mc/cobblemon', species }) + '\n');
fs.rmSync(tmp, { recursive: true, force: true });
console.log(`${species.length} espèces (${species.filter(s => s.implemented).length} implémentées) -> ${out}`);
