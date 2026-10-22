/**
 * CobblemonShowdown : remise à zéro de l'elo d'un joueur par un administrateur.
 *
 * /resetelo pseudo, format : retire le joueur du classement de ce format (il repart à 1000).
 * /resetelo pseudo : la même chose pour tous les formats où il est classé.
 * Une confirmation est demandée avant d'effacer quoi que ce soit.
 * Le classement de chaque format (page « Classement ») affiche un bouton par joueur pour les admins.
 */
import { FS, Utils } from '../../lib';
import { LadderStore } from '../ladders-local';

async function rankedFormats(userid: ID) {
	const formats: ID[] = [];
	for (const format of Dex.formats.all()) {
		if (!format.rated || !format.searchShow) continue;
		const store = new LadderStore(format.id);
		await store.getLadder();
		if (store.indexOfUser(userid) >= 0) formats.push(format.id);
	}
	return formats;
}

async function resetElo(userid: ID, formatid: ID) {
	const store = new LadderStore(formatid);
	const ladder = await store.getLadder();
	const index = store.indexOfUser(userid);
	if (index < 0) return null;
	const [row] = ladder.splice(index, 1);
	// save() n'écrit rien quand le classement devient vide : on vide alors le fichier nous-mêmes.
	if (ladder.length) await store.save();
	else await FS(`config/ladders/${formatid}.tsv`).write('Elo\tUsername\tW\tL\tT\tLast update\r\n');
	const user = Users.get(userid);
	if (user) delete user.mmrCache[formatid];
	return row;
}

export const commands: Chat.ChatCommands = {
	async resetelo(target, room, user) {
		this.checkCan('disableladder');
		const [name, formatName, confirm] = target.split(',').map(part => part.trim());
		const userid = toID(name);
		if (!userid) return this.parse('/help resetelo');
		if (Config.remoteladder) throw new Chat.ErrorMessage(`Le classement est géré par un autre serveur.`);

		let formats: ID[];
		if (formatName && toID(formatName) !== 'tous') {
			const format = Dex.formats.get(formatName);
			if (!format.exists || !format.rated) throw new Chat.ErrorMessage(`Format classé inconnu : ${formatName}`);
			formats = [format.id];
		} else {
			formats = await rankedFormats(userid);
		}
		const formatList = formats.map(id => Dex.formats.get(id).name.replace(/^\[Gen 9\] /, '')).join(', ');
		const what = formatName && toID(formatName) !== 'tous' ? formatList : `tous ses formats (${formatList || 'aucun'})`;

		if (toID(confirm) !== 'confirm') {
			const command = `/resetelo ${userid}, ${formatName && toID(formatName) !== 'tous' ? formats[0] : 'tous'}, confirm`;
			return this.connection.popup(
				`|html|<p>Remettre l'elo de <strong>${Utils.escapeHTML(name)}</strong> à 1000 en ` +
				`${Utils.escapeHTML(what)} ? Ses victoires et défaites dans ce classement seront effacées.</p>` +
				`<p><button class="button" name="send" value="${Utils.escapeHTML(command)}">Confirmer</button></p>`
			);
		}

		const done: string[] = [];
		for (const formatid of formats) {
			const row = await resetElo(userid, formatid);
			if (row) done.push(`${Dex.formats.get(formatid).name.replace(/^\[Gen 9\] /, '')} (${Math.round(row[1])})`);
		}
		if (!done.length) throw new Chat.ErrorMessage(`${name} n'a pas de classement à remettre à zéro en ${what}.`);
		this.globalModlog('RESETELO', userid, formats.join(', '));
		this.connection.popup(`L'elo de ${name} est remis à 1000 en : ${done.join(', ')}.`);
	},
	resetelohelp: [
		`/resetelo [pseudo], [format] - Remet l'elo du joueur à 1000 dans ce format. Requires: ~`,
		`/resetelo [pseudo] - Remet son elo à 1000 dans tous les formats. Requires: ~`,
	],
};
