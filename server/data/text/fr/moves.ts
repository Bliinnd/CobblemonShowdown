export const MovesText: { [id: IDEntry]: MoveText } = {
	"10000000voltthunderbolt": {
		name: "Giga-Tonnerre",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "A de très grandes chances d’infliger un coup critique.",
		shortDesc: "Taux de critique très élevé.",
	},
	absorb: {
		name: "Vole-Vie",
		// Official flavor text: "Une attaque qui convertit la moitié des dégâts infligés en PV pour le lanceur."
		desc: "Le lanceur récupère 1/2 des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut). Si le lanceur tient une Grosse Racine, les PV récupérés sont multipliés par 1,3, arrondi à l’entier le plus proche (0,5 vers le bas).",
		shortDesc: "Le lanceur récupère 50 % des dégâts infligés.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	accelerock: {
		name: "Vif Roc",
		// Official flavor text: "Le lanceur charge l’ennemi à toute vitesse. Frappe en priorité."
		desc: "Aucun effet supplémentaire.",
		shortDesc: "Frappe généralement en premier.",
	},
	acid: {
		name: "Acide",
		// Official flavor text: "Le lanceur attaque l’ennemi avec un jet d’acide corrosif. Peut aussi baisser sa Défense Spéciale."
		desc: "10 % de chances de baisser la Défense Spéciale de la cible d’un niveau.",
		shortDesc: "10 % de chances de baisser la Déf Spé des adversaires d’un niveau.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	acidarmor: {
		name: "Acidarmure",
		// Official flavor text: "Le lanceur modifie sa structure moléculaire pour se liquéfier et beaucoup augmenter sa Défense."
		desc: "Augmente la Défense du lanceur de deux niveaux.",
		shortDesc: "Augmente la Défense du lanceur de 2 niveaux.",
	},
	aciddownpour: {
		name: "Déluge Causti-Toxique",
		shortDesc: "La puissance est égale à la puissance Z de la capacité de base.",
	},
	acidspray: {
		name: "Bombe Acide",
		// Official flavor text: "Projette un liquide acide qui fait fondre l’ennemi. Sa Défense Spéciale diminue beaucoup."
		desc: "100 % de chances de baisser la Défense Spéciale de la cible de deux niveaux.",
		shortDesc: "100 % de chances de baisser la Déf Spé de la cible de 2 niveaux.",
	},
	acrobatics: {
		name: "Acrobatie",
		shortDesc: "La puissance double si le lanceur ne tient pas d’objet.",
	},
	acupressure: {
		name: "Acupression",
		// Official flavor text: "Le lanceur utilise sa connaissance des points de pression pour beaucoup augmenter une stat."
		desc: "Augmente une stat aléatoire de deux niveaux, tant que cette stat n’est pas déjà au niveau 6. Le lanceur peut utiliser cette capacité sur lui-même ou sur un allié adjacent. Échoue si aucun niveau de stat ne peut être augmenté ou si elle est utilisée sur un allié protégé par un clone.",
		shortDesc: "Augmente une stat aléatoire du lanceur ou d’un allié de 2 niveaux.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	aerialace: {
		name: "Aéropique",
		shortDesc: "Cette capacité ne peut pas rater.",
	},
	aeroblast: {
		name: "Aéroblast",
		// Official flavor text: "Le lanceur projette une tornade sur l’ennemi pour infliger des dégâts. Taux de critiques élevé."
		desc: "A plus de chances d’infliger un coup critique.",
		shortDesc: "Taux de critique élevé.",
	},
	afteryou: {
		name: "Après Vous",
		// Official flavor text: "S’il est le premier à agir, le lanceur permet à sa cible d’utiliser une capacité juste après lui."
		desc: "La cible agit immédiatement après le lanceur ce tour-ci, quelle que soit la priorité de la capacité qu’elle a choisie. Échoue si la cible devait de toute façon agir juste après, ou si elle a déjà agi ce tour-ci.",
		shortDesc: "La cible agit juste après le lanceur.",

		activate: "  {TARGET} accepte avec joie !",
	},
	agility: {
		name: "Hâte",
		// Official flavor text: "Le lanceur se relaxe et allège son corps pour beaucoup augmenter sa Vitesse."
		desc: "Augmente la Vitesse du lanceur de deux niveaux.",
		shortDesc: "Augmente la Vitesse du lanceur de 2 niveaux.",
	},
	aircutter: {
		name: "Tranch’Air",
		// Official flavor text: "Le lanceur appelle des vents tranchants qui lacèrent l’ennemi. Taux de critiques élevé."
		desc: "A plus de chances d’infliger un coup critique.",
		shortDesc: "Taux de critique élevé. Touche les adversaires adjacents.",
	},
	airslash: {
		name: "Lame d’Air",
		// Official flavor text: "Le lanceur attaque avec une lame d’air qui fend tout. Peut aussi apeurer l’ennemi."
		desc: "30 % de chances d’apeurer la cible.",
		shortDesc: "30 % de chances d’apeurer la cible.",
	},
	alloutpummeling: {
		name: "Combo Hyper-Furie",
		shortDesc: "La puissance est égale à la puissance Z de la capacité de base.",
	},
	alluringvoice: {
		name: "Voix Envoûtante",
		// Official flavor text: "Le lanceur attaque la cible avec sa voix angélique. Cette capacité rend la cible confuse si ses stats ont augmenté pendant ce tour."
		desc: "100 % de chances de rendre la cible confuse si l’un de ses niveaux de stats a augmenté ce tour-ci.",
		shortDesc: "100 % de chances de rendre confuse une cible dont une stat a augmenté ce tour-ci.",
	},
	allyswitch: {
		name: "Interversion",
		// Official flavor text: "Le lanceur se téléporte à l’aide d’un pouvoir mystérieux. Il échange sa place avec celle d’un allié sur le terrain."
		desc: "Le lanceur échange sa place avec celle de son allié. Échoue si le lanceur est le seul Pokémon de son camp. Cette capacité a 1 chance sur X de réussir, où X vaut 1 au départ et triple à chaque utilisation réussie de cette capacité. X revient à 1 si cette capacité échoue ou si la dernière capacité utilisée par le lanceur n’est pas Interversion.",
		shortDesc: "Le lanceur et son allié échangent leur place ; peut échouer si réutilisée.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	amnesia: {
		name: "Amnésie",
		// Official flavor text: "Le lanceur fait le vide dans son esprit pour oublier ses soucis. Augmente beaucoup sa Défense Spéciale."
		desc: "Augmente la Défense Spéciale du lanceur de deux niveaux.",
		shortDesc: "Augmente la Déf Spé du lanceur de 2 niveaux.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	anchorshot: {
		name: "Ancrage",
		// Official flavor text: "Le lanceur jette son ancre sur la cible pour l’attaquer. Une fois accrochée, elle l’empêche de s’enfuir."
		desc: "Empêche la cible d’être remplacée. La cible peut tout de même être remplacée si elle tient une Carapace Mue ou si elle utilise Relais, Eau Revoir, Dernier Mot, Téléport, Demi-Tour ou Change Éclair. L’effet prend fin si le lanceur ou la cible quitte le terrain.",
		shortDesc: "Empêche la cible d’être remplacée.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	ancientpower: {
		name: "Pouvoir Antique",
		// Official flavor text: "Une attaque préhistorique qui peut augmenter toutes les stats du lanceur d’un seul coup."
		desc: "10 % de chances d’augmenter l’Attaque, la Défense, l’Attaque Spéciale, la Défense Spéciale et la Vitesse du lanceur d’un niveau.",
		shortDesc: "10 % de chances d’augmenter toutes les stats d’un niveau (sauf Précision et Esquive).",
	},
	appleacid: {
		name: "Acide Malique",
		// Official flavor text: "Le lanceur attaque son adversaire avec un liquide corrosif créé à partir d’une pomme acide. Baisse la Défense Spéciale de la cible."
		desc: "100 % de chances de baisser la Défense Spéciale de la cible d’un niveau.",
		shortDesc: "100 % de chances de baisser la Déf Spé de la cible d’un niveau.",
	},
	aquacutter: {
		name: "Tranch'Aqua",
		// Official flavor text: "Le lanceur projette de l'eau pressurisée qui entaille la cible comme une lame. Taux de critiques élevé."
		desc: "A plus de chances d’infliger un coup critique.",
		shortDesc: "Taux de critique élevé.",
	},
	aquajet: {
		name: "Aqua-Jet",
		// Official flavor text: "Le lanceur fonce sur l’ennemi si rapidement qu’on parvient à peine à le discerner. Frappe en priorité."
		desc: "Aucun effet supplémentaire.",
		shortDesc: "Frappe généralement en premier.",
	},
	aquaring: {
		name: "Anneau Hydro",
		// Official flavor text: "Un voile d’eau recouvre le lanceur et régénère ses PV à chaque tour."
		desc: "Le lanceur récupère 1/16 de ses PV max, arrondi à l’inférieur, à la fin de chaque tour tant qu’il reste au combat. Si le lanceur tient une Grosse Racine, les PV récupérés sont multipliés par 1,3, arrondi à l’entier le plus proche (0,5 vers le bas). Si le lanceur utilise Relais, son remplaçant bénéficie de l’effet de soin.",
		shortDesc: "Le lanceur récupère 1/16 de ses PV max à chaque tour.",

		start: "  {POKEMON} s’entoure d’un voile d’eau !",
		heal: "  Le voile d’eau restaure les PV {POKEMON:de} !",
	},
	aquastep: {
		name: "Danse Aquatique",
		// Official flavor text: "Le lanceur se joue de la cible et lui inflige des dégâts avec ses pas de danse gracieux et légers. Cette capacité augmente la Vitesse du lanceur."
		desc: "100 % de chances d’augmenter la Vitesse du lanceur d’un niveau.",
		shortDesc: "100 % de chances d’augmenter la Vitesse du lanceur d’un niveau.",
	},
	aquatail: {
		name: "Hydro-Queue",
		shortDesc: "Aucun effet supplémentaire.",
	},
	armorcannon: {
		name: "Canon Blindé",
		// Official flavor text: "Le lanceur tire un boulet de canon ardent provenant de sa propre armure sur la cible. Cela baisse la Défense et la Défense Spéciale du lanceur."
		desc: "Baisse la Défense et la Défense Spéciale du lanceur d’un niveau.",
		shortDesc: "Baisse la Défense et la Déf Spé du lanceur d’un niveau.",
	},
	armthrust: {
		name: "Cogne",
		// Official flavor text: "Un déluge de coups adressés avec la paume qui frappe de deux à cinq fois d’affilée."
		desc: "Frappe de deux à cinq fois. 35 % de chances de frapper deux ou trois fois et 15 % de chances de frapper quatre ou cinq fois. Si l’un des coups détruit le clone de la cible, celle-ci subit les dégâts des coups restants. Si le lanceur a le talent Multi-Coups, cette capacité frappe toujours cinq fois. Si le lanceur tient un Dé Pipé, cette capacité frappe de 4 à 5 fois.",
		shortDesc: "Frappe de 2 à 5 fois en un tour.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	aromatherapy: {
		name: "Aromathérapie",
		// Official flavor text: "Le lanceur libère un parfum apaisant qui guérit toutes les altérations de statut de l’équipe."
		desc: "Soigne l’altération de statut non volatile de chaque Pokémon de l’équipe du lanceur. Les Pokémon au combat ayant le talent Herbivore ne sont pas soignés, sauf s’il s’agit du lanceur.",
		shortDesc: "Soigne toutes les altérations de statut de l’équipe du lanceur.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  Une odeur apaisante flotte dans l’air !",
	},
	aromaticmist: {
		name: "Brume Capiteuse",
		// Official flavor text: "Grâce à un parfum mystérieux, augmente la Défense Spéciale d’un allié."
		desc: "Augmente la Défense Spéciale de la cible d’un niveau. Échoue s’il n’y a aucun allié adjacent au lanceur.",
		shortDesc: "Augmente la Déf Spé d’un allié d’un niveau.",
	},
	assist: {
		name: "Assistance",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Une capacité choisie au hasard parmi celles que connaissent les membres de l’équipe du lanceur est utilisée. Ne peut pas choisir Assistance, Blockhaus, Bec-Canon, Éructation, Passe-Cadeau, Crash Brûlant, Rebond, Célébration, Babil, Projection, Crash Musclé, Photocopie, Riposte, Implore, Lien du Destin, Détection, Tunnel, Plongée, Draco-Queue, Ténacité, Ruse, Vol, Mitra-Poing, Par Ici, Coup d’Main, Mains Jointes, Bouclier Royal, Crash Magique, Tatamigaeshi, Moi d’Abord, Métronome, Copie, Voile Miroir, Mimique, Force Nature, Crash Toxique, Hantise, Abri, Poudre Fureur, Hurlement, Revenant, Carapiège, Gribouille, Chute Libre, Blabla Dodo, Saisie, Pico-Défense, Projecteur, Lutte, Passe-Passe, Pluie Térastrale, Larcin, Morphing, Tour de Magie, Cyclone ni Crash Obscur.",
		shortDesc: "Utilise une capacité aléatoire connue par un membre de l’équipe.",
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
	},
	assurance: {
		name: "Assurance",
		// Official flavor text: "Cette attaque est deux fois plus efficace si l’ennemi a déjà été blessé durant ce tour."
		desc: "La puissance double si la cible a déjà subi des dégâts ce tour-ci, hors dégâts directs de Cognobidon, de la confusion, de Malédiction ou de Balance.",
		shortDesc: "La puissance double si la cible a subi des dégâts ce tour-ci.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	astonish: {
		name: "Étonnement",
		// Official flavor text: "Le lanceur attaque l’ennemi en poussant un cri terrifiant. Peut aussi l’apeurer."
		desc: "30 % de chances d’apeurer la cible.",
		shortDesc: "30 % de chances d’apeurer la cible.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	astralbarrage: {
		name: "Éclat Spectral",
		// Official flavor text: "Le lanceur attaque l’ennemi avec une multitude de petits spectres."
		desc: "Aucun effet supplémentaire.",
		shortDesc: "Aucun effet supplémentaire. Touche les adversaires adjacents.",
	},
	attackorder: {
		name: "Appel Attaque",
		// Official flavor text: "Le lanceur appelle ses sous-fifres pour frapper l’ennemi. Taux de critiques élevé."
		desc: "A plus de chances d’infliger un coup critique.",
		shortDesc: "Taux de critique élevé.",
	},
	attract: {
		name: "Attraction",
		// Official flavor text: "Si l’ennemi est du sexe opposé, il tombe amoureux et rechigne alors à attaquer."
		desc: "Rend la cible amoureuse, ce qui l’empêche d’attaquer 50 % du temps. Échoue si le lanceur et la cible sont du même sexe, si l’un des deux est asexué ou si la cible est déjà amoureuse. L’effet prend fin quand le lanceur ou la cible n’est plus au combat. Les Pokémon ayant le talent Benêt ou protégés par le talent Aroma-Voile y sont immunisés.",
		shortDesc: "Une cible de sexe opposé tombe amoureuse.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} entre dans l’état « Attraction » !",
		startFromItem: "  {ITEM:definite:capitalize} rend{INFLECT:ITEM:s=:p=ent} {POKEMON} amoureux !",
		end: "  {POKEMON} sort de l’état « Attraction » !",
		endFromItem: "  {ITEM:definite:capitalize:classified} {POKEMON:de} le {INFLECT:ITEM:s=sort:p=sortent} de l’état « Attraction » !",
		activate: "  {POKEMON} subit l’état « Attraction » infligé par {TARGET} !",
		cant: "L’état « Attraction » empêche {POKEMON} d’utiliser sa capacité !",
	},
	aurasphere: {
		name: "Aurasphère",
		shortDesc: "Cette capacité ne peut pas rater.",
	},
	aurawheel: {
		name: "Roue Libre",
		// Official flavor text: "Morpeko libère l’énergie stockée dans ses joues pour attaquer et augmenter sa Vitesse. Le type de cette capacité change en fonction de la forme de Morpeko."
		desc: "100 % de chances d’augmenter la Vitesse du lanceur d’un niveau. Si le lanceur est un Morpeko en Mode Rassasié, cette capacité est de type Électrik. Si le lanceur est un Morpeko en Mode Affamé, cette capacité est de type Ténèbres. Cette capacité ne peut réussir que si la forme actuelle du lanceur, en tenant compte de Morphing, est Morpeko en Mode Rassasié ou en Mode Affamé.",
		shortDesc: "Morpeko : Électrik ; Affamé : Ténèbres ; 100 % +1 Vit.",
	},
	aurorabeam: {
		name: "Onde Boréale",
		// Official flavor text: "Envoie un rayon arc-en-ciel sur l’ennemi. Peut aussi baisser son Attaque."
		desc: "10 % de chances de baisser l’Attaque de la cible d’un niveau.",
		shortDesc: "10 % de chances de baisser l’Attaque de la cible d’un niveau.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	auroraveil: {
		name: "Voile Aurore",
		// Official flavor text: "Réduit les dégâts causés par les capacités physiques et spéciales durant cinq tours. Ne peut être utilisée que lorsqu’il grêle."
		desc: "Pendant 5 tours, le lanceur et les membres de son équipe subissent 0,5× les dégâts des attaques physiques et spéciales, ou 0,66× en combat en Duo ; ne réduit pas davantage les dégâts en combinaison avec Protection ou Mur Lumière. Les coups critiques ignorent cette protection. L’effet est retiré du camp du lanceur si le lanceur ou un allié est touché avec succès par Casse-Brique, Psycho-Croc ou Anti-Brume. Casse-Brique et Psycho-Croc retirent l’effet avant le calcul des dégâts. Dure 8 tours si le lanceur tient une Lumargile. Échoue si la météo n’est pas Neige.",
		shortDesc: "Pendant 5 tours, les dégâts subis par l’équipe sont réduits de moitié. Neige uniquement.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  Voile Aurore augmente la résistance de {TEAM} aux capacités physiques et spéciales !",
		end: "  Voile Aurore n’a plus d’effet sur {TEAM} !",
	},
	autotomize: {
		name: "Allègement",
		// Official flavor text: "Le lanceur se débarrasse des parties inutiles de son corps. Son poids diminue et sa Vitesse augmente beaucoup."
		desc: "Augmente la Vitesse du lanceur de deux niveaux. Si la Vitesse du lanceur a été modifiée, son poids diminue de 100 kg tant qu’il reste au combat. Cet effet est cumulable, mais ne peut pas réduire le poids du lanceur à moins de 0,1 kg.",
		shortDesc: "Augmente la Vitesse du lanceur de 2 niveaux ; il perd 100 kg.",

		start: "  {POKEMON} est devenu très vif !",
	},
	avalanche: {
		name: "Avalanche",
		// Official flavor text: "Une attaque deux fois plus puissante si le lanceur a été blessé par l’ennemi durant le tour."
		desc: "La puissance double si le lanceur a été touché par la cible ce tour-ci.",
		shortDesc: "La puissance double si le lanceur a été blessé par la cible.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	axekick: {
		name: "Talon-Marteau",
		// Official flavor text: "Le lanceur donne un coup de talon descendant à la cible, ce qui peut aussi la rendre confuse. S'il échoue, le lanceur se blesse."
		desc: "30 % de chances de rendre la cible confuse. Si cette attaque échoue, le lanceur perd la moitié de ses PV max, arrondi à l’inférieur, en dégâts de chute. Les Pokémon ayant le talent Garde Magik ne subissent pas de dégâts de chute.",
		shortDesc: "30 % de confusion. Le lanceur perd 50 % de ses PV max s’il rate.",

		damage: "#crash",
	},
	babydolleyes: {
		name: "Regard Touchant",
		// Official flavor text: "Fixe l’ennemi d’un air très attendrissant qui le touche et diminue son Attaque. Agit en priorité."
		desc: "Baisse l’Attaque de la cible d’un niveau.",
		shortDesc: "Baisse l’Attaque de la cible d’un niveau.",
	},
	baddybad: {
		name: "Évo-Ténébro",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Cette capacité active Protection pendant 5 tours.",
		shortDesc: "Active Protection.",
	},
	banefulbunker: {
		name: "Blockhaus",
		// Official flavor text: "Protège le lanceur contre les attaques de l’ennemi et empoisonne ce dernier s’il utilise une attaque directe sur le lanceur."
		desc: "Le lanceur est protégé de la plupart des attaques des autres Pokémon pendant ce tour, et les Pokémon qui entrent en contact avec lui sont empoisonnés. Cette capacité a 1 chance sur X de réussir, où X vaut 1 au départ et triple à chaque utilisation réussie de cette capacité. X revient à 1 si cette capacité échoue, si la dernière capacité utilisée par le lanceur n’est pas Blockhaus, Rempart Brûlant, Détection, Ténacité, Bouclier Royal, Gardomax, Blocage, Abri, Prévention, Piège de Fil, Pico-Défense ou Garde Large, ou si c’était l’une de ces capacités et que la protection du lanceur a été percée. Échoue si le lanceur agit en dernier ce tour-ci.",
		shortDesc: "Protège des attaques. Contact : empoisonne.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	barbbarrage: {
		name: "Multitoxik",
		// Official flavor text: "Une multitude de pointes toxiques frappent la cible et peuvent l'empoisonner. La puissance est doublée si celle-ci est déjà empoisonnée."
		desc: "50 % de chances d’empoisonner la cible. La puissance double si la cible est déjà empoisonnée.",
		shortDesc: "50 % d’empoisonnement. Puissance ×2 si la cible est déjà empoisonnée.",
	},
	barrage: {
		name: "Pilonnage",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Frappe de deux à cinq fois. 35 % de chances de frapper deux ou trois fois et 15 % de chances de frapper quatre ou cinq fois. Si l’un des coups détruit le clone de la cible, celle-ci subit les dégâts des coups restants. Si le lanceur a le talent Multi-Coups, cette capacité frappe toujours cinq fois.",
		shortDesc: "Frappe de 2 à 5 fois en un tour.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	barrier: {
		name: "Bouclier",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Augmente la Défense du lanceur de deux niveaux.",
		shortDesc: "Augmente la Défense du lanceur de 2 niveaux.",
	},
	batonpass: {
		name: "Relais",
		// Official flavor text: "Le lanceur échange sa place et tout changement de stat avec un Pokémon de l’équipe."
		desc: "Le lanceur est remplacé par un autre Pokémon de son équipe. Le Pokémon choisi hérite des modifications de niveaux de stats du lanceur, ainsi que des effets de la confusion, d’Anneau Hydro, de Malédiction, de Cri Draconique, d’Embargo, de Puissance, de Suc Digestif, d’Anti-Soin, de Racines, de Vampigraine, de Verrouillage (Lire-Esprit), de Vol Magnétik, de Requiem, d’Astuce Force, de Lévikinésie, et d’un clone avec ses PV restants. L’effet de Suc Digestif n’est pas transmis si le Pokémon qui le reçoit a un talent qui ne peut pas être affecté.",
		shortDesc: "Le lanceur est remplacé et transmet ses modifications de stats, entre autres.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
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
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	beakblast: {
		name: "Bec-Canon",
		// Official flavor text: "Le lanceur fait chauffer son bec avant d’attaquer. S’il subit une attaque directe pendant la montée en température, l’attaquant sera brûlé."
		desc: "Si le lanceur est touché par une capacité de contact ce tour-ci avant de pouvoir exécuter cette capacité, l’attaquant est brûlé.",
		shortDesc: "Brûle au contact du lanceur avant qu’il n’agisse.",

		start: "  {POKEMON} fait chauffer son bec !",
	},
	beatup: {
		name: "Baston",
		// Official flavor text: "Le lanceur appelle tous les Pokémon de son équipe à attaquer. Plus ils sont nombreux, plus il y a d’attaques."
		desc: "Frappe une fois pour le lanceur et une fois pour chaque Pokémon de son équipe qui n’est pas K.O. et n’a pas d’altération de statut non volatile. La puissance de chaque coup est égale à 5+(X/10), où X est l’Attaque de base de chaque Pokémon participant ; chaque coup est considéré comme venant du lanceur.",
		shortDesc: "Tous les alliés en bonne santé aident à blesser la cible.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  Attaque de {NAME}!",
	},
	behemothbash: {
		name: "Aegis Maxima",
		shortDesc: "Aucun effet supplémentaire.",
		gen8: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	behemothblade: {
		name: "Gladius Maximus",
		shortDesc: "Aucun effet supplémentaire.",
		gen8: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	belch: {
		name: "Éructation",
		// Official flavor text: "Le lanceur se tourne vers l’ennemi et lui éructe dessus, infligeant des dégâts. Ne fonctionne que si le lanceur consomme la Baie qu’il tient."
		desc: "Cette capacité ne peut pas être sélectionnée tant que le lanceur n’a pas mangé de Baie, que ce soit en mangeant celle qu’il tenait, en volant et mangeant celle d’un autre Pokémon avec Piqûre ou Picore, ou en mangeant une Baie lancée sur lui avec Dégommage. Une fois la condition remplie, cette capacité peut être sélectionnée et utilisée pour le reste du combat, même si le lanceur obtient ou utilise un autre objet ou se retire. Consommer une Baie avec Don Naturel ne compte pas comme en avoir mangé une.",
		shortDesc: "Ne peut pas être sélectionnée tant que le lanceur n’a pas mangé de Baie.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	bellydrum: {
		name: "Cognobidon",
		// Official flavor text: "Améliore l’Attaque au maximum en sacrifiant la moitié des PV max."
		desc: "Augmente l’Attaque du lanceur de 12 niveaux en échange de la perte de 1/2 de ses PV max, arrondi à l’inférieur. Échoue si le lanceur serait mis K.O. ou si son niveau d’Attaque est de 6.",
		shortDesc: "Le lanceur perd 50 % de ses PV max. Monte son Attaque au maximum.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		boost: "  {POKEMON} sacrifie des PV et monte son Attaque au maximum !",
	},
	bestow: {
		name: "Passe-Cadeau",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "La cible reçoit l’objet tenu par le lanceur. Échoue si le lanceur n’a pas d’objet ou tient un Cristal Z, si la cible tient déjà un objet, si l’objet est une Méga-Gemme et que le lanceur ou la cible est l’espèce pouvant méga-évoluer grâce à elle, ou si l’objet est une Gemme Bleue, une Gemme Rouge, un Orbe Platiné, une Plaque, un Module ou une ROM et que le lanceur ou la cible est respectivement Kyogre, Groudon, Giratina, Arceus, Genesect ou Silvallié.",
		shortDesc: "Le lanceur donne son objet tenu à la cible.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		takeItem: "  {POKEMON} obtient {ITEM:definite} {SOURCE:de:definite:masculine} sauvage !",
	},
	bide: {
		name: "Patience",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Le lanceur est bloqué sur cette capacité pendant deux tours puis, au second tour après l’avoir utilisée, il attaque le dernier Pokémon qui l’a touché, en lui infligeant le double des PV qu’il a perdus à cause d’attaques pendant ces deux tours. Si le dernier Pokémon qui l’a touché n’est plus au combat, le lanceur attaque un Pokémon adverse au hasard à la place. Si le lanceur est empêché d’agir pendant l’utilisation de cette capacité, l’effet prend fin. Cette capacité ne peut pas rater et n’ignore pas les immunités de type.",
		shortDesc: "Attend 2 tours ; inflige le double des dégâts subis.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} prend son mal en patience !",
		end: "  {POKEMON} perd patience et se déchaîne !",
		activate: "  {POKEMON} prend son mal en patience !",
	},
	bind: {
		name: "Étreinte",
		// Official flavor text: "Ligote l’ennemi avec les tentacules ou le corps pour l’écraser durant quatre à cinq tours."
		desc: "Empêche la cible d’être remplacée pendant quatre ou cinq tours (sept tours si le lanceur tient une Accro Griffe). Inflige à la cible des dégâts égaux à 1/8 de ses PV max (1/6 si le lanceur tient une Bande Étreinte), arrondi à l’inférieur, à la fin de chaque tour pendant l’effet. La cible peut tout de même être remplacée si elle tient une Carapace Mue ou si elle utilise Relais, Eau Revoir, Dernier Mot, Queulonage, Téléport, Demi-Tour ou Change Éclair. L’effet prend fin si le lanceur ou la cible quitte le terrain, ou si la cible utilise avec succès Toupie Éclat, Tour Rapide ou Clonage. Cet effet ne se cumule pas et n’est pas réinitialisé par l’utilisation de cette capacité ou d’une autre capacité de piège.",
		shortDesc: "Piège et blesse la cible pendant 4 à 5 tours.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
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
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} est pris dans l’étreinte {SOURCE:de} !",
		move: "#wrap",
	},
	bite: {
		name: "Morsure",
		// Official flavor text: "L’ennemi est mordu par de tranchantes canines. Peut l’apeurer."
		desc: "30 % de chances d’apeurer la cible.",
		shortDesc: "30 % de chances d’apeurer la cible.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	bitterblade: {
		name: "Lame en Peine",
		// Official flavor text: "Le lanceur concentre son amertume du monde des vivants dans la pointe de ses épées et tranche la cible. La moitié des dégâts infligés sont convertis en PV pour le lanceur."
		desc: "Le lanceur récupère 1/2 des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut). Si le lanceur tient une Grosse Racine, les PV récupérés sont multipliés par 1,3, arrondi à l’entier le plus proche (0,5 vers le bas).",
		shortDesc: "Le lanceur récupère 50 % des dégâts infligés.",
	},
	bittermalice: {
		name: "Cœur de Rancœur",
		// Official flavor text: "Une rancœur glaciale frappe la cible et baisse son Attaque."
		desc: "100 % de chances de baisser l’Attaque de la cible d’un niveau.",
		shortDesc: "100 % de chances de baisser l’Attaque de la cible d’un niveau.",
	},
	blackholeeclipse: {
		name: "Trou Noir des Ombres",
		shortDesc: "La puissance est égale à la puissance Z de la capacité de base.",
	},
	blastburn: {
		name: "Rafale Feu",
		// Official flavor text: "Une explosion ardente souffle l’adversaire. Le lanceur doit se reposer au tour suivant."
		desc: "Si cette capacité réussit, le lanceur doit se recharger au tour suivant et ne peut pas choisir de capacité.",
		shortDesc: "Le lanceur ne peut pas agir au tour suivant.",
	},
	blazekick: {
		name: "Pied Brûleur",
		// Official flavor text: "Le lanceur envoie un coup de pied au taux de critiques élevé. Peut aussi brûler la cible."
		desc: "10 % de chances de brûler la cible et plus de chances d’infliger un coup critique.",
		shortDesc: "Taux de critique élevé. 10 % de chances de brûler.",
	},
	blazingtorque: {
		name: "Crash Brûlant",
		desc: "30 % de chances de brûler la cible.",
		shortDesc: "30 % de chances de brûler la cible.",
	},
	bleakwindstorm: {
		name: "Typhon Hivernal",
		// Official flavor text: "Le lanceur déclenche un typhon froid et brutal qui fait trembler le cœur et le corps de la cible, ce qui peut aussi baisser sa Vitesse."
		desc: "30 % de chances de baisser la Vitesse de la cible d’un niveau. Si la météo est Pluie battante ou Pluie, cette capacité ne peut pas rater. Si cette capacité est utilisée contre un Pokémon tenant un Parapluie Solide, sa Précision reste à 80 %.",
		shortDesc: "30 % de chances de baisser la Vitesse des adversaires d’un niveau. Pluie : ne rate pas.",
	},
	blizzard: {
		name: "Blizzard",
		// Official flavor text: "Une violente tempête de neige s’abat sur l’ennemi. Peut aussi le geler."
		desc: "10 % de chances de geler la cible. Si la météo est Neige, cette capacité ne peut pas rater.",
		shortDesc: "10 % de chances de geler les adversaires. Ne rate pas sous la Neige.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	block: {
		name: "Barrage",
		// Official flavor text: "Le lanceur bloque la route de l’ennemi pour empêcher sa fuite."
		desc: "Empêche la cible d’être remplacée. La cible peut tout de même être remplacée si elle tient une Carapace Mue ou si elle utilise Relais, Eau Revoir, Dernier Mot, Téléport, Demi-Tour ou Change Éclair. L’effet prend fin si le lanceur ou la cible quitte le terrain.",
		shortDesc: "Empêche la cible d’être remplacée.",
		gen7: {
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
	bloodmoon: {
		name: "Lune Rouge",
		shortDesc: "Ne peut pas être sélectionnée au tour suivant son utilisation.",
	},
	bloomdoom: {
		name: "Pétalexplosion Éblouissante",
		shortDesc: "La puissance est égale à la puissance Z de la capacité de base.",
	},
	blueflare: {
		name: "Flamme Bleue",
		// Official flavor text: "De magnifiques et redoutables flammes bleues fondent sur l’ennemi. Peut aussi le brûler."
		desc: "20 % de chances de brûler la cible.",
		shortDesc: "20 % de chances de brûler la cible.",
	},
	bodypress: {
		name: "Big Splash",
		// Official flavor text: "Le lanceur utilise son corps pour attaquer sa cible. Plus la Défense du lanceur est élevée, plus les dégâts infligés sont importants."
		desc: "Les dégâts sont calculés en utilisant la Défense du lanceur à la place de son Attaque, en tenant compte des modifications de niveaux de stats. Les autres effets qui modifient l’Attaque s’appliquent normalement.",
		shortDesc: "Utilise la Déf du lanceur à la place de son Atq pour calculer les dégâts.",
	},
	bodyslam: {
		name: "Plaquage",
		// Official flavor text: "Le lanceur se laisse tomber sur l’ennemi de tout son poids. Peut aussi le paralyser."
		desc: "30 % de chances de paralyser la cible. Les dégâts doublent et la capacité ne peut pas rater si la cible a utilisé Lilliput depuis son entrée au combat.",
		shortDesc: "30 % de chances de paralyser la cible.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	boltbeak: {
		name: "Prise de Bec",
		// Official flavor text: "Le lanceur transperce sa cible avec son bec chargé d’électricité. Si cette attaque est lancée avant que la cible n’attaque, elle infligera deux fois plus de dégâts."
		desc: "La puissance double si le lanceur agit avant la cible.",
		shortDesc: "La puissance double si le lanceur agit avant la cible.",
	},
	boltstrike: {
		name: "Charge Foudre",
		// Official flavor text: "Le lanceur s’enveloppe d’une charge électrique surpuissante et se jette sur l’ennemi. Peut aussi le paralyser."
		desc: "20 % de chances de paralyser la cible.",
		shortDesc: "20 % de chances de paralyser la cible.",
	},
	boneclub: {
		name: "Massd’Os",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "10 % de chances d’apeurer la cible.",
		shortDesc: "10 % de chances d’apeurer la cible.",
	},
	bonemerang: {
		name: "Osmerang",
		// Official flavor text: "Le lanceur projette son os comme un boomerang. Cette attaque frappe à l’aller et au retour."
		desc: "Frappe deux fois. Si le premier coup détruit le clone de la cible, celle-ci subit les dégâts du second coup.",
		shortDesc: "Frappe 2 fois en un tour.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	bonerush: {
		name: "Charge Os",
		// Official flavor text: "Le lanceur frappe l’ennemi avec un os de deux à cinq fois d’affilée."
		desc: "Frappe de deux à cinq fois. 35 % de chances de frapper deux ou trois fois et 15 % de chances de frapper quatre ou cinq fois. Si l’un des coups détruit le clone de la cible, celle-ci subit les dégâts des coups restants. Si le lanceur a le talent Multi-Coups, cette capacité frappe toujours cinq fois. Si le lanceur tient un Dé Pipé, cette capacité frappe de 4 à 5 fois.",
		shortDesc: "Frappe de 2 à 5 fois en un tour.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	boomburst: {
		name: "Bang Sonique",
		// Official flavor text: "Attaque les Pokémon alentour grâce à une onde sonore assourdissante qui détruit tout sur son passage."
		desc: "Aucun effet supplémentaire.",
		shortDesc: "Aucun effet supplémentaire. Touche les Pokémon adjacents.",
	},
	bounce: {
		name: "Rebond",
		// Official flavor text: "Le lanceur bondit très haut et plonge sur l’ennemi au second tour. Peut aussi le paralyser."
		desc: "30 % de chances de paralyser la cible. Cette attaque se charge au premier tour et s’exécute au second. Au premier tour, le lanceur évite toutes les attaques sauf Tornade, Vent Violent, Stratopercut, Anti-Air, Myria-Flèches, Fatal-Foudre et Ouragan, et Tornade et Ouragan ont une puissance doublée contre lui. Si le lanceur tient une Herbe Pouvoir, la capacité s’exécute en un seul tour.",
		shortDesc: "Bondit au tour 1. Frappe au tour 2. 30 % de paralysie.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		prepare: "{POKEMON} se propulse dans les airs !",
	},
	bouncybubble: {
		name: "Évo-Thalasso",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Le lanceur récupère 1/2 des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut). Si le lanceur tient une Grosse Racine, les PV récupérés sont multipliés par 1,3, arrondi à l’entier le plus proche (0,5 vers le bas).",
		shortDesc: "Le lanceur récupère 50 % des dégâts infligés.",
	},
	branchpoke: {
		name: "Tapotige",
		// Official flavor text: "Le lanceur attaque sa cible en la piquant avec une branche pointue."
		desc: "Aucun effet supplémentaire.",
		shortDesc: "Aucun effet supplémentaire.",
	},
	bravebird: {
		name: "Rapace",
		// Official flavor text: "Le lanceur replie ses ailes et charge en rase-mottes. Blesse gravement le lanceur."
		desc: "Si la cible a perdu des PV, le lanceur subit des dégâts de recul égaux à 33 % des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut), mais d’au moins 1 PV.",
		shortDesc: "Dégâts de recul de 33 %.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	breakingswipe: {
		name: "Abattage",
		// Official flavor text: "Le lanceur balaie violemment le camp adverse avec son immense queue. Baisse l’Attaque de la cible."
		desc: "100 % de chances de baisser l’Attaque de la cible d’un niveau.",
		shortDesc: "100 % de chances de baisser l’Attaque des adversaires d’un niveau.",
	},
	breakneckblitz: {
		name: "Turbo-Charge Bulldozer",
		shortDesc: "La puissance est égale à la puissance Z de la capacité de base.",
	},
	brickbreak: {
		name: "Casse-Brique",
		// Official flavor text: "Le lanceur attaque avec le tranchant de la main. Permet aussi de briser les barrières comme Mur Lumière et Protection."
		desc: "Si cette attaque ne rate pas, les effets de Protection, Mur Lumière et Voile Aurore prennent fin du côté de la cible avant le calcul des dégâts.",
		shortDesc: "Détruit les écrans, sauf si la cible est immunisée.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  {POKEMON} brise les protections de {TEAM} !",
	},
	brine: {
		name: "Saumure",
		// Official flavor text: "Cette attaque est deux fois plus puissante lorsque l’ennemi a moins de la moitié de ses PV."
		desc: "La puissance double s’il reste à la cible la moitié ou moins de ses PV max.",
		shortDesc: "La puissance double si la cible a 50 % de ses PV ou moins.",
	},
	brutalswing: {
		name: "Centrifugifle",
		// Official flavor text: "Le lanceur pivote pour prendre de l’élan et infliger des dégâts."
		desc: "Aucun effet supplémentaire.",
		shortDesc: "Aucun effet supplémentaire. Touche les Pokémon adjacents.",
	},
	bubble: {
		name: "Écume",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "10 % de chances de baisser la Vitesse de la cible d’un niveau.",
		shortDesc: "10 % de chances de baisser la Vitesse des adversaires d’un niveau.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	bubblebeam: {
		name: "Bulles d’O",
		// Official flavor text: "Des bulles sont envoyées avec puissance sur l’ennemi. Peut aussi baisser sa Vitesse."
		desc: "10 % de chances de baisser la Vitesse de la cible d’un niveau.",
		shortDesc: "10 % de chances de baisser la Vitesse de la cible d’un niveau.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	bugbite: {
		name: "Piqûre",
		// Official flavor text: "Le lanceur pique l’ennemi. Si ce dernier tient une Baie, le lanceur la dévore et obtient son effet."
		desc: "Si cette capacité réussit et que le lanceur n’est pas K.O., il vole la Baie que tient la cible, s’il y en a une, et la mange immédiatement, profitant de ses effets même si l’objet du lanceur est ignoré. Les objets perdus à cause de cette capacité ne peuvent pas être récupérés avec Recyclage ou le talent Récolte.",
		shortDesc: "Le lanceur vole et mange la Baie de la cible.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		removeItem: "  {SOURCE} vole et mange {ITEM:definite:classified} de la cible !",
	},
	bugbuzz: {
		name: "Bourdon",
		// Official flavor text: "Le lanceur fait vibrer son corps pour lancer une vague sonique. Peut aussi baisser la Défense Spéciale de l’ennemi."
		desc: "10 % de chances de baisser la Défense Spéciale de la cible d’un niveau.",
		shortDesc: "10 % de chances de baisser la Déf Spé de la cible d’un niveau.",
	},
	bulkup: {
		name: "Gonflette",
		// Official flavor text: "Le lanceur tend ses muscles pour se gonfler, ce qui booste son Attaque et sa Défense."
		desc: "Augmente l’Attaque et la Défense du lanceur d’un niveau.",
		shortDesc: "Augmente l’Attaque et la Défense du lanceur d’un niveau.",
	},
	bulldoze: {
		name: "Piétisol",
		// Official flavor text: "Le lanceur piétine le sol et inflige des dégâts à tous les Pokémon autour de lui. Baisse aussi leur Vitesse."
		desc: "100 % de chances de baisser la Vitesse de la cible d’un niveau.",
		shortDesc: "100 % de chances de baisser la Vitesse des Pokémon adjacents d’un niveau.",
	},
	bulletpunch: {
		name: "Pisto-Poing",
		// Official flavor text: "Le lanceur envoie des coups de poing aussi rapides que des balles de revolver. Frappe en priorité."
		desc: "Aucun effet supplémentaire.",
		shortDesc: "Frappe généralement en premier.",
	},
	bulletseed: {
		name: "Balle Graine",
		// Official flavor text: "Le lanceur mitraille l’ennemi avec une rafale de graines. De deux à cinq rafales sont lancées à la suite."
		desc: "Frappe de deux à cinq fois. 35 % de chances de frapper deux ou trois fois et 15 % de chances de frapper quatre ou cinq fois. Si l’un des coups détruit le clone de la cible, celle-ci subit les dégâts des coups restants. Si le lanceur a le talent Multi-Coups, cette capacité frappe toujours cinq fois. Si le lanceur tient un Dé Pipé, cette capacité frappe de 4 à 5 fois.",
		shortDesc: "Frappe de 2 à 5 fois en un tour.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	burningbulwark: {
		name: "Rempart Brûlant",
		// Official flavor text: "Le lanceur se protège contre les attaques grâce à son pelage incandescent, et si un assaillant utilise une attaque directe contre lui, il le brûle."
		desc: "Le lanceur est protégé de la plupart des attaques des autres Pokémon pendant ce tour, et les Pokémon qui tentent d’entrer en contact avec lui sont brûlés. Les capacités qui n’infligent pas de dégâts passent outre cette protection. Cette capacité a 1 chance sur X de réussir, où X vaut 1 au départ et triple à chaque utilisation réussie de cette capacité. X revient à 1 si cette capacité échoue, si la dernière capacité utilisée par le lanceur n’est pas Blockhaus, Rempart Brûlant, Détection, Ténacité, Bouclier Royal, Gardomax, Blocage, Abri, Prévention, Piège de Fil, Pico-Défense ou Garde Large, ou si c’était l’une de ces capacités et que la protection du lanceur a été percée. Échoue si le lanceur agit en dernier ce tour-ci.",
		shortDesc: "Protège des attaques offensives. Contact : brûle.",
	},
	burningjealousy: {
		name: "Feu Envieux",
		// Official flavor text: "Le lanceur attaque sa cible avec toute sa jalousie. Cette capacité brûle tout Pokémon dont les stats ont augmenté pendant ce tour."
		desc: "100 % de chances de brûler la cible si l’un de ses niveaux de stats a augmenté ce tour-ci.",
		shortDesc: "Brûle à 100 % une cible dont une stat a augmenté ce tour-ci.",
	},
	burnup: {
		name: "Flamme Ultime",
		// Official flavor text: "Le Pokémon se consume et les flammes de son corps infligent des dégâts élevés à la cible. Le lanceur perd le type Feu."
		desc: "Échoue si le lanceur n’est pas de type Feu. Si cette capacité réussit et que le lanceur n’est pas téracristallisé, son type Feu devient « sans type » tant qu’il reste au combat.",
		shortDesc: "Le type Feu du lanceur devient « sans type » ; doit être de type Feu.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},

		typeChange: "  Le feu intérieur {POKEMON:de} s’est entièrement consumé !",
	},
	buzzybuzz: {
		name: "Évo-Dynamo",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "100 % de chances de paralyser l’adversaire.",
		shortDesc: "100 % de chances de paralyser l’adversaire.",
	},
	calmmind: {
		name: "Plénitude",
		// Official flavor text: "Le lanceur se concentre et fait le vide dans son esprit pour augmenter son Attaque Spéciale et sa Défense Spéciale."
		desc: "Augmente l’Attaque Spéciale et la Défense Spéciale du lanceur d’un niveau.",
		shortDesc: "Augmente l’Atq Spé et la Déf Spé du lanceur d’un niveau.",
	},
	camouflage: {
		name: "Camouflage",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Le type du lanceur change selon le terrain du combat : type Normal sur le terrain standard des combats en Wi-Fi, type Électrik sur Champ Électrifié, type Fée sur Champ Brumeux, type Plante sur Champ Herbu et type Psy sur Champ Psychique. Échoue si le type du lanceur ne peut pas être changé ou si le lanceur est déjà uniquement de ce type.",
		shortDesc: "Change le type du lanceur selon le terrain (Normal par défaut).",
		gen6: {
			desc: null, // NEEDS TRANSLATION
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
		},
	},
	captivate: {
		name: "Séduction",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Baisse l’Attaque Spéciale de la cible de deux niveaux. La cible n’est pas affectée si le lanceur et la cible sont du même sexe, ou si l’un des deux est asexué. Les Pokémon ayant le talent Benêt y sont immunisés.",
		shortDesc: "Baisse l’Atq Spé des adversaires de 2 niveaux s’ils sont de sexe opposé.",
	},
	catastropika: {
		name: "Pikachute Foudroyante",
		shortDesc: "Aucun effet supplémentaire.",
	},
	ceaselessedge: {
		name: "Vagues à Lames",
		// Official flavor text: "Des lames de coquillages entaillent la cible en visant ses points faibles. Les débris de coquillage se répandent sous la forme de picots aux pieds de la cible."
		desc: "Si cette capacité réussit, elle place un piège du côté adverse du terrain, qui blesse chaque Pokémon adverse entrant au combat, sauf s’il est de type Vol ou a le talent Lévitation. Trois couches au maximum peuvent être posées ; les adversaires perdent 1/8 de leurs PV max avec une couche, 1/6 avec deux couches et 1/4 avec trois couches, le tout arrondi à l’inférieur. Peut être retiré du côté adverse si un Pokémon utilise Grand Nettoyage, ou si un Pokémon adverse utilise avec succès Toupie Éclat, Tour Rapide ou Anti-Brume, ou est touché par Anti-Brume.",
		shortDesc: "Pose une couche de Picots du côté adverse.",
	},
	celebrate: {
		name: "Célébration",
		shortDesc: "Aucune utilité en combat compétitif.",

		activate: "  Félicitations, {TRAINER} !",
	},
	charge: {
		name: "Chargeur",
		// Official flavor text: "Le lanceur concentre sa puissance pour sa prochaine attaque Électrik. Augmente sa Défense Spéciale."
		desc: "Augmente la Défense Spéciale du lanceur d’un niveau. La puissance de la prochaine attaque de type Électrik du lanceur est doublée ; l’effet prend fin quand le lanceur n’est plus au combat, ou après qu’il a tenté d’utiliser une capacité de type Électrik autre que Chargeur, même si elle échoue.",
		shortDesc: "+1 Déf Spé ; puissance ×2 pour la prochaine capacité Électrik du lanceur.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} se charge en électricité !",
	},
	chargebeam: {
		name: "Rayon Chargé",
		// Official flavor text: "Le lanceur tire un rayon chargé d’électricité. Peut aussi augmenter son Attaque Spéciale."
		desc: "70 % de chances d’augmenter l’Attaque Spéciale du lanceur d’un niveau.",
		shortDesc: "70 % de chances d’augmenter l’Atq Spé du lanceur d’un niveau.",
	},
	charm: {
		name: "Charme",
		// Official flavor text: "Le lanceur fait les yeux doux pour berner l’ennemi et beaucoup réduire son Attaque."
		desc: "Baisse l’Attaque de la cible de deux niveaux.",
		shortDesc: "Baisse l’Attaque de la cible de 2 niveaux.",
	},
	chatter: {
		name: "Babil",
		// Official flavor text: "Attaque avec les ondes sonores assourdissantes qu’il émet en bavardant. Rend l’ennemi confus."
		desc: "100 % de chances de rendre la cible confuse.",
		shortDesc: "100 % de chances de rendre la cible confuse.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	chillingwater: {
		name: "Douche Froide",
		// Official flavor text: "Le lanceur attaque la cible en l'arrosant d'une eau si froide qu'elle détériore son esprit combatif. Baisse l'Attaque de la cible."
		desc: "100 % de chances de baisser l’Attaque de la cible d’un niveau.",
		shortDesc: "100 % de chances de baisser l’Attaque de la cible d’un niveau.",
	},
	chillyreception: {
		name: "Neigeux de Mots",
		// Official flavor text: "Le lanceur fait un si mauvais jeu de mots qu'il jette un froid et échange sa place avec un Pokémon de l'équipe prêt à combattre. La neige tombe pendant cinq tours."
		desc: "Pendant 5 tours, la météo devient Neige. Le lanceur se retire même s’il est piégé et est immédiatement remplacé par un membre de l’équipe choisi. Le lanceur ne se retire pas s’il ne reste aucun membre de l’équipe non K.O.",
		shortDesc: "Déclenche Neige. Le lanceur se retire.",

		prepare: "  {POKEMON} s’apprête à faire un mauvais jeu de mots...",
	},
	chipaway: {
		name: "Attrition",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Ignore les modifications de niveaux de stats de la cible, y compris l’Esquive.",
		shortDesc: "Ignore les modifications de niveaux de stats de la cible.",
	},
	chloroblast: {
		name: "Herblast",
		// Official flavor text: "Le lanceur tire un concentré de sa propre chlorophylle sur la cible, ce qui le blesse également."
		desc: "Si cette capacité réussit, le lanceur perd 1/2 de ses PV max, arrondi au supérieur, sauf s’il a le talent Garde Magik ou Tête de Roc.",
		shortDesc: "Le lanceur perd 50 % de ses PV max.",
	},
	circlethrow: {
		name: "Projection",
		// Official flavor text: "Projette le Pokémon ennemi et le remplace par un autre. Lors d’un combat contre un Pokémon sauvage seul, met fin au combat."
		desc: "Si ni le lanceur ni la cible ne sont K.O., la cible est forcée de se retirer et est remplacée par un allié non K.O. choisi au hasard. Cet effet échoue si la cible est sous l’effet de Racines, a le talent Ventouse, ou si cette capacité a touché un clone.",
		shortDesc: "Force la cible à être remplacée par un allié au hasard.",
	},
	clamp: {
		name: "Claquoir",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Empêche la cible d’être remplacée pendant quatre ou cinq tours (sept tours si le lanceur tient une Accro Griffe). Inflige à la cible des dégâts égaux à 1/8 de ses PV max (1/6 si le lanceur tient une Bande Étreinte), arrondi à l’inférieur, à la fin de chaque tour pendant l’effet. La cible peut tout de même être remplacée si elle tient une Carapace Mue ou si elle utilise Relais, Eau Revoir, Dernier Mot, Queulonage, Téléport, Demi-Tour ou Change Éclair. L’effet prend fin si le lanceur ou la cible quitte le terrain, ou si la cible utilise avec succès Toupie Éclat, Tour Rapide ou Clonage. Cet effet ne se cumule pas et n’est pas réinitialisé par l’utilisation de cette capacité ou d’une autre capacité de piège.",
		shortDesc: "Piège et blesse la cible pendant 4 à 5 tours.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
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
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} est pris dans le Claquoir {SOURCE:de} !",
		move: "#wrap",
	},
	clangingscales: {
		name: "Vibrécaille",
		// Official flavor text: "Le lanceur déclenche un vacarme en frottant ses écailles les unes contre les autres pour attaquer. Baisse la Défense du lanceur."
		desc: "Baisse la Défense du lanceur d’un niveau.",
		shortDesc: "Baisse la Défense du lanceur d’un niveau.",
	},
	clangoroussoul: {
		name: "Dracacophonie",
		// Official flavor text: "Le lanceur sacrifie une partie de ses PV pour augmenter toutes ses stats."
		desc: "Augmente l’Attaque, la Défense, l’Attaque Spéciale, la Défense Spéciale et la Vitesse du lanceur d’un niveau en échange de la perte de 33 % de ses PV max, arrondi à l’inférieur. Échoue si le lanceur serait mis K.O. ou si ses niveaux d’Attaque, de Défense, d’Attaque Spéciale, de Défense Spéciale et de Vitesse ne changeraient pas.",
		shortDesc: "Le lanceur perd 33 % de ses PV max. +1 dans toutes les stats.",
	},
	clangoroussoulblaze: {
		name: "Dracacophonie Flamboyante",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Augmente l’Attaque, la Défense, l’Attaque Spéciale, la Défense Spéciale et la Vitesse du lanceur d’un niveau.",
		shortDesc: "Augmente Atq/Déf/Atq Spé/Déf Spé/Vit du lanceur d’un niveau.",
	},
	clearsmog: {
		name: "Bain de Smog",
		shortDesc: "Remet tous les niveaux de stats de la cible à 0.",
	},
	closecombat: {
		name: "Close Combat",
		// Official flavor text: "Le lanceur combat au corps à corps sans se protéger. Baisse aussi sa Défense et sa Défense Spéciale."
		desc: "Baisse la Défense et la Défense Spéciale du lanceur d’un niveau.",
		shortDesc: "Baisse la Défense et la Déf Spé du lanceur d’un niveau.",
	},
	coaching: {
		name: "Coaching",
		// Official flavor text: "Le lanceur coache ses alliés, augmentant ainsi leur Attaque et leur Défense."
		desc: "Augmente l’Attaque et la Défense de la cible d’un niveau. Échoue s’il n’y a aucun allié adjacent au lanceur.",
		shortDesc: "Augmente l’Attaque et la Défense d’un allié d’un niveau.",
	},
	coil: {
		name: "Enroulement",
		// Official flavor text: "Le lanceur s’enroule sur lui-même et se concentre. Son Attaque, sa Défense et sa Précision augmentent."
		desc: "Augmente l’Attaque, la Défense et la Précision du lanceur d’un niveau.",
		shortDesc: "Augmente l’Attaque, la Défense et la Précision du lanceur d’un niveau.",
	},
	collisioncourse: {
		name: "Nitro Crash",
		// Official flavor text: "Le lanceur change de forme et s'écrase sur la cible dans une explosion antique. Si la capacité est super efficace, elle inflige encore plus de dégâts que d'ordinaire."
		desc: "Les dégâts sont multipliés par 1,3333 si cette capacité est super efficace contre la cible.",
		shortDesc: "Inflige 1,3333× les dégâts si elle est super efficace.",
	},
	combattorque: {
		name: "Crash Musclé",
		desc: "30 % de chances de paralyser la cible.",
		shortDesc: "30 % de chances de paralyser la cible.",
	},
	cometpunch: {
		name: "Poing Comète",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Frappe de deux à cinq fois. 35 % de chances de frapper deux ou trois fois et 15 % de chances de frapper quatre ou cinq fois. Si l’un des coups détruit le clone de la cible, celle-ci subit les dégâts des coups restants. Si le lanceur a le talent Multi-Coups, cette capacité frappe toujours cinq fois.",
		shortDesc: "Frappe de 2 à 5 fois en un tour.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	comeuppance: {
		name: "Vindicte",
		// Official flavor text: "Le lanceur contre-attaque avec un coup infligeant des dégâts supérieurs à ceux de la dernière capacité qui l'a blessé."
		desc: "Inflige au dernier Pokémon adverse ayant touché le lanceur avec une attaque physique ou spéciale ce tour-ci des dégâts égaux à 1,5 fois les PV perdus par le lanceur à cause de cette attaque, arrondi à l’inférieur. Si le lanceur n’a pas perdu de PV à cause de cette attaque, cette capacité inflige 1 PV de dégâts à la place. Si la position de ce Pokémon adverse n’est plus occupée et qu’un autre Pokémon adverse est sur le terrain, c’est lui qui subit les dégâts. Seul le dernier coup d’une attaque à coups multiples est pris en compte. Échoue si le lanceur n’a pas été touché par une attaque physique ou spéciale d’un Pokémon adverse ce tour-ci.",
		shortDesc: "Si le lanceur est touché par une attaque, renvoie 1,5× les dégâts.",
	},
	confide: {
		name: "Confidence",
		// Official flavor text: "Dévoile des secrets à l’ennemi, qui perd alors sa concentration et voit son Attaque Spéciale diminuer."
		desc: "Baisse l’Attaque Spéciale de la cible d’un niveau.",
		shortDesc: "Baisse l’Atq Spé de la cible d’un niveau.",
	},
	confuseray: {
		name: "Onde Folie",
		// Official flavor text: "Un rayon sinistre qui plonge l’ennemi dans un état de confusion."
		desc: "Rend la cible confuse.",
		shortDesc: "Rend la cible confuse.",
	},
	confusion: {
		name: "Choc Mental",
		// Official flavor text: "Une faible vague télékinétique frappe l’ennemi. Peut aussi le plonger dans la confusion."
		desc: "10 % de chances de rendre la cible confuse.",
		shortDesc: "10 % de chances de rendre la cible confuse.",
	},
	constrict: {
		name: "Constriction",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "10 % de chances de baisser la Vitesse de la cible d’un niveau.",
		shortDesc: "10 % de chances de baisser la Vitesse de la cible d’un niveau.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	continentalcrush: {
		name: "Apocalypse Gigalithique",
		shortDesc: "La puissance est égale à la puissance Z de la capacité de base.",
	},
	conversion: {
		name: "Conversion",
		// Official flavor text: "Le lanceur change de type pour prendre celui de la première capacité de sa liste."
		desc: "Le type du lanceur devient le type d’origine de la capacité située dans son premier emplacement. Échoue si le lanceur ne peut pas changer de type, ou si ce type est déjà l’un des types actuels du lanceur.",
		shortDesc: "Le type du lanceur devient celui de sa première capacité.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		typeChange: "  Son élément s'adapte!",
	},
	conversion2: {
		name: "Conversion 2",
		// Official flavor text: "Le lanceur change de type pour être résistant au type de la dernière attaque lancée par sa cible."
		desc: "Le type du lanceur devient un type qui résiste ou est immunisé au type de la dernière capacité utilisée par la cible, à l’exception de ses types actuels. Le type effectif de la capacité est utilisé plutôt que son type d’origine. Échoue si la cible n’a pas encore agi, si le lanceur ne peut pas changer de type, ou si cette capacité ne pourrait choisir que l’un des types actuels du lanceur.",
		shortDesc: "Le type du lanceur change pour résister à la dernière capacité de la cible.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	copycat: {
		name: "Photocopie",
		// Official flavor text: "Le lanceur imite la dernière capacité employée. Échoue si aucune capacité n’a été utilisée."
		desc: "Le lanceur utilise la dernière capacité utilisée par n’importe quel Pokémon, lui compris. Échoue si aucune capacité n’a été utilisée, ou si la dernière capacité utilisée était Assistance, Blockhaus, Bec-Canon, Aegis Maxima, Gladius Maximus, Éructation, Passe-Cadeau, Crash Brûlant, Célébration, Babil, Projection, Crash Musclé, Photocopie, Riposte, Implore, Lien du Destin, Détection, Draco-Queue, Canon Dynamax, Ténacité, Ruse, Mitra-Poing, Par Ici, Coup d’Main, Mains Jointes, Bouclier Royal, Crash Magique, Tatamigaeshi, Moi d’Abord, Métronome, Copie, Mimique, Force Nature, Crash Toxique, Abri, Poudre Fureur, Hurlement, Carapiège, Gribouille, Blabla Dodo, Saisie, Pico-Défense, Projecteur, Lutte, Passe-Passe, Pluie Térastrale, Larcin, Morphing, Tour de Magie, Cyclone ou Crash Obscur.",
		shortDesc: "Utilise la dernière capacité utilisée dans le combat.",
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
	},
	coreenforcer: {
		name: "Sanction Suprême",
		// Official flavor text: "La cible subit des dégâts et, si elle a déjà agi à ce tour, elle perd aussi son talent."
		desc: "Si le lanceur agit après la cible, le talent de la cible est neutralisé tant qu’elle reste au combat. Si la cible utilise Relais, son remplaçant reste sous cet effet. Si le talent de la cible est Osmose Équine, Synergie, Hypersommeil, Fantômasque, Dégobage, Tête de Gel, Multi-Type, Rassemblement, Système Alpha, Banc, Bouclier-Carcan, Déclic Tactique, Téramorphose, Mode Transe ou Supermutation, cet effet n’a pas lieu, et recevoir l’effet via Relais y met fin immédiatement.",
		shortDesc: "Neutralise le talent des adversaires s’ils ont agi en premier.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	corkscrewcrash: {
		name: "Vrille Maximum",
		shortDesc: "La puissance est égale à la puissance Z de la capacité de base.",
	},
	corrosivegas: {
		name: "Gaz Corrosif",
		// Official flavor text: "Un gaz corrosif qui enveloppe tous les Pokémon alentour et qui dissout les objets qu’ils tiennent."
		desc: "La cible perd son objet tenu. Cette capacité ne peut pas faire perdre leur objet aux Pokémon ayant le talent Glu, ni faire perdre respectivement à Kyogre, Groudon, Dialga, Palkia, Giratina, Arceus, Genesect, Silvallié, Zacian, Zamazenta, aux Pokémon Paradoxe ou à Ogerpon leur Gemme Bleue, Gemme Rouge, Globe Adamant, Globe Perlé, Globe Platiné, Plaque, Module, ROM, Épée Rouillée, Bouclier Rouillé, Énergie Booster ou Masque. Dans ce cas, les Pokémon Paradoxe comprennent toutes les espèces ayant le talent Paléosynthèse ou Charge Quantique, sauf Feu-Perçant, Ire-Foudre, Roc-de-Fer et Chef-de-Fer. Les objets perdus à cause de cette capacité ne peuvent pas être récupérés avec Recyclage ou le talent Récolte.",
		shortDesc: "Retire l’objet tenu des Pokémon adjacents.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},

		fail: "#healblock",
		removeItem: "  {SOURCE} fait fondre {ITEM:definite:classified} {POKEMON:de} !",
	},
	cosmicpower: {
		name: "Force Cosmique",
		// Official flavor text: "Le lanceur absorbe un pouvoir mystique spatial qui augmente sa Défense et sa Défense Spéciale."
		desc: "Augmente la Défense et la Défense Spéciale du lanceur d’un niveau.",
		shortDesc: "Augmente la Défense et la Déf Spé du lanceur d’un niveau.",
	},
	cottonguard: {
		name: "Cotogarde",
		// Official flavor text: "Le lanceur se protège en s’emmitouflant dans du coton. Sa Défense augmente énormément."
		desc: "Augmente la Défense du lanceur de trois niveaux.",
		shortDesc: "Augmente la Défense du lanceur de 3 niveaux.",
	},
	cottonspore: {
		name: "Spore Coton",
		// Official flavor text: "Le lanceur libère des spores cotonneuses qui collent à l’ennemi et baissent beaucoup sa Vitesse."
		desc: "Baisse la Vitesse de la cible de deux niveaux.",
		shortDesc: "Baisse la Vitesse de la cible de 2 niveaux.",
	},
	counter: {
		name: "Riposte",
		// Official flavor text: "Une riposte qui répond à toute capacité physique en infligeant le double de dégâts."
		desc: "Inflige au dernier Pokémon adverse ayant touché le lanceur avec une attaque physique ce tour-ci des dégâts égaux au double des PV perdus par le lanceur à cause de cette attaque. Si le lanceur n’a pas perdu de PV à cause de l’attaque, cette capacité inflige 1 PV de dégâts à la place. Si la position de ce Pokémon adverse n’est plus occupée et qu’un autre Pokémon adverse est sur le terrain, c’est lui qui subit les dégâts. Seul le dernier coup d’une attaque à coups multiples est pris en compte. Échoue si le lanceur n’a pas été touché par une attaque physique d’un Pokémon adverse ce tour-ci.",
		shortDesc: "Si le lanceur est touché par une attaque physique, renvoie le double des dégâts.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	courtchange: {
		name: "Change-Côté",
		// Official flavor text: "Une force mystérieuse intervertit les effets affectant chaque côté du terrain."
		desc: "Échange les effets de Brume, Mur Lumière, Protection, Picots, Rune Protect, Vent Arrière, Pics Toxik, Piège de Roc, Aire d’Eau, Aire de Feu, Aire d’Herbe, Toile Gluante, Voile Aurore, Percée G-Max, Canonnade G-Max, Fouet G-Max et Fournaise G-Max du camp du lanceur avec ceux du camp adverse, et inversement.",
		shortDesc: "Échange les effets de terrain du camp du lanceur avec ceux du camp adverse.",

		activate: "  Les effets affectant chaque côté du terrain ont été échangés par {POKEMON} !",
	},
	covet: {
		name: "Implore",
		// Official flavor text: "Le lanceur s’approche de la cible avec un air angélique afin de dérober l’objet qu’elle tient."
		desc: "Si cette attaque réussit et que le lanceur n’est pas K.O., il vole l’objet tenu par la cible s’il n’en tient pas lui-même. Une cible ayant le talent Glu ne perd pas son objet tenu si elle n’est pas K.O. L’objet de la cible n’est pas volé s’il s’agit d’une Gemme Bleue, d’une Gemme Rouge, d’un Globe Adamant, d’un Globe Perlé, d’un Globe Platiné, d’une Plaque, d’un Module, d’une ROM, d’une Épée Rouillée, d’un Bouclier Rouillé, d’une Énergie Booster ou d’un Masque tenu respectivement par Kyogre, Groudon, Dialga, Palkia, Giratina, Arceus, Genesect, Silvallié, Zacian, Zamazenta, un Pokémon Paradoxe ou Ogerpon, ou si le lanceur est l’une de ces espèces et que la cible tient l’objet correspondant. Dans ce cas, les Pokémon Paradoxe comprennent toutes les espèces ayant le talent Paléosynthèse ou Charge Quantique, sauf Feu-Perçant, Ire-Foudre, Roc-de-Fer et Chef-de-Fer. Les objets perdus à cause de cette capacité ne peuvent pas être récupérés avec Recyclage ou le talent Récolte.",
		shortDesc: "Si le lanceur n’a pas d’objet, il vole celui de la cible.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
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
	},
	crabhammer: {
		name: "Pince-Masse",
		// Official flavor text: "Une grande pince martèle l’ennemi. Taux de critiques élevé."
		desc: "A plus de chances d’infliger un coup critique.",
		shortDesc: "Taux de critique élevé.",
	},
	craftyshield: {
		name: "Vigilance",
		// Official flavor text: "Utilise une force mystérieuse pour protéger l’équipe des capacités de statut. Ne protège pas des autres capacités."
		desc: "Le lanceur et les membres de son équipe sont protégés des attaques n’infligeant pas de dégâts lancées par les autres Pokémon, alliés compris, pendant ce tour. Échoue si le lanceur agit en dernier ce tour-ci ou si cette capacité est déjà active pour le camp du lanceur.",
		shortDesc: "Protège les alliés des capacités de statut ce tour-ci.",

		start: "  {TEAM} est protégé par la capacité Vigilance !",
		block: "  {POKEMON} est protégé par la capacité Vigilance !",
	},
	crosschop: {
		name: "Coup Croix",
		// Official flavor text: "Le lanceur délivre un coup double en croisant les avant-bras. Taux de critiques élevé."
		desc: "A plus de chances d’infliger un coup critique.",
		shortDesc: "Taux de critique élevé.",
	},
	crosspoison: {
		name: "Poison Croix",
		// Official flavor text: "Un coup tranchant qui peut empoisonner l’ennemi. Taux de critiques élevé."
		desc: "10 % de chances d’empoisonner la cible et plus de chances d’infliger un coup critique.",
		shortDesc: "Taux de critique élevé. 10 % de chances d’empoisonner.",
	},
	crunch: {
		name: "Mâchouille",
		// Official flavor text: "Le lanceur mord l’ennemi de ses crocs pointus. Peut aussi baisser sa Défense."
		desc: "20 % de chances de baisser la Défense de la cible d’un niveau.",
		shortDesc: "20 % de chances de baisser la Défense de la cible d’un niveau.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	crushclaw: {
		name: "Éclate Griffe",
		// Official flavor text: "Lacère l’ennemi avec des griffes solides et aiguisées. Peut aussi baisser sa Défense."
		desc: "50 % de chances de baisser la Défense de la cible d’un niveau.",
		shortDesc: "50 % de chances de baisser la Défense de la cible d’un niveau.",
	},
	crushgrip: {
		name: "Presse",
		// Official flavor text: "Une force puissante écrase l’ennemi. Plus il lui reste de PV et plus l’attaque est puissante."
		desc: "La puissance est égale à 120 × (PV actuels de la cible / PV max de la cible), arrondi à l’entier le plus proche (0,5 vers le bas), mais d’au moins 1.",
		shortDesc: "Plus la cible a de PV restants, plus la puissance est élevée.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	curse: {
		name: "Malédiction",
		// Official flavor text: "Une capacité à l’effet différent selon que le lanceur est un Pokémon Spectre ou non."
		desc: "Si le lanceur n’est pas de type Spectre, baisse la Vitesse du lanceur d’un niveau et augmente son Attaque et sa Défense d’un niveau. Si le lanceur est de type Spectre, il perd 1/2 de ses PV max, arrondi à l’inférieur et même si cela le met K.O., en échange de quoi la cible perd 1/4 de ses PV max, arrondi à l’inférieur, à la fin de chaque tour tant qu’elle est au combat. Si la cible utilise Relais, son remplaçant continue d’être affecté. Échoue s’il n’y a pas de cible ou si la cible est déjà affectée.",
		shortDesc: "Maudit la cible si Spectre, sinon -1 Vit, +1 Atq, +1 Déf.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {SOURCE} sacrifie des PV et lance une malédiction sur {POKEMON} !",
		damage: "  {POKEMON} est touché par la malédiction !",
	},
	cut: {
		name: "Coupe",
		shortDesc: "Aucun effet supplémentaire.",
	},
	darkestlariat: {
		name: "Dark Lariat",
		// Official flavor text: "Le Pokémon étend les bras et frappe l’adversaire en tournant violemment. Inflige des dégâts et ignore les changements de stats de la cible."
		desc: "Ignore les modifications de niveaux de stats de la cible, y compris l’Esquive.",
		shortDesc: "Ignore les modifications de niveaux de stats de la cible.",
	},
	darkpulse: {
		name: "Vibrobscur",
		// Official flavor text: "Le lanceur dégage une horrible aura chargée de pensées maléfiques. Peut aussi apeurer l’ennemi."
		desc: "20 % de chances d’apeurer la cible.",
		shortDesc: "20 % de chances d’apeurer la cible.",
	},
	darkvoid: {
		name: "Trou Noir",
		// Official flavor text: "L’ennemi est plongé dans les ténèbres. Il tombe dans un profond sommeil."
		desc: "Endort la cible. Cette capacité ne peut réussir que si la forme actuelle du lanceur, en tenant compte de Morphing, est Darkrai.",
		shortDesc: "Darkrai : endort les adversaires.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		fail: "Mais il en est incapable !",
		failWrongForme: "Mais il en est incapable sous cette forme !",
	},
	dazzlinggleam: {
		name: "Éclat Magique",
		// Official flavor text: "Libère une puissante décharge lumineuse qui inflige des dégâts à l’ennemi."
		desc: "Aucun effet supplémentaire.",
		shortDesc: "Aucun effet supplémentaire. Touche les adversaires adjacents.",
	},
	decorate: {
		name: "Nappage",
		// Official flavor text: "Le lanceur augmente beaucoup l’Attaque et l’Attaque Spéciale de la cible en la nappant de glaçage."
		desc: "Augmente l’Attaque et l’Attaque Spéciale de la cible de deux niveaux.",
		shortDesc: "Augmente l’Attaque et l’Atq Spé de la cible de 2 niveaux.",
	},
	defendorder: {
		name: "Appel Défense",
		// Official flavor text: "Le lanceur appelle ses sous-fifres pour former un bouclier qui augmente sa Défense et sa Défense Spéciale."
		desc: "Augmente la Défense et la Défense Spéciale du lanceur d’un niveau.",
		shortDesc: "Augmente la Défense et la Déf Spé du lanceur d’un niveau.",
	},
	defensecurl: {
		name: "Boul’Armure",
		// Official flavor text: "Le lanceur s’enroule pour cacher ses points faibles, ce qui augmente sa Défense."
		desc: "Augmente la Défense du lanceur d’un niveau. Tant que le lanceur reste au combat, la puissance de ses capacités Ball’Glace et Roulade est doublée (cet effet n’est pas cumulable).",
		shortDesc: "Augmente la Défense du lanceur d’un niveau.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	defog: {
		name: "Anti-Brume",
		// Official flavor text: "Un grand coup de vent qui disperse la Protection ou le Mur Lumière de l’ennemi. Diminue aussi son Esquive."
		desc: "Baisse l’Esquive de la cible d’un niveau. Si cette capacité réussit, que l’Esquive de la cible ait été affectée ou non, les effets de Protection, Mur Lumière, Voile Aurore, Rune Protect, Brume, Picots, Pics Toxik, Piège de Roc et Toile Gluante prennent fin du côté de la cible, et les effets de Picots, Pics Toxik, Piège de Roc et Toile Gluante prennent fin du côté du lanceur. Ignore le clone de la cible, mais un clone bloque tout de même la baisse d’Esquive. Si un champ est actif et que cette capacité réussit, le champ disparaît.",
		shortDesc: "-1 Esquive ; retire les pièges des deux camps et le champ.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	destinybond: {
		name: "Lien du Destin",
		// Official flavor text: "Si un ennemi porte un coup fatal au lanceur après qu’il a activé cette capacité, ils sont tous les deux mis K.O. La capacité échoue si elle est immédiatement réutilisée."
		desc: "Jusqu’à la prochaine action du lanceur, si l’attaque d’un Pokémon adverse met le lanceur K.O., ce Pokémon est également mis K.O., sauf si l’attaque était Vœu Destructeur ou Prescience. Échoue si le lanceur a utilisé cette capacité avec succès lors de sa dernière action, sans compter les capacités utilisées grâce au talent Danseuse.",
		shortDesc: "Si un adversaire met le lanceur K.O., il est aussi mis K.O.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} veut entraîner son assaillant dans sa chute !",
		activate: "{POKEMON} entraîne son assaillant dans sa chute !",
	},
	detect: {
		name: "Détection",
		// Official flavor text: "Le lanceur se protège de toutes les attaques. Peut échouer si utilisée plusieurs fois de suite."
		desc: "Le lanceur est protégé de la plupart des attaques des autres Pokémon pendant ce tour. Cette capacité a 1 chance sur X de réussir, où X vaut 1 au départ et triple à chaque utilisation réussie de cette capacité. X revient à 1 si cette capacité échoue, si la dernière capacité utilisée par le lanceur n’est pas Blockhaus, Rempart Brûlant, Détection, Ténacité, Bouclier Royal, Gardomax, Blocage, Abri, Prévention, Piège de Fil, Pico-Défense ou Garde Large, ou si c’était l’une de ces capacités et que la protection du lanceur a été percée. Échoue si le lanceur agit en dernier ce tour-ci.",
		shortDesc: "Empêche les capacités d’affecter le lanceur ce tour-ci.",
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
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	devastatingdrake: {
		name: "Chaos Draconique",
		shortDesc: "La puissance est égale à la puissance Z de la capacité de base.",
	},
	diamondstorm: {
		name: "Orage Adamantin",
		// Official flavor text: "Provoque une tempête de diamants qui inflige des dégâts. Peut beaucoup augmenter la Défense du lanceur."
		desc: "50 % de chances d’augmenter la Défense du lanceur de deux niveaux.",
		shortDesc: "50 % de chances d’augmenter la Défense du lanceur de 2 niveaux.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	dig: {
		name: "Tunnel",
		// Official flavor text: "Le lanceur creuse au premier tour et frappe au second."
		desc: "Cette attaque se charge au premier tour et s’exécute au second. Au premier tour, le lanceur évite toutes les attaques sauf Séisme et Ampleur, mais en subit le double de dégâts, et n’est pas affecté par la météo. Si le lanceur tient une Herbe Pouvoir, la capacité s’exécute en un seul tour.",
		shortDesc: "Creuse sous terre au tour 1, frappe au tour 2.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},

		prepare: "{POKEMON} se cache dans le sol !",
	},
	direclaw: {
		name: "Griffes Funestes",
		// Official flavor text: "Le lanceur attaque avec des griffes destructrices en visant les points faibles. La cible peut aussi être empoisonnée, paralysée, ou endormie."
		desc: "50 % de chances d’endormir, d’empoisonner ou de paralyser la cible.",
		shortDesc: "50 % de chances d’endormir, d’empoisonner ou de paralyser la cible.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	disable: {
		name: "Entrave",
		// Official flavor text: "Empêche l’ennemi d’employer à nouveau sa dernière attaque. Dure quatre tours."
		desc: "Pendant 4 tours, la dernière capacité utilisée par la cible est mise sous entrave. Échoue si l’une des capacités de la cible est déjà sous entrave, si la cible n’a pas encore agi, si elle ne connaît plus cette capacité, ou s’il s’agissait d’une capacité Dynamax ou Gigamax.",
		shortDesc: "Pendant 4 tours, met sous entrave la dernière capacité utilisée par la cible.",
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
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  La capacité {MOVE} {POKEMON:de} est mise sous entrave !",
		end: "  La capacité {POKEMON:de} n’est plus sous entrave !",
		cant: "Il y a une entrave sur la capacité {MOVE} {POKEMON:de} !",
	},
	disarmingvoice: {
		name: "Voix Enjôleuse",
		// Official flavor text: "Laisse s’échapper une voix enchanteresse qui inflige des dégâts psychiques à l’ennemi. Touche à coup sûr."
		desc: "Cette capacité ne peut pas rater.",
		shortDesc: "Cette capacité ne peut pas rater. Touche les adversaires.",
	},
	discharge: {
		name: "Coup d’Jus",
		// Official flavor text: "Un flamboiement d’électricité frappe tous les Pokémon autour du lanceur. Peut aussi les paralyser."
		desc: "30 % de chances de paralyser la cible.",
		shortDesc: "30 % de chances de paralyser les Pokémon adjacents.",
	},
	dive: {
		name: "Plongée",
		// Official flavor text: "Le lanceur plonge sous l’eau au premier tour et frappe au second."
		desc: "Cette attaque se charge au premier tour et s’exécute au second. Au premier tour, le lanceur évite toutes les attaques sauf Surf et Siphon, mais en subit le double de dégâts, et n’est pas affecté par la météo. Si le lanceur tient une Herbe Pouvoir, la capacité s’exécute en un seul tour.",
		shortDesc: "Plonge sous l’eau au tour 1, frappe au tour 2.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		prepare: "{POKEMON} se cache sous l’eau !",
	},
	dizzypunch: {
		name: "Uppercut",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "20 % de chances de rendre la cible confuse.",
		shortDesc: "20 % de chances de rendre la cible confuse.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	doodle: {
		name: "Décalquage",
		// Official flavor text: "Le lanceur capture l'essence de la cible et la décalque. Le talent du lanceur et de ses alliés devient alors identique à celui de la cible."
		desc: "Les talents du lanceur et de son allié deviennent identiques à celui de la cible. Le talent n’est pas modifié si celui du lanceur ou de son allié est Osmose Équine, Synergie, Hypersommeil, Fantômasque, Dégobage, Tête de Gel, Multi-Type, Rassemblement, Système Alpha, Banc, Bouclier-Carcan, Déclic Tactique, Téramorphose, Mode Transe ou Supermutation, ou est déjà identique à celui de la cible. Échoue si les talents du lanceur et de son allié sont déjà identiques à celui de la cible, ou si le talent de la cible est Osmose Équine, Synergie, Hypersommeil, Commandant, Fantômasque, Force Mémorielle, Don Floral, Météo, Déclic Fringale, Tête de Gel, Illusion, Imposteur, Multi-Type, Gaz Inhibiteur, Emprise Toxique, Rassemblement, Osmose, Paléosynthèse, Charge Quantique, Receveur, Système Alpha, Banc, Bouclier-Carcan, Déclic Tactique, Téra-Carapace, Téramorphose, Téraformation 0, Calque, Garde Mystik, Mode Transe ou Supermutation.",
		shortDesc: "Les talents du lanceur et de son allié deviennent celui de la cible.",
	},
	doomdesire: {
		name: "Vœu Destructeur",
		// Official flavor text: "Le lanceur génère une sphère lumineuse qu’il projette sur l’ennemi deux tours plus tard."
		desc: "Inflige des dégâts deux tours après l’utilisation de cette capacité. À la fin de ce tour-là, les dégâts sont calculés à ce moment et infligés au Pokémon se trouvant à la position qu’occupait la cible lors de l’utilisation de la capacité. Si le lanceur n’est plus au combat à ce moment-là, les dégâts sont calculés à partir de l’Attaque Spéciale naturelle, des types et du niveau du lanceur, sans bonus de son objet tenu ni de son talent. Échoue si cette capacité ou Prescience est déjà active sur la position de la cible.",
		shortDesc: "Frappe deux tours après son utilisation.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} souhaite que la capacité Vœu Destructeur se déclenche !",
		activate: "  {TARGET} subit l’attaque Vœu Destructeur !",
	},
	doubleedge: {
		name: "Damoclès",
		// Official flavor text: "Une charge dangereuse et imprudente. Blesse aussi gravement le lanceur."
		desc: "Si la cible a perdu des PV, le lanceur subit des dégâts de recul égaux à 33 % des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut), mais d’au moins 1 PV.",
		shortDesc: "Dégâts de recul de 33 %.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	doublehit: {
		name: "Coup Double",
		// Official flavor text: "Le lanceur frappe l’ennemi deux fois d’affilée à l’aide de sa queue, de lianes ou d’un autre membre."
		desc: "Frappe deux fois. Si le premier coup détruit le clone de la cible, celle-ci subit les dégâts du second coup.",
		shortDesc: "Frappe 2 fois en un tour.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	doubleironbash: {
		name: "Écrous d’Poing",
		// Official flavor text: "Le lanceur fait pivoter l’écrou de sa poitrine deux fois d’affilée pour frapper l’adversaire avec ses bras. Peut apeurer l’ennemi."
		desc: "Frappe deux fois. Si le premier coup détruit le clone de la cible, celle-ci subit les dégâts du second coup. 30 % de chances d’apeurer la cible.",
		shortDesc: "Frappe deux fois. 30 % de chances d’apeurer la cible.",
	},
	doublekick: {
		name: "Double Pied",
		// Official flavor text: "Deux coups de pied qui frappent l’ennemi deux fois d’affilée."
		desc: "Frappe deux fois. Si le premier coup détruit le clone de la cible, celle-ci subit les dégâts du second coup.",
		shortDesc: "Frappe 2 fois en un tour.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	doubleshock: {
		name: "Double Décharge",
		// Official flavor text: "Le lanceur libère toute l'électricité contenue dans son corps pour infliger des dégâts élevés à la cible. Le lanceur perd le type Électrik."
		desc: "Échoue si le lanceur n’est pas de type Électrik. Si cette capacité réussit et que le lanceur n’est pas téracristallisé, son type Électrik devient « sans type » tant qu’il reste au combat.",
		shortDesc: "Le type Électrik du lanceur devient « sans type » ; doit être de type Électrik.",

		typeChange: "  {POKEMON} a utilisé toute son électricité !",
	},
	doubleslap: {
		name: "Torgnoles",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Frappe de deux à cinq fois. 35 % de chances de frapper deux ou trois fois et 15 % de chances de frapper quatre ou cinq fois. Si l’un des coups détruit le clone de la cible, celle-ci subit les dégâts des coups restants. Si le lanceur a le talent Multi-Coups, cette capacité frappe toujours cinq fois.",
		shortDesc: "Frappe de 2 à 5 fois en un tour.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	doubleteam: {
		name: "Reflet",
		// Official flavor text: "Le lanceur se déplace si vite qu’il crée des copies illusoires de lui-même, augmentant son Esquive."
		desc: "Augmente l’Esquive du lanceur d’un niveau.",
		shortDesc: "Augmente l’Esquive du lanceur d’un niveau.",
	},
	dracometeor: {
		name: "Draco-Météore",
		// Official flavor text: "Le lanceur invoque des comètes. Le contrecoup réduit beaucoup son Attaque Spéciale."
		desc: "Baisse l’Attaque Spéciale du lanceur de deux niveaux.",
		shortDesc: "Baisse l’Atq Spé du lanceur de 2 niveaux.",
	},
	dragonascent: {
		name: "Draco-Ascension",
		// Official flavor text: "Le Pokémon s’abat à toute vitesse sur la cible depuis les hautes couches de l’atmosphère. Baisse la Défense et la Défense Spéciale du lanceur."
		desc: "Baisse la Défense et la Défense Spéciale du lanceur d’un niveau.",
		shortDesc: "Baisse la Défense et la Déf Spé du lanceur d’un niveau.",

		megaNoItem: "  L’esprit {TRAINER:de} entre en résonance avec la volonté {POKEMON:de} !",
	},
	dragonbreath: {
		name: "Draco-Souffle",
		// Official flavor text: "Le lanceur souffle fort sur l’ennemi pour lui infliger des dégâts. Peut aussi le paralyser."
		desc: "30 % de chances de paralyser la cible.",
		shortDesc: "30 % de chances de paralyser la cible.",
	},
	dragoncheer: {
		name: "Cri Draconique",
		// Official flavor text: "Le lanceur galvanise ses alliés avec un encouragement draconique qui augmente leur taux de critiques. L'effet est plus puissant si les alliés ont le type Dragon."
		desc: "Augmente le taux de critique de la cible d’un niveau, ou de deux niveaux si la cible est de type Dragon. Échoue s’il n’y a aucun allié adjacent au lanceur, ou si la cible est déjà sous cet effet ou sous l’effet de Puissance. Relais peut être utilisé pour transmettre cet effet à un allié.",
		shortDesc: "Allié : taux de critique +1, ou +2 s’il est de type Dragon.",

		start: "#focusenergy",
	},
	dragonclaw: {
		name: "Draco-Griffe",
		shortDesc: "Aucun effet supplémentaire.",
	},
	dragondance: {
		name: "Danse Draco",
		// Official flavor text: "Une danse mystique dont le rythme effréné augmente l’Attaque et la Vitesse du lanceur."
		desc: "Augmente l’Attaque et la Vitesse du lanceur d’un niveau.",
		shortDesc: "Augmente l’Attaque et la Vitesse du lanceur d’un niveau.",
	},
	dragondarts: {
		name: "Draco-Flèches",
		// Official flavor text: "Le lanceur attaque en propulsant deux Fantyrm. S’il y a deux adversaires, chacun d’entre eux est frappé par un Fantyrm."
		desc: "Frappe deux fois. Si le premier coup détruit le clone de la cible, celle-ci subit les dégâts du second coup. En combat en Duo, cette capacité tente de toucher une fois la cible visée et une fois son allié. Si l’un de ces Pokémon ne peut pas être touché à cause d’une immunité, d’une protection, d’un état semi-invulnérable, d’un talent ou de la Précision, elle tente de toucher l’autre Pokémon deux fois à la place. Si cette capacité est redirigée, elle touche deux fois cette cible.",
		shortDesc: "Frappe deux fois. Duo : tente de toucher chaque adversaire une fois.",
	},
	dragonenergy: {
		name: "Draco-Énergie",
		// Official flavor text: "Le lanceur utilise son énergie vitale pour attaquer l’ennemi. Moins il a de PV, moins l’attaque est puissante."
		desc: "La puissance est égale à (PV actuels du lanceur × 150 / PV max du lanceur), arrondi à l’inférieur, mais d’au moins 1.",
		shortDesc: "Moins puissante à mesure que les PV du lanceur baissent. Touche les adversaires.",
	},
	dragonhammer: {
		name: "Draco-Marteau",
		shortDesc: "Aucun effet supplémentaire.",
	},
	dragonpulse: {
		name: "Draco-Choc",
		shortDesc: "Aucun effet supplémentaire.",
	},
	dragonrage: {
		name: "Draco-Rage",
		shortDesc: "Inflige 40 PV de dégâts à la cible.",
	},
	dragonrush: {
		name: "Draco-Charge",
		// Official flavor text: "Le lanceur frappe l’ennemi en prenant un air menaçant. Peut aussi l’apeurer."
		desc: "20 % de chances d’apeurer la cible. Les dégâts doublent et la capacité ne peut pas rater si la cible a utilisé Lilliput depuis son entrée au combat.",
		shortDesc: "20 % de chances d’apeurer la cible.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	dragontail: {
		name: "Draco-Queue",
		// Official flavor text: "Un coup puissant qui blesse la cible et l’envoie au loin. Lors d’un combat contre un Pokémon sauvage seul, met fin au combat."
		desc: "Si ni le lanceur ni la cible ne sont K.O., la cible est forcée de se retirer et est remplacée par un allié non K.O. choisi au hasard. Cet effet échoue si la cible a utilisé Racines auparavant, a le talent Ventouse, ou si cette capacité a touché un clone.",
		shortDesc: "Force la cible à être remplacée par un allié au hasard.",
	},
	drainingkiss: {
		name: "Vampibaiser",
		// Official flavor text: "Aspire la force vitale de l’ennemi par un baiser. Rend au lanceur un nombre de PV supérieur ou égal à la moitié des dégâts infligés."
		desc: "Le lanceur récupère 3/4 des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut). Si le lanceur tient une Grosse Racine, les PV récupérés sont multipliés par 1,3, arrondi à l’entier le plus proche (0,5 vers le bas).",
		shortDesc: "Le lanceur récupère 75 % des dégâts infligés.",
	},
	drainpunch: {
		name: "Vampi-Poing",
		// Official flavor text: "Un coup de poing qui draine l’énergie. Convertit la moitié des dégâts infligés en PV pour le lanceur."
		desc: "Le lanceur récupère 1/2 des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut). Si le lanceur tient une Grosse Racine, les PV récupérés sont multipliés par 1,3, arrondi à l’entier le plus proche (0,5 vers le bas).",
		shortDesc: "Le lanceur récupère 50 % des dégâts infligés.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	dreameater: {
		name: "Dévorêve",
		// Official flavor text: "Le lanceur mange le rêve de l’ennemi endormi et récupère en PV la moitié des dégâts infligés."
		desc: "La cible n’est pas affectée par cette capacité sauf si elle est endormie. Le lanceur récupère 1/2 des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut). Si le lanceur tient une Grosse Racine, les PV récupérés sont multipliés par 1,3, arrondi à l’entier le plus proche (0,5 vers le bas).",
		shortDesc: "Le lanceur récupère 1/2 des dégâts infligés. Cible endormie uniquement.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	drillpeck: {
		name: "Bec Vrille",
		shortDesc: "Aucun effet supplémentaire.",
	},
	drillrun: {
		name: "Tunnelier",
		// Official flavor text: "Le lanceur tourne sur lui-même comme une perceuse et se jette sur l’ennemi. Taux de critiques élevé."
		desc: "A plus de chances d’infliger un coup critique.",
		shortDesc: "Taux de critique élevé.",
	},
	drumbeating: {
		name: "Tambour Battant",
		// Official flavor text: "Le lanceur bat son tambour pour en diriger les racines sur la cible, l’attaquer, et baisser sa Vitesse."
		desc: "100 % de chances de baisser la Vitesse de la cible d’un niveau.",
		shortDesc: "100 % de chances de baisser la Vitesse de la cible d’un niveau.",
	},
	dualchop: {
		name: "Double Baffe",
		// Official flavor text: "Le lanceur frappe l’ennemi deux fois d’affilée avec les parties les plus robustes de son corps."
		desc: "Frappe deux fois. Si le premier coup détruit le clone de la cible, celle-ci subit les dégâts du second coup.",
		shortDesc: "Frappe 2 fois en un tour.",
	},
	dualwingbeat: {
		name: "Double Volée",
		// Official flavor text: "Le lanceur frappe l’ennemi avec ses ailes deux fois d’affilée."
		desc: "Frappe deux fois. Si le premier coup détruit le clone de la cible, celle-ci subit les dégâts du second coup.",
		shortDesc: "Frappe 2 fois en un tour.",
	},
	dynamaxcannon: {
		name: "Canon Dynamax",
		shortDesc: "Aucun effet supplémentaire.",
		gen8: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	dynamicpunch: {
		name: "Dynamo-Poing",
		// Official flavor text: "Le lanceur rassemble ses forces et envoie un coup de poing à l’ennemi. Rend ce dernier confus."
		desc: "100 % de chances de rendre la cible confuse.",
		shortDesc: "100 % de chances de rendre la cible confuse.",
	},
	earthpower: {
		name: "Telluriforce",
		// Official flavor text: "De terribles séismes secouent l’ennemi. Peut aussi baisser sa Défense Spéciale."
		desc: "10 % de chances de baisser la Défense Spéciale de la cible d’un niveau.",
		shortDesc: "10 % de chances de baisser la Déf Spé de la cible d’un niveau.",
	},
	earthquake: {
		name: "Séisme",
		// Official flavor text: "Le lanceur provoque un tremblement de terre touchant tous les Pokémon autour de lui."
		desc: "Les dégâts doublent si la cible utilise Tunnel.",
		shortDesc: "Touche les Pokémon adjacents. Dégâts doublés contre Tunnel.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	echoedvoice: {
		name: "Écho",
		// Official flavor text: "Un cri retentissant blesse l’ennemi. Si le lanceur ou d’autres Pokémon l’utilisent à chaque tour, l’effet augmente."
		desc: "Pour chaque tour consécutif où cette capacité est utilisée par au moins un Pokémon, sa puissance est multipliée par le nombre de tours écoulés, sans dépasser 5.",
		shortDesc: "La puissance augmente si elle est utilisée lors de tours consécutifs.",
	},
	eerieimpulse: {
		name: "Ondes Étranges",
		// Official flavor text: "Le corps du lanceur produit des ondes anormales qui enveloppent l’ennemi et diminuent beaucoup son Attaque Spéciale."
		desc: "Baisse l’Attaque Spéciale de la cible de deux niveaux.",
		shortDesc: "Baisse l’Atq Spé de la cible de 2 niveaux.",
	},
	eeriespell: {
		name: "Sort Sinistre",
		// Official flavor text: "Le lanceur attaque avec de puissants pouvoirs psychiques et retire 3 PP de la dernière capacité de l’ennemi."
		desc: "Si cette capacité réussit et que le lanceur n’est pas K.O., la dernière capacité utilisée par la cible perd 3 PP.",
		shortDesc: "Retire 3 PP à la dernière capacité utilisée par la cible.",

		activate: "#spite",
	},
	eggbomb: {
		name: "Bombe Œuf",
		shortDesc: "Aucun effet supplémentaire.",
	},
	electricterrain: {
		name: "Champ Électrifié",
		// Official flavor text: "Pendant cinq tours, le terrain se charge d’électricité. Les Pokémon au sol ne peuvent pas s’endormir et la puissance des capacités de type Électrik augmente."
		desc: "Pendant 5 tours, le terrain devient Champ Électrifié. Pendant l’effet, la puissance des attaques de type Électrik lancées par des Pokémon au sol est multipliée par 1,3 et les Pokémon au sol ne peuvent pas s’endormir ; les Pokémon déjà endormis ne se réveillent pas. Les Pokémon au sol ne peuvent pas être affectés par Bâillement ni s’endormir à cause de son effet. Camouflage donne au lanceur le type Électrik, Force Nature devient Tonnerre et Force Cachée a 30 % de chances de paralyser. Échoue si le terrain actuel est déjà Champ Électrifié.",
		shortDesc: "5 tours. Au sol : capacités Électrik renforcées, pas de sommeil.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	electrify: {
		name: "Électrisation",
		// Official flavor text: "Si le lanceur attaque avant la cible, les capacités de celle-ci seront de type Électrik jusqu’à la fin du tour."
		desc: "La capacité de la cible devient de type Électrik ce tour-ci. Parmi les effets pouvant changer le type d’une capacité, celui-ci s’applique en dernier. Échoue si la cible a déjà agi ce tour-ci.",
		shortDesc: "La capacité de la cible devient de type Électrik ce tour-ci.",

		start: "  Électrisation donne le type Électrik à la prochaine capacité {POKEMON:de} !",
	},
	electroball: {
		name: "Boule Élek",
		// Official flavor text: "Le lanceur envoie une boule d’électricité. Si sa Vitesse est plus grande que celle de l’ennemi, les dégâts augmentent d’autant."
		desc: "La puissance de cette capacité dépend du rapport (Vitesse actuelle du lanceur / Vitesse actuelle de la cible), arrondi à l’inférieur. La puissance est de 150 si le résultat est de 4 ou plus, de 120 s’il est de 3, de 80 s’il est de 2, de 60 s’il est de 1 et de 40 s’il est inférieur à 1. Si la Vitesse actuelle de la cible est de 0, la puissance de cette capacité est de 40.",
		shortDesc: "Plus le lanceur est rapide par rapport à la cible, plus la puissance est élevée.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	electrodrift: {
		name: "Turbo Volt",
		// Official flavor text: "Le lanceur change de forme et fonce sur la cible en la perforant d'électricité futuriste. Si la capacité est super efficace, sa puissance augmente encore plus."
		desc: "Les dégâts sont multipliés par 1,3333 si cette capacité est super efficace contre la cible.",
		shortDesc: "Inflige 1,3333× les dégâts si elle est super efficace.",
	},
	electroshot: {
		name: "Fulgurayon",
		// Official flavor text: "Le lanceur absorbe de l'électricité au premier tour, ce qui augmente son Attaque Spéciale, et envoie une puissante décharge au second. S'il pleut, il l'envoie au premier tour."
		desc: "Cette attaque se charge au premier tour et s’exécute au second. Augmente l’Attaque Spéciale du lanceur d’un niveau au premier tour. Si le lanceur tient une Herbe Pouvoir ou si la météo est Pluie battante ou Pluie, la capacité s’exécute en un seul tour. Si le lanceur tient un Parapluie Solide et que la météo est Pluie battante ou Pluie, la capacité nécessite tout de même un tour de chargement.",
		shortDesc: "Augmente l’Atq Spé d’un niveau, frappe au tour 2. Pluie : pas de chargement.",

		prepare: "{POKEMON} absorbe de l’électricité !",
	},
	electroweb: {
		name: "Toile Élek",
		// Official flavor text: "Attrape l’ennemi dans un filet électrique. Baisse aussi la Vitesse de l’ennemi."
		desc: "100 % de chances de baisser la Vitesse de la cible d’un niveau.",
		shortDesc: "100 % de chances de baisser la Vitesse des adversaires d’un niveau.",
	},
	embargo: {
		name: "Embargo",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Pendant 5 tours, l’objet tenu par la cible n’a aucun effet. L’effet d’un objet provoquant un changement de forme n’est pas affecté, mais tous les autres effets de ces objets sont annulés. Pendant l’effet, la cible ne peut pas utiliser Dégommage ni Don Naturel. Les objets lancés sur la cible avec Dégommage s’activent tout de même pour elle. Si la cible utilise Relais, son remplaçant reste incapable d’utiliser des objets.",
		shortDesc: "Pendant 5 tours, l’objet de la cible n’a aucun effet.",

		start: "  {POKEMON} ne peut plus utiliser d’objets !",
		end: "  {POKEMON} peut de nouveau utiliser des objets !",
	},
	ember: {
		name: "Flammèche",
		// Official flavor text: "L’ennemi est attaqué par une faible flamme. Peut aussi le brûler."
		desc: "10 % de chances de brûler la cible.",
		shortDesc: "10 % de chances de brûler la cible.",
	},
	encore: {
		name: "Encore",
		// Official flavor text: "Oblige l’ennemi à répéter la dernière capacité utilisée durant trois tours."
		desc: "Pendant ses 3 prochains tours, la cible est forcée de répéter la dernière capacité qu’elle a utilisée. Si cette capacité n’a plus de PP, l’effet prend fin. Échoue si la cible est déjà sous cet effet, si elle n’a pas encore agi, si la capacité n’a plus de PP, ou si la capacité est Assistance, Crash Brûlant, Crash Musclé, Photocopie, Canon Dynamax, Encore, Crash Magique, Moi d’Abord, Métronome, Copie, Mimique, Force Nature, Crash Toxique, Gribouille, Blabla Dodo, Lutte, Morphing ou Crash Obscur.",
		shortDesc: "La cible répète sa dernière capacité pendant ses 3 prochains tours.",
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
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} ! Encore une fois !",
		end: "  {POKEMON} n’a plus à répéter la même capacité !",
	},
	endeavor: {
		name: "Effort",
		// Official flavor text: "Une attaque qui réduit les PV de l’ennemi au niveau des PV du lanceur."
		desc: "Inflige à la cible des dégâts égaux à (PV actuels de la cible - PV actuels du lanceur). La cible n’est pas affectée si ses PV actuels sont inférieurs ou égaux à ceux du lanceur.",
		shortDesc: "Réduit les PV de la cible à ceux du lanceur.",
	},
	endure: {
		name: "Ténacité",
		// Official flavor text: "Le lanceur résiste aux attaques avec 1 PV. Peut échouer si utilisée plusieurs fois de suite."
		desc: "Le lanceur survit avec au moins 1 PV aux attaques des autres Pokémon pendant ce tour. Cette capacité a 1 chance sur X de réussir, où X vaut 1 au départ et triple à chaque utilisation réussie de cette capacité. X revient à 1 si cette capacité échoue, si la dernière capacité utilisée par le lanceur n’est pas Blockhaus, Rempart Brûlant, Détection, Ténacité, Bouclier Royal, Gardomax, Blocage, Abri, Prévention, Piège de Fil, Pico-Défense ou Garde Large, ou si c’était l’une de ces capacités et que la protection du lanceur a été percée. Échoue si le lanceur agit en dernier ce tour-ci.",
		shortDesc: "Le lanceur survit aux attaques de ce tour avec au moins 1 PV.",
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
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} se prépare à encaisser les coups !",
		activate: "  {POKEMON} encaisse les coups !",
	},
	energyball: {
		name: "Éco-Sphère",
		// Official flavor text: "Utilise les pouvoirs de la nature pour attaquer l’ennemi. Peut aussi baisser sa Défense Spéciale."
		desc: "10 % de chances de baisser la Défense Spéciale de la cible d’un niveau.",
		shortDesc: "10 % de chances de baisser la Déf Spé de la cible d’un niveau.",
	},
	entrainment: {
		name: "Ten-Danse",
		// Official flavor text: "Le lanceur danse sur un rythme étrange. Il force sa cible à l’imiter, ce qui lui fait adopter son talent."
		desc: "Le talent de la cible devient identique à celui du lanceur. Échoue si le talent de la cible est Osmose Équine, Synergie, Hypersommeil, Fantômasque, Dégobage, Tête de Gel, Multi-Type, Rassemblement, Système Alpha, Banc, Bouclier-Carcan, Déclic Tactique, Téramorphose, Absentéisme, Mode Transe ou Supermutation, ou s’il est identique à celui du lanceur, ou si le talent du lanceur est Osmose Équine, Synergie, Hypersommeil, Commandant, Fantômasque, Force Mémorielle, Don Floral, Météo, Déclic Fringale, Tête de Gel, Illusion, Imposteur, Multi-Type, Gaz Inhibiteur, Emprise Toxique, Rassemblement, Osmose, Paléosynthèse, Charge Quantique, Receveur, Système Alpha, Banc, Bouclier-Carcan, Déclic Tactique, Téra-Carapace, Téramorphose, Téraformation 0, Calque, Garde Mystik, Mode Transe ou Supermutation.",
		shortDesc: "Le talent de la cible devient celui du lanceur.",
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
	},
	eruption: {
		name: "Éruption",
		// Official flavor text: "Le lanceur laisse exploser sa colère. Plus ses PV sont bas, moins l’attaque est puissante."
		desc: "La puissance est égale à (PV actuels du lanceur × 150 / PV max du lanceur), arrondi à l’inférieur, mais d’au moins 1.",
		shortDesc: "Moins puissante à mesure que les PV du lanceur baissent. Touche les adversaires.",
	},
	esperwing: {
		name: "Ailes Psycho",
		// Official flavor text: "Le lanceur entaille la cible avec ses ailes renforcées par une émanation psychique. Taux de critiques élevé. Cela augmente la Vitesse du lanceur."
		desc: "100 % de chances d’augmenter la Vitesse du lanceur d’un niveau et plus de chances d’infliger un coup critique.",
		shortDesc: "100 % de chances d’augmenter la Vitesse du lanceur d’un niveau. Taux de critique élevé.",
	},
	eternabeam: {
		name: "Laser Infinimax",
		// Official flavor text: "L’attaque la plus puissante d’Éthernatos sous sa forme originelle. S’il l’utilise, il devra se reposer au tour suivant."
		desc: "Si cette capacité réussit, le lanceur doit se recharger au tour suivant et ne peut pas choisir de capacité.",
		shortDesc: "Le lanceur ne peut pas agir au tour suivant.",
	},
	expandingforce: {
		name: "Vaste Pouvoir",
		// Official flavor text: "Le lanceur attaque la cible avec ses pouvoirs psychiques. Si un Champ Psychique est actif, la puissance de cette capacité augmente et elle touche tous les ennemis."
		desc: "Si le terrain actuel est Champ Psychique et que le lanceur est au sol, cette capacité touche tous les Pokémon adverses et sa puissance est multipliée par 1,5.",
		shortDesc: "Lanceur sur Champ Psychique : puissance ×1,5, touche les adversaires.",
	},
	explosion: {
		name: "Explosion",
		// Official flavor text: "Le lanceur explose et inflige des dégâts à tous les Pokémon autour de lui. Met K.O. le lanceur."
		desc: "Le lanceur est mis K.O. après avoir utilisé cette capacité, même si elle échoue faute de cible. Cette capacité ne peut pas s’exécuter si un Pokémon au combat a le talent Moiteur.",
		shortDesc: "Touche les Pokémon adjacents. Le lanceur est mis K.O.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	extrasensory: {
		name: "Extrasenseur",
		// Official flavor text: "Le lanceur attaque avec un pouvoir étrange et invisible. Peut aussi apeurer l’ennemi."
		desc: "10 % de chances d’apeurer la cible.",
		shortDesc: "10 % de chances d’apeurer la cible.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	extremeevoboost: {
		name: "Neuf pour Un",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Augmente l’Attaque, la Défense, l’Attaque Spéciale, la Défense Spéciale et la Vitesse du lanceur de deux niveaux.",
		shortDesc: "Augmente Atq, Déf, Atq Spé, Déf Spé et Vit du lanceur de 2 niveaux.",
	},
	extremespeed: {
		name: "Vitesse Extrême",
		// Official flavor text: "Le lanceur charge à une vitesse renversante. Frappe en priorité."
		desc: "Aucun effet supplémentaire.",
		shortDesc: "Frappe presque toujours en premier.",
		gen4: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	facade: {
		name: "Façade",
		// Official flavor text: "Une attaque dont la puissance double lorsque le lanceur est empoisonné, paralysé ou brûlé."
		desc: "La puissance double si le lanceur est brûlé, paralysé ou empoisonné. L’effet de la brûlure du lanceur qui divise par deux les dégâts physiques est ignoré.",
		shortDesc: "La puissance double si le lanceur est brûlé, empoisonné ou paralysé.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	fairylock: {
		name: "Verrou Enchanté",
		// Official flavor text: "Des chaînes entourent la zone de combat, empêchant tous les Pokémon de fuir au prochain tour."
		desc: "Empêche tous les Pokémon au combat d’être remplacés au tour suivant. Un Pokémon peut tout de même être remplacé s’il tient une Carapace Mue ou s’il utilise Relais, Eau Revoir, Dernier Mot, Téléport, Demi-Tour ou Change Éclair. Échoue si l’effet est déjà actif.",
		shortDesc: "Empêche tous les Pokémon d’être remplacés au tour suivant.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  Il sera impossible de fuir au tour suivant !",
	},
	fairywind: {
		name: "Vent Féérique",
		shortDesc: "Aucun effet supplémentaire.",
	},
	fakeout: {
		name: "Bluff",
		// Official flavor text: "Permet de frapper en priorité et apeure l’ennemi. Ne fonctionne qu’au premier tour."
		desc: "100 % de chances d’apeurer la cible. Échoue si ce n’est pas le premier tour du lanceur sur le terrain.",
		shortDesc: "Frappe en premier. Premier tour uniquement. 100 % de chances d’apeurer.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	faketears: {
		name: "Croco Larme",
		// Official flavor text: "Le lanceur fait semblant de pleurer pour troubler l’ennemi et beaucoup baisser sa Défense Spéciale."
		desc: "Baisse la Défense Spéciale de la cible de deux niveaux.",
		shortDesc: "Baisse la Déf Spé de la cible de 2 niveaux.",
	},
	falsesurrender: {
		name: "Fourbette",
		shortDesc: "Cette capacité ne peut pas rater.",
	},
	falseswipe: {
		name: "Faux-Chage",
		// Official flavor text: "Le lanceur retient ses coups pour que l’ennemi garde au moins 1 PV et ne tombe pas K.O."
		desc: "Laisse au moins 1 PV à la cible.",
		shortDesc: "Laisse toujours au moins 1 PV à la cible.",
	},
	featherdance: {
		name: "Danse Plumes",
		// Official flavor text: "Une montagne de plumes ensevelit l’ennemi et réduit beaucoup son Attaque."
		desc: "Baisse l’Attaque de la cible de deux niveaux.",
		shortDesc: "Baisse l’Attaque de la cible de 2 niveaux.",
	},
	feint: {
		name: "Ruse",
		// Official flavor text: "Une attaque capable de toucher un ennemi qui utilise une capacité comme Détection ou Abri. Annule l’effet de ces capacités."
		desc: "Si cette capacité réussit, elle perce la protection Blockhaus, Détection, Bouclier Royal, Abri ou Pico-Défense de la cible pour ce tour, ce qui permet aux autres Pokémon d’attaquer la cible normalement. Si le camp de la cible est protégé par Vigilance, Tatamigaeshi, Prévention ou Garde Large, cette protection est également brisée pour ce tour et les autres Pokémon peuvent attaquer le camp de la cible normalement.",
		shortDesc: "Annule Détection, Abri, Prévention et Garde Large.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		activate: "  {TARGET} s’est fait avoir par une ruse !",
	},
	feintattack: {
		name: "Feinte",
		shortDesc: "Cette capacité ne peut pas rater.",
	},
	fellstinger: {
		name: "Dard Mortel",
		// Official flavor text: "Augmente énormément l’Attaque du lanceur si un ennemi est mis K.O. avec cette capacité."
		desc: "Augmente l’Attaque du lanceur de trois niveaux si cette capacité met la cible K.O.",
		shortDesc: "Augmente l’Attaque du lanceur de 3 niveaux si la cible est mise K.O.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	ficklebeam: {
		name: "Laser Hasard",
		shortDesc: "30 % de chances que la puissance de cette capacité double.",

		activate: "  {POKEMON} a pris cette capacité au sérieux !",
	},
	fierydance: {
		name: "Danse du Feu",
		// Official flavor text: "Le lanceur enveloppe l’ennemi de flammes. Peut aussi augmenter l’Attaque Spéciale du lanceur."
		desc: "50 % de chances d’augmenter l’Attaque Spéciale du lanceur d’un niveau.",
		shortDesc: "50 % de chances d’augmenter l’Atq Spé du lanceur d’un niveau.",
	},
	fierywrath: {
		name: "Fureur Ardente",
		// Official flavor text: "Le lanceur canalise sa colère et la transforme en aura brûlante, avec laquelle il attaque l’ennemi. Peut aussi l’apeurer."
		desc: "20 % de chances d’apeurer la cible.",
		shortDesc: "20 % de chances d’apeurer le ou les adversaires.",
	},
	filletaway: {
		name: "Décharnement",
		// Official flavor text: "Le lanceur sacrifie des PV pour beaucoup augmenter son Attaque, son Attaque Spéciale, et sa Vitesse."
		desc: "Augmente l’Attaque, l’Attaque Spéciale et la Vitesse du lanceur de deux niveaux en échange de la perte de 1/2 de ses PV max, arrondi à l’inférieur. Échoue si le lanceur serait mis K.O. ou si ses niveaux d’Attaque, d’Attaque Spéciale et de Vitesse ne changeraient pas.",
		shortDesc: "+2 en Attaque, Atq Spé et Vitesse contre 1/2 des PV max du lanceur.",
	},
	finalgambit: {
		name: "Tout ou Rien",
		// Official flavor text: "Une attaque très risquée. Le lanceur perd tous ses PV restants et inflige autant de dégâts à l’ennemi."
		desc: "Inflige à la cible des dégâts égaux aux PV actuels du lanceur. Si cette capacité réussit, le lanceur est K.O.",
		shortDesc: "Inflige des dégâts égaux aux PV du lanceur. Le lanceur est K.O.",
	},
	fireblast: {
		name: "Déflagration",
		// Official flavor text: "Un déluge de flammes ardentes submerge l’ennemi. Peut aussi le brûler."
		desc: "10 % de chances de brûler la cible.",
		shortDesc: "10 % de chances de brûler la cible.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	firefang: {
		name: "Crocs Feu",
		// Official flavor text: "Le lanceur utilise une morsure enflammée. Peut aussi brûler ou apeurer l’ennemi."
		desc: "10 % de chances de brûler la cible et 10 % de chances de l’apeurer.",
		shortDesc: "10 % de chances de brûler. 10 % de chances d’apeurer.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	firelash: {
		name: "Fouet de Feu",
		// Official flavor text: "Frappe la cible avec un fouet incandescent et baisse sa Défense."
		desc: "100 % de chances de baisser la Défense de la cible d’un niveau.",
		shortDesc: "100 % de chances de baisser la Défense de la cible d’un niveau.",
	},
	firepledge: {
		name: "Aire de Feu",
		// Official flavor text: "Une masse de feu s’abat sur l’ennemi. En l’utilisant avec Aire d’Herbe, l’effet augmente et une mer de feu apparaît."
		desc: "Si l’un des alliés du lanceur a choisi d’utiliser Aire d’Herbe ou Aire d’Eau ce tour-ci et n’a pas encore agi, il agit immédiatement après le lanceur, et la capacité du lanceur n’a aucun effet. Combinée avec Aire d’Herbe, l’allié utilise Aire de Feu avec une puissance de 150 et une mer de feu apparaît du côté de la cible pendant 4 tours, infligeant aux Pokémon qui ne sont pas de type Feu des dégâts égaux à 1/8 de leurs PV max, arrondi à l’inférieur, à la fin de chaque tour pendant l’effet, y compris le dernier tour. Combinée avec Aire d’Eau, l’allié utilise Aire d’Eau avec une puissance de 150 et un arc-en-ciel apparaît du côté du lanceur pendant 4 tours, ce qui double les chances d’effets secondaires et se cumule avec le talent Sérénité, sauf que les chances d’apeurer ne peuvent être doublées qu’une seule fois. Utilisée comme capacité combinée, cette capacité bénéficie du bonus de même type (STAB) quel que soit le type du lanceur. Cette capacité ne consomme pas le Joyau Feu du lanceur.",
		shortDesc: "À combiner avec Aire d’Herbe ou Aire d’Eau pour un effet supplémentaire.",

		activate: "#waterpledge",
		start: "  {TEAM:capitalize} est cernée par une mer de feu !",
		end: "  La mer de feu autour de {TEAM} a disparu !",
		damage: "  {POKEMON} est plongé dans un océan de feu !",
	},
	firepunch: {
		name: "Poing Feu",
		// Official flavor text: "Un coup de poing enflammé vient frapper l’ennemi. Peut le brûler."
		desc: "10 % de chances de brûler la cible.",
		shortDesc: "10 % de chances de brûler la cible.",
	},
	firespin: {
		name: "Danse Flammes",
		// Official flavor text: "Un tourbillon de flammes emprisonne l’ennemi pendant quatre à cinq tours."
		desc: "Empêche la cible d’être remplacée pendant quatre ou cinq tours (sept tours si le lanceur tient une Accro Griffe). Inflige à la cible des dégâts égaux à 1/8 de ses PV max (1/6 si le lanceur tient une Bande Étreinte), arrondi à l’inférieur, à la fin de chaque tour pendant l’effet. La cible peut tout de même être remplacée si elle tient une Carapace Mue ou si elle utilise Relais, Eau Revoir, Dernier Mot, Queulonage, Téléport, Demi-Tour ou Change Éclair. L’effet prend fin si le lanceur ou la cible quitte le terrain, ou si la cible utilise avec succès Toupie Éclat, Tour Rapide ou Clonage. Cet effet ne se cumule pas et n’est pas réinitialisé par l’utilisation de cette capacité ou d’une autre capacité de piège.",
		shortDesc: "Piège et blesse la cible pendant 4 à 5 tours.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
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
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} est piégé dans un tourbillon de feu !",
		move: "#wrap",
	},
	firstimpression: {
		name: "Escarmouche",
		// Official flavor text: "Une capacité très puissante, mais qui ne fonctionne qu’au premier tour."
		desc: "Échoue si ce n’est pas le premier tour du lanceur sur le terrain.",
		shortDesc: "Frappe presque toujours en premier. Premier tour uniquement.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	fishiousrend: {
		name: "Branchicrok",
		// Official flavor text: "Le lanceur mord sa cible avec ses solides branchies. Si cette capacité est lancée avant que la cible n’attaque, elle infligera deux fois plus de dégâts."
		desc: "La puissance double si le lanceur agit avant la cible.",
		shortDesc: "La puissance double si le lanceur agit avant la cible.",
	},
	fissure: {
		name: "Abîme",
		// Official flavor text: "Le lanceur fait tomber l’ennemi dans une crevasse. Si cette attaque réussit, elle met K.O. sur le coup."
		desc: "Inflige à la cible des dégâts égaux à ses PV max. Ignore les modificateurs de Précision et d’Esquive. La Précision de cette attaque est égale à (niveau du lanceur - niveau de la cible + 30) %, et elle échoue si la cible est d’un niveau supérieur. Les Pokémon ayant le talent Fermeté y sont immunisés.",
		shortDesc: "Met la cible K.O. en un coup. Échoue si le lanceur a un niveau inférieur.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	flail: {
		name: "Gigotage",
		// Official flavor text: "Le lanceur attaque en gigotant dans tous les sens. Plus ses PV sont bas, plus l’attaque est puissante."
		desc: "La puissance de cette capacité est de 20 si X vaut de 33 à 48, de 40 si X vaut de 17 à 32, de 80 si X vaut de 10 à 16, de 100 si X vaut de 5 à 9, de 150 si X vaut de 2 à 4, et de 200 si X vaut 0 ou 1, où X est égal à (PV actuels du lanceur × 48 / PV max du lanceur), arrondi à l’inférieur.",
		shortDesc: "Plus le lanceur a peu de PV, plus la puissance est élevée.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	flameburst: {
		name: "Rebondifeu",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Si cette capacité réussit, l’allié de la cible perd 1/16 de ses PV max, arrondi à l’inférieur, sauf s’il a le talent Garde Magik.",
		shortDesc: "Blesse aussi les Pokémon à côté de la cible.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		damage: "  {POKEMON} est arrosé d’une gerbe de flammes !",
	},
	flamecharge: {
		name: "Nitrocharge",
		// Official flavor text: "Le lanceur s’entoure de flammes pour attaquer l’ennemi. Il se concentre et sa Vitesse augmente."
		desc: "100 % de chances d’augmenter la Vitesse du lanceur d’un niveau.",
		shortDesc: "100 % de chances d’augmenter la Vitesse du lanceur d’un niveau.",
	},
	flamethrower: {
		name: "Lance-Flammes",
		// Official flavor text: "L’ennemi reçoit un torrent de flammes. Peut aussi le brûler."
		desc: "10 % de chances de brûler la cible.",
		shortDesc: "10 % de chances de brûler la cible.",
	},
	flamewheel: {
		name: "Roue de Feu",
		// Official flavor text: "Le lanceur s’entoure de feu et charge l’ennemi. Peut aussi le brûler."
		desc: "10 % de chances de brûler la cible.",
		shortDesc: "10 % de chances de brûler la cible. Dégèle le lanceur.",
	},
	flareblitz: {
		name: "Boutefeu",
		// Official flavor text: "Le lanceur s’embrase avant de charger l’ennemi. Le choc blesse aussi gravement le lanceur. Peut brûler l’ennemi."
		desc: "10 % de chances de brûler la cible. Si la cible a perdu des PV, le lanceur subit des dégâts de recul égaux à 33 % des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut), mais d’au moins 1 PV.",
		shortDesc: "Dégâts de recul de 33 %. 10 % de chances de brûler. Dégèle le lanceur.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	flash: {
		name: "Flash",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Baisse la Précision de la cible d’un niveau.",
		shortDesc: "Baisse la Précision de la cible d’un niveau.",
	},
	flashcannon: {
		name: "Luminocanon",
		// Official flavor text: "Le lanceur concentre son énergie lumineuse et la fait exploser. Peut aussi baisser la Défense Spéciale de l’ennemi."
		desc: "10 % de chances de baisser la Défense Spéciale de la cible d’un niveau.",
		shortDesc: "10 % de chances de baisser la Déf Spé de la cible d’un niveau.",
	},
	flatter: {
		name: "Flatterie",
		// Official flavor text: "Rend la cible confuse, mais augmente son Attaque Spéciale."
		desc: "Augmente l’Attaque Spéciale de la cible d’un niveau et la rend confuse.",
		shortDesc: "Augmente l’Atq Spé de la cible d’un niveau et la rend confuse.",
	},
	fleurcannon: {
		name: "Canon Floral",
		// Official flavor text: "Envoie un rayon laser dévastateur. Baisse beaucoup l’Attaque Spéciale du lanceur."
		desc: "Baisse l’Attaque Spéciale du lanceur de deux niveaux.",
		shortDesc: "Baisse l’Atq Spé du lanceur de 2 niveaux.",
	},
	fling: {
		name: "Dégommage",
		// Official flavor text: "Le lanceur envoie l’objet qu’il tient sur l’ennemi. La puissance et les effets dépendent de l’objet."
		desc: "La puissance de cette capacité dépend de l’objet tenu par le lanceur. L’objet tenu est perdu et son effet s’active sur la cible le cas échéant. S’il n’y a pas de cible ou si la cible évite cette capacité en se protégeant, l’objet tenu par le lanceur est tout de même perdu. Le lanceur peut récupérer un objet lancé avec Recyclage ou le talent Récolte. Échoue si le lanceur ne tient pas d’objet, si l’objet tenu ne peut pas être lancé, si le lanceur est sous l’effet d’Embargo ou de Zone Magique, ou si le lanceur a le talent Maladresse.",
		shortDesc: "Lance l’objet du lanceur sur la cible. Puissance variable.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		removeItem: "  {POKEMON} lance {ITEM:indefinite:classified} !",
	},
	flipturn: {
		name: "Eau Revoir",
		// Official flavor text: "Après son attaque, le lanceur revient à toute vitesse et change de place avec un Pokémon de l’équipe prêt au combat."
		desc: "Si cette capacité réussit et que le lanceur n’est pas K.O., le lanceur se retire même s’il est piégé et est immédiatement remplacé par un membre de l’équipe choisi. Le lanceur ne se retire pas s’il ne reste aucun membre de l’équipe non K.O., ou si la cible s’est retirée grâce à un Bouton Fuite ou à l’effet des talents Repli Tactique ou Escampette.",
		shortDesc: "Le lanceur se retire après avoir blessé la cible.",

		switchOut: "#uturn",
	},
	floatyfall: {
		name: "Pika-Piqué",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "30 % de chances d’apeurer la cible.",
		shortDesc: "30 % de chances d’apeurer la cible.",
	},
	floralhealing: {
		name: "Soin Floral",
		// Official flavor text: "Rend la moitié de ses PV max à la cible. Plus efficace sur un Champ Herbu."
		desc: "La cible récupère 1/2 de ses PV max, arrondi à l’entier le plus proche (0,5 vers le haut). Si le terrain actuel est Champ Herbu, la cible récupère à la place 2/3 de ses PV max, arrondi à l’entier le plus proche (0,5 vers le bas).",
		shortDesc: "Soigne la cible de 50 % de ses PV max.",
	},
	flowershield: {
		name: "Garde Florale",
		// Official flavor text: "Grâce à une force mystérieuse, la Défense de tous les Pokémon Plante au combat augmente."
		desc: "Augmente la Défense de tous les Pokémon de type Plante au combat d’un niveau. Échoue s’il n’y a aucun Pokémon de type Plante au combat.",
		shortDesc: "Augmente la Défense de tous les types Plante au combat d’un niveau.",
	},
	flowertrick: {
		name: "Magie Florale",
		// Official flavor text: "Le lanceur attaque en jetant un bouquet de fleurs piégé sur la cible. N'échoue jamais et inflige toujours un coup critique."
		desc: "Cette capacité inflige toujours un coup critique, sauf si la cible est sous l’effet d’Air Veinard ou a le talent Armurbaston ou Coque Armure. Cette capacité ne peut pas rater.",
		shortDesc: "Inflige toujours un coup critique ; ne peut pas rater.",
	},
	fly: {
		name: "Vol",
		// Official flavor text: "Le lanceur s’envole au premier tour et frappe au second."
		desc: "Cette attaque se charge au premier tour et s’exécute au second. Au premier tour, le lanceur évite toutes les attaques sauf Tornade, Vent Violent, Stratopercut, Anti-Air, Myria-Flèches, Fatal-Foudre et Ouragan, et Tornade et Ouragan ont une puissance doublée contre lui. Si le lanceur tient une Herbe Pouvoir, la capacité s’exécute en un seul tour.",
		shortDesc: "S’envole au tour 1, frappe au tour 2.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},

		prepare: "{POKEMON} s’envole !",
	},
	flyingpress: {
		name: "Flying Press",
		// Official flavor text: "Une attaque en piqué depuis le ciel, à la fois de type Combat et de type Vol."
		desc: "Le type Vol est combiné au type de cette capacité pour calculer son efficacité contre la cible. Les dégâts doublent et la capacité ne peut pas rater si la cible a utilisé Lilliput depuis son entrée au combat.",
		shortDesc: "Combine le type Vol pour le calcul de l’efficacité.",
	},
	focusblast: {
		name: "Exploforce",
		// Official flavor text: "Le lanceur rassemble ses forces et laisse éclater son pouvoir. Peut aussi baisser la Défense Spéciale de l’ennemi."
		desc: "10 % de chances de baisser la Défense Spéciale de la cible d’un niveau.",
		shortDesc: "10 % de chances de baisser la Déf Spé de la cible d’un niveau.",
	},
	focusenergy: {
		name: "Puissance",
		// Official flavor text: "Le lanceur prend une profonde inspiration et se concentre pour augmenter son taux de critiques."
		desc: "Augmente le taux de critique du lanceur de deux niveaux. Échoue si le lanceur est déjà sous cet effet. Relais peut être utilisé pour transmettre cet effet à un allié.",
		shortDesc: "Augmente le taux de critique du lanceur de 2 niveaux.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} est prêt à tout donner !",
		startFromItem: "  {POKEMON} est plein d’énergie grâce {ITEM:a:definite:classified} !",
		startFromZEffect: "  {POKEMON} utilise la Force Z pour augmenter son taux de critiques !",
	},
	focuspunch: {
		name: "Mitra-Poing",
		// Official flavor text: "Le lanceur se concentre avant d’attaquer. Échoue s’il est touché avant d’avoir frappé."
		desc: "Le lanceur perd sa concentration et ne fait rien s’il est touché par une attaque qui inflige des dégâts ce tour-ci avant de pouvoir exécuter la capacité.",
		shortDesc: "Échoue si le lanceur subit des dégâts avant de frapper.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} se concentre au maximum !",
		cant: "{POKEMON} n’est plus concentré. Il ne peut plus utiliser sa capacité !",
	},
	followme: {
		name: "Par Ici",
		// Official flavor text: "Attire l’attention des ennemis pour les forcer à n’attaquer que le lanceur."
		desc: "Jusqu’à la fin du tour, toutes les attaques à cible unique du camp adverse sont redirigées vers le lanceur. Ces attaques sont redirigées vers le lanceur avant de pouvoir être renvoyées par Reflet Magik ou le talent Miroir Magik, ou attirées par les talents Paratonnerre ou Lavabo. Échoue s’il ne s’agit pas d’un combat en Duo ou d’un Combat Royal. Cet effet est ignoré tant que le lanceur est sous l’effet de Chute Libre.",
		shortDesc: "Les capacités adverses ciblent le lanceur ce tour-ci.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} devient le centre de l’attention !",
		startFromZEffect: "  {POKEMON} devient le centre de l’attention !",
	},
	forcepalm: {
		name: "Forte-Paume",
		// Official flavor text: "Une onde de choc frappe l’ennemi. Peut aussi paralyser la cible."
		desc: "30 % de chances de paralyser la cible.",
		shortDesc: "30 % de chances de paralyser la cible.",
	},
	foresight: {
		name: "Clairvoyance",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Tant que la cible reste au combat, son niveau d’Esquive est ignoré lors des tests de Précision contre elle s’il est supérieur à 0, et les attaques de type Normal et Combat peuvent toucher la cible si elle est de type Spectre. Échoue si la cible est déjà sous cet effet, ou sous l’effet d’Œil Miracle ou de Flair.",
		shortDesc: "Normal et Combat touchent Spectre. Esquive ignorée.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} est identifié !",
	},
	forestscurse: {
		name: "Maléfice Sylvain",
		// Official flavor text: "La cible est charmée par l’esprit de la forêt. Le type Plante est ajouté à ses types actuels."
		desc: "Ajoute le type Plante à la cible, qui a ainsi deux ou trois types. Échoue si la cible est déjà de type Plante. Si Halloween ajoute un type à la cible, il remplace le type ajouté par cette capacité, et inversement.",
		shortDesc: "Ajoute le type Plante au(x) type(s) de la cible.",
	},
	foulplay: {
		name: "Tricherie",
		// Official flavor text: "Le lanceur utilise la force de l’ennemi. Plus l’Attaque de l’ennemi est élevée, plus le lanceur inflige de dégâts."
		desc: "Les dégâts sont calculés avec la stat d’Attaque de la cible, modifications de niveaux de stats comprises. Le talent, l’objet et la brûlure du lanceur s’appliquent normalement.",
		shortDesc: "Utilise l’Attaque de la cible pour calculer les dégâts.",
	},
	freezedry: {
		name: "Lyophilisation",
		// Official flavor text: "Refroidit violemment l’ennemi et peut le geler. Super efficace sur les Pokémon de type Eau."
		desc: "10 % de chances de geler la cible. Cette capacité est super efficace contre le type Eau, quel que soit son propre type.",
		shortDesc: "10 % de chances de geler. Super efficace contre Eau.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	freezeshock: {
		name: "Éclair Gelé",
		// Official flavor text: "Projette un bloc de glace électrifié sur l’ennemi au second tour. Peut aussi le paralyser."
		desc: "30 % de chances de paralyser la cible. Cette attaque se charge au premier tour et s’exécute au second. Si le lanceur tient une Herbe Pouvoir, la capacité s’exécute en un seul tour.",
		shortDesc: "Charge au tour 1. Frappe au tour 2. 30 % de paralysie.",

		prepare: "  {POKEMON} est baigné d’une lumière blafarde !",
	},
	freezingglare: {
		name: "Regard Glaçant",
		// Official flavor text: "Les yeux du lanceur tirent des rayons psychiques. Peut aussi geler l’ennemi."
		desc: "10 % de chances de geler la cible.",
		shortDesc: "10 % de chances de geler la cible.",
	},
	freezyfrost: {
		name: "Évo-Congélo",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Réinitialise à 0 les niveaux de stats de tous les Pokémon au combat.",
		shortDesc: "Annule toutes les modifications de stats.",
	},
	frenzyplant: {
		name: "Végé-Attaque",
		// Official flavor text: "Un violent coup de racines s’abat sur l’ennemi. Immobilise le lanceur au tour suivant."
		desc: "Si cette capacité réussit, le lanceur doit se recharger au tour suivant et ne peut pas choisir de capacité.",
		shortDesc: "Le lanceur ne peut pas agir au tour suivant.",
	},
	frostbreath: {
		name: "Souffle Glacé",
		// Official flavor text: "Un souffle froid blesse l’ennemi. L’effet est toujours critique."
		desc: "Cette capacité inflige toujours un coup critique, sauf si la cible est sous l’effet d’Air Veinard ou a le talent Armurbaston ou Coque Armure.",
		shortDesc: "Inflige toujours un coup critique.",
	},
	frustration: {
		name: "Frustration",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "La puissance est égale à la plus grande des deux valeurs suivantes : ((255 - Bonheur du lanceur) × 2/5), arrondi à l’inférieur, ou 1.",
		shortDesc: "Puissance max de 102 avec un Bonheur minimal.",
	},
	furyattack: {
		name: "Furie",
		// Official flavor text: "Frappe l’ennemi deux à cinq fois d’affilée avec un bec ou une corne, par exemple."
		desc: "Frappe de deux à cinq fois. 35 % de chances de frapper deux ou trois fois et 15 % de chances de frapper quatre ou cinq fois. Si l’un des coups détruit le clone de la cible, celle-ci subit les dégâts des coups restants. Si le lanceur a le talent Multi-Coups, cette capacité frappe toujours cinq fois. Si le lanceur tient un Dé Pipé, cette capacité frappe de 4 à 5 fois.",
		shortDesc: "Frappe de 2 à 5 fois en un tour.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	furycutter: {
		name: "Taillade",
		// Official flavor text: "Un coup de faux ou de griffe dont la force augmente quand il touche plusieurs fois d’affilée."
		desc: "La puissance double à chaque coup réussi, jusqu’à une puissance maximale de 160. La puissance est réinitialisée si cette capacité rate ou si une autre capacité est utilisée.",
		shortDesc: "La puissance double à chaque coup, jusqu’à 160.",
	},
	furyswipes: {
		name: "Combo-Griffe",
		// Official flavor text: "L’ennemi est lacéré par des faux ou des griffes de deux à cinq fois d’affilée."
		desc: "Frappe de deux à cinq fois. 35 % de chances de frapper deux ou trois fois et 15 % de chances de frapper quatre ou cinq fois. Si l’un des coups détruit le clone de la cible, celle-ci subit les dégâts des coups restants. Si le lanceur a le talent Multi-Coups, cette capacité frappe toujours cinq fois. Si le lanceur tient un Dé Pipé, cette capacité frappe de 4 à 5 fois.",
		shortDesc: "Frappe de 2 à 5 fois en un tour.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	fusionbolt: {
		name: "Éclair Croix",
		// Official flavor text: "Projette un orbe électrique gigantesque. L’effet augmente sous l’influence de Flamme Croix."
		desc: "La puissance double si la dernière capacité utilisée par un Pokémon ce tour-ci était Flamme Croix.",
		shortDesc: "La puissance double si utilisée après Flamme Croix ce tour-ci.",
	},
	fusionflare: {
		name: "Flamme Croix",
		// Official flavor text: "Projette une boule de feu gigantesque. L’effet augmente sous l’influence d’Éclair Croix."
		desc: "La puissance double si la dernière capacité utilisée par un Pokémon ce tour-ci était Éclair Croix.",
		shortDesc: "La puissance double si utilisée après Éclair Croix ce tour-ci.",
	},
	futuresight: {
		name: "Prescience",
		// Official flavor text: "De l’énergie psychique vient frapper l’ennemi deux tours après l’utilisation de cette capacité."
		desc: "Inflige des dégâts deux tours après l’utilisation de cette capacité. À la fin de ce tour-là, les dégâts sont calculés à ce moment et infligés au Pokémon se trouvant à la position qu’occupait la cible lors de l’utilisation de la capacité. Si le lanceur n’est plus au combat à ce moment-là, les dégâts sont calculés à partir de l’Attaque Spéciale naturelle, des types et du niveau du lanceur, sans bonus de son objet tenu ni de son talent. Échoue si cette capacité ou Vœu Destructeur est déjà active sur la position de la cible.",
		shortDesc: "Frappe deux tours après son utilisation.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} prévoit une attaque !",
		activate: "  {TARGET} subit l’attaque Prescience !",
	},
	gastroacid: {
		name: "Suc Digestif",
		// Official flavor text: "Le lanceur répand ses sucs digestifs sur l’ennemi. Le fluide neutralise le talent de l’ennemi."
		desc: "Rend le talent de la cible inefficace tant qu’elle reste au combat. Si la cible utilise Relais, son remplaçant reste sous cet effet. Si le talent de la cible est Osmose Équine, Synergie, Hypersommeil, Fantômasque, Dégobage, Tête de Gel, Multi-Type, Rassemblement, Système Alpha, Banc, Bouclier-Carcan, Déclic Tactique, Téramorphose, Mode Transe ou Supermutation, cette capacité échoue, et recevoir l’effet via Relais y met fin immédiatement.",
		shortDesc: "Neutralise le talent de la cible.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  Le talent {POKEMON:de} a été rendu inactif !",
	},
	geargrind: {
		name: "Lancécrou",
		// Official flavor text: "Le lanceur jette deux écrous d’acier qui frappent l’ennemi deux fois d’affilée."
		desc: "Frappe deux fois. Si le premier coup détruit le clone de la cible, celle-ci subit les dégâts du second coup.",
		shortDesc: "Frappe 2 fois en un tour.",
	},
	gearup: {
		name: "Engrenage",
		// Official flavor text: "Change de réglage pour augmenter l’Attaque et l’Attaque Spéciale des alliés ayant les talents Plus ou Moins."
		desc: "Augmente d’un niveau l’Attaque et l’Attaque Spéciale des Pokémon du camp du lanceur ayant le talent Plus ou Moins.",
		shortDesc: "Augmente l’Atq et l’Atq Spé des alliés ayant Plus/Moins d’un niveau.",
	},
	genesissupernova: {
		name: "Supernova Originelle",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Si cette capacité réussit, le terrain devient Champ Psychique.",
		shortDesc: "Déclenche Champ Psychique.",
	},
	geomancy: {
		name: "Géo-Contrôle",
		// Official flavor text: "Le lanceur absorbe de l’énergie au premier tour et augmente beaucoup son Attaque Spéciale, sa Défense Spéciale et sa Vitesse au second."
		desc: "Augmente l’Attaque Spéciale, la Défense Spéciale et la Vitesse du lanceur de deux niveaux. Cette attaque se charge au premier tour et s’exécute au second. Si le lanceur tient une Herbe Pouvoir, la capacité s’exécute en un seul tour.",
		shortDesc: "Se charge, puis +2 en Atq Spé, Déf Spé et Vit au tour 2.",

		prepare: "{POKEMON} concentre son énergie !",
	},
	gigadrain: {
		name: "Giga-Sangsue",
		// Official flavor text: "Une attaque qui convertit la moitié des dégâts infligés en PV pour le lanceur."
		desc: "Le lanceur récupère 1/2 des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut). Si le lanceur tient une Grosse Racine, les PV récupérés sont multipliés par 1,3, arrondi à l’entier le plus proche (0,5 vers le bas).",
		shortDesc: "Le lanceur récupère 50 % des dégâts infligés.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	gigaimpact: {
		name: "Giga Impact",
		// Official flavor text: "Le lanceur charge l’ennemi de toute sa puissance et doit ensuite se reposer au tour suivant."
		desc: "Si cette capacité réussit, le lanceur doit se recharger au tour suivant et ne peut pas choisir de capacité.",
		shortDesc: "Le lanceur ne peut pas agir au tour suivant.",
	},
	gigatonhammer: {
		name: "Marteau Mastoc",
		shortDesc: "Ne peut pas être sélectionnée au tour suivant son utilisation.",
	},
	gigavolthavoc: {
		name: "Fulguro-Lance Gigavolt",
		shortDesc: "La puissance est égale à la puissance Z de la capacité de base.",
	},
	glaciallance: {
		name: "Lance de Glace",
		// Official flavor text: "Le lanceur attaque l’ennemi avec une lance de glace entourée d’un blizzard."
		desc: "Aucun effet supplémentaire.",
		shortDesc: "Aucun effet supplémentaire. Touche les adversaires adjacents.",
	},
	glaciate: {
		name: "Ère Glaciaire",
		// Official flavor text: "Un souffle de vent qui congèle tout sur son passage s’abat sur l’ennemi. Réduit aussi sa Vitesse."
		desc: "100 % de chances de baisser la Vitesse de la cible d’un niveau.",
		shortDesc: "100 % de chances de baisser la Vitesse des adversaires d’un niveau.",
	},
	glaiverush: {
		name: "Charge Glaive",
		// Official flavor text: "Le lanceur se jette dans une charge inconsciente sur la cible. Une fois cette capacité utilisée, toute attaque sur le lanceur inflige le double de dégâts et n'échoue jamais."
		desc: "Si cette capacité réussit, les capacités qui visent le lanceur infligent le double de dégâts et ne peuvent pas rater jusqu’au prochain tour du lanceur.",
		shortDesc: "Jusqu’à son prochain tour, le lanceur subit 2× les dégâts sans esquive.",
	},
	glare: {
		name: "Regard Médusant",
		// Official flavor text: "Le lanceur intimide l’ennemi grâce à son regard terrifiant pour le paralyser."
		desc: "Paralyse la cible.",
		shortDesc: "Paralyse la cible.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	glitzyglow: {
		name: "Évo-Psycho",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Cette capacité active Mur Lumière pendant 5 tours lors de son utilisation.",
		shortDesc: "Active Mur Lumière.",
	},
	gmaxbefuddle: {
		name: "Illusion G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, chaque Pokémon du camp adverse s’endort, est empoisonné ou est paralysé, même s’il est protégé par un clone.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : sommeil, poison ou paralysie.",
	},
	gmaxcannonade: {
		name: "Canonnade G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, pendant 4 tours, chaque Pokémon du camp adverse qui n’est pas de type Eau subit des dégâts égaux à 1/6 de ses PV max, arrondi à l’inférieur, à la fin de chaque tour pendant l’effet, y compris le dernier tour.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : -1/6 des PV pendant 4 tours.",

		start: "  La violence des courants frappe {PARTY} !",
		damage: "  {POKEMON} subit la violence du tourbillon provoqué par Canonnade G-Max !",
	},
	gmaxcentiferno: {
		name: "Combustion G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, chaque Pokémon du camp adverse ne peut plus être remplacé pendant quatre ou cinq tours (sept tours si le lanceur tient une Accro Griffe), même s’il est protégé par un clone. Inflige des dégâts égaux à 1/8 de leurs PV max (1/6 si le lanceur tient une Bande Étreinte), arrondi à l’inférieur, à la fin de chaque tour pendant l’effet. Ils peuvent tout de même être remplacés s’ils tiennent une Carapace Mue ou s’ils utilisent Relais, Eau Revoir, Dernier Mot, Téléport, Demi-Tour ou Change Éclair. L’effet prend fin pour une cible si elle quitte le terrain, ou si elle utilise avec succès Tour Rapide ou Clonage. Cet effet ne se cumule pas et n’est pas réinitialisé par l’utilisation de cette capacité ou d’une autre capacité de piège.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : piégés 4 à 5 tours.",
	},
	gmaxchistrike: {
		name: "Frappe G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, le taux de critique de chaque Pokémon du camp du lanceur augmente d’un niveau, même s’il est protégé par un clone.",
		shortDesc: "Puissance selon la capacité de base. Alliés : taux de critique +1.",

		start: "#focusenergy",
	},
	gmaxcuddle: {
		name: "Câlin G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, chaque Pokémon du camp adverse tombe amoureux, même s’il est protégé par un clone. Cet effet ne se produit pas pour une cible si elle et le lanceur sont du même sexe, si l’un des deux est asexué ou si la cible est déjà amoureuse.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : amoureux.",
	},
	gmaxdepletion: {
		name: "Usure G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, chaque Pokémon du camp adverse perd 2 PP sur la dernière capacité qu’il a utilisée, même s’il est protégé par un clone.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : dernière capacité -2 PP.",

		activate: "  Les PP {TARGET:de} baissent !",
	},
	gmaxdrumsolo: {
		name: "Percussion G-Max",
		desc: "La puissance est de 160, quelle que soit la puissance Dynamax de la capacité de base. Cette capacité et ses effets ignorent les talents des autres Pokémon.",
		shortDesc: "Puissance toujours de 160. Ignore les talents.",
	},
	gmaxfinale: {
		name: "Cure G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, chaque Pokémon du camp du lanceur récupère 1/6 de ses PV max actuels, même s’il est protégé par un clone.",
		shortDesc: "Puissance selon la capacité de base. Alliés : +1/6 des PV max.",
	},
	gmaxfireball: {
		name: "Pyroball G-Max",
		desc: "La puissance est de 160, quelle que soit la puissance Dynamax de la capacité de base. Cette capacité et ses effets ignorent les talents des autres Pokémon.",
		shortDesc: "Puissance toujours de 160. Ignore les talents.",
	},
	gmaxfoamburst: {
		name: "Bulles G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, la Vitesse de chaque Pokémon du camp adverse baisse de deux niveaux, même s’il est protégé par un clone.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : -2 en Vitesse.",
	},
	gmaxgoldrush: {
		name: "Pactole G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, chaque Pokémon du camp adverse devient confus, même s’il est protégé par un clone.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : confus.",
	},
	gmaxgravitas: {
		name: "Ondes G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, l’effet de Gravité commence.",
		shortDesc: "Puissance selon la capacité de base. Active Gravité.",
	},
	gmaxhydrosnipe: {
		name: "Gâchette G-Max",
		desc: "La puissance est de 160, quelle que soit la puissance Dynamax de la capacité de base. Cette capacité et ses effets ignorent les talents des autres Pokémon.",
		shortDesc: "Puissance toujours de 160. Ignore les talents.",
	},
	gmaxmalodor: {
		name: "Pestilence G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, chaque Pokémon du camp adverse est empoisonné, même s’il est protégé par un clone.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : empoisonnés.",
	},
	gmaxmeltdown: {
		name: "Fonte G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, l’effet de Tourmente commence pour chaque Pokémon du camp adverse, même s’il est protégé par un clone.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : Tourmente.",
	},
	gmaxoneblow: {
		name: "Coup Final G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Cette capacité passe outre toutes les protections, y compris Gardomax.",
		shortDesc: "Puissance selon la capacité de base. Passe outre Gardomax.",
	},
	gmaxrapidflow: {
		name: "Multicoup G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Cette capacité passe outre toutes les protections, y compris Gardomax.",
		shortDesc: "Puissance selon la capacité de base. Passe outre Gardomax.",
	},
	gmaxreplenish: {
		name: "Récolte G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, il y a 50 % de chances que chaque Pokémon du camp du lanceur récupère sa Baie, même s’il est protégé par un clone.",
		shortDesc: "Puissance selon la capacité de base. 50 % : restaure les Baies.",
	},
	gmaxresonance: {
		name: "Résonance G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, l’effet de Voile Aurore commence dans le camp du lanceur.",
		shortDesc: "Puissance selon la capacité de base. Alliés : Voile Aurore.",
	},
	gmaxsandblast: {
		name: "Enlisement G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, chaque Pokémon du camp adverse ne peut plus être remplacé pendant quatre ou cinq tours (sept tours si le lanceur tient une Accro Griffe), même s’il est protégé par un clone. Inflige des dégâts égaux à 1/8 de leurs PV max (1/6 si le lanceur tient une Bande Étreinte), arrondi à l’inférieur, à la fin de chaque tour pendant l’effet. Ils peuvent tout de même être remplacés s’ils tiennent une Carapace Mue ou s’ils utilisent Relais, Eau Revoir, Dernier Mot, Téléport, Demi-Tour ou Change Éclair. L’effet prend fin pour une cible si elle quitte le terrain, ou si elle utilise avec succès Tour Rapide ou Clonage. Cet effet ne se cumule pas et n’est pas réinitialisé par l’utilisation de cette capacité ou d’une autre capacité de piège.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : piégés 4 à 5 tours.",
	},
	gmaxsmite: {
		name: "Sentence G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, chaque Pokémon du camp adverse devient confus, même s’il est protégé par un clone.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : confus.",
	},
	gmaxsnooze: {
		name: "Torpeur G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, il y a 50 % de chances que l’effet de Bâillement commence sur la cible, même si elle est protégée par un clone.",
		shortDesc: "Puissance selon la capacité de base. Cible : 50 % de Bâillement.",
	},
	gmaxsteelsurge: {
		name: "Percée G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, elle place un piège du côté adverse du terrain, qui blesse chaque Pokémon adverse entrant au combat. Les adversaires perdent 1/32, 1/16, 1/8, 1/4 ou 1/2 de leurs PV max, arrondi à l’inférieur, selon leur faiblesse au type Acier : respectivement 0,25×, 0,5×, neutre, 2× ou 4×. Peut être retiré du côté adverse si un Pokémon adverse utilise avec succès Tour Rapide ou Anti-Brume, ou est touché par Anti-Brume.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : piège de type Acier.",

		start: "  Des morceaux d’acier acérés lévitent autour de {PARTY} !",
		end: "  Les morceaux d’acier acérés autour de {PARTY} ont disparu !",
		damage: "  L’acier pointu transperce {POKEMON} !",
	},
	gmaxstonesurge: {
		name: "Récif G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, elle place un piège du côté adverse du terrain, qui blesse chaque Pokémon adverse entrant au combat. Les adversaires perdent 1/32, 1/16, 1/8, 1/4 ou 1/2 de leurs PV max, arrondi à l’inférieur, selon leur faiblesse au type Roche : respectivement 0,25×, 0,5×, neutre, 2× ou 4×. Peut être retiré du côté adverse si un Pokémon adverse utilise avec succès Tour Rapide ou Anti-Brume, ou est touché par Anti-Brume.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : Piège de Roc.",
	},
	gmaxstunshock: {
		name: "Choc G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, chaque Pokémon du camp adverse est empoisonné ou paralysé, même s’il est protégé par un clone.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : poison ou paralysie.",
	},
	gmaxsweetness: {
		name: "Nectar G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, l’altération de statut de chaque Pokémon du camp du lanceur est soignée, même s’il est protégé par un clone.",
		shortDesc: "Puissance selon la capacité de base. Alliés : statut soigné.",
	},
	gmaxtartness: {
		name: "Corrosion G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, l’Esquive de chaque Pokémon du camp adverse baisse d’un niveau, même s’il est protégé par un clone.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : -1 en Esquive.",
	},
	gmaxterror: {
		name: "Hantise G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, chaque Pokémon du camp adverse ne peut plus être remplacé, même s’il est protégé par un clone. Ils peuvent tout de même être remplacés s’ils tiennent une Carapace Mue ou s’ils utilisent Relais, Eau Revoir, Dernier Mot, Téléport, Demi-Tour ou Change Éclair. L’effet prend fin si le lanceur ou la cible quitte le terrain.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : piégés.",
	},
	gmaxvinelash: {
		name: "Fouet G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, pendant 4 tours, chaque Pokémon du camp adverse qui n’est pas de type Plante subit des dégâts égaux à 1/6 de ses PV max, arrondi à l’inférieur, à la fin de chaque tour pendant l’effet, y compris le dernier tour.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : -1/6 des PV pendant 4 tours.",

		start: "  Des coups de fouet frappent {PARTY} !",
		damage: "  {POKEMON} subit des coups de Fouet G-Max !",
	},
	gmaxvolcalith: {
		name: "Téphra G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, pendant 4 tours, chaque Pokémon du camp adverse qui n’est pas de type Roche subit des dégâts égaux à 1/6 de ses PV max, arrondi à l’inférieur, à la fin de chaque tour pendant l’effet, y compris le dernier tour.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : -1/6 des PV pendant 4 tours.",

		start: "  Les rochers encerclent {PARTY} !",
		damage: "  {POKEMON} est blessé par les pierres éjectées par Téphra G-Max !",
	},
	gmaxvoltcrash: {
		name: "Foudre G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, chaque Pokémon du camp adverse est paralysé, même s’il est protégé par un clone.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : paralysés.",
	},
	gmaxwildfire: {
		name: "Fournaise G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, pendant 4 tours, chaque Pokémon du camp adverse qui n’est pas de type Feu subit des dégâts égaux à 1/6 de ses PV max, arrondi à l’inférieur, à la fin de chaque tour pendant l’effet, y compris le dernier tour.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : -1/6 des PV pendant 4 tours.",

		start: "  Les flammes encerclent {PARTY} !",
		damage: "  {POKEMON} est brûlé par les flammes de Fournaise G-Max !",
	},
	gmaxwindrage: {
		name: "Rafale G-Max",
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, les effets de Champ Électrifié, Champ Herbu, Champ Brumeux et Champ Psychique prennent fin, les effets de Protection, Mur Lumière, Voile Aurore, Rune Protect, Brume, Percée G-Max, Picots, Pics Toxik, Piège de Roc et Toile Gluante prennent fin dans le camp de la cible, et les effets de Percée G-Max, Picots, Pics Toxik, Piège de Roc et Toile Gluante prennent fin dans le camp du lanceur.",
		shortDesc: "Puissance selon la capacité de base. Retire le champ et les pièges.",
	},
	grassknot: {
		name: "Nœud Herbe",
		// Official flavor text: "L’ennemi est piégé dans de l’herbe qui le fait trébucher. Plus il est lourd, plus il subit de dégâts."
		desc: "La puissance de cette capacité est de 20 si la cible pèse moins de 10 kg, de 40 si elle pèse moins de 25 kg, de 60 si elle pèse moins de 50 kg, de 80 si elle pèse moins de 100 kg, de 100 si elle pèse moins de 200 kg, et de 120 si elle pèse 200 kg ou plus.",
		shortDesc: "Plus la cible est lourde, plus la puissance est élevée.",
	},
	grasspledge: {
		name: "Aire d’Herbe",
		// Official flavor text: "Une masse végétale s’abat sur l’ennemi. En l’utilisant avec Aire d’Eau, l’effet augmente et un marécage apparaît."
		desc: "Si l’un des alliés du lanceur a choisi d’utiliser Aire de Feu ou Aire d’Eau ce tour-ci et n’a pas encore agi, il agit immédiatement après le lanceur, et la capacité du lanceur n’a aucun effet. Combinée avec Aire de Feu, l’allié utilise Aire de Feu avec une puissance de 150 et une mer de feu apparaît du côté de la cible pendant 4 tours, infligeant aux Pokémon qui ne sont pas de type Feu des dégâts égaux à 1/8 de leurs PV max, arrondi à l’inférieur, à la fin de chaque tour pendant l’effet, y compris le dernier tour. Combinée avec Aire d’Eau, l’allié utilise Aire d’Herbe avec une puissance de 150 et un marécage apparaît du côté de la cible pendant 4 tours, ce qui divise par quatre la Vitesse de chaque Pokémon de ce camp. Utilisée comme capacité combinée, cette capacité bénéficie du bonus de même type (STAB) quel que soit le type du lanceur. Cette capacité ne consomme pas le Joyau Plante du lanceur.",
		shortDesc: "À combiner avec Aire de Feu ou Aire d’Eau pour un effet supplémentaire.",

		activate: "#waterpledge",
		start: "  {TEAM:capitalize} est cernée par un marécage !",
		end: "  Le marécage autour de {TEAM} a disparu !",
	},
	grasswhistle: {
		name: "Siffl’Herbe",
		shortDesc: "Endort la cible.",
	},
	grassyglide: {
		name: "Gliss’Herbe",
		// Official flavor text: "Le lanceur attaque l’ennemi en glissant sur le terrain. Frappe toujours en priorité si un Champ Herbu est actif."
		desc: "Si le terrain actuel est Champ Herbu et que le lanceur est au sol, la priorité de cette capacité augmente de 1.",
		shortDesc: "Lanceur sur Champ Herbu : priorité +1.",
	},
	grassyterrain: {
		name: "Champ Herbu",
		// Official flavor text: "Pendant cinq tours, les Pokémon au sol récupèrent quelques PV à chaque tour et la puissance des capacités de type Plante augmente."
		desc: "Pendant 5 tours, le terrain devient Champ Herbu. Pendant l’effet, la puissance des attaques de type Plante lancées par des Pokémon au sol est multipliée par 1,3, la puissance de Piétisol, Séisme et Ampleur utilisées contre des Pokémon au sol est multipliée par 0,5, et les Pokémon au sol récupèrent 1/16 de leurs PV max, arrondi à l’inférieur, à la fin de chaque tour, y compris le dernier tour. Camouflage donne au lanceur le type Plante, Force Nature devient Éco-Sphère et Force Cachée a 30 % de chances d’endormir. Échoue si le terrain actuel est déjà Champ Herbu.",
		shortDesc: "5 tours. Au sol : capacités Plante renforcées, +1/16 des PV max.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	gravapple: {
		name: "Force G",
		// Official flavor text: "Le lanceur attaque son adversaire avec une pomme qu’il fait tomber de très haut. Baisse la Défense de la cible."
		desc: "100 % de chances de baisser la Défense de la cible d’un niveau. La puissance est multipliée par 1,5 pendant l’effet de Gravité.",
		shortDesc: "Cible : 100 % de -1 Déf. Sous Gravité : puissance ×1,5.",
	},
	gravity: {
		name: "Gravité",
		// Official flavor text: "Pendant cinq tours, les Pokémon Vol ou qui ont Lévitation deviennent sensibles aux capacités Sol, et les capacités volantes deviennent inutilisables."
		desc: "Pendant 5 tours, l’Esquive de tous les Pokémon au combat est multipliée par 0,6. Au moment de l’utilisation, Rebond, Vol, Vol Magnétik, Chute Libre et Lévikinésie prennent fin immédiatement pour tous les Pokémon au combat. Pendant l’effet, aucun Pokémon au combat ne peut utiliser Rebond, Vol, Flying Press, Pied Voltige, Pied Sauté, Vol Magnétik, Chute Libre, Trempette ou Lévikinésie. Les attaques de type Sol, Picots, Pics Toxik, Toile Gluante et le talent Piège Sable peuvent affecter les Pokémon de type Vol ou ayant le talent Lévitation. Échoue si cette capacité est déjà active.",
		shortDesc: "5 tours : plus d’immunité au type Sol, Précision ×1,67.",
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
	},
	growl: {
		name: "Rugissement",
		// Official flavor text: "Le lanceur pousse un cri tout mimi pour tromper la vigilance de l’ennemi et baisser son Attaque."
		desc: "Baisse l’Attaque de la cible d’un niveau.",
		shortDesc: "Baisse l’Attaque des adversaires d’un niveau.",
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	growth: {
		name: "Croissance",
		// Official flavor text: "Le corps du lanceur se développe. Augmente l’Attaque et l’Attaque Spéciale."
		desc: "Augmente l’Attaque et l’Attaque Spéciale du lanceur d’un niveau. Si la météo est Soleil ou Soleil intense, cette capacité augmente l’Attaque et l’Attaque Spéciale du lanceur de deux niveaux. Si le lanceur tient un Parapluie Solide, cette capacité n’augmente l’Attaque et l’Attaque Spéciale du lanceur que d’un niveau, même si la météo est Soleil ou Soleil intense.",
		shortDesc: "Augmente l’Attaque et l’Atq Spé du lanceur d’un niveau ; de 2 au Soleil.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	grudge: {
		name: "Rancune",
		// Official flavor text: "Si le lanceur est mis K.O., sa rancune épuise les PP de la capacité utilisée par l’ennemi pour le mettre K.O."
		desc: "Jusqu’au prochain tour du lanceur, si l’attaque d’un Pokémon adverse met le lanceur K.O., cette capacité perd tous ses PP restants.",
		shortDesc: "Si le lanceur est mis K.O., l’attaque utilisée perd tous ses PP.",

		activate: "  La capacité {MOVE} {POKEMON:de} perd ses PP à cause de Rancune !",
		start: "{POKEMON} veut que sa cible subisse sa rancune !",
	},
	guardianofalola: {
		name: "Colère du Gardien d’Alola",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Inflige à la cible des dégâts égaux à 3/4 de ses PV actuels, arrondi à l’inférieur, mais d’au moins 1 PV.",
		shortDesc: "Inflige des dégâts égaux à 3/4 des PV actuels de la cible.",
	},
	guardsplit: {
		name: "Partage Garde",
		// Official flavor text: "Additionne la Défense et la Défense Spéciale du lanceur et de sa cible et les redistribue équitablement entre les deux."
		desc: "La Défense et la Défense Spéciale du lanceur et de la cible deviennent respectivement égales à la moyenne de la Défense et de la Défense Spéciale du lanceur et de la cible, arrondie à l’inférieur. Les modifications de niveaux de stats ne sont pas affectées.",
		shortDesc: "Fait la moyenne de la Défense et de la Déf Spé avec la cible.",

		activate: "  {POKEMON} additionne sa garde à celle de sa cible et redistribue le tout équitablement !",
	},
	guardswap: {
		name: "Permugarde",
		// Official flavor text: "Pouvoir qui échange les modifications de la Défense Spéciale et de la Défense avec la cible."
		desc: "Le lanceur échange ses modifications de niveaux de Défense et de Défense Spéciale avec la cible.",
		shortDesc: "Échange les modifications de Défense et de Déf Spé avec la cible.",
	},
	guillotine: {
		name: "Guillotine",
		// Official flavor text: "Des pinces lacèrent violemment l’ennemi, le mettant K.O. sur le coup s’il est touché."
		desc: "Inflige à la cible des dégâts égaux à ses PV max. Ignore les modificateurs de Précision et d’Esquive. La Précision de cette attaque est égale à (niveau du lanceur - niveau de la cible + 30) %, et elle échoue si la cible est d’un niveau supérieur. Les Pokémon ayant le talent Fermeté y sont immunisés.",
		shortDesc: "Met la cible K.O. en un coup. Échoue si le lanceur a un niveau inférieur.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	gunkshot: {
		name: "Détricanon",
		// Official flavor text: "Le lanceur envoie des détritus sur l’ennemi. Peut aussi l’empoisonner."
		desc: "30 % de chances d’empoisonner la cible.",
		shortDesc: "30 % de chances d’empoisonner la cible.",
	},
	gust: {
		name: "Tornade",
		// Official flavor text: "Le lanceur bat des ailes pour générer une bourrasque qui blesse l’ennemi."
		desc: "La puissance double si la cible utilise Rebond, Vol ou Chute Libre, ou si elle est sous l’effet de Chute Libre.",
		shortDesc: "La puissance double pendant Rebond, Vol et Chute Libre.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	gyroball: {
		name: "Gyroballe",
		// Official flavor text: "Le lanceur effectue une rotation et frappe l’ennemi. Plus la Vitesse du lanceur est basse, plus il inflige de dégâts."
		desc: "La puissance est égale à (25 × Vitesse actuelle de la cible / Vitesse actuelle du lanceur) + 1, arrondi à l’inférieur, sans dépasser 150. Si la Vitesse actuelle du lanceur est de 0, la puissance de cette capacité est de 1.",
		shortDesc: "Plus le lanceur est lent par rapport à la cible, plus la puissance est élevée.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	hail: {
		name: "Grêle",
		// Official flavor text: "Invoque une tempête de grêle qui dure cinq tours. Blesse tous les Pokémon, sauf ceux de type Glace."
		desc: "Pendant 5 tours, la météo devient Grêle. À la fin de chaque tour sauf le dernier, tous les Pokémon au combat perdent 1/16 de leurs PV max, arrondi à l’inférieur, sauf s’ils sont de type Glace ou ont le talent Corps Gel, Garde Magik, Envelocape ou Rideau Neige. Dure 8 tours si le lanceur tient une Roche Glace. Échoue si la météo actuelle est Grêle.",
		shortDesc: "Pendant 5 tours, la grêle s’abat sur le terrain.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	hammerarm: {
		name: "Marto-Poing",
		// Official flavor text: "Le lanceur donne un puissant coup de poing à l’ennemi. Réduit la Vitesse du lanceur."
		desc: "Baisse la Vitesse du lanceur d’un niveau.",
		shortDesc: "Baisse la Vitesse du lanceur d’un niveau.",
	},
	happyhour: {
		name: "Étrennes",
		shortDesc: "Aucune utilité en combat compétitif.",

		activate: "  L’ambiance est euphorique !",
	},
	harden: {
		name: "Armure",
		// Official flavor text: "Le lanceur contracte tous ses muscles pour augmenter sa Défense."
		desc: "Augmente la Défense du lanceur d’un niveau.",
		shortDesc: "Augmente la Défense du lanceur d’un niveau.",
	},
	hardpress: {
		name: "Pression Extrême",
		// Official flavor text: "Le lanceur écrase la cible avec ses bras ou ses pinces. Plus il reste de PV à la cible, plus la puissance de la capacité augmente."
		desc: "La puissance est égale à 100 × (PV actuels de la cible / PV max de la cible), arrondi à l’entier le plus proche (0,5 vers le bas), mais d’au moins 1.",
		shortDesc: "Plus la cible a de PV restants, plus la puissance est élevée.",
	},
	haze: {
		name: "Buée Noire",
		// Official flavor text: "Crée un brouillard qui annule les changements de stats de tous les Pokémon au combat."
		desc: "Réinitialise à 0 les niveaux de stats de tous les Pokémon au combat.",
		shortDesc: "Annule toutes les modifications de stats.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		// Only used in Gen 1
		activate: "  Tout effet est annulé!",
	},
	headbutt: {
		name: "Coup d’Boule",
		// Official flavor text: "Le lanceur donne un coup de tête. Peut apeurer l’ennemi."
		desc: "30 % de chances d’apeurer la cible.",
		shortDesc: "30 % de chances d’apeurer la cible.",
	},
	headcharge: {
		name: "Peignée",
		// Official flavor text: "Le lanceur donne un coup avec sa tête couronnée d’une fière crinière. Blesse aussi légèrement le lanceur."
		desc: "Si la cible a perdu des PV, le lanceur subit des dégâts de recul égaux à 1/4 des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut), mais d’au moins 1 PV.",
		shortDesc: "Dégâts de recul de 1/4.",
	},
	headlongrush: {
		name: "Assaut Frontal",
		// Official flavor text: "Le lanceur charge la cible de toutes ses forces, ce qui baisse la Défense et la Défense Spéciale du lanceur."
		desc: "Baisse la Défense et la Défense Spéciale du lanceur d’un niveau.",
		shortDesc: "Baisse la Défense et la Déf Spé du lanceur d’un niveau.",
	},
	headsmash: {
		name: "Fracass’Tête",
		// Official flavor text: "Le lanceur assène un coup de tête désespéré. Blesse aussi gravement le lanceur."
		desc: "Si la cible a perdu des PV, le lanceur subit des dégâts de recul égaux à 1/2 des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut), mais d’au moins 1 PV.",
		shortDesc: "Dégâts de recul de 1/2.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	healbell: {
		name: "Glas de Soin",
		// Official flavor text: "Carillon apaisant qui soigne les altérations de statut de tous les Pokémon de l’équipe."
		desc: "Soigne l’altération de statut non volatile de chaque Pokémon de l’équipe du lanceur. Les Pokémon au combat ayant le talent Anti-Bruit ne sont pas soignés, sauf s’il s’agit du lanceur.",
		shortDesc: "Soigne toutes les altérations de statut de l’équipe du lanceur.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  Un grelot sonne !",
	},
	healblock: {
		name: "Anti-Soin",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Pendant 5 tours, la cible ne peut récupérer aucun PV tant qu’elle reste au combat. Pendant l’effet, les capacités de soin et d’absorption sont inutilisables, et les talents et objets qui soignent ne la soignent pas. Si un Pokémon affecté utilise Relais, son remplaçant reste incapable de récupérer des PV. Balance et le talent Régé-Force ne sont pas affectés.",
		shortDesc: "Pendant 5 tours, empêche le ou les adversaires de se soigner.",
		gen8: {
			end: "  {POKEMON} peut à nouveau guérir !",
			cant: "{POKEMON} ne peut pas utiliser la capacité {MOVE} à cause d’Anti-Soin !",
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

		start: "  {POKEMON} ne peut pas guérir !",
		end: "  Le blocage de soins qui affectait {POKEMON} s’est dissipé !",
		cant: "{POKEMON} ne peut pas utiliser la capacité {MOVE} à cause du blocage de soins qui l’affecte !",
		fail: "  Mais cela échoue sur {POKEMON} !",
	},
	healingwish: {
		name: "Vœu Soin",
		// Official flavor text: "Le lanceur tombe K.O. pour soigner les PV et le statut du Pokémon qui passe après lui."
		desc: "Le lanceur est mis K.O., et si le Pokémon envoyé pour le remplacer n’a pas tous ses PV ou a une altération de statut non volatile, il récupère tous ses PV et son altération de statut non volatile est soignée. Le remplaçant est envoyé à la fin du tour, et le soin a lieu avant que les pièges ne fassent effet. Cet effet persiste jusqu’à ce qu’un Pokémon remplissant l’une de ces conditions entre au combat à la position du lanceur ou y soit déplacé avec Interversion. Échoue si le lanceur est le dernier Pokémon non K.O. de son équipe.",
		shortDesc: "Le lanceur est K.O. Le prochain Pokémon blessé est entièrement soigné.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		heal: "  Le Vœu Soin est exaucé et profite à {POKEMON} !",
	},
	healorder: {
		name: "Appel Soins",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Le lanceur récupère 1/2 de ses PV max, arrondi à l’entier le plus proche (0,5 vers le haut).",
		shortDesc: "Soigne le lanceur de 50 % de ses PV max.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	healpulse: {
		name: "Vibra Soin",
		// Official flavor text: "Une aura de bien-être fait récupérer la moitié de ses PV max à la cible."
		desc: "La cible récupère 1/2 de ses PV max, arrondi à l’entier le plus proche (0,5 vers le haut). Si le lanceur a le talent Méga Blaster, la cible récupère à la place 3/4 de ses PV max, arrondi à l’entier le plus proche (0,5 vers le bas).",
		shortDesc: "Soigne la cible de 50 % de ses PV max.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	heartstamp: {
		name: "Crève-Cœur",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "30 % de chances d’apeurer la cible.",
		shortDesc: "30 % de chances d’apeurer la cible.",
	},
	heartswap: {
		name: "Permucœur",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Le lanceur échange toutes ses modifications de niveaux de stats avec la cible.",
		shortDesc: "Échange toutes les modifications de stats avec la cible.",
	},
	heatcrash: {
		name: "Tacle Feu",
		// Official flavor text: "Le lanceur projette son corps enflammé contre l’ennemi. S’il est plus lourd que l’ennemi, l’effet augmente en conséquence."
		desc: "La puissance de cette capacité dépend de (poids du lanceur / poids de la cible), arrondi à l’inférieur. La puissance est de 120 si le résultat est de 5 ou plus, de 100 s’il est de 4, de 80 s’il est de 3, de 60 s’il est de 2, et de 40 s’il est de 1 ou moins. Les dégâts doublent et la capacité ne peut pas rater si la cible a utilisé Lilliput depuis son entrée au combat.",
		shortDesc: "Plus le lanceur est lourd par rapport à la cible, plus la puissance est élevée.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	heatwave: {
		name: "Canicule",
		// Official flavor text: "Le lanceur provoque une vague de chaleur. Peut aussi brûler l’ennemi."
		desc: "10 % de chances de brûler la cible.",
		shortDesc: "10 % de chances de brûler le ou les adversaires.",
	},
	heavyslam: {
		name: "Tacle Lourd",
		// Official flavor text: "Le lanceur se jette sur l’ennemi de tout son poids. S’il est plus lourd que l’ennemi, l’effet augmente en conséquence."
		desc: "La puissance de cette capacité dépend de (poids du lanceur / poids de la cible), arrondi à l’inférieur. La puissance est de 120 si le résultat est de 5 ou plus, de 100 s’il est de 4, de 80 s’il est de 3, de 60 s’il est de 2, et de 40 s’il est de 1 ou moins. Les dégâts doublent et la capacité ne peut pas rater si la cible a utilisé Lilliput depuis son entrée au combat.",
		shortDesc: "Plus le lanceur est lourd par rapport à la cible, plus la puissance est élevée.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	helpinghand: {
		name: "Coup d’Main",
		// Official flavor text: "Une capacité qui augmente la puissance d’attaque d’un allié."
		desc: "La puissance de l’attaque de la cible ce tour-ci est multipliée par 1,5 (cet effet est cumulable). Échoue s’il n’y a aucun allié adjacent au lanceur ou si l’allié a déjà agi ce tour-ci, mais n’échoue pas si l’allié utilise une capacité en deux tours.",
		shortDesc: "La capacité d’un allié adjacent a une puissance ×1,5 ce tour-ci.",

		start: "  {SOURCE} est prêt à aider {POKEMON} !",
	},
	hex: {
		name: "Châtiment",
		// Official flavor text: "Attaque acharnée qui cause davantage de dégâts à l’ennemi s’il a un problème de statut."
		desc: "La puissance double si la cible a une altération de statut non volatile.",
		shortDesc: "La puissance double si la cible a une altération de statut.",
	},
	hiddenpower: {
		name: "Puissance Cachée",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Le type de cette capacité dépend des valeurs individuelles (IV) du lanceur, et peut être n’importe quel type sauf Fée et Normal.",
		shortDesc: "Le type varie selon les IV du lanceur.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	hiddenpowerbug: {
		name: "Puissance Cachée Insecte",
	},
	hiddenpowerdark: {
		name: "Puissance Cachée Ténèbres",
	},
	hiddenpowerdragon: {
		name: "Puissance Cachée Dragon",
	},
	hiddenpowerelectric: {
		name: "Puissance Cachée Électrik",
	},
	hiddenpowerfighting: {
		name: "Puissance Cachée Combat",
	},
	hiddenpowerfire: {
		name: "Puissance Cachée Feu",
	},
	hiddenpowerflying: {
		name: "Puissance Cachée Vol",
	},
	hiddenpowerghost: {
		name: "Puissance Cachée Spectre",
	},
	hiddenpowergrass: {
		name: "Puissance Cachée Plante",
	},
	hiddenpowerground: {
		name: "Puissance Cachée Sol",
	},
	hiddenpowerice: {
		name: "Puissance Cachée Glace",
	},
	hiddenpowerpoison: {
		name: "Puissance Cachée Poison",
	},
	hiddenpowerpsychic: {
		name: "Puissance Cachée Psy",
	},
	hiddenpowerrock: {
		name: "Puissance Cachée Roche",
	},
	hiddenpowersteel: {
		name: "Puissance Cachée Acier",
	},
	hiddenpowerwater: {
		name: "Puissance Cachée Eau",
	},
	highhorsepower: {
		name: "Cavalerie Lourde",
		shortDesc: "Aucun effet supplémentaire.",
	},
	highjumpkick: {
		name: "Pied Voltige",
		// Official flavor text: "Le lanceur s’élance pour effectuer un coup de genou sauté. S’il échoue, le lanceur se blesse."
		desc: "Si cette attaque échoue, le lanceur perd la moitié de ses PV max, arrondi à l’inférieur, en dégâts de chute. Les Pokémon ayant le talent Garde Magik ne subissent pas de dégâts de chute.",
		shortDesc: "Le lanceur perd 50 % de ses PV max s’il rate.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		damage: "#crash",
	},
	holdback: {
		name: "Retenue",
		// Official flavor text: "Le lanceur attaque avec retenue, et laisse au moins 1 PV à l’ennemi."
		desc: "Laisse au moins 1 PV à la cible.",
		shortDesc: "Laisse toujours au moins 1 PV à la cible.",
	},
	holdhands: {
		name: "Mains Jointes",
		// Official flavor text: "Le lanceur et un allié se prennent la main, ce qui les rend heureux."
		desc: "Aucune utilité en combat compétitif. Échoue s’il n’y a aucun allié adjacent au lanceur.",
		shortDesc: "Aucune utilité en combat compétitif.",
	},
	honeclaws: {
		name: "Aiguisage",
		// Official flavor text: "Le lanceur s’aiguise les griffes. Augmente l’Attaque et la Précision."
		desc: "Augmente l’Attaque et la Précision du lanceur d’un niveau.",
		shortDesc: "Augmente l’Attaque et la Précision du lanceur d’un niveau.",
	},
	hornattack: {
		name: "Koud’Korne",
		shortDesc: "Aucun effet supplémentaire.",
	},
	horndrill: {
		name: "Empal’Korne",
		// Official flavor text: "Un coup de corne en vrille qui empale l’ennemi, le mettant K.O. sur le coup s’il est touché."
		desc: "Inflige à la cible des dégâts égaux à ses PV max. Ignore les modificateurs de Précision et d’Esquive. La Précision de cette attaque est égale à (niveau du lanceur - niveau de la cible + 30) %, et elle échoue si la cible est d’un niveau supérieur. Les Pokémon ayant le talent Fermeté y sont immunisés.",
		shortDesc: "Met la cible K.O. en un coup. Échoue si le lanceur a un niveau inférieur.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	hornleech: {
		name: "Encornebois",
		// Official flavor text: "Un coup de corne qui draine l’énergie de l’ennemi. Convertit la moitié des dégâts infligés en PV pour le lanceur."
		desc: "Le lanceur récupère 1/2 des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut). Si le lanceur tient une Grosse Racine, les PV récupérés sont multipliés par 1,3, arrondi à l’entier le plus proche (0,5 vers le bas).",
		shortDesc: "Le lanceur récupère 50 % des dégâts infligés.",
	},
	howl: {
		name: "Grondement",
		// Official flavor text: "Le lanceur grogne pour se rassurer, ce qui augmente son Attaque et celle de ses alliés."
		desc: "Augmente l’Attaque du lanceur et de tous ses alliés d’un niveau.",
		shortDesc: "Augmente l’Attaque du lanceur et de son allié d’un niveau.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	hurricane: {
		name: "Vent Violent",
		// Official flavor text: "Le lanceur déclenche une tempête de vents violents qui s’abat sur l’ennemi. Peut aussi le rendre confus."
		desc: "30 % de chances de rendre la cible confuse. Cette capacité peut toucher une cible qui utilise Rebond, Vol ou Chute Libre, ou qui est sous l’effet de Chute Libre. Si la météo est Pluie battante ou Pluie, cette capacité ne peut pas rater. Si la météo est Soleil intense ou Soleil, la Précision de cette capacité est de 50 %. Si cette capacité est utilisée contre un Pokémon qui tient un Parapluie Solide, sa Précision reste de 70 %.",
		shortDesc: "30 % de chances de rendre la cible confuse. Ne rate pas sous la Pluie.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	hydrocannon: {
		name: "Hydroblast",
		// Official flavor text: "Une trombe d’eau heurte l’ennemi. Le lanceur doit se reposer au tour suivant."
		desc: "Si cette capacité réussit, le lanceur doit se recharger au tour suivant et ne peut pas choisir de capacité.",
		shortDesc: "Le lanceur ne peut pas agir au tour suivant.",
	},
	hydropump: {
		name: "Hydrocanon",
		shortDesc: "Aucun effet supplémentaire.",
	},
	hydrosteam: {
		name: "Hydrovapeur",
		// Official flavor text: "Le lanceur asperge la cible avec un puissant jet d'eau bouillante. Quand le soleil brille, la puissance de cette capacité augmente de 50 % au lieu de baisser."
		desc: "Si la météo actuelle est Soleil et que le lanceur ne tient pas de Parapluie Solide, les dégâts de cette capacité sont multipliés par 1,5 au lieu d’être divisés par deux en raison de son type Eau.",
		shortDesc: "Au Soleil : dégâts ×1,5 au lieu d’être divisés par deux.",
	},
	hydrovortex: {
		name: "Super Tourbillon Abyssal",
		shortDesc: "La puissance est égale à la puissance Z de la capacité de base.",
	},
	hyperbeam: {
		name: "Ultralaser",
		// Official flavor text: "Projette un puissant rayon sur l’ennemi. Le lanceur doit se reposer au tour suivant."
		desc: "Si cette capacité réussit, le lanceur doit se recharger au tour suivant et ne peut pas choisir de capacité.",
		shortDesc: "Le lanceur ne peut pas agir au tour suivant.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	hyperdrill: {
		name: "Hyperceuse",
		shortDesc: "Passe outre les protections sans les briser.",
	},
	hyperfang: {
		name: "Croc de Mort",
		// Official flavor text: "Le lanceur mord l’ennemi à l’aide de ses incisives aiguisées. Peut aussi l’apeurer."
		desc: "10 % de chances d’apeurer la cible.",
		shortDesc: "10 % de chances d’apeurer la cible.",
	},
	hyperspacefury: {
		name: "Furie Dimension",
		// Official flavor text: "Le Pokémon utilise sa multitude de bras pour infliger une nuée de coups qui ignorent les capacités telles qu’Abri ou Détection. Baisse la Défense du lanceur."
		desc: "Baisse la Défense du lanceur d’un niveau. Cette capacité ne peut être utilisée avec succès que si la forme actuelle du lanceur, en tenant compte de Morphing, est Hoopa Déchaîné. Si cette capacité réussit, elle perce la protection Blockhaus, Détection, Bouclier Royal, Abri ou Pico-Défense de la cible pour ce tour, ce qui permet aux autres Pokémon d’attaquer la cible normalement. Si le camp de la cible est protégé par Vigilance, Tatamigaeshi, Prévention ou Garde Large, cette protection est également brisée pour ce tour et les autres Pokémon peuvent attaquer le camp de la cible normalement.",
		shortDesc: "Hoopa Déchaîné : -1 Déf au lanceur ; perce les protections.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "#shadowforce",
		fail: "#darkvoid",
	},
	hyperspacehole: {
		name: "TrouDimensionnel",
		// Official flavor text: "Crée une faille dimensionnelle pour attaquer soudainement l’ennemi de côté. Ignore même les capacités comme Abri ou Détection."
		desc: "Si cette capacité réussit, elle perce la protection Blockhaus, Détection, Bouclier Royal, Abri ou Pico-Défense de la cible pour ce tour, ce qui permet aux autres Pokémon d’attaquer la cible normalement. Si le camp de la cible est protégé par Vigilance, Tatamigaeshi, Prévention ou Garde Large, cette protection est également brisée pour ce tour et les autres Pokémon peuvent attaquer le camp de la cible normalement.",
		shortDesc: "Perce la protection de la cible pour ce tour.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "#shadowforce",
	},
	hypervoice: {
		name: "Mégaphone",
		// Official flavor text: "Le lanceur pousse un cri dont l’écho terrifiant a le pouvoir d’infliger des dégâts à l’ennemi."
		desc: "Aucun effet supplémentaire.",
		shortDesc: "Aucun effet supplémentaire. Touche les adversaires adjacents.",
	},
	hypnosis: {
		name: "Hypnose",
		shortDesc: "Endort la cible.",
	},
	iceball: {
		name: "Ball’Glace",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Si cette capacité réussit, le lanceur est bloqué sur cette capacité et ne peut pas en utiliser une autre jusqu’à ce qu’elle rate, que 5 tours se soient écoulés ou que l’attaque ne puisse plus être utilisée. La puissance double à chaque coup réussi de cette capacité, et double encore si le lanceur a utilisé Boul’Armure auparavant. Si cette capacité est appelée par Blabla Dodo, elle n’est utilisée que pendant un tour.",
		shortDesc: "La puissance double à chaque coup. Se répète pendant 5 tours.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	icebeam: {
		name: "Laser Glace",
		// Official flavor text: "Un rayon de glace frappe l’ennemi. Peut aussi le geler."
		desc: "10 % de chances de geler la cible.",
		shortDesc: "10 % de chances de geler la cible.",
	},
	iceburn: {
		name: "Feu Glacé",
		// Official flavor text: "Au second tour, le lanceur projette un souffle de vent glacial dévastateur sur l’ennemi. Peut aussi le brûler."
		desc: "30 % de chances de brûler la cible. Cette attaque se charge au premier tour et s’exécute au second. Si le lanceur tient une Herbe Pouvoir, la capacité s’exécute en un seul tour.",
		shortDesc: "Charge au tour 1. Frappe au tour 2. 30 % de brûlure.",

		prepare: "  {POKEMON} est entouré d’un air glacial !",
	},
	icefang: {
		name: "Crocs Givre",
		// Official flavor text: "Le lanceur utilise une morsure glaciale. Peut aussi geler ou apeurer l’ennemi."
		desc: "10 % de chances de geler la cible et 10 % de chances de l’apeurer.",
		shortDesc: "10 % de chances de geler. 10 % de chances d’apeurer.",
	},
	icehammer: {
		name: "Marteau de Glace",
		// Official flavor text: "Le lanceur donne un puissant coup de poing à l’ennemi. Réduit la Vitesse du lanceur."
		desc: "Baisse la Vitesse du lanceur d’un niveau.",
		shortDesc: "Baisse la Vitesse du lanceur d’un niveau.",
	},
	icepunch: {
		name: "Poing Glace",
		// Official flavor text: "Un coup de poing glacé vient frapper l’ennemi. Peut le geler."
		desc: "10 % de chances de geler la cible.",
		shortDesc: "10 % de chances de geler la cible.",
	},
	iceshard: {
		name: "Éclats Glace",
		// Official flavor text: "Le lanceur crée des éclats de glace qu’il envoie sur l’ennemi. Frappe en priorité."
		desc: "Aucun effet supplémentaire.",
		shortDesc: "Frappe généralement en premier.",
	},
	icespinner: {
		name: "Cryo-Pirouette",
		// Official flavor text: "Le lanceur enveloppe ses jambes d'une fine couche de glace et heurte la cible en tournant sur lui-même. Ses rotations détruisent le champ actif sur le terrain."
		desc: "Met fin aux effets de Champ Électrifié, Champ Herbu, Champ Brumeux et Champ Psychique.",
		shortDesc: "Met fin aux effets du champ.",
	},
	iciclecrash: {
		name: "Chute Glace",
		// Official flavor text: "Envoie de gros blocs de glace sur l’ennemi pour lui infliger des dégâts. Peut aussi l’apeurer."
		desc: "30 % de chances d’apeurer la cible.",
		shortDesc: "30 % de chances d’apeurer la cible.",
	},
	iciclespear: {
		name: "Stalactite",
		// Official flavor text: "Le lanceur jette des pics de glace sur l’ennemi, de deux à cinq fois de suite."
		desc: "Frappe de deux à cinq fois. 35 % de chances de frapper deux ou trois fois et 15 % de chances de frapper quatre ou cinq fois. Si l’un des coups détruit le clone de la cible, celle-ci subit les dégâts des coups restants. Si le lanceur a le talent Multi-Coups, cette capacité frappe toujours cinq fois. Si le lanceur tient un Dé Pipé, cette capacité frappe de 4 à 5 fois.",
		shortDesc: "Frappe de 2 à 5 fois en un tour.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	icywind: {
		name: "Vent Glace",
		// Official flavor text: "Une bourrasque de vent froid blesse l’ennemi. Réduit aussi sa Vitesse."
		desc: "100 % de chances de baisser la Vitesse de la cible d’un niveau.",
		shortDesc: "100 % de chances de baisser la Vitesse des adversaires d’un niveau.",
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	imprison: {
		name: "Possessif",
		// Official flavor text: "Si l’ennemi et le lanceur ont des capacités en commun, l’ennemi ne pourra pas les utiliser."
		desc: "Tant que le lanceur reste au combat, il empêche tous les Pokémon adverses d’utiliser les capacités qu’il connaît également.",
		shortDesc: "Aucun adversaire ne peut utiliser une capacité connue du lanceur.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} empêche sa cible d’utiliser les capacités qu’ils ont en commun !",
		cant: "{POKEMON} ne peut pas utiliser la capacité bloquée {MOVE} !",
	},
	incinerate: {
		name: "Calcination",
		// Official flavor text: "Des flammes calcinent l’ennemi. S’il tient un objet, une Baie par exemple, celui-ci est brûlé et devient inutilisable."
		desc: "La cible perd son objet tenu s’il s’agit d’une Baie ou d’un Joyau. Cette capacité ne peut pas faire perdre leur objet aux Pokémon ayant le talent Glu. Les objets perdus à cause de cette capacité ne peuvent pas être récupérés avec Recyclage ou le talent Récolte.",
		shortDesc: "Détruit la Baie ou le Joyau du ou des adversaires.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		removeItem: "  {ITEM:definite:capitalize} {POKEMON:de} {INFLECT:ITEM:ms=est détruit:fs=est détruite:mp=sont détruits:fp=sont détruites} par le feu !",
	},
	infernalparade: {
		name: "Cortège Funèbre",
		// Official flavor text: "Une multitude de boules de feu frappent la cible, ce qui peut aussi la brûler. La puissance est doublée si celle-ci souffre d'une altération de statut."
		desc: "30 % de chances de brûler la cible. La puissance double si la cible a une altération de statut non volatile.",
		shortDesc: "30 % de brûlure. Puissance ×2 si la cible a déjà un statut.",
	},
	inferno: {
		name: "Feu d’Enfer",
		// Official flavor text: "L’ennemi est entouré d’un torrent de flammes ardentes qui le brûlent."
		desc: "100 % de chances de brûler la cible.",
		shortDesc: "100 % de chances de brûler la cible.",
	},
	infernooverdrive: {
		name: "Pyro-Explosion Cataclysmique",
		shortDesc: "La puissance est égale à la puissance Z de la capacité de base.",
	},
	infestation: {
		name: "Harcèlement",
		// Official flavor text: "Cette attaque perdure pendant quatre à cinq tours. L’ennemi ne peut pas fuir au cours de cette période."
		desc: "Empêche la cible d’être remplacée pendant quatre ou cinq tours (sept tours si le lanceur tient une Accro Griffe). Inflige à la cible des dégâts égaux à 1/8 de ses PV max (1/6 si le lanceur tient une Bande Étreinte), arrondi à l’inférieur, à la fin de chaque tour pendant l’effet. La cible peut tout de même être remplacée si elle tient une Carapace Mue ou si elle utilise Relais, Eau Revoir, Dernier Mot, Queulonage, Téléport, Demi-Tour ou Change Éclair. L’effet prend fin si le lanceur ou la cible quitte le terrain, ou si la cible utilise avec succès Toupie Éclat, Tour Rapide ou Clonage. Cet effet ne se cumule pas et n’est pas réinitialisé par l’utilisation de cette capacité ou d’une autre capacité de piège.",
		shortDesc: "Piège et blesse la cible pendant 4 à 5 tours.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} est harcelé par {SOURCE} !",
	},
	ingrain: {
		name: "Racines",
		// Official flavor text: "Le lanceur plante ses racines et récupère des PV à chaque tour. Une fois enraciné, il ne peut plus fuir."
		desc: "Le lanceur récupère 1/16 de ses PV max à la fin de chaque tour, mais il ne peut plus être remplacé et les autres Pokémon ne peuvent pas le forcer à se retirer. Le lanceur peut tout de même être remplacé s’il utilise Relais, Eau Revoir, Dernier Mot, Téléport, Demi-Tour ou Change Éclair. Si le lanceur quitte le terrain avec Relais, son remplaçant reste piégé et bénéficie toujours de l’effet de soin. Pendant l’effet, le lanceur peut être touché normalement par les attaques de type Sol et être affecté par Picots, Pics Toxik et Toile Gluante, même s’il est de type Vol ou a le talent Lévitation.",
		shortDesc: "Piège le lanceur et le cloue au sol ; soigne 1/16 des PV max par tour.",
		gen7: {
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
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} plante ses racines !",
		block: "  {POKEMON} s’accroche avec ses racines !",
		heal: "  {POKEMON} absorbe des nutriments avec ses racines !",
	},
	instruct: {
		name: "Sommation",
		// Official flavor text: "Force la cible à lancer immédiatement la dernière capacité qu’elle a utilisée."
		desc: "La cible utilise immédiatement la dernière capacité qu’elle a utilisée. Échoue si la cible n’a pas encore agi, si la capacité n’a plus de PP, si la cible se prépare à utiliser Bec-Canon, Mitra-Poing ou Carapiège, ou si la capacité est Assistance, Bec-Canon, Éructation, Patience, Crash Brûlant, Célébration, Babil, Crash Musclé, Photocopie, Canon Dynamax, Mitra-Poing, Mains Jointes, Ball’Glace, Sommation, Bouclier Royal, Crash Magique, Moi d’Abord, Métronome, Copie, Mimique, Force Nature, Crash Toxique, Blocage, Colère, Danse Fleurs, Roulade, Carapiège, Gribouille, Blabla Dodo, Lutte, Mania, Morphing, Brouhaha, Crash Obscur, une capacité en deux tours ou une capacité nécessitant une recharge.",
		shortDesc: "La cible utilise immédiatement sa dernière capacité.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  {TARGET} obéit à la sommation {POKEMON:de} !",
	},
	iondeluge: {
		name: "Déluge Plasmique",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Les capacités de type Normal deviennent de type Électrik ce tour-ci. Cet effet s’applique après les autres effets qui modifient le type d’une capacité.",
		shortDesc: "Les capacités Normal deviennent de type Électrik ce tour-ci.",

		activate: "  Un déluge de plasma s’abat sur le terrain !",
	},
	irondefense: {
		name: "Mur de Fer",
		// Official flavor text: "L’épiderme du lanceur devient dur comme du fer, ce qui augmente beaucoup sa Défense."
		desc: "Augmente la Défense du lanceur de deux niveaux.",
		shortDesc: "Augmente la Défense du lanceur de 2 niveaux.",
	},
	ironhead: {
		name: "Tête de Fer",
		// Official flavor text: "Le lanceur heurte l’ennemi avec sa tête dure comme de l’acier. Peut aussi l’apeurer."
		desc: "30 % de chances d’apeurer la cible.",
		shortDesc: "30 % de chances d’apeurer la cible.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	irontail: {
		name: "Queue de Fer",
		// Official flavor text: "Attaque l’ennemi avec une queue de fer. Peut aussi baisser sa Défense."
		desc: "30 % de chances de baisser la Défense de la cible d’un niveau.",
		shortDesc: "30 % de chances de baisser la Défense de la cible d’un niveau.",
	},
	ivycudgel: {
		name: "Massue Liane",
		// Official flavor text: "Le lanceur frappe avec un gourdin enveloppé de lierre. Le type de cette capacité change selon le masque porté par le lanceur, et a un taux de critiques élevé."
		desc: "A plus de chances d’infliger un coup critique. Si le lanceur est un Ogerpon, le type de cette capacité change selon sa forme : type Eau avec le Masque du Puits, type Feu avec le Masque du Fourneau et type Roche avec le Masque de la Pierre.",
		shortDesc: "Taux de critique élevé. Le type dépend de la forme du lanceur.",
	},
	jawlock: {
		name: "Croque Fort",
		// Official flavor text: "Le lanceur et sa cible ne peuvent plus quitter le terrain jusqu’à ce que l’un d’entre eux tombe K.O. L’effet est annulé si l’un des deux Pokémon disparaît."
		desc: "Empêche le lanceur et la cible d’être remplacés. Le lanceur et la cible peuvent tout de même être remplacés si l’un d’eux tient une Carapace Mue ou utilise Relais, Eau Revoir, Dernier Mot, Téléport, Demi-Tour ou Change Éclair. L’effet prend fin si le lanceur ou la cible quitte le terrain.",
		shortDesc: "Empêche le lanceur et la cible d’être remplacés.",
	},
	jetpunch: {
		name: "Poing Sonique",
		// Official flavor text: "Le lanceur enveloppe son poing d'un torrent furieux et attaque si rapidement qu'on peine à le discerner. Frappe en priorité."
		desc: "Aucun effet supplémentaire.",
		shortDesc: "Frappe généralement en premier.",
	},
	judgment: {
		name: "Jugement",
		// Official flavor text: "Le lanceur libère une myriade de rayons de lumière. Le type varie selon la Plaque que tient le lanceur."
		desc: "Le type de cette capacité dépend de la Plaque tenue par le lanceur.",
		shortDesc: "Le type varie selon la Plaque tenue.",
	},
	jumpkick: {
		name: "Pied Sauté",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Si cette attaque échoue, le lanceur perd la moitié de ses PV max, arrondi à l’inférieur, en dégâts de chute. Les Pokémon ayant le talent Garde Magik ne subissent pas de dégâts de chute.",
		shortDesc: "Le lanceur perd 50 % de ses PV max s’il rate.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		damage: "#crash",
	},
	junglehealing: {
		name: "Selve Salvatrice",
		// Official flavor text: "Le lanceur fait appel au pouvoir de la jungle pour restaurer les PV et soigner les altérations d’état de ses alliés et de lui-même."
		desc: "Chaque Pokémon du camp du lanceur récupère 1/4 de ses PV max, arrondi à l’entier le plus proche (0,5 vers le haut), et son altération de statut est soignée.",
		shortDesc: "Lanceur et alliés : +1/4 des PV max, statut soigné.",
	},
	karatechop: {
		name: "Poing Karaté",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "A plus de chances d’infliger un coup critique.",
		shortDesc: "Taux de critique élevé.",
	},
	kinesis: {
		name: "Télékinésie",
		// Official flavor text: "Le lanceur distrait l’ennemi en pliant une cuillère, ce qui baisse sa Précision."
		desc: "Baisse la Précision de la cible d’un niveau.",
		shortDesc: "Baisse la Précision de la cible d’un niveau.",
	},
	kingsshield: {
		name: "Bouclier Royal",
		// Official flavor text: "Prend une posture défensive pour bloquer les dégâts. Diminue l’Attaque de tout Pokémon qui entre en contact avec le lanceur."
		desc: "Le lanceur est protégé de la plupart des attaques des autres Pokémon pendant ce tour, et les Pokémon qui tentent d’entrer en contact avec lui voient leur Attaque baisser d’un niveau. Les capacités qui n’infligent pas de dégâts passent outre cette protection. Cette capacité a 1 chance sur X de réussir, où X vaut 1 au départ et triple à chaque utilisation réussie de cette capacité. X revient à 1 si cette capacité échoue, si la dernière capacité utilisée par le lanceur n’est pas Blockhaus, Rempart Brûlant, Détection, Ténacité, Bouclier Royal, Gardomax, Blocage, Abri, Prévention, Piège de Fil, Pico-Défense ou Garde Large, ou si c’était l’une de ces capacités et que la protection du lanceur a été percée. Échoue si le lanceur agit en dernier ce tour-ci.",
		shortDesc: "Protège des attaques infligeant des dégâts. Contact : -1 Atq.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	knockoff: {
		name: "Sabotage",
		// Official flavor text: "Fait plus de dégâts aux cibles qui tiennent un objet. De plus, fait tomber cet objet et empêche la cible de l’utiliser jusqu’à la fin du combat."
		desc: "La puissance de cette capacité est multipliée par 1,5 si la cible tient un objet, et la cible perd son objet tenu si le lanceur n’est pas K.O. Une cible ayant le talent Glu ne perd pas son objet tenu si elle n’est pas K.O. La puissance de cette capacité n’augmente pas et l’objet de la cible n’est pas retiré s’il s’agit d’une Gemme Bleue, d’une Gemme Rouge, d’un Globe Adamant, d’un Globe Perlé, d’un Globe Platiné, d’une Plaque, d’un Module, d’une ROM, d’une Épée Rouillée, d’un Bouclier Rouillé, d’une Énergie Booster ou d’un Masque tenu respectivement par Kyogre, Groudon, Dialga, Palkia, Giratina, Arceus, Genesect, Silvallié, Zacian, Zamazenta, un Pokémon Paradoxe ou Ogerpon, ou si le lanceur est l’une de ces espèces et que la cible tient l’objet correspondant. Dans ce cas, les Pokémon Paradoxe comprennent toutes les espèces ayant le talent Paléosynthèse ou Charge Quantique, sauf Feu-Perçant, Ire-Foudre, Roc-de-Fer et Chef-de-Fer. Les objets perdus à cause de cette capacité ne peuvent pas être récupérés avec Recyclage ou le talent Récolte.",
		shortDesc: "Dégâts ×1,5 si l’adversaire tient un objet. Retire l’objet.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
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
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		removeItem: "  {SOURCE} fait tomber {ITEM:definite:classified} {POKEMON:de} !",
	},
	kowtowcleave: {
		name: "Génusection",
		shortDesc: "Cette capacité ne peut pas rater.",
	},
	landswrath: {
		name: "Force Chtonienne",
		// Official flavor text: "Utilise la puissance du sol et la concentre sur l’ennemi pour infliger des dégâts."
		desc: "Aucun effet supplémentaire.",
		shortDesc: "Aucun effet supplémentaire. Touche les adversaires adjacents.",
	},
	laserfocus: {
		name: "Affilage",
		// Official flavor text: "Le lanceur se concentre pour être sûr de porter un coup critique au tour suivant."
		desc: "Jusqu’à la fin du tour suivant, les attaques du lanceur infligent des coups critiques.",
		shortDesc: "Jusqu’à la fin du tour suivant, les capacités du lanceur font des coups critiques.",

		start: "  {POKEMON} aiguise son esprit !",
	},
	lashout: {
		name: "Cent Rancunes",
		// Official flavor text: "Le lanceur frappe l’ennemi avec toute sa rancune. Si les stats du lanceur ont diminué pendant ce tour, la puissance de cette attaque est doublée."
		desc: "La puissance double si l’un des niveaux de stats du lanceur a baissé ce tour-ci.",
		shortDesc: "Puissance ×2 si une stat du lanceur a baissé ce tour-ci.",
	},
	lastresort: {
		name: "Dernier Recours",
		// Official flavor text: "Cette capacité ne peut être utilisée qu’après que le lanceur a utilisé toutes les autres."
		desc: "Cette capacité échoue sauf si le lanceur la connaît ainsi qu’au moins une autre capacité, et a utilisé chacune des autres capacités qu’il connaît au moins une fois depuis son entrée au combat ou sa transformation.",
		shortDesc: "Échoue si chaque capacité connue n’a pas été utilisée.",
	},
	lastrespects: {
		name: "Hommage Posthume",
		// Official flavor text: "Le lanceur attaque pour venger ses alliés. Plus le nombre de Pokémon alliés mis K.O. est élevé, plus la puissance de cette capacité augmente."
		desc: "La puissance est égale à 50+(X × 50), où X est le nombre total de fois où un Pokémon du camp du lanceur a été mis K.O., X ne pouvant pas dépasser 100.",
		shortDesc: "+50 de puissance pour chaque fois qu’un membre de l’équipe a été mis K.O.",
	},
	lavaplume: {
		name: "Ébullilave",
		// Official flavor text: "Des boules de feu s’abattent sur tous les Pokémon autour du lanceur. Peut aussi les brûler."
		desc: "30 % de chances de brûler la cible.",
		shortDesc: "30 % de chances de brûler les Pokémon adjacents.",
	},
	leafage: {
		name: "Feuillage",
		shortDesc: "Aucun effet supplémentaire.",
	},
	leafblade: {
		name: "Lame Feuille",
		// Official flavor text: "Une feuille coupante comme une lame entaille l’ennemi. Taux de critiques élevé."
		desc: "A plus de chances d’infliger un coup critique.",
		shortDesc: "Taux de critique élevé.",
	},
	leafstorm: {
		name: "Tempête Verte",
		// Official flavor text: "Invoque une tempête de feuilles acérées. Le contrecoup réduit beaucoup l’Attaque Spéciale du lanceur."
		desc: "Baisse l’Attaque Spéciale du lanceur de deux niveaux.",
		shortDesc: "Baisse l’Atq Spé du lanceur de 2 niveaux.",
	},
	leaftornado: {
		name: "Phytomixeur",
		// Official flavor text: "L’ennemi est pris dans un tourbillon de feuilles acérées. Peut aussi baisser sa Précision."
		desc: "50 % de chances de baisser la Précision de la cible d’un niveau.",
		shortDesc: "50 % de chances de baisser la Précision de la cible d’un niveau.",
	},
	leechlife: {
		name: "Vampirisme",
		// Official flavor text: "Une attaque qui aspire le sang de l’ennemi. La moitié des dégâts sont convertis en PV pour le lanceur."
		desc: "Le lanceur récupère 1/2 des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut). Si le lanceur tient une Grosse Racine, les PV récupérés sont multipliés par 1,3, arrondi à l’entier le plus proche (0,5 vers le bas).",
		shortDesc: "Le lanceur récupère 50 % des dégâts infligés.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	leechseed: {
		name: "Vampigraine",
		// Official flavor text: "Une graine est semée sur l’ennemi. À chaque tour, elle lui dérobe des PV que le lanceur récupère."
		desc: "Le Pokémon à la position du lanceur vole 1/8 des PV max de la cible, arrondi à l’inférieur, à la fin de chaque tour. Si le bénéficiaire tient une Grosse Racine, les PV récupérés sont multipliés par 1,3, arrondi à l’entier le plus proche (0,5 vers le bas). Si la cible utilise Relais, son remplaçant continue d’être drainé. Si la cible se retire ou utilise avec succès Toupie Éclat ou Tour Rapide, l’effet prend fin. Les Pokémon de type Plante sont immunisés contre cette capacité lors de son utilisation, mais pas contre son effet.",
		shortDesc: "Le lanceur récupère 1/8 des PV de la cible à chaque tour.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} est infecté !",
		end: "  {POKEMON} est libéré de la capacité Vampigraine !",
		damage: "  Vampigraine draine l’énergie {POKEMON:de} !",
	},
	leer: {
		name: "Groz’Yeux",
		// Official flavor text: "Le lanceur fait les gros yeux à l’ennemi pour l’intimider et baisser sa Défense."
		desc: "Baisse la Défense de la cible d’un niveau.",
		shortDesc: "Baisse la Défense des adversaires d’un niveau.",
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	letssnuggleforever: {
		name: "Patati-Patattrape",
		shortDesc: "Aucun effet supplémentaire.",
	},
	lick: {
		name: "Léchouille",
		// Official flavor text: "Un grand coup de langue qui inflige des dégâts à l’ennemi. Peut aussi le paralyser."
		desc: "30 % de chances de paralyser la cible.",
		shortDesc: "30 % de chances de paralyser la cible.",
	},
	lifedew: {
		name: "Fontaine de Vie",
		// Official flavor text: "Le lanceur projette une eau mystérieuse autour du terrain pour restaurer ses PV et ceux de ses alliés au combat."
		desc: "Chaque Pokémon du camp du lanceur récupère 1/4 de ses PV max, arrondi à l’entier le plus proche (0,5 vers le haut).",
		shortDesc: "Soigne le lanceur et ses alliés de 1/4 de leurs PV max.",
	},
	lightofruin: {
		name: "Lumière du Néant",
		// Official flavor text: "Utilise la puissance de la fleur Éternelle pour lancer un formidable rayon d’énergie. Blesse aussi gravement le lanceur."
		desc: "Si la cible a perdu des PV, le lanceur subit des dégâts de recul égaux à 1/2 des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut), mais d’au moins 1 PV.",
		shortDesc: "Dégâts de recul de 1/2.",
	},
	lightscreen: {
		name: "Mur Lumière",
		// Official flavor text: "Crée un fabuleux mur de lumière qui réduit les dégâts causés par les capacités spéciales pendant cinq tours."
		desc: "Pendant 5 tours, le lanceur et les membres de son équipe subissent 0,5× les dégâts des attaques spéciales, ou 0,66× en combat en Duo. Les dégâts ne sont pas réduits davantage avec Voile Aurore. Les coups critiques ignorent cet effet. L’effet est retiré du camp du lanceur si le lanceur ou un allié est touché avec succès par Casse-Brique, Psycho-Croc ou Anti-Brume. Dure 8 tours si le lanceur tient une Lumargile. Échoue si l’effet est déjà actif dans le camp du lanceur.",
		shortDesc: "Pendant 5 tours, les dégâts spéciaux subis par l’équipe sont divisés par deux.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
			start: "  {POKEMON} est protégé contre les attaques spéciales!",
		},

		start: "  Mur Lumière augmente la résistance de {TEAM} aux capacités spéciales !",
		end: "  Mur Lumière n’a plus d’effet sur {TEAM} !",
	},
	lightthatburnsthesky: {
		name: "Apocalypsis Luminis",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Cette capacité devient une attaque physique si l’Attaque du lanceur est supérieure à son Attaque Spéciale, modifications de niveaux de stats comprises. Cette capacité et ses effets ignorent les talents des autres Pokémon.",
		shortDesc: "Physique si Atq > Atq Spé du lanceur. Ignore les talents.",
	},
	liquidation: {
		name: "Aqua-Brèche",
		// Official flavor text: "Le lanceur utilise la force de l’eau pour attaquer. Peut aussi baisser la Défense de la cible."
		desc: "20 % de chances de baisser la Défense de la cible d’un niveau.",
		shortDesc: "20 % de chances de baisser la Défense de la cible d’un niveau.",
	},
	lockon: {
		name: "Verrouillage",
		// Official flavor text: "Verrouille l’ennemi pour ne pas le rater au tour suivant."
		desc: "Jusqu’à la fin du tour suivant, la cible ne peut pas éviter les capacités du lanceur, même si elle est au milieu d’une capacité en deux tours. L’effet prend fin si le lanceur ou la cible quitte le terrain. Échoue si cet effet est déjà actif pour le lanceur.",
		shortDesc: "La prochaine capacité du lanceur ne peut pas rater la cible.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {SOURCE} vise {POKEMON} !",
	},
	lovelykiss: {
		name: "Grobisou",
		shortDesc: "Endort la cible.",
	},
	lowkick: {
		name: "Balayage",
		// Official flavor text: "Un puissant coup de pied bas qui fauche l’ennemi. Il est plus efficace contre les ennemis lourds."
		desc: "La puissance de cette capacité est de 20 si la cible pèse moins de 10 kg, de 40 si elle pèse moins de 25 kg, de 60 si elle pèse moins de 50 kg, de 80 si elle pèse moins de 100 kg, de 100 si elle pèse moins de 200 kg, et de 120 si elle pèse 200 kg ou plus.",
		shortDesc: "Plus la cible est lourde, plus la puissance est élevée.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	lowsweep: {
		name: "Balayette",
		// Official flavor text: "Un coup rapide qui affecte la mobilité de l’ennemi et diminue sa Vitesse."
		desc: "100 % de chances de baisser la Vitesse de la cible d’un niveau.",
		shortDesc: "100 % de chances de baisser la Vitesse de la cible d’un niveau.",
	},
	luckychant: {
		name: "Air Veinard",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Pendant 5 tours, le lanceur et les membres de son équipe ne peuvent pas subir de coup critique. Échoue si l’effet est déjà actif dans le camp du lanceur.",
		shortDesc: "Pendant 5 tours, protège l’équipe du lanceur des coups critiques.",

		start: "  Air Veinard immunise {TEAM} contre les coups critiques !",
		end: "  Les effets d’Air Veinard sur {TEAM} prennent fin !",
	},
	luminacrash: {
		name: "Lumino-Impact",
		// Official flavor text: "Le lanceur attaque en émettant une étrange lumière qui ébranle l'esprit de la cible. Cela baisse beaucoup la Défense Spéciale de la cible."
		desc: "100 % de chances de baisser la Défense Spéciale de la cible de deux niveaux.",
		shortDesc: "100 % de chances de baisser la Déf Spé de la cible de 2 niveaux.",
	},
	lunarblessing: {
		name: "Prière Lunaire",
		// Official flavor text: "Le lanceur adresse une prière à la lune pour restaurer les PV et soigner ses altérations de statut ainsi que celles de ses alliés."
		desc: "Chaque Pokémon du camp du lanceur récupère 1/4 de ses PV max, arrondi à l’entier le plus proche (0,5 vers le haut), et son altération de statut est soignée.",
		shortDesc: "Lanceur et alliés : +1/4 des PV max, statut soigné.",
	},
	lunardance: {
		name: "Danse Lune",
		// Official flavor text: "Le lanceur tombe K.O. pour soigner le statut et les PV du Pokémon qui prendra sa place au combat."
		desc: "Le lanceur est mis K.O., et si le Pokémon envoyé pour le remplacer n’a pas tous ses PV ou PP, ou a une altération de statut non volatile, ses PV et PP sont entièrement restaurés et son altération de statut non volatile est soignée. Le remplaçant est envoyé à la fin du tour, et le soin a lieu avant que les pièges ne fassent effet. Cet effet persiste jusqu’à ce qu’un Pokémon remplissant l’une de ces conditions entre au combat à la position du lanceur ou y soit déplacé avec Interversion. Échoue si le lanceur est le dernier Pokémon non K.O. de son équipe.",
		shortDesc: "Le lanceur est K.O. Le prochain Pokémon blessé est soigné, PV et PP au max.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		heal: "  {POKEMON} baigne dans la lumière des rayons de lune !",
	},
	lunge: {
		name: "Furie-Bond",
		// Official flavor text: "Le lanceur se jette sur la cible de toutes ses forces pour lui infliger des dégâts et baisser son Attaque."
		desc: "100 % de chances de baisser l’Attaque de la cible d’un niveau.",
		shortDesc: "100 % de chances de baisser l’Attaque de la cible d’un niveau.",
	},
	lusterpurge: {
		name: "Lumi-Éclat",
		// Official flavor text: "Le lanceur libère un éclair lumineux. Peut aussi baisser la Défense Spéciale de l’ennemi."
		desc: "50 % de chances de baisser la Défense Spéciale de la cible d’un niveau.",
		shortDesc: "50 % de chances de baisser la Déf Spé de la cible d’un niveau.",
	},
	machpunch: {
		name: "Mach Punch",
		// Official flavor text: "Coup de poing fulgurant. Frappe en priorité."
		desc: "Aucun effet supplémentaire.",
		shortDesc: "Frappe généralement en premier.",
	},
	magicalleaf: {
		name: "Feuille Magik",
		shortDesc: "Cette capacité ne peut pas rater.",
	},
	magicaltorque: {
		name: "Crash Magique",
		desc: "30 % de chances de rendre la cible confuse.",
		shortDesc: "30 % de chances de rendre la cible confuse.",
	},
	magiccoat: {
		name: "Reflet Magik",
		// Official flavor text: "Une barrière qui renvoie les capacités comme Vampigraine et celles affectant le statut et les stats."
		desc: "Jusqu’à la fin du tour, le lanceur n’est pas affecté par certaines capacités n’infligeant pas de dégâts qui le visent, et les utilise à la place contre leur lanceur d’origine. Les capacités renvoyées de cette manière ne peuvent pas être renvoyées à nouveau par cet effet ou par celui du talent Miroir Magik. Picots, Piège de Roc, Toile Gluante et Pics Toxik ne peuvent être renvoyés qu’une fois par camp, par le Pokémon le plus à gauche sous l’effet de cette capacité ou du talent Miroir Magik. Les talents Paratonnerre et Lavabo redirigent leurs capacités respectives avant que cette capacité ne prenne effet.",
		shortDesc: "Renvoie certaines capacités n’infligeant pas de dégâts.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} s’entoure du Reflet Magik !",
		move: "{POKEMON} renvoie la capacité {MOVE} ! Retour à l’envoyeur !",
	},
	magicpowder: {
		name: "Poudre Magique",
		// Official flavor text: "Le lanceur recouvre sa cible d’une poudre magique qui change son type en Psy."
		desc: "La cible devient de type Psy. Échoue si la cible est un Arceus ou un Silvallié, si elle est déjà uniquement de type Psy, ou si elle est téracristallisée.",
		shortDesc: "Le type de la cible devient Psy.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	magicroom: {
		name: "Zone Magique",
		// Official flavor text: "Le lanceur crée une zone mystérieuse où les objets tenus par tous les Pokémon n’ont plus aucun effet pendant cinq tours."
		desc: "Pendant 5 tours, les objets tenus par tous les Pokémon au combat n’ont aucun effet. L’effet d’un objet provoquant un changement de forme n’est pas affecté, mais tous les autres effets de ces objets sont annulés. Pendant l’effet, aucun Pokémon au combat ne peut utiliser Dégommage ni Don Naturel. Si cette capacité est utilisée pendant l’effet, celui-ci prend fin.",
		shortDesc: "Pendant 5 tours, les objets tenus n’ont aucun effet.",
	},
	magmastorm: {
		name: "Vortex Magma",
		// Official flavor text: "L’ennemi est pris dans un tourbillon de feu qui dure de quatre à cinq tours."
		desc: "Empêche la cible d’être remplacée pendant quatre ou cinq tours (sept tours si le lanceur tient une Accro Griffe). Inflige à la cible des dégâts égaux à 1/8 de ses PV max (1/6 si le lanceur tient une Bande Étreinte), arrondi à l’inférieur, à la fin de chaque tour pendant l’effet. La cible peut tout de même être remplacée si elle tient une Carapace Mue ou si elle utilise Relais, Eau Revoir, Dernier Mot, Queulonage, Téléport, Demi-Tour ou Change Éclair. L’effet prend fin si le lanceur ou la cible quitte le terrain, ou si la cible utilise avec succès Toupie Éclat, Tour Rapide ou Clonage. Cet effet ne se cumule pas et n’est pas réinitialisé par l’utilisation de cette capacité ou d’une autre capacité de piège.",
		shortDesc: "Piège et blesse la cible pendant 4 à 5 tours.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} est piégé dans un tourbillon de magma !",
	},
	magnetbomb: {
		name: "Bombe Aimant",
		shortDesc: "Cette capacité ne peut pas rater.",
	},
	magneticflux: {
		name: "Magné-Contrôle",
		// Official flavor text: "Manipule les champs magnétiques pour augmenter la Défense et la Défense Spéciale des Pokémon alliés dotés du talent Plus ou du talent Moins."
		desc: "Augmente d’un niveau la Défense et la Défense Spéciale des Pokémon du camp du lanceur ayant le talent Plus ou Moins.",
		shortDesc: "+1 Déf et Déf Spé pour les alliés ayant Plus ou Moins.",
	},
	magnetrise: {
		name: "Vol Magnétik",
		// Official flavor text: "Le lanceur utilise l’électricité pour générer un champ magnétique et léviter durant cinq tours."
		desc: "Pendant 5 tours, le lanceur est immunisé contre les attaques de type Sol et contre les effets de Picots, Pics Toxik, Toile Gluante et du talent Piège Sable tant qu’il reste au combat. Si le lanceur utilise Relais, son remplaçant bénéficie de l’effet. Racines, Anti-Air, Myria-Flèches et la Balle Fer annulent cette capacité si le lanceur est sous l’un de leurs effets. Échoue si le lanceur est déjà sous cet effet ou sous les effets de Racines, Anti-Air ou Myria-Flèches.",
		shortDesc: "Pendant 5 tours, le lanceur est immunisé contre le type Sol.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} lévite sur un champ magnétique !",
		end: "  Le magnétisme {POKEMON:de} se dissipe !",
	},
	magnitude: {
		name: "Ampleur",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "La puissance de cette capacité varie : 5 % de chances chacune pour une puissance de 10 et de 150, 10 % de chances chacune pour 30 et 110, 20 % de chances chacune pour 50 et 90, et 30 % de chances pour 70. Les dégâts doublent si la cible utilise Tunnel.",
		shortDesc: "Touche les Pokémon adjacents. Puissance variable ; ×2 contre Tunnel.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  Ampleur {NUMBER}!",
	},
	makeitrain: {
		name: "Ruée d'Or",
		// Official flavor text: "Le lanceur attaque en lançant de nombreuses pièces, ce qui baisse son Attaque Spéciale. Permet d'obtenir plus d'argent à la fin du combat."
		desc: "Baisse l’Attaque Spéciale du lanceur d’un niveau.",
		shortDesc: "Baisse l’Atq Spé du lanceur d’un niveau. Touche les adversaires.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},

		activate: "#payday",
	},
	maliciousmoonsault: {
		name: "Dark Body Press",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Les dégâts doublent et la capacité ne peut pas rater si la cible a utilisé Lilliput pendant qu’elle était au combat.",
		shortDesc: "Les dégâts doublent si la cible a utilisé Lilliput.",
	},
	malignantchain: {
		name: "Chaîne Malsaine",
		// Official flavor text: "Le lanceur ligote la cible avec une chaîne faite de poison et lui injecte un venin corrosif, ce qui peut aussi gravement l'empoisonner."
		desc: "50 % de chances d’empoisonner gravement la cible.",
		shortDesc: "50 % de chances d’empoisonner gravement la cible.",
	},
	matblock: {
		name: "Tatamigaeshi",
		// Official flavor text: "Retourne un tatami pour bloquer, comme avec un bouclier, les capacités visant le lanceur ou ses alliés. N’a pas d’effet sur les attaques de statut."
		desc: "Le lanceur et les membres de son équipe sont protégés des attaques infligeant des dégâts lancées par les autres Pokémon, y compris les alliés, pendant ce tour. Échoue si ce n’est pas le premier tour du lanceur sur le terrain, si le lanceur agit en dernier ce tour-ci, ou si cette capacité est déjà active pour le camp du lanceur.",
		shortDesc: "Protège l’équipe des attaques offensives. Premier tour uniquement.",

		start: "  {POKEMON} se prépare à utiliser un tatami pour bloquer les attaques !",
		block: "  La capacité {MOVE} a été bloquée par un tatami !",
	},
	matchagotcha: {
		name: "Mortier Matcha",
		// Official flavor text: "Le lanceur remue son thé et en bombarde la cible. La moitié des dégâts infligés sont convertis en PV pour le lanceur. Cette capacité peut aussi brûler la cible."
		desc: "20 % de chances de brûler la cible. Le lanceur récupère 1/2 des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut). Si le lanceur tient une Grosse Racine, les PV récupérés sont multipliés par 1,3, arrondi à l’entier le plus proche (0,5 vers le bas). La cible est dégelée si elle est gelée.",
		shortDesc: "20 % de brûlure. Récupère 50 % des dégâts. Dégèle les adversaires.",
	},
	maxairstream: {
		name: "Aéromax",
		// Official flavor text: "Une attaque de type Vol que seuls les Pokémon Dynamax peuvent utiliser. Augmente la Vitesse des alliés."
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, la Vitesse de chaque Pokémon du camp du lanceur augmente d’un niveau, même s’il est protégé par un clone. Cet effet ne se produit pas si le lanceur n’est pas dynamaxé. Si cette capacité est utilisée comme capacité de base, elle inflige des dégâts avec une puissance de 0.",
		shortDesc: "Puissance selon la capacité de base. Alliés : +1 Vitesse.",
	},
	maxdarkness: {
		name: "Sinistromax",
		// Official flavor text: "Une attaque de type Ténèbres que seuls les Pokémon Dynamax peuvent utiliser. Baisse la Défense Spéciale de la cible."
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, la Défense Spéciale de chaque Pokémon du camp adverse baisse d’un niveau, même s’il est protégé par un clone. Cet effet ne se produit pas si le lanceur n’est pas dynamaxé. Si cette capacité est utilisée comme capacité de base, elle inflige des dégâts avec une puissance de 0.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : -1 Déf Spé.",
	},
	maxflare: {
		name: "Pyromax",
		// Official flavor text: "Une attaque de type Feu que seuls les Pokémon Dynamax peuvent utiliser. Fait briller le soleil pendant cinq tours."
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, la météo devient Soleil. Cet effet ne se produit pas si le lanceur n’est pas dynamaxé. Si cette capacité est utilisée comme capacité de base, elle inflige des dégâts avec une puissance de 0.",
		shortDesc: "Puissance selon la capacité de base. Déclenche le Soleil.",
	},
	maxflutterby: {
		name: "Insectomax",
		// Official flavor text: "Une attaque de type Insecte que seuls les Pokémon Dynamax peuvent utiliser. Baisse l’Attaque Spéciale de la cible."
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, l’Attaque Spéciale de chaque Pokémon du camp adverse baisse d’un niveau, même s’il est protégé par un clone. Cet effet ne se produit pas si le lanceur n’est pas dynamaxé. Si cette capacité est utilisée comme capacité de base, elle inflige des dégâts avec une puissance de 0.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : -1 Atq Spé.",
	},
	maxgeyser: {
		name: "Hydromax",
		// Official flavor text: "Une attaque de type Eau que seuls les Pokémon Dynamax peuvent utiliser. Invoque de fortes pluies qui durent cinq tours."
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, la météo devient Pluie. Cet effet ne se produit pas si le lanceur n’est pas dynamaxé. Si cette capacité est utilisée comme capacité de base, elle inflige des dégâts avec une puissance de 0.",
		shortDesc: "Puissance selon la capacité de base. Déclenche la Pluie.",
	},
	maxguard: {
		name: "Gardomax",
		// Official flavor text: "Le lanceur se protège de toutes les attaques. Peut échouer si utilisée plusieurs fois de suite."
		desc: "Le lanceur est protégé de presque toutes les attaques des autres Pokémon pendant ce tour, y compris les capacités Dynamax et Gigamax. Cette capacité a 1 chance sur X de réussir, où X vaut 1 au départ et triple à chaque utilisation réussie de cette capacité. X revient à 1 si cette capacité échoue, si la dernière capacité utilisée par le lanceur n’est pas Blockhaus, Détection, Ténacité, Bouclier Royal, Gardomax, Blocage, Abri, Prévention, Pico-Défense ou Garde Large, ou si c’était l’une de ces capacités et que la protection du lanceur a été percée. Échoue si le lanceur agit en dernier ce tour-ci.",
		shortDesc: "Protège le lanceur des capacités et des capacités Dynamax ce tour-ci.",

		activate: "  {POKEMON} se protège !",
	},
	maxhailstorm: {
		name: "Cryomax",
		// Official flavor text: "Une attaque de type Glace que seuls les Pokémon Dynamax peuvent utiliser. Invoque une tempête de grêle qui dure cinq tours."
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, la météo devient Grêle. Cet effet ne se produit pas si le lanceur n’est pas dynamaxé. Si cette capacité est utilisée comme capacité de base, elle inflige des dégâts avec une puissance de 0.",
		shortDesc: "Puissance selon la capacité de base. Déclenche la Grêle.",
	},
	maxknuckle: {
		name: "Pugilomax",
		// Official flavor text: "Une attaque de type Combat que seuls les Pokémon Dynamax peuvent utiliser. Augmente l’Attaque des alliés."
		desc: "Augmente l’Attaque du lanceur et de ses alliés d’un niveau. La puissance varie selon celle de la capacité de base. Cet effet ne se produit pas si le lanceur n’est pas dynamaxé. Si cette capacité est utilisée comme capacité de base, elle inflige des dégâts avec une puissance de 0.",
		shortDesc: "Puissance selon la capacité de base. Alliés : +1 Attaque.",
	},
	maxlightning: {
		name: "Fulguromax",
		// Official flavor text: "Une attaque de type Électrik que seuls les Pokémon Dynamax peuvent utiliser. Crée un Champ Électrifié qui dure cinq tours."
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, le terrain devient Champ Électrifié. Cet effet ne se produit pas si le lanceur n’est pas dynamaxé. Si cette capacité est utilisée comme capacité de base, elle inflige des dégâts avec une puissance de 0.",
		shortDesc: "Puissance selon la capacité de base. Déclenche Champ Électrifié.",
	},
	maxmindstorm: {
		name: "Psychomax",
		// Official flavor text: "Une attaque de type Psy que seuls les Pokémon Dynamax peuvent utiliser. Crée un Champ Psychique qui dure cinq tours."
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, le terrain devient Champ Psychique. Cet effet ne se produit pas si le lanceur n’est pas dynamaxé. Si cette capacité est utilisée comme capacité de base, elle inflige des dégâts avec une puissance de 0.",
		shortDesc: "Puissance selon la capacité de base. Déclenche Champ Psychique.",
	},
	maxooze: {
		name: "Toxinomax",
		// Official flavor text: "Une attaque de type Poison que seuls les Pokémon Dynamax peuvent utiliser. Augmente l’Attaque Spéciale des alliés."
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, l’Attaque Spéciale de chaque Pokémon du camp du lanceur augmente d’un niveau, même s’il est protégé par un clone. Cet effet ne se produit pas si le lanceur n’est pas dynamaxé. Si cette capacité est utilisée comme capacité de base, elle inflige des dégâts avec une puissance de 0.",
		shortDesc: "Puissance selon la capacité de base. Alliés : +1 Atq Spé.",
	},
	maxovergrowth: {
		name: "Phytomax",
		// Official flavor text: "Une attaque de type Plante que seuls les Pokémon Dynamax peuvent utiliser. Crée un Champ Herbu qui dure cinq tours."
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, le terrain devient Champ Herbu. Cet effet ne se produit pas si le lanceur n’est pas dynamaxé. Si cette capacité est utilisée comme capacité de base, elle inflige des dégâts avec une puissance de 0.",
		shortDesc: "Puissance selon la capacité de base. Déclenche Champ Herbu.",
	},
	maxphantasm: {
		name: "Spectromax",
		// Official flavor text: "Une attaque de type Spectre que seuls les Pokémon Dynamax peuvent utiliser. Baisse la Défense de la cible."
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, la Défense de chaque Pokémon du camp adverse baisse d’un niveau, même s’il est protégé par un clone. Cet effet ne se produit pas si le lanceur n’est pas dynamaxé. Si cette capacité est utilisée comme capacité de base, elle inflige des dégâts avec une puissance de 0.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : -1 Défense.",
	},
	maxquake: {
		name: "Sismomax",
		// Official flavor text: "Une attaque de type Sol que seuls les Pokémon Dynamax peuvent utiliser. Augmente la Défense Spéciale des alliés."
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, la Défense Spéciale de chaque Pokémon du camp du lanceur augmente d’un niveau, même s’il est protégé par un clone. Cet effet ne se produit pas si le lanceur n’est pas dynamaxé. Si cette capacité est utilisée comme capacité de base, elle inflige des dégâts avec une puissance de 0.",
		shortDesc: "Puissance selon la capacité de base. Alliés : +1 Déf Spé.",
	},
	maxrockfall: {
		name: "Lithomax",
		// Official flavor text: "Une attaque de type Roche que seuls les Pokémon Dynamax peuvent utiliser. Invoque une tempête de sable qui dure cinq tours."
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, la météo devient Tempête de sable. Cet effet ne se produit pas si le lanceur n’est pas dynamaxé. Si cette capacité est utilisée comme capacité de base, elle inflige des dégâts avec une puissance de 0.",
		shortDesc: "Puissance selon la capacité de base. Déclenche une Tempête de sable.",
	},
	maxstarfall: {
		name: "Enchantomax",
		// Official flavor text: "Une attaque de type Fée que seuls les Pokémon Dynamax peuvent utiliser. Crée un Champ Brumeux qui dure cinq tours."
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, le terrain devient Champ Brumeux. Cet effet ne se produit pas si le lanceur n’est pas dynamaxé. Si cette capacité est utilisée comme capacité de base, elle inflige des dégâts avec une puissance de 0.",
		shortDesc: "Puissance selon la capacité de base. Déclenche Champ Brumeux.",
	},
	maxsteelspike: {
		name: "Métallomax",
		// Official flavor text: "Une attaque de type Acier que seuls les Pokémon Dynamax peuvent utiliser. Augmente la Défense des alliés."
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, la Défense de chaque Pokémon du camp du lanceur augmente d’un niveau, même s’il est protégé par un clone. Cet effet ne se produit pas si le lanceur n’est pas dynamaxé. Si cette capacité est utilisée comme capacité de base, elle inflige des dégâts avec une puissance de 0.",
		shortDesc: "Puissance selon la capacité de base. Alliés : +1 Défense.",
	},
	maxstrike: {
		name: "Normalomax",
		// Official flavor text: "Une attaque de type Normal que seuls les Pokémon Dynamax peuvent utiliser. Baisse la Vitesse de la cible."
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, la Vitesse de chaque Pokémon du camp adverse baisse d’un niveau, même s’il est protégé par un clone. Cet effet ne se produit pas si le lanceur n’est pas dynamaxé. Si cette capacité est utilisée comme capacité de base, elle inflige des dégâts avec une puissance de 0.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : -1 Vitesse.",
	},
	maxwyrmwind: {
		name: "Dracomax",
		// Official flavor text: "Une attaque de type Dragon que seuls les Pokémon Dynamax peuvent utiliser. Baisse l’Attaque de la cible."
		desc: "La puissance est égale à la puissance Dynamax de la capacité de base. Si cette capacité réussit, l’Attaque de chaque Pokémon du camp adverse baisse d’un niveau, même s’il est protégé par un clone. Cet effet ne se produit pas si le lanceur n’est pas dynamaxé. Si cette capacité est utilisée comme capacité de base, elle inflige des dégâts avec une puissance de 0.",
		shortDesc: "Puissance selon la capacité de base. Adversaires : -1 Attaque.",
	},
	meanlook: {
		name: "Regard Noir",
		// Official flavor text: "Le lanceur pétrifie l’ennemi en lui lançant un regard noir. Il devient incapable de s’enfuir."
		desc: "Empêche la cible d’être remplacée. La cible peut tout de même être remplacée si elle tient une Carapace Mue ou si elle utilise Relais, Eau Revoir, Dernier Mot, Téléport, Demi-Tour ou Change Éclair. L’effet prend fin si le lanceur ou la cible quitte le terrain.",
		shortDesc: "Empêche la cible d’être remplacée.",
		gen7: {
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
	meditate: {
		name: "Yoga",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Augmente l’Attaque du lanceur d’un niveau.",
		shortDesc: "Augmente l’Attaque du lanceur d’un niveau.",
	},
	mefirst: {
		name: "Moi d’Abord",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Le lanceur utilise contre la cible la capacité que celle-ci a choisie pour ce tour, si possible, avec une puissance multipliée par 1,5. Il doit s’agir d’une capacité infligeant des dégâts autre que Bec-Canon, Éructation, Crash Brûlant, Crash Musclé, Vindicte, Riposte, Implore, Mitra-Poing, Crash Magique, Moi d’Abord, Fulmifer, Voile Miroir, Crash Toxique, Carapiège, Lutte, Larcin ou Crash Obscur. Échoue si la cible agit avant le lanceur. Ignore le clone de la cible pour copier la capacité.",
		shortDesc: "Copie la capacité d’un adversaire avec une puissance ×1,5. Doit agir en premier.",
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
	},
	megadrain: {
		name: "Méga-Sangsue",
		// Official flavor text: "Une attaque qui convertit la moitié des dégâts infligés en PV pour le lanceur."
		desc: "Le lanceur récupère 1/2 des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut). Si le lanceur tient une Grosse Racine, les PV récupérés sont multipliés par 1,3, arrondi à l’entier le plus proche (0,5 vers le bas).",
		shortDesc: "Le lanceur récupère 50 % des dégâts infligés.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	megahorn: {
		name: "Mégacorne",
		shortDesc: "Aucun effet supplémentaire.",
	},
	megakick: {
		name: "Ultimawashi",
		shortDesc: "Aucun effet supplémentaire.",
	},
	megapunch: {
		name: "Ultimapoing",
		shortDesc: "Aucun effet supplémentaire.",
	},
	memento: {
		name: "Souvenir",
		// Official flavor text: "Le lanceur est mis K.O., mais l’Attaque et l’Attaque Spéciale de l’ennemi baissent beaucoup."
		desc: "Baisse l’Attaque et l’Attaque Spéciale de la cible de deux niveaux. Le lanceur est mis K.O., sauf si cette capacité rate ou s’il n’y a pas de cible. Échoue complètement si cette capacité touche un clone, mais n’échoue pas si les stats de la cible ne peuvent pas être modifiées.",
		shortDesc: "Baisse l’Atq et l’Atq Spé de la cible de 2 niveaux. Le lanceur est mis K.O.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		heal: "  {POKEMON} utilise la Force Z pour se soigner !",
	},
	menacingmoonrazemaelstrom: {
		name: "Rayons Séléno-Explosifs",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Cette capacité et ses effets ignorent les talents des autres Pokémon.",
		shortDesc: "Ignore les talents des autres Pokémon.",
	},
	metalburst: {
		name: "Fulmifer",
		// Official flavor text: "Le lanceur attaque le dernier ennemi l’ayant blessé durant le même tour en frappant plus fort."
		desc: "Inflige au dernier Pokémon adverse ayant touché le lanceur avec une attaque physique ou spéciale ce tour-ci des dégâts égaux à 1,5 fois les PV perdus par le lanceur à cause de cette attaque, arrondi à l’inférieur. Si le lanceur n’a pas perdu de PV à cause de cette attaque, cette capacité inflige 1 PV de dégâts à la place. Si la position de ce Pokémon adverse n’est plus occupée et qu’un autre Pokémon adverse est sur le terrain, c’est lui qui subit les dégâts. Seul le dernier coup d’une attaque à coups multiples est pris en compte. Échoue si le lanceur n’a pas été touché par une attaque physique ou spéciale d’un Pokémon adverse ce tour-ci.",
		shortDesc: "Si le lanceur est touché par une attaque, renvoie 1,5× les dégâts.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	metalclaw: {
		name: "Griffe Acier",
		// Official flavor text: "Attaque avec des griffes d’acier. Peut aussi augmenter l’Attaque du lanceur."
		desc: "10 % de chances d’augmenter l’Attaque du lanceur d’un niveau.",
		shortDesc: "10 % de chances d’augmenter l’Attaque du lanceur d’un niveau.",
	},
	metalsound: {
		name: "Strido-Son",
		// Official flavor text: "Un cri horrible tel un crissement métallique qui réduit beaucoup la Défense Spéciale de l’ennemi."
		desc: "Baisse la Défense Spéciale de la cible de deux niveaux.",
		shortDesc: "Baisse la Déf Spé de la cible de 2 niveaux.",
	},
	meteorassault: {
		name: "Joute Astrale",
		// Official flavor text: "Le lanceur attaque son adversaire avec son poireau. Toutefois, cette action le fait vaciller et il doit se reposer au tour suivant."
		desc: "Si cette capacité réussit, le lanceur doit se recharger au tour suivant et ne peut pas choisir de capacité.",
		shortDesc: "Le lanceur ne peut pas agir au tour suivant.",
	},
	meteorbeam: {
		name: "Laser Météore",
		// Official flavor text: "Le lanceur concentre l’énergie cosmique au premier tour, ce qui augmente son Attaque Spéciale, et frappe au second."
		desc: "Cette attaque se charge au premier tour et s’exécute au second. Augmente l’Attaque Spéciale du lanceur d’un niveau au premier tour. Si le lanceur tient une Herbe Pouvoir, la capacité s’exécute en un seul tour.",
		shortDesc: "Augmente l’Atq Spé du lanceur d’un niveau au tour 1. Frappe au tour 2.",

		prepare: "La puissance du cosmos afflue dans le corps {POKEMON:de} !",
	},
	meteormash: {
		name: "Poing Météore",
		// Official flavor text: "Un coup de poing lancé à la vitesse d’un météore. Peut aussi augmenter l’Attaque du lanceur."
		desc: "20 % de chances d’augmenter l’Attaque du lanceur d’un niveau.",
		shortDesc: "20 % de chances d’augmenter l’Attaque du lanceur d’un niveau.",
	},
	metronome: {
		name: "Métronome",
		// Official flavor text: "Le lanceur agite un doigt et stimule son cerveau pour utiliser presque n’importe quelle capacité au hasard."
		desc: "Une capacité choisie au hasard est utilisée, autre que Après Vous, Acide Malique, Canon Blindé, Assistance, Éclat Spectral, Roue Libre, Blockhaus, Bec-Canon, Aegis Maxima, Gladius Maximus, Éructation, Passe-Cadeau, Crash Brûlant, Big Splash, Tapotige, Abattage, Célébration, Babil, Douche Froide, Neigeux de Mots, Dracacophonie, Nitro Crash, Crash Musclé, Vindicte, Photocopie, Riposte, Implore, Vigilance, Nappage, Lien du Destin, Détection, Orage Adamantin, Décalquage, Écrous d’Poing, Double Décharge, Draco-Ascension, Draco-Énergie, Tambour Battant, Canon Dynamax, Turbo Volt, Ténacité, Laser Infinimax, Fourbette, Ruse, Fureur Ardente, Décharnement, Canon Floral, Mitra-Poing, Par Ici, Éclair Gelé, Regard Glaçant, Lance de Glace, Force G, Coup d’Main, Mains Jointes, Hyperceuse, Furie Dimension, TrouDimensionnel, Feu Glacé, Sommation, Poing Sonique, Selve Salvatrice, Bouclier Royal, Fontaine de Vie, Lumière du Néant, Crash Magique, Ruée d’Or, Tatamigaeshi, Moi d’Abord, Joute Astrale, Métronome, Copie, Caboche-Kaboum, Voile Miroir, Mimique, Rayon Spectral, Force Nature, Ire de la Nature, Crash Toxique, Blocage, Plat du Jour, Onde Originelle, Overdrive, Photo-Geyser, Plasma Punch, Prolifération, Bond, Échange Force, Lame Pangéenne, Abri, Ballon Brûlant, À la Queue, Prévention, Poing de Colère, Poudre Fureur, Taurogne, Grand Courroux, Chant Antique, Second Souffle, Cataclysme, Salaison, Lame Ointe, Queulonage, Carapiège, Piège de Fil, Gribouille, Blabla Dodo, Troquenard, Aboiement, Saisie, Ronflement, Chute de Neige, Clepto-Mânes, Habanerage, Pico-Défense, Choc Émotionnel, Projecteur, Typhon Passionné, Jet de Vapeur, Métalaser, Vapeur Féérique, Lutte, Choc Météore, Torrent de Coups, Passe-Passe, Techno-Buster, Pluie Térastrale, Larcin, Myria-Flèches, Myria-Vagues, Voltageôle, Coup Fulgurant, Grand Nettoyage, Désherbaffe, Morphing, Tour de Magie, Double Laser, Coup Victoire, Poing Obscur, Crash Obscur ou Garde Large.",
		shortDesc: "Utilise une capacité choisie au hasard.",
		gen8bdsp: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7letsgo: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
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
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},

		move: "Grâce à Métronome, le Pokémon lance la capacité {MOVE} !",
	},
	mightycleave: {
		name: "Lame Puissante",
		shortDesc: "Passe outre les protections sans les briser.",
	},
	milkdrink: {
		name: "Lait à Boire",
		// Official flavor text: "Le lanceur récupère jusqu’à la moitié de ses PV max."
		desc: "Le lanceur récupère 1/2 de ses PV max, arrondi à l’entier le plus proche (0,5 vers le haut).",
		shortDesc: "Le lanceur récupère 50 % de ses PV max.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	mimic: {
		name: "Copie",
		// Official flavor text: "Le lanceur copie la dernière capacité utilisée par la cible et la conserve tant qu’il reste au combat."
		desc: "Tant que le lanceur reste au combat, cette capacité est remplacée par la dernière capacité utilisée par la cible. La capacité copiée a le nombre maximum de PP de cette capacité. Échoue si la cible n’a pas encore agi, si le lanceur est sous l’effet de Morphing, si le lanceur connaît déjà la capacité, ou si la capacité est Assistance, Aegis Maxima, Gladius Maximus, Éructation, Crash Brûlant, Célébration, Babil, Crash Musclé, Photocopie, Canon Dynamax, Mains Jointes, Crash Magique, Moi d’Abord, Métronome, Copie, Mimique, Force Nature, Crash Toxique, Gribouille, Blabla Dodo, Lutte, Pluie Térastrale, Morphing ou Crash Obscur.",
		shortDesc: "La dernière capacité utilisée par la cible remplace celle-ci.",
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
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} apprend {MOVE} !",
	},
	mindblown: {
		name: "Caboche-Kaboum",
		// Official flavor text: "Le lanceur fait exploser sa tête pour attaquer toutes les cibles autour de lui. Il subit aussi des dégâts."
		desc: "Que cette capacité réussisse ou non, et même si cela le met K.O., le lanceur perd 1/2 de ses PV max, arrondi au supérieur, sauf s’il a le talent Garde Magik. Cette capacité ne peut pas s’exécuter et le lanceur ne perd pas de PV si un Pokémon au combat a le talent Moiteur, ou si cette capacité est de type Feu et que le lanceur est affecté par Nuée de Poudre ou que la météo est Pluie battante.",
		shortDesc: "Le lanceur perd 50 % de ses PV max. Touche les Pokémon adjacents.",

		damage: "  ({POKEMON} sacrifie des PV pour augmenter la puissance de sa capacité !)",
	},
	mindreader: {
		name: "Lire-Esprit",
		// Official flavor text: "Le lanceur analyse les mouvements de l’ennemi pour être sûr de toucher au coup suivant."
		desc: "Jusqu’à la fin du tour suivant, la cible ne peut pas éviter les capacités du lanceur, même si elle est en train d’utiliser une capacité en deux tours. L’effet prend fin si le lanceur ou la cible quitte le terrain. Échoue si cet effet est déjà actif pour le lanceur.",
		shortDesc: "La prochaine capacité du lanceur ne peut pas rater la cible.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "#lockon",
	},
	minimize: {
		name: "Lilliput",
		// Official flavor text: "Le lanceur comprime son corps pour se faire tout petit et beaucoup augmenter son Esquive."
		desc: "Augmente l’Esquive du lanceur de deux niveaux. Que l’Esquive du lanceur ait été modifiée ou non, Plaquage, Draco-Charge, Flying Press, Tacle Feu, Tacle Lourd, Dark Body Press, Bulldoboule, Écrasement et Volt Assaut ne peuvent pas rater et infligent des dégâts doublés s’ils sont utilisés contre le lanceur tant qu’il est au combat.",
		shortDesc: "Augmente l’Esquive du lanceur de 2 niveaux.",
		gen8: {
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
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	miracleeye: {
		name: "Œil Miracle",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Tant que la cible reste au combat, son niveau d’Esquive est ignoré lors des tests de Précision contre elle s’il est supérieur à 0, et les attaques de type Psy peuvent toucher la cible si elle est de type Ténèbres. Échoue si la cible est déjà sous cet effet, ou sous l’effet de Clairvoyance ou de Flair.",
		shortDesc: "Psy touche Ténèbres. Esquive ignorée.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "#foresight",
	},
	mirrorcoat: {
		name: "Voile Miroir",
		// Official flavor text: "Une riposte qui contre n’importe quelle capacité spéciale en infligeant le double des dégâts subis."
		desc: "Inflige au dernier Pokémon adverse ayant touché le lanceur avec une attaque spéciale ce tour-ci des dégâts égaux au double des PV perdus par le lanceur à cause de cette attaque. Si le lanceur n’a pas perdu de PV à cause de l’attaque, cette capacité inflige 1 PV de dégâts à la place. Si la position de ce Pokémon adverse n’est plus occupée et qu’un autre Pokémon adverse est sur le terrain, c’est lui qui subit les dégâts. Seul le dernier coup d’une attaque à coups multiples est pris en compte. Échoue si le lanceur n’a pas été touché par une attaque spéciale d’un Pokémon adverse ce tour-ci.",
		shortDesc: "Si le lanceur est touché par une attaque spéciale, renvoie le double des dégâts.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	mirrormove: {
		name: "Mimique",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Le lanceur utilise la dernière capacité utilisée par la cible. La capacité copiée est utilisée contre cette cible, si possible. Échoue si la cible n’a pas encore agi, ou si la dernière capacité utilisée ne peut pas être copiée par cette capacité.",
		shortDesc: "Le lanceur utilise contre la cible la dernière capacité de celle-ci.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	mirrorshot: {
		name: "Miroi-Tir",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "30 % de chances de baisser la Précision de la cible d’un niveau.",
		shortDesc: "30 % de chances de baisser la Précision de la cible d’un niveau.",
	},
	mist: {
		name: "Brume",
		// Official flavor text: "Une brume blanche enveloppe l’équipe du lanceur et empêche la réduction des stats pour cinq tours."
		desc: "Pendant 5 tours, le lanceur et les membres de son équipe sont protégés contre les baisses de niveaux de stats causées par les autres Pokémon. Échoue si l’effet est déjà actif dans le camp du lanceur.",
		shortDesc: "Pendant 5 tours, protège l’équipe du lanceur des baisses de stats.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
			start: "  {POKEMON} s'entoure d'une BRUME!",
			block: "  {POKEMON} est protégé par la BRUME!",
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			start: "  {POKEMON} s'entoure d'une BRUME!",
			block: "  Mais cela échoue !",
		},

		start: "  La brume enveloppe {TEAM} !",
		end: "  La brume autour de {TEAM} s’est dissipée !",
		block: "  {POKEMON} est protégé par la brume !",
	},
	mistball: {
		name: "Ball’Brume",
		// Official flavor text: "Une bulle de brume inflige des dégâts à l’ennemi. Peut aussi réduire son Attaque Spéciale."
		desc: "50 % de chances de baisser l’Attaque Spéciale de la cible d’un niveau.",
		shortDesc: "50 % de chances de baisser l’Atq Spé de la cible d’un niveau.",
	},
	mistyexplosion: {
		name: "Explo-Brume",
		// Official flavor text: "Le lanceur frappe tous les Pokémon autour de lui en explosant, ce qui le met K.O. La puissance de cette attaque augmente si un Champ Brumeux est actif."
		desc: "Si le terrain actuel est Champ Brumeux et que le lanceur est au sol, la puissance de cette capacité est multipliée par 1,5. Le lanceur est mis K.O. après avoir utilisé cette capacité, même si elle échoue faute de cible. Cette capacité ne peut pas s’exécuter si un Pokémon au combat a le talent Moiteur.",
		shortDesc: "Le lanceur est mis K.O. Lanceur sur Champ Brumeux : puissance ×1,5.",
	},
	mistyterrain: {
		name: "Champ Brumeux",
		// Official flavor text: "Pendant cinq tours, les Pokémon au sol ne peuvent pas subir d’altération de statut et la puissance des capacités de type Dragon est divisée par deux."
		desc: "Pendant 5 tours, le terrain devient Champ Brumeux. Pendant l’effet, la puissance des attaques de type Dragon utilisées contre des Pokémon au sol est multipliée par 0,5, et les Pokémon au sol ne peuvent subir ni altération de statut non volatile ni confusion. Les Pokémon au sol peuvent être affectés par Bâillement mais ne peuvent pas s’endormir à cause de son effet. Camouflage donne au lanceur le type Fée, Force Nature devient Pouvoir Lunaire et Force Cachée a 30 % de chances de baisser l’Attaque Spéciale d’un niveau. Échoue si le terrain actuel est déjà Champ Brumeux.",
		shortDesc: "5 tours. Au sol : pas d’altération de statut, Dragon affaibli contre eux.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	moonblast: {
		name: "Pouvoir Lunaire",
		// Official flavor text: "Attaque l’ennemi grâce au pouvoir de la lune. Peut diminuer son Attaque Spéciale."
		desc: "30 % de chances de baisser l’Attaque Spéciale de la cible d’un niveau.",
		shortDesc: "30 % de chances de baisser l’Atq Spé de la cible d’un niveau.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	moongeistbeam: {
		name: "Rayon Spectral",
		// Official flavor text: "Le lanceur attaque avec un rayon de lumière mystérieux. Ignore le talent de la cible."
		desc: "Cette capacité et ses effets ignorent les talents des autres Pokémon.",
		shortDesc: "Ignore les talents des autres Pokémon.",
	},
	moonlight: {
		name: "Rayon Lune",
		// Official flavor text: "Un soin qui restaure des PV au lanceur. Son efficacité varie en fonction de la météo."
		desc: "Le lanceur récupère 1/2 de ses PV max si la météo est Vent mystérieux ou s’il n’y a aucune météo, ou s’il tient un Parapluie Solide, 2/3 de ses PV max si la météo est Soleil intense ou Soleil, et 1/4 de ses PV max si la météo est Pluie battante, Pluie, Tempête de sable ou Neige, le tout arrondi à l’entier le plus proche (0,5 vers le bas).",
		shortDesc: "Soigne le lanceur d’une quantité qui dépend de la météo.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	morningsun: {
		name: "Aurore",
		// Official flavor text: "Un soin qui restaure des PV au lanceur. Son efficacité varie en fonction de la météo."
		desc: "Le lanceur récupère 1/2 de ses PV max si la météo est Vent mystérieux ou s’il n’y a aucune météo, ou s’il tient un Parapluie Solide, 2/3 de ses PV max si la météo est Soleil intense ou Soleil, et 1/4 de ses PV max si la météo est Pluie battante, Pluie, Tempête de sable ou Neige, le tout arrondi à l’entier le plus proche (0,5 vers le bas).",
		shortDesc: "Soigne le lanceur d’une quantité qui dépend de la météo.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	mortalspin: {
		name: "Toupie Éclat",
		// Official flavor text: "Le lanceur attaque en tournant sur lui-même et empoisonne la cible. Il se libère également des effets de capacités comme Étreinte, Ligotage ou Vampigraine."
		desc: "Si cette capacité réussit et que le lanceur n’est pas K.O., les effets de Vampigraine et des capacités de piège prennent fin pour le lanceur, et tous les pièges sont retirés de son côté du terrain. 100 % de chances d’empoisonner la cible.",
		shortDesc: "Empoisonne les adversaires ; libère le lanceur des pièges, étreintes et Vampigraine.",
	},
	mountaingale: {
		name: "Bise Glaciaire",
		// Official flavor text: "Le lanceur envoie un bloc de glace de la taille d'un iceberg sur la cible, ce qui peut aussi l'apeurer."
		desc: "30 % de chances d’apeurer la cible.",
		shortDesc: "30 % de chances d’apeurer la cible.",
	},
	mudbomb: {
		name: "Boue-Bombe",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "30 % de chances de baisser la Précision de la cible d’un niveau.",
		shortDesc: "30 % de chances de baisser la Précision de la cible d’un niveau.",
	},
	muddywater: {
		name: "Ocroupi",
		// Official flavor text: "Le lanceur attaque en projetant de l’eau boueuse. Peut aussi réduire la Précision de l’ennemi."
		desc: "30 % de chances de baisser la Précision de la cible d’un niveau.",
		shortDesc: "30 % de chances de baisser la Précision des adversaires d’un niveau.",
	},
	mudshot: {
		name: "Tir de Boue",
		// Official flavor text: "Le lanceur attaque en projetant de la boue sur l’ennemi. Réduit aussi la Vitesse de la cible."
		desc: "100 % de chances de baisser la Vitesse de la cible d’un niveau.",
		shortDesc: "100 % de chances de baisser la Vitesse de la cible d’un niveau.",
	},
	mudslap: {
		name: "Coud’Boue",
		// Official flavor text: "Le lanceur envoie de la boue au visage de l’ennemi pour infliger des dégâts et baisser sa Précision."
		desc: "100 % de chances de baisser la Précision de la cible d’un niveau.",
		shortDesc: "100 % de chances de baisser la Précision de la cible d’un niveau.",
	},
	mudsport: {
		name: "Lance-Boue",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Pendant 5 tours, la puissance de toutes les attaques de type Électrik utilisées par les Pokémon au combat est multipliée par 0,33. Échoue si cet effet est déjà actif.",
		shortDesc: "Pendant 5 tours, les attaques Électrik ont 1/3 de leur puissance.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	multiattack: {
		name: "Coup Varia-Type",
		// Official flavor text: "Le Pokémon s’entoure d’une puissante énergie avant de foncer sur sa cible. Le type de la capacité dépend de la ROM installée."
		desc: "Le type de cette capacité dépend de la ROM tenue par le lanceur.",
		shortDesc: "Le type varie selon la ROM tenue.",
	},
	mysticalfire: {
		name: "Feu Ensorcelé",
		// Official flavor text: "Attaque avec des flammes brûlantes soufflées de la bouche du lanceur. Diminue l’Attaque Spéciale de l’ennemi."
		desc: "100 % de chances de baisser l’Attaque Spéciale de la cible d’un niveau.",
		shortDesc: "100 % de chances de baisser l’Atq Spé de la cible d’un niveau.",
	},
	mysticalpower: {
		name: "Force Mystique",
		// Official flavor text: "Le lanceur attaque en libérant un pouvoir mystique. Cela augmente également son Attaque Spéciale."
		desc: "100 % de chances d’augmenter l’Attaque Spéciale du lanceur d’un niveau.",
		shortDesc: "100 % de chances d’augmenter l’Atq Spé du lanceur d’un niveau.",
	},
	nastyplot: {
		name: "Machination",
		// Official flavor text: "Stimule l’esprit par de mauvaises pensées. Augmente beaucoup l’Attaque Spéciale du lanceur."
		desc: "Augmente l’Attaque Spéciale du lanceur de deux niveaux.",
		shortDesc: "Augmente l’Atq Spé du lanceur de 2 niveaux.",
	},
	naturalgift: {
		name: "Don Naturel",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Le type et la puissance de cette capacité dépendent de la Baie tenue par le lanceur, et la Baie est perdue. Échoue si le lanceur ne tient pas de Baie, s’il a le talent Maladresse, ou si Embargo ou Zone Magique est actif pour le lanceur.",
		shortDesc: "La puissance et le type dépendent de la Baie du lanceur.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	naturepower: {
		name: "Force Nature",
		// Official flavor text: "Une attaque qui tire sa force de la nature. Son type varie selon le terrain."
		desc: "Cette capacité en déclenche une autre selon le terrain du combat : Triplattaque sur le terrain standard des combats en Wi-Fi, Tonnerre sur Champ Électrifié, Pouvoir Lunaire sur Champ Brumeux, Éco-Sphère sur Champ Herbu et Psyko sur Champ Psychique.",
		shortDesc: "L’attaque dépend du terrain (Triplattaque par défaut).",
		gen6: {
			desc: null, // NEEDS TRANSLATION
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

		move: "La capacité Force Nature se transforme en {MOVE} !",
	},
	naturesmadness: {
		name: "Ire de la Nature",
		// Official flavor text: "Le lanceur déchaîne toute la colère de la nature pour baisser les PV de la cible de moitié."
		desc: "Inflige à la cible des dégâts égaux à la moitié de ses PV actuels, arrondi à l’inférieur, mais d’au moins 1 PV.",
		shortDesc: "Inflige des dégâts égaux à 1/2 des PV actuels de la cible.",
	},
	needlearm: {
		name: "Poing Dard",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "30 % de chances d’apeurer la cible.",
		shortDesc: "30 % de chances d’apeurer la cible.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	neverendingnightmare: {
		name: "Appel des Ombres Éternelles",
		shortDesc: "La puissance est égale à la puissance Z de la capacité de base.",
	},
	nightdaze: {
		name: "Explonuit",
		// Official flavor text: "Le lanceur attaque l’ennemi avec une onde de choc ténébreuse. Peut aussi baisser sa Précision."
		desc: "40 % de chances de baisser la Précision de la cible d’un niveau.",
		shortDesc: "40 % de chances de baisser la Précision de la cible d’un niveau.",
	},
	nightmare: {
		name: "Cauchemar",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "La cible perd 1/4 de ses PV max, arrondi à l’inférieur, à la fin de chaque tour tant qu’elle est endormie. Cette capacité n’affecte la cible que si elle est endormie. L’effet prend fin quand la cible se réveille, même si elle se rendort au cours du même tour.",
		shortDesc: "Une cible endormie perd 1/4 de ses PV max à chaque tour.",

		start: "  {POKEMON} commence à cauchemarder !",
		damage: "  {POKEMON} est prisonnier d’un cauchemar !",
	},
	nightshade: {
		name: "Ombre Nocturne",
		// Official flavor text: "Le lanceur invoque un mirage. Inflige des dégâts équivalents au niveau du lanceur."
		desc: "Inflige à la cible des dégâts égaux au niveau du lanceur.",
		shortDesc: "Inflige des dégâts égaux au niveau du lanceur.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	nightslash: {
		name: "Tranche-Nuit",
		// Official flavor text: "Le lanceur lacère l’ennemi à la première occasion. Taux de critiques élevé."
		desc: "A plus de chances d’infliger un coup critique.",
		shortDesc: "Taux de critique élevé.",
	},
	nobleroar: {
		name: "Râle Mâle",
		// Official flavor text: "Le lanceur pousse un rugissement qui intimide l’ennemi et diminue son Attaque et son Attaque Spéciale."
		desc: "Baisse l’Attaque et l’Attaque Spéciale de la cible d’un niveau.",
		shortDesc: "Baisse l’Attaque et l’Atq Spé de la cible d’un niveau.",
	},
	noretreat: {
		name: "Ultime Bastion",
		// Official flavor text: "Le lanceur voit toutes ses stats augmenter, mais en contrepartie, il ne peut plus fuir ou se retirer du combat."
		desc: "Augmente l’Attaque, la Défense, l’Attaque Spéciale, la Défense Spéciale et la Vitesse du lanceur d’un niveau, mais il ne peut plus être remplacé. Le lanceur peut tout de même être remplacé s’il utilise Relais, Eau Revoir, Dernier Mot, Téléport, Demi-Tour ou Change Éclair. Échoue si le lanceur est déjà empêché d’être remplacé par cet effet.",
		shortDesc: "Augmente toutes les stats d’un niveau (sauf Précision/Esquive). Piège le lanceur.",

		start: "  {POKEMON} ne peut plus fuir à cause d’Ultime Bastion !",
	},
	noxioustorque: {
		name: "Crash Toxique",
		desc: "30 % de chances d’empoisonner la cible.",
		shortDesc: "30 % de chances d’empoisonner la cible.",
	},
	nuzzle: {
		name: "Frotte-Frimousse",
		// Official flavor text: "Le lanceur attaque en frottant ses bajoues chargées d’électricité. Paralyse l’ennemi."
		desc: "100 % de chances de paralyser la cible.",
		shortDesc: "100 % de chances de paralyser la cible.",
	},
	oblivionwing: {
		name: "Mort’Ailes",
		// Official flavor text: "Vole l’énergie de la cible. Rend au lanceur un nombre de PV supérieur ou égal à la moitié des dégâts infligés."
		desc: "Le lanceur récupère 3/4 des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut). Si le lanceur tient une Grosse Racine, les PV récupérés sont multipliés par 1,3, arrondi à l’entier le plus proche (0,5 vers le bas).",
		shortDesc: "Le lanceur récupère 75 % des dégâts infligés.",
	},
	obstruct: {
		name: "Blocage",
		// Official flavor text: "Le lanceur se protège de toutes les attaques. Peut échouer si utilisée plusieurs fois de suite. Baisse beaucoup la Défense de l’assaillant s’il utilise une attaque directe."
		desc: "Le lanceur est protégé de la plupart des attaques des autres Pokémon pendant ce tour, et les Pokémon qui tentent d’entrer en contact avec lui voient leur Défense baisser de deux niveaux. Les capacités n’infligeant pas de dégâts passent à travers cette protection. Cette capacité a 1 chance sur X de réussir, où X vaut 1 au départ et triple à chaque utilisation réussie de cette capacité. X revient à 1 si cette capacité échoue, si la dernière capacité utilisée par le lanceur n’est pas Blockhaus, Rempart Brûlant, Détection, Ténacité, Bouclier Royal, Gardomax, Blocage, Abri, Prévention, Piège de Fil, Pico-Défense ou Garde Large, ou si c’était l’une de ces capacités et que la protection du lanceur a été percée. Échoue si le lanceur agit en dernier ce tour-ci.",
		shortDesc: "Protège des attaques offensives. Contact : -2 Déf.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	oceanicoperetta: {
		name: "Symphonie des Ondines",
		shortDesc: "Aucun effet supplémentaire.",
	},
	octazooka: {
		name: "Octazooka",
		// Official flavor text: "Le lanceur attaque en projetant de l’encre au visage de l’ennemi. Peut aussi baisser sa Précision."
		desc: "50 % de chances de baisser la Précision de la cible d’un niveau.",
		shortDesc: "50 % de chances de baisser la Précision de la cible d’un niveau.",
	},
	octolock: {
		name: "Octoprise",
		// Official flavor text: "Le lanceur empêche l’adversaire de fuir. À chaque tour qui passe, cette capacité baisse la Défense et la Défense Spéciale de la cible."
		desc: "Empêche la cible d’être remplacée. À la fin de chaque tour pendant l’effet, la Défense et la Défense Spéciale de la cible baissent d’un niveau. La cible peut tout de même être remplacée si elle tient une Carapace Mue ou si elle utilise Relais, Eau Revoir, Dernier Mot, Téléport, Demi-Tour ou Change Éclair. L’effet prend fin si le lanceur ou la cible quitte le terrain.",
		shortDesc: "Piège la cible ; baisse sa Déf et sa Déf Spé d’un niveau à chaque tour.",

		start: "  {POKEMON} ne peut plus fuir à cause d’Octoprise !",
	},
	odorsleuth: {
		name: "Flair",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Tant que la cible reste au combat, son niveau d’Esquive est ignoré lors des tests de Précision contre elle s’il est supérieur à 0, et les attaques de type Normal et Combat peuvent toucher la cible si elle est de type Spectre. Échoue si la cible est déjà sous cet effet, ou sous l’effet de Clairvoyance ou d’Œil Miracle.",
		shortDesc: "Normal et Combat touchent Spectre. Esquive ignorée.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	ominouswind: {
		name: "Vent Mauvais",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "10 % de chances d’augmenter l’Attaque, la Défense, l’Attaque Spéciale, la Défense Spéciale et la Vitesse du lanceur d’un niveau.",
		shortDesc: "10 % de chances d’augmenter toutes les stats d’un niveau (sauf Précision/Esquive).",
	},
	orderup: {
		name: "Plat du Jour",
		// Official flavor text: "Le lanceur attaque avec grâce et élégance. Si le lanceur a un Nigirigon dans sa bouche, cette capacité augmente une des statistiques du lanceur selon la forme du Nigirigon."
		desc: "Si un Nigirigon allié a activé son talent Commandant, cette capacité augmente d’un niveau l’Attaque du lanceur si ce Nigirigon est en Forme Courbée, sa Défense s’il est en Forme Affalée, ou sa Vitesse s’il est en Forme Raide. L’effet se produit même si le Nigirigon ayant activé l’effet a depuis été mis K.O.",
		shortDesc: "Courbée/Affalée/Raide avalé : +1 Atq/Déf/Vit.",
	},
	originpulse: {
		name: "Onde Originelle",
		// Official flavor text: "D’innombrables rayons lumineux d’un bleu étincelant s’abattent sur la cible."
		desc: "Aucun effet supplémentaire.",
		shortDesc: "Aucun effet supplémentaire. Touche les adversaires adjacents.",
	},
	outrage: {
		name: "Colère",
		// Official flavor text: "Le lanceur enrage et attaque pendant deux ou trois tours avant de devenir confus."
		desc: "Le lanceur est bloqué sur cette capacité pendant deux ou trois tours et devient confus immédiatement après avoir agi au dernier tour de l’effet, s’il ne l’est pas déjà. Cette capacité vise un Pokémon adverse au hasard à chaque tour. Si le lanceur est empêché d’agir, s’il est endormi au début d’un tour, ou si l’attaque échoue contre la cible au premier tour de l’effet ou au deuxième tour d’un effet de trois tours, l’effet prend fin sans provoquer de confusion. Si cette capacité est appelée par Blabla Dodo alors que le lanceur est endormi, elle est utilisée pendant un seul tour et ne rend pas le lanceur confus.",
		shortDesc: "Dure 2 à 3 tours. Rend ensuite le lanceur confus.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	overdrive: {
		name: "Overdrive",
		// Official flavor text: "Le lanceur gratte ses cordes de guitare ou de basse pour créer de violentes vibrations sonores qui blessent la cible."
		desc: "Aucun effet supplémentaire.",
		shortDesc: "Aucun effet supplémentaire. Touche les adversaires.",
	},
	overheat: {
		name: "Surchauffe",
		// Official flavor text: "Attaque l’ennemi à pleine puissance. Le contrecoup baisse beaucoup l’Attaque Spéciale du lanceur."
		desc: "Baisse l’Attaque Spéciale du lanceur de deux niveaux.",
		shortDesc: "Baisse l’Atq Spé du lanceur de 2 niveaux.",
	},
	painsplit: {
		name: "Balance",
		// Official flavor text: "Le lanceur ajoute ses PV à ceux de sa cible et les répartit équitablement."
		desc: "Les PV du lanceur et de la cible deviennent la moyenne de leurs PV actuels, arrondie à l’inférieur, sans dépasser les PV max de chacun.",
		shortDesc: "Partage équitablement les PV du lanceur et de la cible.",

		activate: "  Le lanceur et sa cible partagent leurs PV !",
	},
	paleowave: {
		name: null, // NEEDS TRANSLATION: not in PokeAPI
		desc: "20 % de chances de baisser l’Attaque de la cible d’un niveau.",
		shortDesc: "20 % de chances de baisser l’Attaque de la cible d’un niveau.",
	},
	paraboliccharge: {
		name: "Parabocharge",
		// Official flavor text: "Inflige des dégâts à tous les Pokémon autour du lanceur. Il récupère en PV la moitié des dégâts infligés."
		desc: "Le lanceur récupère 1/2 des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut). Si le lanceur tient une Grosse Racine, les PV récupérés sont multipliés par 1,3, arrondi à l’entier le plus proche (0,5 vers le bas).",
		shortDesc: "Le lanceur récupère 50 % des dégâts infligés.",
	},
	partingshot: {
		name: "Dernier Mot",
		// Official flavor text: "Menace l’ennemi dans une ultime tirade avant de changer de place avec un autre Pokémon. Réduit l’Attaque et l’Attaque Spéciale de l’ennemi."
		desc: "Baisse l’Attaque et l’Attaque Spéciale de la cible d’un niveau. Si cette capacité réussit, le lanceur se retire même s’il est piégé et est immédiatement remplacé par un membre de l’équipe choisi. Le lanceur ne se retire pas si les niveaux d’Attaque et d’Attaque Spéciale de la cible n’ont pas été modifiés, ou s’il n’y a aucun membre de l’équipe non K.O.",
		shortDesc: "Baisse l’Atq et l’Atq Spé de la cible d’un niveau. Le lanceur est remplacé.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		heal: "#memento",
		switchOut: "#uturn",
	},
	payback: {
		name: "Représailles",
		// Official flavor text: "Le lanceur charge son énergie, puis attaque. La puissance est doublée si le lanceur agit après l’ennemi."
		desc: "La puissance double si le lanceur agit après la cible ce tour-ci, y compris pour les actions effectuées grâce à Sommation ou au talent Danseuse. Entrer au combat ne compte pas comme une action.",
		shortDesc: "La puissance double si le lanceur agit après la cible.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	payday: {
		name: "Jackpot",
		// Official flavor text: "Des pièces sont lancées sur l’ennemi. Permet d’obtenir de l’argent à la fin du combat."
		desc: "Aucun effet supplémentaire.",
		shortDesc: "Éparpille des pièces.",

		activate: "  Il pleut des pièces !",
	},
	peck: {
		name: "Picpic",
		shortDesc: "Aucun effet supplémentaire.",
	},
	perishsong: {
		name: "Requiem",
		// Official flavor text: "Tout Pokémon qui entend ce requiem est K.O. dans trois tours à moins qu’il ne soit remplacé."
		desc: "Chaque Pokémon au combat reçoit un compte à rebours de Requiem de 4 s’il n’en a pas déjà un. À la fin de chaque tour, y compris celui de l’utilisation, le compte à rebours de tous les Pokémon au combat baisse de 1, et les Pokémon sont mis K.O. s’il atteint 0. Le compte à rebours est retiré des Pokémon qui se retirent. Si un Pokémon utilise Relais alors qu’il a un compte à rebours, son remplaçant en hérite et le décompte continue.",
		shortDesc: "Tous les Pokémon au combat seront K.O. dans 3 tours.",

		start: "  Les Pokémon au combat seront K.O. dans trois tours !",
		activate: "  Le compte à rebours de Requiem {POKEMON:de} descend à {NUMBER} !",
	},
	petalblizzard: {
		name: "Tempête Florale",
		// Official flavor text: "Déclenche une violente tempête de fleurs qui inflige des dégâts à tous les Pokémon alentour."
		desc: "Aucun effet supplémentaire.",
		shortDesc: "Aucun effet supplémentaire. Touche les Pokémon adjacents.",
	},
	petaldance: {
		name: "Danse Fleurs",
		// Official flavor text: "Le lanceur attaque en projetant des pétales pendant deux à trois tours avant de céder à la confusion."
		desc: "Le lanceur est bloqué sur cette capacité pendant deux ou trois tours et devient confus immédiatement après avoir agi au dernier tour de l’effet, s’il ne l’est pas déjà. Cette capacité vise un Pokémon adverse au hasard à chaque tour. Si le lanceur est empêché d’agir, s’il est endormi au début d’un tour, ou si l’attaque échoue contre la cible au premier tour de l’effet ou au deuxième tour d’un effet de trois tours, l’effet prend fin sans provoquer de confusion. Si cette capacité est appelée par Blabla Dodo alors que le lanceur est endormi, elle est utilisée pendant un seul tour et ne rend pas le lanceur confus.",
		shortDesc: "Dure 2 à 3 tours. Rend ensuite le lanceur confus.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	phantomforce: {
		name: "Hantise",
		// Official flavor text: "Le lanceur disparaît au premier tour et frappe au second. Cette attaque passe outre les protections."
		desc: "Si cette capacité réussit, elle perce Blockhaus, Détection, Bouclier Royal, Abri ou Pico-Défense de la cible pour ce tour, ce qui permet aux autres Pokémon d’attaquer la cible normalement. Si le camp de la cible est protégé par Vigilance, Tatamigaeshi, Prévention ou Garde Large, cette protection est également brisée pour ce tour et les autres Pokémon peuvent attaquer normalement le camp de la cible. Cette attaque se charge au premier tour et s’exécute au second. Au premier tour, le lanceur évite toutes les attaques. Si le lanceur tient une Herbe Pouvoir, la capacité s’exécute en un seul tour.",
		shortDesc: "Disparaît au tour 1. Frappe au tour 2. Brise les protections.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		prepare: "#shadowforce",
		activate: "#shadowforce",
	},
	photongeyser: {
		name: "Photo-Geyser",
		// Official flavor text: "Le lanceur fait jaillir un pilier de lumière. Compare l’Attaque et l’Attaque Spéciale, et utilise celle qui infligera le plus de dégâts."
		desc: "Cette capacité devient une attaque physique si l’Attaque du lanceur est supérieure à son Attaque Spéciale, en tenant compte des modifications de niveaux de stats. Cette capacité et ses effets ignorent les talents des autres Pokémon.",
		shortDesc: "Physique si Atq > Atq Spé du lanceur. Ignore les talents.",
	},
	pikapapow: {
		name: "Pika-Fracas",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "La puissance est égale à la plus grande des deux valeurs suivantes : (Bonheur du lanceur × 2/5), arrondi à l’inférieur, ou 1.",
		shortDesc: "Bonheur maximal : puissance de 102. Ne peut pas rater.",
	},
	pinmissile: {
		name: "Dard-Nuée",
		// Official flavor text: "Envoie une rafale de dards. Peut toucher de deux à cinq fois."
		desc: "Frappe de deux à cinq fois. 35 % de chances de frapper deux ou trois fois et 15 % de chances de frapper quatre ou cinq fois. Si l’un des coups détruit le clone de la cible, celle-ci subit les dégâts des coups restants. Si le lanceur a le talent Multi-Coups, cette capacité frappe toujours cinq fois. Si le lanceur tient un Dé Pipé, cette capacité frappe de 4 à 5 fois.",
		shortDesc: "Frappe de 2 à 5 fois en un tour.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	plasmafists: {
		name: "Plasma Punch",
		// Official flavor text: "Le lanceur attaque en projetant de l’électricité avec ses poings. Convertit les capacités de type Normal en type Électrik."
		desc: "Si cette capacité réussit, les capacités de type Normal deviennent de type Électrik pendant ce tour.",
		shortDesc: "Les capacités Normal deviennent de type Électrik ce tour-ci.",
	},
	playnice: {
		name: "Camaraderie",
		// Official flavor text: "L’ennemi se lie d’amitié avec le lanceur et perd sa combativité, diminuant son Attaque."
		desc: "Baisse l’Attaque de la cible d’un niveau.",
		shortDesc: "Baisse l’Attaque de la cible d’un niveau.",
	},
	playrough: {
		name: "Câlinerie",
		// Official flavor text: "Attaque l’ennemi avec un câlin. Peut diminuer son Attaque."
		desc: "10 % de chances de baisser l’Attaque de la cible d’un niveau.",
		shortDesc: "10 % de chances de baisser l’Attaque de la cible d’un niveau.",
	},
	pluck: {
		name: "Picore",
		// Official flavor text: "Le lanceur picore la cible. Si cette dernière tient une Baie, le lanceur la mange et profite de ses effets."
		desc: "Si cette capacité réussit et que le lanceur n’est pas K.O., il vole la Baie que tient la cible, s’il y en a une, et la mange immédiatement, profitant de ses effets même si l’objet du lanceur est ignoré. Les objets perdus à cause de cette capacité ne peuvent pas être récupérés avec Recyclage ou le talent Récolte.",
		shortDesc: "Le lanceur vole et mange la Baie de la cible.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		removeItem: "#bugbite",
	},
	poisonfang: {
		name: "Crochet Venin",
		// Official flavor text: "Le lanceur mord l’ennemi de ses crocs toxiques. Peut aussi l’empoisonner gravement."
		desc: "50 % de chances d’empoisonner gravement la cible.",
		shortDesc: "50 % de chances d’empoisonner gravement la cible.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	poisongas: {
		name: "Gaz Toxik",
		// Official flavor text: "Un nuage de gaz toxique est projeté au visage de l’ennemi pour l’empoisonner."
		desc: "Empoisonne la cible.",
		shortDesc: "Empoisonne les adversaires.",
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	poisonjab: {
		name: "Direct Toxik",
		// Official flavor text: "Attaque l’ennemi avec un tentacule, un bras, ou un autre membre plein de poison. Peut aussi l’empoisonner."
		desc: "30 % de chances d’empoisonner la cible.",
		shortDesc: "30 % de chances d’empoisonner la cible.",
	},
	poisonpowder: {
		name: "Poudre Toxik",
		// Official flavor text: "Une poudre toxique empoisonne l’ennemi."
		desc: "Empoisonne la cible.",
		shortDesc: "Empoisonne la cible.",
	},
	poisonsting: {
		name: "Dard-Venin",
		// Official flavor text: "Un dard toxique qui transperce l’ennemi. Peut aussi l’empoisonner."
		desc: "30 % de chances d’empoisonner la cible.",
		shortDesc: "30 % de chances d’empoisonner la cible.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	poisontail: {
		name: "Queue-Poison",
		// Official flavor text: "Attaque à taux de critiques élevé. Peut aussi empoisonner l’ennemi."
		desc: "10 % de chances d’empoisonner la cible et plus de chances d’infliger un coup critique.",
		shortDesc: "Taux de critique élevé. 10 % de chances d’empoisonner.",
	},
	polarflare: {
		name: null, // NEEDS TRANSLATION: not in PokeAPI
		desc: "10 % de chances de geler la cible. Cette capacité ne peut pas dégeler une cible gelée. Si cette capacité réussit contre au moins une cible et que le lanceur est un Ramnarok, il passe en Forme Radieuse s’il est en Forme Dormante, ou en Forme Dormante s’il est en Forme Radieuse. Ce changement de forme n’a pas lieu si le Ramnarok a le talent Sans Limite. La Forme Radieuse redevient la Forme Dormante quand Ramnarok n’est plus au combat.",
		shortDesc: "10 % de chances de geler les adversaires. Ramnarok change de forme.",
	},
	pollenpuff: {
		name: "Boule Pollen",
		// Official flavor text: "Utilisée sur l’ennemi, envoie une boule explosive qui fait des dégâts\u00A0; sur un allié, donne du bon pollen nutritif qui fait récupérer des PV."
		desc: "Si la cible est un allié, cette capacité lui rend 1/2 de ses PV max, arrondi à l’inférieur, au lieu de lui infliger des dégâts.",
		shortDesc: "Si la cible est un allié, la soigne de 50 % de ses PV max.",
	},
	poltergeist: {
		name: "Esprit Frappeur",
		shortDesc: "Échoue si la cible ne tient pas d’objet.",

		activate: "  {POKEMON} est attaqué par {INFLECT:ITEM:ms=son propre:fs=sa propre:mp=ses propres:fp=ses propres} {ITEM:classified} !",
	},
	populationbomb: {
		name: "Prolifération",
		// Official flavor text: "Le lanceur et ses congénères prolifèrent en masse et attaquent ensemble d'une à dix fois d'affilée."
		desc: "Frappe dix fois. La Précision est testée pour chaque coup, et l’attaque prend fin si la cible évite un coup. Si l’un des coups détruit le clone de la cible, celle-ci subit les dégâts des coups restants. Si le lanceur a le talent Multi-Coups, cette capacité frappe toujours dix fois. Si le lanceur tient un Dé Pipé, cette capacité frappe de quatre à dix fois au hasard, sans test de Précision entre les coups.",
		shortDesc: "Frappe 10 fois. Chaque coup peut rater.",
	},
	pounce: {
		name: "Bond",
		// Official flavor text: "Le lanceur attaque en bondissant sur la cible, ce qui baisse la Vitesse de celle-ci."
		desc: "100 % de chances de baisser la Vitesse de la cible d’un niveau.",
		shortDesc: "100 % de chances de baisser la Vitesse de la cible d’un niveau.",
	},
	pound: {
		name: "Écras’Face",
		shortDesc: "Aucun effet supplémentaire.",
	},
	powder: {
		name: "Nuée de Poudre",
		// Official flavor text: "L’ennemi est pris dans un nuage de poudre. S’il utilise une capacité de type Feu lors du même tour, le nuage explose et lui inflige des dégâts."
		desc: "Si la cible utilise une capacité de type Feu ce tour-ci, celle-ci ne peut pas s’exécuter et la cible perd 1/4 de ses PV max, arrondi à l’entier le plus proche (0,5 vers le haut). Cet effet ne se produit pas si la capacité de type Feu est empêchée par le talent Mer Primaire.",
		shortDesc: "Si la cible utilise une capacité Feu, elle perd 1/4 de ses PV max.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} est couvert de poudre !",
		activate: "  La nuée de poudre entre en réaction avec {MOVE} et explose !",
	},
	powdersnow: {
		name: "Poudreuse",
		// Official flavor text: "Le lanceur projette de la neige poudreuse. Peut aussi geler l’ennemi."
		desc: "10 % de chances de geler la cible.",
		shortDesc: "10 % de chances de geler les adversaires.",
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	powergem: {
		name: "Rayon Gemme",
		shortDesc: "Aucun effet supplémentaire.",
	},
	powersplit: {
		name: "Partage Force",
		// Official flavor text: "Additionne l’Attaque Spéciale et l’Attaque du lanceur et de sa cible et les redistribue équitablement entre les deux."
		desc: "L’Attaque et l’Attaque Spéciale du lanceur et de la cible deviennent respectivement égales à la moyenne de l’Attaque et de l’Attaque Spéciale du lanceur et de la cible, arrondie à l’inférieur. Les modifications de niveaux de stats ne sont pas affectées.",
		shortDesc: "Fait la moyenne de l’Attaque et de l’Atq Spé avec la cible.",

		activate: "  {POKEMON} additionne sa force à celle de sa cible et redistribue le tout équitablement !",
	},
	powerswap: {
		name: "Permuforce",
		// Official flavor text: "Pouvoir qui échange les modifications de l’Attaque Spéciale et de l’Attaque du lanceur avec la cible."
		desc: "Le lanceur échange ses modifications de niveaux d’Attaque et d’Attaque Spéciale avec la cible.",
		shortDesc: "Échange les modifications d’Attaque et d’Atq Spé avec la cible.",
	},
	powershift: {
		name: "Échange Force",
		// Official flavor text: "Le lanceur échange son Attaque avec sa Défense."
		desc: "Le lanceur échange ses stats d’Attaque et de Défense, et les modifications de niveaux de stats restent sur leurs stats respectives. Cette capacité peut être réutilisée pour rétablir les stats. Si le lanceur utilise Relais, son remplaçant a ses stats d’Attaque et de Défense échangées si l’effet est actif. Si les stats du lanceur sont recalculées à la suite d’un changement de forme pendant que ses stats sont échangées, cet effet est ignoré mais reste actif pour Relais.",
		shortDesc: "Échange l’Attaque et la Défense du lanceur.",

		start: "  {POKEMON} échange sa puissance offensive et sa puissance défensive !",
		end: "#.start",
	},
	powertrick: {
		name: "Astuce Force",
		// Official flavor text: "Le lanceur utilise ses pouvoirs psychiques pour échanger sa Défense et son Attaque."
		desc: "Le lanceur échange ses stats d’Attaque et de Défense, et les modifications de niveaux de stats restent sur leurs stats respectives. Cette capacité peut être réutilisée pour rétablir les stats. Si le lanceur utilise Relais, son remplaçant a ses stats d’Attaque et de Défense échangées si l’effet est actif. Si les stats du lanceur sont recalculées à la suite d’un changement de forme pendant que ses stats sont échangées, cet effet est ignoré mais reste actif pour Relais.",
		shortDesc: "Échange l’Attaque et la Défense du lanceur.",

		start: "  {POKEMON} intervertit son Attaque et sa Défense !",
		end: "#.start",
	},
	powertrip: {
		name: "Arrogance",
		// Official flavor text: "Ivre de puissance, le lanceur attaque de toutes ses forces. Plus ses stats ont été augmentées, plus la puissance de l’attaque est élevée."
		desc: "La puissance est égale à 20+(X × 20), où X est le total des modifications de niveaux de stats du lanceur supérieures à 0.",
		shortDesc: "Puissance de 20, +20 pour chaque augmentation de stat du lanceur.",
	},
	poweruppunch: {
		name: "Poing Boost",
		// Official flavor text: "À force de frapper, les poings deviennent plus durs. Augmente l’Attaque du lanceur si l’ennemi est touché."
		desc: "100 % de chances d’augmenter l’Attaque du lanceur d’un niveau.",
		shortDesc: "100 % de chances d’augmenter l’Attaque du lanceur d’un niveau.",
	},
	powerwhip: {
		name: "Mégafouet",
		shortDesc: "Aucun effet supplémentaire.",
	},
	precipiceblades: {
		name: "Lame Pangéenne",
		// Official flavor text: "Le Pokémon transforme la puissance de la terre et attaque la cible avec une lame acérée."
		desc: "Aucun effet supplémentaire.",
		shortDesc: "Aucun effet supplémentaire. Touche les adversaires adjacents.",
	},
	present: {
		name: "Cadeau",
		// Official flavor text: "Le lanceur attaque en offrant un cadeau piégé à la cible. Peut cependant restaurer certains de ses PV."
		desc: "Si cette capacité réussit, elle inflige des dégâts à la cible ou la soigne. 40 % de chances d’avoir une puissance de 40, 30 % de chances pour une puissance de 80, 10 % de chances pour une puissance de 120, et 20 % de chances de soigner la cible de 1/4 de ses PV max, arrondi à l’inférieur.",
		shortDesc: "Puissance de 40, 80 ou 120, ou soigne la cible de 1/4 de ses PV max.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	prismaticlaser: {
		name: "Laser Prisme",
		// Official flavor text: "Le lanceur utilise la puissance d’un prisme pour envoyer un laser destructeur, mais il doit se reposer au tour suivant."
		desc: "Si cette capacité réussit, le lanceur doit se recharger au tour suivant et ne peut pas choisir de capacité.",
		shortDesc: "Le lanceur ne peut pas agir au tour suivant.",
	},
	protect: {
		name: "Abri",
		// Official flavor text: "Le lanceur se protège de toutes les attaques. Peut échouer si utilisée plusieurs fois de suite."
		desc: "Le lanceur est protégé de la plupart des attaques des autres Pokémon pendant ce tour. Cette capacité a 1 chance sur X de réussir, où X vaut 1 au départ et triple à chaque utilisation réussie de cette capacité. X revient à 1 si cette capacité échoue, si la dernière capacité utilisée par le lanceur n’est pas Blockhaus, Rempart Brûlant, Détection, Ténacité, Bouclier Royal, Gardomax, Blocage, Abri, Prévention, Piège de Fil, Pico-Défense ou Garde Large, ou si c’était l’une de ces capacités et que la protection du lanceur a été percée. Échoue si le lanceur agit en dernier ce tour-ci.",
		shortDesc: "Empêche les capacités d’affecter le lanceur ce tour-ci.",
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
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} est prêt à se protéger !",
		block: "  {POKEMON} se protège !",
	},
	psybeam: {
		name: "Rafale Psy",
		// Official flavor text: "Un étrange rayon frappe l’ennemi. Peut aussi le rendre confus."
		desc: "10 % de chances de rendre la cible confuse.",
		shortDesc: "10 % de chances de rendre la cible confuse.",
	},
	psyblade: {
		name: "Lame Psychique",
		// Official flavor text: "Le lanceur lacère la cible à l'aide d'une lame intangible. S'il se trouve dans un champ électrifié, la puissance de cette capacité augmente de 50 %."
		desc: "Si le terrain actuel est Champ Électrifié, la puissance de cette capacité est multipliée par 1,5.",
		shortDesc: "Sur Champ Électrifié : puissance ×1,5.",
	},
	psychic: {
		name: "Psyko",
		// Official flavor text: "Une puissante force télékinétique frappe l’ennemi. Peut aussi faire baisser sa Défense Spéciale."
		desc: "10 % de chances de baisser la Défense Spéciale de la cible d’un niveau.",
		shortDesc: "10 % de chances de baisser la Déf Spé de la cible d’un niveau.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	psychicfangs: {
		name: "Psycho-Croc",
		// Official flavor text: "Le lanceur mord la cible avec ses pouvoirs psychiques. Brise aussi les barrières comme Mur Lumière et Protection."
		desc: "Si cette attaque ne rate pas, les effets de Protection, Mur Lumière et Voile Aurore prennent fin du côté de la cible avant le calcul des dégâts.",
		shortDesc: "Détruit les écrans, sauf si la cible est immunisée.",
	},
	psychicnoise: {
		name: "Dissonance Psy",
		// Official flavor text: "Le lanceur attaque avec des ondes sonores dissonantes. Cela empêche la cible de récupérer des PV à l'aide de capacités, talents ou objets tenus pendant 2 tours."
		desc: "Pendant 2 tours, la cible ne peut récupérer aucun PV tant qu’elle reste au combat. Pendant l’effet, les capacités de soin et d’absorption sont inutilisables, et les talents et objets qui soignent ne la soignent pas. Si un Pokémon affecté utilise Relais, son remplaçant reste incapable de récupérer des PV. Balance et le talent Régé-Force ne sont pas affectés.",
		shortDesc: "Pendant 2 tours, empêche la cible de se soigner.",
	},
	psychicterrain: {
		name: "Champ Psychique",
		// Official flavor text: "Pendant cinq tours, les Pokémon au sol ne peuvent plus subir d’attaques prioritaires et la puissance des capacités de type Psy augmente."
		desc: "Pendant 5 tours, le terrain devient Champ Psychique. Pendant l’effet, la puissance des attaques de type Psy lancées par des Pokémon au sol est multipliée par 1,3, et les Pokémon au sol ne peuvent pas être touchés par des capacités de priorité supérieure à 0, sauf si la cible est un allié. Camouflage donne au lanceur le type Psy, Force Nature devient Psyko et Force Cachée a 30 % de chances de baisser la Vitesse de la cible d’un niveau. Échoue si le terrain actuel est déjà Champ Psychique.",
		shortDesc: "5 tours. Au sol : capacités Psy renforcées, protégé de la priorité.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	psychoboost: {
		name: "Psycho-Boost",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Baisse l’Attaque Spéciale du lanceur de deux niveaux.",
		shortDesc: "Baisse l’Atq Spé du lanceur de 2 niveaux.",
	},
	psychocut: {
		name: "Coupe Psycho",
		// Official flavor text: "Le lanceur entaille l’ennemi grâce à des lames faites d’énergie psychique. Taux de critiques élevé."
		desc: "A plus de chances d’infliger un coup critique.",
		shortDesc: "Taux de critique élevé.",
	},
	psychoshift: {
		name: "Échange Psy",
		// Official flavor text: "Le lanceur transfère ses problèmes de statut à l’ennemi grâce à son pouvoir de suggestion."
		desc: "L’altération de statut non volatile du lanceur est transférée à la cible, puis le lanceur est soigné. Échoue si le lanceur n’a pas d’altération de statut non volatile ou si la cible en a déjà une.",
		shortDesc: "Transfère l’altération de statut du lanceur à la cible.",
	},
	psychup: {
		name: "Boost",
		// Official flavor text: "Une autohypnose qui permet au lanceur de copier les changements de stats de la cible."
		desc: "Le lanceur copie toutes les modifications de niveaux de stats actuelles de la cible.",
		shortDesc: "Copie les modifications de stats actuelles de la cible.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	psyshieldbash: {
		name: "Sprint Bouclier",
		// Official flavor text: "Le lanceur s'enveloppe d'énergie psychique et frappe sa cible de plein fouet. Cela augmente également la Défense du lanceur."
		desc: "100 % de chances d’augmenter la Défense du lanceur d’un niveau.",
		shortDesc: "100 % de chances d’augmenter la Défense du lanceur d’un niveau.",
	},
	psyshock: {
		name: "Choc Psy",
		// Official flavor text: "Le lanceur matérialise des ondes mystérieuses qu’il projette sur l’ennemi. Inflige des dégâts physiques."
		desc: "Inflige des dégâts à la cible en fonction de sa Défense au lieu de sa Défense Spéciale.",
		shortDesc: "Dégâts calculés sur la Défense de la cible, pas sa Déf Spé.",
	},
	psystrike: {
		name: "Frappe Psy",
		// Official flavor text: "Le lanceur matérialise des ondes mystérieuses qu’il projette sur l’ennemi. Inflige des dégâts physiques."
		desc: "Inflige des dégâts à la cible en fonction de sa Défense au lieu de sa Défense Spéciale.",
		shortDesc: "Dégâts calculés sur la Défense de la cible, pas sa Déf Spé.",
	},
	psywave: {
		name: "Vague Psy",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Inflige à la cible des dégâts égaux à (niveau du lanceur) × (X + 50) / 100, où X est un nombre aléatoire entre 0 et 100, arrondi à l’inférieur, mais d’au moins 1 PV.",
		shortDesc: "Dégâts aléatoires de 0,5× à 1,5× le niveau du lanceur.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	pulverizingpancake: {
		name: "Gare au Ronflex",
		shortDesc: "Aucun effet supplémentaire.",
	},
	punishment: {
		name: "Punition",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "La puissance est égale à 60+(X × 20), où X est le total des modifications de niveaux de stats de la cible supérieures à 0, sans dépasser une puissance de 200.",
		shortDesc: "Puissance de 60, +20 pour chaque augmentation de stat de la cible.",
	},
	purify: {
		name: "Purification",
		// Official flavor text: "Le lanceur soigne les altérations de statut de la cible, ce qui lui permet de regagner des PV."
		desc: "La cible est soignée si elle a une altération de statut non volatile. Si la cible a été soignée, le lanceur récupère 1/2 de ses PV max, arrondi à l’inférieur.",
		shortDesc: "Soigne le statut de la cible ; le lanceur récupère alors 1/2 de ses PV max.",
	},
	pursuit: {
		name: "Poursuite",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Si un Pokémon adverse se retire ce tour-ci, cette capacité le touche avant qu’il quitte le terrain, même s’il n’était pas la cible d’origine. Si le lanceur agit après un adversaire utilisant Eau Revoir, Dernier Mot, Téléport, Demi-Tour ou Change Éclair, mais pas Relais, il touche cet adversaire avant qu’il quitte le terrain. La puissance double et la capacité ne peut pas rater si le lanceur touche un adversaire qui se retire, et le tour du lanceur est alors terminé ; si un adversaire est mis K.O. de cette façon, le Pokémon remplaçant n’entre au combat qu’à la fin du tour.",
		shortDesc: "Si un adversaire se retire, le frappe avec une puissance ×2.",
		gen7: {
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
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		activate: "  ({TARGET} est en train de se retirer...)",
	},
	pyroball: {
		name: "Ballon Brûlant",
		// Official flavor text: "Le lanceur attaque avec un ballon fait à partir d’un caillou enflammé. Peut aussi brûler la cible."
		desc: "10 % de chances de brûler la cible.",
		shortDesc: "10 % de chances de brûler la cible. Dégèle le lanceur.",
	},
	quash: {
		name: "À la Queue",
		// Official flavor text: "Retient la cible de force, l’obligeant à agir en dernier."
		desc: "La cible agit après tous les autres Pokémon ce tour-ci, quelle que soit la priorité de la capacité qu’elle a choisie. Échoue si la cible a déjà agi ce tour-ci.",
		shortDesc: "Force la cible à agir en dernier ce tour-ci.",

		activate: "  {TARGET} doit retourner à la queue !",
	},
	quickattack: {
		name: "Vive-Attaque",
		// Official flavor text: "Le lanceur fonce sur l’ennemi si rapidement qu’on parvient à peine à le discerner. Frappe en priorité."
		desc: "Aucun effet supplémentaire.",
		shortDesc: "Frappe généralement en premier.",
	},
	quickguard: {
		name: "Prévention",
		// Official flavor text: "Le lanceur et son équipe sont protégés contre les attaques prioritaires."
		desc: "Le lanceur et les membres de son équipe sont protégés pendant ce tour des attaques de priorité d’origine ou modifiée supérieure à 0 lancées par les autres Pokémon, y compris les alliés. Cette capacité modifie la même probabilité de réussite de 1 chance sur X que les autres capacités de protection, où X vaut 1 au départ et triple à chaque utilisation réussie de cette capacité, mais n’utilise pas cette probabilité pour déterminer si elle échoue. X revient à 1 si cette capacité échoue, si la dernière capacité utilisée par le lanceur n’est pas Blockhaus, Rempart Brûlant, Détection, Ténacité, Bouclier Royal, Gardomax, Blocage, Abri, Prévention, Piège de Fil, Pico-Défense ou Garde Large, ou si c’était l’une de ces capacités et que la protection du lanceur a été percée. Échoue si le lanceur agit en dernier ce tour-ci ou si cette capacité est déjà active pour le camp du lanceur.",
		shortDesc: "Protège l’équipe des attaques prioritaires ce tour-ci.",
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

		start: "  {TEAM} est protégé par la capacité Prévention !",
		block: "  {POKEMON} est protégé par la capacité Prévention !",
	},
	quiverdance: {
		name: "Papillodanse",
		// Official flavor text: "Une danse mystique dont le rythme parfait augmente l’Attaque Spéciale, la Défense Spéciale et la Vitesse du lanceur."
		desc: "Augmente l’Attaque Spéciale, la Défense Spéciale et la Vitesse du lanceur d’un niveau.",
		shortDesc: "Augmente l’Atq Spé, la Déf Spé et la Vitesse du lanceur d’un niveau.",
	},
	rage: {
		name: "Frénésie",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Une fois cette capacité utilisée avec succès, l’Attaque du lanceur augmente d’un niveau chaque fois qu’il est touché par l’attaque d’un autre Pokémon, tant que cette capacité est choisie.",
		shortDesc: "Augmente l’Attaque du lanceur d’un niveau s’il est touché pendant l’utilisation.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	ragefist: {
		name: "Poing de Colère",
		// Official flavor text: "Le lanceur transforme sa colère en énergie pour attaquer. Plus il a subi d'attaques, plus la puissance de cette capacité augmente."
		desc: "La puissance est égale à 50+(X × 50), où X est le nombre total de fois où le lanceur a été touché par une attaque infligeant des dégâts pendant le combat, même s’il n’a pas perdu de PV à cause de l’attaque. X ne peut pas dépasser 6 et n’est pas réinitialisé quand le lanceur se retire ou est mis K.O. Chaque coup d’une attaque à coups multiples est compté, mais pas les dégâts de confusion.",
		shortDesc: "+50 de puissance par coup reçu par le lanceur. 6 coups max.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	ragepowder: {
		name: "Poudre Fureur",
		// Official flavor text: "Le lanceur s’asperge d’une poudre irritante pour attirer l’attention. Il attire toutes les attaques ennemies."
		desc: "Jusqu’à la fin du tour, toutes les attaques à cible unique du camp adverse sont redirigées vers le lanceur. Ces attaques sont redirigées vers le lanceur avant de pouvoir être renvoyées par Reflet Magik ou le talent Miroir Magik, ou attirées par les talents Paratonnerre ou Lavabo. Échoue s’il ne s’agit pas d’un combat en Duo ou d’un Combat Royal. Cet effet est ignoré tant que le lanceur est sous l’effet de Chute Libre.",
		shortDesc: "Les capacités adverses ciblent le lanceur ce tour-ci.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "#followme",
		startFromZEffect: "#followme",
	},
	ragingbull: {
		name: "Taurogne",
		// Official flavor text: "Le lanceur effectue un plaquage comme un taureau enragé. Le type de cette capacité dépend de la forme du lanceur. Peut aussi briser les barrières comme Mur Lumière et Protection."
		desc: "Si cette attaque ne rate pas, les effets de Protection, Mur Lumière et Voile Aurore prennent fin du côté de la cible avant le calcul des dégâts. Si le lanceur est un Tauros de Paldea, le type de cette capacité change en conséquence : type Combat pour la Race Combative, type Feu pour la Race Flamboyante et type Eau pour la Race Aquatique.",
		shortDesc: "Détruit les écrans. Le type dépend de la forme du lanceur.",

		activate: "  {POKEMON} brise les protections de {TEAM} !",
	},
	ragingfury: {
		name: "Grand Courroux",
		// Official flavor text: "Le lanceur se déchaîne et attaque en projetant de violentes flammes pendant deux ou trois tours. Il devient ensuite confus."
		desc: "Le lanceur est bloqué sur cette capacité pendant deux ou trois tours et devient confus immédiatement après avoir agi au dernier tour de l’effet, s’il ne l’est pas déjà. Cette capacité vise un Pokémon adverse au hasard à chaque tour. Si le lanceur est empêché d’agir, s’il est endormi au début d’un tour, ou si l’attaque échoue contre la cible au premier tour de l’effet ou au deuxième tour d’un effet de trois tours, l’effet prend fin sans provoquer de confusion. Si cette capacité est appelée par Blabla Dodo alors que le lanceur est endormi, elle est utilisée pendant un seul tour et ne rend pas le lanceur confus.",
		shortDesc: "Dure 2 à 3 tours. Rend ensuite le lanceur confus.",
	},
	raindance: {
		name: "Danse Pluie",
		// Official flavor text: "Invoque de fortes pluies qui durent cinq tours, augmentant la puissance des capacités de type Eau et baissant celle des capacités de type Feu."
		desc: "Pendant 5 tours, la météo devient Pluie. Pendant l’effet, les dégâts des attaques de type Eau sont multipliés par 1,5 et ceux des attaques de type Feu par 0,5. Dure 8 tours si le lanceur tient une Roche Humide. Échoue si la météo actuelle est déjà Pluie.",
		shortDesc: "Pendant 5 tours, une forte pluie renforce les capacités Eau.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	rapidspin: {
		name: "Tour Rapide",
		// Official flavor text: "Une attaque tournoyante pouvant aussi annuler, par exemple, Étreinte, Ligotage ou Vampigraine. Augmente également la Vitesse du lanceur."
		desc: "Si cette capacité réussit et que le lanceur n’est pas K.O., les effets de Vampigraine et des capacités de piège prennent fin pour le lanceur, et tous les pièges sont retirés de son côté du terrain. 100 % de chances d’augmenter la Vitesse du lanceur d’un niveau.",
		shortDesc: "Libère le lanceur des pièges, étreintes et Vampigraine ; +1 Vit.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	razorleaf: {
		name: "Tranch’Herbe",
		// Official flavor text: "Des feuilles aiguisées comme des rasoirs entaillent l’ennemi. Taux de critiques élevé."
		desc: "A plus de chances d’infliger un coup critique.",
		shortDesc: "Taux de critique élevé. Touche les adversaires adjacents.",
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	razorshell: {
		name: "Coqui-Lame",
		// Official flavor text: "Un coquillage aiguisé lacère l’ennemi. Peut aussi baisser sa Défense."
		desc: "50 % de chances de baisser la Défense de la cible d’un niveau.",
		shortDesc: "50 % de chances de baisser la Défense de la cible d’un niveau.",
	},
	razorwind: {
		name: "Coupe-Vent",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "A plus de chances d’infliger un coup critique. Cette attaque se charge au premier tour et s’exécute au second. Si le lanceur tient une Herbe Pouvoir, la capacité s’exécute en un seul tour.",
		shortDesc: "Se charge, puis frappe les adversaires au tour 2. Taux de critique élevé.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		prepare: "  {POKEMON} se prépare à lancer une bourrasque !",
	},
	recover: {
		name: "Soin",
		// Official flavor text: "Un soin qui permet au lanceur de récupérer jusqu’à la moitié de ses PV max."
		desc: "Le lanceur récupère 1/2 de ses PV max, arrondi à l’entier le plus proche (0,5 vers le haut).",
		shortDesc: "Le lanceur récupère 50 % de ses PV max.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	recycle: {
		name: "Recyclage",
		// Official flavor text: "Recycle un objet tenu à usage unique déjà utilisé lors du combat pour pouvoir l’utiliser à nouveau."
		desc: "Le lanceur récupère le dernier objet qu’il a utilisé. Échoue si le lanceur tient un objet, s’il n’a jamais tenu d’objet, si l’objet était un Ballon éclaté, si l’objet a été ramassé par un Pokémon ayant le talent Ramassage, ou si l’objet a été perdu à cause de Piqûre, Gaz Corrosif, Implore, Calcination, Sabotage, Picore ou Larcin. Les objets lancés avec Dégommage peuvent être récupérés.",
		shortDesc: "Rend au lanceur le dernier objet qu’il a utilisé.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		addItem: "  {POKEMON} ramasse l'objet: {ITEM}!",
	},
	reflect: {
		name: "Protection",
		// Official flavor text: "Crée un fabuleux mur de lumière qui réduit les dégâts causés par les capacités physiques pendant cinq tours."
		desc: "Pendant 5 tours, le lanceur et les membres de son équipe subissent 0,5× les dégâts des attaques physiques, ou 0,66× en combat en Duo. Les dégâts ne sont pas réduits davantage avec Voile Aurore. Les coups critiques ignorent cet effet. L’effet est retiré du camp du lanceur si le lanceur ou un allié est touché avec succès par Casse-Brique, Psycho-Croc ou Anti-Brume. Dure 8 tours si le lanceur tient une Lumargile. Échoue si l’effet est déjà actif dans le camp du lanceur.",
		shortDesc: "Pendant 5 tours, les dégâts physiques subis par l’équipe sont divisés par deux.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
			start: "  {POKEMON} augmente sa protection!",
		},

		start: "  Protection augmente la résistance de {TEAM} aux capacités physiques !",
		end: "  Protection n’a plus d’effet sur {TEAM} !",
	},
	reflecttype: {
		name: "Copie-Type",
		// Official flavor text: "Le lanceur copie le type de la cible et devient du même type."
		desc: "Les types du lanceur deviennent identiques aux types actuels de la cible. Si les types actuels de la cible incluent « sans type » et un type non ajouté, « sans type » est ignoré. Si les types actuels de la cible incluent « sans type » et un type ajouté par Maléfice Sylvain ou Halloween, « sans type » est copié comme type Normal à la place. Échoue si le lanceur est un Arceus ou un Silvallié, s’il est téracristallisé, ou si le type actuel de la cible est uniquement « sans type ».",
		shortDesc: "Le lanceur prend le même type que la cible.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		typeChange: "  {POKEMON} prend le type {SOURCE:de} !",
	},
	refresh: {
		name: "Régénération",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Le lanceur soigne sa brûlure, son empoisonnement ou sa paralysie. Échoue si le lanceur n’est ni brûlé, ni empoisonné, ni paralysé.",
		shortDesc: "Le lanceur soigne sa brûlure, son empoisonnement ou sa paralysie.",
	},
	relicsong: {
		name: "Chant Antique",
		// Official flavor text: "Le lanceur attaque l’ennemi en lui chantant une chanson d’un autre temps. Peut l’endormir."
		desc: "10 % de chances d’endormir la cible. Si cette capacité réussit contre au moins une cible et que le lanceur est un Meloetta, il passe en Forme Danse s’il est en Forme Chant, ou en Forme Chant s’il est en Forme Danse. Ce changement de forme n’a pas lieu si le Meloetta a le talent Sans Limite. La Forme Danse redevient la Forme Chant quand Meloetta n’est plus au combat.",
		shortDesc: "10 % de chances d’endormir les adversaires. Meloetta change de forme.",
	},
	rest: {
		name: "Repos",
		// Official flavor text: "Le lanceur regagne tous ses PV et soigne ses altérations de statut, puis il dort pendant deux tours."
		desc: "Le lanceur s’endort pendant les deux tours suivants et récupère tous ses PV, ce qui soigne au passage toute altération de statut non volatile. Échoue si le lanceur a tous ses PV, s’il est déjà endormi, ou si un autre effet empêche le sommeil.",
		shortDesc: "Le lanceur dort 2 tours et récupère ses PV et son statut.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	retaliate: {
		name: "Vengeance",
		// Official flavor text: "Venge un Pokémon de l’équipe mis K.O. Si un Pokémon de l’équipe a été mis K.O. au tour d’avant, l’effet augmente."
		desc: "La puissance double si l’un des membres de l’équipe du lanceur a été mis K.O. au tour précédent.",
		shortDesc: "La puissance double si un allié a été mis K.O. au tour précédent.",
	},
	return: {
		name: "Retour",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "La puissance est égale à la plus grande des deux valeurs suivantes : (Bonheur du lanceur × 2/5), arrondi à l’inférieur, ou 1.",
		shortDesc: "Puissance max de 102 avec un Bonheur maximal.",
	},
	revelationdance: {
		name: "Danse Éveil",
		// Official flavor text: "Le lanceur attaque en dansant avec enthousiasme. Le type de la capacité est le même que celui du lanceur."
		desc: "Le type de cette capacité dépend du type principal du lanceur. Si le type principal du lanceur est « sans type », le type de cette capacité est le type secondaire du lanceur s’il en a un, sinon le type ajouté par Maléfice Sylvain ou Halloween. Cette capacité est « sans type » si le lanceur est uniquement « sans type ».",
		shortDesc: "Le type varie selon le type principal du lanceur.",
	},
	revenge: {
		name: "Vendetta",
		// Official flavor text: "Une attaque deux fois plus puissante si le lanceur a été blessé par l’ennemi durant ce tour."
		desc: "La puissance double si le lanceur a été touché par la cible ce tour-ci.",
		shortDesc: "La puissance double si le lanceur a été blessé par la cible.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	reversal: {
		name: "Contre",
		// Official flavor text: "Le lanceur ne retient plus ses coups. Plus ses PV sont bas, plus l’attaque est puissante."
		desc: "La puissance de cette capacité est de 20 si X vaut de 33 à 48, de 40 si X vaut de 17 à 32, de 80 si X vaut de 10 à 16, de 100 si X vaut de 5 à 9, de 150 si X vaut de 2 à 4, et de 200 si X vaut 0 ou 1, où X est égal à (PV actuels du lanceur × 48 / PV max du lanceur), arrondi à l’inférieur.",
		shortDesc: "Plus le lanceur a peu de PV, plus la puissance est élevée.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	revivalblessing: {
		name: "Second Souffle",
		// Official flavor text: "Dans un élan de compassion, le lanceur adresse une prière afin de ranimer un Pokémon de l'équipe K.O. en lui rendant la moitié de ses PV."
		desc: "Un membre de l’équipe K.O. est choisi et ranimé avec 1/2 de ses PV max, arrondi à l’inférieur. Échoue s’il n’y a aucun membre de l’équipe K.O.",
		shortDesc: "Ranime un Pokémon K.O. avec 50 % de ses PV.",

		heal: "  {POKEMON} a repris connaissance et est prêt à se battre de nouveau !",
	},
	risingvoltage: {
		name: "Monte-Tension",
		// Official flavor text: "Des éclairs surgissent du sol et frappent l’ennemi. La puissance de cette attaque est doublée si la cible est sur un Champ Électrifié."
		desc: "Si le terrain actuel est Champ Électrifié et que la cible est au sol, la puissance de cette capacité double.",
		shortDesc: "Puissance ×2 si la cible est au sol sur Champ Électrifié.",
	},
	roar: {
		name: "Hurlement",
		// Official flavor text: "Effraie le Pokémon ennemi et le remplace par un autre. Lors d’un combat contre un Pokémon sauvage seul, met fin au combat."
		desc: "La cible est forcée de se retirer et est remplacée par un allié non K.O. choisi au hasard. Échoue si la cible est le dernier Pokémon non K.O. de son équipe, si elle a utilisé Racines auparavant ou si elle a le talent Ventouse.",
		shortDesc: "Force la cible à être remplacée par un allié au hasard.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	roaroftime: {
		name: "Hurle-Temps",
		// Official flavor text: "Le lanceur frappe si fort qu’il affecte le cours du temps. Il se repose au tour suivant."
		desc: "Si cette capacité réussit, le lanceur doit se recharger au tour suivant et ne peut pas choisir de capacité.",
		shortDesc: "Le lanceur ne peut pas agir au tour suivant.",
	},
	rockblast: {
		name: "Boule Roc",
		// Official flavor text: "Le lanceur projette un rocher sur l’ennemi de deux à cinq fois d’affilée."
		desc: "Frappe de deux à cinq fois. 35 % de chances de frapper deux ou trois fois et 15 % de chances de frapper quatre ou cinq fois. Si l’un des coups détruit le clone de la cible, celle-ci subit les dégâts des coups restants. Si le lanceur a le talent Multi-Coups, cette capacité frappe toujours cinq fois. Si le lanceur tient un Dé Pipé, cette capacité frappe de 4 à 5 fois.",
		shortDesc: "Frappe de 2 à 5 fois en un tour.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	rockclimb: {
		name: "Escalade",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "20 % de chances de rendre la cible confuse.",
		shortDesc: "20 % de chances de rendre la cible confuse.",
	},
	rockpolish: {
		name: "Poliroche",
		// Official flavor text: "Le lanceur polit son corps pour diminuer sa résistance au vent. Augmente beaucoup la Vitesse."
		desc: "Augmente la Vitesse du lanceur de deux niveaux.",
		shortDesc: "Augmente la Vitesse du lanceur de 2 niveaux.",
	},
	rockslide: {
		name: "Éboulement",
		// Official flavor text: "Envoie de gros rochers sur l’ennemi pour infliger des dégâts. Peut aussi l’apeurer."
		desc: "30 % de chances d’apeurer la cible.",
		shortDesc: "30 % de chances d’apeurer les adversaires.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	rocksmash: {
		name: "Éclate-Roc",
		// Official flavor text: "Porte un coup de poing à l’ennemi qui peut baisser sa Défense."
		desc: "50 % de chances de baisser la Défense de la cible d’un niveau.",
		shortDesc: "50 % de chances de baisser la Défense de la cible d’un niveau.",
	},
	rockthrow: {
		name: "Jet-Pierres",
		shortDesc: "Aucun effet supplémentaire.",
	},
	rocktomb: {
		name: "Tomberoche",
		// Official flavor text: "Des rochers frappent l’ennemi. Réduit aussi sa Vitesse."
		desc: "100 % de chances de baisser la Vitesse de la cible d’un niveau.",
		shortDesc: "100 % de chances de baisser la Vitesse de la cible d’un niveau.",
	},
	rockwrecker: {
		name: "Roc-Boulet",
		// Official flavor text: "Le lanceur attaque en projetant un gros rocher sur l’ennemi. Il doit se reposer au tour suivant."
		desc: "Si cette capacité réussit, le lanceur doit se recharger au tour suivant et ne peut pas choisir de capacité.",
		shortDesc: "Le lanceur ne peut pas agir au tour suivant.",
	},
	roleplay: {
		name: "Imitation",
		// Official flavor text: "Imite la cible et copie son talent."
		desc: "Le talent du lanceur devient identique à celui de la cible. Échoue si le talent du lanceur est Osmose Équine, Synergie, Hypersommeil, Fantômasque, Dégobage, Tête de Gel, Multi-Type, Rassemblement, Système Alpha, Banc, Bouclier-Carcan, Déclic Tactique, Téramorphose, Mode Transe ou Supermutation, ou s’il est déjà identique à celui de la cible, ou si le talent de la cible est Osmose Équine, Synergie, Hypersommeil, Commandant, Fantômasque, Force Mémorielle, Don Floral, Météo, Déclic Fringale, Tête de Gel, Illusion, Imposteur, Multi-Type, Gaz Inhibiteur, Emprise Toxique, Rassemblement, Osmose, Paléosynthèse, Charge Quantique, Receveur, Système Alpha, Banc, Bouclier-Carcan, Déclic Tactique, Téra-Carapace, Téramorphose, Téraformation 0, Calque, Garde Mystik, Mode Transe ou Supermutation.",
		shortDesc: "Le lanceur remplace son talent par celui de la cible.",
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

		changeAbility: "  {POKEMON} copie le talent {ABILITY} {SOURCE:de} !",
	},
	rollingkick: {
		name: "Mawashi Geri",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "30 % de chances d’apeurer la cible.",
		shortDesc: "30 % de chances d’apeurer la cible.",
	},
	rollout: {
		name: "Roulade",
		// Official flavor text: "Un rocher roule sur l’ennemi pendant cinq tours. L’attaque gagne en puissance à chaque coup."
		desc: "Si cette capacité réussit, le lanceur est bloqué sur cette capacité et ne peut pas en utiliser une autre jusqu’à ce qu’elle rate, que 5 tours se soient écoulés ou que l’attaque ne puisse plus être utilisée. La puissance double à chaque coup réussi de cette capacité, et double encore si le lanceur a utilisé Boul’Armure auparavant. Si cette capacité est appelée par Blabla Dodo, elle est utilisée pendant un seul tour.",
		shortDesc: "La puissance double à chaque coup. Se répète pendant 5 tours.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	roost: {
		name: "Atterrissage",
		// Official flavor text: "Le lanceur atterrit et se repose. Restaure jusqu’à la moitié de ses PV max."
		desc: "Le lanceur récupère 1/2 de ses PV max, arrondi à l’entier le plus proche (0,5 vers le haut). Si le lanceur n’est pas téracristallisé, jusqu’à la fin du tour, il perd son type Vol s’il est de type Vol, et devient de type Normal s’il est uniquement de type Vol. N’a aucun effet si le lanceur a tous ses PV.",
		shortDesc: "Soigne 50 % des PV. Perd le type Vol jusqu’à la fin du tour.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  ({POKEMON} perd son type Vol pendant ce tour.)",
	},
	rototiller: {
		name: "Fertilisation",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Augmente d’un niveau l’Attaque et l’Attaque Spéciale de tous les Pokémon de type Plante au sol sur le terrain.",
		shortDesc: "+1 Atq et Atq Spé pour les Pokémon Plante au sol.",
	},
	round: {
		name: "Chant Canon",
		// Official flavor text: "Le lanceur attaque l’ennemi en chantant. Si plusieurs Pokémon déclenchent cette attaque à la suite, l’effet augmente."
		desc: "Si d’autres Pokémon au combat ont choisi cette capacité ce tour-ci, ils agissent immédiatement après le lanceur, par ordre de Vitesse, et la puissance de cette capacité est de 120 pour chacun de ces autres lanceurs.",
		shortDesc: "La puissance double si d’autres utilisent Chant Canon ce tour-ci.",
	},
	ruination: {
		name: "Cataclysme",
		// Official flavor text: "Le lanceur déclenche un cataclysme qui baisse les PV de la cible de moitié."
		desc: "Inflige à la cible des dégâts égaux à la moitié de ses PV actuels, arrondi à l’inférieur, mais d’au moins 1 PV.",
		shortDesc: "Inflige des dégâts égaux à 1/2 des PV actuels de la cible.",
	},
	sacredfire: {
		name: "Feu Sacré",
		// Official flavor text: "Le lanceur génère un feu mystique d’une intensité redoutable pour attaquer l’ennemi. Peut aussi le brûler."
		desc: "50 % de chances de brûler la cible.",
		shortDesc: "50 % de chances de brûler la cible. Dégèle le lanceur.",
	},
	sacredsword: {
		name: "Lame Sainte",
		// Official flavor text: "Un coup de corne violent qui lacère l’ennemi et lui inflige des dégâts quels que soient ses changements de stats."
		desc: "Ignore les modifications de niveaux de stats de la cible, y compris l’Esquive.",
		shortDesc: "Ignore les modifications de stats de la cible.",
	},
	safeguard: {
		name: "Rune Protect",
		// Official flavor text: "Crée un champ protecteur qui empêche toutes les altérations de statut pendant cinq tours."
		desc: "Pendant 5 tours, le lanceur et les membres de son équipe ne peuvent pas subir d’altération de statut non volatile ni de confusion infligée par les autres Pokémon. Les Pokémon du camp du lanceur ne peuvent pas être affectés par Bâillement, mais peuvent s’endormir à cause de son effet. L’effet est retiré du camp du lanceur si le lanceur ou un allié est touché avec succès par Anti-Brume. Échoue si l’effet est déjà actif dans le camp du lanceur.",
		shortDesc: "Pendant 5 tours, protège l’équipe du lanceur des altérations de statut.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  Un voile mystérieux recouvre {TEAM} !",
		end: "  {TEAM:capitalize} n’est plus protégée par le voile mystérieux !",
		block: "  {POKEMON} est protégé par la capacité Rune Protect !",
	},
	saltcure: {
		name: "Salaison",
		// Official flavor text: "Le lanceur couvre la cible de sel, ce qui lui inflige des dégâts à chaque tour. Si la cible est de type Acier ou Eau, ces dégâts sont plus élevés."
		desc: "Inflige à la cible des dégâts égaux à 1/8 de ses PV max (1/4 si la cible est de type Acier ou Eau), arrondi à l’inférieur, à la fin de chaque tour pendant l’effet. L’effet prend fin quand la cible n’est plus au combat.",
		shortDesc: "Inflige 1/8 des PV max à chaque tour ; 1/4 contre Acier et Eau.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},

		start: "  {POKEMON} est couvert de sel !",
		damage: "  {POKEMON} est blessé par la capacité Salaison !",
	},
	sandattack: {
		name: "Jet de Sable",
		// Official flavor text: "Lance du sable au visage de l’ennemi pour baisser sa Précision."
		desc: "Baisse la Précision de la cible d’un niveau.",
		shortDesc: "Baisse la Précision de la cible d’un niveau.",
	},
	sandsearstorm: {
		name: "Typhon Pyrosable",
		// Official flavor text: "Le lanceur déclenche un violent typhon mêlé à du sable ardent qui s'abat sur la cible, ce qui peut la brûler."
		desc: "20 % de chances de brûler la cible. Si la météo est Pluie battante ou Pluie, cette capacité ne peut pas rater. Si cette capacité est utilisée contre un Pokémon tenant un Parapluie Solide, sa Précision reste à 80 %.",
		shortDesc: "20 % de chances de brûler les adversaires. Pluie : ne rate pas.",
	},
	sandstorm: {
		name: "Tempête de Sable",
		// Official flavor text: "Une tempête de sable blesse tous les Pokémon pendant cinq tours, sauf ceux de type Roche, Sol ou Acier. Augmente la Défense Spéciale des Pokémon Roche."
		desc: "Pendant 5 tours, la météo devient Tempête de sable. À la fin de chaque tour sauf le dernier, tous les Pokémon au combat perdent 1/16 de leurs PV max, arrondi à l’inférieur, sauf s’ils sont de type Sol, Roche ou Acier, ou s’ils ont le talent Garde Magik, Envelocape, Force Sable, Baigne Sable ou Voile Sable. Pendant l’effet, la Défense Spéciale des Pokémon de type Roche est multipliée par 1,5 quand ils subissent des dégâts d’une attaque spéciale. Dure 8 tours si le lanceur tient une Roche Lisse. Échoue si la météo actuelle est déjà Tempête de sable.",
		shortDesc: "Pendant 5 tours, une tempête de sable fait rage. Roche : Déf Spé ×1,5.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	sandtomb: {
		name: "Tourbi-Sable",
		// Official flavor text: "Le lanceur emprisonne l’ennemi dans une tempête de sable terrifiante qui dure de quatre à cinq tours."
		desc: "Empêche la cible d’être remplacée pendant quatre ou cinq tours (sept tours si le lanceur tient une Accro Griffe). Inflige à la cible des dégâts égaux à 1/8 de ses PV max (1/6 si le lanceur tient une Bande Étreinte), arrondi à l’inférieur, à la fin de chaque tour pendant l’effet. La cible peut tout de même être remplacée si elle tient une Carapace Mue ou si elle utilise Relais, Eau Revoir, Dernier Mot, Queulonage, Téléport, Demi-Tour ou Change Éclair. L’effet prend fin si le lanceur ou la cible quitte le terrain, ou si la cible utilise avec succès Toupie Éclat, Tour Rapide ou Clonage. Cet effet ne se cumule pas et n’est pas réinitialisé par l’utilisation de cette capacité ou d’une autre capacité de piège.",
		shortDesc: "Piège et blesse la cible pendant 4 à 5 tours.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
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
		},

		start: "  {POKEMON} est piégé dans un tourbillon de sable !",
	},
	sappyseed: {
		name: "Évo-Écolo",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Cette capacité inflige Vampigraine à l’adversaire.",
		shortDesc: "Inflige Vampigraine.",
	},
	savagespinout: {
		name: "Cocon Fatal",
		shortDesc: "La puissance est égale à la puissance Z de la capacité de base.",
	},
	scald: {
		name: "Ébullition",
		// Official flavor text: "L’ennemi est attaqué par un jet d’eau bouillante. Peut aussi le brûler."
		desc: "30 % de chances de brûler la cible. La cible est dégelée si elle est gelée.",
		shortDesc: "30 % de chances de brûler la cible. Dégèle la cible.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	scaleshot: {
		name: "Rafale Écailles",
		// Official flavor text: "Le lanceur projette des écailles sur la cible de deux à cinq fois d’affilée. Augmente la Vitesse, mais diminue la Défense."
		desc: "Frappe de deux à cinq fois. Baisse la Défense du lanceur d’un niveau et augmente sa Vitesse d’un niveau après le dernier coup. 35 % de chances de frapper deux ou trois fois et 15 % de chances de frapper quatre ou cinq fois. Si l’un des coups détruit le clone de la cible, celle-ci subit les dégâts des coups restants. Si le lanceur a le talent Multi-Coups, cette capacité frappe toujours cinq fois. Si le lanceur tient un Dé Pipé, cette capacité frappe de 4 à 5 fois.",
		shortDesc: "Frappe de 2 à 5 fois. Lanceur : -1 Déf, +1 Vit après le dernier coup.",
	},
	scaryface: {
		name: "Grimace",
		// Official flavor text: "Le lanceur fait une grimace qui effraie l’ennemi et réduit beaucoup sa Vitesse."
		desc: "Baisse la Vitesse de la cible de deux niveaux.",
		shortDesc: "Baisse la Vitesse de la cible de 2 niveaux.",
	},
	scorchingsands: {
		name: "Sable Ardent",
		// Official flavor text: "Le lanceur projette du sable chauffé à blanc sur l’ennemi. Peut aussi brûler la cible."
		desc: "30 % de chances de brûler la cible. La cible est dégelée si elle est gelée.",
		shortDesc: "30 % de chances de brûler la cible. Dégèle la cible.",
	},
	scratch: {
		name: "Griffe",
		shortDesc: "Aucun effet supplémentaire.",
	},
	screech: {
		name: "Grincement",
		// Official flavor text: "Le lanceur émet un son strident qui baisse beaucoup la Défense de l’ennemi."
		desc: "Baisse la Défense de la cible de deux niveaux.",
		shortDesc: "Baisse la Défense de la cible de 2 niveaux.",
	},
	searingshot: {
		name: "Incendie",
		// Official flavor text: "Des boules de feu s’abattent sur tous les Pokémon autour du lanceur. Peut aussi les brûler."
		desc: "30 % de chances de brûler la cible.",
		shortDesc: "30 % de chances de brûler les Pokémon adjacents.",
	},
	searingsunrazesmash: {
		name: "Hélio-Choc Dévastateur",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Cette capacité et ses effets ignorent les talents des autres Pokémon.",
		shortDesc: "Ignore les talents des autres Pokémon.",
	},
	secretpower: {
		name: "Force Cachée",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "30 % de chances de provoquer un effet secondaire sur la cible selon le terrain du combat. Paralyse la cible sur le terrain standard des combats en Wi-Fi, la paralyse sur Champ Électrifié, baisse son Attaque Spéciale d’un niveau sur Champ Brumeux, l’endort sur Champ Herbu et baisse sa Vitesse d’un niveau sur Champ Psychique.",
		shortDesc: "L’effet varie selon le terrain (30 % de chances de paralysie).",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	secretsword: {
		name: "Lame Ointe",
		// Official flavor text: "L’ennemi est lacéré par une longue corne. Son pouvoir mystérieux inflige des dégâts physiques."
		desc: "Inflige des dégâts à la cible en fonction de sa Défense au lieu de sa Défense Spéciale.",
		shortDesc: "Dégâts calculés sur la Défense de la cible, pas sa Déf Spé.",
	},
	seedbomb: {
		name: "Canon Graine",
		shortDesc: "Aucun effet supplémentaire.",
	},
	seedflare: {
		name: "Fulmigraine",
		// Official flavor text: "Le corps du lanceur émet une onde de choc. Peut aussi beaucoup baisser la Défense Spéciale de la cible."
		desc: "40 % de chances de baisser la Défense Spéciale de la cible de deux niveaux.",
		shortDesc: "40 % de chances de baisser la Déf Spé de la cible de 2 niveaux.",
	},
	seismictoss: {
		name: "Frappe Atlas",
		// Official flavor text: "L’ennemi est projeté grâce au pouvoir de la gravité. Inflige des dégâts équivalents au niveau du lanceur."
		desc: "Inflige à la cible des dégâts égaux au niveau du lanceur.",
		shortDesc: "Inflige des dégâts égaux au niveau du lanceur.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	selfdestruct: {
		name: "Destruction",
		// Official flavor text: "Le lanceur explose en blessant tous les Pokémon autour de lui. Le lanceur tombe K.O."
		desc: "Le lanceur est mis K.O. après avoir utilisé cette capacité, même si elle échoue faute de cible. Cette capacité ne peut pas s’exécuter si un Pokémon au combat a le talent Moiteur.",
		shortDesc: "Touche les Pokémon adjacents. Le lanceur est mis K.O.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	shadowball: {
		name: "Ball’Ombre",
		// Official flavor text: "Projette une grande ombre sur l’ennemi. Peut aussi faire baisser sa Défense Spéciale."
		desc: "20 % de chances de baisser la Défense Spéciale de la cible d’un niveau.",
		shortDesc: "20 % de chances de baisser la Déf Spé de la cible d’un niveau.",
	},
	shadowbone: {
		name: "Os Ombre",
		// Official flavor text: "Le lanceur frappe avec un os possédé par l’âme d’un défunt. Peut aussi baisser la Défense de la cible."
		desc: "20 % de chances de baisser la Défense de la cible d’un niveau.",
		shortDesc: "20 % de chances de baisser la Défense de la cible d’un niveau.",
	},
	shadowclaw: {
		name: "Griffe Ombre",
		// Official flavor text: "Attaque avec une griffe puissante faite d’ombres. Taux de critiques élevé."
		desc: "A plus de chances d’infliger un coup critique.",
		shortDesc: "Taux de critique élevé.",
	},
	shadowforce: {
		name: "Revenant",
		// Official flavor text: "Le lanceur disparaît et frappe l’ennemi au second tour. Fonctionne même si l’ennemi se protège."
		desc: "Si cette capacité réussit, elle perce la protection Blockhaus, Détection, Bouclier Royal, Abri ou Pico-Défense de la cible pour ce tour, ce qui permet aux autres Pokémon d’attaquer la cible normalement. Si le camp de la cible est protégé par Vigilance, Tatamigaeshi, Prévention ou Garde Large, cette protection est également brisée pour ce tour et les autres Pokémon peuvent attaquer le camp de la cible normalement. Cette attaque se charge au premier tour et s’exécute au second. Au premier tour, le lanceur évite toutes les attaques. Si le lanceur tient une Herbe Pouvoir, la capacité s’exécute en un seul tour.",
		shortDesc: "Disparaît au tour 1. Frappe au tour 2. Perce les protections.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  Ça transperce la protection {TARGET:de} !",
		prepare: "{POKEMON} disparaît instantanément !",
	},
	shadowpunch: {
		name: "Poing Ombre",
		shortDesc: "Cette capacité ne peut pas rater.",
	},
	shadowsneak: {
		name: "Ombre Portée",
		// Official flavor text: "Le lanceur étend son ombre pour frapper par-derrière. Frappe en priorité."
		desc: "Aucun effet supplémentaire.",
		shortDesc: "Frappe généralement en premier.",
	},
	shadowstrike: {
		name: null, // NEEDS TRANSLATION: not in PokeAPI
		desc: "50 % de chances de baisser la Défense de la cible d’un niveau.",
		shortDesc: "50 % de chances de baisser la Défense de la cible d’un niveau.",
	},
	sharpen: {
		name: "Affûtage",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Augmente l’Attaque du lanceur d’un niveau.",
		shortDesc: "Augmente l’Attaque du lanceur d’un niveau.",
	},
	shatteredpsyche: {
		name: "Psycho-Pulvérisation EX",
		shortDesc: "La puissance est égale à la puissance Z de la capacité de base.",
	},
	shedtail: {
		name: "Queulonage",
		// Official flavor text: "Le lanceur crée un clone en sacrifiant des PV, puis il revient et échange sa place avec un Pokémon de l'équipe prêt à combattre."
		desc: "Le lanceur sacrifie 1/2 de ses PV max, arrondi au supérieur, et crée un clone possédant 1/4 de ses PV max, arrondi à l’inférieur. Le lanceur est remplacé par un autre Pokémon de son équipe, et le Pokémon choisi reçoit le clone. Échoue si cela mettait le lanceur K.O., ou s’il ne reste aucun membre de l’équipe non K.O.",
		shortDesc: "Le lanceur sacrifie 1/2 de ses PV max pour transmettre un clone.",

		start: "  {POKEMON} détache sa queue pour créer un leurre !",
		alreadyStarted: "#substitute",
		fail: "#substitute",
	},
	sheercold: {
		name: "Glaciation",
		// Official flavor text: "Une vague de froid glacial frappe l’ennemi pour le mettre K.O. en un coup. A peu de chances de réussir si le lanceur ne possède pas le type Glace."
		desc: "Inflige à la cible des dégâts égaux à ses PV max. Ignore les modificateurs de Précision et d’Esquive. La Précision de cette attaque est égale à (niveau du lanceur - niveau de la cible + X) %, où X vaut 30 si le lanceur est de type Glace et 20 sinon, et elle échoue si la cible est d’un niveau supérieur. Les Pokémon de type Glace et les Pokémon ayant le talent Fermeté y sont immunisés.",
		shortDesc: "Met K.O. en un coup les cibles non Glace. Échoue si le lanceur a un niveau inférieur.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	shellsidearm: {
		name: "Kokiyarme",
		// Official flavor text: "Une attaque physique ou spéciale, en fonction de ce qui est le plus efficace contre la cible. Peut aussi empoisonner."
		desc: "20 % de chances d’empoisonner la cible. Cette capacité devient une attaque physique de contact si la valeur de ((((2 × niveau du lanceur / 5 + 2) × 90 × X) / Y) / 50), où X est la stat d’Attaque du lanceur et Y la stat de Défense de la cible, est supérieure à la même valeur où X est la stat d’Attaque Spéciale du lanceur et Y la stat de Défense Spéciale de la cible. Seules les modifications de niveaux de stats sont prises en compte pour ce calcul, à l’exclusion de tout autre modificateur. Si les deux valeurs sont égales, cette capacité choisit une catégorie de dégâts au hasard.",
		shortDesc: "20 % d’empoisonner. Physique et de contact si plus puissante.",
	},
	shellsmash: {
		name: "Exuviation",
		// Official flavor text: "Le lanceur brise sa coquille. Il baisse sa Défense et sa Défense Spéciale, mais augmente beaucoup son Attaque, son Attaque Spéciale et sa Vitesse."
		desc: "Baisse la Défense et la Défense Spéciale du lanceur d’un niveau. Augmente l’Attaque, l’Attaque Spéciale et la Vitesse du lanceur de deux niveaux.",
		shortDesc: "Baisse Déf et Déf Spé d’un niveau ; augmente Atq, Atq Spé et Vit de 2 niveaux.",
	},
	shelltrap: {
		name: "Carapiège",
		// Official flavor text: "Pose une carapace piégée. Si l’adversaire utilise une capacité physique, la carapace explose et lui inflige des dégâts."
		desc: "Échoue sauf si le lanceur est touché par une attaque physique d’un adversaire ce tour-ci avant de pouvoir exécuter la capacité. Si le lanceur a été touché et n’est pas K.O., il attaque immédiatement après avoir été touché, et l’effet prend fin. Si l’attaque physique de l’adversaire a vu son effet secondaire supprimé par le talent Sans Limite, elle n’est pas prise en compte pour cet effet.",
		shortDesc: "Le lanceur doit subir une attaque physique avant d’agir.",

		start: "  {POKEMON} déclenche le Carapiège !",
		prepare: "  {POKEMON} déclenche le Carapiège !",
		cant: "Le Carapiège {POKEMON:de} n’a pas explosé...",
	},
	shelter: {
		name: "Mur Fumigène",
		// Official flavor text: "Rend la peau du lanceur dure comme un mur de fer, ce qui augmente beaucoup sa Défense."
		desc: "Augmente la Défense du lanceur de deux niveaux.",
		shortDesc: "Augmente la Défense du lanceur de 2 niveaux.",
	},
	shiftgear: {
		name: "Chgt Vitesse",
		// Official flavor text: "Le lanceur fait tourner ses engrenages. Cela augmente son Attaque et augmente beaucoup sa Vitesse."
		desc: "Augmente la Vitesse du lanceur de deux niveaux et son Attaque d’un niveau.",
		shortDesc: "Augmente la Vitesse du lanceur de 2 niveaux et son Attaque d’un niveau.",
	},
	shockwave: {
		name: "Onde de Choc",
		shortDesc: "Cette capacité ne peut pas rater.",
	},
	shoreup: {
		name: "Amass’Sable",
		// Official flavor text: "Le lanceur récupère jusqu’à la moitié de ses PV max. Durant une tempête de sable, il en récupère encore plus."
		desc: "Le lanceur récupère 1/2 de ses PV max, arrondi à l’entier le plus proche (0,5 vers le bas). Si la météo est Tempête de sable, le lanceur récupère à la place 2/3 de ses PV max, arrondi à l’entier le plus proche (0,5 vers le bas).",
		shortDesc: "Le lanceur récupère 1/2 de ses PV max ; 2/3 sous Tempête de sable.",
	},
	signalbeam: {
		name: "Rayon Signal",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "10 % de chances de rendre la cible confuse.",
		shortDesc: "10 % de chances de rendre la cible confuse.",
	},
	silktrap: {
		name: "Piège de Fil",
		// Official flavor text: "Le lanceur déploie un piège de fil pour se protéger contre les attaques, et si un assaillant utilise une attaque directe contre lui, la Vitesse de l'assaillant baisse."
		desc: "Le lanceur est protégé de la plupart des attaques des autres Pokémon pendant ce tour, et la Vitesse des Pokémon qui tentent d’entrer en contact avec lui baisse d’un niveau. Les capacités qui n’infligent pas de dégâts passent outre cette protection. Cette capacité a 1 chance sur X de réussir, où X vaut 1 au départ et triple à chaque utilisation réussie de cette capacité. X revient à 1 si cette capacité échoue, si la dernière capacité utilisée par le lanceur n’est pas Blockhaus, Rempart Brûlant, Détection, Ténacité, Bouclier Royal, Gardomax, Blocage, Abri, Prévention, Piège de Fil, Pico-Défense ou Garde Large, ou si c’était l’une de ces capacités et que la protection du lanceur a été percée. Échoue si le lanceur agit en dernier ce tour-ci.",
		shortDesc: "Protège des attaques offensives. Contact : -1 Vit.",
	},
	silverwind: {
		name: "Vent Argenté",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "10 % de chances d’augmenter l’Attaque, la Défense, l’Attaque Spéciale, la Défense Spéciale et la Vitesse du lanceur d’un niveau.",
		shortDesc: "10 % de chances d’augmenter toutes les stats d’un niveau (sauf Précision/Esquive).",
	},
	simplebeam: {
		name: "Rayon Simple",
		// Official flavor text: "Le lanceur envoie des ondes mystérieuses à l’ennemi. Son talent devient Simple."
		desc: "Le talent de la cible devient Simple. Échoue si le talent de la cible est Osmose Équine, Synergie, Hypersommeil, Fantômasque, Dégobage, Tête de Gel, Multi-Type, Rassemblement, Système Alpha, Banc, Bouclier-Carcan, Simple, Déclic Tactique, Téramorphose, Absentéisme, Mode Transe ou Supermutation.",
		shortDesc: "Le talent de la cible devient Simple.",
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
	},
	sing: {
		name: "Berceuse",
		shortDesc: "Endort la cible.",
	},
	sinisterarrowraid: {
		name: "Fureur des Plumes Spectrales",
		shortDesc: "Aucun effet supplémentaire.",
	},
	sizzlyslide: {
		name: "Évo-Flambo",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "100 % de chances de brûler l’adversaire.",
		shortDesc: "100 % de chances de brûler l’adversaire.",
	},
	sketch: {
		name: "Gribouille",
		// Official flavor text: "Le lanceur apprend la dernière capacité utilisée par la cible. Gribouille disparaît après utilisation."
		desc: "Cette capacité est remplacée définitivement par la dernière capacité utilisée par la cible. La capacité copiée a son nombre maximal de PP. Échoue si la cible n’a pas encore agi, si le lanceur est sous l’effet de Morphing, ou si la capacité est Crash Brûlant, Crash Musclé, Trou Noir, Furie Dimension, Crash Magique, Crash Toxique, Second Souffle, Gribouille, Lutte, Pluie Térastrale, Crash Obscur ou une capacité que le lanceur connaît déjà.",
		shortDesc: "Copie définitivement la dernière capacité utilisée par la cible.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		activate: "  {POKEMON} utilise Gribouille pour copier {MOVE} !",
	},
	skillswap: {
		name: "Échange",
		// Official flavor text: "Le lanceur utilise ses pouvoirs psychiques pour échanger son talent avec la cible."
		desc: "Le lanceur échange son talent avec celui de la cible. Échoue si le talent du lanceur ou de la cible est Osmose Équine, Synergie, Hypersommeil, Commandant, Fantômasque, Force Mémorielle, Déclic Fringale, Tête de Gel, Illusion, Multi-Type, Gaz Inhibiteur, Emprise Toxique, Rassemblement, Paléosynthèse, Charge Quantique, Système Alpha, Banc, Bouclier-Carcan, Déclic Tactique, Téra-Carapace, Téramorphose, Téraformation 0, Garde Mystik, Mode Transe ou Supermutation.",
		shortDesc: "Le lanceur et la cible échangent leurs talents.",
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

		activate: "  {POKEMON} et sa cible échangent leurs talents !",
	},
	skittersmack: {
		name: "Ravage Rampant",
		// Official flavor text: "Le lanceur rampe derrière l’ennemi pour l’attaquer. Baisse l’Attaque Spéciale de la cible."
		desc: "100 % de chances de baisser l’Attaque Spéciale de la cible d’un niveau.",
		shortDesc: "100 % de chances de baisser l’Atq Spé de la cible d’un niveau.",
	},
	skullbash: {
		name: "Coud’Krâne",
		// Official flavor text: "Le lanceur baisse la tête pour augmenter sa Défense au premier tour et percuter l’ennemi au second."
		desc: "Cette attaque se charge au premier tour et s’exécute au second. Augmente la Défense du lanceur d’un niveau au premier tour. Si le lanceur tient une Herbe Pouvoir, la capacité s’exécute en un seul tour.",
		shortDesc: "Augmente la Défense du lanceur d’un niveau au tour 1. Frappe au tour 2.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		prepare: "{POKEMON} baisse la tête !",
	},
	skyattack: {
		name: "Piqué",
		// Official flavor text: "Une attaque en deux tours au taux de critiques élevé. Peut aussi apeurer l’ennemi."
		desc: "30 % de chances d’apeurer la cible, et plus de chances d’infliger un coup critique. Cette attaque se charge au premier tour et s’exécute au second. Si le lanceur tient une Herbe Pouvoir, la capacité s’exécute en un seul tour.",
		shortDesc: "Se charge, puis frappe au tour 2. 30 % d’apeurer. Taux de critique élevé.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		prepare: "{POKEMON} est entouré d’une lumière intense !",
	},
	skydrop: {
		name: "Chute Libre",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Au premier tour, le lanceur emporte la cible dans les airs, et l’attaque s’exécute au second. Les Pokémon pesant 200 kg ou plus ne peuvent pas être soulevés. Au premier tour, le lanceur et la cible évitent toutes les attaques sauf Tornade, Vent Violent, Stratopercut, Anti-Air, Myria-Flèches, Fatal-Foudre et Ouragan. Le lanceur et la cible ne peuvent pas agir entre les deux tours, mais la cible peut choisir une capacité à utiliser. Cette capacité ne peut pas infliger de dégâts aux Pokémon de type Vol. Échoue au premier tour si la cible est un allié, si elle est protégée par un clone, ou si elle utilise Rebond, Tunnel, Plongée, Vol, Hantise, Revenant ou Chute Libre.",
		shortDesc: "Le lanceur et l’adversaire s’envolent au tour 1. Dégâts au tour 2.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		prepare: "{POKEMON} emporte {TARGET} haut dans le ciel !",
		end: "  {POKEMON} est lâché en chute libre !",
		failSelect: "{POKEMON} est en chute libre ! Cette action est impossible !",
		failTooHeavy: "  {POKEMON} est trop lourd pour être emporté !",
	},
	skyuppercut: {
		name: "Stratopercut",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Cette capacité peut toucher une cible qui utilise Rebond, Vol ou Chute Libre, ou qui est sous l’effet de Chute Libre.",
		shortDesc: "Peut toucher les Pokémon utilisant Rebond, Vol ou Chute Libre.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	slackoff: {
		name: "Paresse",
		// Official flavor text: "Le lanceur se tourne les pouces et récupère jusqu’à la moitié de ses PV max."
		desc: "Le lanceur récupère 1/2 de ses PV max, arrondi à l’entier le plus proche (0,5 vers le haut).",
		shortDesc: "Le lanceur récupère 50 % de ses PV max.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	slam: {
		name: "Souplesse",
		shortDesc: "Aucun effet supplémentaire.",
	},
	slash: {
		name: "Tranche",
		// Official flavor text: "Un coup de griffe ou autre tranche l’ennemi. Taux de critiques élevé."
		desc: "A plus de chances d’infliger un coup critique.",
		shortDesc: "Taux de critique élevé.",
	},
	sleeppowder: {
		name: "Poudre Dodo",
		shortDesc: "Endort la cible.",
	},
	sleeptalk: {
		name: "Blabla Dodo",
		// Official flavor text: "Le lanceur utilise une de ses capacités au hasard pendant qu’il dort."
		desc: "Une des capacités connues par le lanceur, autre que celle-ci, est choisie au hasard et utilisée. Échoue si le lanceur n’est pas endormi. La capacité choisie ne consomme pas de PP et peut actuellement avoir 0 PP. Cette capacité ne peut pas choisir Assistance, Bec-Canon, Éructation, Patience, Crash Brûlant, Célébration, Babil, Crash Musclé, Photocopie, Canon Dynamax, Mitra-Poing, Mains Jointes, Crash Magique, Moi d’Abord, Métronome, Copie, Mimique, Force Nature, Crash Toxique, Carapiège, Gribouille, Blabla Dodo, Lutte, Brouhaha, Crash Obscur ni aucune capacité en deux tours.",
		shortDesc: "Le lanceur doit être endormi. Utilise une autre capacité connue.",
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
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	sludge: {
		name: "Détritus",
		// Official flavor text: "Des détritus toxiques sont projetés sur l’ennemi. Peut aussi l’empoisonner."
		desc: "30 % de chances d’empoisonner la cible.",
		shortDesc: "30 % de chances d’empoisonner la cible.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	sludgebomb: {
		name: "Bombe Beurk",
		// Official flavor text: "Des détritus toxiques sont projetés sur l’ennemi. Peut aussi l’empoisonner."
		desc: "30 % de chances d’empoisonner la cible.",
		shortDesc: "30 % de chances d’empoisonner la cible.",
	},
	sludgewave: {
		name: "Cradovague",
		// Official flavor text: "Une vague de détritus attaque tous les Pokémon autour du lanceur. Peut aussi empoisonner."
		desc: "10 % de chances d’empoisonner la cible.",
		shortDesc: "10 % de chances d’empoisonner les Pokémon adjacents.",
	},
	smackdown: {
		name: "Anti-Air",
		// Official flavor text: "Le lanceur jette toutes sortes de projectiles à un ennemi. Si ce dernier vole, il tombe au sol."
		desc: "Cette capacité peut toucher une cible qui utilise Rebond, Vol ou Chute Libre, ou qui est sous l’effet de Chute Libre. Si cette capacité touche une cible sous l’effet de Rebond, Vol, Vol Magnétik ou Lévikinésie, l’effet prend fin. Si la cible est de type Vol et n’a pas utilisé Atterrissage ce tour-ci, ou si elle a le talent Lévitation, elle perd son immunité aux attaques de type Sol et au talent Piège Sable tant qu’elle reste au combat. Pendant l’effet, Vol Magnétik échoue pour la cible et Lévikinésie échoue contre la cible.",
		shortDesc: "Retire l’immunité de la cible au type Sol.",

		start: "  Touché dans les airs, {POKEMON} s’écrase au sol !",
	},
	smartstrike: {
		name: "Estocorne",
		shortDesc: "Cette capacité ne peut pas rater.",
	},
	smellingsalts: {
		name: "Stimulant",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "La puissance double si la cible est paralysée. Si le lanceur n’est pas K.O., la cible est guérie de sa paralysie.",
		shortDesc: "Puissance doublée si la cible est paralysée, et la soigne.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	smog: {
		name: "Purédpois",
		// Official flavor text: "Le lanceur attaque à l’aide d’une éruption de gaz répugnants. Peut aussi empoisonner l’ennemi."
		desc: "40 % de chances d’empoisonner la cible.",
		shortDesc: "40 % de chances d’empoisonner la cible.",
	},
	smokescreen: {
		name: "Brouillard",
		// Official flavor text: "Le lanceur disperse un nuage d’encre ou de fumée. Réduit la Précision de l’ennemi."
		desc: "Baisse la Précision de la cible d’un niveau.",
		shortDesc: "Baisse la Précision de la cible d’un niveau.",
	},
	snaptrap: {
		name: "Troquenard",
		// Official flavor text: "Le lanceur piège sa cible dans son Troquenard d’acier et lui inflige des dégâts pendant quatre ou cinq tours."
		desc: "Empêche la cible d’être remplacée pendant quatre ou cinq tours (sept tours si le lanceur tient une Accro Griffe). Inflige à la cible des dégâts égaux à 1/8 de ses PV max (1/6 si le lanceur tient une Bande Étreinte), arrondi à l’inférieur, à la fin de chaque tour pendant l’effet. La cible peut tout de même être remplacée si elle tient une Carapace Mue ou si elle utilise Relais, Eau Revoir, Dernier Mot, Queulonage, Téléport, Demi-Tour ou Change Éclair. L’effet prend fin si le lanceur ou la cible quitte le terrain, ou si la cible utilise avec succès Toupie Éclat, Tour Rapide ou Clonage. Cet effet ne se cumule pas et n’est pas réinitialisé par l’utilisation de cette capacité ou d’une autre capacité de piège.",
		shortDesc: "Piège et blesse la cible pendant 4 à 5 tours.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} est tombé dans un Troquenard !",
	},
	snarl: {
		name: "Aboiement",
		// Official flavor text: "Le lanceur hurle sur l’ennemi. Baisse l’Attaque Spéciale de l’ennemi."
		desc: "100 % de chances de baisser l’Attaque Spéciale de la cible d’un niveau.",
		shortDesc: "100 % de chances de baisser l’Atq Spé des adversaires d’un niveau.",
	},
	snatch: {
		name: "Saisie",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Si un autre Pokémon utilise certaines capacités n’infligeant pas de dégâts ce tour-ci, le lanceur lui vole cette capacité pour l’utiliser lui-même. Si plusieurs Pokémon utilisent l’une de ces capacités ce tour-ci, toutes les capacités concernées sont volées par le premier Pokémon, dans l’ordre du tour, à avoir utilisé cette capacité ce tour-ci. Cet effet est ignoré tant que le lanceur est sous l’effet de Chute Libre.",
		shortDesc: "Le lanceur vole certaines capacités de soutien pour les utiliser lui-même.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} attend qu’une cible agisse !",
		activate: "  {POKEMON} saisit la capacité {TARGET:de} !",
	},
	snipeshot: {
		name: "Tir de Précision",
		// Official flavor text: "Le lanceur parvient toujours à viser la cible voulue, en ignorant l’effet des talents et des capacités capables de détourner les attaques."
		desc: "A plus de chances d’infliger un coup critique. Cette capacité ne peut être redirigée vers une autre cible par aucun effet.",
		shortDesc: "Taux de critique élevé. Ne peut pas être redirigée.",
	},
	snore: {
		name: "Ronflement",
		// Official flavor text: "Une attaque qui ne fonctionne que si le lanceur est endormi. Le boucan peut aussi apeurer l’ennemi."
		desc: "30 % de chances d’apeurer la cible. Échoue si le lanceur n’est pas endormi.",
		shortDesc: "Le lanceur doit être endormi. 30 % de chances d’apeurer la cible.",
	},
	snowscape: {
		name: "Chute de Neige",
		// Official flavor text: "Le lanceur invoque une tempête de neige qui dure cinq tours, ce qui augmente la Défense des Pokémon de type Glace."
		desc: "Pendant 5 tours, la météo devient Neige. Pendant l’effet, la Défense des Pokémon de type Glace est multipliée par 1,5 lorsqu’ils subissent des dégâts d’une attaque physique. Dure 8 tours si le lanceur tient une Roche Glace. Échoue si la météo actuelle est Neige.",
		shortDesc: "Pendant 5 tours, il neige. Glace : Défense ×1,5.",
	},
	soak: {
		name: "Détrempage",
		// Official flavor text: "Le lanceur projette beaucoup d’eau sur sa cible, qui devient de type Eau."
		desc: "La cible devient de type Eau. Échoue si la cible est Arceus ou Silvallié, si elle est déjà uniquement de type Eau, ou si elle est téracristallisée.",
		shortDesc: "La cible devient de type Eau.",
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
	softboiled: {
		name: "E-Coque",
		// Official flavor text: "Le lanceur récupère jusqu’à la moitié de ses PV max."
		desc: "Le lanceur récupère 1/2 de ses PV max, arrondi à l’entier le plus proche (0,5 vers le haut).",
		shortDesc: "Le lanceur récupère 50 % de ses PV max.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	solarbeam: {
		name: "Lance-Soleil",
		// Official flavor text: "Absorbe la lumière au premier tour et envoie un rayon puissant au tour suivant."
		desc: "Cette attaque se charge au premier tour et s’exécute au second. La puissance est divisée par deux si la météo est Pluie battante, Pluie, Tempête de sable ou Neige et que le lanceur ne tient pas de Parapluie Solide. Si le lanceur tient une Herbe Pouvoir ou si la météo est Soleil intense ou Soleil, la capacité s’exécute en un seul tour. Si le lanceur tient un Parapluie Solide et que la météo est Soleil intense ou Soleil, la capacité nécessite tout de même un tour de chargement.",
		shortDesc: "Se charge au tour 1. Frappe au tour 2. Pas de chargement au Soleil.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
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
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		prepare: "  {POKEMON} absorbe la lumière !",
	},
	solarblade: {
		name: "Lame Solaire",
		// Official flavor text: "Le lanceur absorbe la lumière au premier tour et attaque au second tour en libérant cette énergie sous forme de lames."
		desc: "Cette attaque se charge au premier tour et s’exécute au second. La puissance est divisée par deux si la météo est Pluie battante, Pluie, Tempête de sable ou Neige et que le lanceur ne tient pas de Parapluie Solide. Si le lanceur tient une Herbe Pouvoir ou si la météo est Soleil intense ou Soleil, la capacité s’exécute en un seul tour. Si le lanceur tient un Parapluie Solide et que la météo est Soleil intense ou Soleil, la capacité nécessite tout de même un tour de chargement.",
		shortDesc: "Se charge au tour 1. Frappe au tour 2. Pas de chargement au Soleil.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		prepare: "#solarbeam",
	},
	sonicboom: {
		name: "Sonic Boom",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Inflige 20 PV de dégâts à la cible.",
		shortDesc: "Inflige toujours 20 PV de dégâts.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	soulstealing7starstrike: {
		name: "Fauche-Âme des Sept Étoiles",
		shortDesc: "Aucun effet supplémentaire.",
	},
	spacialrend: {
		name: "Spatio-Rift",
		// Official flavor text: "Le lanceur déchire l’ennemi et l’espace autour de lui. Taux de critiques élevé."
		desc: "A plus de chances d’infliger un coup critique.",
		shortDesc: "Taux de critique élevé.",
	},
	spark: {
		name: "Étincelle",
		// Official flavor text: "Lance une charge électrique sur l’ennemi. Peut aussi le paralyser."
		desc: "30 % de chances de paralyser la cible.",
		shortDesc: "30 % de chances de paralyser la cible.",
	},
	sparklingaria: {
		name: "Aria de l’Écume",
		// Official flavor text: "Le lanceur émet plusieurs bulles en chantant. Soigne les brûlures des Pokémon touchés par ces bulles."
		desc: "Si le lanceur n’est pas K.O., la cible est guérie de sa brûlure.",
		shortDesc: "La cible est guérie de sa brûlure.",
	},
	sparklyswirl: {
		name: "Évo-Fabulo",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Soigne l’altération de statut non volatile de chaque Pokémon de l’équipe du lanceur.",
		shortDesc: "Soigne toutes les altérations de statut de l’équipe du lanceur.",
	},
	spectralthief: {
		name: "Clepto-Mânes",
		// Official flavor text: "Le lanceur plonge dans l’ombre de la cible, vole ses augmentations de stats et l’attaque."
		desc: "Les niveaux de stats supérieurs à 0 de la cible lui sont volés et appliqués au lanceur avant que les dégâts ne soient infligés.",
		shortDesc: "Vole les augmentations de stats de la cible avant d’infliger des dégâts.",

		clearBoost: "  {SOURCE} vole les augmentations de stats !",
	},
	speedswap: {
		name: "Permuvitesse",
		// Official flavor text: "Intervertit la Vitesse du lanceur et celle de la cible."
		desc: "Le lanceur échange sa stat de Vitesse avec celle de la cible. Les modifications de niveaux de stats ne sont pas affectées.",
		shortDesc: "Échange sa stat de Vitesse avec celle de la cible.",

		activate: "  {POKEMON} et sa cible échangent leur Vitesse !",
	},
	spicyextract: {
		name: "Habanerage",
		// Official flavor text: "Le lanceur relâche un concentré extrêmement pimenté sur la cible, ce qui augmente beaucoup l'Attaque de celle-ci, mais baisse aussi beaucoup sa Défense."
		desc: "Augmente l’Attaque de la cible de deux niveaux et baisse sa Défense de deux niveaux.",
		shortDesc: "Augmente l’Atq de la cible de 2 niveaux et baisse sa Déf de 2 niveaux.",
	},
	spiderweb: {
		name: "Toile",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Empêche la cible d’être remplacée. La cible peut tout de même être remplacée si elle tient une Carapace Mue ou si elle utilise Relais, Eau Revoir, Dernier Mot, Téléport, Demi-Tour ou Change Éclair. L’effet prend fin si le lanceur ou la cible quitte le terrain.",
		shortDesc: "Empêche la cible d’être remplacée.",
		gen7: {
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
	spikecannon: {
		name: "Picanon",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Frappe de deux à cinq fois. 35 % de chances de frapper deux ou trois fois et 15 % de chances de frapper quatre ou cinq fois. Si l’un des coups détruit le clone de la cible, celle-ci subit les dégâts des coups restants. Si le lanceur a le talent Multi-Coups, cette capacité frappe toujours cinq fois.",
		shortDesc: "Frappe de 2 à 5 fois en un tour.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	spikes: {
		name: "Picots",
		// Official flavor text: "Le lanceur disperse des piquants sur le sol pour blesser tout ennemi qui entre au combat."
		desc: "Installe un piège dans le camp adverse, qui blesse chaque Pokémon adverse entrant au combat, sauf s’il est de type Vol ou a le talent Lévitation. Peut être utilisée jusqu’à trois fois avant d’échouer. Les adversaires perdent 1/8 de leurs PV max avec une couche, 1/6 de leurs PV max avec deux couches et 1/4 de leurs PV max avec trois couches, toujours arrondi à l’inférieur. Peut être retiré du camp adverse si un Pokémon utilise Grand Nettoyage, ou si un Pokémon adverse utilise avec succès Toupie Éclat, Tour Rapide ou Anti-Brume, ou est touché par Anti-Brume.",
		shortDesc: "Blesse les adversaires au sol à leur entrée. 3 couches max.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  Des picots s’éparpillent autour de {TEAM} !",
		end: "  Il n’y a plus de picots autour de {TEAM} !",
		damage: "  {POKEMON} est blessé par les picots !",
	},
	spikyshield: {
		name: "Pico-Défense",
		// Official flavor text: "Protège des attaques, et diminue les PV de tout attaquant qui entre en contact avec le lanceur."
		desc: "Le lanceur est protégé de la plupart des attaques des autres Pokémon pendant ce tour, et les Pokémon qui entrent en contact avec lui perdent 1/8 de leurs PV max, arrondi à l’inférieur. Cette capacité a 1 chance sur X de réussir, où X vaut 1 au départ et triple à chaque utilisation réussie de cette capacité. X revient à 1 si cette capacité échoue, si la dernière capacité utilisée par le lanceur n’est pas Blockhaus, Rempart Brûlant, Détection, Ténacité, Bouclier Royal, Gardomax, Blocage, Abri, Prévention, Piège de Fil, Pico-Défense ou Garde Large, ou si c’était l’une de ces capacités et que la protection du lanceur a été percée. Échoue si le lanceur agit en dernier ce tour-ci.",
		shortDesc: "Protège des capacités. Contact : perd 1/8 des PV max.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		damage: "  {POKEMON} s’est blessé en attaquant !",
	},
	spinout: {
		name: "Dérapage",
		// Official flavor text: "Le lanceur met tout son poids sur ses pattes et effectue de violentes rotations, ce qui inflige des dégâts à la cible, mais baisse beaucoup la Vitesse du lanceur."
		desc: "Baisse la Vitesse du lanceur de deux niveaux.",
		shortDesc: "Baisse la Vitesse du lanceur de 2 niveaux.",
	},
	spiritbreak: {
		name: "Choc Émotionnel",
		// Official flavor text: "Le lanceur attaque son adversaire avec une telle force que ce dernier peut s’en retrouver profondément troublé. Baisse l’Attaque Spéciale de la cible."
		desc: "100 % de chances de baisser l’Attaque Spéciale de la cible d’un niveau.",
		shortDesc: "100 % de chances de baisser l’Atq Spé de la cible d’un niveau.",
	},
	spiritshackle: {
		name: "Tisse Ombre",
		// Official flavor text: "Une attaque qui coud l’ennemi à son ombre, ce qui l’empêche de s’enfuir."
		desc: "Empêche la cible d’être remplacée. La cible peut tout de même être remplacée si elle tient une Carapace Mue ou si elle utilise Relais, Eau Revoir, Dernier Mot, Téléport, Demi-Tour ou Change Éclair. L’effet prend fin si le lanceur ou la cible quitte le terrain.",
		shortDesc: "Empêche la cible d’être remplacée.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	spite: {
		name: "Dépit",
		// Official flavor text: "Le lanceur exprime son ressentiment en retirant 4 PP de la dernière capacité de l’ennemi."
		desc: "La dernière capacité utilisée par la cible perd 4 PP. Échoue si la cible n’a pas encore agi, si la capacité a 0 PP, ou si la cible ne la connaît plus.",
		shortDesc: "Retire 4 PP à la dernière capacité utilisée par la cible.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  Les PP de la capacité {MOVE} {TARGET:de} baissent de {NUMBER} !",
	},
	spitup: {
		name: "Relâche",
		// Official flavor text: "Libère dans une attaque la puissance précédemment accumulée avec Stockage."
		desc: "La puissance est égale à 100 fois le compteur de Stockage du lanceur. Échoue si le compteur de Stockage du lanceur est à 0. Que cette capacité réussisse ou non, la Défense et la Défense Spéciale du lanceur baissent d’autant de niveaux que Stockage les avait augmentées, et le compteur de Stockage du lanceur revient à 0.",
		shortDesc: "Plus puissante selon le nombre d’utilisations de Stockage.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	splash: {
		name: "Trempette",
		shortDesc: "Aucune utilité en combat compétitif.",

		activate: "  Mais rien ne se passe !",
	},
	splinteredstormshards: {
		name: "Hurlement des Roches-Lames",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Met fin aux effets de Champ Électrifié, Champ Herbu, Champ Brumeux et Champ Psychique.",
		shortDesc: "Met fin aux effets du champ.",
	},
	splishysplash: {
		name: "Pika-Splash",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "30 % de chances de paralyser la cible.",
		shortDesc: "30 % de chances de paralyser la cible.",
	},
	spore: {
		name: "Spore",
		shortDesc: "Endort la cible.",
	},
	spotlight: {
		name: "Projecteur",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Jusqu’à la fin du tour, toutes les attaques à cible unique des adversaires de la cible sont redirigées vers la cible. Ces attaques sont redirigées vers la cible avant de pouvoir être renvoyées par Reflet Magik ou le talent Miroir Magik, ou attirées par les talents Paratonnerre ou Lavabo. Échoue s’il ne s’agit pas d’un combat en Duo ou d’un Combat Royal.",
		shortDesc: "Les capacités des adversaires de la cible sont redirigées vers elle ce tour-ci.",

		start: "#followme",
		startFromZEffect: "#followme",
	},
	springtidestorm: {
		name: "Typhon Passionné",
		// Official flavor text: "Le lanceur déclenche un violent typhon de haine et d'amour qui s'abat sur la cible. Peut baisser l'Attaque de celle-ci."
		desc: "30 % de chances de baisser l’Attaque de la cible d’un niveau.",
		shortDesc: "30 % de chances de baisser l’Attaque des adversaires d’un niveau.",
	},
	stealthrock: {
		name: "Piège de Roc",
		// Official flavor text: "Lance des pierres flottantes autour de l’ennemi, qui blessent tout adversaire entrant au combat."
		desc: "Installe un piège dans le camp adverse, qui blesse chaque Pokémon adverse entrant au combat. Échoue si l’effet est déjà actif dans le camp adverse. Les adversaires perdent 1/32, 1/16, 1/8, 1/4 ou 1/2 de leurs PV max, arrondi à l’inférieur, selon leur faiblesse au type Roche (respectivement 0,25×, 0,5×, neutre, 2× ou 4×). Peut être retiré du camp adverse si un Pokémon utilise Grand Nettoyage, ou si un Pokémon adverse utilise avec succès Toupie Éclat, Tour Rapide ou Anti-Brume, ou est touché par Anti-Brume.",
		shortDesc: "Blesse les adversaires à leur entrée. Tient compte de la faiblesse Roche.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  Des pierres pointues lévitent autour de {TEAM} !",
		end: "  Les pierres pointues autour de {TEAM} ont disparu !",
		damage: "  Des pierres pointues transpercent {POKEMON} !",
	},
	steameruption: {
		name: "Jet de Vapeur",
		// Official flavor text: "Plonge l’ennemi dans une chaleur étouffante. Peut le brûler."
		desc: "30 % de chances de brûler la cible. La cible est dégelée si elle est gelée.",
		shortDesc: "30 % de chances de brûler la cible. Dégèle la cible.",
	},
	steamroller: {
		name: "Bulldoboule",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "30 % de chances d’apeurer la cible. Les dégâts doublent et la capacité ne peut pas rater si la cible a utilisé Lilliput depuis son entrée au combat.",
		shortDesc: "30 % de chances d’apeurer la cible.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	steelbeam: {
		name: "Métalaser",
		// Official flavor text: "Le lanceur concentre du métal issu de tout son corps en un rayon qu’il projette violemment sur sa cible. Il subit aussi des dégâts."
		desc: "Que cette capacité réussisse ou non, et même si cela le met K.O., le lanceur perd 1/2 de ses PV max, arrondi au supérieur, sauf s’il a le talent Garde Magik.",
		shortDesc: "Le lanceur perd 50 % de ses PV max.",

		damage: "#mindblown",
	},
	steelroller: {
		name: "Métalliroue",
		// Official flavor text: "Une attaque qui inflige des dégâts et fait disparaître le champ actif, mais qui échoue s’il n’y en a pas à ce moment."
		desc: "Échoue si aucun champ n’est actif. Met fin aux effets de Champ Électrifié, Champ Herbu, Champ Brumeux et Champ Psychique.",
		shortDesc: "Échoue si aucun champ n’est actif. Met fin au champ.",
	},
	steelwing: {
		name: "Ailes d’Acier",
		// Official flavor text: "Le lanceur frappe l’ennemi avec des ailes d’acier. Peut aussi augmenter la Défense du lanceur."
		desc: "10 % de chances d’augmenter la Défense du lanceur d’un niveau.",
		shortDesc: "10 % de chances d’augmenter la Défense du lanceur d’un niveau.",
	},
	stickyweb: {
		name: "Toile Gluante",
		// Official flavor text: "Déploie une toile visqueuse autour de l’ennemi qui ralentit la Vitesse de tout adversaire entrant au combat."
		desc: "Installe un piège dans le camp adverse, qui baisse d’un niveau la Vitesse de chaque Pokémon adverse entrant au combat, sauf s’il est de type Vol ou a le talent Lévitation. Échoue si l’effet est déjà actif dans le camp adverse. Peut être retiré du camp adverse si un Pokémon utilise Grand Nettoyage, ou si un Pokémon adverse utilise avec succès Toupie Éclat, Tour Rapide ou Anti-Brume, ou est touché par Anti-Brume.",
		shortDesc: "Baisse d’un niveau la Vitesse des adversaires au sol à leur entrée.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  Le terrain est couvert d’une toile gluante du côté de {TEAM} !",
		end: "  La toile gluante du côté de {TEAM} a disparu !",
		activate: "  {POKEMON} est pris dans une toile gluante !",
	},
	stockpile: {
		name: "Stockage",
		// Official flavor text: "Le lanceur accumule de la puissance et augmente sa Défense et sa Défense Spéciale. Peut être utilisée trois fois."
		desc: "Augmente la Défense et la Défense Spéciale du lanceur d’un niveau. Le compteur de Stockage du lanceur augmente de 1. Échoue si le compteur de Stockage du lanceur est à 3. Le compteur de Stockage du lanceur revient à 0 lorsque celui-ci quitte le combat.",
		shortDesc: "Augmente la Défense et la Déf Spé du lanceur d’un niveau. 3 utilisations max.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} utilise la capacité Stockage {NUMBER} fois !",
		end: "  Les effets accumulés par {POKEMON} se dissipent !",
	},
	stokedsparksurfer: {
		name: "Électro-Surf Survolté",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "100 % de chances de paralyser la cible.",
		shortDesc: "100 % de chances de paralyser la cible.",
	},
	stomp: {
		name: "Écrasement",
		// Official flavor text: "Écrase l’ennemi avec un énorme pied. Peut aussi l’apeurer."
		desc: "30 % de chances d’apeurer la cible. Les dégâts doublent et la capacité ne peut pas rater si la cible a utilisé Lilliput depuis son entrée au combat.",
		shortDesc: "30 % de chances d’apeurer la cible.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	stompingtantrum: {
		name: "Trépignement",
		// Official flavor text: "Le lanceur attaque en utilisant sa frustration. S’il a utilisé une capacité qui a échoué au tour précédent, la puissance de Trépignement est doublée."
		desc: "La puissance double si la dernière capacité utilisée par le lanceur au tour précédent, y compris une capacité appelée par une autre capacité ou utilisée via Sommation, Reflet Magik, Saisie ou les talents Danseuse ou Miroir Magik, n’a produit aucun de ses effets normaux (sans compter les dégâts subis en ratant Pied Voltige, Pied Sauté ou Caboche-Kaboum), ou si le lanceur a été empêché d’agir par un effet autre que la recharge ou Chute Libre. Une capacité bloquée par Blockhaus, Détection, Bouclier Royal, Abri, Pico-Défense, Vigilance, Tatamigaeshi, Prévention ou Garde Large ne double pas la puissance de cette capacité, pas plus que Rebond ou Vol interrompus prématurément par l’effet de Gravité, Anti-Air ou Myria-Flèches.",
		shortDesc: "La puissance double si la dernière capacité du lanceur a échoué.",
	},
	stoneaxe: {
		name: "Hache de Pierre",
		// Official flavor text: "Le lanceur attaque le point faible de sa cible avec sa hache de pierre. Les débris de pierre se mettent alors à flotter autour de la cible."
		desc: "Si cette capacité réussit, elle installe un piège dans le camp adverse, qui blesse chaque Pokémon adverse entrant au combat. Les adversaires perdent 1/32, 1/16, 1/8, 1/4 ou 1/2 de leurs PV max, arrondi à l’inférieur, selon leur faiblesse au type Roche (respectivement 0,25×, 0,5×, neutre, 2× ou 4×). Peut être retiré du camp adverse si un Pokémon utilise Grand Nettoyage, ou si un Pokémon adverse utilise avec succès Toupie Éclat, Tour Rapide ou Anti-Brume, ou est touché par Anti-Brume.",
		shortDesc: "Installe Piège de Roc dans le camp de la cible.",
	},
	stoneedge: {
		name: "Lame de Roc",
		// Official flavor text: "Fait surgir des pierres aiguisées sous l’ennemi. Taux de critiques élevé."
		desc: "A plus de chances d’infliger un coup critique.",
		shortDesc: "Taux de critique élevé.",
	},
	storedpower: {
		name: "Force Ajoutée",
		// Official flavor text: "Le lanceur attaque l’ennemi avec une force accumulée. Plus les stats du lanceur sont augmentées, plus le coup est efficace."
		desc: "La puissance est égale à 20+(X × 20), où X est le total des modifications de niveaux de stats du lanceur supérieures à 0.",
		shortDesc: "Puissance de 20, +20 pour chaque augmentation de stat du lanceur.",
	},
	stormthrow: {
		name: "Yama Arashi",
		// Official flavor text: "Un coup très puissant dont l’effet est toujours critique."
		desc: "Cette capacité inflige toujours un coup critique, sauf si la cible est sous l’effet d’Air Veinard ou a le talent Armurbaston ou Coque Armure.",
		shortDesc: "Inflige toujours un coup critique.",
	},
	strangesteam: {
		name: "Vapeur Féérique",
		// Official flavor text: "Le lanceur émet de la vapeur pour attaquer sa cible. Peut aussi la rendre confuse."
		desc: "20 % de chances de rendre la cible confuse.",
		shortDesc: "20 % de chances de rendre la cible confuse.",
	},
	strength: {
		name: "Force",
		shortDesc: "Aucun effet supplémentaire.",
	},
	strengthsap: {
		name: "Vole-Force",
		// Official flavor text: "Rend au lanceur une quantité de PV équivalente à la stat d’Attaque de la cible, puis baisse celle-ci."
		desc: "Baisse l’Attaque de la cible d’un niveau. Le lanceur récupère des PV égaux à la stat d’Attaque de la cible, calculée avec son niveau de stat d’avant l’utilisation de cette capacité. Si le lanceur tient une Grosse Racine, les PV récupérés sont multipliés par 1,3, arrondi à l’entier le plus proche (0,5 vers le bas). Échoue si le niveau d’Attaque de la cible est à -6.",
		shortDesc: "Le lanceur récupère des PV égaux à l’Atq de la cible. Baisse son Atq d’un niveau.",
	},
	stringshot: {
		name: "Sécrétion",
		// Official flavor text: "Le lanceur crache de la soie pour ligoter l’ennemi et beaucoup baisser sa Vitesse."
		desc: "Baisse la Vitesse de la cible de deux niveaux.",
		shortDesc: "Baisse la Vitesse des adversaires de 2 niveaux.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	struggle: {
		name: "Lutte",
		// Official flavor text: "Une attaque désespérée, utilisée quand le lanceur n’a plus de PP. Le blesse aussi légèrement."
		desc: "Inflige des dégâts sans type à un Pokémon adverse choisi au hasard. Si cette capacité réussit, le lanceur perd 1/4 de ses PV max, arrondi à l’entier le plus proche (0,5 vers le haut), et le talent Tête de Roc ne l’en empêche pas. Cette capacité est utilisée automatiquement si aucune des capacités connues du lanceur ne peut être sélectionnée.",
		shortDesc: "Le lanceur perd 1/4 de ses PV max.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	strugglebug: {
		name: "Survinsecte",
		// Official flavor text: "Le lanceur se débat de toutes ses forces, et baisse l’Attaque Spéciale de l’ennemi."
		desc: "100 % de chances de baisser l’Attaque Spéciale de la cible d’un niveau.",
		shortDesc: "100 % de chances de baisser l’Atq Spé des adversaires d’un niveau.",
	},
	stuffcheeks: {
		name: "Garde-à-Joues",
		// Official flavor text: "Le lanceur mange la Baie qu’il tient, ce qui augmente beaucoup sa Défense."
		desc: "Cette capacité ne peut pas être sélectionnée si le lanceur ne tient pas de Baie. Le lanceur mange sa Baie et augmente sa Défense de deux niveaux. Cet effet n’est pas empêché par les talents Maladresse ou Tension, ni par les effets d’Embargo ou de Zone Magique. Échoue si le lanceur ne tient pas de Baie.",
		shortDesc: "Nécessite de tenir une Baie. Le lanceur la mange, Déf +2.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	stunspore: {
		name: "Para-Spore",
		// Official flavor text: "Le lanceur répand sur l’ennemi une poudre qui le paralyse."
		desc: "Paralyse la cible.",
		shortDesc: "Paralyse la cible.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	submission: {
		name: "Sacrifice",
		// Official flavor text: "Le lanceur agrippe l’ennemi et l’écrase au sol. Blesse aussi légèrement le lanceur."
		desc: "Si la cible a perdu des PV, le lanceur subit des dégâts de recul égaux à 1/4 des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut), mais d’au moins 1 PV.",
		shortDesc: "Dégâts de recul de 1/4.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	substitute: {
		name: "Clonage",
		// Official flavor text: "Le lanceur crée un clone en sacrifiant quelques PV. Ce clone sert de leurre."
		desc: "Le lanceur sacrifie 1/4 de ses PV max, arrondi à l’inférieur, pour créer un clone qui prend sa place au combat. Le clone disparaît lorsqu’il a subi suffisamment de dégâts, si le lanceur se retire ou est K.O., ou si un Pokémon utilise Grand Nettoyage. Relais permet de transmettre le clone à un allié, et le clone conserve ses PV restants. Tant qu’il n’est pas détruit, le clone subit les dégâts de toutes les attaques des autres Pokémon et protège le lanceur des altérations de statut et des modifications de niveaux de stats causées par les autres Pokémon. Les attaques sonores et les Pokémon ayant le talent Infiltration ignorent les clones. Le lanceur subit toujours normalement les dégâts de la météo et des altérations de statut lorsqu’il est derrière son clone. Si le clone est détruit pendant une attaque à coups multiples, le lanceur subit les dégâts des coups restants. Si un clone est créé alors que le lanceur est piégé par une capacité de piège, l’effet de piège prend fin immédiatement. Échoue si le lanceur n’a pas assez de PV restants pour créer un clone sans être mis K.O., ou s’il a déjà un clone.",
		shortDesc: "Le lanceur sacrifie 1/4 de ses PV max pour créer un clone.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} crée un clone !",
		alreadyStarted: "  {POKEMON} a déjà un clone !",
		end: "  Le clone {POKEMON:de} disparaît...",
		fail: "  Mais il est trop faible pour créer un clone !",
		activate: "  Le clone subit l’attaque à la place {POKEMON:de} !",
	},
	subzeroslammer: {
		name: "Laser Cryogénique",
		shortDesc: "La puissance est égale à la puissance Z de la capacité de base.",
	},
	suckerpunch: {
		name: "Coup Bas",
		// Official flavor text: "Permet au lanceur de frapper en priorité. Échoue si l’ennemi ne prépare pas une attaque."
		desc: "Échoue si la cible n’a pas choisi d’attaque physique, d’attaque spéciale ou Moi d’Abord ce tour-ci, ou si la cible agit avant le lanceur.",
		shortDesc: "Frappe généralement en premier. Échoue si la cible n’attaque pas.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	sunnyday: {
		name: "Zénith",
		// Official flavor text: "Fait briller le soleil pendant cinq tours, augmentant la puissance des capacités de type Feu et baissant celle des capacités de type Eau."
		desc: "Pendant 5 tours, la météo devient Soleil. Pendant l’effet, les dégâts des attaques de type Feu sont multipliés par 1,5 et ceux des attaques de type Eau par 0,5. Dure 8 tours si le lanceur tient une Roche Chaude. Échoue si la météo actuelle est Soleil.",
		shortDesc: "Pendant 5 tours, un soleil intense renforce les capacités Feu.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	sunsteelstrike: {
		name: "Choc Météore",
		// Official flavor text: "Le lanceur fonce sur la cible à la vitesse d’une météorite. Ignore le talent de l’ennemi."
		desc: "Cette capacité et ses effets ignorent les talents des autres Pokémon.",
		shortDesc: "Ignore les talents des autres Pokémon.",
	},
	supercellslam: {
		name: "Volt Assaut",
		// Official flavor text: "Le lanceur se charge en électricité et fond sur la cible. S'il échoue, le lanceur se blesse."
		desc: "Si cette attaque échoue, le lanceur perd la moitié de ses PV max, arrondi à l’inférieur, en dégâts de chute. Les Pokémon ayant le talent Garde Magik ne subissent pas de dégâts de chute. Les dégâts doublent et la capacité ne peut pas rater si la cible a utilisé Lilliput depuis son entrée au combat.",
		shortDesc: "Le lanceur perd 50 % de ses PV max s’il rate.",

		damage: "#crash",
	},
	superfang: {
		name: "Croc Fatal",
		// Official flavor text: "Une vilaine morsure d’incisives qui réduit de moitié les PV de l’ennemi."
		desc: "Inflige à la cible des dégâts égaux à la moitié de ses PV actuels, arrondi à l’inférieur, mais d’au moins 1 PV.",
		shortDesc: "Inflige des dégâts égaux à 1/2 des PV actuels de la cible.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	superpower: {
		name: "Surpuissance",
		// Official flavor text: "Une attaque puissante, mais qui baisse l’Attaque et la Défense du lanceur."
		desc: "Baisse l’Attaque et la Défense du lanceur d’un niveau.",
		shortDesc: "Baisse l’Attaque et la Défense du lanceur d’un niveau.",
	},
	supersonic: {
		name: "Ultrason",
		shortDesc: "Rend la cible confuse.",
	},
	supersonicskystrike: {
		name: "Piqué Supersonique",
		shortDesc: "La puissance est égale à la puissance Z de la capacité de base.",
	},
	surf: {
		name: "Surf",
		// Official flavor text: "Une énorme vague s’abat sur le champ de bataille et inflige des dégâts à tous les Pokémon autour du lanceur."
		desc: "Les dégâts doublent si la cible utilise Plongée.",
		shortDesc: "Touche les Pokémon adjacents. Dégâts doublés contre Plongée.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	surgingstrikes: {
		name: "Torrent de Coups",
		// Official flavor text: "Le lanceur assène trois coups fluides à l’ennemi. Cette technique qui inflige toujours un coup critique est réservée à ceux qui maîtrisent la puissance de l’Eau."
		desc: "Frappe trois fois. Cette capacité inflige toujours un coup critique, sauf si la cible est sous l’effet d’Air Veinard ou a le talent Armurbaston ou Coque Armure.",
		shortDesc: "Inflige toujours un coup critique. Frappe 3 fois.",
	},
	swagger: {
		name: "Vantardise",
		// Official flavor text: "Fait enrager la cible et la plonge dans la confusion, mais augmente beaucoup son Attaque."
		desc: "Augmente l’Attaque de la cible de deux niveaux et la rend confuse.",
		shortDesc: "Augmente l’Attaque de la cible de 2 niveaux et la rend confuse.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	swallow: {
		name: "Avale",
		// Official flavor text: "Le lanceur absorbe la puissance accumulée avec Stockage pour restaurer ses PV."
		desc: "Le lanceur récupère des PV selon son compteur de Stockage : 1/4 de ses PV max s’il est à 1, 1/2 de ses PV max s’il est à 2, arrondi à l’entier le plus proche (0,5 vers le bas) dans les deux cas, et tous ses PV s’il est à 3. Échoue si le compteur de Stockage du lanceur est à 0. La Défense et la Défense Spéciale du lanceur baissent d’autant de niveaux que Stockage les avait augmentées, et le compteur de Stockage du lanceur revient à 0.",
		shortDesc: "Soigne le lanceur selon le nombre d’utilisations de Stockage.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	sweetkiss: {
		name: "Doux Baiser",
		shortDesc: "Rend la cible confuse.",
	},
	sweetscent: {
		name: "Doux Parfum",
		// Official flavor text: "Un doux parfum qui réduit beaucoup l’Esquive de l’ennemi."
		desc: "Baisse l’Esquive de la cible de deux niveaux.",
		shortDesc: "Baisse l’Esquive des adversaires de 2 niveaux.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	swift: {
		name: "Météores",
		// Official flavor text: "Le lanceur envoie des rayons d’étoiles. Touche toujours l’ennemi."
		desc: "Cette capacité ne peut pas rater.",
		shortDesc: "Cette capacité ne peut pas rater. Touche les adversaires.",
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	switcheroo: {
		name: "Passe-Passe",
		// Official flavor text: "Le lanceur échange son objet avec celui de la cible à une vitesse que l’œil a du mal à suivre."
		desc: "Le lanceur échange l’objet qu’il tient avec celui de la cible. Échoue si ni le lanceur ni la cible ne tiennent d’objet, ou si le lanceur tente de donner ou de retirer une Gemme Bleue, une Gemme Rouge, un Globe Adamant, un Globe Perlé, un Globe Platiné, une Plaque, un Module, une ROM, une Épée Rouillée, un Bouclier Rouillé, une Énergie Booster ou un Masque à, respectivement, Kyogre, Groudon, Dialga, Palkia, Giratina, Arceus, Genesect, Silvallié, Zacian, Zamazenta, un Pokémon Paradoxe ou Ogerpon. Ici, les Pokémon Paradoxe incluent toutes les espèces ayant le talent Paléosynthèse ou Charge Quantique, sauf Feu-Perçant, Ire-Foudre, Roc-de-Fer et Chef-de-Fer. La cible est immunisée contre cette capacité si elle a le talent Glu.",
		shortDesc: "Le lanceur échange l’objet qu’il tient avec celui de la cible.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
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

		activate: "#trick",
	},
	swordsdance: {
		name: "Danse Lames",
		// Official flavor text: "Une danse frénétique qui exalte l’esprit combatif. Augmente beaucoup l’Attaque du lanceur."
		desc: "Augmente l’Attaque du lanceur de deux niveaux.",
		shortDesc: "Augmente l’Attaque du lanceur de 2 niveaux.",
	},
	synchronoise: {
		name: "Synchropeine",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "La cible est immunisée si elle ne partage aucun type avec le lanceur.",
		shortDesc: "Touche les Pokémon adjacents partageant un type avec le lanceur.",
	},
	synthesis: {
		name: "Synthèse",
		// Official flavor text: "Un soin qui restaure des PV au lanceur. Son efficacité varie en fonction de la météo."
		desc: "Le lanceur récupère 1/2 de ses PV max si la météo est Vent mystérieux ou s’il n’y a aucune météo, ou s’il tient un Parapluie Solide, 2/3 de ses PV max si la météo est Soleil intense ou Soleil, et 1/4 de ses PV max si la météo est Pluie battante, Pluie, Tempête de sable ou Neige, le tout arrondi à l’entier le plus proche (0,5 vers le bas).",
		shortDesc: "Soigne le lanceur d’une quantité qui dépend de la météo.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	syrupbomb: {
		name: "Bombe au Sirop",
		// Official flavor text: "Le lanceur jette une bombe qui recouvre la cible de sirop gluant et fait progressivement baisser la Vitesse de la cible pendant trois tours."
		desc: "Si cette capacité réussit, la Vitesse de la cible baisse d’un niveau à la fin de chaque tour pendant 3 tours.",
		shortDesc: "La Vitesse de la cible baisse d’un niveau pendant 3 tours.",

		start: "  {POKEMON} est recouvert de sirop !",
	},
	tackle: {
		name: "Charge",
		shortDesc: "Aucun effet supplémentaire.",
	},
	tachyoncutter: {
		name: "Lame Tachyonique",
		// Official flavor text: "Le lanceur concentre des particules élémentaires pour créer une lame qui inflige des dégâts à la cible deux fois d'affilée. N'échoue jamais."
		desc: "Frappe deux fois. Si le premier coup détruit le clone de la cible, celle-ci subit les dégâts du second coup. Cette capacité ne peut pas rater.",
		shortDesc: "Frappe deux fois. Cette capacité ne peut pas rater.",
	},
	tailglow: {
		name: "Lumi-Queue",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Augmente l’Attaque Spéciale du lanceur de trois niveaux.",
		shortDesc: "Augmente l’Atq Spé du lanceur de 3 niveaux.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	tailslap: {
		name: "Plumo-Queue",
		// Official flavor text: "Le lanceur frappe l’ennemi de deux à cinq fois d’affilée avec sa queue robuste."
		desc: "Frappe de deux à cinq fois. 35 % de chances de frapper deux ou trois fois et 15 % de chances de frapper quatre ou cinq fois. Si l’un des coups détruit le clone de la cible, celle-ci subit les dégâts des coups restants. Si le lanceur a le talent Multi-Coups, cette capacité frappe toujours cinq fois. Si le lanceur tient un Dé Pipé, cette capacité frappe de 4 à 5 fois.",
		shortDesc: "Frappe de 2 à 5 fois en un tour.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	tailwhip: {
		name: "Mimi-Queue",
		// Official flavor text: "Le lanceur remue son adorable queue pour tromper la vigilance de l’ennemi et baisser sa Défense."
		desc: "Baisse la Défense de la cible d’un niveau.",
		shortDesc: "Baisse la Défense des adversaires d’un niveau.",
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	tailwind: {
		name: "Vent Arrière",
		// Official flavor text: "Génère une rafale de vent qui augmente la Vitesse des Pokémon de l’équipe pendant quatre tours."
		desc: "Pendant 4 tours, la Vitesse du lanceur et des membres de son équipe est doublée. Échoue si cette capacité est déjà active pour le camp du lanceur.",
		shortDesc: "Pendant 4 tours, la Vitesse des alliés est doublée.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  Un vent arrière souffle sur {TEAM} !",
		end: "  Le vent arrière soufflant sur {TEAM} s’arrête !",
	},
	takedown: {
		name: "Bélier",
		// Official flavor text: "Une charge violente qui blesse aussi légèrement le lanceur."
		desc: "Si la cible a perdu des PV, le lanceur subit des dégâts de recul égaux à 1/4 des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut), mais d’au moins 1 PV.",
		shortDesc: "Dégâts de recul de 1/4.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	takeheart: {
		name: "Extravaillance",
		// Official flavor text: "Le lanceur fait preuve de bravoure pour soigner ses altérations de statut et augmenter son Attaque Spéciale ainsi que sa Défense Spéciale."
		desc: "Le lanceur guérit de son altération de statut non volatile. Augmente l’Attaque Spéciale et la Défense Spéciale du lanceur d’un niveau.",
		shortDesc: "Soigne le statut du lanceur, augmente Atq Spé et Déf Spé d’un niveau.",
	},
	tarshot: {
		name: "Goudronnage",
		// Official flavor text: "Le lanceur recouvre sa cible de goudron liquide pour baisser sa Vitesse et la rendre vulnérable au feu."
		desc: "Baisse la Vitesse de la cible d’un niveau. Jusqu’à ce que la cible se retire, l’efficacité des capacités de type Feu contre elle est doublée.",
		shortDesc: "La cible subit -1 Vit et devient plus vulnérable au Feu.",

		start: "  {POKEMON} est maintenant vulnérable au feu !",
	},
	taunt: {
		name: "Provoc",
		// Official flavor text: "Provoque l’ennemi. L’oblige à n’utiliser que des attaques pendant trois tours."
		desc: "Empêche la cible d’utiliser des capacités n’infligeant pas de dégâts pendant ses trois prochains tours. Les Pokémon ayant le talent Benêt ou protégés par le talent Aroma-Voile y sont immunisés.",
		shortDesc: "La cible ne peut pas utiliser de capacités de statut pendant ses 3 prochains tours.",
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
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} répond à la Provoc !",
		end: "  {POKEMON} s’est remis de la Provoc !",
		cant: "{POKEMON} ne peut pas utiliser la capacité {MOVE} après la Provoc !",
	},
	tearfullook: {
		name: "Larme à l’Œil",
		// Official flavor text: "Le lanceur jette un regard plein de larmes à la cible. Celle-ci perd toute velléité de combat et voit son Attaque et son Attaque Spéciale baisser."
		desc: "Baisse l’Attaque et l’Attaque Spéciale de la cible d’un niveau.",
		shortDesc: "Baisse l’Attaque et l’Atq Spé de la cible d’un niveau.",
	},
	teatime: {
		name: "Thérémonie",
		// Official flavor text: "Le lanceur invite tous les Pokémon sur le terrain à prendre le goûter autour d’une tasse de thé. Ceux qui tiennent une Baie la mangent."
		desc: "Tous les Pokémon au combat consomment la Baie qu’ils tiennent. Cet effet n’est pas empêché par les clones, les talents Maladresse ou Tension, ni par les effets d’Embargo ou de Zone Magique. Échoue si aucun Pokémon au combat ne tient de Baie.",
		shortDesc: "Tous les Pokémon au combat consomment leur Baie.",

		activate: "  C’est l’heure du thé ! Tout le monde mange sa Baie.",
		fail: "  Mais rien ne se passe !",
	},
	technoblast: {
		name: "Techno-Buster",
		// Official flavor text: "Le lanceur projette un rayon lumineux sur l’ennemi. Le type varie selon le Module que tient le lanceur."
		desc: "Le type de cette capacité dépend du Module tenu par le lanceur.",
		shortDesc: "Le type varie selon le Module tenu.",
	},
	tectonicrage: {
		name: "Éruption Géo-Sismique",
		shortDesc: "La puissance est égale à la puissance Z de la capacité de base.",
	},
	teeterdance: {
		name: "Danse Folle",
		// Official flavor text: "Danse qui rend confus tous les Pokémon autour du lanceur."
		desc: "Rend la cible confuse.",
		shortDesc: "Rend confus les Pokémon adjacents.",
	},
	telekinesis: {
		name: "Lévikinésie",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Pendant 3 tours, la cible ne peut éviter aucune attaque lancée contre elle, à l’exception des capacités qui mettent K.O. en un coup, tant qu’elle reste au combat. Pendant l’effet, la cible est immunisée contre les attaques de type Sol et les effets de Picots, Pics Toxik, Toile Gluante et du talent Piège Sable tant qu’elle reste au combat. Si la cible utilise Relais, son remplaçant bénéficie de l’effet. Racines, Anti-Air, Myria-Flèches et Balle Fer l’emportent sur cette capacité si la cible est sous l’un de leurs effets. Échoue si la cible est déjà sous cet effet ou sous l’effet de Racines, Anti-Air ou Myria-Flèches. La cible est immunisée contre cette capacité au moment de son utilisation s’il s’agit de Taupiqueur, Triopikeur, Taupiqueur d’Alola, Triopikeur d’Alola, Bacabouh, Trépassable ou d’Ectoplasma méga-évolué. Méga-Ectoplasma ne peut en aucun cas être sous cet effet.",
		shortDesc: "Pendant 3 tours, la cible lévite mais ne peut esquiver aucune capacité.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  Ça fait léviter {POKEMON} !",
		end: "  {POKEMON} est libéré de la capacité Lévikinésie !",
	},
	teleport: {
		name: "Téléport",
		// Official flavor text: "Permet de changer de place avec un autre Pokémon de l’équipe s’il y en a. Quand cette capacité est utilisée par un Pokémon sauvage, celui-ci fuit le combat."
		desc: "Si cette capacité réussit et que le lanceur n’est pas K.O., le lanceur se retire même s’il est piégé et est immédiatement remplacé par un membre de l’équipe choisi. Le lanceur ne se retire pas s’il ne reste aucun membre de l’équipe non K.O.",
		shortDesc: "Le lanceur se retire.",
		gen7letsgo: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	temperflare: {
		name: "Indignition",
		// Official flavor text: "Le lanceur utilise la force de son dépit pour attaquer. S'il a utilisé une capacité qui a échoué au tour précédent, la puissance d'Indignition est doublée."
		desc: "La puissance double si la dernière capacité utilisée par le lanceur au tour précédent, y compris une capacité appelée par une autre capacité ou utilisée via Sommation, Reflet Magik, Saisie ou les talents Danseuse ou Miroir Magik, n’a produit aucun de ses effets normaux (sans compter les dégâts subis en ratant Pied Voltige, Pied Sauté ou Caboche-Kaboum), ou si le lanceur a été empêché d’agir par un effet autre que la recharge ou Chute Libre. Une capacité bloquée par Blockhaus, Détection, Bouclier Royal, Abri, Pico-Défense, Vigilance, Tatamigaeshi, Prévention ou Garde Large ne double pas la puissance de cette capacité, pas plus que Rebond ou Vol interrompus prématurément par l’effet de Gravité, Anti-Air ou Myria-Flèches.",
		shortDesc: "La puissance double si la dernière capacité du lanceur a échoué.",
	},
	terablast: {
		name: "Téra Explosion",
		// Official flavor text: "Si le lanceur est Téracristallisé, il libère l'énergie de son Type Téracristal. Cette capacité inflige des dégâts en utilisant l'Attaque ou l'Attaque Spéciale du lanceur, selon la statistique la plus élevée."
		desc: "Si le lanceur est téracristallisé, cette capacité devient une attaque physique si l’Attaque du lanceur est supérieure à son Attaque Spéciale, modifications de niveaux de stats comprises, et le type de cette capacité devient le type Téra du lanceur. De plus, si le type Téra du lanceur est Stellaire, cette capacité a une puissance de 100, est super efficace contre les cibles téracristallisées et neutre contre les autres cibles, et baisse l’Attaque et l’Attaque Spéciale du lanceur d’un niveau.",
		shortDesc: "Si téracristallisé : physique si Atq > Atq Spé, type = type Téra.",
	},
	terastarstorm: {
		name: "Pluie Térastrale",
		// Official flavor text: "Le lanceur bombarde la cible afin de l'éliminer grâce au pouvoir des cristaux. Si le lanceur est Terapagos sous sa Forme Stellaire, la capacité touche tous les ennemis."
		desc: "Si le lanceur est Terapagos sous sa Forme Stellaire, le type de cette capacité devient Stellaire, elle touche tous les Pokémon adverses et devient une attaque physique si l’Attaque du lanceur est supérieure à son Attaque Spéciale, modifications de niveaux de stats comprises.",
		shortDesc: "Terapagos Stellaire : type Stellaire, touche les deux adversaires.",
	},
	terrainpulse: {
		name: "Champlification",
		// Official flavor text: "Une attaque qui tire sa force des champs. Son type et sa puissance varient selon le champ actif."
		desc: "La puissance double si le lanceur est au sol et qu’un champ est actif, et le type de cette capacité change en conséquence : type Électrik sur Champ Électrifié, type Plante sur Champ Herbu, type Fée sur Champ Brumeux et type Psy sur Champ Psychique.",
		shortDesc: "Lanceur sur un champ : puissance doublée, type variable.",
	},
	thief: {
		name: "Larcin",
		// Official flavor text: "Le lanceur attaque la cible et vole son objet. Le lanceur ne peut rien voler s’il tient déjà un objet."
		desc: "Si cette attaque réussit et que le lanceur n’est pas K.O., il vole l’objet tenu par la cible s’il ne tient lui-même aucun objet. Une cible ayant le talent Glu ne perd pas son objet si elle n’est pas K.O. L’objet de la cible n’est pas volé s’il s’agit d’une Gemme Bleue, d’une Gemme Rouge, d’un Globe Adamant, d’un Globe Perlé, d’un Globe Platiné, d’une Plaque, d’un Module, d’une ROM, d’une Épée Rouillée, d’un Bouclier Rouillé, d’une Énergie Booster ou d’un Masque tenu, respectivement, par Kyogre, Groudon, Dialga, Palkia, Giratina, Arceus, Genesect, Silvallié, Zacian, Zamazenta, un Pokémon Paradoxe ou Ogerpon, ou si le lanceur est l’une de ces espèces et que la cible tient l’objet correspondant. Ici, les Pokémon Paradoxe incluent toutes les espèces ayant le talent Paléosynthèse ou Charge Quantique, sauf Feu-Perçant, Ire-Foudre, Roc-de-Fer et Chef-de-Fer. Les objets perdus à cause de cette capacité ne peuvent pas être récupérés avec Recyclage ou le talent Récolte.",
		shortDesc: "Si le lanceur n’a pas d’objet, il vole celui de la cible.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
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
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	thousandarrows: {
		name: "Myria-Flèches",
		// Official flavor text: "Touche même les Pokémon dans les airs. Dans ce cas, la cible retombe au sol."
		desc: "Cette capacité peut toucher les Pokémon en l’air, ce qui inclut les Pokémon de type Vol, les Pokémon ayant le talent Lévitation, les Pokémon tenant un Ballon et les Pokémon sous l’effet de Vol Magnétik ou de Lévikinésie. Si la cible est de type Vol et n’est pas déjà au sol, cette capacité inflige des dégâts neutres quel que soit son ou ses autres types. Cette capacité peut toucher une cible qui utilise Rebond, Vol ou Chute Libre. Si cette capacité touche une cible sous l’effet de Rebond, Vol, Vol Magnétik ou Lévikinésie, l’effet prend fin. Si la cible est de type Vol et n’a pas utilisé Atterrissage ce tour-ci, ou si elle a le talent Lévitation, elle perd son immunité aux attaques de type Sol et au talent Piège Sable tant qu’elle reste au combat. Pendant l’effet, Vol Magnétik échoue pour la cible et Lévikinésie échoue contre la cible.",
		shortDesc: "Cloue au sol les adversaires adjacents. Premier coup neutre sur le type Vol.",
	},
	thousandwaves: {
		name: "Myria-Vagues",
		// Official flavor text: "Attaque avec des vagues glissant au sol. L’ennemi pris dedans ne peut pas s’échapper."
		desc: "Empêche la cible d’être remplacée. La cible peut tout de même être remplacée si elle tient une Carapace Mue ou si elle utilise Relais, Eau Revoir, Dernier Mot, Téléport, Demi-Tour ou Change Éclair. L’effet prend fin si le lanceur ou la cible quitte le terrain.",
		shortDesc: "Touche les adversaires adjacents. Les empêche d’être remplacés.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	thrash: {
		name: "Mania",
		// Official flavor text: "Une attaque furieuse qui dure de deux à trois tours. Le lanceur devient confus."
		desc: "Le lanceur est bloqué sur cette capacité pendant deux ou trois tours et devient confus immédiatement après avoir agi au dernier tour de l’effet, s’il ne l’est pas déjà. Cette capacité vise un Pokémon adverse au hasard à chaque tour. Si le lanceur est empêché d’agir, s’il est endormi au début d’un tour, ou si l’attaque échoue contre la cible au premier tour de l’effet ou au deuxième tour d’un effet de trois tours, l’effet prend fin sans provoquer de confusion. Si cette capacité est appelée par Blabla Dodo alors que le lanceur est endormi, elle est utilisée pendant un seul tour et ne rend pas le lanceur confus.",
		shortDesc: "Dure 2 à 3 tours. Rend ensuite le lanceur confus.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	throatchop: {
		name: "Exécu-Son",
		// Official flavor text: "Inflige une douleur tellement violente à la cible qu’elle ne peut plus émettre de sons pendant deux tours."
		desc: "Pendant 2 tours, la cible ne peut pas utiliser d’attaques sonores.",
		shortDesc: "Pendant 2 tours, la cible ne peut pas utiliser d’attaques sonores.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		cant: "Exécu-Son empêche {POKEMON} d’utiliser la capacité !",
	},
	thunder: {
		name: "Fatal-Foudre",
		// Official flavor text: "La foudre tombe sur l’ennemi pour lui infliger des dégâts. Peut aussi le paralyser."
		desc: "30 % de chances de paralyser la cible. Cette capacité peut toucher une cible qui utilise Rebond, Vol ou Chute Libre, ou qui est sous l’effet de Chute Libre. Si la météo est Pluie battante ou Pluie, cette capacité ne peut pas rater. Si la météo est Soleil intense ou Soleil, la Précision de cette capacité est de 50 %. Si cette capacité est utilisée contre un Pokémon qui tient un Parapluie Solide, sa Précision reste de 70 %.",
		shortDesc: "30 % de chances de paralyser. Ne rate pas sous la Pluie.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	thunderbolt: {
		name: "Tonnerre",
		// Official flavor text: "Une grosse décharge électrique tombe sur l’ennemi. Peut aussi le paralyser."
		desc: "10 % de chances de paralyser la cible.",
		shortDesc: "10 % de chances de paralyser la cible.",
	},
	thundercage: {
		name: "Voltageôle",
		// Official flavor text: "Le lanceur frappe l’ennemi, et le piège dans une prison électrique qui dure de quatre à cinq tours."
		desc: "Empêche la cible d’être remplacée pendant quatre ou cinq tours (sept tours si le lanceur tient une Accro Griffe). Inflige à la cible des dégâts égaux à 1/8 de ses PV max (1/6 si le lanceur tient une Bande Étreinte), arrondi à l’inférieur, à la fin de chaque tour pendant l’effet. La cible peut tout de même être remplacée si elle tient une Carapace Mue ou si elle utilise Relais, Eau Revoir, Dernier Mot, Queulonage, Téléport, Demi-Tour ou Change Éclair. L’effet prend fin si le lanceur ou la cible quitte le terrain, ou si la cible utilise avec succès Toupie Éclat, Tour Rapide ou Clonage. Cet effet ne se cumule pas et n’est pas réinitialisé par l’utilisation de cette capacité ou d’une autre capacité de piège.",
		shortDesc: "Piège et blesse la cible pendant 4 à 5 tours.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} se fait emprisonner par {SOURCE} !",
	},
	thunderclap: {
		name: "Vif Éclair",
		// Official flavor text: "Permet au lanceur d'attaquer la cible en priorité avec une décharge électrique. Échoue si la cible ne prépare pas une attaque."
		desc: "Échoue si la cible n’a pas choisi d’attaque physique, d’attaque spéciale ou Moi d’Abord ce tour-ci, ou si la cible agit avant le lanceur.",
		shortDesc: "Frappe généralement en premier. Échoue si la cible n’attaque pas.",
	},
	thunderfang: {
		name: "Crocs Éclair",
		// Official flavor text: "Le lanceur utilise une morsure électrifiée. Peut aussi paralyser ou apeurer l’ennemi."
		desc: "10 % de chances de paralyser la cible et 10 % de chances de l’apeurer.",
		shortDesc: "10 % de chances de paralyser. 10 % de chances d’apeurer.",
	},
	thunderouskick: {
		name: "Coup Fulgurant",
		// Official flavor text: "Le lanceur assène un coup de pied à la cible à la vitesse de l’éclair. Baisse aussi la Défense de la cible."
		desc: "100 % de chances de baisser la Défense de la cible d’un niveau.",
		shortDesc: "100 % de chances de baisser la Défense de la cible d’un niveau.",
	},
	thunderpunch: {
		name: "Poing Éclair",
		// Official flavor text: "Un coup de poing électrique vient frapper l’ennemi. Peut le paralyser."
		desc: "10 % de chances de paralyser la cible.",
		shortDesc: "10 % de chances de paralyser la cible.",
	},
	thundershock: {
		name: "Éclair",
		// Official flavor text: "Une décharge électrique tombe sur l’ennemi. Peut aussi le paralyser."
		desc: "10 % de chances de paralyser la cible.",
		shortDesc: "10 % de chances de paralyser la cible.",
	},
	thunderwave: {
		name: "Cage Éclair",
		// Official flavor text: "Un faible choc électrique frappe l’ennemi. Si l’attaque le touche, celui-ci est paralysé."
		desc: "Paralyse la cible. Cette capacité n’ignore pas les immunités de type.",
		shortDesc: "Paralyse la cible.",
	},
	tickle: {
		name: "Chatouille",
		// Official flavor text: "Le lanceur chatouille l’ennemi, ce qui baisse son Attaque et sa Défense."
		desc: "Baisse l’Attaque et la Défense de la cible d’un niveau.",
		shortDesc: "Baisse l’Attaque et la Défense de la cible d’un niveau.",
	},
	tidyup: {
		name: "Grand Nettoyage",
		// Official flavor text: "Le lanceur fait le ménage sur le terrain, ce qui annule les effets de Picots, Piège de Roc, Toile Gluante, Pics Toxik, et Clonage. Augmente l'Attaque et la Vitesse du lanceur."
		desc: "Augmente l’Attaque et la Vitesse du lanceur d’un niveau. Retire les clones de tous les Pokémon au combat et met fin aux effets de Picots, Piège de Roc, Toile Gluante et Pics Toxik des deux côtés du terrain.",
		shortDesc: "Lanceur : +1 Atq et Vit. Retire tous les clones et les pièges.",

		activate: "  Le grand nettoyage est terminé !",
	},
	topsyturvy: {
		name: "Renversement",
		// Official flavor text: "Inverse tous les changements de stats de la cible."
		desc: "Les niveaux de stats positifs de la cible deviennent négatifs, et inversement. Échoue si tous les niveaux de stats de la cible sont à 0.",
		shortDesc: "Inverse les niveaux de stats de la cible.",
	},
	torchsong: {
		name: "Chant Flamboyant",
		// Official flavor text: "Le lanceur carbonise la cible en projetant sur elle de vives flammes créées par un chant. Cette capacité augmente l'Attaque Spéciale du lanceur."
		desc: "100 % de chances d’augmenter l’Attaque Spéciale du lanceur d’un niveau.",
		shortDesc: "100 % de chances d’augmenter l’Atq Spé du lanceur d’un niveau.",
	},
	torment: {
		name: "Tourmente",
		// Official flavor text: "Le lanceur irrite l’ennemi pour l’empêcher d’utiliser la même capacité deux fois de suite."
		desc: "Empêche la cible de sélectionner la même capacité deux tours de suite. Cet effet prend fin lorsque la cible quitte le combat.",
		shortDesc: "La cible ne peut pas choisir la même capacité deux fois de suite.",

		start: "  {POKEMON} est tourmenté !",
		end: "  Les tourments {POKEMON:de} sont apaisés !",
	},
	toxic: {
		name: "Toxik",
		// Official flavor text: "Empoisonne gravement l’ennemi. Les dégâts dus au poison augmentent à chaque tour."
		desc: "Empoisonne gravement la cible. Si un Pokémon de type Poison utilise cette capacité, la cible ne peut pas l’éviter, même si elle est au milieu d’une capacité en deux tours.",
		shortDesc: "Empoisonne gravement la cible. Ne rate pas si le lanceur est de type Poison.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	toxicspikes: {
		name: "Pics Toxik",
		// Official flavor text: "Lance des pics autour de l’ennemi. Ils empoisonnent les ennemis qui entrent au combat."
		desc: "Installe un piège dans le camp adverse, qui empoisonne chaque Pokémon adverse entrant au combat, sauf s’il est de type Vol ou a le talent Lévitation. Peut être utilisée jusqu’à deux fois avant d’échouer. Les Pokémon adverses sont empoisonnés avec une couche et gravement empoisonnés avec deux couches. Peut être retiré du camp adverse si un Pokémon utilise Grand Nettoyage, si un Pokémon adverse utilise avec succès Toupie Éclat, Tour Rapide ou Anti-Brume, ou est touché par Anti-Brume, ou si un Pokémon de type Poison au sol entre au combat. Rune Protect empêche l’équipe adverse d’être empoisonnée à son entrée au combat, mais un clone ne l’empêche pas.",
		shortDesc: "Empoisonne les adversaires au sol à leur entrée. 2 couches max.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  Des pics toxiques se répandent autour de {TEAM} !",
		end: "  Il n’y a plus de pics toxiques autour de {TEAM} !",
	},
	toxicthread: {
		name: "Fil Toxique",
		// Official flavor text: "Tisse un fil imprégné de venin. Empoisonne la cible et baisse sa Vitesse."
		desc: "Baisse la Vitesse de la cible d’un niveau et l’empoisonne.",
		shortDesc: "Baisse la Vitesse de la cible d’un niveau et l’empoisonne.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	trailblaze: {
		name: "Désherbaffe",
		// Official flavor text: "Le lanceur surgit des hautes herbes pour attaquer la cible. Les mouvements agiles du lanceur augmentent sa Vitesse."
		desc: "100 % de chances d’augmenter la Vitesse du lanceur d’un niveau.",
		shortDesc: "100 % de chances d’augmenter la Vitesse du lanceur d’un niveau.",
	},
	transform: {
		name: "Morphing",
		// Official flavor text: "Le lanceur devient une copie de sa cible et obtient la même palette de capacités."
		desc: "Le lanceur se transforme en la cible. Les stats actuelles, niveaux de stats, types, capacités, talent, poids, sexe et apparence de la cible sont copiés. Le niveau et les PV du lanceur restent les mêmes, et chaque capacité copiée ne reçoit que 5 PP, avec un maximum de 5 PP chacune. Le lanceur ne peut plus changer de forme, même s’il en aurait normalement la possibilité. Cette capacité échoue si elle touche un clone, si le lanceur ou la cible est déjà transformé, ou si l’un d’eux est sous l’effet d’Illusion.",
		shortDesc: "Copie les stats, capacités, types et talent de la cible.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},

		transform: "{POKEMON} prend l’apparence {SPECIES:de} !",
	},
	triattack: {
		name: "Triplattaque",
		// Official flavor text: "Le lanceur envoie trois boules d’énergie simultanément. Peut aussi paralyser, brûler ou geler l’ennemi."
		desc: "20 % de chances de brûler, de geler ou de paralyser la cible.",
		shortDesc: "20 % de chances de paralyser, brûler ou geler la cible.",
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	trick: {
		name: "Tour de Magie",
		// Official flavor text: "Le lanceur prend la cible au dépourvu et l’oblige à échanger son objet contre le sien."
		desc: "Le lanceur échange l’objet qu’il tient avec celui de la cible. Échoue si ni le lanceur ni la cible ne tiennent d’objet, ou si le lanceur tente de donner ou de retirer une Gemme Bleue, une Gemme Rouge, un Globe Adamant, un Globe Perlé, un Globe Platiné, une Plaque, un Module, une ROM, une Épée Rouillée, un Bouclier Rouillé, une Énergie Booster ou un Masque à, respectivement, Kyogre, Groudon, Dialga, Palkia, Giratina, Arceus, Genesect, Silvallié, Zacian, Zamazenta, un Pokémon Paradoxe ou Ogerpon. Ici, les Pokémon Paradoxe incluent toutes les espèces ayant le talent Paléosynthèse ou Charge Quantique, sauf Feu-Perçant, Ire-Foudre, Roc-de-Fer et Chef-de-Fer. La cible est immunisée contre cette capacité si elle a le talent Glu.",
		shortDesc: "Le lanceur échange l’objet qu’il tient avec celui de la cible.",
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
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

		activate: "  {POKEMON} échange son objet contre celui de sa cible !",
	},
	trickortreat: {
		name: "Halloween",
		// Official flavor text: "Insuffle à la cible l’esprit d’Halloween, et ajoute le type Spectre à ses types actuels."
		desc: "Ajoute le type Spectre à la cible, qui a ainsi deux ou trois types. Échoue si la cible est déjà de type Spectre. Si Maléfice Sylvain ajoute un type à la cible, il remplace le type ajouté par cette capacité, et inversement.",
		shortDesc: "Ajoute le type Spectre au(x) type(s) de la cible.",
	},
	trickroom: {
		name: "Distorsion",
		// Official flavor text: "Le lanceur crée une zone mystérieuse où les Pokémon les plus lents frappent en priorité pendant cinq tours."
		desc: "Pendant 5 tours, la Vitesse de chaque Pokémon est recalculée pour déterminer l’ordre d’action. Pendant l’effet, la Vitesse de chaque Pokémon est considérée comme égale à (10000 - sa Vitesse normale), et si cette valeur est supérieure à 8191, on lui soustrait 8192. Si cette capacité est utilisée pendant l’effet, celui-ci prend fin.",
		shortDesc: "Agit en dernier. Pendant 5 tours, l’ordre d’action est inversé.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	triplearrows: {
		name: "Triple Flèche",
		// Official flavor text: "Le lanceur donne un coup de pied et tire trois flèches simultanément, ce qui peut baisser la Défense de la cible ou l'apeurer. Taux de critiques élevé."
		desc: "50 % de chances de baisser la Défense de la cible d’un niveau, 30 % de chances de l’apeurer, et plus de chances d’infliger un coup critique.",
		shortDesc: "Taux de critique élevé. Cible : 50 % de -1 Défense, 30 % d’apeurer.",
	},
	tripleaxel: {
		name: "Triple Axel",
		// Official flavor text: "Une salve composée de un à trois coups de pied dont la puissance augmente à chaque coup porté."
		desc: "Frappe trois fois. La puissance passe à 40 au deuxième coup et à 60 au troisième. La Précision est vérifiée à chaque coup, et l’attaque prend fin si la cible évite un coup. Si l’un des coups détruit le clone de la cible, celle-ci subit les dégâts des coups restants. Si le lanceur a le talent Multi-Coups, cette capacité frappe toujours trois fois.",
		shortDesc: "Frappe 3 fois. Chaque coup peut rater, mais la puissance augmente.",
	},
	tripledive: {
		name: "Triple Plongeon",
		// Official flavor text: "Le lanceur effectue des plongeons parfaitement cadencés pour éclabousser la cible et lui infliger des dégâts trois fois d'affilée."
		desc: "Frappe trois fois.",
		shortDesc: "Frappe 3 fois.",
	},
	triplekick: {
		name: "Triple Pied",
		// Official flavor text: "Une salve de un à trois coups de pied dont la puissance augmente à chaque coup porté."
		desc: "Frappe trois fois. La puissance passe à 20 au deuxième coup et à 30 au troisième. La Précision est vérifiée à chaque coup, et l’attaque prend fin si la cible évite un coup. Si l’un des coups détruit le clone de la cible, celle-ci subit les dégâts des coups restants. Si le lanceur a le talent Multi-Coups, cette capacité frappe toujours trois fois.",
		shortDesc: "Frappe 3 fois. Chaque coup peut rater, mais la puissance augmente.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	tropkick: {
		name: "Botte Sucrette",
		// Official flavor text: "Un coup de pied chaud comme les tropiques qui inflige des dégâts à la cible et baisse son Attaque."
		desc: "100 % de chances de baisser l’Attaque de la cible d’un niveau.",
		shortDesc: "100 % de chances de baisser l’Attaque de la cible d’un niveau.",
	},
	trumpcard: {
		name: "Atout",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "La puissance de cette capacité dépend du nombre de PP restants après la réduction normale des PP et l’effet du talent Pression. Puissance de 200 pour 0 PP, de 80 pour 1 PP, de 60 pour 2 PP, de 50 pour 3 PP et de 40 pour 4 PP ou plus.",
		shortDesc: "Moins il reste de PP à cette capacité, plus elle est puissante.",
	},
	twinbeam: {
		name: "Double Laser",
		// Official flavor text: "Le lanceur projette d'étranges rayons lumineux avec ses yeux et inflige des dégâts deux fois d'affilée."
		desc: "Frappe deux fois. Si le premier coup détruit le clone de la cible, celle-ci subit les dégâts du second coup.",
		shortDesc: "Frappe 2 fois en un tour.",
	},
	twineedle: {
		name: "Double Dard",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Frappe deux fois, chaque coup ayant 20 % de chances d’empoisonner la cible. Si le premier coup détruit le clone de la cible, celle-ci subit les dégâts du second coup.",
		shortDesc: "Frappe 2 fois. Chaque coup a 20 % de chances d’empoisonner.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	twinkletackle: {
		name: "Impact Choupinova",
		shortDesc: "La puissance est égale à la puissance Z de la capacité de base.",
	},
	twister: {
		name: "Ouragan",
		// Official flavor text: "Déclenche un terrible ouragan sur l’ennemi. Peut aussi l’apeurer."
		desc: "20 % de chances d’apeurer la cible. La puissance double si la cible utilise Rebond, Vol ou Chute Libre, ou si elle est sous l’effet de Chute Libre.",
		shortDesc: "20 % de chances d’apeurer les adversaires.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	upperhand: {
		name: "Prio-Parade",
		// Official flavor text: "Le lanceur réagit instinctivement au moindre mouvement et donne un coup de paume qui apeure la cible. Échoue si cette dernière n'a pas utilisé une attaque prioritaire."
		desc: "100 % de chances d’apeurer la cible. Échoue si la cible n’a pas choisi ce tour-ci une attaque physique ou spéciale dont la priorité modifiée est supérieure à 0, ou si la cible agit avant le lanceur.",
		shortDesc: "100 % d’apeurer. Échoue si la cible n’utilise pas d’attaque prioritaire.",
	},
	uproar: {
		name: "Brouhaha",
		// Official flavor text: "Le lanceur attaque en rugissant durant trois tours. Pendant ce temps, aucun Pokémon ne peut s’endormir."
		desc: "Le lanceur est bloqué sur cette capacité pendant trois tours. Cette capacité vise un adversaire au hasard à chaque tour. Au premier des trois tours, tous les Pokémon endormis au combat se réveillent. Pendant les trois tours, aucun Pokémon au combat ne peut s’endormir de quelque manière que ce soit, et les Pokémon qui entrent au combat pendant l’effet ne se réveillent pas. Si le lanceur est empêché d’agir ou si l’attaque échoue contre la cible pendant l’un des tours, l’effet prend fin.",
		shortDesc: "Dure 3 tours. Les Pokémon au combat ne peuvent pas s’endormir.",
		gen6: {
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

		start: "  {POKEMON} provoque un brouhaha !",
		end: "  {POKEMON} se calme.",
		upkeep: "  {POKEMON} continue son brouhaha !",
		block: "  Le brouhaha tient {POKEMON} éveillé !",
		blockSelf: "  Le brouhaha empêche {POKEMON} de dormir !",
	},
	uturn: {
		name: "Demi-Tour",
		// Official flavor text: "Après son attaque, le lanceur revient à toute vitesse et change de place avec un Pokémon de l’équipe prêt au combat."
		desc: "Si cette capacité réussit et que le lanceur n’est pas K.O., le lanceur se retire même s’il est piégé et est immédiatement remplacé par un membre de l’équipe choisi. Le lanceur ne se retire pas s’il ne reste aucun membre de l’équipe non K.O., ou si la cible s’est retirée grâce à un Bouton Fuite ou à l’effet des talents Repli Tactique ou Escampette.",
		shortDesc: "Le lanceur se retire après avoir blessé la cible.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		switchOut: "{POKEMON} revient vers {TRAINER} !",
	},
	vacuumwave: {
		name: "Onde Vide",
		// Official flavor text: "Le lanceur agite son poing pour projeter une onde de vide. Frappe en priorité."
		desc: "Aucun effet supplémentaire.",
		shortDesc: "Frappe généralement en premier.",
	},
	vcreate: {
		name: "Coup Victoire",
		// Official flavor text: "Le lanceur projette une flamme ardente de son front et se jette sur l’ennemi. Baisse la Défense, la Défense Spéciale et la Vitesse."
		desc: "Baisse la Vitesse, la Défense et la Défense Spéciale du lanceur d’un niveau.",
		shortDesc: "Baisse la Défense, la Déf Spé et la Vitesse du lanceur d’un niveau.",
	},
	veeveevolley: {
		name: "Évo-Chardasso",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "La puissance est égale à la plus grande des deux valeurs suivantes : (Bonheur du lanceur × 2/5), arrondi à l’inférieur, ou 1.",
		shortDesc: "Bonheur maximal : puissance de 102. Ne peut pas rater.",
	},
	venomdrench: {
		name: "Piège de Venin",
		// Official flavor text: "Sécrète un liquide empoisonné. Diminue l’Attaque, l’Attaque Spéciale et la Vitesse de l’ennemi empoisonné."
		desc: "Baisse l’Attaque, l’Attaque Spéciale et la Vitesse de la cible d’un niveau si elle est empoisonnée. Échoue si la cible n’est pas empoisonnée.",
		shortDesc: "Baisse Atq/Atq Spé/Vit des adversaires empoisonnés d’un niveau.",
	},
	venoshock: {
		name: "Choc Venin",
		// Official flavor text: "Le lanceur inocule un poison spécial à l’ennemi. L’effet est doublé si l’ennemi est déjà empoisonné."
		desc: "La puissance double si la cible est empoisonnée.",
		shortDesc: "La puissance double si la cible est empoisonnée.",
	},
	victorydance: {
		name: "Danse Victoire",
		// Official flavor text: "Le lanceur danse vigoureusement pour invoquer la victoire, ce qui augmente son Attaque, sa Défense et sa Vitesse."
		desc: "Augmente l’Attaque, la Défense et la Vitesse du lanceur d’un niveau.",
		shortDesc: "Augmente l’Attaque, la Défense et la Vitesse du lanceur d’un niveau.",
	},
	vinewhip: {
		name: "Fouet Lianes",
		shortDesc: "Aucun effet supplémentaire.",
	},
	visegrip: {
		name: "Force Poigne",
		shortDesc: "Aucun effet supplémentaire.",
	},
	vitalthrow: {
		name: "Corps Perdu",
		// Official flavor text: "Le lanceur porte son coup en dernier. En échange, cette capacité n’échoue jamais."
		desc: "Cette capacité ne peut pas rater.",
		shortDesc: "Cette capacité ne peut pas rater. Agit en dernier.",
	},
	voltswitch: {
		name: "Change Éclair",
		// Official flavor text: "Après son attaque, le lanceur revient à toute vitesse et change de place avec un Pokémon de l’équipe prêt au combat."
		desc: "Si cette capacité réussit et que le lanceur n’est pas K.O., le lanceur se retire même s’il est piégé et est immédiatement remplacé par un membre de l’équipe choisi. Le lanceur ne se retire pas s’il ne reste aucun membre de l’équipe non K.O., ou si la cible s’est retirée grâce à un Bouton Fuite ou à l’effet des talents Repli Tactique ou Escampette.",
		shortDesc: "Le lanceur se retire après avoir blessé la cible.",
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		switchOut: "#uturn",
	},
	volttackle: {
		name: "Électacle",
		// Official flavor text: "Le lanceur électrifie son corps avant de charger. Le choc blesse aussi gravement le lanceur et peut paralyser l’ennemi."
		desc: "10 % de chances de paralyser la cible. Si la cible a perdu des PV, le lanceur subit des dégâts de recul égaux à 33 % des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut), mais d’au moins 1 PV.",
		shortDesc: "Dégâts de recul de 33 %. 10 % de chances de paralyser la cible.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	wakeupslap: {
		name: "Réveil Forcé",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "La puissance double si la cible est endormie. Si le lanceur n’est pas K.O., la cible se réveille.",
		shortDesc: "Puissance doublée si la cible est endormie, et la réveille.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	waterfall: {
		name: "Cascade",
		// Official flavor text: "Le lanceur charge l’ennemi à une vitesse remarquable, ce qui peut l’apeurer."
		desc: "20 % de chances d’apeurer la cible.",
		shortDesc: "20 % de chances d’apeurer la cible.",
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	watergun: {
		name: "Pistolet à O",
		shortDesc: "Aucun effet supplémentaire.",
	},
	waterpledge: {
		name: "Aire d’Eau",
		// Official flavor text: "Une masse d’eau s’abat sur l’ennemi. En l’utilisant avec Aire de Feu, l’effet augmente et un arc-en-ciel apparaît."
		desc: "Si l’un des alliés du lanceur a choisi d’utiliser Aire de Feu ou Aire d’Herbe ce tour-ci et n’a pas encore agi, il agit immédiatement après le lanceur, et la capacité du lanceur n’a aucun effet. Combinée avec Aire de Feu, l’allié utilise Aire d’Eau avec une puissance de 150 et un arc-en-ciel apparaît du côté du lanceur pendant 4 tours, ce qui double les chances d’effets secondaires et se cumule avec le talent Sérénité, sauf que les chances d’apeurer ne peuvent être doublées qu’une seule fois. Combinée avec Aire d’Herbe, l’allié utilise Aire d’Herbe avec une puissance de 150 et un marécage apparaît du côté de la cible pendant 4 tours, ce qui divise par quatre la Vitesse de chaque Pokémon de ce camp. Utilisée comme capacité combinée, cette capacité bénéficie du bonus de même type (STAB) quel que soit le type du lanceur. Cette capacité ne consomme pas le Joyau Eau du lanceur et ne peut pas être redirigée par le talent Lavabo.",
		shortDesc: "À combiner avec Aire d’Herbe ou Aire de Feu pour un effet supplémentaire.",

		activate: "  {POKEMON} attend {TARGET}...",
		start: "  Un arc-en-ciel apparaît au-dessus de {TEAM} !",
		end: "  L’arc-en-ciel au-dessus de {TEAM} a disparu !",
	},
	waterpulse: {
		name: "Vibraqua",
		// Official flavor text: "Le lanceur envoie un puissant jet d’eau sur l’ennemi. Peut le rendre confus."
		desc: "20 % de chances de rendre la cible confuse.",
		shortDesc: "20 % de chances de rendre la cible confuse.",
	},
	watershuriken: {
		name: "Sheauriken",
		// Official flavor text: "Attaque l’ennemi avec des shuriken de mucus. Frappe en priorité deux à cinq fois d’affilée en un tour."
		desc: "Frappe de deux à cinq fois. 35 % de chances de frapper deux ou trois fois et 15 % de chances de frapper quatre ou cinq fois. Si l’un des coups détruit le clone de la cible, celle-ci subit les dégâts des coups restants. Si le lanceur a le talent Multi-Coups, cette capacité frappe toujours cinq fois. Si le lanceur est Sachanobi avec le talent Synergie, cette capacité a une puissance de 20 et frappe toujours trois fois. Si le lanceur tient un Dé Pipé, cette capacité frappe de 4 à 5 fois.",
		shortDesc: "Frappe généralement en premier. Frappe de 2 à 5 fois en un tour.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	watersport: {
		name: "Tourniquet",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "Pendant 5 tours, la puissance de toutes les attaques de type Feu utilisées par les Pokémon au combat est multipliée par 0,33. Échoue si cet effet est déjà actif.",
		shortDesc: "Pendant 5 tours, les attaques Feu ont 1/3 de leur puissance.",
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	waterspout: {
		name: "Giclédo",
		// Official flavor text: "Le lanceur attaque avec un jet d’eau. Moins il a de PV et moins l’attaque est puissante."
		desc: "La puissance est égale à (PV actuels du lanceur × 150 / PV max du lanceur), arrondi à l’inférieur, mais d’au moins 1.",
		shortDesc: "Moins puissante à mesure que les PV du lanceur baissent. Touche les adversaires.",
	},
	wavecrash: {
		name: "Aquatacle",
		// Official flavor text: "Le lanceur se recouvre entièrement d'eau avant de charger sa cible. Cela blesse aussi gravement le lanceur."
		desc: "Si la cible a perdu des PV, le lanceur subit des dégâts de recul égaux à 33 % des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut), mais d’au moins 1 PV.",
		shortDesc: "Dégâts de recul de 33 %.",
	},
	weatherball: {
		name: "Ball’Météo",
		// Official flavor text: "Une attaque dont la puissance et le type varient en fonction du temps qu’il fait."
		desc: "La puissance double si une météo autre que Vent mystérieux est active, et le type de cette capacité change en conséquence : type Glace sous Neige, type Eau sous Pluie battante ou Pluie, type Roche sous Tempête de sable et type Feu sous Soleil intense ou Soleil. Si le lanceur tient un Parapluie Solide et utilise Ball’Météo sous Pluie battante, Pluie, Soleil intense ou Soleil, cette capacité reste de type Normal et sa puissance ne double pas.",
		shortDesc: "La puissance double et le type varie selon la météo.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		move: "La météo change Turbo-Charge Bulldozer en {MOVE} !",
	},
	whirlpool: {
		name: "Siphon",
		// Official flavor text: "Piège l’ennemi dans une trombe d’eau pendant quatre à cinq tours."
		desc: "Empêche la cible d’être remplacée pendant quatre ou cinq tours (sept tours si le lanceur tient une Accro Griffe). Inflige à la cible des dégâts égaux à 1/8 de ses PV max (1/6 si le lanceur tient une Bande Étreinte), arrondi à l’inférieur, à la fin de chaque tour pendant l’effet. La cible peut tout de même être remplacée si elle tient une Carapace Mue ou si elle utilise Relais, Eau Revoir, Dernier Mot, Queulonage, Téléport, Demi-Tour ou Change Éclair. L’effet prend fin si le lanceur ou la cible quitte le terrain, ou si la cible utilise avec succès Toupie Éclat, Tour Rapide ou Clonage. Cet effet ne se cumule pas et n’est pas réinitialisé par l’utilisation de cette capacité ou d’une autre capacité de piège.",
		shortDesc: "Piège et blesse la cible pendant 4 à 5 tours.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
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
		},

		start: "  {POKEMON} est piégé dans le tourbillon !",
	},
	whirlwind: {
		name: "Cyclone",
		// Official flavor text: "Éjecte le Pokémon ennemi et le remplace par un autre. Lors d’un combat contre un Pokémon sauvage seul, met fin au combat."
		desc: "La cible est forcée de se retirer et est remplacée par un allié non K.O. choisi au hasard. Échoue si la cible est le dernier Pokémon non K.O. de son équipe, si elle a utilisé Racines auparavant ou si elle a le talent Ventouse.",
		shortDesc: "Force la cible à être remplacée par un allié au hasard.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	wickedblow: {
		name: "Poing Obscur",
		// Official flavor text: "Le lanceur assène un coup puissant à l’ennemi. Cette technique qui inflige toujours un coup critique est réservée à ceux qui maîtrisent la puissance des Ténèbres."
		desc: "Cette capacité inflige toujours un coup critique, sauf si la cible est sous l’effet d’Air Veinard ou a le talent Armurbaston ou Coque Armure.",
		shortDesc: "Inflige toujours un coup critique.",
	},
	wickedtorque: {
		name: "Crash Obscur",
		desc: "10 % de chances d’endormir la cible.",
		shortDesc: "10 % de chances d’endormir la cible.",
	},
	wideguard: {
		name: "Garde Large",
		// Official flavor text: "Annule les attaques visant toute l’équipe pendant un tour."
		desc: "Le lanceur et les membres de son équipe sont protégés pendant ce tour des capacités des autres Pokémon, alliés compris, qui visent tous les adversaires adjacents ou tous les Pokémon adjacents. Cette capacité modifie la même probabilité de réussite de 1 chance sur X que les autres capacités de protection, où X vaut 1 au départ et triple à chaque utilisation réussie de cette capacité, mais n’utilise pas cette probabilité pour déterminer si elle échoue. X revient à 1 si cette capacité échoue, si la dernière capacité utilisée par le lanceur n’est pas Blockhaus, Rempart Brûlant, Détection, Ténacité, Bouclier Royal, Gardomax, Blocage, Abri, Prévention, Piège de Fil, Pico-Défense ou Garde Large, ou si c’était l’une de ces capacités et que la protection du lanceur a été percée. Échoue si le lanceur agit en dernier ce tour-ci ou si cette capacité est déjà active pour le camp du lanceur.",
		shortDesc: "Protège l’équipe des capacités à cibles multiples ce tour-ci.",
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
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {TEAM} est protégé par la capacité Garde Large !",
		block: "  {POKEMON} est protégé par la capacité Garde Large !",
	},
	wildboltstorm: {
		name: "Typhon Fulgurant",
		// Official flavor text: "Le lanceur déclenche un violent typhon orageux dont les rafales et la foudre frappent la cible, ce qui peut aussi la paralyser."
		desc: "20 % de chances de paralyser la cible. Si la météo est Pluie battante ou Pluie, cette capacité ne peut pas rater. Si cette capacité est utilisée contre un Pokémon tenant un Parapluie Solide, sa Précision reste à 80 %.",
		shortDesc: "20 % de chances de paralyser les adversaires. Pluie : ne rate pas.",
	},
	wildcharge: {
		name: "Éclair Fou",
		// Official flavor text: "Une charge électrique violente qui blesse aussi légèrement le lanceur."
		desc: "Si la cible a perdu des PV, le lanceur subit des dégâts de recul égaux à 1/4 des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut), mais d’au moins 1 PV.",
		shortDesc: "Dégâts de recul de 1/4.",
	},
	willowisp: {
		name: "Feu Follet",
		// Official flavor text: "Lance un bouquet de flammes maléfiques à l’ennemi pour lui infliger une brûlure."
		desc: "Brûle la cible.",
		shortDesc: "Brûle la cible.",
	},
	wingattack: {
		name: "Cru-Ailes",
		shortDesc: "Aucun effet supplémentaire.",
	},
	wish: {
		name: "Vœu",
		// Official flavor text: "Un vœu qui permet au lanceur ou au Pokémon entrant sur le terrain au tour suivant de récupérer la moitié des PV max du lanceur."
		desc: "À la fin du tour suivant, le Pokémon qui se trouve à la position du lanceur récupère 1/2 des PV max du lanceur, arrondi à l’inférieur. Échoue si cette capacité est déjà active pour la position du lanceur.",
		shortDesc: "Au tour suivant, 50 % des PV max du lanceur sont restaurés.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		heal: "  Le vœu {NICKNAME:de} se réalise !",
	},
	withdraw: {
		name: "Repli",
		// Official flavor text: "Le lanceur se recroqueville dans sa carapace, ce qui augmente sa Défense."
		desc: "Augmente la Défense du lanceur d’un niveau.",
		shortDesc: "Augmente la Défense du lanceur d’un niveau.",
	},
	wonderroom: {
		name: "Zone Étrange",
		// Official flavor text: "Le lanceur crée une zone mystérieuse où la Défense et la Défense Spéciale de tous les Pokémon sont inversées pendant cinq tours."
		desc: "Pendant 5 tours, les stats de Défense et de Défense Spéciale de tous les Pokémon au combat sont échangées. Les modifications de niveaux de stats ne sont pas affectées. Si cette capacité est utilisée pendant l’effet, celui-ci prend fin.",
		shortDesc: "Pendant 5 tours, la Défense et la Déf Spé de chaque Pokémon sont échangées.",
	},
	woodhammer: {
		name: "Martobois",
		// Official flavor text: "Le lanceur heurte l’ennemi de son corps robuste. Blesse aussi gravement le lanceur."
		desc: "Si la cible a perdu des PV, le lanceur subit des dégâts de recul égaux à 33 % des PV perdus par la cible, arrondi à l’entier le plus proche (0,5 vers le haut), mais d’au moins 1 PV.",
		shortDesc: "Dégâts de recul de 33 %.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	workup: {
		name: "Rengorgement",
		// Official flavor text: "Le lanceur se rengorge. Augmente l’Attaque et l’Attaque Spéciale."
		desc: "Augmente l’Attaque et l’Attaque Spéciale du lanceur d’un niveau.",
		shortDesc: "Augmente l’Attaque et l’Atq Spé du lanceur d’un niveau.",
	},
	worryseed: {
		name: "Soucigraine",
		// Official flavor text: "Plante sur la cible une graine qui la rend soucieuse et remplace son talent par Insomnia, l’empêchant ainsi de dormir."
		desc: "Le talent de la cible devient Insomnia. Échoue si le talent de la cible est Osmose Équine, Synergie, Hypersommeil, Fantômasque, Dégobage, Tête de Gel, Insomnia, Multi-Type, Rassemblement, Système Alpha, Banc, Bouclier-Carcan, Déclic Tactique, Téramorphose, Absentéisme, Mode Transe ou Supermutation.",
		shortDesc: "Le talent de la cible devient Insomnia.",
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
	},
	wrap: {
		name: "Ligotage",
		// Official flavor text: "Le lanceur ligote l’ennemi avec des lianes ou son corps pour l’écraser durant quatre à cinq tours."
		desc: "Empêche la cible d’être remplacée pendant quatre ou cinq tours (sept tours si le lanceur tient une Accro Griffe). Inflige à la cible des dégâts égaux à 1/8 de ses PV max (1/6 si le lanceur tient une Bande Étreinte), arrondi à l’inférieur, à la fin de chaque tour pendant l’effet. La cible peut tout de même être remplacée si elle tient une Carapace Mue ou si elle utilise Relais, Eau Revoir, Dernier Mot, Queulonage, Téléport, Demi-Tour ou Change Éclair. L’effet prend fin si le lanceur ou la cible quitte le terrain, ou si la cible utilise avec succès Toupie Éclat, Tour Rapide ou Clonage. Cet effet ne se cumule pas et n’est pas réinitialisé par l’utilisation de cette capacité ou d’une autre capacité de piège.",
		shortDesc: "Piège et blesse la cible pendant 4 à 5 tours.",
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
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
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} est ligoté par {SOURCE} !",
		move: "{POKEMON} attaque encore!",
	},
	wringout: {
		name: "Essorage",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "La puissance est égale à 120 × (PV actuels de la cible / PV max de la cible), arrondi à l’entier le plus proche (0,5 vers le bas), mais d’au moins 1.",
		shortDesc: "Plus la cible a de PV restants, plus la puissance est élevée.",
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	xscissor: {
		name: "Plaie Croix",
		shortDesc: "Aucun effet supplémentaire.",
	},
	yawn: {
		name: "Bâillement",
		// Official flavor text: "Fait bâiller l’ennemi qui s’endort au tour suivant."
		desc: "Endort la cible à la fin du tour suivant. Échoue au moment de l’utilisation si la cible ne peut pas s’endormir ou si elle a déjà une altération de statut non volatile. À la fin du tour suivant, si la cible est toujours au combat, n’a pas d’altération de statut non volatile et peut s’endormir, elle s’endort. Une fois la cible affectée, cet effet ne peut être empêché ni par Rune Protect ou un clone, ni par le fait de s’endormir puis de se réveiller pendant l’effet.",
		shortDesc: "Endort la cible au bout d’un tour.",

		start: "  Ça rend {POKEMON} somnolent !",
	},
	zapcannon: {
		name: "Élecanon",
		// Official flavor text: "Un boulet de canon électrifié qui inflige des dégâts et paralyse l’ennemi."
		desc: "100 % de chances de paralyser la cible.",
		shortDesc: "100 % de chances de paralyser la cible.",
	},
	zenheadbutt: {
		name: "Psykoud’Boul",
		// Official flavor text: "Le lanceur concentre sa volonté et donne un coup de tête. Peut aussi apeurer l’ennemi."
		desc: "20 % de chances d’apeurer la cible.",
		shortDesc: "20 % de chances d’apeurer la cible.",
	},
	zingzap: {
		name: "Électrikipik",
		// Official flavor text: "Le lanceur fonce sur la cible et lui envoie un puissant choc électrique. Peut aussi l’effrayer."
		desc: "30 % de chances d’apeurer la cible.",
		shortDesc: "30 % de chances d’apeurer la cible.",
	},
	zippyzap: {
		name: "Pika-Sprint",
		// Official flavor text: "Cette capacité ne peut pas être utilisée. Il est recommandé de l’oublier, même s’il sera impossible de se la remémorer une fois oubliée."
		desc: "100 % de chances d’augmenter l’Esquive du lanceur d’un niveau.",
		shortDesc: "Frappe en premier. Augmente l’Esquive du lanceur d’un niveau.",
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
};
