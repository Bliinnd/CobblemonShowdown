export const AbilitiesText: { [id: IDEntry]: AbilityText } = {
	noability: {
		name: "Aucun talent",
		shortDesc: "N’a aucun effet.",
	},
	adaptability: {
		name: "Adaptabilité",
		// Official flavor text: "Quand le Pokémon utilise une capacité du même type que lui, le bonus de puissance qu'elle reçoit est encore plus important que normalement."
		desc: "Les capacités de ce Pokémon qui correspondent à l’un de ses types bénéficient d’un bonus de même type (STAB) de 2 au lieu de 1,5.",
		shortDesc: "Le bonus de même type (STAB) de ce Pokémon est de 2 au lieu de 1,5.",
	},
	aerilate: {
		name: "Peau Céleste",
		// Official flavor text: "Les capacités de type Normal deviennent de type Vol. Leur puissance augmente légèrement."
		desc: "Les capacités de type Normal de ce Pokémon deviennent de type Vol et voient leur puissance multipliée par 1,2. Cet effet s’applique après les autres effets qui changent le type d’une capacité, mais avant ceux de Déluge Plasmique et d’Électrisation.",
		shortDesc: "Les capacités Normal de ce Pokémon deviennent de type Vol et ont une puissance ×1,2.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	aftermath: {
		name: "Boom Final",
		// Official flavor text: "Si le Pokémon est mis K.O. par une attaque directe, il inflige des dégâts à l’attaquant avant de s’évanouir."
		desc: "Si ce Pokémon est mis K.O. par une attaque de contact, le lanceur de cette attaque perd 1/4 de ses PV max, arrondi à l’inférieur. Cet effet est empêché si le lanceur a le talent Garde Magik ou si un Pokémon actif a le talent Moiteur.",
		shortDesc: "Si ce Pokémon est mis K.O. par une attaque de contact, l’attaquant perd 1/4 de ses PV max.",

		damage: "  {POKEMON} est blessé !",
	},
	airlock: {
		name: "Air Lock",
		shortDesc: "Tant que ce Pokémon est actif, les effets de la météo sont annulés.",

		start: "  Les effets de la météo se dissipent !",
	},
	analytic: {
		name: "Analyste",
		// Official flavor text: "Augmente la puissance des capacités du Pokémon s’il attaque en dernier."
		desc: "La puissance de la capacité de ce Pokémon est multipliée par 1,3 s’il est le dernier à agir dans le tour. N’affecte pas Vœu Destructeur et Prescience.",
		shortDesc: "Les attaques de ce Pokémon ont une puissance ×1,3 s’il est le dernier à agir dans le tour.",
	},
	angerpoint: {
		name: "Colérique",
		// Official flavor text: "Si le Pokémon subit un coup critique, il entre dans une colère noire qui augmente son Attaque au maximum."
		desc: "Si ce Pokémon, mais pas son clone, subit un coup critique, son Attaque augmente de 12 niveaux.",
		shortDesc: "Si ce Pokémon (pas son clone) subit un coup critique, son Attaque augmente de 12 niveaux.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		boost: "  {POKEMON} monte son Attaque au maximum !",
	},
	angershell: {
		name: "Courroupace",
		// Official flavor text: "Le Pokémon enrage s’il a moins de la moitié de ses PV après avoir subi une attaque. Sa Déf. et sa Déf. Spé. baissent, et son Atq., son Atq. Spé. et sa Vit. augmentent."
		desc: "Quand ce Pokémon a plus de 1/2 de ses PV max et qu’une attaque fait tomber ses PV à 1/2 ou moins de ses PV max, son Attaque, son Attaque Spéciale et sa Vitesse augmentent d’un niveau, et sa Défense et sa Défense Spéciale baissent d’un niveau. Cet effet s’applique après tous les coups d’une capacité à coups multiples. Cet effet est empêché si l’effet secondaire de la capacité a été supprimé par le talent Sans Limite.",
		shortDesc: "À 1/2 de ses PV max ou moins : Atq, Atq Spé et Vit +1, Déf et Déf Spé -1.",
	},
	anticipation: {
		name: "Anticipation",
		// Official flavor text: "Le Pokémon devine si l'adversaire connaît une capacité dangereuse pour lui."
		desc: "À son entrée au combat, ce Pokémon est averti si un Pokémon adverse possède une attaque d’un type super efficace contre lui, ou une capacité qui met K.O. en un coup. Cet effet considère Puissance Cachée comme étant de son type déterminé, et toutes les autres capacités comme étant de leur type d’origine.",
		shortDesc: "À son entrée, ce Pokémon frissonne si un adversaire a une capacité super efficace ou OHKO.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  {POKEMON} est tout tremblant !",
	},
	arenatrap: {
		name: "Piège Sable",
		// Official flavor text: "Empêche l'adversaire de quitter le terrain."
		desc: "Empêche les Pokémon adverses de choisir d’être remplacés, sauf s’ils ne touchent pas le sol, s’ils tiennent une Carapace Mue ou s’ils sont de type Spectre.",
		shortDesc: "Empêche les Pokémon adverses de choisir d’être remplacés, sauf s’ils ne touchent pas le sol.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	armortail: {
		name: "Armure Caudale",
		// Official flavor text: "Une étrange queue recouvre la tête du Pokémon, ce qui empêche ce dernier et ses alliés d’être visés par une capacité prioritaire."
		desc: "Les capacités prioritaires utilisées par des Pokémon adverses et ciblant ce Pokémon ou ses alliés n’ont aucun effet.",
		shortDesc: "Ce Pokémon et ses alliés sont protégés des capacités prioritaires adverses.",

		block: "#damp",
	},
	aromaveil: {
		name: "Aroma-Voile",
		// Official flavor text: "Protège le Pokémon et ses alliés des effets limitant le libre arbitre."
		desc: "Ce Pokémon et ses alliés ne peuvent pas être affectés par Attraction, Entrave, Encore, Anti-Soin, Provoc ou Tourmente.",
		shortDesc: "Protège le lanceur et ses alliés d’Attraction, Entrave, Encore, Anti-Soin, Provoc et Tourmente.",

		block: "  {POKEMON} est protégé par Aroma-Voile !",
	},
	asone: {
		name: "Osmose Équine",
		shortDesc: "Voir « Osmose Équine (Blizzeval) » et « Osmose Équine (Spectreval) ».",

		start: "  {POKEMON} a deux talents !",
	},
	asoneglastrier: {
		name: "Osmose Équine (Blizzeval)", // PS-style disambiguator (not part of the official name)
		shortDesc: "Combinaison des talents Tension et Blanche Ruade.",
	},
	asonespectrier: {
		name: "Osmose Équine (Spectreval)", // PS-style disambiguator (not part of the official name)
		shortDesc: "Combinaison des talents Tension et Sombre Ruade.",
	},
	aurabreak: {
		name: "Aura Inversée",
		// Official flavor text: "Inverse l’effet des talents « Aura » afin que ceux-ci baissent la puissance des capacités affectées au lieu de l’augmenter."
		desc: "Tant que ce Pokémon est actif, les effets des talents Aura Ténébreuse et Aura Féérique sont inversés : la puissance des capacités de type Ténèbres et Fée, respectivement, est multipliée par 3/4 au lieu de 1,33.",
		shortDesc: "Tant que ce Pokémon est actif, le modificateur d’Aura Ténébreuse et d’Aura Féérique est de ×0,75.",

		start: "  {POKEMON} inverse toutes les auras !",
	},
	auraguard: {
		name: null, // NEEDS TRANSLATION
		shortDesc: "Ce Pokémon subit 1/2 des dégâts des attaques de contact.",
	},
	baddreams: {
		name: "Mauvais Rêve",
		// Official flavor text: "Inflige des dégâts aux ennemis endormis."
		desc: "Les Pokémon adverses endormis perdent 1/8 de leurs PV max, arrondi à l’inférieur, à la fin de chaque tour.",
		shortDesc: "Les adversaires endormis perdent 1/8 de leurs PV max à la fin de chaque tour.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		damage: "  {POKEMON} a le sommeil agité !",
	},
	ballfetch: {
		name: "Ramasse Ball",
		shortDesc: "Aucune utilité en combat.",
	},
	battery: {
		name: "Batterie",
		shortDesc: "Les alliés de ce Pokémon voient la puissance de leurs attaques spéciales multipliée par 1,3.",
	},
	battlearmor: {
		name: "Armurbaston",
		shortDesc: "Ce Pokémon ne peut pas subir de coup critique.",
	},
	battlebond: {
		name: "Synergie",
		// Official flavor text: "En battant un ennemi, ce Pokémon renforce ses liens avec son Dresseur, ce qui augmente son Attaque, son Attaque Spéciale et sa Vitesse."
		desc: "Si ce Pokémon est un Amphinobi, son Attaque, son Attaque Spéciale et sa Vitesse augmentent d’un niveau s’il attaque et met K.O. un autre Pokémon. Cet effet ne peut se produire qu’une fois par combat.",
		shortDesc: "Après avoir mis un Pokémon K.O. : Attaque, Atq Spé et Vitesse +1. Une fois par combat.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		activate: "  {POKEMON} sent la force de la synergie !",
		transform: "{POKEMON} se transforme en Sachanobi !",
	},
	beadsofruin: {
		name: "Perles du Fléau",
		shortDesc: "Les Pokémon actifs sans ce talent voient leur Défense Spéciale multipliée par 0,75.",

		start: "  Les Perles du Fléau {POKEMON:de} affaiblissent la Défense Spéciale des Pokémon alentour !",
	},
	beastboost: {
		name: "Boost Chimère",
		// Official flavor text: "Augmente la stat la plus élevée du Pokémon quand il met K.O. un autre Pokémon."
		desc: "La stat la plus élevée de ce Pokémon augmente d’un niveau s’il attaque et met K.O. un autre Pokémon. Les changements de niveaux de stats ne sont pas pris en compte. En cas d’égalité entre plusieurs stats, l’ordre de priorité est : Attaque, Défense, Attaque Spéciale, Défense Spéciale, puis Vitesse.",
		shortDesc: "La stat la plus élevée de ce Pokémon augmente de 1 s’il attaque et met K.O. un autre Pokémon.",
	},
	berserk: {
		name: "Folle Furie",
		// Official flavor text: "Augmente l’Attaque Spéciale du Pokémon lorsque ses PV tombent à la moitié à cause d’une attaque de l’adversaire."
		desc: "Quand ce Pokémon a plus de 1/2 de ses PV max et qu’une attaque fait tomber ses PV à 1/2 ou moins de ses PV max, son Attaque Spéciale augmente d’un niveau. Cet effet s’applique après tous les coups d’une capacité à coups multiples. Cet effet est empêché si l’effet secondaire de la capacité a été supprimé par le talent Sans Limite.",
		shortDesc: "L’Atq Spé de ce Pokémon augmente de 1 quand ses PV tombent à 1/2 de ses PV max ou moins.",
	},
	bigpecks: {
		name: "Cœur de Coq",
		shortDesc: "Empêche les autres Pokémon de baisser le niveau de Défense de ce Pokémon.",
	},
	blaze: {
		name: "Brasier",
		// Official flavor text: "Augmente la puissance des capacités de type Feu du Pokémon quand il a perdu une certaine quantité de PV."
		desc: "Quand ce Pokémon a 1/3 ou moins de ses PV max, arrondi à l’inférieur, sa stat offensive est multipliée par 1,5 lorsqu’il utilise une attaque de type Feu.",
		shortDesc: "À 1/3 de ses PV max ou moins, la stat offensive de ce Pokémon est ×1,5 avec les attaques Feu.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	bulletproof: {
		name: "Pare-Balles",
		shortDesc: "Ce Pokémon est immunisé contre les capacités balles et bombes.",
	},
	cheekpouch: {
		name: "Bajoues",
		// Official flavor text: "Le Pokémon récupère des PV lorsqu’il consomme n’importe quelle Baie en plus de bénéficier de ses effets habituels."
		desc: "Si ce Pokémon mange une Baie qu’il tient, il récupère 1/3 de ses PV max, arrondi à l’inférieur, en plus de l’effet de la Baie. Cet effet peut aussi s’activer après les effets de Piqûre, Dégommage, Picore, Garde-à-Joues et Thérémonie si la Baie mangée a eu un effet sur ce Pokémon.",
		shortDesc: "Si ce Pokémon mange une Baie, il récupère 1/3 de ses PV max après l’effet de la Baie.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	chillingneigh: {
		name: "Blanche Ruade",
		// Official flavor text: "Quand le Pokémon met un ennemi K.O., il émet un hennissement glaçant, ce qui augmente son Attaque."
		desc: "L’Attaque de ce Pokémon augmente d’un niveau s’il attaque et met K.O. un autre Pokémon.",
		shortDesc: "L’Attaque de ce Pokémon augmente d’un niveau s’il attaque et met K.O. un autre Pokémon.",
	},
	chlorophyll: {
		name: "Chlorophylle",
		// Official flavor text: "Augmente la Vitesse du Pokémon s'il y a du soleil."
		desc: "Si le Soleil est actif, la Vitesse de ce Pokémon est doublée. Cet effet est empêché si ce Pokémon tient un Parapluie Solide.",
		shortDesc: "Si le Soleil est actif, la Vitesse de ce Pokémon est doublée.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	clearbody: {
		name: "Corps Sain",
		shortDesc: "Empêche les autres Pokémon de baisser les niveaux de stats de ce Pokémon.",
	},
	cloudnine: {
		name: "Ciel Gris",
		shortDesc: "Tant que ce Pokémon est actif, les effets de la météo sont annulés.",

		start: "#airlock",
	},
	colorchange: {
		name: "Homochromie",
		// Official flavor text: "Lorsque le Pokémon est touché par une capacité, il prend le type de celle-ci."
		desc: "Le type de ce Pokémon devient celui de la dernière capacité qui l’a touché, sauf si ce type est déjà l’un des siens. Cet effet s’applique après tous les coups d’une capacité à coups multiples. Cet effet est empêché si l’effet secondaire de la capacité a été supprimé par le talent Sans Limite.",
		shortDesc: "Le type de ce Pokémon devient celui de la capacité qui le touche, sauf s’il a déjà ce type.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	comatose: {
		name: "Hypersommeil",
		// Official flavor text: "Le Pokémon rêve en permanence et ne se réveille jamais. Il est capable d’attaquer normalement tout en dormant."
		desc: "Ce Pokémon est considéré comme endormi et ne peut pas être affecté par une altération de statut majeure ni par Bâillement.",
		shortDesc: "Ce Pokémon ne peut pas subir d’altération de statut et est considéré comme endormi.",

		start: "  {POKEMON} est en Hypersommeil !",
	},
	commander: {
		name: "Commandant",
		// Official flavor text: "Si un Oyacata allié est sur le terrain quand ce Pokémon rejoint le combat, ce dernier entre dans sa bouche et devient son commandant."
		desc: "Si ce Pokémon est un Nigirigon et qu’un Oyacata est un allié actif, ce Pokémon entre dans la bouche de l’Oyacata. L’Attaque, l’Attaque Spéciale, la Vitesse, la Défense et la Défense Spéciale de l’Oyacata augmentent de deux niveaux. Pendant l’effet, l’Oyacata ne peut pas être remplacé, ce Pokémon ne peut choisir aucune action, et les attaques qui le ciblent l’évitent, mais il subit toujours les dégâts indirects. Si ce Pokémon est K.O. pendant l’effet, un Pokémon peut entrer au combat pour le remplacer, mais l’Oyacata ne peut toujours pas être remplacé. Si l’Oyacata est K.O. pendant l’effet, ce Pokémon peut de nouveau choisir une action.",
		shortDesc: "Si un allié est Oyacata : ce Pokémon ne peut ni agir ni être touché, toutes les stats d’Oyacata +2.",

		activate: "  {POKEMON} a été avalé par {TARGET} et devient son commandant.",
	},
	competitive: {
		name: "Battant",
		// Official flavor text: "Augmente beaucoup l’Attaque Spéciale du Pokémon quand ses stats ont été baissées par l’adversaire."
		desc: "L’Attaque Spéciale de ce Pokémon augmente de deux niveaux pour chacun de ses niveaux de stats baissé par un Pokémon adverse.",
		shortDesc: "L’Atq Spé de ce Pokémon augmente de 2 pour chacune de ses stats baissée par un adversaire.",
	},
	compoundeyes: {
		name: "Œil Composé",
		shortDesc: "La Précision des capacités de ce Pokémon est multipliée par 1,3.",
	},
	contrary: {
		name: "Contestation",
		shortDesc: "Si un niveau de stat de ce Pokémon devait augmenter, il baisse à la place, et inversement.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	corrosion: {
		name: "Corrosion",
		shortDesc: "Ce Pokémon peut empoisonner ou empoisonner gravement un Pokémon quel que soit son type.",
	},
	costar: {
		name: "Collab",
		shortDesc: "À son entrée au combat, ce Pokémon copie tous les changements de niveaux de stats de son allié.",
	},
	cottondown: {
		name: "Effilochage",
		// Official flavor text: "Quand le Pokémon est touché par une attaque, il dissémine des aigrettes qui diminuent la Vitesse de tout le monde, sauf la sienne."
		desc: "Quand ce Pokémon est touché par une attaque, la Vitesse de tous les autres Pokémon sur le terrain baisse d’un niveau.",
		shortDesc: "Si ce Pokémon est touché, la Vitesse de tous les autres Pokémon sur le terrain baisse d’un niveau.",
	},
	cudchew: {
		name: "Ruminant",
		shortDesc: "Si ce Pokémon mange une Baie, il la mange de nouveau à la fin du tour suivant.",
	},
	curiousmedicine: {
		name: "Breuvage Suspect",
		shortDesc: "À son entrée au combat, les niveaux de stats des alliés de ce Pokémon reviennent à 0.",
	},
	cursedbody: {
		name: "Corps Maudit",
		// Official flavor text: "Quand le Pokémon est touché par une capacité adverse, il inflige parfois Entrave sur celle-ci."
		desc: "Si ce Pokémon est touché par une attaque, il y a 30 % de chances que cette capacité soit bloquée, sauf si l’une des capacités de l’attaquant est déjà bloquée.",
		shortDesc: "Si ce Pokémon est touché par une attaque, 30 % de chances que cette capacité soit bloquée.",
	},
	cutecharm: {
		name: "Joli Sourire",
		// Official flavor text: "Peut séduire l'attaquant lorsque le Pokémon subit une attaque directe."
		desc: "Un Pokémon qui entre en contact avec ce Pokémon a 30 % de chances de tomber amoureux s’il est du sexe opposé.",
		shortDesc: "30 % de chances de rendre amoureux les Pokémon du sexe opposé qui entrent en contact.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	damp: {
		name: "Moiteur",
		// Official flavor text: "Le Pokémon augmente l'humidité de l'air, ce qui empêche tous les Pokémon d'utiliser des capacités explosives telles que Destruction."
		desc: "Tant que ce Pokémon est actif, Explosion, Caboche-Kaboum, Explo-Brume, Destruction et le talent Boom Final n’ont aucun effet.",
		shortDesc: "Empêche Explosion/Caboche-Kaboum/Explo-Brume/Destruction/Boom Final tant qu’il est actif.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		block: "  {SOURCE} ne peut pas utiliser la capacité {MOVE} !",
	},
	dancer: {
		name: "Danseuse",
		// Official flavor text: "Si n’importe quel Pokémon utilise une capacité dansante, le Pokémon utilise immédiatement cette danse lui aussi."
		desc: "Après qu’un autre Pokémon a utilisé une capacité dansante, ce Pokémon utilise la même capacité. La capacité copiée est soumise à tous les effets qui peuvent empêcher une capacité d’être exécutée. Une capacité utilisée grâce à ce talent ne peut pas être copiée à nouveau par d’autres Pokémon ayant ce talent.",
		shortDesc: "Après qu’un autre Pokémon a utilisé une capacité dansante, ce Pokémon utilise la même capacité.",
	},
	darkaura: {
		name: "Aura Ténébreuse",
		// Official flavor text: "Augmente la puissance des capacités de type Ténèbres de tous les Pokémon."
		desc: "Tant que ce Pokémon est actif, la puissance des capacités de type Ténèbres utilisées par les Pokémon actifs est multipliée par 1,33.",
		shortDesc: "Tant que ce Pokémon est actif, les capacités Ténèbres de tous les Pokémon ont une puissance ×1,33.",

		start: "  {POKEMON} dégage une aura ténébreuse !",
	},
	dauntlessshield: {
		name: "Égide Inflexible",
		shortDesc: "À son entrée au combat, la Défense de ce Pokémon augmente d’un niveau. Une fois par combat.",
		gen8: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	dazzling: {
		name: "Corps Coloré",
		// Official flavor text: "L’adversaire est abasourdi par le Pokémon, ce qui l’empêche de viser ce dernier et ses alliés avec une capacité prioritaire."
		desc: "Les capacités prioritaires utilisées par des Pokémon adverses et ciblant ce Pokémon ou ses alliés n’ont aucun effet.",
		shortDesc: "Ce Pokémon et ses alliés sont protégés des capacités prioritaires adverses.",

		block: "#damp",
	},
	defeatist: {
		name: "Défaitiste",
		// Official flavor text: "Le Pokémon devient défaitiste quand ses PV tombent à la moitié, et son Attaque et son Attaque Spéciale sont divisées par deux."
		desc: "Tant que ce Pokémon a 1/2 ou moins de ses PV max, son Attaque et son Attaque Spéciale sont divisées par deux.",
		shortDesc: "Tant que ce Pokémon a 1/2 de ses PV max ou moins, son Attaque et son Atq Spé sont divisées par deux.",
	},
	defiant: {
		name: "Acharné",
		// Official flavor text: "Augmente beaucoup l'Attaque du Pokémon quand ses stats sont baissées par l'adversaire."
		desc: "L’Attaque de ce Pokémon augmente de deux niveaux pour chacun de ses niveaux de stats baissé par un Pokémon adverse.",
		shortDesc: "L’Attaque de ce Pokémon augmente de 2 pour chacune de ses stats baissée par un adversaire.",
	},
	deltastream: {
		name: "Souffle Delta",
		// Official flavor text: "Altère les conditions météo pour annuler les faiblesses du type Vol."
		desc: "À son entrée au combat, la météo devient Vent mystérieux, qui supprime les faiblesses du type Vol des Pokémon de type Vol. Cette météo reste active jusqu’à ce que ce talent ne soit plus actif chez aucun Pokémon, ou que la météo soit changée par les talents Terre Finale ou Mer Primaire.",
		shortDesc: "À son entrée, un vent mystérieux souffle jusqu’à ce que ce talent ne soit plus actif en combat.",
	},
	desolateland: {
		name: "Terre Finale",
		// Official flavor text: "Altère les conditions météo pour neutraliser les attaques de type Eau."
		desc: "À son entrée au combat, la météo devient Soleil intense, qui inclut tous les effets du Soleil et empêche l’exécution des capacités offensives de type Eau. Cette météo reste active jusqu’à ce que ce talent ne soit plus actif chez aucun Pokémon, ou que la météo soit changée par les talents Souffle Delta ou Mer Primaire.",
		shortDesc: "À son entrée, un soleil intense brille jusqu’à ce que ce talent ne soit plus actif en combat.",
	},
	disguise: {
		name: "Fantômasque",
		// Official flavor text: "Le déguisement qui recouvre le corps du Pokémon est capable de le protéger d’une attaque."
		desc: "Si ce Pokémon est un Mimiqui, le premier coup qu’il subit au combat inflige 0 dégât neutre. Son déguisement est alors brisé, il passe en Forme Démasquée et perd 1/8 de ses PV max. Les dégâts de confusion brisent aussi le déguisement.",
		shortDesc: "(Mimiqui uniquement) Le premier coup qu’il subit est bloqué, et il perd 1/8 de ses PV à la place.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		block: "  Le déguisement absorbe l’attaque !",
		transform: "Le déguisement {POKEMON:de} tombe !",
	},
	download: {
		name: "Télécharge",
		// Official flavor text: "Le Pokémon compare la Défense et la Défense Spéciale de l’adversaire et, en fonction de la stat la plus basse, il augmente sa propre Attaque ou Attaque Spéciale."
		desc: "À son entrée au combat, l’Attaque ou l’Attaque Spéciale de ce Pokémon augmente d’un niveau selon la stat défensive cumulée la plus faible de tous les Pokémon adverses. L’Attaque augmente si leur Défense est plus faible, et l’Attaque Spéciale augmente si leur Défense Spéciale est égale ou plus faible.",
		shortDesc: "À son entrée, Attaque ou Atq Spé +1 selon la défense la plus faible des adversaires.",
	},
	dragonize: {
		name: "Peau Draconique",
		desc: "Les capacités de type Normal de ce Pokémon deviennent de type Dragon et voient leur puissance multipliée par 1,2. Cet effet s’applique après les autres effets qui changent le type d’une capacité, mais avant ceux de Déluge Plasmique et d’Électrisation.",
		shortDesc: "Les capacités Normal de ce Pokémon deviennent de type Dragon et ont une puissance ×1,2.",
	},
	dragonsmaw: {
		name: "Dent de Dragon",
		shortDesc: "La stat offensive de ce Pokémon est multipliée par 1,5 lorsqu’il utilise une attaque de type Dragon.",
	},
	drizzle: {
		name: "Crachin",
		shortDesc: "À son entrée au combat, ce Pokémon déclenche la Pluie.",
	},
	drought: {
		name: "Sécheresse",
		shortDesc: "À son entrée au combat, ce Pokémon déclenche le Soleil.",
	},
	dryskin: {
		name: "Peau Sèche",
		// Official flavor text: "Quand le soleil brille, le Pokémon perd des PV et subit plus de dégâts des capacités Feu, mais il regagne des PV lorsqu'il pleut ou s'il est touché par une capacité Eau."
		desc: "Ce Pokémon est immunisé contre les capacités de type Eau et récupère 1/4 de ses PV max, arrondi à l’inférieur, quand il est touché par une capacité de type Eau. La puissance des capacités de type Feu utilisées contre ce Pokémon est multipliée par 1,25. À la fin de chaque tour, ce Pokémon récupère 1/8 de ses PV max, arrondi à l’inférieur, si la météo est Pluie, et perd 1/8 de ses PV max, arrondi à l’inférieur, si la météo est Soleil. Les effets liés à la météo sont empêchés si ce Pokémon tient un Parapluie Solide.",
		shortDesc: "Soigné de 1/4 par l’Eau, de 1/8 par la Pluie ; blessé ×1,25 par le Feu, de 1/8 par le Soleil.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		damage: "#aftermath",
	},
	earlybird: {
		name: "Matinal",
		shortDesc: "Le compteur de sommeil de ce Pokémon baisse de 2 au lieu de 1.",
	},
	eartheater: {
		name: "Absorbe-Terre",
		// Official flavor text: "Si le Pokémon est touché par une capacité de type Sol, il regagne des PV au lieu de subir des dégâts."
		desc: "Ce Pokémon est immunisé contre les capacités de type Sol et récupère 1/4 de ses PV max, arrondi à l’inférieur, quand il est touché par une capacité de type Sol.",
		shortDesc: "Ce Pokémon récupère 1/4 de ses PV max s’il est touché par une capacité Sol ; immunité Sol.",
	},
	eelevate: {
		name: "Lévitaboost",
		desc: "Ce Pokémon est immunisé contre les attaques de type Sol et contre les effets de Picots, Pics Toxik, Toile Gluante et du talent Piège Sable. Les effets de Gravité, Racines, Anti-Air, Myria-Flèches et de la Balle Fer annulent cette immunité. Myria-Flèches peut toucher ce Pokémon comme s’il n’avait pas ce talent. La stat la plus élevée de ce Pokémon augmente d’un niveau s’il attaque et met K.O. un autre Pokémon. Les changements de niveaux de stats ne sont pas pris en compte. En cas d’égalité entre plusieurs stats, l’ordre de priorité est : Attaque, Défense, Attaque Spéciale, Défense Spéciale, puis Vitesse.",
		shortDesc: "Ce Pokémon est immunisé contre le Sol ; +1 à sa stat la plus élevée s’il met K.O. un autre Pokémon.",
	},
	effectspore: {
		name: "Pose Spore",
		// Official flavor text: "Peut paralyser, empoisonner ou endormir l'attaquant lorsque le Pokémon subit une attaque directe."
		desc: "Un Pokémon qui entre en contact avec ce Pokémon a 30 % de chances d’être empoisonné, paralysé ou endormi.",
		shortDesc: "30 % de chances d’empoisonner/paralyser/endormir ceux qui entrent en contact avec ce Pokémon.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	electricsurge: {
		name: "Créa-Élec",
		shortDesc: "À son entrée au combat, ce Pokémon déclenche Champ Électrifié.",
	},
	electromorphosis: {
		name: "Grecharge",
		shortDesc: "Ce Pokémon bénéficie de l’effet de Chargeur quand il est touché par une attaque.",

		start: "  {POKEMON} a été touché par la capacité {MOVE} et se charge en électricité !",
	},
	embodyaspectcornerstone: {
		name: "Force Mémorielle (Pierre)", // PS-style disambiguator (not part of the official name)
		shortDesc: "À son entrée au combat, la Défense de ce Pokémon augmente d’un niveau.",

		boost: "  {POKEMON} fait briller le Masque de la Pierre et sa Défense augmente !",
	},
	embodyaspecthearthflame: {
		name: "Force Mémorielle (Fourneau)", // PS-style disambiguator (not part of the official name)
		shortDesc: "À son entrée au combat, l’Attaque de ce Pokémon augmente d’un niveau.",

		boost: "  {POKEMON} fait briller le Masque du Fourneau et son Attaque augmente !",
	},
	embodyaspectteal: {
		name: "Force Mémorielle (Turquoise)", // PS-style disambiguator (not part of the official name)
		shortDesc: "À son entrée au combat, la Vitesse de ce Pokémon augmente d’un niveau.",

		boost: "  {POKEMON} fait briller le Masque Turquoise et sa Vitesse augmente !",
	},
	embodyaspectwellspring: {
		name: "Force Mémorielle (Puits)", // PS-style disambiguator (not part of the official name)
		shortDesc: "À son entrée au combat, la Défense Spéciale de ce Pokémon augmente d’un niveau.",

		boost: "  {POKEMON} fait briller le Masque du Puits et sa Défense Spéciale augmente !",
	},
	emergencyexit: {
		name: "Repli Tactique",
		// Official flavor text: "Le Pokémon évite les situations inutilement dangereuses. Quand ses PV tombent à la moitié, il se réfugie dans sa Poké Ball."
		desc: "Quand ce Pokémon a plus de 1/2 de ses PV max et subit des dégâts qui font tomber ses PV à 1/2 ou moins de ses PV max, il est immédiatement remplacé par un allié choisi. Cet effet s’applique après tous les coups d’une capacité à coups multiples. Cet effet est empêché si l’effet secondaire de la capacité a été supprimé par le talent Sans Limite. Cet effet s’applique aux dégâts directs comme indirects, sauf ceux de Malédiction et de Clonage à l’utilisation, de Cognobidon, de Balance et de la confusion.",
		shortDesc: "Ce Pokémon est remplacé quand ses PV tombent à 1/2 ou moins de ses PV max.",
	},
	fairyaura: {
		name: "Aura Féérique",
		// Official flavor text: "Augmente la puissance des capacités de type Fée de tous les Pokémon."
		desc: "Tant que ce Pokémon est actif, la puissance des capacités de type Fée utilisées par les Pokémon actifs est multipliée par 1,33.",
		shortDesc: "Tant que ce Pokémon est actif, les capacités Fée de tous les Pokémon ont une puissance ×1,33.",

		start: "  {POKEMON} dégage une aura féérique !",
	},
	filter: {
		name: "Filtre",
		shortDesc: "Ce Pokémon subit 3/4 des dégâts des attaques super efficaces.",
	},
	firemane: {
		name: "Crinière de Feu",
		shortDesc: "La stat offensive de ce Pokémon est multipliée par 1,5 lorsqu’il utilise une attaque de type Feu.",
	},
	flamebody: {
		name: "Corps Ardent",
		shortDesc: "Un Pokémon qui entre en contact avec ce Pokémon a 30 % de chances d’être brûlé.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	flareboost: {
		name: "Rage Brûlure",
		// Official flavor text: "Augmente la puissance des capacités spéciales quand le Pokémon est brûlé."
		desc: "Tant que ce Pokémon est brûlé, la puissance de ses attaques spéciales est multipliée par 1,5.",
		shortDesc: "Tant que ce Pokémon est brûlé, ses attaques spéciales ont une puissance ×1,5.",
	},
	flashfire: {
		name: "Torche",
		// Official flavor text: "Lorsque le Pokémon est touché par une capacité de type Feu, il absorbe la chaleur pour renforcer ses propres capacités Feu."
		desc: "Ce Pokémon est immunisé contre les capacités de type Feu. La première fois qu’il est touché par une capacité de type Feu, sa stat offensive est multipliée par 1,5 lorsqu’il utilise une attaque de type Feu, tant qu’il reste actif et possède ce talent. Si ce Pokémon est gelé, il ne peut pas être dégelé par des attaques de type Feu.",
		shortDesc: "Les attaques Feu de ce Pokémon infligent ×1,5 dégâts s’il est touché par une capacité Feu ; immunité Feu.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} augmente la puissance de ses capacités de type Feu !",
	},
	flowergift: {
		name: "Don Floral",
		// Official flavor text: "Augmente l’Attaque et la Défense Spéciale du Pokémon et de ses alliés lorsque le soleil brille."
		desc: "Si ce Pokémon est un Ceriflor et que le Soleil est actif, il passe en Forme Ensoleillée, et son Attaque et sa Défense Spéciale ainsi que celles de ses alliés sont multipliées par 1,5. Ces effets sont empêchés si le Pokémon tient un Parapluie Solide.",
		shortDesc: "Si le lanceur est Ceriflor et que le Soleil est actif, son Attaque et sa Déf Spé et celles de ses alliés sont ×1,5.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	flowerveil: {
		name: "Flora-Voile",
		// Official flavor text: "Empêche les alliés de type Plante de subir des baisses de stats et des altérations de statut."
		desc: "Les Pokémon de type Plante du côté de ce Pokémon ne peuvent pas voir leurs niveaux de stats baissés par d’autres Pokémon, ni subir d’altération de statut majeure infligée par d’autres Pokémon.",
		shortDesc: "Les Pokémon Plante de ce côté ne peuvent pas subir de baisse de stats ni d’altération de statut.",

		block: "  {POKEMON} est protégé par Flora-Voile !",
	},
	fluffy: {
		name: "Boule de Poils",
		// Official flavor text: "Divise par deux les dégâts des attaques directes subies par le Pokémon, mais double les dégâts des capacités de type Feu."
		desc: "Ce Pokémon subit 1/2 des dégâts des attaques de contact, mais le double de dégâts des capacités de type Feu.",
		shortDesc: "Ce Pokémon subit 1/2 des dégâts des attaques de contact, ×2 des capacités Feu.",
	},
	forecast: {
		name: "Météo",
		// Official flavor text: "Le Pokémon prend le type Eau, Feu ou Glace en fonction de la météo."
		desc: "Si ce Pokémon est un Morphéo, son type devient celui de la météo en cours, sauf Tempête de sable. Cet effet est empêché si ce Pokémon tient un Parapluie Solide et que la météo est Pluie ou Soleil.",
		shortDesc: "Le type de Morphéo devient celui de la météo en cours, sauf Tempête de sable.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	forewarn: {
		name: "Prédiction",
		// Official flavor text: "Révèle l’une des capacités de l’adversaire quand le combat commence."
		desc: "À son entrée au combat, ce Pokémon est averti de la capacité la plus puissante connue par un Pokémon adverse, choisie au hasard en cas d’égalité. Cet effet considère que les capacités qui mettent K.O. en un coup ont 150 de puissance, que Riposte, Voile Miroir et Fulmifer ont 120 de puissance, que toutes les autres attaques à puissance non spécifiée ont 80 de puissance, et que les capacités qui n’infligent pas de dégâts ont 1 de puissance.",
		shortDesc: "À son entrée au combat, ce Pokémon est averti de la capacité adverse la plus puissante.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  La capacité {MOVE} {TARGET:de} a été détectée !",
		activateNoTarget: "  Prédiction du {POKEMON} lui signale {MOVE}!",
	},
	friendguard: {
		name: "Garde-Ami",
		shortDesc: "Les alliés de ce Pokémon subissent 3/4 des dégâts des attaques des autres Pokémon.",
	},
	frisk: {
		name: "Fouille",
		shortDesc: "À son entrée au combat, ce Pokémon identifie les objets tenus par tous les Pokémon adverses.",
		gen5: {
			shortDesc: null, // NEEDS TRANSLATION
		},

		activate: "  {POKEMON} fouille {TARGET} et trouve {ITEM:indefinite:classified} !",
		activateNoTarget: "  {POKEMON} a décelé l'objet: {ITEM}!",
	},
	fullmetalbody: {
		name: "Métallo-Garde",
		shortDesc: "Empêche les autres Pokémon de baisser les niveaux de stats de ce Pokémon.",
	},
	furcoat: {
		name: "Toison Épaisse",
		shortDesc: "La Défense de ce Pokémon est doublée.",
	},
	galewings: {
		name: "Ailes Bourrasque",
		shortDesc: "Si ce Pokémon a tous ses PV, ses capacités de type Vol gagnent +1 en priorité.",
		gen6: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	galvanize: {
		name: "Peau Électrique",
		// Official flavor text: "Les capacités de type Normal deviennent de type Électrik. Leur puissance augmente légèrement."
		desc: "Les capacités de type Normal de ce Pokémon deviennent de type Électrik et voient leur puissance multipliée par 1,2. Cet effet s’applique après les autres effets qui changent le type d’une capacité, mais avant ceux de Déluge Plasmique et d’Électrisation.",
		shortDesc: "Les capacités Normal de ce Pokémon deviennent de type Électrik et ont une puissance ×1,2.",
	},
	gluttony: {
		name: "Gloutonnerie",
		// Official flavor text: "Si le Pokémon tient une Baie à manger en cas de PV bas, il la mange dès qu'il a perdu la moitié de ses PV."
		desc: "Quand ce Pokémon tient une Baie qui s’active normalement à 1/4 ou moins de ses PV max, il la mange à la place à 1/2 ou moins de ses PV max.",
		shortDesc: "Ce Pokémon mange ses Baies à 1/2 de ses PV max ou moins au lieu de 1/4 habituellement.",
	},
	goodasgold: {
		name: "Corps en Or",
		shortDesc: "Ce Pokémon est immunisé contre les capacités de statut.",
	},
	gooey: {
		name: "Poisseux",
		shortDesc: "Les Pokémon qui entrent en contact avec ce Pokémon voient leur Vitesse baisser d’un niveau.",
	},
	gorillatactics: {
		name: "Entêtement",
		// Official flavor text: "Augmente l’Attaque, mais empêche d’utiliser toute autre capacité que celle utilisée en premier par le Pokémon."
		desc: "L’Attaque de ce Pokémon est multipliée par 1,5, mais il ne peut sélectionner que la première capacité qu’il exécute. Ces effets sont empêchés tant que ce Pokémon est Dynamaxé.",
		shortDesc: "L’Attaque de ce Pokémon est ×1,5, mais il ne peut sélectionner que la première capacité qu’il exécute.",
	},
	grasspelt: {
		name: "Toison Herbue",
		shortDesc: "Si Champ Herbu est actif, la Défense de ce Pokémon est multipliée par 1,5.",
	},
	grassysurge: {
		name: "Créa-Herbe",
		shortDesc: "À son entrée au combat, ce Pokémon déclenche Champ Herbu.",
	},
	grimneigh: {
		name: "Sombre Ruade",
		// Official flavor text: "Quand le Pokémon met un ennemi K.O., il émet un hennissement terrifiant qui augmente son Attaque Spéciale."
		desc: "L’Attaque Spéciale de ce Pokémon augmente d’un niveau s’il attaque et met K.O. un autre Pokémon.",
		shortDesc: "L’Atq Spé de ce Pokémon augmente d’un niveau s’il attaque et met K.O. un autre Pokémon.",
	},
	guarddog: {
		name: "Chien de Garde",
		// Official flavor text: "L’Attaque du Pokémon augmente s’il subit l’effet du talent Intimidation. Les capacités ou objets qui font changer de Pokémon n’ont aucun effet sur lui."
		desc: "Ce Pokémon est immunisé contre l’effet du talent Intimidation et voit à la place son Attaque augmenter d’un niveau. Ce Pokémon ne peut pas être forcé à se retirer par l’attaque ou l’objet d’un autre Pokémon.",
		shortDesc: "Immunisé contre Intimidation. Intimidé : Attaque +1. Ne peut pas être forcé à se retirer.",
	},
	gulpmissile: {
		name: "Dégobage",
		// Official flavor text: "Quand le Pokémon utilise Surf ou Plongée, il revient avec une proie. Lorsqu’il subit des dégâts par la suite, il attaque en recrachant sa proie."
		desc: "Si ce Pokémon est un Nigosier, il change de forme quand il touche une cible avec Surf ou réussit le premier tour de Plongée. Il passe en Forme Gobe-Tout avec un Embrochet dans le bec s’il lui reste plus de 1/2 de ses PV max, ou en Forme Gobe-Chu avec un Pikachu dans le bec s’il lui reste 1/2 ou moins de ses PV max. Si Nigosier est touché sous Forme Gobe-Tout ou Gobe-Chu, il crache l’Embrochet ou le Pikachu sur son attaquant, même s’il n’a plus de PV. Le projectile inflige des dégâts égaux à 1/4 des PV max de la cible, arrondi à l’inférieur ; ces dégâts sont bloqués par le talent Garde Magik, mais pas par un clone. Un Embrochet baisse aussi la Défense de la cible d’un niveau, et un Pikachu paralyse la cible. Nigosier reprend sa forme normale s’il crache un projectile, s’il se retire ou s’il se Dynamaxe.",
		shortDesc: "S’il est touché après Surf/Plongée, l’attaquant perd 1/4 de ses PV max et subit Défense -1 ou la paralysie.",
	},
	guts: {
		name: "Cran",
		// Official flavor text: "Augmente l'Attaque du Pokémon s'il est affecté par une altération de statut."
		desc: "Si ce Pokémon a une altération de statut majeure, son Attaque est multipliée par 1,5. Les attaques physiques de ce Pokémon ignorent l’effet de la brûlure qui divise les dégâts par deux.",
		shortDesc: "Si ce Pokémon a une altération de statut, son Attaque est ×1,5 ; ignore la réduction de dégâts de la brûlure.",
	},
	hadronengine: {
		name: "Moteur à Hadrons",
		shortDesc: "À son entrée, déclenche Champ Électrifié. Sous Champ Électrifié, l’Atq Spé est ×1,3333.",

		start: "  {POKEMON} crée un champ électrifié et active une machine du futur !",
		activate: "  {POKEMON} active une machine du futur grâce au champ électrifié !",
	},
	harvest: {
		name: "Récolte",
		// Official flavor text: "Permet de réutiliser une même Baie plusieurs fois."
		desc: "Si le dernier objet utilisé par ce Pokémon est une Baie, il a 50 % de chances de la récupérer à la fin de chaque tour. Si le Soleil est actif, cette chance est de 100 %.",
		shortDesc: "Si le dernier objet utilisé est une Baie, 50 % de chances de la récupérer à chaque fin de tour. 100 % au Soleil.",

		addItem: "  {POKEMON} a récolté {ITEM:indefinite} !",
	},
	healer: {
		name: "Cœur Soin",
		// Official flavor text: "Soigne parfois une altération de statut d’un allié proche."
		desc: "30 % de chances que l’altération de statut majeure de l’allié de ce Pokémon soit soignée à la fin de chaque tour.",
		shortDesc: "30 % de chances que l’altération de statut de l’allié de ce Pokémon soit soignée à chaque fin de tour.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	heatproof: {
		name: "Ignifugé",
		// Official flavor text: "Diminue de moitié les dégâts infligés au Pokémon par les capacités de type Feu."
		desc: "Si un Pokémon utilise une attaque de type Feu contre ce Pokémon, la stat offensive de ce Pokémon attaquant est divisée par deux lors du calcul des dégâts infligés à ce Pokémon. Ce Pokémon subit la moitié des dégâts habituels de la brûlure, arrondi à l’inférieur.",
		shortDesc: "Les dégâts Feu contre ce Pokémon sont calculés avec 1/2 de la stat offensive ; 1/2 des dégâts de brûlure.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	heavymetal: {
		name: "Heavy Metal",
		// Official flavor text: "Double le poids du Pokémon."
		desc: "Le poids de ce Pokémon est doublé. Cet effet est calculé après celui d’Allègement et avant celui de la Pierrallégée.",
		shortDesc: "Le poids de ce Pokémon est doublé.",
	},
	honeygather: {
		name: "Cherche Miel",
		shortDesc: "Aucune utilité en combat.",
	},
	hospitality: {
		name: "Aux Petits Soins",
		shortDesc: "À son entrée au combat, ce Pokémon restaure 1/4 des PV max de son allié, arrondi à l’inférieur.",

		heal: "  {POKEMON} boit le thé préparé par {SOURCE} !",
	},
	hugepower: {
		name: "Coloforce",
		shortDesc: "L’Attaque de ce Pokémon est doublée.",
	},
	hungerswitch: {
		name: "Déclic Fringale",
		// Official flavor text: "À la fin de chaque tour, le Pokémon alterne entre ses formes Mode Rassasié et Mode Affamé."
		desc: "Si ce Pokémon est un Morpeko, il alterne entre le Mode Rassasié et le Mode Affamé à la fin de chaque tour.",
		shortDesc: "Si c’est un Morpeko, il alterne entre le Mode Rassasié et le Mode Affamé à la fin de chaque tour.",
	},
	hustle: {
		name: "Agitation",
		// Official flavor text: "Améliore l'Attaque du Pokémon, mais diminue la Précision."
		desc: "L’Attaque de ce Pokémon est multipliée par 1,5 et la Précision de ses attaques physiques est multipliée par 0,8.",
		shortDesc: "L’Attaque de ce Pokémon est ×1,5 et la Précision de ses attaques physiques est ×0,8.",
	},
	hydration: {
		name: "Hydratation",
		// Official flavor text: "Soigne les altérations de statut du Pokémon quand il pleut."
		desc: "L’altération de statut majeure de ce Pokémon est soignée à la fin de chaque tour si la Pluie est active. Cet effet est empêché si ce Pokémon tient un Parapluie Solide.",
		shortDesc: "L’altération de statut de ce Pokémon est soignée à la fin de chaque tour si la Pluie est active.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	hypercutter: {
		name: "Hyper Cutter",
		shortDesc: "Empêche les autres Pokémon de baisser le niveau d’Attaque de ce Pokémon.",
	},
	icebody: {
		name: "Corps Gel",
		// Official flavor text: "Régénère peu à peu les PV du Pokémon quand il neige."
		desc: "Si la Neige est active, ce Pokémon récupère 1/16 de ses PV max, arrondi à l’inférieur, à la fin de chaque tour.",
		shortDesc: "Si la Neige est active, ce Pokémon récupère 1/16 de ses PV max à chaque tour.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	iceface: {
		name: "Tête de Gel",
		// Official flavor text: "Le glaçon sur sa tête encaisse les attaques physiques à la place du Pokémon, mais sa destruction modifie son apparence. Le glaçon se reforme quand il neige."
		desc: "Si ce Pokémon est un Bekaglaçon, le premier coup physique qu’il subit au combat inflige 0 dégât neutre. Sa tête de glace est alors brisée et il passe en Tête Dégel. Bekaglaçon retrouve sa forme Tête de Gel quand la Neige commence ou quand il entre au combat alors que la Neige est active. Les dégâts de confusion brisent aussi la tête de glace.",
		shortDesc: "Si c’est un Bekaglaçon, le premier coup physique qu’il subit inflige 0 dégât. L’effet se restaure sous la Neige.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	icescales: {
		name: "Écailles Glacées",
		shortDesc: "Ce Pokémon subit 1/2 des dégâts des attaques spéciales.",
	},
	illuminate: {
		name: "Lumiattirance",
		// Official flavor text: "Le Pokémon illumine les alentours, ce qui empêche sa Précision de baisser."
		desc: "Empêche les autres Pokémon de baisser le niveau de Précision de ce Pokémon. Ce Pokémon ignore le niveau d’Esquive de la cible.",
		shortDesc: "La Précision de ce Pokémon ne peut pas être baissée par les autres ; ignore leur Esquive.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	illusion: {
		name: "Illusion",
		// Official flavor text: "Le Pokémon prend l’apparence du dernier membre de l’équipe pour tromper l’adversaire."
		desc: "Quand ce Pokémon entre au combat, il prend l’apparence du dernier Pokémon non K.O. de son équipe jusqu’à ce qu’il subisse des dégâts directs d’une attaque d’un autre Pokémon. Le niveau et les PV réels de ce Pokémon sont affichés à la place de ceux du Pokémon imité.",
		shortDesc: "Ce Pokémon prend l’apparence du dernier Pokémon de l’équipe jusqu’à subir des dégâts directs.",

		end: "  L’illusion {POKEMON:de} se brise !",
	},
	immunity: {
		name: "Vaccin",
		shortDesc: "Ce Pokémon ne peut pas être empoisonné. Obtenir ce talent en étant empoisonné le soigne.",
	},
	imposter: {
		name: "Imposteur",
		// Official flavor text: "Le Pokémon prend l’apparence du Pokémon adverse."
		desc: "À son entrée au combat, ce Pokémon utilise Morphing sur le Pokémon adverse qui lui fait face. S’il n’y a pas de Pokémon à cette position, ce Pokémon n’utilise pas Morphing.",
		shortDesc: "À son entrée au combat, ce Pokémon se transforme en le Pokémon adverse qui lui fait face.",
	},
	infiltrator: {
		name: "Infiltration",
		// Official flavor text: "Traverse les barrières et les clones adverses pour attaquer directement."
		desc: "Les capacités de ce Pokémon ignorent les clones ainsi que Protection, Mur Lumière, Rune Protect, Brume et Voile Aurore du côté adverse.",
		shortDesc: "Les capacités ignorent les clones et Protection/Mur Lumière/Rune Protect/Brume/Voile Aurore adverses.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	innardsout: {
		name: "Expuls’Organes",
		// Official flavor text: "Le Pokémon inflige à l’adversaire l’ayant mis K.O. des dégâts égaux au nombre de PV qu’il lui restait avant le coup de grâce."
		desc: "Si ce Pokémon est mis K.O. par une capacité, le lanceur de cette capacité perd autant de PV que les dégâts infligés à ce Pokémon.",
		shortDesc: "Si ce Pokémon est mis K.O. par une capacité, le lanceur perd autant de PV.",

		damage: "#aftermath",
	},
	innerfocus: {
		name: "Attention",
		// Official flavor text: "Le Pokémon a un mental à toute épreuve qui empêche les attaques ennemies de lui faire peur. Il est aussi immunisé contre le talent Intimidation."
		desc: "Ce Pokémon ne peut pas être apeuré. Ce Pokémon est immunisé contre l’effet du talent Intimidation.",
		shortDesc: "Ce Pokémon ne peut pas être apeuré. Immunisé contre Intimidation.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	insomnia: {
		name: "Insomnia",
		shortDesc: "Ce Pokémon ne peut pas s’endormir. Obtenir ce talent en étant endormi le réveille.",
	},
	intimidate: {
		name: "Intimidation",
		// Official flavor text: "Le Pokémon rugit lorsqu'il arrive au combat, ce qui intimide l'ennemi et baisse son Attaque."
		desc: "À son entrée au combat, ce Pokémon baisse l’Attaque des Pokémon adverses d’un niveau. Les Pokémon ayant les talents Attention, Benêt, Tempo Perso ou Querelleur, ainsi que les Pokémon protégés par un clone, sont immunisés.",
		shortDesc: "À son entrée au combat, ce Pokémon baisse l’Attaque des adversaires d’un niveau.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	intrepidsword: {
		name: "Lame Indomptable",
		shortDesc: "À son entrée au combat, l’Attaque de ce Pokémon augmente d’un niveau. Une fois par combat.",
		gen8: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	ironbarbs: {
		name: "Épine de Fer",
		// Official flavor text: "Inflige des dégâts à l’attaquant lorsque le Pokémon subit une attaque directe."
		desc: "Les Pokémon qui entrent en contact avec ce Pokémon perdent 1/8 de leurs PV max, arrondi à l’inférieur.",
		shortDesc: "Les Pokémon qui entrent en contact avec ce Pokémon perdent 1/8 de leurs PV max.",

		damage: "#roughskin",
	},
	ironfist: {
		name: "Poing de Fer",
		// Official flavor text: "Augmente la puissance des capacités coups de poing."
		desc: "La puissance des capacités de poing de ce Pokémon est multipliée par 1,2.",
		shortDesc: "Les capacités de poing de ce Pokémon ont une puissance ×1,2. Coup Bas n’est pas renforcé.",
	},
	justified: {
		name: "Cœur Noble",
		shortDesc: "L’Attaque de ce Pokémon augmente d’un niveau quand il est blessé par une capacité de type Ténèbres.",
	},
	keeneye: {
		name: "Regard Vif",
		// Official flavor text: "Les yeux perçants du Pokémon empêchent sa Précision de baisser."
		desc: "Empêche les autres Pokémon de baisser le niveau de Précision de ce Pokémon. Ce Pokémon ignore le niveau d’Esquive de la cible.",
		shortDesc: "La Précision de ce Pokémon ne peut pas être baissée par les autres ; ignore leur Esquive.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	klutz: {
		name: "Maladresse",
		// Official flavor text: "Le Pokémon ne peut utiliser aucun objet tenu."
		desc: "L’objet tenu par ce Pokémon n’a aucun effet. Ce Pokémon ne peut pas utiliser Dégommage avec succès. Le Bracelet Macho, la Chaîne Pouvoir, le Bandeau Pouvoir, la Ceinture Pouvoir, le Poignet Pouvoir, la Lentille Pouvoir et le Poids Pouvoir conservent leurs effets.",
		shortDesc: "L’objet tenu par ce Pokémon n’a aucun effet, sauf le Bracelet Macho. Dégommage ne peut pas être utilisé.",
	},
	leafguard: {
		name: "Feuille Garde",
		// Official flavor text: "Protège le Pokémon contre les altérations de statut quand le soleil brille."
		desc: "Si le Soleil est actif, ce Pokémon ne peut pas être affecté par une altération de statut majeure ni par Bâillement, et Repos échoue pour lui. Cet effet est empêché si ce Pokémon tient un Parapluie Solide.",
		shortDesc: "Si le Soleil est actif, ce Pokémon ne peut pas subir d’altération de statut et Repos échoue.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	levitate: {
		name: "Lévitation",
		// Official flavor text: "Le Pokémon flotte, ce qui l'immunise contre les capacités de type Sol."
		desc: "Ce Pokémon est immunisé contre les attaques de type Sol et contre les effets de Picots, Pics Toxik, Toile Gluante et du talent Piège Sable. Les effets de Gravité, Racines, Anti-Air, Myria-Flèches et de la Balle Fer annulent cette immunité. Myria-Flèches peut toucher ce Pokémon comme s’il n’avait pas ce talent.",
		shortDesc: "Ce Pokémon est immunisé contre le Sol ; Gravité/Racines/Anti-Air/Balle Fer annulent l’immunité.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	libero: {
		name: "Libéro",
		// Official flavor text: "Le Pokémon prend le type de la capacité qu’il utilise. Ce talent ne peut se déclencher qu’une fois par entrée au combat du Pokémon."
		desc: "Le type de ce Pokémon devient celui de la capacité qu’il s’apprête à utiliser. Cet effet s’applique après tous les effets qui changent le type d’une capacité. Cet effet ne peut se produire qu’une fois par entrée au combat, et seulement si ce Pokémon n’est pas téracristallisé.",
		shortDesc: "Le type de ce Pokémon devient celui de la capacité qu’il utilise. Une fois par entrée au combat.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	lightmetal: {
		name: "Light Metal",
		// Official flavor text: "Divise par deux le poids du Pokémon."
		desc: "Le poids de ce Pokémon est divisé par deux, arrondi au dixième de kilogramme inférieur. Cet effet est calculé après celui d’Allègement et avant celui de la Pierrallégée. Le poids d’un Pokémon ne peut pas descendre en dessous de 0,1 kg.",
		shortDesc: "Le poids de ce Pokémon est divisé par deux.",
	},
	lightningrod: {
		name: "Paratonnerre",
		// Official flavor text: "Le Pokémon détourne sur lui les capacités de type Électrik et les neutralise, tout en augmentant son Attaque Spéciale."
		desc: "Ce Pokémon est immunisé contre les capacités de type Électrik et son Attaque Spéciale augmente d’un niveau quand il est touché par une capacité de type Électrik. Si ce Pokémon n’est pas la cible d’une capacité de type Électrik à cible unique utilisée par un autre Pokémon, il attire cette capacité sur lui s’il est à sa portée. Si plusieurs Pokémon peuvent attirer la capacité grâce à ce talent, elle va vers celui qui a la Vitesse la plus élevée ou, en cas d’égalité, vers celui dont le talent est actif depuis le plus longtemps.",
		shortDesc: "Ce Pokémon attire les capacités Électrik pour augmenter son Atq Spé de 1 ; immunité Électrik.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		activate: "  {POKEMON} attire l’attaque sur lui !",
	},
	limber: {
		name: "Échauffement",
		shortDesc: "Ce Pokémon ne peut pas être paralysé. Obtenir ce talent en étant paralysé le soigne.",
	},
	lingeringaroma: {
		name: "Odeur Tenace",
		// Official flavor text: "Lorsque le Pokémon subit une attaque directe, le talent de l’attaquant est remplacé par Odeur Tenace."
		desc: "Le talent des Pokémon qui entrent en contact avec ce Pokémon devient Odeur Tenace. N’affecte pas les Pokémon ayant les talents Osmose Équine, Synergie, Hypersommeil, Fantômasque, Dégobage, Tête de Gel, Odeur Tenace, Multi-Type, Rassemblement, Système Alpha, Banc, Bouclier-Carcan, Déclic Tactique, Téramorphose, Mode Transe ou Supermutation.",
		shortDesc: "Entrer en contact avec ce Pokémon change le talent de l’attaquant en Odeur Tenace.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},

		changeAbility: "  Une odeur tenace imprègne {TARGET} !",
	},
	liquidooze: {
		name: "Suintement",
		shortDesc: "Ce Pokémon inflige à ceux qui drainent ses PV autant de dégâts qu’ils en auraient récupéré.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		damage: "  {POKEMON} aspire le suintement !",
	},
	liquidvoice: {
		name: "Hydrata-Son",
		// Official flavor text: "Toutes les attaques sonores du Pokémon prennent le type Eau."
		desc: "Les capacités sonores de ce Pokémon deviennent de type Eau. Cet effet s’applique après les autres effets qui changent le type d’une capacité, mais avant ceux de Déluge Plasmique et d’Électrisation.",
		shortDesc: "Les capacités sonores de ce Pokémon deviennent de type Eau.",
	},
	longreach: {
		name: "Longue Portée",
		shortDesc: "Les attaques de ce Pokémon n’entrent pas en contact avec la cible.",
	},
	magicbounce: {
		name: "Miroir Magik",
		// Official flavor text: "Annule les effets des capacités de statut subies par le Pokémon et les retourne à l’envoyeur."
		desc: "Ce Pokémon n’est pas affecté par certaines capacités qui n’infligent pas de dégâts dirigées contre lui, et les renvoie à la place contre leur lanceur. Les capacités renvoyées de cette façon ne peuvent pas être renvoyées à nouveau par ce talent ou par l’effet de Reflet Magik. Picots, Piège de Roc, Toile Gluante et Pics Toxik ne peuvent être renvoyés qu’une fois par côté, par le Pokémon le plus à gauche sous l’effet de ce talent ou de Reflet Magik. Les talents Paratonnerre et Lavabo redirigent leurs capacités respectives avant que ce talent ne prenne effet.",
		shortDesc: "Ce Pokémon bloque certaines capacités de statut et les renvoie à leur lanceur.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		move: "#magiccoat",
	},
	magicguard: {
		name: "Garde Magik",
		// Official flavor text: "Seules les attaques peuvent blesser le Pokémon."
		desc: "Ce Pokémon ne peut subir des dégâts que par des attaques directes. Les dégâts de Malédiction et de Clonage à l’utilisation, de Cognobidon, de Balance, le recul de Lutte et les dégâts de confusion sont considérés comme des dégâts directs.",
		shortDesc: "Ce Pokémon ne peut subir des dégâts que par des attaques directes.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	magician: {
		name: "Magicien",
		// Official flavor text: "Les capacités volent aussi l’objet tenu par la cible."
		desc: "Si ce Pokémon n’a pas d’objet, il vole l’objet d’un Pokémon qu’il touche avec une attaque. N’affecte pas Vœu Destructeur et Prescience. Si plusieurs cibles sont touchées par une attaque, l’objet est volé au Pokémon le plus rapide, en tenant compte de l’effet de Distorsion et en donnant la priorité aux Pokémon adverses sur les alliés.",
		shortDesc: "Si ce Pokémon n’a pas d’objet, il vole l’objet d’un Pokémon qu’il touche avec une attaque.",
	},
	magmaarmor: {
		name: "Armumagma",
		shortDesc: "Ce Pokémon ne peut pas être gelé. Obtenir ce talent en étant gelé le soigne.",
	},
	magnetpull: {
		name: "Magnépiège",
		// Official flavor text: "Attire les Pokémon Acier grâce à un champ magnétique, ce qui les empêche de quitter le terrain."
		desc: "Empêche les Pokémon adverses de type Acier de choisir d’être remplacés, sauf s’ils tiennent une Carapace Mue ou s’ils sont de type Spectre.",
		shortDesc: "Empêche les Pokémon adverses de type Acier de choisir d’être remplacés.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	marvelscale: {
		name: "Écaille Spéciale",
		shortDesc: "Si ce Pokémon a une altération de statut majeure, sa Défense est multipliée par 1,5.",
	},
	megalauncher: {
		name: "Méga Blaster",
		// Official flavor text: "Augmente la puissance des capacités qui projettent une aura."
		desc: "La puissance des capacités d’aura de ce Pokémon est multipliée par 1,5. Vibra Soin restaure 3/4 des PV max de la cible, arrondi au demi inférieur.",
		shortDesc: "Les capacités d’aura de ce Pokémon ont une puissance ×1,5. Vibra Soin soigne 3/4 des PV max de la cible.",
	},
	megasol: {
		name: "Méga-Soleil",
		shortDesc: "Les capacités de ce Pokémon sont utilisées comme si les effets du Soleil étaient actifs.",
	},
	merciless: {
		name: "Cruauté",
		shortDesc: "Les attaques de ce Pokémon sont des coups critiques si la cible est empoisonnée.",
	},
	mimicry: {
		name: "Mimétisme",
		// Official flavor text: "Le Pokémon adopte le même type que le terrain lorsqu’un champ est actif."
		desc: "Les types de ce Pokémon changent pour correspondre au champ actif quand ce Pokémon obtient ce talent, ou chaque fois qu’un champ commence. Type Électrik sous Champ Électrifié, type Plante sous Champ Herbu, type Fée sous Champ Brumeux et type Psy sous Champ Psychique. Si ce talent est obtenu sans champ actif, ou si un champ prend fin, les types de ce Pokémon redeviennent les types d’origine de son espèce.",
		shortDesc: "Les types de ce Pokémon changent selon le champ. Le type revient à la normale quand le champ prend fin.",

		activate: "  {POKEMON} a repris son type d’origine !",
	},
	mindseye: {
		name: "Œil Révélateur",
		// Official flavor text: "Le Pokémon ignore les changements d’Esquive des cibles et peut toucher les Pokémon Spectre avec des capacités Normal ou Combat. Sa Précision ne peut pas baisser."
		desc: "Ce Pokémon peut toucher les Pokémon de type Spectre avec des capacités de type Normal et Combat. Empêche les autres Pokémon de baisser le niveau de Précision de ce Pokémon. Ce Pokémon ignore le niveau d’Esquive de la cible.",
		shortDesc: "Les capacités Combat et Normal touchent les Spectre. Précision non réductible, ignore l’Esquive.",
	},
	minus: {
		name: "Moins",
		// Official flavor text: "L’Attaque Spéciale du Pokémon augmente si un Pokémon allié a le talent Moins ou Plus."
		desc: "Si un allié actif a ce talent ou le talent Plus, l’Attaque Spéciale de ce Pokémon est multipliée par 1,5.",
		shortDesc: "Si un allié actif a ce talent ou le talent Plus, l’Atq Spé de ce Pokémon est ×1,5.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	mirrorarmor: {
		name: "Armure Miroir",
		// Official flavor text: "Le Pokémon renvoie les effets réducteurs de stats qu’il reçoit."
		desc: "Quand l’un des niveaux de stats de ce Pokémon devrait être baissé par un autre Pokémon, c’est le niveau de stat de cet autre Pokémon qui baisse à la place. Cet effet ne se produit pas si le niveau de stat de ce Pokémon était déjà à -6. Si l’autre Pokémon a un clone, aucun des deux Pokémon ne voit son niveau de stat baisser.",
		shortDesc: "Si les niveaux de stats de ce Pokémon devaient baisser, ceux de l’attaquant baissent à la place.",
	},
	mistysurge: {
		name: "Créa-Brume",
		shortDesc: "À son entrée au combat, ce Pokémon déclenche Champ Brumeux.",
	},
	moldbreaker: {
		name: "Brise Moule",
		// Official flavor text: "Le Pokémon ignore les talents adverses qui auraient un effet sur ses capacités."
		desc: "Les capacités de ce Pokémon et leurs effets ignorent certains talents des autres Pokémon. Les talents qui peuvent être ignorés sont Armure Caudale, Aroma-Voile, Aura Inversée, Armurbaston, Cœur de Coq, Pare-Balles, Corps Sain, Contestation, Moiteur, Corps Coloré, Fantômasque, Peau Sèche, Absorbe-Terre, Filtre, Torche, Don Floral, Flora-Voile, Boule de Poils, Garde-Ami, Toison Épaisse, Corps en Or, Toison Herbue, Chien de Garde, Ignifugé, Heavy Metal, Hyper Cutter, Tête de Gel, Écailles Glacées, Lumiattirance, Vaccin, Attention, Insomnia, Regard Vif, Feuille Garde, Lévitation, Light Metal, Paratonnerre, Échauffement, Miroir Magik, Armumagma, Écaille Spéciale, Œil Révélateur, Armure Miroir, Motorisé, Multiécaille, Benêt, Envelocape, Tempo Perso, Voile Pastel, Punk Rock, Sel Purificateur, Prestance Royale, Voile Sable, Herbivore, Coque Armure, Écran Poudre, Simple, Rideau Neige, Solide Roc, Anti-Bruit, Glu, Lavabo, Fermeté, Ventouse, Gluco-Voile, Pieds Confus, Télépathe, Téra-Carapace, Thermodynamique, Isograisse, Inconscient, Esprit Vital, Absorbe-Volt, Absorbe-Eau, Aquabulle, Ignifu-Voile, Bien Cuit, Écran Fumée, Aéroporté, Garde Mystik et Peau Miracle. Cela affecte tous les autres Pokémon sur le terrain, qu’ils soient ou non la cible de la capacité de ce Pokémon, et que leur talent soit bénéfique ou non à ce Pokémon.",
		shortDesc: "Les capacités de ce Pokémon et leurs effets ignorent les talents des autres Pokémon.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} brise le moule !",
	},
	moody: {
		name: "Lunatique",
		// Official flavor text: "Augmente beaucoup une stat du Pokémon et en baisse une autre au hasard à chaque tour."
		desc: "À la fin de chaque tour, une stat aléatoire de ce Pokémon, autre que la Précision ou l’Esquive, augmente de deux niveaux et une autre stat baisse d’un niveau.",
		shortDesc: "Augmente une stat aléatoire (sauf Précision/Esquive) de 2 et en baisse une autre de 1 à chaque tour.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	motordrive: {
		name: "Motorisé",
		// Official flavor text: "Si le Pokémon est touché par une capacité de type Électrik, il ne subit aucun dégât et sa Vitesse augmente."
		desc: "Ce Pokémon est immunisé contre les capacités de type Électrik et sa Vitesse augmente d’un niveau quand il est touché par une capacité de type Électrik.",
		shortDesc: "La Vitesse de ce Pokémon augmente d’un niveau s’il est touché par une capacité Électrik ; immunité Électrik.",
	},
	moxie: {
		name: "Impudence",
		// Official flavor text: "Quand le Pokémon met un ennemi K.O., sa confiance en lui ne connaît plus de limite et son Attaque augmente."
		desc: "L’Attaque de ce Pokémon augmente d’un niveau s’il attaque et met K.O. un autre Pokémon.",
		shortDesc: "L’Attaque de ce Pokémon augmente d’un niveau s’il attaque et met K.O. un autre Pokémon.",
	},
	multiscale: {
		name: "Multiécaille",
		shortDesc: "Si ce Pokémon a tous ses PV, les dégâts subis des attaques sont divisés par deux.",
	},
	multitype: {
		name: "Multi-Type",
		shortDesc: "Si ce Pokémon est un Arceus, son type change pour correspondre à la Plaque qu’il tient.",
		gen7: {
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen6: {
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	mummy: {
		name: "Momie",
		// Official flavor text: "Lorsque le Pokémon subit une attaque directe, le talent de l’attaquant est remplacé par Momie."
		desc: "Le talent des Pokémon qui entrent en contact avec ce Pokémon devient Momie. N’affecte pas les Pokémon ayant les talents Osmose Équine, Synergie, Hypersommeil, Fantômasque, Dégobage, Tête de Gel, Multi-Type, Momie, Rassemblement, Système Alpha, Banc, Bouclier-Carcan, Déclic Tactique, Téramorphose, Mode Transe ou Supermutation.",
		shortDesc: "Le talent des Pokémon qui entrent en contact avec ce Pokémon devient Momie.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		changeAbility: "  Le talent {TARGET:de} devient Momie !",
	},
	myceliummight: {
		name: "Force Fongique",
		// Official flavor text: "Le Pokémon agit toujours plus lentement quand il utilise une capacité de statut, mais il ignore les talents adverses."
		desc: "Les capacités de statut de ce Pokémon ignorent certains talents des autres Pokémon, et agissent en dernier parmi les Pokémon utilisant des capacités de priorité égale ou supérieure.",
		shortDesc: "Les capacités de statut de ce Pokémon agissent en dernier dans leur priorité et ignorent les talents.",
	},
	naturalcure: {
		name: "Médic Nature",
		shortDesc: "L’altération de statut majeure de ce Pokémon est soignée quand il se retire.",

		activate: "  ({POKEMON} est soigné grâce à Médic Nature !)",
	},
	neuroforce: {
		name: "Cérébro-Force",
		// Official flavor text: "Augmente encore plus la puissance des attaques super efficaces."
		desc: "Les dégâts des attaques de ce Pokémon super efficaces contre la cible sont multipliés par 1,25.",
		shortDesc: "Les attaques de ce Pokémon super efficaces contre la cible infligent ×1,25 dégâts.",
	},
	neutralizinggas: {
		name: "Gaz Inhibiteur",
		// Official flavor text: "Si un Pokémon avec Gaz Inhibiteur est sur le terrain, les effets des talents de tous les autres Pokémon ne s’activent pas ou sont neutralisés."
		desc: "Tant que ce Pokémon est actif, les talents n’ont aucun effet. Ce talent s’active avant les pièges et les autres talents. N’affecte pas les talents Osmose Équine, Synergie, Hypersommeil, Fantômasque, Dégobage, Tête de Gel, Multi-Type, Gaz Inhibiteur, Rassemblement, Système Alpha, Banc, Bouclier-Carcan, Déclic Tactique, Téramorphose, Mode Transe ou Supermutation.",
		shortDesc: "Tant que ce Pokémon est actif, les talents n’ont aucun effet.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  Un gaz inhibiteur envahit les lieux !",
		end: "  Les effets du gaz inhibiteur se sont dissipés.",
	},
	noguard: {
		name: "Annule Garde",
		shortDesc: "Toutes les capacités utilisées par ou contre ce Pokémon touchent à coup sûr.",
	},
	normalize: {
		name: "Normalise",
		// Official flavor text: "Toutes les capacités du Pokémon deviennent de type Normal, quel que soit leur type original. Leur puissance augmente légèrement."
		desc: "Les capacités de ce Pokémon deviennent de type Normal et voient leur puissance multipliée par 1,2. Cet effet s’applique avant les autres effets qui changent le type d’une capacité.",
		shortDesc: "Les capacités de ce Pokémon deviennent de type Normal et ont une puissance ×1,2.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	oblivious: {
		name: "Benêt",
		// Official flavor text: "Le Pokémon est un grand benêt, ce qui l'immunise contre l'attraction, la provocation ou l'intimidation."
		desc: "Ce Pokémon ne peut pas tomber amoureux ni être provoqué. Obtenir ce talent en étant amoureux ou provoqué le soigne. Ce Pokémon est immunisé contre l’effet du talent Intimidation.",
		shortDesc: "Ce Pokémon ne peut pas tomber amoureux ni être provoqué. Immunisé contre Intimidation.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	opportunist: {
		name: "Opportuniste",
		shortDesc: "Quand un niveau de stat d’un Pokémon adverse augmente, ce Pokémon copie l’effet.",
	},
	orichalcumpulse: {
		name: "Pouls Orichalque",
		shortDesc: "À son entrée, déclenche le Soleil. Sous le Soleil, l’Attaque est ×1,3333.",

		start: "  Le soleil brille et {POKEMON} libère l’énergie d’une pulsation primitive !",
		activate: "  {POKEMON} tire profit des rayons du soleil et libère l’énergie d’une pulsation primitive !",
	},
	overcoat: {
		name: "Envelocape",
		// Official flavor text: "Protège des dégâts occasionnés par les tempêtes de sable, ainsi que des effets des capacités qui libèrent de la poudre et des spores."
		desc: "Ce Pokémon est immunisé contre les capacités poudre, les dégâts de la Tempête de sable, et les effets de Poudre Fureur et du talent Pose Spore.",
		shortDesc: "Ce Pokémon est immunisé contre les capacités poudre, les dégâts de Tempête de sable et Pose Spore.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	overgrow: {
		name: "Engrais",
		// Official flavor text: "Augmente la puissance des capacités de type Plante du Pokémon quand il a perdu une certaine quantité de PV."
		desc: "Quand ce Pokémon a 1/3 ou moins de ses PV max, arrondi à l’inférieur, sa stat offensive est multipliée par 1,5 lorsqu’il utilise une attaque de type Plante.",
		shortDesc: "À 1/3 de ses PV max ou moins, la stat offensive de ce Pokémon est ×1,5 avec les attaques Plante.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	owntempo: {
		name: "Tempo Perso",
		// Official flavor text: "Le Pokémon vit sa vie à son propre rythme, ce qui l'immunise contre la confusion et l'intimidation."
		desc: "Ce Pokémon ne peut pas être rendu confus. Obtenir ce talent en étant confus le soigne. Ce Pokémon est immunisé contre l’effet du talent Intimidation.",
		shortDesc: "Ce Pokémon ne peut pas être rendu confus. Immunisé contre Intimidation.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	parentalbond: {
		name: "Amour Filial",
		// Official flavor text: "La mère et son petit unissent leurs forces pour attaquer deux fois d’affilée."
		desc: "Les capacités offensives de ce Pokémon deviennent des capacités à coups multiples qui frappent deux fois. Le second coup inflige un quart des dégâts. N’affecte pas Vœu Destructeur, Draco-Flèches, Canon Dynamax, Effort, Explosion, Tout ou Rien, Dégommage, Prescience, Ball’Glace, Roulade, Destruction, les capacités à coups multiples, les capacités à cibles multiples, ni les capacités en deux tours.",
		shortDesc: "Les capacités offensives de ce Pokémon frappent deux fois. Le second coup inflige un quart des dégâts.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	pastelveil: {
		name: "Voile Pastel",
		// Official flavor text: "Protège le Pokémon et ses alliés contre toutes les altérations de statut liées à l’empoisonnement."
		desc: "Ce Pokémon et ses alliés ne peuvent pas être empoisonnés. Obtenir ce talent alors que ce Pokémon ou son allié est empoisonné les soigne. Si ce talent est ignoré lors d’un effet qui empoisonne, ce Pokémon est soigné immédiatement, mais pas son allié.",
		shortDesc: "Ce Pokémon et ses alliés ne peuvent pas être empoisonnés. À son entrée, soigne les alliés empoisonnés.",
	},
	perishbody: {
		name: "Corps Condamné",
		// Official flavor text: "Lorsque le Pokémon est directement touché par une capacité, l’assaillant et lui tomberont K.O. dans trois tours, à moins qu’ils ne soient remplacés entre temps."
		desc: "Entrer en contact avec ce Pokémon déclenche l’effet de Requiem pour lui et pour l’attaquant. Cet effet ne se produit pas pour ce Pokémon si l’attaquant a déjà un compte à rebours de Requiem.",
		shortDesc: "Entrer en contact avec ce Pokémon déclenche l’effet de Requiem pour lui et pour l’attaquant.",

		start: "  Les deux Pokémon seront K.O. dans trois tours !",
	},
	pickpocket: {
		name: "Pickpocket",
		// Official flavor text: "Vole l’objet que tient l’attaquant quand le Pokémon subit une attaque directe."
		desc: "Si ce Pokémon n’a pas d’objet et qu’il est touché par une attaque de contact, il vole l’objet de l’attaquant. Cet effet s’applique après tous les coups d’une capacité à coups multiples. Cet effet est empêché si l’effet secondaire de la capacité a été supprimé par le talent Sans Limite.",
		shortDesc: "Si ce Pokémon n’a pas d’objet et est touché par une attaque de contact, il vole l’objet de l’attaquant.",
	},
	pickup: {
		name: "Ramassage",
		// Official flavor text: "Permet parfois au Pokémon de ramasser les objets que d’autres Pokémon ont utilisés. Il lui arrive aussi d’en trouver hors des combats."
		desc: "À la fin de chaque tour, si ce Pokémon ne tient pas d’objet et qu’au moins un Pokémon adjacent a utilisé un objet pendant ce tour, l’un de ces Pokémon est choisi au hasard et ce Pokémon obtient le dernier objet utilisé par ce Pokémon. Un objet n’est pas considéré comme le dernier utilisé s’il s’agit d’un Ballon éclaté, s’il a été ramassé par un autre Pokémon ayant ce talent, ou s’il a été perdu à cause de Piqûre, Gaz Corrosif, Implore, Calcination, Sabotage, Picore ou Larcin. Les objets lancés avec Dégommage peuvent être ramassés.",
		shortDesc: "Si ce Pokémon n’a pas d’objet, il en trouve un utilisé par un Pokémon adjacent ce tour-ci.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		addItem: "#recycle",
	},
	piercingdrill: {
		name: "Transperceuse",
		shortDesc: "Les capacités de contact de ce Pokémon ignorent la protection de la cible et infligent 1/4 des dégâts habituels.",
	},
	pixilate: {
		name: "Peau Féérique",
		// Official flavor text: "Les capacités de type Normal deviennent de type Fée. Leur puissance augmente légèrement."
		desc: "Les capacités de type Normal de ce Pokémon deviennent de type Fée et voient leur puissance multipliée par 1,2. Cet effet s’applique après les autres effets qui changent le type d’une capacité, mais avant ceux de Déluge Plasmique et d’Électrisation.",
		shortDesc: "Les capacités Normal de ce Pokémon deviennent de type Fée et ont une puissance ×1,2.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	plus: {
		name: "Plus",
		// Official flavor text: "L’Attaque Spéciale du Pokémon augmente si un Pokémon allié a le talent Moins ou Plus."
		desc: "Si un allié actif a ce talent ou le talent Moins, l’Attaque Spéciale de ce Pokémon est multipliée par 1,5.",
		shortDesc: "Si un allié actif a ce talent ou le talent Moins, l’Atq Spé de ce Pokémon est ×1,5.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	poisonheal: {
		name: "Soin Poison",
		// Official flavor text: "Quand le Pokémon est empoisonné, il regagne des PV au lieu d’en perdre."
		desc: "Si ce Pokémon est empoisonné, il récupère 1/8 de ses PV max, arrondi à l’inférieur, à la fin de chaque tour au lieu de perdre des PV.",
		shortDesc: "Ce Pokémon récupère 1/8 de ses PV max à chaque tour s’il est empoisonné ; aucune perte de PV.",
	},
	poisonpoint: {
		name: "Point Poison",
		shortDesc: "Un Pokémon qui entre en contact avec ce Pokémon a 30 % de chances d’être empoisonné.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	poisonpuppeteer: {
		name: "Emprise Toxique",
		// Official flavor text: "Lorsque Pêchaminus empoisonne un Pokémon grâce à l’une de ses capacités, ce dernier devient également confus."
		desc: "Si ce Pokémon est un Pêchaminus et qu’il empoisonne ou empoisonne gravement une cible, la cible devient aussi confuse.",
		shortDesc: "Pêchaminus : si ce Pokémon empoisonne une cible, la cible devient aussi confuse.",
	},
	poisontouch: {
		name: "Toxitouche",
		// Official flavor text: "Peut empoisonner l’ennemi par simple contact."
		desc: "Les capacités de contact de ce Pokémon ont 30 % de chances d’empoisonner. Cet effet s’applique après la chance d’effet secondaire propre à la capacité.",
		shortDesc: "Les capacités de contact de ce Pokémon ont 30 % de chances d’empoisonner.",
	},
	powerconstruct: {
		name: "Rassemblement",
		// Official flavor text: "Lorsque le Pokémon perd la moitié de ses PV, ses Cellules se rassemblent pour l’encourager, ce qui lui permet de prendre sa Forme Parfaite."
		desc: "Si ce Pokémon est un Zygarde en Forme 10 % ou 50 %, il passe en Forme Parfaite quand il a 1/2 ou moins de ses PV max à la fin du tour.",
		shortDesc: "Si Zygarde 10 %/50 %, passe en Forme Parfaite à 1/2 de ses PV max ou moins en fin de tour.",

		activate: "  Vous sentez la présence d’un grand nombre d’individus !",
		transform: "{POKEMON} prend sa Forme Parfaite !",
	},
	powerofalchemy: {
		name: "Osmose",
		// Official flavor text: "Le Pokémon acquiert le talent d’un allié mis K.O."
		desc: "Ce Pokémon copie le talent d’un allié mis K.O. Les talents qui ne peuvent pas être copiés sont Osmose Équine, Synergie, Hypersommeil, Commandant, Fantômasque, Force Mémorielle, Don Floral, Météo, Déclic Fringale, Tête de Gel, Illusion, Imposteur, Multi-Type, Gaz Inhibiteur, Emprise Toxique, Rassemblement, Osmose, Paléosynthèse, Charge Quantique, Receveur, Système Alpha, Banc, Bouclier-Carcan, Déclic Tactique, Téra-Carapace, Téramorphose, Téraformation 0, Calque, Garde Mystik, Mode Transe et Supermutation.",
		shortDesc: "Ce Pokémon copie le talent d’un allié mis K.O.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		changeAbility: "#receiver",
	},
	powerspot: {
		name: "Cercle d’Énergie",
		// Official flavor text: "Augmente la puissance des capacités des Pokémon qui se trouvent à proximité."
		desc: "Les alliés de ce Pokémon voient la puissance de leurs capacités multipliée par 1,3. Cela affecte Vœu Destructeur et Prescience, même si le lanceur n’est pas sur le terrain.",
		shortDesc: "Les alliés de ce Pokémon voient la puissance de leurs capacités multipliée par 1,3.",
	},
	prankster: {
		name: "Farceur",
		// Official flavor text: "Rend les capacités de statut du Pokémon prioritaires."
		desc: "Les capacités de ce Pokémon qui n’infligent pas de dégâts gagnent +1 en priorité. Les Pokémon adverses de type Ténèbres sont immunisés contre ces capacités, ainsi que contre toute capacité appelée par ces capacités, si le lanceur effectif de la capacité a ce talent.",
		shortDesc: "Les capacités de statut de ce Pokémon gagnent +1 en priorité, mais le type Ténèbres y est immunisé.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	pressure: {
		name: "Pression",
		// Official flavor text: "Met la pression à l’adversaire pour le forcer à dépenser plus de PP."
		desc: "Si ce Pokémon est la cible de la capacité d’un Pokémon adverse, cette capacité perd un PP supplémentaire. Possessif, Saisie et Téra Explosion perdent aussi un PP supplémentaire quand ils sont utilisés par un Pokémon adverse, mais pas Toile Gluante.",
		shortDesc: "Si ce Pokémon est la cible de la capacité d’un adversaire, cette capacité perd un PP supplémentaire.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} augmente la pression !",
	},
	primordialsea: {
		name: "Mer Primaire",
		// Official flavor text: "Altère les conditions météo pour neutraliser les attaques de type Feu."
		desc: "À son entrée au combat, la météo devient Pluie battante, qui inclut tous les effets de la Pluie et empêche l’exécution des capacités offensives de type Feu. Cette météo reste active jusqu’à ce que ce talent ne soit plus actif chez aucun Pokémon, ou que la météo soit changée par les talents Souffle Delta ou Terre Finale.",
		shortDesc: "À son entrée, une pluie battante tombe jusqu’à ce que ce talent ne soit plus actif en combat.",
	},
	prismarmor: {
		name: "Prisme-Armure",
		shortDesc: "Ce Pokémon subit 3/4 des dégâts des attaques super efficaces.",
	},
	propellertail: {
		name: "Propulseur",
		shortDesc: "Les capacités de ce Pokémon ne peuvent être redirigées vers une autre cible par aucun effet.",
	},
	protean: {
		name: "Protéen",
		// Official flavor text: "Le Pokémon prend le type de la capacité qu’il utilise. Ce talent ne peut se déclencher qu’une fois par entrée au combat du Pokémon."
		desc: "Le type de ce Pokémon devient celui de la capacité qu’il s’apprête à utiliser. Cet effet s’applique après tous les effets qui changent le type d’une capacité. Cet effet ne peut se produire qu’une fois par entrée au combat, et seulement si ce Pokémon n’est pas téracristallisé.",
		shortDesc: "Le type de ce Pokémon devient celui de la capacité qu’il utilise. Une fois par entrée au combat.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	protosynthesis: {
		name: "Paléosynthèse",
		// Official flavor text: "Quand le soleil brille ou que le Pokémon tient une capsule d’Énergie Booster, sa stat la plus élevée augmente."
		desc: "Si le Soleil est actif ou si ce Pokémon utilise l’Énergie Booster qu’il tient, sa stat la plus élevée est multipliée par 1,3, ou par 1,5 si cette stat est la Vitesse. Les changements de niveaux de stats sont pris en compte au moment où ce talent s’active. En cas d’égalité entre plusieurs stats, l’ordre de priorité est : Attaque, Défense, Attaque Spéciale, Défense Spéciale, puis Vitesse. Si cet effet a été déclenché par le Soleil, l’Énergie Booster tenue ne s’active pas et l’effet prend fin quand le Soleil n’est plus actif. Si cet effet a été déclenché par une Énergie Booster tenue, il prend fin quand ce Pokémon n’est plus actif.",
		shortDesc: "Soleil actif ou Énergie Booster utilisée : la stat la plus élevée est ×1,3, ou ×1,5 si c’est la Vitesse.",

		activate: "  Le soleil brille, ce qui a permis à {POKEMON} d’activer Paléosynthèse !",
		activateFromItem: "  {POKEMON} a activé Paléosynthèse grâce à son Énergie Booster !",
		start: "  {STAT:definite:capitalize} {POKEMON:de} est renforcée !",
		end: "  L’effet du talent Paléosynthèse {POKEMON:de} s’est dissipé !",
	},
	psychicsurge: {
		name: "Créa-Psy",
		shortDesc: "À son entrée au combat, ce Pokémon déclenche Champ Psychique.",
	},
	punkrock: {
		name: "Punk Rock",
		// Official flavor text: "Augmente la puissance des capacités basées sur le son. Le Pokémon ne subit que la moitié des dégâts quand il est touché par ce genre de capacités."
		desc: "La puissance des capacités sonores de ce Pokémon est multipliée par 1,3. Ce Pokémon subit moitié moins de dégâts des capacités sonores.",
		shortDesc: "Ce Pokémon subit 1/2 des dégâts des capacités sonores. Les siennes ont une puissance ×1,3.",
	},
	purepower: {
		name: "Force Pure",
		shortDesc: "L’Attaque de ce Pokémon est doublée.",
	},
	purifyingsalt: {
		name: "Sel Purificateur",
		// Official flavor text: "Le sel pur immunise le Pokémon contre les altérations de statut, et diminue de moitié les dégâts des capacités de type Spectre."
		desc: "Ce Pokémon ne peut pas être affecté par une altération de statut majeure ni par Bâillement. Si un Pokémon utilise une attaque de type Spectre contre ce Pokémon, la stat offensive de ce Pokémon attaquant est divisée par deux lors du calcul des dégâts infligés à ce Pokémon.",
		shortDesc: "Dégâts Spectre contre ce Pokémon calculés avec la stat offensive divisée par deux ; pas d’altération de statut.",
	},
	quarkdrive: {
		name: "Charge Quantique",
		// Official flavor text: "Quand un champ électrifié est actif ou que le Pokémon tient une capsule d’Énergie Booster, sa stat la plus élevée augmente."
		desc: "Si Champ Électrifié est actif ou si ce Pokémon utilise l’Énergie Booster qu’il tient, sa stat la plus élevée est multipliée par 1,3, ou par 1,5 si cette stat est la Vitesse. Les changements de niveaux de stats sont pris en compte au moment où ce talent s’active. En cas d’égalité entre plusieurs stats, l’ordre de priorité est : Attaque, Défense, Attaque Spéciale, Défense Spéciale, puis Vitesse. Si cet effet a été déclenché par Champ Électrifié, l’Énergie Booster tenue ne s’active pas et l’effet prend fin quand Champ Électrifié n’est plus actif. Si cet effet a été déclenché par une Énergie Booster tenue, il prend fin quand ce Pokémon n’est plus actif.",
		shortDesc: "Champ Électrifié actif ou Énergie Booster utilisée : la stat la plus élevée est ×1,3, ou ×1,5 si c’est la Vitesse.",

		activate: "  {POKEMON} a activé Charge Quantique grâce au champ électrifié !",
		activateFromItem: "  {POKEMON} a activé Charge Quantique grâce à son Énergie Booster !",
		start: "  {STAT:definite:capitalize} {POKEMON:de} est renforcée !",
		end: "  L’effet du talent Charge Quantique {POKEMON:de} s’est dissipé !",
	},
	queenlymajesty: {
		name: "Prestance Royale",
		// Official flavor text: "L’adversaire est impressionné par la majesté du Pokémon, ce qui l’empêche de viser ce dernier et ses alliés avec une capacité prioritaire."
		desc: "Les capacités prioritaires utilisées par des Pokémon adverses et ciblant ce Pokémon ou ses alliés n’ont aucun effet.",
		shortDesc: "Ce Pokémon et ses alliés sont protégés des capacités prioritaires adverses.",

		block: "#damp",
	},
	quickdraw: {
		name: "Tir Vif",
		shortDesc: "Ce Pokémon a 30 % de chances d’agir en premier dans sa priorité avec ses capacités offensives.",

		activate: "  Tir Vif permet à {POKEMON} d’agir plus vite que d’habitude !",
	},
	quickfeet: {
		name: "Pied Véloce",
		// Official flavor text: "Augmente la Vitesse du Pokémon en cas d'altération de statut."
		desc: "Si ce Pokémon a une altération de statut majeure, sa Vitesse est multipliée par 1,5. Ce Pokémon ignore l’effet de la paralysie qui divise la Vitesse par deux.",
		shortDesc: "Si ce Pokémon a une altération de statut, sa Vitesse est ×1,5 ; ignore la baisse de Vitesse de la paralysie.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	raindish: {
		name: "Cuvette",
		// Official flavor text: "Le Pokémon récupère progressivement des PV lorsqu'il pleut."
		desc: "Si la Pluie est active, ce Pokémon récupère 1/16 de ses PV max, arrondi à l’inférieur, à la fin de chaque tour. Cet effet est empêché si ce Pokémon tient un Parapluie Solide.",
		shortDesc: "Si la Pluie est active, ce Pokémon récupère 1/16 de ses PV max à chaque tour.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	rattled: {
		name: "Phobique",
		// Official flavor text: "Si le Pokémon est touché par le talent Intimidation ou une attaque de type Ténèbres, Spectre ou Insecte, sa phobie se révèle et sa Vitesse augmente."
		desc: "La Vitesse de ce Pokémon augmente d’un niveau s’il est touché par une attaque de type Insecte, Ténèbres ou Spectre, ou si un Pokémon adverse l’a affecté avec le talent Intimidation.",
		shortDesc: "Vitesse +1 s’il est touché par une attaque Insecte, Ténèbres ou Spectre, ou s’il est intimidé.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	receiver: {
		name: "Receveur",
		// Official flavor text: "Le Pokémon reçoit le talent d’un allié mis K.O."
		desc: "Ce Pokémon copie le talent d’un allié mis K.O. Les talents qui ne peuvent pas être copiés sont Osmose Équine, Synergie, Hypersommeil, Commandant, Fantômasque, Force Mémorielle, Don Floral, Météo, Déclic Fringale, Tête de Gel, Illusion, Imposteur, Multi-Type, Gaz Inhibiteur, Emprise Toxique, Rassemblement, Osmose, Paléosynthèse, Charge Quantique, Receveur, Système Alpha, Banc, Bouclier-Carcan, Déclic Tactique, Téra-Carapace, Téramorphose, Téraformation 0, Calque, Garde Mystik, Mode Transe et Supermutation.",
		shortDesc: "Ce Pokémon copie le talent d’un allié mis K.O.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		changeAbility: "  Le Pokémon reçoit le talent {ABILITY} {SOURCE:de} !",
	},
	reckless: {
		name: "Téméraire",
		// Official flavor text: "Augmente la puissance des capacités occasionnant un contrecoup."
		desc: "La puissance des attaques de ce Pokémon qui infligent des dégâts de recul ou de chute est multipliée par 1,2. N’affecte pas Lutte.",
		shortDesc: "Les attaques à dégâts de recul ou de chute de ce Pokémon ont une puissance ×1,2 ; pas Lutte.",
	},
	refrigerate: {
		name: "Peau Gelée",
		// Official flavor text: "Les capacités de type Normal deviennent de type Glace. Leur puissance augmente légèrement."
		desc: "Les capacités de type Normal de ce Pokémon deviennent de type Glace et voient leur puissance multipliée par 1,2. Cet effet s’applique après les autres effets qui changent le type d’une capacité, mais avant ceux de Déluge Plasmique et d’Électrisation.",
		shortDesc: "Les capacités Normal de ce Pokémon deviennent de type Glace et ont une puissance ×1,2.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	regenerator: {
		name: "Régé-Force",
		shortDesc: "Ce Pokémon récupère 1/3 de ses PV max, arrondi à l’inférieur, quand il se retire.",
	},
	ripen: {
		name: "Mûrissement",
		// Official flavor text: "Le Pokémon fait mûrir la Baie qu’il tient et double ainsi son effet."
		desc: "Quand ce Pokémon mange certaines Baies, leurs effets sont doublés. Les Baies qui restaurent des PV ou des PP en restaurent le double, les Baies qui augmentent des niveaux de stats les augmentent du double, les Baies qui divisent par deux les dégâts subis les divisent par quatre à la place, et une Baie Jaboca ou une Baie Pommo fait perdre à l’attaquant 1/4 de ses PV max, arrondi à l’inférieur.",
		shortDesc: "Quand ce Pokémon mange certaines Baies, leurs effets sont doublés.",
	},
	rivalry: {
		name: "Rivalité",
		// Official flavor text: "Le Pokémon déteste la concurrence et inflige plus de dégâts si sa cible est du même sexe. Par contre, il en inflige moins si sa cible est du sexe opposé."
		desc: "La puissance des attaques de ce Pokémon est multipliée par 1,25 contre les cibles du même sexe, ou par 0,75 contre les cibles du sexe opposé. Il n’y a aucun modificateur si ce Pokémon ou la cible n’a pas de sexe.",
		shortDesc: "Les attaques de ce Pokémon font ×1,25 contre les cibles du même sexe, ×0,75 contre le sexe opposé.",
	},
	rkssystem: {
		name: "Système Alpha",
		shortDesc: "Si ce Pokémon est un Silvallié, son type change pour correspondre à la ROM qu’il tient.",
	},
	rockhead: {
		name: "Tête de Roc",
		// Official flavor text: "Le Pokémon peut utiliser des capacités occasionnant un contrecoup sans perdre de PV."
		desc: "Ce Pokémon ne subit pas de dégâts de recul, sauf ceux de Lutte. N’affecte pas les dégâts de l’Orbe Vie ni les dégâts de chute.",
		shortDesc: "Ce Pokémon ne subit pas de dégâts de recul, hormis ceux de Lutte/Orbe Vie/chute.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	rockypayload: {
		name: "Porte-Roche",
		shortDesc: "La stat offensive de ce Pokémon est multipliée par 1,5 lorsqu’il utilise une attaque de type Roche.",
	},
	roughskin: {
		name: "Peau Dure",
		// Official flavor text: "Blesse l'attaquant lorsque le Pokémon subit une attaque directe."
		desc: "Les Pokémon qui entrent en contact avec ce Pokémon perdent 1/8 de leurs PV max, arrondi à l’inférieur.",
		shortDesc: "Les Pokémon qui entrent en contact avec ce Pokémon perdent 1/8 de leurs PV max.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		damage: "  {POKEMON} est blessé !",
	},
	runaway: {
		name: "Fuite",
		shortDesc: "Aucune utilité en combat.",
	},
	sandforce: {
		name: "Force Sable",
		// Official flavor text: "Augmente la puissance des capacités de types Roche, Sol et Acier en cas de tempête de sable."
		desc: "Si la Tempête de sable est active, la puissance des attaques de type Sol, Roche et Acier de ce Pokémon est multipliée par 1,3. Ce Pokémon ne subit pas de dégâts de la Tempête de sable.",
		shortDesc: "Les attaques Sol/Roche/Acier de ce Pokémon font ×1,3 sous Tempête de sable ; y est immunisé.",
	},
	sandrush: {
		name: "Baigne Sable",
		// Official flavor text: "Augmente la Vitesse lors des tempêtes de sable."
		desc: "Si la Tempête de sable est active, la Vitesse de ce Pokémon est doublée. Ce Pokémon ne subit pas de dégâts de la Tempête de sable.",
		shortDesc: "Si la Tempête de sable est active, la Vitesse de ce Pokémon est doublée ; immunité à la Tempête de sable.",
	},
	sandspit: {
		name: "Expul’Sable",
		shortDesc: "Quand ce Pokémon est touché par une attaque, une Tempête de sable se déclenche.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	sandstream: {
		name: "Sable Volant",
		shortDesc: "À son entrée au combat, ce Pokémon déclenche une Tempête de sable.",
	},
	sandveil: {
		name: "Voile Sable",
		// Official flavor text: "Augmente l'Esquive du Pokémon lors des tempêtes de sable."
		desc: "Si la Tempête de sable est active, la Précision des capacités utilisées contre ce Pokémon est multipliée par 0,8. Ce Pokémon ne subit pas de dégâts de la Tempête de sable.",
		shortDesc: "Si la Tempête de sable est active, l’Esquive de ce Pokémon est ×1,25 ; immunité à la Tempête de sable.",
	},
	sapsipper: {
		name: "Herbivore",
		// Official flavor text: "Annule les attaques de type Plante subies par le Pokémon et augmente son Attaque."
		desc: "Ce Pokémon est immunisé contre les capacités de type Plante et son Attaque augmente d’un niveau quand il est touché par une capacité de type Plante.",
		shortDesc: "L’Attaque de ce Pokémon augmente d’un niveau s’il est touché par une capacité Plante ; immunité Plante.",
	},
	schooling: {
		name: "Banc",
		// Official flavor text: "Le Pokémon se rassemble avec ses congénères quand ses PV sont élevés. Quand il ne lui reste plus beaucoup de PV, le banc se disperse."
		desc: "À son entrée au combat, si ce Pokémon est un Froussardine de niveau 20 ou plus à qui il reste plus de 1/4 de ses PV max, il passe en Forme Banc. S’il est en Forme Banc et que ses PV tombent à 1/4 ou moins de ses PV max, il passe en Forme Solitaire à la fin du tour. S’il est en Forme Solitaire et que ses PV sont supérieurs à 1/4 de ses PV max à la fin du tour, il passe en Forme Banc.",
		shortDesc: "Si c’est un Froussardine, passe en Forme Banc s’il a plus de 1/4 de ses PV max, sinon en Forme Solitaire.",

		transform: "{POKEMON} forme un banc !",
		transformEnd: "Le banc {POKEMON:de} se désagrège !",
	},
	scrappy: {
		name: "Querelleur",
		// Official flavor text: "Permet aux capacités de type Normal ou Combat du Pokémon de toucher les Pokémon de type Spectre. Immunise aussi contre le talent Intimidation."
		desc: "Ce Pokémon peut toucher les Pokémon de type Spectre avec des capacités de type Normal et Combat. Ce Pokémon est immunisé contre l’effet du talent Intimidation.",
		shortDesc: "Les capacités Combat et Normal touchent les Spectre. Immunisé contre Intimidation.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	screencleaner: {
		name: "Brise-Barrière",
		shortDesc: "À son entrée au combat, les effets de Voile Aurore, Mur Lumière et Protection prennent fin des deux côtés.",
	},
	seedsower: {
		name: "Semencier",
		shortDesc: "Quand ce Pokémon est touché par une attaque, Champ Herbu se déclenche.",
	},
	serenegrace: {
		name: "Sérénité",
		// Official flavor text: "Augmente les chances d'infliger des effets additionnels."
		desc: "Les chances d’effet secondaire des capacités de ce Pokémon sont doublées. Cet effet se cumule avec l’effet de l’arc-en-ciel, sauf pour les effets secondaires qui apeurent la cible.",
		shortDesc: "Les chances d’effet secondaire des capacités de ce Pokémon sont doublées.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	shadowshield: {
		name: "Spectro-Bouclier",
		shortDesc: "Si ce Pokémon a tous ses PV, les dégâts subis des attaques sont divisés par deux.",
	},
	shadowtag: {
		name: "Marque Ombre",
		// Official flavor text: "Empêche les Pokémon ennemis de quitter le terrain."
		desc: "Empêche les Pokémon adverses de choisir d’être remplacés, sauf s’ils tiennent une Carapace Mue, s’ils sont de type Spectre ou s’ils ont aussi ce talent.",
		shortDesc: "Empêche les adversaires de choisir d’être remplacés, sauf s’ils ont aussi ce talent.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	sharpness: {
		name: "Incisif",
		shortDesc: "La puissance des capacités tranchantes de ce Pokémon est multipliée par 1,5.",
	},
	shedskin: {
		name: "Mue",
		// Official flavor text: "Le Pokémon soigne parfois ses altérations de statut en muant."
		desc: "Ce Pokémon a 33 % de chances que son altération de statut majeure soit soignée à la fin de chaque tour.",
		shortDesc: "Ce Pokémon a 33 % de chances que son altération de statut soit soignée à la fin de chaque tour.",
	},
	sheerforce: {
		name: "Sans Limite",
		// Official flavor text: "Les capacités ayant un effet additionnel le perdent, mais leur puissance augmente."
		desc: "La puissance des attaques de ce Pokémon qui ont des effets secondaires est multipliée par 1,3, mais les effets secondaires sont supprimés. Si un effet secondaire a été supprimé, cela supprime aussi le recul de l’Orbe Vie et le soin du Grelot Coque du lanceur, et empêche l’activation de Courroupace, Folle Furie, Homochromie, Repli Tactique, Pickpocket, Escampette, du Carton Rouge, du Bouton Fuite, de la Baie Éka et de la Baie Rangma de la cible.",
		shortDesc: "Les attaques de ce Pokémon avec effets secondaires ont une puissance ×1,3 ; annule ces effets.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	shellarmor: {
		name: "Coque Armure",
		shortDesc: "Ce Pokémon ne peut pas subir de coup critique.",
	},
	shielddust: {
		name: "Écran Poudre",
		// Official flavor text: "Le Pokémon dispose d'un écran naturel qui le protège des effets additionnels des attaques ennemies."
		desc: "Ce Pokémon n’est pas affecté par l’effet secondaire de l’attaque d’un autre Pokémon. Les effets secondaires empêchés incluent ceux qui ont une chance (même 100 %) de paralyser, d’endormir, de geler, de brûler, d’empoisonner, de rendre confus, d’apeurer ce Pokémon ou de baisser ses niveaux de stats, ainsi que ceux d’Ancrage, Sort Sinistre, Dégommage, Dissonance Psy, Salaison, Tisse Ombre, Bombe au Sirop et Exécu-Son. L’effet d’Aria de l’Écume est empêché si ce Pokémon est la seule cible. Les effets secondaires ajoutés par la Roche Royale, le Croc Rasoir et les talents Toxitouche, Puanteur et Chaîne Toxique sont aussi empêchés contre ce Pokémon.",
		shortDesc: "Ce Pokémon n’est pas affecté par l’effet secondaire de l’attaque d’un autre Pokémon.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	shieldsdown: {
		name: "Bouclier-Carcan",
		// Official flavor text: "Lorsque le Pokémon perd la moitié de ses PV, son enveloppe se brise et il adopte une posture offensive."
		desc: "Si ce Pokémon est un Météno, il passe en Forme Noyau s’il a 1/2 ou moins de ses PV max, et en Forme Météore s’il a plus de 1/2 de ses PV max. Cette vérification a lieu à son entrée au combat et à la fin de chaque tour. En Forme Météore, il ne peut pas être affecté par une altération de statut majeure ni par Bâillement.",
		shortDesc: "Si Météno, à l’entrée/en fin de tour, passe en Forme Noyau à 1/2 de ses PV max ou moins, sinon Météore.",

		transform: "Le talent Bouclier-Carcan s’active !",
		transformEnd: "Le talent Bouclier-Carcan n’est plus actif !",
	},
	simple: {
		name: "Simple",
		shortDesc: "Quand un niveau de stat de ce Pokémon augmente ou baisse, la variation est doublée.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	skilllink: {
		name: "Multi-Coups",
		// Official flavor text: "Les capacités pouvant frapper plusieurs fois frappent toujours le nombre maximal de coups."
		desc: "Les attaques à coups multiples de ce Pokémon frappent toujours le nombre maximal de fois. Triple Pied et Triple Axel ne vérifient pas la Précision pour les deuxième et troisième coups.",
		shortDesc: "Les attaques à coups multiples de ce Pokémon frappent toujours le nombre maximal de fois.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	slowstart: {
		name: "Début Calme",
		shortDesc: "À son entrée au combat, l’Attaque et la Vitesse de ce Pokémon sont divisées par deux pendant 5 tours.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} n’arrive pas à se motiver !",
		end: "  {POKEMON} arrive enfin à s’y mettre sérieusement !",
	},
	slushrush: {
		name: "Chasse-Neige",
		shortDesc: "Si la Neige est active, la Vitesse de ce Pokémon est doublée.",
		gen8: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	sniper: {
		name: "Sniper",
		shortDesc: "Si ce Pokémon inflige un coup critique, les dégâts sont multipliés par 1,5.",
	},
	snowcloak: {
		name: "Rideau Neige",
		// Official flavor text: "Augmente l'Esquive du Pokémon quand il neige."
		desc: "Si la Neige est active, la Précision des capacités utilisées contre ce Pokémon est multipliée par 0,8.",
		shortDesc: "Si la Neige est active, l’Esquive de ce Pokémon est ×1,25.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	snowwarning: {
		name: "Alerte Neige",
		shortDesc: "À son entrée au combat, ce Pokémon déclenche la Neige.",
		gen8: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	solarpower: {
		name: "Force Soleil",
		// Official flavor text: "Quand le soleil brille, l'Attaque Spéciale du Pokémon augmente mais il perd des PV à chaque tour."
		desc: "Si le Soleil est actif, l’Attaque Spéciale de ce Pokémon est multipliée par 1,5 et il perd 1/8 de ses PV max, arrondi à l’inférieur, à la fin de chaque tour. Ces effets sont empêchés si le Pokémon tient un Parapluie Solide.",
		shortDesc: "Si le Soleil est actif, l’Atq Spé de ce Pokémon est ×1,5 ; il perd 1/8 de ses PV max par tour.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	solidrock: {
		name: "Solide Roc",
		shortDesc: "Ce Pokémon subit 3/4 des dégâts des attaques super efficaces.",
	},
	soulheart: {
		name: "Animacœur",
		shortDesc: "L’Attaque Spéciale de ce Pokémon augmente d’un niveau quand un autre Pokémon est mis K.O.",
	},
	soundproof: {
		name: "Anti-Bruit",
		shortDesc: "Ce Pokémon est immunisé contre les capacités sonores, sauf s’il les a utilisées lui-même.",
		gen7: {
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen5: {
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	speedboost: {
		name: "Turbo",
		// Official flavor text: "La Vitesse du Pokémon augmente à chaque tour."
		desc: "La Vitesse de ce Pokémon augmente d’un niveau à la fin de chaque tour complet passé sur le terrain.",
		shortDesc: "La Vitesse de ce Pokémon augmente d’un niveau à la fin de chaque tour complet sur le terrain.",
	},
	spicyspray: {
		name: "Habanéruption",
		shortDesc: "Si ce Pokémon est touché par une attaque, l’attaquant est brûlé.",
	},
	stakeout: {
		name: "Filature",
		shortDesc: "La stat offensive de ce Pokémon est doublée contre une cible entrée au combat ce tour-ci.",
	},
	stall: {
		name: "Frein",
		shortDesc: "Ce Pokémon agit en dernier parmi les Pokémon utilisant des capacités de priorité égale ou supérieure.",
	},
	stalwart: {
		name: "Nerfs d’Acier",
		shortDesc: "Les capacités de ce Pokémon ne peuvent être redirigées vers une autre cible par aucun effet.",
	},
	stamina: {
		name: "Endurance",
		shortDesc: "La Défense de ce Pokémon augmente d’un niveau quand il est blessé par une capacité.",
	},
	stancechange: {
		name: "Déclic Tactique",
		// Official flavor text: "Le Pokémon prend la Forme Assaut lorsqu’il utilise une capacité offensive, et la Forme Parade lorsqu’il utilise Bouclier Royal."
		desc: "Si ce Pokémon est un Exagide, il passe en Forme Assaut avant d’utiliser une capacité offensive, et en Forme Parade avant d’utiliser Bouclier Royal.",
		shortDesc: "Si Exagide, passe en Forme Assaut avant d’attaquer et en Forme Parade avant Bouclier Royal.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		transform: "Passage en Forme Assaut !",
		transformEnd: "Passage en Forme Parade !",
	},
	static: {
		name: "Statik",
		shortDesc: "Un Pokémon qui entre en contact avec ce Pokémon a 30 % de chances d’être paralysé.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	steadfast: {
		name: "Impassible",
		shortDesc: "Si ce Pokémon est apeuré, sa Vitesse augmente d’un niveau.",
	},
	steamengine: {
		name: "Turbine",
		// Official flavor text: "Lorsque le Pokémon est touché par des capacités de type Eau ou Feu, sa Vitesse augmente énormément."
		desc: "La Vitesse de ce Pokémon augmente de 6 niveaux quand il est blessé par une capacité de type Feu ou Eau.",
		shortDesc: "La Vitesse de ce Pokémon augmente de 6 niveaux quand il est blessé par une capacité Feu/Eau.",
	},
	steelworker: {
		name: "Expert Acier",
		shortDesc: "La stat offensive de ce Pokémon est multipliée par 1,5 lorsqu’il utilise une attaque de type Acier.",
	},
	steelyspirit: {
		name: "Boost Acier",
		// Official flavor text: "Augmente la puissance des attaques de type Acier du Pokémon et de ses alliés."
		desc: "La puissance des capacités de type Acier de ce Pokémon et de ses alliés est multipliée par 1,5. Cela affecte Vœu Destructeur même si le lanceur n’est pas sur le terrain.",
		shortDesc: "La puissance des capacités de type Acier de ce Pokémon et de ses alliés est multipliée par 1,5.",
	},
	stench: {
		name: "Puanteur",
		// Official flavor text: "Le Pokémon émet une odeur si nauséabonde qu'il peut effrayer sa cible en l'attaquant."
		desc: "Les attaques de ce Pokémon qui n’ont aucune chance d’apeurer la cible gagnent 10 % de chances d’apeurer la cible.",
		shortDesc: "Les attaques de ce Pokémon sans chance d’apeurer gagnent 10 % de chances d’apeurer.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	stickyhold: {
		name: "Glu",
		// Official flavor text: "Les objets sont collés au corps gluant du Pokémon, ce qui empêche ses adversaires de les dérober."
		desc: "Ce Pokémon ne peut pas perdre l’objet qu’il tient à cause du talent ou de l’attaque d’un autre Pokémon, sauf si l’attaque le met K.O. Les Piquants sont transférés aux autres Pokémon malgré ce talent.",
		shortDesc: "Ce Pokémon ne peut pas perdre l’objet qu’il tient à cause du talent ou de l’attaque d’un autre Pokémon.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		block: "  L’objet {POKEMON:de} ne peut pas être volé !",
	},
	stormdrain: {
		name: "Lavabo",
		// Official flavor text: "Le Pokémon détourne sur lui les capacités de type Eau et les neutralise, tout en augmentant son Attaque Spéciale."
		desc: "Ce Pokémon est immunisé contre les capacités de type Eau et son Attaque Spéciale augmente d’un niveau quand il est touché par une capacité de type Eau. Si ce Pokémon n’est pas la cible d’une capacité de type Eau à cible unique utilisée par un autre Pokémon, il attire cette capacité sur lui s’il est à sa portée. Si plusieurs Pokémon peuvent attirer la capacité grâce à ce talent, elle va vers celui qui a la Vitesse la plus élevée ou, en cas d’égalité, vers celui dont le talent est actif depuis le plus longtemps.",
		shortDesc: "Ce Pokémon attire les capacités Eau pour augmenter son Atq Spé de 1 ; immunité Eau.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		activate: "#lightningrod",
	},
	strongjaw: {
		name: "Prognathe",
		// Official flavor text: "Le Pokémon a une mâchoire robuste qui augmente la puissance de ses capacités de morsure."
		desc: "La puissance des capacités de morsure de ce Pokémon est multipliée par 1,5.",
		shortDesc: "Les capacités de morsure de ce Pokémon ont une puissance ×1,5. Piqûre n’est pas renforcée.",
	},
	sturdy: {
		name: "Fermeté",
		// Official flavor text: "Le Pokémon encaisse toujours au moins une attaque s’il a tous ses PV. Il est également immunisé contre les capacités pouvant mettre K.O. en un coup."
		desc: "Si ce Pokémon a tous ses PV, il survit à un coup avec au moins 1 PV. Les capacités qui mettent K.O. en un coup échouent contre ce Pokémon.",
		shortDesc: "Si ce Pokémon a tous ses PV, il survit à un coup avec au moins 1 PV. Immunisé contre les OHKO.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		activate: "  {POKEMON} encaisse les coups !",
	},
	suctioncups: {
		name: "Ventouse",
		shortDesc: "Ce Pokémon ne peut pas être forcé à se retirer par l’attaque ou l’objet d’un autre Pokémon.",

		block: "  {POKEMON} s’accroche avec ses ventouses !",
	},
	superluck: {
		name: "Chanceux",
		shortDesc: "Le taux de critique de ce Pokémon augmente d’un niveau.",
	},
	supersweetsyrup: {
		name: "Nectar Mielleux",
		shortDesc: "À son entrée au combat, ce Pokémon baisse l’Esquive des adversaires d’un niveau. Une fois par combat.",

		start: "  Le nectar {POKEMON:de} dégage un parfum sucré !",
	},
	supremeoverlord: {
		name: "Général Suprême",
		// Official flavor text: "Quand le Pokémon entre sur le terrain, son Attaque et son Attaque Spéciale augmentent légèrement pour chaque allié mis K.O. auparavant."
		desc: "La puissance des capacités de ce Pokémon est multipliée par 1+(X × 0,1), où X est le nombre total de fois où un Pokémon a été mis K.O. du côté du lanceur au moment où ce talent est devenu actif, et X ne peut pas dépasser 5.",
		shortDesc: "Les capacités de ce Pokémon gagnent 10 % de puissance par allié K.O., jusqu’à 5 alliés.",

		activate: "  {POKEMON} reçoit la puissance de ses alliés mis K.O. !",
	},
	surgesurfer: {
		name: "Surf Caudal",
		shortDesc: "Si Champ Électrifié est actif, la Vitesse de ce Pokémon est doublée.",
	},
	swarm: {
		name: "Essaim",
		// Official flavor text: "Augmente la puissance des capacités de type Insecte du Pokémon quand il a perdu une certaine quantité de PV."
		desc: "Quand ce Pokémon a 1/3 ou moins de ses PV max, arrondi à l’inférieur, sa stat offensive est multipliée par 1,5 lorsqu’il utilise une attaque de type Insecte.",
		shortDesc: "À 1/3 de ses PV max ou moins, la stat offensive de ce Pokémon est ×1,5 avec les attaques Insecte.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	sweetveil: {
		name: "Gluco-Voile",
		// Official flavor text: "Le Pokémon et ses alliés ne peuvent pas s’endormir."
		desc: "Ce Pokémon et ses alliés ne peuvent pas s’endormir, mais ceux qui sont déjà endormis ne se réveillent pas immédiatement. Ce Pokémon et ses alliés ne peuvent pas utiliser Repos avec succès ni être affectés par Bâillement, et ceux qui en étaient déjà affectés ne s’endorment pas.",
		shortDesc: "Ce Pokémon et ses alliés ne peuvent pas s’endormir ; ceux déjà endormis ne se réveillent pas.",

		block: "  Gluco-Voile empêche {POKEMON} de dormir !",
	},
	swiftswim: {
		name: "Glissade",
		// Official flavor text: "Augmente la Vitesse du Pokémon s'il pleut."
		desc: "Si la Pluie est active, la Vitesse de ce Pokémon est doublée. Cet effet est empêché si ce Pokémon tient un Parapluie Solide.",
		shortDesc: "Si la Pluie est active, la Vitesse de ce Pokémon est doublée.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	swordofruin: {
		name: "Épée du Fléau",
		shortDesc: "Les Pokémon actifs sans ce talent voient leur Défense multipliée par 0,75.",

		start: "  L’Épée du Fléau {POKEMON:de} affaiblit la Défense des Pokémon alentour !",
	},
	symbiosis: {
		name: "Symbiose",
		// Official flavor text: "Quand les alliés utilisent l’objet qu’ils tiennent, le Pokémon leur donne l’objet qu’il tient en remplacement."
		desc: "Si un allié utilise son objet, ce Pokémon lui donne immédiatement le sien. Ne s’active pas si l’objet de l’allié a été volé ou retiré, ou si l’allié a utilisé un Bouton Fuite ou un Sac Fuite.",
		shortDesc: "Si un allié utilise son objet, ce Pokémon lui donne immédiatement le sien.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  {POKEMON} donne {ITEM:definite:classified} à {TARGET} !",
	},
	synchronize: {
		name: "Synchro",
		// Official flavor text: "Quand le Pokémon est brûlé, paralysé ou empoisonné par un autre Pokémon, il partage ce statut avec celui-ci."
		desc: "Si un autre Pokémon brûle, paralyse, empoisonne ou empoisonne gravement ce Pokémon, ce Pokémon-là subit la même altération de statut majeure.",
		shortDesc: "Si un autre Pokémon brûle/empoisonne/paralyse ce Pokémon, il subit aussi cette altération.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	tabletsofruin: {
		name: "Bois du Fléau",
		shortDesc: "Les Pokémon actifs sans ce talent voient leur Attaque multipliée par 0,75.",

		start: "  Le Bois du Fléau {POKEMON:de} affaiblit l’Attaque des Pokémon alentour !",
	},
	tangledfeet: {
		name: "Pieds Confus",
		shortDesc: "L’Esquive de ce Pokémon est doublée tant qu’il est confus.",
	},
	tanglinghair: {
		name: "Mèche Rebelle",
		shortDesc: "Les Pokémon qui entrent en contact avec ce Pokémon voient leur Vitesse baisser d’un niveau.",
	},
	technician: {
		name: "Technicien",
		// Official flavor text: "Augmente la puissance des capacités les plus faibles."
		desc: "La puissance des capacités de ce Pokémon de 60 de puissance ou moins est multipliée par 1,5, y compris Lutte. Cet effet s’applique après qu’une capacité a modifié sa propre puissance.",
		shortDesc: "Les capacités de ce Pokémon de 60 de puissance ou moins ont une puissance ×1,5, y compris Lutte.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	telepathy: {
		name: "Télépathe",
		shortDesc: "Ce Pokémon ne subit pas de dégâts des attaques de ses alliés.",

		block: "  {POKEMON} ne peut pas être attaqué par ses alliés !",
	},
	teraformzero: {
		name: "Téraformation 0",
		shortDesc: "Terapagos : se téracristalliser met fin aux effets de la météo et du champ. Une fois par combat.",
	},
	terashell: {
		name: "Téra-Carapace",
		// Official flavor text: "Grâce à sa carapace qui renferme l’énergie de tous les types, les capacités subies par ce Pokémon quand ses PV sont au maximum ne sont pas très efficaces."
		desc: "Si ce Pokémon est un Terapagos qui a tous ses PV, l’efficacité des attaques contre lui devient 0,5, sauf si ce Pokémon est immunisé contre la capacité. Les capacités à coups multiples conservent la même efficacité pendant toute l’attaque.",
		shortDesc: "Terapagos : s’il a tous ses PV, les attaques subies ont une efficacité ×0,5, sauf immunité naturelle.",

		activate: "  {POKEMON} fait briller sa carapace et fausse les affinités de type !",
	},
	terashift: {
		name: "Téramorphose",
		shortDesc: "Si ce Pokémon est un Terapagos, il passe en Forme Téracristal à son entrée au combat.",

		transform: "{POKEMON} se transforme !",
	},
	teravolt: {
		name: "Téra-Voltage",
		// Official flavor text: "Le Pokémon ignore les talents adverses qui auraient un effet sur ses capacités."
		desc: "Les capacités de ce Pokémon et leurs effets ignorent certains talents des autres Pokémon. Les talents qui peuvent être ignorés sont Armure Caudale, Aroma-Voile, Aura Inversée, Armurbaston, Cœur de Coq, Pare-Balles, Corps Sain, Contestation, Moiteur, Corps Coloré, Fantômasque, Peau Sèche, Absorbe-Terre, Filtre, Torche, Don Floral, Flora-Voile, Boule de Poils, Garde-Ami, Toison Épaisse, Corps en Or, Toison Herbue, Chien de Garde, Ignifugé, Heavy Metal, Hyper Cutter, Tête de Gel, Écailles Glacées, Lumiattirance, Vaccin, Attention, Insomnia, Regard Vif, Feuille Garde, Lévitation, Light Metal, Paratonnerre, Échauffement, Miroir Magik, Armumagma, Écaille Spéciale, Œil Révélateur, Armure Miroir, Motorisé, Multiécaille, Benêt, Envelocape, Tempo Perso, Voile Pastel, Punk Rock, Sel Purificateur, Prestance Royale, Voile Sable, Herbivore, Coque Armure, Écran Poudre, Simple, Rideau Neige, Solide Roc, Anti-Bruit, Glu, Lavabo, Fermeté, Ventouse, Gluco-Voile, Pieds Confus, Télépathe, Téra-Carapace, Thermodynamique, Isograisse, Inconscient, Esprit Vital, Absorbe-Volt, Absorbe-Eau, Aquabulle, Ignifu-Voile, Bien Cuit, Écran Fumée, Aéroporté, Garde Mystik et Peau Miracle. Cela affecte tous les autres Pokémon sur le terrain, qu’ils soient ou non la cible de la capacité de ce Pokémon, et que leur talent soit bénéfique ou non à ce Pokémon.",
		shortDesc: "Les capacités de ce Pokémon et leurs effets ignorent les talents des autres Pokémon.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} dégage une aura électrique instable !",
	},
	thermalexchange: {
		name: "Thermodynamique",
		// Official flavor text: "Lorsque le Pokémon est touché par une capacité de type Feu, son Attaque augmente. Il ne peut pas être brûlé."
		desc: "L’Attaque de ce Pokémon augmente d’un niveau quand il est blessé par une capacité de type Feu. Ce Pokémon ne peut pas être brûlé. Obtenir ce talent en étant brûlé le soigne.",
		shortDesc: "L’Attaque de ce Pokémon augmente de 1 s’il est blessé par une capacité Feu ; ne peut pas être brûlé.",
	},
	thickfat: {
		name: "Isograisse",
		// Official flavor text: "Le Pokémon est protégé par une épaisse couche de graisse qui diminue de moitié les dégâts qu'il subit des capacités de types Feu et Glace."
		desc: "Si un Pokémon utilise une attaque de type Feu ou Glace contre ce Pokémon, la stat offensive de ce Pokémon attaquant est divisée par deux lors du calcul des dégâts infligés à ce Pokémon.",
		shortDesc: "Les capacités Feu/Glace contre ce Pokémon infligent des dégâts avec une stat offensive divisée par deux.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	tintedlens: {
		name: "Lentiteintée",
		shortDesc: "Les attaques de ce Pokémon qui ne sont pas très efficaces sur une cible infligent le double de dégâts.",
	},
	torrent: {
		name: "Torrent",
		// Official flavor text: "Augmente la puissance des capacités de type Eau du Pokémon quand il a perdu une certaine quantité de PV."
		desc: "Quand ce Pokémon a 1/3 ou moins de ses PV max, arrondi à l’inférieur, sa stat offensive est multipliée par 1,5 lorsqu’il utilise une attaque de type Eau.",
		shortDesc: "À 1/3 de ses PV max ou moins, la stat offensive de ce Pokémon est ×1,5 avec les attaques Eau.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	toughclaws: {
		name: "Griffe Dure",
		shortDesc: "La puissance des capacités de contact de ce Pokémon est multipliée par 1,3.",
	},
	toxicboost: {
		name: "Rage Poison",
		// Official flavor text: "Augmente la puissance des capacités physiques quand le Pokémon est empoisonné."
		desc: "Tant que ce Pokémon est empoisonné, la puissance de ses attaques physiques est multipliée par 1,5.",
		shortDesc: "Tant que ce Pokémon est empoisonné, ses attaques physiques ont une puissance ×1,5.",
	},
	toxicchain: {
		name: "Chaîne Toxique",
		// Official flavor text: "Grâce aux pouvoirs de sa chaîne imprégnée de toxines, le Pokémon peut empoisonner gravement sa cible en la touchant avec une capacité."
		desc: "Les attaques de ce Pokémon ont 30 % de chances d’empoisonner gravement. Cet effet s’applique avant la chance d’effet secondaire propre à la capacité.",
		shortDesc: "Les attaques de ce Pokémon ont 30 % de chances d’empoisonner gravement.",
	},
	toxicdebris: {
		name: "Dépôt Toxique",
		shortDesc: "Si ce Pokémon est touché par une attaque physique, des Pics Toxik sont posés du côté adverse.",
	},
	trace: {
		name: "Calque",
		// Official flavor text: "Lorsque le Pokémon entre au combat, il calque le talent d'un ennemi pour remplacer le sien."
		desc: "À son entrée au combat, ce Pokémon copie le talent d’un Pokémon adverse choisi au hasard. Les talents qui ne peuvent pas être copiés sont Osmose Équine, Synergie, Hypersommeil, Commandant, Fantômasque, Force Mémorielle, Don Floral, Météo, Déclic Fringale, Tête de Gel, Illusion, Imposteur, Multi-Type, Gaz Inhibiteur, Emprise Toxique, Rassemblement, Osmose, Paléosynthèse, Charge Quantique, Receveur, Système Alpha, Banc, Bouclier-Carcan, Déclic Tactique, Téraformation 0, Téra-Carapace, Téramorphose, Calque, Mode Transe et Supermutation. Si aucun Pokémon adverse n’a de talent copiable, ce talent s’active dès que l’un d’eux en a un.",
		shortDesc: "À son entrée, ou dès que possible, ce Pokémon copie le talent d’un adversaire adjacent au hasard.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		changeAbility: "  Le talent {ABILITY} {SOURCE:de} a été calqué !", // SV fr_common:6723
	},
	transistor: {
		name: "Transistor",
		shortDesc: "La stat offensive de ce Pokémon est multipliée par 1,3 lorsqu’il utilise une attaque de type Électrik.",
		gen8: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	triage: {
		name: "Prioguérison",
		shortDesc: "Les capacités de soin de ce Pokémon gagnent +3 en priorité.",
	},
	truant: {
		name: "Absentéisme",
		shortDesc: "Ce Pokémon passe un tour sur deux au lieu d’utiliser une capacité.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		cant: "{POKEMON} paresse !",
	},
	turboblaze: {
		name: "Turbo Brasier",
		// Official flavor text: "Le Pokémon ignore les talents adverses qui auraient un effet sur ses capacités."
		desc: "Les capacités de ce Pokémon et leurs effets ignorent certains talents des autres Pokémon. Les talents qui peuvent être ignorés sont Armure Caudale, Aroma-Voile, Aura Inversée, Armurbaston, Cœur de Coq, Pare-Balles, Corps Sain, Contestation, Moiteur, Corps Coloré, Fantômasque, Peau Sèche, Absorbe-Terre, Filtre, Torche, Don Floral, Flora-Voile, Boule de Poils, Garde-Ami, Toison Épaisse, Corps en Or, Toison Herbue, Chien de Garde, Ignifugé, Heavy Metal, Hyper Cutter, Tête de Gel, Écailles Glacées, Lumiattirance, Vaccin, Attention, Insomnia, Regard Vif, Feuille Garde, Lévitation, Light Metal, Paratonnerre, Échauffement, Miroir Magik, Armumagma, Écaille Spéciale, Œil Révélateur, Armure Miroir, Motorisé, Multiécaille, Benêt, Envelocape, Tempo Perso, Voile Pastel, Punk Rock, Sel Purificateur, Prestance Royale, Voile Sable, Herbivore, Coque Armure, Écran Poudre, Simple, Rideau Neige, Solide Roc, Anti-Bruit, Glu, Lavabo, Fermeté, Ventouse, Gluco-Voile, Pieds Confus, Télépathe, Téra-Carapace, Thermodynamique, Isograisse, Inconscient, Esprit Vital, Absorbe-Volt, Absorbe-Eau, Aquabulle, Ignifu-Voile, Bien Cuit, Écran Fumée, Aéroporté, Garde Mystik et Peau Miracle. Cela affecte tous les autres Pokémon sur le terrain, qu’ils soient ou non la cible de la capacité de ce Pokémon, et que leur talent soit bénéfique ou non à ce Pokémon.",
		shortDesc: "Les capacités de ce Pokémon et leurs effets ignorent les talents des autres Pokémon.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} dégage une aura de flammes incandescentes !",
	},
	unaware: {
		name: "Inconscient",
		// Official flavor text: "Le Pokémon ignore les changements de stats des autres Pokémon, qu'il attaque ou soit attaqué."
		desc: "Ce Pokémon ignore les niveaux d’Attaque, d’Attaque Spéciale et de Précision des autres Pokémon quand il subit des dégâts, et ignore les niveaux de Défense, de Défense Spéciale et d’Esquive des autres Pokémon quand il inflige des dégâts.",
		shortDesc: "Ce Pokémon ignore les niveaux de stats des autres Pokémon quand il subit ou inflige des dégâts.",
	},
	unburden: {
		name: "Délestage",
		// Official flavor text: "Augmente la Vitesse du Pokémon s'il perd ou utilise l'objet qu'il tenait au début du combat."
		desc: "Si ce Pokémon perd l’objet qu’il tient pour une raison quelconque, sa Vitesse est doublée tant qu’il reste actif, qu’il a ce talent et qu’il ne tient pas d’objet.",
		shortDesc: "Vitesse doublée à la perte de l’objet tenu ; perdu s’il se retire ou obtient un objet/talent.",
	},
	unnerve: {
		name: "Tension",
		// Official flavor text: "Fait stresser l’adversaire, ce qui l’empêche de manger des Baies."
		desc: "Tant que ce Pokémon est actif, il empêche les Pokémon adverses d’utiliser leurs Baies. Ce talent s’active avant les pièges et les autres talents.",
		shortDesc: "Tant que ce Pokémon est actif, il empêche les Pokémon adverses d’utiliser leurs Baies.",

		start: "  {TEAM:capitalize} est tendue et ne peut plus manger de Baies !",
	},
	unseenfist: {
		name: "Poing Invisible",
		shortDesc: "Les capacités de contact de ce Pokémon ignorent la protection de la cible, sauf Gardomax.",
		champions: {
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	vesselofruin: {
		name: "Urne du Fléau",
		shortDesc: "Les Pokémon actifs sans ce talent voient leur Attaque Spéciale multipliée par 0,75.",

		start: "  L’Urne du Fléau {POKEMON:de} affaiblit l’Attaque Spéciale des Pokémon alentour !",
	},
	victorystar: {
		name: "Victorieux",
		shortDesc: "La Précision des capacités de ce Pokémon et de ses alliés est multipliée par 1,1.",
	},
	vitalspirit: {
		name: "Esprit Vital",
		shortDesc: "Ce Pokémon ne peut pas s’endormir. Obtenir ce talent en étant endormi le réveille.",
	},
	voltabsorb: {
		name: "Absorbe-Volt",
		// Official flavor text: "Si le Pokémon est touché par une capacité Électrik, il ne subit aucun dégât et regagne des PV à la place."
		desc: "Ce Pokémon est immunisé contre les capacités de type Électrik et récupère 1/4 de ses PV max, arrondi à l’inférieur, quand il est touché par une capacité de type Électrik.",
		shortDesc: "Ce Pokémon récupère 1/4 de ses PV max s’il est touché par une capacité Électrik ; immunité Électrik.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	wanderingspirit: {
		name: "Âme Vagabonde",
		// Official flavor text: "Lorsque le Pokémon est directement touché par une capacité, il échange son talent avec celui de l’assaillant."
		desc: "Les Pokémon qui entrent en contact avec ce Pokémon échangent leur talent avec celui-ci. N’affecte pas les Pokémon ayant les talents Osmose Équine, Synergie, Hypersommeil, Commandant, Fantômasque, Force Mémorielle, Déclic Fringale, Tête de Gel, Illusion, Multi-Type, Gaz Inhibiteur, Emprise Toxique, Rassemblement, Paléosynthèse, Charge Quantique, Système Alpha, Banc, Bouclier-Carcan, Déclic Tactique, Téra-Carapace, Téramorphose, Téraformation 0, Garde Mystik, Mode Transe ou Supermutation.",
		shortDesc: "Les Pokémon qui entrent en contact avec ce Pokémon échangent leur talent avec celui-ci.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "#skillswap",
	},
	waterabsorb: {
		name: "Absorbe-Eau",
		// Official flavor text: "Si le Pokémon est touché par une capacité Eau, il ne subit aucun dégât et regagne des PV à la place."
		desc: "Ce Pokémon est immunisé contre les capacités de type Eau et récupère 1/4 de ses PV max, arrondi à l’inférieur, quand il est touché par une capacité de type Eau.",
		shortDesc: "Ce Pokémon récupère 1/4 de ses PV max s’il est touché par une capacité Eau ; immunité Eau.",
	},
	waterbubble: {
		name: "Aquabulle",
		// Official flavor text: "Réduit la puissance des capacités de type Feu subies par le Pokémon. Il est également immunisé contre les brûlures."
		desc: "La stat offensive de ce Pokémon est doublée lorsqu’il utilise une attaque de type Eau. Si un Pokémon utilise une attaque de type Feu contre ce Pokémon, la stat offensive de ce Pokémon attaquant est divisée par deux lors du calcul des dégâts infligés à ce Pokémon. Ce Pokémon ne peut pas être brûlé. Obtenir ce talent en étant brûlé le soigne.",
		shortDesc: "Puissance Eau de ce Pokémon ×2 ; ne peut pas être brûlé ; puissance Feu contre lui divisée par deux.",
	},
	watercompaction: {
		name: "Sable Humide",
		shortDesc: "La Défense de ce Pokémon augmente de deux niveaux quand il est blessé par une capacité de type Eau.",
	},
	waterveil: {
		name: "Ignifu-Voile",
		shortDesc: "Ce Pokémon ne peut pas être brûlé. Obtenir ce talent en étant brûlé le soigne.",
	},
	weakarmor: {
		name: "Armurouillée",
		// Official flavor text: "Quand le Pokémon est touché par une capacité physique, sa Défense baisse mais sa Vitesse augmente beaucoup."
		desc: "Si une attaque physique touche ce Pokémon, sa Défense baisse d’un niveau et sa Vitesse augmente de deux niveaux.",
		shortDesc: "Si une attaque physique touche ce Pokémon, Défense -1 et Vitesse +2.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	wellbakedbody: {
		name: "Bien Cuit",
		// Official flavor text: "Si le Pokémon est touché par une capacité de type Feu, il ne subit aucun dégât et sa Défense augmente beaucoup."
		desc: "Ce Pokémon est immunisé contre les capacités de type Feu et sa Défense augmente de deux niveaux quand il est touché par une capacité de type Feu.",
		shortDesc: "La Défense de ce Pokémon augmente de deux niveaux s’il est touché par une capacité Feu ; immunité Feu.",
	},
	whitesmoke: {
		name: "Écran Fumée",
		shortDesc: "Empêche les autres Pokémon de baisser les niveaux de stats de ce Pokémon.",
	},
	wimpout: {
		name: "Escampette",
		// Official flavor text: "Le Pokémon perd confiance quand ses PV tombent à la moitié et s’enfuit dans sa Poké Ball."
		desc: "Quand ce Pokémon a plus de 1/2 de ses PV max et subit des dégâts qui font tomber ses PV à 1/2 ou moins de ses PV max, il est immédiatement remplacé par un allié choisi. Cet effet s’applique après tous les coups d’une capacité à coups multiples. Cet effet est empêché si l’effet secondaire de la capacité a été supprimé par le talent Sans Limite. Cet effet s’applique aux dégâts directs comme indirects, sauf ceux de Malédiction et de Clonage à l’utilisation, de Cognobidon, de Balance et de la confusion.",
		shortDesc: "Ce Pokémon est remplacé quand ses PV tombent à 1/2 ou moins de ses PV max.",
	},
	windpower: {
		name: "Turbine Éolienne",
		// Official flavor text: "Si le Pokémon est touché par une capacité faisant appel au vent, il se charge en électricité."
		desc: "Ce Pokémon bénéficie de l’effet de Chargeur quand il est touché par une capacité de vent ou quand Vent Arrière commence de son côté.",
		shortDesc: "Ce Pokémon bénéficie de l’effet de Chargeur s’il est touché par une capacité de vent ou si Vent Arrière commence.",

		start: "#electromorphosis",
	},
	windrider: {
		name: "Aéroporté",
		// Official flavor text: "L’Attaque du Pokémon augmente si un vent arrière souffle ou s’il est touché par une capacité faisant appel au vent. Dans ce dernier cas, il ne subit aucun dégât."
		desc: "Ce Pokémon est immunisé contre les capacités de vent et son Attaque augmente d’un niveau quand il est touché par une capacité de vent ou quand Vent Arrière commence de son côté.",
		shortDesc: "Attaque +1 s’il est touché par une capacité de vent ou si Vent Arrière commence. Immunité aux capacités de vent.",
	},
	wonderguard: {
		name: "Garde Mystik",
		shortDesc: "Ce Pokémon ne peut subir des dégâts que par des capacités super efficaces et des dégâts indirects.",
		gen4: {
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	wonderskin: {
		name: "Peau Miracle",
		// Official flavor text: "Le Pokémon résiste mieux aux capacités de statut."
		desc: "Les capacités qui n’infligent pas de dégâts et qui vérifient la Précision voient leur Précision passer à 50 % quand elles sont utilisées contre ce Pokémon. Cet effet s’applique avant les autres effets qui modifient la Précision.",
		shortDesc: "Les capacités de statut soumises à la Précision ont 50 % de Précision contre ce Pokémon.",
	},
	zenmode: {
		name: "Mode Transe",
		// Official flavor text: "Le Pokémon change de forme quand il lui reste moins de la moitié de ses PV."
		desc: "Si ce Pokémon est un Darumacho ou un Darumacho de Galar, il passe en Mode Transe s’il a 1/2 ou moins de ses PV max à la fin d’un tour. Si les PV de Darumacho sont supérieurs à 1/2 de ses PV max à la fin d’un tour, il repasse en Mode Normal.",
		shortDesc: "Si Darumacho, en fin de tour passe en Mode Normal s’il a plus de 1/2 de ses PV max, sinon en Mode Transe.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		transform: "Le talent Mode Transe s’active !",
		transformEnd: "Le talent Mode Transe n’est plus actif !",
	},
	zerotohero: {
		name: "Supermutation",
		shortDesc: "Si ce Pokémon est un Superdofin en Forme Ordinaire, il passe en Forme Super quand il se retire.",

		activate: "  {POKEMON} est revenu sous une autre forme !",
	},

	// CAP
	mountaineer: {
		name: null, // NEEDS TRANSLATION: not in PokeAPI
		shortDesc: "À son entrée au combat, ce Pokémon évite toutes les attaques de type Roche et Piège de Roc.",
	},
	rebound: {
		name: null, // NEEDS TRANSLATION: not in PokeAPI
		desc: "À son entrée au combat, ce Pokémon bloque certaines capacités de statut et les utilise à la place contre leur lanceur.",
		shortDesc: "À son entrée au combat, bloque certaines capacités de statut et les renvoie à leur lanceur.",

		move: "#magiccoat",
	},
	persistent: {
		name: null, // NEEDS TRANSLATION: not in PokeAPI
		desc: "La durée de Gravité, Anti-Soin, Zone Magique, Rune Protect, Vent Arrière, Distorsion et Zone Étrange est prolongée de 2 tours si l’effet est déclenché par ce Pokémon.",
		shortDesc: "Une fois utilisés, Gravité/Anti-Soin/Rune Protect/Vent Arrière/les zones durent 2 tours de plus.",

		activate: "  {POKEMON} prolonge {MOVE} de 2 tours !",
	},
};
