export const StatNames: { [id: string]: TranslationString } = {
	hp: "PV",
	atk: "Attaque", "atk:grammar": "fs",
	def: "Défense", "def:grammar": "fs",
	spa: "Attaque Spéciale", "spa:grammar": "fs",
	spd: "Défense Spéciale", "spd:grammar": "fs",
	spe: "Vitesse", "spe:grammar": "fs",
	accuracy: "Précision", "accuracy:grammar": "fs",
	evasion: "Esquive", "evasion:grammar": "fs",
	spc: "Spécial", "spc:grammar": "ms",

	// n.b. used in "stats were lowered" battle messages,
	// so it should be lowercase (unlike "Stats" in ui.ts)
	stats: "stats", "stats:grammar": "fp",
};

export const StatMediumNames: { [id: string]: TranslationString } = {
	hp: "PV", atk: "Attaque", def: "Défense",
	spa: "Atq. Spé.", spd: "Déf. Spé.", spe: "Vitesse",
	accuracy: "Précision", evasion: "Esquive", spc: "Spécial",
};

export const StatShortNames: { [id: string]: TranslationString } = {
	hp: "PV", atk: "Atq", def: "Déf", spa: "ASp", spd: "DSp", spe: "Vit", spc: "Spé",
};

export const TypeNames: { [id: string]: TranslationString } = {
	Bug: "Insecte",
	Dark: "Ténèbres",
	Dragon: "Dragon",
	Electric: "Électrik",
	Fairy: "Fée",
	Fighting: "Combat",
	Fire: "Feu",
	Flying: "Vol",
	Ghost: "Spectre",
	Grass: "Plante",
	Ground: "Sol",
	Ice: "Glace",
	Normal: "Normal",
	Poison: "Poison",
	Psychic: "Psy",
	Rock: "Roche",
	Steel: "Acier",
	Stellar: "Stellaire",
	Water: "Eau",
	"???": "???",
};

export const NatureNames: { [id: string]: TranslationString } = {
	Adamant: "Rigide",
	Bashful: "Pudique",
	Bold: "Assuré",
	Brave: "Brave",
	Calm: "Calme",
	Careful: "Prudent",
	Docile: "Docile",
	Gentle: "Gentil",
	Hardy: "Hardi",
	Hasty: "Pressé",
	Impish: "Malin",
	Jolly: "Jovial",
	Lax: "Lâche",
	Lonely: "Solo",
	Mild: "Doux",
	Modest: "Modeste",
	Naive: "Naïf",
	Naughty: "Mauvais",
	Quiet: "Discret",
	Quirky: "Bizarre",
	Rash: "Foufou",
	Relaxed: "Relax",
	Sassy: "Malpoli",
	Serious: "Sérieux",
	Timid: "Timide",
};

export const GenderNames: { [id: string]: TranslationString } = {
	M: "Mâle",
	F: "Femelle",
	N: "Asexué",
};

export const StatusNames: { [id: string]: TranslationString } = {
	brn: "BRÛ",
	par: "PAR",
	slp: "SOM",
	frz: "GEL",
	psn: "PSN",
	tox: "PSN",
	fnt: "K.O.",
	confusion: "Confus",
};

export const TargetNames: { [id: string]: TranslationString } = {
	normal: "Peut cibler un allié ou un adversaire adjacent",
	normalDoubles: "Peut cibler l’allié ou un adversaire",
	normalSingles: "Touche l’adversaire",
	normalFFA: "Peut cibler n’importe quel adversaire",
	self: "Affecte le lanceur",
	adjacentAlly: "Peut cibler un allié adjacent",
	adjacentAllyDoubles: "Affecte votre allié",
	adjacentAllySingles: "Échoue toujours en Combat Simple",
	adjacentAllyOrSelf: "Peut cibler le lanceur ou un allié adjacent",
	adjacentAllyOrSelfDoubles: "Peut cibler le lanceur ou son allié",
	adjacentFoe: "Peut cibler un adversaire adjacent",
	allAdjacentFoes: "Touche les adversaires adjacents",
	allAdjacentFoesDoubles: "Touche les deux adversaires",
	foeSide: "Affecte le camp adverse",
	allySide: "Affecte le camp du lanceur",
	allyTeam: "Affecte l’équipe du lanceur",
	allAdjacent: "Touche les alliés et adversaires adjacents",
	allAdjacentDoubles: "Touche l’allié et les deux adversaires",
	allAdjacentFFA: "Touche tous les adversaires",
	any: "Peut cibler un Pokémon éloigné en Combat Triple",
	all: "Affecte tous les Pokémon",
	scripted: "Cible choisie automatiquement",
	randomNormal: "Touche un adversaire adjacent au hasard",
	randomNormalDoubles: "Touche un adversaire au hasard",
	allies: "Affecte le lanceur et ses alliés",
};

// from veekun/Poképédia who presumably got it from Pokédex 3D Pro
// Stadium 2 names in comments
export const EggGroupNames: { [id: string]: TranslationString } = {
	Monster: "Monstrueux",
	"Water 1": "Aquatique 1",
	Bug: "Insectoïde",
	Flying: "Aérien",
	Field: "Terrestre",
	Fairy: "Féerique",
	Grass: "Végétal",
	"Human-Like": "Humanoïde",
	"Water 3": "Aquatique 3",
	Mineral: "Minéral",
	Amorphous: "Amorphe",
	"Water 2": "Aquatique 2",
	Ditto: "Métamorph",
	Dragon: "Draconique",
	Undiscovered: "Inconnu",
};

export const ColorNames: { [id: string]: TranslationString } = {
	Black: "Noir",
	Blue: "Bleu",
	Brown: "Brun",
	Gray: "Gris",
	Green: "Vert",
	Pink: "Rose",
	Purple: "Violet",
	Red: "Rouge",
	White: "Blanc",
	Yellow: "Jaune",
};
