'use strict';
/**
 * Clés RSA qui permettent au serveur de comptes de signer les connexions,
 * et au serveur de combat de les vérifier. Créées au premier démarrage dans
 * `data/keys/`.
 */
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

function ensureKeys(settings) {
	const dir = path.join(settings.dataDir, 'keys');
	const privatePath = path.join(dir, 'login-private.pem');
	const publicPath = path.join(dir, 'login-public.pem');
	if (!fs.existsSync(privatePath) || !fs.existsSync(publicPath)) {
		fs.mkdirSync(dir, { recursive: true, mode: 0o700 });
		const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
			modulusLength: 2048,
			publicKeyEncoding: { type: 'spki', format: 'pem' },
			privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
		});
		fs.writeFileSync(privatePath, privateKey, { mode: 0o600 });
		fs.writeFileSync(publicPath, publicKey);
		console.log(`Clés de connexion créées dans ${dir}`);
	}
	return {
		privateKey: fs.readFileSync(privatePath, 'utf8'),
		publicKey: fs.readFileSync(publicPath, 'utf8'),
	};
}

module.exports = { ensureKeys };
