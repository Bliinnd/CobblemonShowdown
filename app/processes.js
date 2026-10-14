'use strict';
/**
 * Lance le serveur de combat (server/) et le serveur de comptes
 * (loginserver/) en arrière-plan, et les relance s'ils s'arrêtent.
 */
const childProcess = require('child_process');
const fs = require('fs');
const net = require('net');
const path = require('path');
const { ensureChatRooms } = require('./rooms');
const { seedAdmins } = require('./admins');

function isPortInUse(port) {
	return new Promise(resolve => {
		const socket = net.connect({ host: '127.0.0.1', port });
		socket.once('connect', () => {
			socket.destroy();
			resolve(true);
		});
		socket.once('error', () => resolve(false));
	});
}

const children = [];
let stopping = false;

function supervise(name, args, cwd, logFile) {
	let restartDelay = 1000;
	const start = () => {
		const log = fs.openSync(logFile, 'a');
		const child = childProcess.spawn(process.execPath, args, { cwd, stdio: ['ignore', log, log] });
		fs.closeSync(log);
		const startedAt = Date.now();
		children.push(child);
		console.log(`${name} démarré (pid ${child.pid}), journal : ${logFile}`);
		child.on('exit', code => {
			children.splice(children.indexOf(child), 1);
			if (stopping) return;
			// Un processus qui a tourné longtemps repart vite ; sinon on espace les tentatives.
			restartDelay = Date.now() - startedAt > 60_000 ? 1000 : Math.min(restartDelay * 2, 60_000);
			console.error(`${name} s'est arrêté (code ${code}), redémarrage dans ${restartDelay / 1000} s`);
			setTimeout(start, restartDelay);
		});
	};
	start();
}

async function startProcesses(settings) {
	const logs = path.join(settings.dataDir, 'logs');
	fs.mkdirSync(logs, { recursive: true });

	// Si un autre exemplaire du site tourne déjà (Plesk peut en lancer plusieurs),
	// on réutilise ses serveurs au lieu d'en démarrer de nouveaux.
	if (await isPortInUse(settings.simPort)) {
		console.log(`Serveur de combat déjà actif sur le port ${settings.simPort}`);
	} else {
		// Le serveur de combat lit ces fichiers au démarrage puis les réécrit lui-même :
		// on ne les prépare que lorsqu'il n'est pas encore lancé.
		ensureChatRooms(settings);
		try {
			await seedAdmins(settings);
		} catch (err) {
			console.error('Administrateurs : impossible de lire les comptes dans la base de données.', err);
		}
		supervise('Serveur de combat', [
			'pokemon-showdown', 'start', '--skip-build', String(settings.simPort),
		], path.join(settings.root, 'server'), path.join(logs, 'server.log'));
	}
	if (await isPortInUse(settings.loginPort)) {
		console.log(`Serveur de comptes déjà actif sur le port ${settings.loginPort}`);
	} else {
		supervise('Serveur de comptes', [
			'src/index.js', 'config/config.cjs',
		], path.join(settings.root, 'loginserver'), path.join(logs, 'loginserver.log'));
	}
}

function stopProcesses() {
	stopping = true;
	for (const child of children) child.kill('SIGINT');
}

for (const signal of ['SIGINT', 'SIGTERM']) {
	process.on(signal, () => {
		stopProcesses();
		process.exit(0);
	});
}
process.on('exit', stopProcesses);

module.exports = { startProcesses };
