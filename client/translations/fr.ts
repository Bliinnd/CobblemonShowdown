import type { TranslationCatalog } from '../build-tools/translations.mts';

// TRANSLATORS: Buttons are surrounded by brackets, like `[OK]` or `[Cancel]`
// TRANSLATORS: Leave the brackets out of your translation.
export const translations: TranslationCatalog = {
	// #region Navigation
	// ==================================================================

	// TRANSLATORS: Note that "Home" and "Main Menu" refer to the same place
	// TRANSLATORS: So it's fine if they're the same word in your language
	"Home": "Accueil",
	// TRANSLATORS: This is used as a "Back to Home" button after battles
	"[Main menu]": "Menu principal",
	// TRANSLATORS: the button that opens the teambuilder; consider something like "Edit teams"
	"[Teambuilder]": "Teambuilder",
	"Ladder": "Classement",
	"Tournaments": "Tournois",
	"Friends": "Amis",
	"Chat rooms": "Salons de chat",
	"Battles": "Combats",
	"News": "Actualités",
	"Offline": "Hors ligne",
	"[Join chat]": "Rejoindre le chat",
	"[All tabs]": "Tous les onglets",
	"[Menu]": "Menu",

	// #endregion Navigation

	// #region Generic UI
	// ==================================================================

	// if one of these only appears in one panel, consider moving it to that panel's section
	"[Hide]": "Masquer",
	"[Close]": "Fermer",
	"[Done]": "Terminé",
	"[Back]": "Retour",
	// TRANSLATORS: A computer copy command, like Ctrl+C
	"[Copy]": "Copier",
	"[Edit]": "Modifier",
	"[Delete]": "Supprimer",
	"[Undo delete]": "Annuler la suppression",
	// TRANSLATORS: "DM" is used to label DMs; "[Chat]" is the button to send a DM
	// TRANSLATORS: Feel free to use the same word for both (and for "Chat" in the Battle section)
	"DM": "MP",
	"[Chat]": "Chat",
	"[OK]": "OK",
	"[Cancel]": "Annuler",
	"[Accept]": "Accepter",
	"[Reject]": "Refuser",
	"Random team": "Équipe aléatoire",
	"[Sound]": "Son",
	"[Options]": "Options",
	"[Battle options]": "Options de combat",
	"[Revert]": "Rétablir",
	"[Refresh]": "Actualiser",
	"[Search]": "Rechercher",
	"[Validate]": "Vérifier",
	"[Reconnect]": "Se reconnecter",
	"Disconnected": "Déconnecté",
	"Connecting...": "Connexion...",
	"Loading...": "Chargement...",
	"Uploading...": "Envoi en cours...",
	"[Change]": "Modifier",
	"[Add]": "Ajouter",
	"[Look up]": "Chercher",
	"[Save changes]": "Enregistrer les modifications",
	"[Create]": "Créer",
	"[Rename]": "Renommer",
	"[Remove]": "Retirer",
	"[Maximize]": "Agrandir",
	"[Expand/collapse]": "Développer/réduire",

	// TRANSLATORS: connection/team-storage errors
	"Sorry, psim connections are unsupported by your browser.": "Désolé, les connexions psim ne sont pas prises en charge par votre navigateur.",
	"Your browser doesn't support third-party cookies. Some things might not work correctly.": "Votre navigateur ne prend pas en charge les cookies tiers. Certaines fonctionnalités pourraient ne pas fonctionner correctement.",
	"Your team storage format is too old for PS. You'll need to upgrade it at {URL}": "Le format de stockage de vos équipes est trop ancien pour PS. Vous devez le mettre à jour sur {URL}",
	"Error loading uploaded teams: {ERROR}": "Erreur lors du chargement des équipes en ligne : {ERROR}",
	"Error unknown. Try again later.": "Erreur inconnue. Réessayez plus tard.",
	"Failed to load team: {ERROR}": "Impossible de charger l’équipe : {ERROR}",
	"Error logging in.": "Erreur lors de la connexion.",
	"Something is interfering with our connection to the login server. Most likely, your internet provider needs you to re-log-in, or your internet provider is blocking Pokémon Showdown.": "Quelque chose perturbe notre connexion au serveur d’authentification. Le plus probable est que votre fournisseur d’accès à Internet vous demande de vous reconnecter, ou qu’il bloque Pokémon Showdown.",
	"Something is interfering with our connection to the login server.": "Quelque chose perturbe notre connexion au serveur d’authentification.",
	"You have been logged out and disconnected.\n\nIf you wanted to change your name while staying connected, use the 'Change Name' button or the '/nick' command.": "Vous avez été déconnecté de votre compte et du serveur.\n\nSi vous vouliez changer de pseudo tout en restant connecté, utilisez le bouton « Changer de pseudo » ou la commande « /nick ».",
	"You are not connected and cannot send {MESSAGE}.": "Vous n’êtes pas connecté et ne pouvez pas envoyer {MESSAGE}.",
	"It's been over a day since you first connected. Please refresh.": "Plus d’une journée s’est écoulée depuis votre connexion. Veuillez actualiser la page.",
	"Sorry, we don't know what to do with that file.\n\nSupported file types:\n- images (to set your background)\n- downloaded replay files\n- team files": "Désolé, nous ne savons pas quoi faire de ce fichier.\n\nTypes de fichiers pris en charge :\n- images (pour définir votre fond d’écran)\n- fichiers de replay téléchargés\n- fichiers d’équipe",

	// TRANSLATORS: an unknown value, e.g. the "?" in "Ability: ? (Levitate, Heatproof)"
	"?": "?",
	// TRANSLATORS: appends a parenthetical to a value, e.g. "Ability: ? (Levitate, Heatproof)"
	// TRANSLATORS: note the leading space (fullwidth parens probably don't want one)
	" ({PARENTHETICAL})": " ({PARENTHETICAL})",
	"The login server did not respond.": "Le serveur d’authentification n’a pas répondu.",
	"Your teams could not be saved to your account: {error}": "Vos équipes n’ont pas pu être enregistrées sur votre compte : {error}",
	"(use arrow keys)": "(flèches du clavier)",

	// #endregion Generic UI

	// #region Popups
	// ==================================================================

	// TRANSLATORS: user popup
	// TRANSLATORS: "Global {RANK}" is a rank, like "Global Moderator"
	"Global {RANK}": "{RANK} global",
	"Chatrooms": "Salons",
	"Private rooms": "Salons privés",
	"OFFLINE": "HORS LIGNE",
	"Username": "Pseudo",
	"[Register]": "S’inscrire",
	"[Add status]": "Ajouter un statut",
	"[Chat self]": "Discuter avec soi-même",
	"[Change name]": "Changer de pseudo",
	"[Log out]": "Se déconnecter",
	"[Add friend]": "Ajouter en ami",
	"[Unignore]": "Ne plus ignorer",
	"[Ignore]": "Ignorer",
	"[Report]": "Signaler",
	"[Mute]": "Rendre muet",
	"[7m]": "7 min",
	"[Hourmute]": "Rendre muet (long)",
	"[1h]": "1 h",
	"[Ban]": "Bannir",
	"[2d]": "2 j",
	"[Weekban]": "Bannir (long)",
	"[1w]": "1 sem.",
	"[Modlog]": "Journal de modération",
	// TRANSLATORS: Showdown term for a global mute
	"[Lock]": "Verrouiller",
	"[Weeklock]": "Verrouiller (long)",
	"[Namelock]": "Verrouiller le pseudo",
	"[Global modlog]": "Journal de modération global",
	"[Avatar...]": "Avatar...",
	"[Close room]": "Fermer le salon",
	"[Report a user]": "Signaler un utilisateur",
	"({NUMBER} sec)": "({NUMBER} s)",
	"Room not found": "Salon introuvable",

	// TRANSLATORS: battle options
	"Side-by-side, controls below": "Côte à côte, commandes en dessous",
	"Side-by-side, overlay controls": "Côte à côte, commandes superposées",
	"Top-and-bottom, controls below": "Haut et bas, commandes en dessous",
	"Top-and-bottom, overlay controls": "Haut et bas, commandes superposées",
	"Scrolling, controls below": "Défilement, commandes en dessous",
	"Scrolling, overlay controls": "Défilement, commandes superposées",
	"Hardcore mode ON: Information not available in-game is now hidden.": "Mode hardcore ACTIVÉ : les informations non disponibles en jeu sont désormais masquées.",
	"Hardcore mode OFF: Information not available in-game is now shown.": "Mode hardcore DÉSACTIVÉ : les informations non disponibles en jeu sont désormais affichées.",
	"Spectators ignored.": "Spectateurs ignorés.",
	"Spectators no longer ignored.": "Les spectateurs ne sont plus ignorés.",
	"In this battle": "Dans ce combat",
	"Hardcore mode (hide info not shown in-game)": "Mode hardcore (masquer les infos non affichées en jeu)",
	"Ignore spectators": "Ignorer les spectateurs",
	"Ignore opponent": "Ignorer l’adversaire",
	"Ignore nicknames": "Ignorer les surnoms",
	"All battles": "Tous les combats",
	"Layout": "Disposition",
	"Automatic ({SETTING})": "Automatique ({SETTING})",
	"Automatic": "Automatique",
	"(DESKTOP)": "(ORDINATEUR)",
	"(MOBILE VERTICAL)": "(MOBILE VERTICAL)",
	"(MOBILE HORIZONTAL)": "(MOBILE HORIZONTAL)",
	"You can still invite spectators by giving them the URL or using the /invite command": "Vous pouvez toujours inviter des spectateurs en leur donnant l’URL ou avec la commande /invite",
	"Invite only (hide from Battles list)": "Sur invitation uniquement (masquer de la liste des combats)",
	"Ignore Pokémon nicknames": "Ignorer les surnoms des Pokémon",
	"Automatically start timer": "Lancer automatiquement le chrono",
	// TRANSLATORS: this phrasing is because "forfeit" is an English word some people don't know
	// TRANSLATORS: if your language's word for "forfeit" is easily understandable, you may wish to skip the explanation
	"Forfeiting makes you lose the battle. Are you sure?": "Voulez-vous vraiment abandonner le combat ?",
	"Replacement player's name:": "Pseudo du joueur remplaçant :",
	"Hardcore mode": "Mode hardcore",
	"Start at turn 0 when spectating battles": "Commencer au tour 0 en regardant un combat",
	"Open new battles in the right-side panel": "Ouvrir les nouveaux combats dans le panneau de droite",

	// TRANSLATORS: options
	"General": "Général",
	"Language": "Langue",
	"Appearance": "Apparence",
	"Theme": "Thème",
	"Light": "Clair",
	"Dark": "Sombre",
	"Match system theme": "Thème du système",
	"Two panels (if wide enough)": "Deux panneaux (si l’écran est assez large)",
	"Single panel": "Panneau unique",
	"Vertical tabs": "Onglets verticaux",
	"Background": "Fond d’écran",
	"Disable animations": "Désactiver les animations",
	"Use 2D sprites instead of 3D models": "Utiliser les sprites 2D au lieu des modèles 3D",
	"Use modern sprites for past generations": "Utiliser les sprites modernes pour les anciennes générations",
	"Block DMs": "Bloquer les MP",
	"Block challenges": "Bloquer les défis",
	"Show DMs in chatrooms": "Afficher les MP dans les salons",
	"Do not highlight when your name is said in chat": "Ne pas surligner quand votre pseudo est mentionné dans le chat",
	"Confirm before leaving a room": "Confirmer avant de quitter un salon",
	"Confirm before refreshing": "Confirmer avant d’actualiser",
	"Always notify": "Toujours notifier",
	"Notify when joined": "Notifier si inscrit",
	"Hide": "Masquer",
	"Timestamps": "Horodatage",
	"Off": "Désactivé",
	"Timestamps in DMs": "Horodatage dans les MP",
	"Chat preferences": "Préférences du chat",
	"[Change background]": "Changer de fond d’écran",
	"[Text formatting...]": "Mise en forme du texte...",
	"[Set as background]": "Définir comme fond d’écran",
	"[Random]": "Aléatoire",
	"Volume": "Volume",
	"(muted)": "(coupé)",
	"Default": "Par défaut",
	// TRANSLATORS: "Built-in" backgrounds, as opposed to user-uploaded backgrounds
	"Official": "Officiels",
	"Custom": "Personnalisés",

	// TRANSLATORS: team chooser
	"(uncategorized)": "(sans catégorie)",
	"(all)": "(toutes)",
	"[Other gens]": "Autres générations",
	"Select a team": "Choisir une équipe",
	"(empty box)": "(boîte vide)",
	"(empty team)": "(équipe vide)",
	"This team selector is no longer available (the challenge was cancelled or something).": "Ce sélecteur d’équipe n’est plus disponible (le défi a peut-être été annulé).",
	"No teams found": "Aucune équipe trouvée",
	"This format selector is no longer available.": "Ce sélecteur de format n’est plus disponible.",
	"Search formats": "Rechercher un format",
	"No formats matching \"{SEARCH}\" found": "Aucun format ne correspond à « {SEARCH} »",
	"No formats found": "Aucun format trouvé",

	// TRANSLATORS: login
	"[Choose name]": "Choisir un pseudo",
	"Logging in...": "Connexion...",
	"[Log in]": "Se connecter",
	"[Try another name]": "Essayer un autre pseudo",
	"[Password...]": "Mot de passe...",
	"[Change password]": "Changer de mot de passe",
	"[Show password]": "Afficher le mot de passe",
	"Loading Google log-in button...": "Chargement du bouton de connexion Google...",
	"(color)": "(couleur)",
	"(Others will be able to see your name change. To change name privately, use \"Log out\")": "(Les autres pourront voir votre changement de pseudo. Pour en changer discrètement, utilisez « Se déconnecter »)",
	"if you registered this name:": "si vous avez enregistré ce pseudo :",
	"if not:": "sinon :",
	"This is someone else's account. Sorry.": "Ce compte appartient à quelqu’un d’autre. Désolé.",
	"Password": "Mot de passe",

	// TRANSLATORS: register / change password
	"All fields are required": "Tous les champs sont obligatoires",
	"Passwords do not match": "Les mots de passe ne correspondent pas",
	"Your password was successfully changed!": "Votre mot de passe a bien été modifié !",
	"Change your password:": "Changer votre mot de passe :",
	"Old password": "Ancien mot de passe",
	"New password": "Nouveau mot de passe",
	"New password (confirm)": "Nouveau mot de passe (confirmation)",
	"You have been successfully registered.": "Votre inscription a bien été effectuée.",
	"Register your account:": "Enregistrer votre compte :",
	"Password (confirm)": "Mot de passe (confirmation)",
	"An Electric-type mouse that is the mascot of the Pokémon franchise.": "Une souris de type Électrik qui est la mascotte de la franchise Pokémon.",
	"What is this Pokémon?": "Quel est ce Pokémon ?",
	"(Busy)": "(Occupé)",
	"(Idle)": "(Absent)",
	"Administrator": "Administrateur",
	"Room Owner": "Propriétaire du salon",
	"Host": "Hôte",
	"Moderator": "Modérateur",
	"Driver": "Driver",
	"Bot": "Bot",
	"Player": "Joueur",
	"Voice": "Voice",
	"Prize Winner": "Lauréat",
	"Whitelist": "Liste blanche",
	"Locked": "Verrouillé",
	"Muted": "Muet",
	"Mute": "Rendre muet",
	"7 minutes": "7 minutes",
	"Hourmute": "Rendre muet",
	"1 hour": "1 heure",
	"Ban": "Bannir",
	"2 days": "2 jours",
	"Weekban": "Bannir",
	"1 week": "1 semaine",
	"Lock": "Verrouiller",
	"Weeklock": "Verrouiller",
	"Namelock": "Bloquer le pseudo",
	" in {ROOM}": " dans {ROOM}",
	"{PUNISHMENT} {USER}{SCOPE} for {DURATION}?": "{PUNISHMENT} {USER}{SCOPE} pendant {DURATION} ?",
	"Reason (optional)": "Raison (facultatif)",
	"[Remove friend]": "Retirer des amis",
	"Moderate in {ROOM}": "Modérer dans {ROOM}",
	"Global moderation": "Modération globale",
	"Choose an avatar or": "Choisissez un avatar ou",

	// #endregion Popups

	// #region Main Menu
	// ==================================================================

	// TRANSLATORS: Our famous ladder queue button. Give it some flair :)
	// TRANSLATORS: Might we suggest "Showdown!"
	"[Battle!]": "Combattre !",
	"Find a random opponent": "Trouver un adversaire aléatoire",
	"Watch a battle": "Regarder un combat",
	"Find a user": "Trouver un utilisateur",
	// TRANSLATORS: A list of "games" you are currently in
	// TRANSLATORS: Games includes help tickets and similar interactive experiences that aren't exactly games
	"You are in:": "Vous participez à :",
	"Info & Resources": "Infos et ressources",
	"Lobby chat": "Chat du Lobby",

	// TRANSLATORS: Challenge/Search UI
	// technically used in more than the Main Menu, but it might as well be here
	"[Challenge]": "Défier",
	"Custom rules": "Règles personnalisées",
	// TRANSLATORS: Search countdown. {NUMBER} = a number of seconds
	// TRANSLATORS: English doesn't include the unit (seconds) but your language can
	"Searching in {NUMBER}...": "Recherche dans {NUMBER} s...",
	"Searching...": "Recherche...",
	"Pokédex": "Pokédex",
	"Replays": "Replays", // NOT USED
	"Forum": "Forum", // NOT USED
	"Rules": "Règles", // NOT USED
	"Credits": "Crédits",
	"Privacy": "Confidentialité", // NOT USED
	"background by {ARTIST}": "fond d’écran par {ARTIST}",

	// TRANSLATORS: errors
	"Wait for this countdown to finish first...": "Attendez d’abord la fin de ce compte à rebours...",
	"You're already searching for a {FORMAT} battle...": "Vous recherchez déjà un combat {FORMAT}...",
	"You need to go into the Teambuilder and build a team for this format.": "Vous devez aller dans le Teambuilder pour créer une équipe pour ce format.",
	"Source code": "Code source",
	"Discussion": "Discussion",

	// #endregion Main Menu

	// #region Rooms
	// ==================================================================

	// TRANSLATORS: these go under the user/battle counts, and in English they read as "100 users online"
	// TRANSLATORS: but they don't have to work that way in your language
	"users online": "utilisateurs en ligne",
	"active battles": "combats en cours",
	"Find an online user": "Trouver un utilisateur en ligne",
	"Watch an active battle": "Regarder un combat en cours",
	"Meloetta is PS's mascot! The Aria forme is about using its voice, and represents our chatrooms.": "Meloetta est la mascotte de PS ! Sa Forme Chant utilise sa voix et représente nos salons de discussion.",
	"Meloetta is PS's mascot! The Pirouette forme is Fighting-type, and represents our battles.": "Meloetta est la mascotte de PS ! Sa Forme Danse est de type Combat et représente nos combats.",

	"Official chat rooms": "Salons officiels",
	"Hidden rooms": "Salons cachés",

	"Subrooms": "Sous-salons",
	"(All rooms)": "(Tous les salons)",
	"Join or search for rooms": "Rejoindre ou rechercher des salons",
	"Command": "Commande",
	"Console": "Console",
	"Enter = run command {INPUT}": "Entrée = exécuter la commande {INPUT}",
	"(Subroom of {ROOM})": "(Sous-salon de {ROOM})",
	"Possible secret room": "Salon secret possible",
	"(Private room?)": "(Salon privé ?)",
	"Search results": "Résultats de recherche",
	// TRANSLATORS: the current language's chatroom, not a list of language rooms
	"Language room": "Salon francophone",

	// #endregion Rooms

	// #region Battle
	// ==================================================================

	// TRANSLATORS: Note that most translations of battle UI are in the server repository
	// TRANSLATORS: In data/text/[lang]/default.ts and data/text/[lang]/names.ts

	// TRANSLATORS: [Team]/[Battle]/[Switch]/[Shift] are buttons in overlay controls
	// TRANSLATORS: But they're section headers in normal battle controls
	// TRANSLATORS: For the "Use move" menu in battle controls
	// TRANSLATORS: This was "Attack" in older Showdown, "FIGHT" on older cart, and "Battle" on modern cart
	"[Battle]": "Attaque",
	// TRANSLATORS: For the "Switch" menu in battle controls
	// TRANSLATORS: This is "PKMN" on older cart, and "Pokémon" on modern cart
	"[Switch]": "Changer",
	// TRANSLATORS: For the Team Preview menu in battle controls
	// TRANSLATORS: Also replaces "[Switch]" in phases where switching isn't possible
	// TRANSLATORS: This is "PKMN" on older cart, and "Pokémon" on modern cart
	"[Team]": "Équipe",
	// TRANSLATORS: The Triples "move to center" button
	// TRANSLATORS: This is "SHIFT" on older cart; Triples doesn't exist on modern cart
	"[Shift]": "Déplacer",

	// TRANSLATORS: Mobile-layout buttons for switching between the battle view and the chat view
	// TRANSLATORS: ("Chat" is also used as a section header in the options popup)
	"Battle": "Combat",
	"Chat": "Chat",
	"[Try Fight button]": "Tenter d’attaquer",
	// TRANSLATORS: For the "where to target this move" menu
	"(empty slot)": "(emplacement vide)",
	"Maxed with no max moves": "Dynamaxé sans Capacité Dynamax",
	"No Z moves": "Aucune Capacité Z",

	"[Rematch]": "Revanche",
	"[Offer tie]": "Proposer un match nul",
	"[Forfeit]": "Abandonner",
	"[Forfeit and close]": "Abandonner et fermer",
	"[Replace player]": "Remplacer le joueur",
	"[Replace]": "Remplacer",
	"(turn 100+)": "(tour 100+)",
	"[Stop timer]": "Arrêter le chrono",
	"[Start timer]": "Lancer le chrono",
	"Enter player's name": "Entrez le pseudo du joueur",
	"Cannot replace player, battle has already ended.": "Impossible de remplacer le joueur, le combat est déjà terminé.",

	// TRANSLATORS: for replay controls
	"[Play]": "Lecture",
	"[Pause]": "Pause",
	"[First turn]": "Premier tour",
	"[Prev turn]": "Tour précédent",
	"[Skip turn]": "Tour suivant",
	"[Skip to end]": "Aller à la fin",
	"[Switch viewpoint]": "Changer de point de vue",
	"[Go to turn]": "Aller au tour",
	"[Skip]": "Passer",
	"[Skip animation]": "Passer l’animation",
	"[Move to center]": "Aller au centre",
	"[Upload and share replay]": "Mettre en ligne et partager le replay",
	"[Replay]": "Revoir",
	"(closes this battle)": "(ferme ce combat)",

	// TRANSLATORS: for the battle list
	"Minimum Elo": "Elo minimum",
	"rated {ELO}": "Elo {ELO}",
	// TRANSLATORS: goes between two usernames; the key includes its surrounding spacing so some languages can drop it
	"{PLAYER1} vs. {PLAYER2}": "{PLAYER1} vs {PLAYER2}",
	"(All formats)": "(Tous les formats)",
	"Username prefix": "Début du pseudo",
	"No battles are going on": "Aucun combat en cours",
	"{NUMBER} battle": "{NUMBER} combat",
	"{NUMBER} battles": "{NUMBER} combats",
	"Timer": "Chrono",
	"Error": "Erreur",
	"The battle you're looking for has expired. Battles expire after 15 minutes of inactivity unless they're saved.": "Le combat que vous cherchez a expiré. Les combats expirent après 15 minutes d’inactivité s’ils ne sont pas sauvegardés.",
	"In the future, remember to click \"Save replay\" to save a replay permanently.": "À l’avenir, pensez à cliquer sur « Sauvegarder le replay » pour conserver un replay de façon permanente.",
	"Unrecognized HTML file: Only replay files are supported.": "Fichier HTML non reconnu : seuls les fichiers de replay sont pris en charge.",
	"You are still in {ROOM}": "Vous êtes toujours dans {ROOM}",
	"Battle \"{INPUT}\" not found": "Combat « {INPUT} » introuvable",
	"Uploaded replay": "Replay importé",
	"Team {PLAYER}": "Équipe de {PLAYER}",
	"{PLAYER} and friends": "{PLAYER} et ses amis",

	// TRANSLATORS: battle log messages
	"[Earlier messages]": "Messages précédents",
	"Register an account to protect your ladder rating!": "Enregistrez un compte pour protéger votre classement !",
	"Open team sheet for {PLAYER}": "Afficher la fiche d’équipe de {PLAYER}",
	"Warning": "Avertissement",
	"Variation": "Variante",
	"Rated battle": "Combat classé",

	// TRANSLATORS: screen reader labels
	"Active Pokémon": "Pokémon actif",
	"Your team": "Votre équipe",
	"Opponent's team": "Équipe adverse",
	"Statused": "Statut altéré",
	"Non-statused": "Sans statut",
	"Unrevealed Illusion user": "Pokémon avec Illusion non révélé",
	"Not revealed": "Non révélé",
	"Battle controls": "Commandes de combat",

	// #endregion Battle

	// #region Chat
	// ==================================================================

	"{NUMBER} user": "{NUMBER} utilisateur",
	"{NUMBER} users": "{NUMBER} utilisateurs",
	"[Join]": "Rejoindre",
	"[Leave]": "Quitter",
	"[Ready!]": "Prêt !",
	"In progress": "En cours",
	"Signups": "Inscriptions",
	"[Pop-out]": "Détacher",
	"[Go]": "Aller",
	"[Visit]": "Visiter",
	"[Choose a name before sending messages]": "Choisissez un pseudo avant d’envoyer des messages",
	"Challenging...": "Défi en cours...",
	"Accepting...": "Acceptation...",
	"[Commands]": "Commandes",
	"Mentioned by {USER} in {ROOM}": "Mentionné par {USER} dans {ROOM}",
	"{USERS} joined": "Arrivée de {USERS}",
	// TRANSLATORS: separates "X joined" from "Y left"
	"{JOINEDMESSAGE}; {LEFTMESSAGE}": "{JOINEDMESSAGE} ; {LEFTMESSAGE}",
	"{USERS} left": "Départ de {USERS}",
	"{USER} renamed from {OLDUSER}.": "{OLDUSER} s’est renommé en {USER}.",
	"(Private to {USER})": "(Privé pour {USER})",
	"{FORMAT} battle started between {PLAYER1} and {PLAYER2}.": "Combat {FORMAT} lancé entre {PLAYER1} et {PLAYER2}.",
	// TRANSLATORS: for when the format name already includes "battle"
	"{FORMAT} started between {PLAYER1} and {PLAYER2}.": "{FORMAT} lancé entre {PLAYER1} et {PLAYER2}.",
	// TRANSLATORS: for when the format is unknown
	"Battle started between {PLAYER1} and {PLAYER2}.": "Combat lancé entre {PLAYER1} et {PLAYER2}.",
	"({NUMBER} line from {USER} hidden)": "({NUMBER} ligne de {USER} masquée)",
	"({NUMBER} lines from {USER} hidden)": "({NUMBER} lignes de {USER} masquées)",
	"{USER} invited you to join the room \"{ROOM}\"": "{USER} vous a invité à rejoindre le salon « {ROOM} »",
	"[Join {ROOM}]": "Rejoindre {ROOM}",
	"Chat log": "Historique du chat",

	// TRANSLATORS: tournaments
	"Please respond to the tournament within {SECONDS} seconds or you may be automatically disqualified.": "Veuillez répondre au tournoi dans les {SECONDS} secondes, sinon vous risquez d’être disqualifié automatiquement.",
	"Single Elimination": "Élimination simple",
	"Double Elimination": "Élimination double",
	"Round Robin": "Round Robin",
	"Double Round Robin": "Round Robin double",
	"{JOINS} joined the tournament": "Arrivée de {JOINS} dans le tournoi",
	"{LEAVES} left the tournament": "Départ de {LEAVES} du tournoi",
	// TRANSLATORS: sentence terminator for messages like the above
	"{SENTENCE}.": "{SENTENCE}.",
	"{FORMAT} {TYPE} tournament": "Tournoi {FORMAT} ({TYPE})",
	"No tournaments are currently running.": "Aucun tournoi n’est en cours.",
	"(started)": "(commencé)",
	"{TOURNAMENT} created.": "{TOURNAMENT} créé.",
	"{TOURNAMENT} created (and hidden).": "{TOURNAMENT} créé (et masqué).",
	"Tournament created": "Tournoi créé",
	// TRANSLATORS: label, as in "Room: lobby"
	"Room": "Salon",
	"{USER} has joined the tournament, replacing {OLDUSER}.": "{USER} a rejoint le tournoi en remplacement de {OLDUSER}.",
	"({NUMBER} players)": "({NUMBER} joueurs)",
	"The tournament has started!": "Le tournoi a commencé !",
	"{USER} has been disqualified from the tournament.": "{USER} a été disqualifié du tournoi.",
	"The tournament's automatic disqualify timer has been turned off.": "Le chrono de disqualification automatique du tournoi a été désactivé.",
	"The tournament's automatic disqualify timer has been set to {NUMBER} minute.": "Le chrono de disqualification automatique du tournoi a été réglé sur {NUMBER} minute.",
	"The tournament's automatic disqualify timer has been set to {NUMBER} minutes.": "Le chrono de disqualification automatique du tournoi a été réglé sur {NUMBER} minutes.",
	"Tournament automatic disqualification warning": "Avertissement de disqualification automatique du tournoi",
	"Time": "Temps",
	"{NUMBER} sec": "{NUMBER} s",
	"The tournament's automatic start is now off.": "Le lancement automatique du tournoi est désactivé.",
	"The tournament will automatically start in {NUMBER} minute.": "Le tournoi commencera automatiquement dans {NUMBER} minute.",
	"The tournament will automatically start in {NUMBER} minutes.": "Le tournoi commencera automatiquement dans {NUMBER} minutes.",
	"Scouting is now allowed (Tournament players can watch other tournament battles)": "L’espionnage est désormais autorisé (les joueurs du tournoi peuvent regarder les autres combats du tournoi)",
	"Scouting is now banned (Tournament players can't watch other tournament battles)": "L’espionnage est désormais interdit (les joueurs du tournoi ne peuvent pas regarder les autres combats du tournoi)",
	"Tournament challenges available": "Défis de tournoi disponibles",
	"Tournament challenge from {PLAYER}": "Défi de tournoi de {PLAYER}",
	"Tournament battle between {PLAYER1} and {PLAYER2} started.": "Le combat de tournoi entre {PLAYER1} et {PLAYER2} a commencé.",
	"{PLAYER1} has won the match {SCORE} against {PLAYER2}": "{PLAYER1} a remporté le match {SCORE} contre {PLAYER2}",
	"{PLAYER1} has lost the match {SCORE} against {PLAYER2}": "{PLAYER1} a perdu le match {SCORE} contre {PLAYER2}",
	"{PLAYER1} has drawn the match {SCORE} against {PLAYER2}": "{PLAYER1} a fait match nul {SCORE} contre {PLAYER2}",
	" but the tournament does not support drawing, so it did not count": " mais le tournoi n’accepte pas les matchs nuls, il n’a donc pas été comptabilisé",
	"Congratulations to {WINNERS} for winning the {TOURNAMENT}!": "Félicitations à {WINNERS} pour avoir remporté le {TOURNAMENT} !",
	"Runners-up": "Finalistes",
	"Runner-up": "Finaliste",
	"The tournament was forcibly ended.": "Le tournoi a été arrêté de force.",
	"The tournament has already started.": "Le tournoi a déjà commencé.",
	"The tournament hasn't started yet.": "Le tournoi n’a pas encore commencé.",
	"You are already in the tournament.": "Vous participez déjà au tournoi.",
	"One of your alts is already in the tournament.": "L’un de vos comptes secondaires participe déjà au tournoi.",
	"You aren't in the tournament.": "Vous ne participez pas au tournoi.",
	"This user isn't in the tournament.": "Cet utilisateur ne participe pas au tournoi.",
	"There aren't enough users.": "Il n’y a pas assez de participants.",
	"That isn't a valid timeout value.": "Ce délai n’est pas valide.",
	"That isn't a valid tournament matchup.": "Cet affrontement de tournoi n’est pas valide.",
	"You must have a name in order to join the tournament.": "Vous devez avoir un pseudo pour rejoindre le tournoi.",
	"The tournament is already at maximum capacity for users.": "Le tournoi a déjà atteint son nombre maximum de participants.",
	"You have already been disqualified.": "Vous avez déjà été disqualifié.",
	"This user has already been disqualified.": "Cet utilisateur a déjà été disqualifié.",
	"You are banned from entering tournaments.": "Vous êtes banni des tournois.",
	"Unknown error: {ERROR}": "Erreur inconnue : {ERROR}",
	"Waiting for battles to become available...": "En attente de combats disponibles...",
	"vs. {PLAYER}": "vs {PLAYER}",
	"Or wait for {PLAYERS} to challenge you.": "Ou attendez un défi de {PLAYERS}.",
	"Waiting for {PLAYERS} to challenge you.": "En attente d’un défi de {PLAYERS}.",
	"Waiting for {PLAYER}...": "En attente de {PLAYER}...",
	"Unavailable": "Indisponible",
	"Waiting": "En attente",
	"Challenging": "Défi en cours",

	// TRANSLATORS: command errors
	"This player does not exist or is not online.": "Ce joueur n’existe pas ou n’est pas en ligne.",
	"This command can only be used in proper chat rooms.": "Cette commande ne peut être utilisée que dans de vrais salons de discussion.",
	"Error: corrupted ranking data": "Erreur : données de classement corrompues",
	"You are not in a battle": "Vous n’êtes pas dans un combat",
	"Turn number?": "Numéro du tour ?",
	"Invalid turn number: {NUMBER}": "Numéro de tour invalide : {NUMBER}",
	"Turn navigation is disabled in hardcore mode.": "La navigation entre les tours est désactivée en mode hardcore.",
	"You are not a player in this battle": "Vous n’êtes pas un joueur de ce combat",
	"Can only be used in a DM.": "Utilisable uniquement en MP.",
	"Please wait 5 seconds before challenging again.": "Veuillez attendre 5 secondes avant de lancer un nouveau défi.",
	"You joined": "Vous avez rejoint",
	"You reconnected to": "Vous êtes reconnecté à",
	"{NAMES} and {COUNT} others": "{NAMES} et {COUNT} autres",

	// #endregion Chat

	// #region Teambuilder
	// ==================================================================

	// TRANSLATORS: the title of the teams list view, so it can't be singular
	// TRANSLATORS: something like "Teams List" is fine; "Teams" (plural of Team) is a separate key
	"Teambuilder": "Teambuilder",
	// TRANSLATORS: the back button from a team to the teams list; same wording as the list title is fine
	"[Teams]": "Équipes",
	"[New team]": "Nouvelle équipe",
	"[New team in folder]": "Nouvelle équipe dans le dossier",
	"[New {FORMAT} team]": "Nouvelle équipe {FORMAT}",
	"[New box]": "Nouvelle boîte",
	"Search teams": "Rechercher des équipes",
	// TRANSLATORS: a jokey tone. feel free to take it or leave it
	"you have no teams lol": "vous n’avez aucune équipe mdr",
	"you have no teams matching {TEXT}": "vous n’avez aucune équipe correspondant à {TEXT}",
	"you have no teams in this folder": "vous n’avez aucune équipe dans ce dossier",
	// TRANSLATORS: When deleting a folder, button to add folder name to all teams in it
	"[Convert to prefix]": "Convertir en préfixe",
	"[(add folder)]": "(ajouter un dossier)",
	"[(add format folder)]": "(ajouter un dossier de format)",
	"Folder name?": "Nom du dossier ?",
	"Rename ``{FOLDER}`` to?": "Nouveau nom pour ``{FOLDER}`` ?",
	"Delete ``{FOLDER}``? (doesn't delete teams)": "Supprimer ``{FOLDER}`` ? (les équipes ne seront pas supprimées)",
	"Names can't contain slashes, since they're used as a folder separator.": "Les noms ne peuvent pas contenir de barres obliques (/), car elles servent de séparateur de dossiers.",
	"Names can't contain the character |, since they're used for storing teams.": "Les noms ne peuvent pas contenir le caractère |, car il sert au stockage des équipes.",
	"New name required": "Nouveau nom requis",
	"Not in a folder": "Hors dossier",
	"Teams not in any folders": "Équipes hors dossier",
	"All teams": "Toutes les équipes",
	"Folders": "Dossiers",

	// TRANSLATORS: for Clipboard actions
	"Copied!": "Copié !",
	"[Paste copy here]": "Coller la copie ici",
	"[Add to clipboard]": "Ajouter au presse-papiers",
	"[Copy/Move]": "Copier/Déplacer",
	"[+ Clipboard]": "+ Presse-papiers",
	"[Deselect]": "Désélectionner",
	"[Move here]": "Déplacer ici",

	// TRANSLATORS: for Import/Export
	"[Backup]": "Sauvegarder",
	"[Backup search results]": "Sauvegarder les résultats de recherche",
	"[Backup folder]": "Sauvegarder le dossier",
	"Import/Export": "Importer/Exporter",
	"[Import/Export]": "Importer/Exporter",
	"[Import]": "Importer",
	"(can't save partial exports)": "(impossible d’enregistrer des exports partiels)",

	// TRANSLATORS: for uploaded teams
	"Account": "Compte",
	"Account (public)": "Compte (public)",
	"Local": "Local",
	"Uploaded": "En ligne",
	"Public": "Public",
	"[Upload for shareable URL]": "Mettre en ligne pour une URL partageable",
	"[Upload for shareable/searchable URL]": "Mettre en ligne pour une URL partageable/recherchable",
	"Disconnected (wrong account?)": "Déconnecté (mauvais compte ?)",
	"[Revert to uploaded version]": "Revenir à la version en ligne",
	"[Compare]": "Comparer",
	"[Upload changes]": "Envoyer les modifications",
	"Team was deleted": "L’équipe a été supprimée",
	"Team doesn't exist": "L’équipe n’existe pas",
	"Untitled team": "Équipe sans nom",
	"Uploaded by": "Mise en ligne par",
	"Views": "Vues",
	"Team deleted": "Équipe supprimée",
	"Not found": "Introuvable",

	// TRANSLATORS: for the team editor
	"[Add Pokémon]": "Ajouter un Pokémon",
	"(choose ability)": "(choisir un talent)",
	"Details": "Détails",
	// TRANSLATORS: These two are for Hidden Power type
	// TRANSLATORS: They're both designed to take up very little width, so keep that in mind
	"H.P.": "P.C.",
	"H. Power": "P. Cachée",
	"Defensive coverage": "Couverture défensive",
	"Teambuilding resources for {FORMAT}": "Ressources de teambuilding pour {FORMAT}",
	"[See all]": "Tout voir",
	"Search species or filter by type, learnable moves, ability, tier, or egg group": "Rechercher une espèce ou filtrer par type, capacité apprise, talent, tier ou groupe Œuf",
	"Search abilities": "Rechercher un talent",
	"Search items": "Rechercher un objet",
	"Search moves or filter by type or category": "Rechercher une capacité ou filtrer par type ou catégorie",
	"Sample sets": "Sets d’exemple",
	"Box sets": "Sets de la boîte",
	"Guessed spread": "Répartition estimée",
	"(Please choose 4 moves to get a guessed spread)": "(Choisissez 4 capacités pour obtenir une répartition estimée)",
	"Protip": "Astuce",
	"Use a different nature to save {NUMBER} EVs:": "Utilisez une autre nature pour économiser {NUMBER} EV :",
	"Use a different nature to get higher stats:": "Utilisez une autre nature pour obtenir de meilleures stats :",
	"Natures cannot raise or lower HP.": "Les natures ne peuvent ni augmenter ni baisser les PV.",
	// TRANSLATORS: {STATCHANGES} is +stat/-stat
	"{STATCHANGES} nature": "Nature {STATCHANGES}",
	"You can also set natures by typing {PLUS} and {MINUS} in the EV box.": "Vous pouvez aussi définir la nature en tapant {PLUS} et {MINUS} dans le champ des EV.",
	"Pasted team": "Équipe collée",
	"Zoom out forms": "Dézoomer les formulaires",
	"Compact": "Compact",
	"Comfortable": "Aéré",
	"Zoom out search results": "Dézoomer les résultats de recherche",
	"Fetching Paste...": "Récupération du paste...",
	"Import/Export set": "Importer/Exporter le set",
	"IV spreads": "Répartitions d’IV",
	"min Atk": "Atq min",
	"min Atk, min Spe": "Atq min, Vit min",
	"max all": "tout au max",
	"min Spe": "Vit min",
	"Hidden Power {TYPE} IVs": "IV Puissance Cachée {TYPE}",
	"EVs, IVs, and nature": "EV, IV et nature",
	"Base": "Base",
	"Remaining": "Restants",

	// TRANSLATORS: errors
	"You must select a format first.": "Vous devez d’abord choisir un format.",
	"This team is for a different account. Please log into the correct account to update it.": "Cette équipe appartient à un autre compte. Connectez-vous au bon compte pour la mettre à jour.",
	"Add a Pokémon to your team before uploading it.": "Ajoutez un Pokémon à votre équipe avant de la mettre en ligne.",
	"Must use on an uploaded team.": "À utiliser sur une équipe en ligne.",
	"Team not found: {INPUT}": "Équipe introuvable : {INPUT}",
	"Your file \"{FILENAME}\" is not a valid team.": "Votre fichier « {FILENAME} » n’est pas une équipe valide.",
	"Hidden Power Type": "Type de Puissance Cachée",
	"Tera Type": "Type Téra",
	"This team is saved to your account.": "Cette équipe est enregistrée sur votre compte.",
	"Log in to save your teams to your account.": "Connectez-vous pour enregistrer vos équipes sur votre compte.",
	"Box": "Boîte",
	"Untitled": "Sans titre",
	"Team name": "Nom de l’équipe",

	// #endregion Teambuilder

	// #region Ladder
	// ==================================================================

	"[All formats]": "Tous les formats",
	"[How the ladder works]": "Fonctionnement du classement",
	"[Seasonal rankings]": "Classements saisonniers",
	"[Look up a specific user's rating]": "Chercher le classement d’un utilisateur",
	"Name": "Nom",
	"Elo rating": "Score Elo",
	"user's percentage chance of winning a random battle (Glicko X-Act Estimate)": "probabilité (en %) que l’utilisateur gagne un combat aléatoire (estimation Glicko X-Act)",
	"Glicko-1 rating system: rating±deviation (provisional if deviation>100)": "Système de classement Glicko-1 : score±écart (provisoire si écart>100)",
	"No one has played any ranked games yet.": "Personne n’a encore joué de partie classée.",

	// #endregion Ladder

	// #region Misc rooms
	// ==================================================================

	"[Join the Help room for live help]": "Rejoindre le salon Help pour une aide en direct",
	"Unrecognized command: {INPUT}": "Commande non reconnue : {INPUT}",

	// #endregion Misc rooms
};
