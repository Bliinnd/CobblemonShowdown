'use strict';
/**
 * Point d'entrée de CobblemonShowdown (fichier de démarrage à indiquer dans Plesk).
 *
 * 1. lit les réglages (variables d'environnement ou fichier .env)
 * 2. prépare les clés de connexion et les fichiers de configuration
 * 3. crée les tables de la base de données si besoin
 * 4. lance le serveur de combat et le serveur de comptes
 * 5. ouvre le site public
 *
 * Avant le premier démarrage, lancer `npm run build` (voir docs/installation-plesk.md).
 */
const fs = require('fs');
const path = require('path');
const { loadSettings } = require('./app/settings');
const { ensureKeys } = require('./app/keys');
const { writeConfigs } = require('./app/configs');
const { initDatabase } = require('./app/database');
const { startProcesses } = require('./app/processes');
const { startFront } = require('./app/front');

async function main() {
	const settings = loadSettings();
	const missing = ['server/dist/sim/dex.js', 'client/play.pokemonshowdown.com/caches/index-new.html', 'loginserver/node_modules']
		.filter(file => !fs.existsSync(path.join(settings.root, file)));
	if (missing.length) {
		console.error(`Le site n'est pas encore construit (manque : ${missing.join(', ')}). Lancez d'abord \`npm run build\`.`);
		process.exit(1);
	}
	// Le site public démarre en premier : Plesk attend qu'il réponde.
	startFront(settings);
	const keys = ensureKeys(settings);
	writeConfigs(settings, keys);
	await initDatabase(settings);
	await startProcesses(settings);
}

main().catch(err => {
	console.error('Erreur au démarrage :', err);
	process.exit(1);
});
