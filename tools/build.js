'use strict';
/**
 * Installe les dépendances et construit les trois parties du site.
 * Usage : npm run build
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function run(step, command, cwd) {
	console.log(`\n=== ${step} ===`);
	execSync(command, { cwd: path.join(ROOT, cwd), stdio: 'inherit' });
}

run('Serveur de combat : dépendances', 'npm install --no-audit --no-fund', 'server');
// On repart d'une compilation vide : un fichier supprimé des sources ne doit pas rester actif.
fs.rmSync(path.join(ROOT, 'server/dist'), { recursive: true, force: true });
run('Serveur de combat : compilation', 'node build', 'server');
run('Serveur de comptes : dépendances', 'npm install --no-audit --no-fund --omit=dev', 'loginserver');
run('Client : compilation complète', 'node build full', 'client');
console.log('\nConstruction terminée. Démarrez le site avec `npm start`.');
