import type { TranslationCatalog } from '../../../sim/dex-text';

// Translations useful for clients, servers, and third parties
// Battle UI, tooltips, dexes, etc
export const translations: TranslationCatalog = {
	// #region Generic
	// ==================================================================

	// TRANSLATORS: a label, like "Ability: Intimidate"
	"{LABEL}: ": "{LABEL} : ",
	"{PERCENT}%": "{PERCENT} %",
	// TRANSLATORS: as a value, like "Ability: None"
	"None": "Aucun",
	"(no item)": "(aucun objet)",
	"(no ability)": "(aucun talent)",
	"(no weather)": "(aucune météo)",
	// TRANSLATORS: a side condition on the opponent's side, like "Foe's Stealth Rock"
	"Foe's {CONDITION}": "{CONDITION} adverse",

	// TRANSLATORS: for constructing lists
	"{FIRST} or {SECOND}": "{FIRST} ou {SECOND}",
	"{FIRST} and {SECOND}": "{FIRST} et {SECOND}",
	", {NEXT}": ", {NEXT}",
	", or {LAST}": " ou {LAST}",
	", and {LAST}": " et {LAST}",
	// TRANSLATORS: this is for lists of users specifically
	// TRANSLATORS: (languages with counters should use the "person" counter)
	", and {NUMBER} others": " et {NUMBER} autres",

	// #endregion Generic

	// #region Dex
	// ==================================================================

	"Pokémon": "Pokémon",
	"Move": "Capacité", // NOT USED
	"Moves": "Capacités",
	"Item": "Objet",
	"Items": "Objets",
	"Ability": "Talent",
	"Abilities": "Talents",
	"Hidden Ability": "Talent caché",
	// TRANSLATORS: "" as in a Pokémon's type; "kind" as in kind of tournament or help ticket
	"Type": {
		"": "Type",
		"kind": "Type",
	},
	"Types": "Types",
	"Nature": "Nature",
	"Category": "Catégorie",
	"Categories": "Catégories",
	"Gender": "Sexe",
	"Egg Group": "Groupe Œuf", // NOT USED
	"Egg Groups": "Groupes Œuf",
	"Tag": "Étiquette", // NOT USED
	"Article": "Article",
	"Articles": "Articles", // NOT USED
	"Tier": "Tier", // NOT USED
	"Tiers": "Tiers",
	"Format": "Format",
	"Formats": "Formats", // NOT USED
	"Color": "Couleur",
	// TRANSLATORS: "" as in a form you fill in; "like forme" as in a Pokémon's form/forme
	"Form": {
		"": "Formulaire",
		"like forme": "Forme", // NOT USED
	},
	"Forme": "Forme", // NOT USED
	"Dex#": "N° Dex",
	"Generation": "Génération",
	// TRANSLATORS: intentionally chosen to be very short. do not go longer than three letters for this one
	"Gen {NUMBER}": "Gén {NUMBER}",
	"Evolution": "Évolution",
	"Pre-Evolution": "Pré-évolution",
	"Does Not Evolve": "N’évolue pas",

	// TRANSLATORS: /dt details
	"Height": "Taille",
	"{NUMBER} m": "{NUMBER} m",
	"Weight": "Poids",
	"{NUMBER} kg": "{NUMBER} kg",
	"Crit rate": "Taux de critique",
	// TRANSLATORS: "" as in user account; "pokemon" as in someone who uses an item/move
	"User": {
		"": "Utilisateur",
		"pokemon": "Utilisateur",
	},
	"Required move": "Capacité requise",
	"Target": "Cible",
	"Z-Crystal": "Cristal Z",
	"Dynamax power": "Puissance Dynamax",
	"Past gens only": "Anciennes générations uniquement",
	"Fling base power": "Puissance de Dégommage",
	"Fling effect": "Effet de Dégommage",
	"Natural Gift type": "Type de Don Naturel",
	"Natural Gift base power": "Puissance de Don Naturel",

	// #endregion Dex

	// #region Teambuilder
	// ==================================================================

	"Shiny": "Chromatique",
	"Happiness": "Bonheur",
	"Level": "Niveau",
	"Nickname": "Surnom",
	// TRANSLATORS: only the EV vs IV distinction is important
	// TRANSLATORS: the English speaking community likes to distinguish all of these,
	// TRANSLATORS: but other languages don't need to
	"EV": "EV", // NOT USED
	"EVs": "EV",
	"IV": "IV", // NOT USED
	"IVs": "IV",
	"DVs": "DV",
	"AV": "AV", // NOT USED
	"AVs": "AV",
	"Point": "Point", // NOT USED
	"Points": "Points",
	// TRANSLATORS: used in Teambuilder, so it should be capitalized (unlike "stats" in names.ts)
	"Stats": "Stats",
	"Team": "Équipe",
	// TRANSLATORS: "Teams" as in "plural of Team"
	"Teams": "Équipes", // NOT USED
	"Teams List": "Liste des équipes", // NOT USED
	"Tera {TYPE}": "Téra {TYPE}",
	// TRANSLATORS: the Tera type label in the team editor (the battle button uses "Tera {TYPE}" with the type's icon)
	"Tera": "Téra",

	// TRANSLATORS: search result headings
	// TRANSLATORS: "Usually useless" is intentionally evasive
	// TRANSLATORS: only for moves that are outclassed or widely considered obviously bad
	// TRANSLATORS: (to avoid arguments about what we're recommending)
	"Usually useless moves": "Capacités généralement inutiles",
	"Sketched moves": "Capacités via Gribouille",
	"Useless sketched moves": "Capacités inutiles via Gribouille",
	"Special Event Ability": "Talent d’événement",
	"Situational Abilities": "Talents situationnels",
	"Unviable Abilities": "Talents peu viables",
	"Illegal Pokémon": "Pokémon illégaux",
	"Illegal results": "Résultats illégaux",
	"CAP moves": "Capacités CAP",
	"Glitch": "Glitch",
	"{TYPE}-type Pokémon": "Pokémon de type {TYPE}",
	"{TYPE}-type moves": "Capacités de type {TYPE}",
	"{CATEGORY} moves": "Capacités de catégorie {CATEGORY}",
	"{ABILITY} Pokémon": "Pokémon avec {ABILITY}",
	"Specific to {VALUE}": "Spécifique à {VALUE}",
	"Generation {NUMBER}": "Génération {NUMBER}",

	// #endregion Teambuilder

	// #region Battle
	// ==================================================================

	"Mega Evolution": "Méga-Évolution",
	"Z-Power": "Force Z",
	"Z-Effect": "Effet Z",
	"Dynamax": "Dynamax",
	"Dynamax Level": "Niveau Dynamax",
	"Ultra Burst": "Ultra-Explosion",

	// TRANSLATORS: type effectiveness
	"Super effective": "Super efficace",
	"Extremely effective": "Extrêmement efficace",
	"Effective": "Efficace", // NOT USED
	"Not very effective": "Pas très efficace",
	"Mostly ineffective": "Très peu efficace",
	"No effect": "Aucun effet",
	"Weak": "Faible",
	"Resist": "Résiste",
	"Immune": "Immunisé", // NOT USED

	// TRANSLATORS: battle tooltips
	"Usually moves first (priority +{PRIORITY}).": "Agit généralement en premier (priorité +{PRIORITY}).",
	"Nearly always moves first (priority +{PRIORITY}).": "Agit presque toujours en premier (priorité +{PRIORITY}).",
	"Nearly always moves last (priority \u2212{PRIORITY}).": "Agit presque toujours en dernier (priorité \u2212{PRIORITY}).",
	"Fails if current HP is {HP}.": "Échoue si les PV actuels sont de {HP}.",
	"KOs yourself if current HP is exactly {HP}.": "Met le lanceur K.O. si ses PV actuels sont exactement de {HP}.",
	"(Transformed into {SPECIES})": "(Transformé en {SPECIES})",
	"(Changed forme: {SPECIES})": "(Forme modifiée : {SPECIES})",
	"Possible Illusion #{NUMBER}": "Illusion possible n°{NUMBER}",
	"({HP}/{MAXHP} pixels)": "({HP}/{MAXHP} pixels)",
	"Would take if ability removed: {PERCENT}%": "Dégâts si le talent est retiré : {PERCENT} %",
	"Next damage: {PERCENT}%": "Prochains dégâts : {PERCENT} %",
	"Turns asleep: {NUMBER}": "Tours endormi : {NUMBER}",
	"(More than 4 moves is usually a sign of Illusion Zoroark/Zorua.)": "(Plus de 4 capacités indiquent généralement un Zoroark/Zorua avec Illusion.)",
	"(Pressure is not visible in Gen 3, so in certain situations, the exact amount of PP used may be unknown.)": "(Pression n’est pas visible en Génération 3 ; dans certaines situations, le nombre exact de PP utilisés peut donc être inconnu.)",
	"(Your opponent has two indistinguishable Pokémon, making it impossible for you to tell which one has which moves/ability/item.)": "(Votre adversaire a deux Pokémon impossibles à distinguer : vous ne pouvez donc pas savoir lequel possède quelles capacités, quel talent ou quel objet.)",
	"(no conditions)": "(aucun effet en cours)",
	"({NUMBER} turn)": "({NUMBER} tour)",
	"({NUMBER} turns)": "({NUMBER} tours)",
	"(After stat modifiers:)": "(Après modificateurs de stats :)",
	"Calls {MOVE}": "Appelle {MOVE}",
	"(base: {VALUE})": "(base : {VALUE})",
	"({LOW} to {HIGH})": "({LOW} à {HIGH})",
	"(revealed)": "(révélée)",
	"{LOW} to {HIGH}": "{LOW} à {HIGH}",
	"(before stat stage changes)": "(avant modifications des stats)",
	"(before external modifiers)": "(avant modificateurs externes)",
	"<strong>{EFFECT}</strong> vs. {POKEMON}": "<strong>{EFFECT}</strong> contre {POKEMON}",
	"Base power vs. {POKEMON}": "Puissance contre {POKEMON}",
	" or ": " ou ",

	// #endregion Battle
};
