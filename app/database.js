'use strict';
/**
 * Crée les tables de la base MySQL/MariaDB si elles n'existent pas encore.
 */
const fs = require('fs');
const path = require('path');

/** Schémas Postgres du serveur de comptes, inutiles ici. */
const SKIPPED_SCHEMAS = ['replays.sql'];

async function initDatabase(settings) {
	const mysql = require(path.join(settings.root, 'loginserver/node_modules/mysql2/promise'));
	const connection = await mysql.createConnection({
		host: settings.db.host,
		port: settings.db.port,
		user: settings.db.user,
		password: settings.db.password,
		database: settings.db.database,
		multipleStatements: true,
	});
	try {
		const dir = path.join(settings.root, 'loginserver/src/schemas');
		for (const file of fs.readdirSync(dir).sort()) {
			if (!file.endsWith('.sql') || SKIPPED_SCHEMAS.includes(file)) continue;
			const sql = fs.readFileSync(path.join(dir, file), 'utf8')
				.replace(/^DROP TABLE[^;]*;/gim, '')
				.replace(/CREATE TABLE (?!IF NOT EXISTS)/gi, 'CREATE TABLE IF NOT EXISTS ');
			await connection.query(sql);
		}
	} finally {
		await connection.end();
	}
}

module.exports = { initDatabase };
