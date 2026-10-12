/**
 * CobblemonShowdown : sauvegarde des équipes sur le compte.
 *
 * Showdown garde les équipes dans le navigateur (localStorage). Ici, chaque
 * compte possède une copie de ses équipes en base, au même format "packé"
 * que le client (`showdown_teams`), pour les retrouver sur n'importe quel
 * appareil.
 *
 * Actions :
 * - `cobblemonloadteams` : renvoie les équipes du compte connecté
 * - `cobblemonsaveteams` : remplace les équipes du compte connecté (POST)
 */
import { ActionError, type ActionContext, type QueryHandler } from './server.ts';
import { loginDB } from './tables.ts';
import { time } from './utils.ts';

/** Taille maximale de l'ensemble des équipes d'un compte (en caractères). */
const MAX_TEAMS_LENGTH = 4 * 1024 * 1024;

export const cobblemonTeams = loginDB.getTable<{
	userid: string,
	teams: string,
	updated: number,
}>('cobblemon_teams', 'userid');

/**
 * Les cookies de session sont envoyés même depuis un autre site
 * (SameSite=None), donc on refuse les requêtes venant d'une autre origine.
 */
function requireSameOrigin(context: ActionContext) {
	const origin = context.request.headers.origin;
	if (!origin) return;
	let originHost;
	try {
		originHost = new URL(origin).host;
	} catch {
		throw new ActionError("Origine de la requête invalide.", 403);
	}
	const host = context.request.headers['x-forwarded-host'] || context.request.headers.host;
	if (originHost !== host) throw new ActionError("Requête refusée : origine différente du site.", 403);
}

async function requireLoggedIn(context: ActionContext) {
	const user = await context.getUser();
	if (!user.loggedIn || user.id === 'guest') {
		throw new ActionError("Vous devez être connecté pour synchroniser vos équipes.");
	}
	return user;
}

export const cobblemonTeamActions: { [k: string]: QueryHandler } = {
	async cobblemonloadteams() {
		requireSameOrigin(this);
		const user = await this.getUser();
		if (!user.loggedIn || user.id === 'guest') return { loggedIn: false, teams: null };
		const row = await cobblemonTeams.get(user.id);
		return { loggedIn: user.id, teams: row ? row.teams : null, updated: row ? row.updated : 0 };
	},

	async cobblemonsaveteams(params) {
		if (this.request.method !== 'POST') {
			throw new ActionError("Les équipes doivent être envoyées en POST.");
		}
		requireSameOrigin(this);
		const user = await requireLoggedIn(this);
		const teams = params.teams ?? '';
		if (teams.length > MAX_TEAMS_LENGTH) {
			throw new ActionError("Vos équipes sont trop volumineuses pour être sauvegardées.");
		}
		const updated = time();
		await cobblemonTeams.replace({ userid: user.id, teams, updated });
		return { success: true, updated };
	},
};
