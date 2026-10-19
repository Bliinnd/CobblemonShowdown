/**
 * CobblemonShowdown : fond d'écran personnel enregistré sur le compte.
 *
 * Showdown garde le fond d'écran dans le navigateur. Ici, un joueur connecté
 * peut envoyer une image qui le suit sur tous ses appareils. L'image est
 * réduite par le client (JPEG, 1920 pixels de large au plus) et stockée en
 * base sous forme d'adresse `data:`.
 *
 * Actions :
 * - `cobblemonloadbackground` : date du fond du compte connecté, et l'image si `image=1`
 * - `cobblemonsavebackground` : remplace (ou retire, si `image` est vide) le fond du compte (POST)
 */
import { ActionError, type QueryHandler } from './server.ts';
import { loginDB } from './tables.ts';
import { time } from './utils.ts';
import { requireSameOrigin } from './cobblemon-teams.ts';

/** Taille maximale de l'image (adresse `data:`, en caractères). */
const MAX_IMAGE_LENGTH = 3 * 1024 * 1024;
const IMAGE_DATA_URL = /^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/]+=*$/;

export const cobblemonBackgrounds = loginDB.getTable<{
	userid: string,
	image: string,
	updated: number,
}>('cobblemon_backgrounds', 'userid');

export const cobblemonBackgroundActions: { [k: string]: QueryHandler } = {
	async cobblemonloadbackground(params) {
		requireSameOrigin(this);
		const user = await this.getUser();
		if (!user.loggedIn || user.id === 'guest') return { loggedIn: false };
		const row = await cobblemonBackgrounds.get(user.id);
		if (!row) return { loggedIn: user.id, updated: 0 };
		return {
			loggedIn: user.id,
			updated: row.updated,
			image: params.image === '1' ? row.image : undefined,
		};
	},

	async cobblemonsavebackground(params) {
		if (this.request.method !== 'POST') {
			throw new ActionError("Le fond d'écran doit être envoyé en POST.");
		}
		requireSameOrigin(this);
		const user = await this.getUser();
		if (!user.loggedIn || user.id === 'guest') {
			throw new ActionError("Vous devez être connecté pour enregistrer un fond d'écran sur votre compte.");
		}
		const image = params.image ?? '';
		if (!image) {
			await cobblemonBackgrounds.delete(user.id);
			return { success: true, updated: 0 };
		}
		if (image.length > MAX_IMAGE_LENGTH) {
			throw new ActionError("Cette image est trop lourde (3 Mo au plus).");
		}
		if (!IMAGE_DATA_URL.test(image)) {
			throw new ActionError("Ce fichier n'est pas une image JPEG, PNG ou WebP.");
		}
		const updated = time();
		await cobblemonBackgrounds.replace({ userid: user.id, image, updated });
		return { success: true, updated };
	},
};
