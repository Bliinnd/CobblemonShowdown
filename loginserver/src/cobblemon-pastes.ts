/**
 * CobblemonShowdown : équipes partagées par lien, façon pokepast.es.
 *
 * Le bouton « Partager » du teambuilder envoie l'équipe au format texte
 * (en anglais, pour l'importer ailleurs) et les mêmes Pokémon avec leurs noms
 * en français. Le site affiche ensuite la page /equipe/<id> (app/pastes.js).
 * Une même équipe donne toujours le même lien.
 *
 * Action :
 * - `cobblemonsharepaste` : enregistre l'équipe et renvoie son `id` (POST)
 */
import * as crypto from 'crypto';
import { ActionError, type QueryHandler } from './server.ts';
import { loginDB } from './tables.ts';
import { time } from './utils.ts';
import { requireSameOrigin } from './cobblemon-teams.ts';

const MAX_TEAM_LENGTH = 20000;
const MAX_DATA_LENGTH = 40000;
const MAX_SETS = 24;

export const cobblemonPastes = loginDB.getTable<{
	id: string,
	ownerid: string,
	title: string,
	format: string,
	team: string,
	data: string,
	created: number,
}>('cobblemon_pastes', 'id');

export const cobblemonPasteActions: { [k: string]: QueryHandler } = {
	async cobblemonsharepaste(params) {
		if (this.request.method !== 'POST') {
			throw new ActionError("L'équipe doit être envoyée en POST.");
		}
		requireSameOrigin(this);
		const team = (params.team ?? '').trim();
		const data = params.data ?? '';
		const title = (params.title ?? '').trim().slice(0, 100);
		const format = (params.format ?? '').trim().slice(0, 100);
		if (!team) throw new ActionError("Cette équipe est vide.");
		if (team.length > MAX_TEAM_LENGTH || data.length > MAX_DATA_LENGTH) {
			throw new ActionError("Cette équipe est trop longue pour être partagée.");
		}
		let sets;
		try {
			sets = JSON.parse(data);
		} catch {
			throw new ActionError("Données d'équipe invalides.");
		}
		if (!Array.isArray(sets) || !sets.length || sets.length > MAX_SETS) {
			throw new ActionError("Données d'équipe invalides.");
		}
		const user = await this.getUser();
		const ownerid = user.loggedIn && user.id !== 'guest' ? user.id : '';
		// Même équipe, même titre et même auteur : même lien.
		const id = crypto.createHash('sha256')
			.update(JSON.stringify([ownerid, title, format, team, data]))
			.digest('hex').slice(0, 12);
		await cobblemonPastes.insertIgnore({ id, ownerid, title, format, team, data, created: time() });
		return { success: true, id };
	},
};
