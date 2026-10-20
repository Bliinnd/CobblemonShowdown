/**
 * CobblemonShowdown: French team validation messages
 *
 * The validator builds its problems in English. This turns each line into
 * French, with French Pokémon, move, item, ability, nature and type names.
 * A line that matches no pattern is kept as is.
 *
 * @license MIT
 */

import { DexText } from '../sim/dex-text';
import { toID } from '../sim/dex-data';

type NameKind = 'species' | 'move' | 'item' | 'ability' | 'nature' | 'type' | 'stat' | 'tag';

let names: Record<NameKind, Map<string, string>> | null = null;
function getNames() {
	if (names) return names;
	const text = DexText.loadRawTextData('fr');
	const english = DexText.loadRawTextData();
	const fromTable = (table: { [id: string]: { name?: string | null } | undefined }) => {
		const map = new Map<string, string>();
		for (const id in table) {
			const name = table[id]?.name;
			if (name) map.set(id, name);
		}
		return map;
	};
	const fromNames = (table: { [id: string]: string | null | undefined }) => {
		const map = new Map<string, string>();
		for (const key in table) {
			const name = table[key];
			if (name && !key.includes(':')) map.set(toID(key), name);
		}
		return map;
	};
	const tags = new Map<string, string>();
	for (const id in text.Tags) {
		const name = text.Tags[id]?.name;
		const englishName = english.Tags[id]?.name;
		if (name) tags.set(toID(englishName || id), name);
	}
	names = {
		species: fromTable(text.Pokedex),
		move: fromTable(text.Moves),
		item: fromTable(text.Items),
		ability: fromTable(text.Abilities),
		nature: fromNames(text.NatureNames),
		type: fromNames(text.TypeNames),
		// the validator writes stats as HP, Atk, Def, SpA, SpD, Spe
		stat: fromNames({ hp: "PV", atk: "Attaque", def: "Défense", spa: "Atq. Spé.", spd: "Déf. Spé.", spe: "Vitesse" }),
		tag: tags,
	};
	return names;
}

function frName(kind: NameKind, english: string) {
	return getNames()[kind].get(toID(english)) || english;
}

/** Species, move, item or ability, for messages that can name any of them. */
function anyName(english: string) {
	const id = toID(english);
	const all = getNames();
	for (const kind of ['species', 'move', 'item', 'ability'] as const) {
		const found = all[kind].get(id);
		if (found) return found;
	}
	return english;
}

/** "Garchomp", a nickname, or "Nickname (Species)" */
function mon(text: string): string {
	const match = /^(.*) \(([^()]+)\)$/.exec(text);
	if (match) return `${mon(match[1])} (${frName('species', match[2])})`;
	return frName('species', text);
}

const THING_KINDS: { [kind: string]: [NameKind, string] } = {
	'move': ['move', "la capacité"],
	'item': ['item', "l'objet"],
	'ability': ['ability', "le talent"],
	'nature': ['nature', "la nature"],
	'type': ['type', "le type"],
	'Tera type': ['type', "le type Téracristal"],
};
/** "Garchomp's move Earthquake", or a single name */
function thing(text: string) {
	const match = /^(.+)'s (move|item|ability|nature|type|Tera type) (.+)$/.exec(text);
	if (match) {
		const [kind, article] = THING_KINDS[match[2]];
		return `${article} ${frName(kind, match[3])} de ${mon(match[1])}`;
	}
	const translated = anyName(text);
	return translated === text ? mon(text) : translated;
}

/** "banned", "banned by Species Clause", "not obtainable", as the start of a sentence */
function reason(text: string) {
	if (text === 'not obtainable') return "Impossible à obtenir";
	if (text.startsWith('banned by ')) return `Interdit par ${text.slice(10)}`;
	return "Interdit";
}

const list = (kind: NameKind, separator: string, frSeparator = separator) =>
	(text: string) => text.split(separator).map(part => frName(kind, part)).join(frSeparator);

const TOKENS: { [token: string]: [string, (text: string) => string] } = {
	mon: ['(.+?)', mon],
	species: ['(.+?)', text => frName('species', text)],
	move: ['(.+?)', text => frName('move', text)],
	moves: ['(.+?)', list('move', ', ')],
	item: ['(.+?)', text => frName('item', text)],
	items: ['(.+?)', list('item', ' or ', ' ou ')],
	ability: ['(.+?)', text => frName('ability', text)],
	type: ['(.+?)', text => frName('type', text)],
	stat: ['(.+?)', text => frName('stat', text)],
	tag: ['(.+?)', text => frName('tag', text)],
	thing: ['(.+?)', thing],
	reason: ['(banned|banned by .+|not obtainable)', reason],
	combo: ['(.+?)', text => text.split(' + ').map(anyName).join(' + ')],
	blame: ['((?: from .+)?)', text => text ? ` (règle ${text.slice(6)})` : ''],
	n: ['(\\d+)', text => text],
	text: ['(.+?)', text => text],
};

/* eslint-disable @stylistic/max-len */
const MESSAGES: [string, string][] = [
	// whole team
	["This format doesn't let you use your own team.", "Ce format ne permet pas d'utiliser votre propre équipe."],
	["If you're not using a custom client, please report this as a bug. If you are, remember to use `/utm null` before starting a game in this format.",
		"Si vous n'utilisez pas un client modifié, signalez ce bug. Sinon, pensez à utiliser `/utm null` avant de lancer un combat dans ce format."],
	["This format requires you to use your own team.", "Ce format demande d'utiliser votre propre équipe."],
	["If you're not using a custom client, please report this as a bug.", "Si vous n'utilisez pas un client modifié, signalez ce bug."],
	["You must bring at least {n} Pokémon (your team has {n}).", "Il faut au moins {1} Pokémon (votre équipe en a {2})."],
	["You may only bring up to {n} Pokémon (your team has {n}).", "Il faut au plus {1} Pokémon (votre équipe en a {2})."],
	["Your team has more than than 24 Pokémon, which the simulator can't handle.", "Votre équipe a plus de 24 Pokémon, le simulateur ne peut pas la gérer."],
	["You sent invalid team data. If you're not using a custom client, please report this as a bug.",
		"Les données de l'équipe sont invalides. Si vous n'utilisez pas un client modifié, signalez ce bug."],
	["You are limited to one of each Pokémon by Species Clause.", "Un seul exemplaire de chaque Pokémon est autorisé (Species Clause)."],
	["(You have more than one {species})", "(Vous avez plusieurs {1})"],
	["Your Pokémon must have different nicknames.", "Vos Pokémon doivent avoir des surnoms différents."],
	["(You have more than one {mon})", "(Plusieurs Pokémon s'appellent {1})"],
	["You are limited to {n} of each item by Item Clause.", "Chaque objet est limité à {1} exemplaire(s) (Item Clause)."],
	["(You have more than {n} {item})", "(Vous avez plus de {1} {2})"],
	["You cannot have more than one {species}.", "Vous ne pouvez pas avoir plus d'un {1}."],
	["You cannot have more than one {species}", "Vous ne pouvez pas avoir plus d'un {1}."],
	["(It's untradeable and you can only make one with the {item}.)", "(Il est impossible à échanger et l'objet {1} ne permet d'en créer qu'un.)"],
	["You are limited to {n} of {combo} by {text}.", "Vous êtes limité à {1} parmi {2} ({3})."],
	["You are limited to {n} of {combo}.", "Vous êtes limité à {1} parmi {2}."],
	["Your team has the combination of {combo}, which is banned by {text}.", "La combinaison {1} est interdite dans votre équipe ({2})."],
	["Your team has the combination of {combo}, which is banned.", "La combinaison {1} est interdite dans votre équipe."],
	["Your team must share a type.", "Tous vos Pokémon doivent avoir un type en commun."],
	["Invalid pokemon {mon}", "Pokémon invalide : {1}"],
	["You cannot have more than one type of Deoxys forme.", "Vous ne pouvez avoir qu'une seule forme de Deoxys."],
	["You can only have one of Pikachu-Starter or Eevee-Starter on a team.", "Vous ne pouvez avoir qu'un seul Pikachu ou Évoli partenaire."],

	// a Pokémon's basics
	["This is not a Pokemon.", "Ceci n'est pas un Pokémon."],
	['The Pokemon "{text}" does not exist.', "Le Pokémon « {1} » n'existe pas."],
	['"{text}" is an invalid item.', "« {1} » n'est pas un objet valide."],
	['"{text}" is an invalid ability.', "« {1} » n'est pas un talent valide."],
	['"{text}" is an invalid nature.', "« {1} » n'est pas une nature valide."],
	['"{text}" is an invalid move.', "« {1} » n'est pas une capacité valide."],
	['{species}\'s nickname "{text}" is too long.', "Le surnom « {2} » de {1} est trop long."],
	["(It's {n} characters long, but should be 18 or less. Some characters, like emojis, may count as more than one.)",
		"(Il fait {1} caractères, 18 au maximum. Certains caractères, comme les émojis, comptent pour plusieurs.)"],
	["{mon} (level {n}) is below the minimum level of {n}{blame}", "{1} (niveau {2}) est sous le niveau minimum de {3}{4}."],
	["{mon} (level {n}) is above the maximum level of {n}{blame}", "{1} (niveau {2}) dépasse le niveau maximum de {3}{4}."],
	["{mon} has an invalid happiness value.", "{1} a une valeur de bonheur invalide."],
	["{mon}'s Hidden Power type ({text}) is invalid.", "Le type Puissance Cachée ({2}) de {1} n'est pas valide."],
	["{mon}'s Terastal type ({type}) is invalid.", "Le type Téracristal ({2}) de {1} n'est pas valide."],
	["{species}'s Terastal type needs to be {type}.", "Le type Téracristal de {1} doit être {2}."],
	["{species}'s Tera Type must match the team's type.", "Le type Téracristal de {1} doit être le type commun de l'équipe."],
	["{mon} needs to have an ability.", "{1} doit avoir un talent."],
	["{mon} can't have {ability}.", "{1} ne peut pas avoir le talent {2}."],
	["{mon}'s Hidden Ability is unreleased.", "Le talent caché de {1} n'est pas encore disponible."],
	["{mon} must be at least level {n} to have a Hidden Ability.", "{1} doit être au moins niveau {2} pour avoir son talent caché."],
	["{mon} has no moves (it must have at least one to be usable).", "{1} n'a aucune capacité (il en faut au moins une)."],
	["{mon} has {n} moves, which is more than the limit of {n}.", "{1} a {2} capacités, la limite est de {3}."],
	["{species} has multiple copies of {move}.", "{1} connaît plusieurs fois {2}."],
	["{mon} must not be nicknamed a different Pokémon species than what it actually is.",
		"{1} ne peut pas porter le nom d'une autre espèce de Pokémon."],
	["{mon} isn't the first in its evolution family.", "{1} n'est pas le premier stade de son évolution."],
	["{mon} doesn't have an evolution family.", "{1} n'évolue pas et ne fait partie d'aucune famille d'évolution."],
	["{mon} must be at least level {n} to be evolved.", "{1} doit être au moins niveau {2} pour être évolué."],
	["{mon} does not exist in the National Dex.", "{1} n'existe pas dans le Pokédex National."],
	["{mon}'s move {move} does not exist in the National Dex.", "La capacité {2} de {1} n'existe pas dans le Pokédex National."],

	// items and formes
	["{mon} needs to hold {items} to be in its {text} forme.", "{1} doit tenir {2} pour être sous sa forme {3}."],
	["{mon} needs to hold {items}.", "{1} doit tenir {2}."],
	["(It will revert to its {text} forme if you remove the item or give it a different item.)",
		"(Il reprend sa forme {1} sans cet objet.)"],
	["{mon} needs to know the move {move} to be in its {text} forme.", "{1} doit connaître {2} pour être sous sa forme {3}."],
	["(It will revert to its {text} forme if it forgets the move.)", "(Il reprend sa forme {1} s'il oublie cette capacité.)"],
	["{species} transforms in-battle with {ability}, please fix its ability.", "{1} change de forme en combat grâce à {2} : corrigez son talent."],
	["{species} transforms in-battle with {item}, please fix its item.", "{1} change de forme en combat grâce à {2} : corrigez son objet."],
	["{species} transforms in-battle with {move}, please fix its moves.", "{1} change de forme en combat grâce à {2} : corrigez ses capacités."],
	["Battle Bond Greninja must be male.", "Amphinobi avec Synergie doit être mâle."],

	// stats
	["{mon}'s IVs are not maxed out, but this format requires all IVs to be 31.", "Ce format demande des IV à 31 partout, ce n'est pas le cas de {1}."],
	["{mon} has more than 255 EVs in {stat}.", "{1} a plus de 255 EV en {2}."],
	["{mon} has less than 0 {text} in {stat}.", "{1} a moins de 0 {2} en {3}."],
	["{mon} has exactly 0 EVs - did you forget to EV it? (If this was intentional, add exactly 1 to one of your EVs, which won't change its stats but will tell us that it wasn't a mistake).",
		"{1} n'a aucun EV : vous avez oublié de les répartir ? (Si c'est voulu, ajoutez 1 EV quelque part : ça ne change pas ses stats et ça confirme que ce n'est pas un oubli.)"],
	["{mon} has exactly {n} EVs, but this format does not restrict you to 510 EVs (If this was intentional, add exactly 1 to one of your EVs, which won't change its stats but will tell us that it wasn't a mistake).",
		"{1} a exactement {2} EV, alors que ce format ne limite pas à 510 EV. (Si c'est voulu, ajoutez 1 EV quelque part pour confirmer que ce n'est pas un oubli.)"],
	["{mon} is level 50, but this format allows level {n} Pokémon. (If this was intentional, add exactly 1 to one of your EVs, which won't change its stats but will tell us that it wasn't a mistake).",
		"{1} est niveau 50, alors que ce format autorise le niveau {2}. (Si c'est voulu, ajoutez 1 EV quelque part pour confirmer que ce n'est pas un oubli.)"],
	["{mon} has EVs, which is not allowed by this format.", "{1} a des EV, ce que ce format n'autorise pas."],
	["{mon} has {n} total EVs, which is more than this format's limit of {n}.", "{1} a {2} EV au total, la limite de ce format est de {3}."],
	["{mon} has Hidden Power {type}, but its IVs are for Hidden Power {type}.", "{1} a Puissance Cachée {2}, mais ses IV donnent Puissance Cachée {3}."],
	["{mon}'s Hidden Power type {type} is incompatible with Hidden Power {type}", "Le type Puissance Cachée {2} de {1} ne correspond pas à Puissance Cachée {3}."],
	["{mon} must have at least three perfect IVs because it's a legendary{text}.", "{1} doit avoir au moins trois IV à 31, car c'est un légendaire."],

	// moves
	["{mon} can't learn {move}.", "{1} ne peut pas apprendre {2}."],
	["{mon} can't learn any moves at all.", "{1} ne peut apprendre aucune capacité."],
	["{mon}'s move {move} is learned at level {n}.", "{1} n'apprend {2} qu'au niveau {3}."],
	["{mon}'s move {move} is incompatible with {moves}.", "La capacité {2} de {1} est incompatible avec {3}."],
	["{mon}'s moves {moves} are incompatible.", "Les capacités {2} de {1} sont incompatibles entre elles."],
	["{mon}'s move {move} can't be Sketched.", "La capacité {2} de {1} ne peut pas être copiée par Gribouille."],
	["{mon}'s move {move} can't be transferred from Gen {n} to {n}.", "La capacité {2} de {1} ne peut pas être transférée de la génération {3} à la {4}."],
	["{mon}'s move {move} can only be learned in gens without Hidden Abilities.",
		"La capacité {2} de {1} ne s'apprend que dans des générations sans talent caché."],
	["{mon}'s move {move} is learned in gen {n}, but the Ability {ability} did not exist then.",
		"{1} apprend {2} en génération {3}, mais le talent {4} n'existait pas encore."],
	["{mon} can't get its egg move combination ({moves}) from any possible father.",
		"Aucun parent possible ne peut transmettre à {1} cette combinaison de capacités œuf ({2})."],
	["(Is this incorrect? If so, post the chainbreeding instructions in Bug Reports)",
		"(Si c'est une erreur, signalez-la avec la façon d'obtenir ces capacités.)"],
	["{mon} has an event-exclusive move that it doesn't qualify for (only one of several ways to get the move will be listed):",
		"{1} a une capacité réservée à une distribution à laquelle il ne correspond pas (une seule des façons de l'obtenir est indiquée) :"],
	["{species} is only obtainable from an event - it needs to match its event:", "{1} ne s'obtient que par une distribution, il doit lui correspondre :"],
	["{species} is only obtainable from events - it needs to match one of its events:",
		"{1} ne s'obtient que par des distributions, il doit correspondre à l'une d'elles :"],
	["{mon} needs to know {move} to evolve, so it can only know 3 other moves from {species}.",
		"{1} doit connaître {2} pour évoluer, il ne peut donc connaître que 3 autres capacités de {3}."],
	["{mon} has a Hidden Ability - it can't use moves from before Gen 5.", "{1} a son talent caché : il ne peut pas avoir de capacités d'avant la génération 5."],
	["{mon} has a hidden ability - it can't have moves only learned before gen 5.", "{1} a son talent caché : il ne peut pas avoir de capacités d'avant la génération 5."],
	["{mon} ne peut apprendre {move} que par reproduction {text}", "{1} ne peut apprendre {2} que par reproduction {3}"],

	// bans
	["{mon} is limited to {n} of {combo} by {text}.", "{1} est limité à {2} parmi {3} ({4})."],
	["{mon} is limited to {n} of {combo}.", "{1} est limité à {2} parmi {3}."],
	["{mon} has the combination of {combo}, which is impossible to obtain legitimately.", "La combinaison {2} de {1} est impossible à obtenir légalement."],
	["{mon} has the combination of {combo}, which is banned by {text}.", "La combinaison {2} de {1} est interdite ({3})."],
	["{mon} has the combination of {combo}, which is banned.", "La combinaison {2} de {1} est interdite."],
	["Mega evolutions are {reason}.", "{1} : les Méga-Évolutions."],
	["Gigantamaxing {species} is {reason}.", "{2} : la Gigamax de {1}."],
	["{mon} not holding an item is {reason}.", "{2} : {1} sans objet."],
	["{thing} is tagged {tag}, which is {reason}.", "{3} : {1} (catégorie {2})."],
	["{thing} has {text}, which is {reason}.", "{3} : {1} ({2})."],
	["{thing} is {reason}.", "{2} : {1}."],
	["{thing} is not obtainable without hacking or glitches in Gen {n}.", "Impossible d'obtenir {1} sans triche en génération {2}."],
	["{thing} is not obtainable without hacking or glitches.", "Impossible d'obtenir {1} sans triche."],
	["{thing} does not exist in Gen {n}.", "{1} n'existe pas en génération {2}."],
	["{thing} does not exist in this game, only in Let's Go Pikachu/Eevee.", "{1} n'existe que dans Let's Go Pikachu et Évoli."],
	["{thing} is made up for Smogon CAP and does not exist in this game.", "{1} est une création du projet CAP de Smogon et n'existe pas dans le jeu."],
	["{thing} does not exist in this game.", "{1} n'existe pas dans le jeu."],
	["{thing} is not in the list of allowed pokemon.", "{1} ne fait pas partie des Pokémon autorisés."],
	["{thing} is not in the list of allowed items.", "{1} ne fait pas partie des objets autorisés."],
	["{thing} is not in the list of allowed moves.", "{1} ne fait pas partie des capacités autorisées."],
	["{thing} is not in the list of allowed abilities.", "{1} ne fait pas partie des talents autorisés."],
	["{thing} is not in the list of allowed natures.", "{1} ne fait pas partie des natures autorisées."],
	["{species} is flagged as gigantamax, but it cannot gigantamax without hacking or glitches.",
		"{1} est marqué Gigamax, mais ne peut pas se Gigamaxer sans triche."],
	["It failed to validate as a Pokemon from Pokemon GO because:", "Il n'est pas valide non plus comme Pokémon venant de Pokémon GO, car :"],
	["Additionally, it failed to validate as a Pokemon from Pokemon GO because:", "Il n'est pas valide non plus comme Pokémon venant de Pokémon GO, car :"],
	["Your team crashed the validator. We'll fix this crash within a few hours (we're automatically notified), but if you don't want to wait, just use a different team for now.",
		"Votre équipe a fait planter le validateur. Nous sommes prévenus automatiquement ; en attendant, utilisez une autre équipe."],
];
/* eslint-enable @stylistic/max-len */

const escapeRegExp = (text: string) => text.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&');

const RULES = MESSAGES.map(([english, french]) => {
	const converters: ((text: string) => string)[] = [];
	const source = english.split(/(\{[a-z]+\})/).map(part => {
		const token = /^\{([a-z]+)\}$/.exec(part)?.[1];
		if (!token) return escapeRegExp(part);
		if (!TOKENS[token]) throw new Error(`Unknown token {${token}} in "${english}"`);
		converters.push(TOKENS[token][1]);
		return TOKENS[token][0];
	}).join('');
	return { pattern: new RegExp(`^${source}$`), converters, french };
});

export function translateProblem(problem: string) {
	for (const { pattern, converters, french } of RULES) {
		const match = pattern.exec(problem);
		if (!match) continue;
		const translated = french.replace(/\{(\d)\}/g, (_, i) => converters[i - 1](match[i]))
			.replace(/\bde (?=[AEIOUYÂÉÈÊÎÔ])/g, "d'");
		return translated.charAt(0).toUpperCase() + translated.slice(1);
	}
	return problem;
}

export function translateProblems(problems: string[]) {
	return problems.map(translateProblem);
}
