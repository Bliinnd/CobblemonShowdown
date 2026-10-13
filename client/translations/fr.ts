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
	"Uploaded Replay": null, // NEEDS TRANSLATION
	"{p1} v. {p2}": null, // NEEDS TRANSLATION
	"(empty room)": null, // NEEDS TRANSLATION

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
	"Others": null, // NEEDS TRANSLATION
	"text": null, // NEEDS TRANSLATION
	"Player {1}": null, // NEEDS TRANSLATION
	"Note that win/loss should not be used to estimate skill, since who you play against is much more important than how many times you win or lose. Our other stats like Elo and GXE are much better for estimating skill.": null, // NEEDS TRANSLATION
	"How the ladder works": null, // NEEDS TRANSLATION
	"Our ladder displays three ratings: Elo, GXE, and Glicko-1.": null, // NEEDS TRANSLATION
	"{ELO} is the main ladder rating. It's a pretty normal ladder rating: goes up when you win and down when you lose.": null, // NEEDS TRANSLATION
	"{GXE} (Glicko X-Act Estimate) is an estimate of your win chance against an average ladder player.": null, // NEEDS TRANSLATION
	"{GLICKO} is {LINK}. It has rating and deviation values.": null, // NEEDS TRANSLATION
	"another rating system": null, // NEEDS TRANSLATION
	"{COIL} (Converging Order Invariant Ladder) is used for suspect tests. The more games you play, the closer it will get to your GXE × 4000. How fast it reaches GXE × 4000 depends on {LINK} which is different for each suspect test.": null, // NEEDS TRANSLATION
	"a custom B value": null, // NEEDS TRANSLATION
	"seeking...": null, // NEEDS TRANSLATION
	"[Play (sound off)]": null, // NEEDS TRANSLATION
	"Rating": null, // NEEDS TRANSLATION
	"User is Top {threshold} on the {format} Ladder": null, // NEEDS TRANSLATION
	"{sideName}'s team:": null, // NEEDS TRANSLATION
	"[Join Battle]": null, // NEEDS TRANSLATION
	"Damage": null, // NEEDS TRANSLATION
	"Heal": null, // NEEDS TRANSLATION
	"BRN": null, // NEEDS TRANSLATION
	"PSN": null, // NEEDS TRANSLATION
	"TOX": null, // NEEDS TRANSLATION
	"SLP": null, // NEEDS TRANSLATION
	"PAR": null, // NEEDS TRANSLATION
	"FRZ": null, // NEEDS TRANSLATION
	"Dynamaxed": null, // NEEDS TRANSLATION
	"Drowsy": null, // NEEDS TRANSLATION
	"Imprisoning foe": null, // NEEDS TRANSLATION
	"Lightened": null, // NEEDS TRANSLATION
	"Transformed": null, // NEEDS TRANSLATION
	"Infatuation": null, // NEEDS TRANSLATION
	"Perish now": null, // NEEDS TRANSLATION
	"Perish next turn": null, // NEEDS TRANSLATION
	"Perish in 2": null, // NEEDS TRANSLATION
	"Perish in 3": null, // NEEDS TRANSLATION
	"Balloon": null, // NEEDS TRANSLATION
	"Must recharge": null, // NEEDS TRANSLATION
	"Critical Hit Boost": null, // NEEDS TRANSLATION
	"Fallen": null, // NEEDS TRANSLATION
	"Syrupy": null, // NEEDS TRANSLATION
	"Landed": null, // NEEDS TRANSLATION
	"Focusing": null, // NEEDS TRANSLATION
	"Trap set": null, // NEEDS TRANSLATION
	"L": {
		"level": null, // NEEDS TRANSLATION
		"losses": null, // NEEDS TRANSLATION
	},
	"(active)": null, // NEEDS TRANSLATION
	"(fainted)": null, // NEEDS TRANSLATION
	"Evasion": null, // NEEDS TRANSLATION
	"This replay ends here.": null, // NEEDS TRANSLATION
	"Loafing around": null, // NEEDS TRANSLATION
	"Lost focus": null, // NEEDS TRANSLATION
	"Trap failed": null, // NEEDS TRANSLATION
	"Flinched": null, // NEEDS TRANSLATION
	"Immobilized": null, // NEEDS TRANSLATION
	"already {poke.getBoost(stat)}": null, // NEEDS TRANSLATION
	"Stats swapped": null, // NEEDS TRANSLATION
	"Boosts lost": null, // NEEDS TRANSLATION
	"Restored": null, // NEEDS TRANSLATION
	"Stats copied": null, // NEEDS TRANSLATION
	"Stats reset": null, // NEEDS TRANSLATION
	"Stats inverted": null, // NEEDS TRANSLATION
	"Critical hit": null, // NEEDS TRANSLATION
	"Super-effective": null, // NEEDS TRANSLATION
	"Resisted": null, // NEEDS TRANSLATION
	"Missed": null, // NEEDS TRANSLATION
	"Already burned": null, // NEEDS TRANSLATION
	"Already poisoned": null, // NEEDS TRANSLATION
	"Failed": null, // NEEDS TRANSLATION
	"Already asleep": null, // NEEDS TRANSLATION
	"Already paralyzed": null, // NEEDS TRANSLATION
	"Already frozen": null, // NEEDS TRANSLATION
	"Stat drop blocked": null, // NEEDS TRANSLATION
	"Protected": null, // NEEDS TRANSLATION
	"Toxic poison": null, // NEEDS TRANSLATION
	"Burn cured": null, // NEEDS TRANSLATION
	"Poison cured": null, // NEEDS TRANSLATION
	"Woke up": null, // NEEDS TRANSLATION
	"Paralysis cured": null, // NEEDS TRANSLATION
	"Thawed": null, // NEEDS TRANSLATION
	"Cured": null, // NEEDS TRANSLATION
	"Team Cured": null, // NEEDS TRANSLATION
	"Item Stolen": null, // NEEDS TRANSLATION
	"Item knocked off": null, // NEEDS TRANSLATION
	"Balloon popped": null, // NEEDS TRANSLATION
	"Sash": null, // NEEDS TRANSLATION
	"Identified": null, // NEEDS TRANSLATION
	"Taunted": null, // NEEDS TRANSLATION
	"Imprisoning": null, // NEEDS TRANSLATION
	"Disabled": null, // NEEDS TRANSLATION
	"Tormented": null, // NEEDS TRANSLATION
	"Ingrained": null, // NEEDS TRANSLATION
	"Encored": null, // NEEDS TRANSLATION
	"Attracted": null, // NEEDS TRANSLATION
	"+Crit rate": null, // NEEDS TRANSLATION
	"Cursed": null, // NEEDS TRANSLATION
	"Smacked Down": null, // NEEDS TRANSLATION
	"Blocked": null, // NEEDS TRANSLATION
	"Telekinesis ended": null, // NEEDS TRANSLATION
	"Confusion ended": null, // NEEDS TRANSLATION
	"De-seeded": null, // NEEDS TRANSLATION
	"Heal Block ended": null, // NEEDS TRANSLATION
	"Attract ended": null, // NEEDS TRANSLATION
	"Taunt ended": null, // NEEDS TRANSLATION
	"Disable ended": null, // NEEDS TRANSLATION
	"Embargo ended": null, // NEEDS TRANSLATION
	"Torment ended": null, // NEEDS TRANSLATION
	"Encore ended": null, // NEEDS TRANSLATION
	"Illusion ended": null, // NEEDS TRANSLATION
	"Slow Start ended": null, // NEEDS TRANSLATION
	"Faded": null, // NEEDS TRANSLATION
	"Enduring": null, // NEEDS TRANSLATION
	"Protection broken": null, // NEEDS TRANSLATION
	" calls rather than ": null, // NEEDS TRANSLATION
	" markers: the build only inlines\n * ": null, // NEEDS TRANSLATION
	" and ": null, // NEEDS TRANSLATION
	"Wrong password.": null, // NEEDS TRANSLATION
	"Too many unrecognized login attempts have been made against this account. Please try again later.": null, // NEEDS TRANSLATION
	"For security reasons, logins must happen with POST data.": null, // NEEDS TRANSLATION
	"incorrect login data, you need \"name\" and \"pass\" fields": null, // NEEDS TRANSLATION
	"incorrect login data, userid must contain at least one letter or number": null, // NEEDS TRANSLATION
	"Your username cannot start with 'guest'.": null, // NEEDS TRANSLATION
	"Your username must be less than 19 characters long.": null, // NEEDS TRANSLATION
	"Your username contains disallowed text.": null, // NEEDS TRANSLATION
	"Your username is no longer available.": null, // NEEDS TRANSLATION
	"Your username must contain at least one letter.": null, // NEEDS TRANSLATION
	"Corrupt challenge": null, // NEEDS TRANSLATION
	"This server is requesting an invalid login key. This probably means that either you are not connected to a server, or the server is set up incorrectly.": null, // NEEDS TRANSLATION
	"Unknown key ID": null, // NEEDS TRANSLATION
	"You must specify a username.": null, // NEEDS TRANSLATION
	"Your username must include at least one letter.": null, // NEEDS TRANSLATION
	"Your username is already taken.": null, // NEEDS TRANSLATION
	"You must specify a password.": null, // NEEDS TRANSLATION
	"Your password must have at least 5 characters.": null, // NEEDS TRANSLATION
	"Your passwords do not match.": null, // NEEDS TRANSLATION
	"Answer the anti-spam question.": null, // NEEDS TRANSLATION
	"You cannot register more than 2 names every 2 hours.": null, // NEEDS TRANSLATION
	"Invalid challenge string argument.": null, // NEEDS TRANSLATION
	"'changepassword' requests can only be made with POST data.": null, // NEEDS TRANSLATION
	"Specify your current password.": null, // NEEDS TRANSLATION
	"Specify your new password.": null, // NEEDS TRANSLATION
	"Repeat your new password.": null, // NEEDS TRANSLATION
	"Your session has expired. Please log in again.": null, // NEEDS TRANSLATION
	"Your new passwords do not match.": null, // NEEDS TRANSLATION
	"Your old password was incorrect.": null, // NEEDS TRANSLATION
	"Your new password must be at least 5 characters long.": null, // NEEDS TRANSLATION
	"Invalid request (username changing must be done through POST requests).": null, // NEEDS TRANSLATION
	"Specify a username.": null, // NEEDS TRANSLATION
	"You're not logged in as that user.": null, // NEEDS TRANSLATION
	"The server could not load your teams. Please try again later.": null, // NEEDS TRANSLATION
	"Invalid team ID": null, // NEEDS TRANSLATION
	"Failed to fetch team. Please try again later.": null, // NEEDS TRANSLATION
	"This server is using login key {keyid}, which is no longer supported. Please tell the server operator to update their config.js file.": null, // NEEDS TRANSLATION
	"Your version of Chrome has a bug that makes animated GIFs freeze games sometimes, so certain animations have been disabled. Only some people have the problem, so you can experiment and enable them in the Options menu setting \"Disable GIFs for Chrome 64 bug\".": null, // NEEDS TRANSLATION
	"Usernames must contain at least one letter.": null, // NEEDS TRANSLATION
	"Password can't be empty.": null, // NEEDS TRANSLATION
	"Room '{roomid}' not found.": null, // NEEDS TRANSLATION
	"'{roomid}' is already maximized.": null, // NEEDS TRANSLATION
	"'{roomid}' is a popup and can't be maximized.": null, // NEEDS TRANSLATION
	"You are already connecting.": null, // NEEDS TRANSLATION
	"You are already connected.": null, // NEEDS TRANSLATION
	"You are already offline.": null, // NEEDS TRANSLATION
	"Search cancelled.": null, // NEEDS TRANSLATION
	"You're not currently searching.": null, // NEEDS TRANSLATION
	"Format {id} does not exist": null, // NEEDS TRANSLATION
	"Added format {id} to favourites": null, // NEEDS TRANSLATION
	"{id} is not in your favourites!": null, // NEEDS TRANSLATION
	"Removed format {id} from favourites": null, // NEEDS TRANSLATION
	"You are not able to ignore yourself.": null, // NEEDS TRANSLATION
	"User '{target}' is already on your ignore list. (Moderator messages will not be ignored.)": null, // NEEDS TRANSLATION
	"User '{target}' ignored. (Moderator messages will not be ignored.)": null, // NEEDS TRANSLATION
	"User '{target}' isn't on your ignore list.": null, // NEEDS TRANSLATION
	"User '{target}' no longer ignored.": null, // NEEDS TRANSLATION
	"Are you sure you want to clear your ignore list?": null, // NEEDS TRANSLATION
	"If you're sure, use <code>/clearignore confirm</code>": null, // NEEDS TRANSLATION
	"You have no ignored users.": null, // NEEDS TRANSLATION
	"Your ignore list was cleared.": null, // NEEDS TRANSLATION
	"You are currently not ignoring anyone.": null, // NEEDS TRANSLATION
	"You are currently ignoring: {ignoringList}": null, // NEEDS TRANSLATION
	"Join/leave messages in room {room}: ALWAYS ON": null, // NEEDS TRANSLATION
	"Join/leave messages: ALWAYS ON": null, // NEEDS TRANSLATION
	"Join/leave messages on room {room}: OFF": null, // NEEDS TRANSLATION
	"Join/leave messages: OFF": null, // NEEDS TRANSLATION
	"Debug battle messages: ON": null, // NEEDS TRANSLATION
	"Debug battle messages: OFF": null, // NEEDS TRANSLATION
	"Battle Messages: ON": null, // NEEDS TRANSLATION
	"Battle Messages: HIDDEN": null, // NEEDS TRANSLATION
	"April Fools' Day mode set to SPRITES.": null, // NEEDS TRANSLATION
	"April Fools' Day mode set to OFF temporarily.": null, // NEEDS TRANSLATION
	"Trying to turn it off permanently? Use /afd never": null, // NEEDS TRANSLATION
	"April Fools' Day mode set to DEFAULT (Currently {currentMode}).": null, // NEEDS TRANSLATION
	"April Fools' Day mode set to FULL.": null, // NEEDS TRANSLATION
	"April Fools' Day mode set to NEVER.": null, // NEEDS TRANSLATION
	"You're using the AFD URL, which will still override this setting and enable AFD mode on refresh.": null, // NEEDS TRANSLATION
	"AFD option \"{target}\" not recognized": null, // NEEDS TRANSLATION
	"DEFAULT (currently {currentMode})": null, // NEEDS TRANSLATION
	"AFD is currently set to {curMode}": null, // NEEDS TRANSLATION
	"You do not have any DM windows open.": null, // NEEDS TRANSLATION
	"All DM windows cleared and closed.": null, // NEEDS TRANSLATION
	"(Already visible.)": null, // NEEDS TRANSLATION
	"Locked/banned users' chat messages: VISIBLE": null, // NEEDS TRANSLATION
	"(Already hidden.)": null, // NEEDS TRANSLATION
	"Locked/banned users' chat messages: HIDDEN": null, // NEEDS TRANSLATION
	"Someone is already using the name {takenName}.": null, // NEEDS TRANSLATION
	"You've already chosen for this turn; cancel to change your choice": null, // NEEDS TRANSLATION
	"You do not need to manually choose to pass; the client handles it for you automatically": null, // NEEDS TRANSLATION
	"You are trapped and cannot switch out": null, // NEEDS TRANSLATION
	"You've already chosen to switch that Pokémon in": null, // NEEDS TRANSLATION
	"Unexpected bug, please report this": null, // NEEDS TRANSLATION
	"Only Pokémon not already in the center can shift to the center": null, // NEEDS TRANSLATION
	"It's not your turn to choose anything": null, // NEEDS TRANSLATION
	"You must switch in a Pokémon, not move.": null, // NEEDS TRANSLATION
	"Move choice has multiple targets": null, // NEEDS TRANSLATION
	"Move \"{moveName}\" is disabled": null, // NEEDS TRANSLATION
	"Move {moveName} is disabled": null, // NEEDS TRANSLATION
	"You cannot decide for your partner!": null, // NEEDS TRANSLATION
	"Couldn't find Pokémon \"{choice}\" to switch to": null, // NEEDS TRANSLATION
	"Couldn't find Pokémon \"{choice}\" to switch to!": null, // NEEDS TRANSLATION
	"That Pokémon is already in battle!": null, // NEEDS TRANSLATION
	"{targetName} still has energy to battle!": null, // NEEDS TRANSLATION
	"{targetName} is fainted and cannot battle!": null, // NEEDS TRANSLATION
	"Unrecognized choice \"{choice}\"": null, // NEEDS TRANSLATION
	"This room is not designed to connect to a server room": null, // NEEDS TRANSLATION
	"Now highlighting on (everywhere): {list}": null, // NEEDS TRANSLATION
	"Now highlighting on (in {key}): {list}": null, // NEEDS TRANSLATION
	"Current highlight list (everywhere): {list}": null, // NEEDS TRANSLATION
	"Current highlight list (in {key}): {list}": null, // NEEDS TRANSLATION
	"Invalid regular expression: /{word}/: {message}": null, // NEEDS TRANSLATION
	"{word} is already on your highlights list.": null, // NEEDS TRANSLATION
	"Invalid /highlight command.": null, // NEEDS TRANSLATION
	"All highlights (everywhere) cleared.": null, // NEEDS TRANSLATION
	"All highlights (in {key}) cleared.": null, // NEEDS TRANSLATION
	"All highlights (in all rooms and globally) cleared.": null, // NEEDS TRANSLATION
	"Your highlight list is empty.": null, // NEEDS TRANSLATION
	"Your highlight list in {key} is empty.": null, // NEEDS TRANSLATION
	"/challenge - Open a prompt to challenge a user to a battle.": null, // NEEDS TRANSLATION
	"/challenge [user] - Challenge the user [user] to a battle.": null, // NEEDS TRANSLATION
	"/challenge [user], [format] - Challenge the user [user] to a battle in the specified [format].": null, // NEEDS TRANSLATION
	"/challenge [user], [format] @@@ [rules] - Challenge the user [user] to a battle with custom rules.": null, // NEEDS TRANSLATION
	"{rules} can be a comma-separated list of: [added rule], ![removed rule], -[banned thing], *[restricted thing], +[unbanned/unrestricted thing]": null, // NEEDS TRANSLATION
	"If used in the DMs of a user, no [user] parameter can be used and it will challenge that user.": null, // NEEDS TRANSLATION
	"/battlerules - Detailed information on what can go in [rules].": null, // NEEDS TRANSLATION
	"/accept - Accept a challenge if only one is pending.": null, // NEEDS TRANSLATION
	"/accept [user] - Accept a challenge from the specified user.": null, // NEEDS TRANSLATION
	"/reject - Reject a challenge if only one is pending.": null, // NEEDS TRANSLATION
	"/reject [user] - Reject a challenge from the specified user.": null, // NEEDS TRANSLATION
	"/user [user] - Open a popup containing the user [user]'s avatar, name, rank, and chatroom list.": null, // NEEDS TRANSLATION
	"/news - Opens a popup containing the news.": null, // NEEDS TRANSLATION
	"/ignore [user] - Ignore all messages from the user [user].": null, // NEEDS TRANSLATION
	"/unignore [user] - Remove the user [user] from your ignore list.": null, // NEEDS TRANSLATION
	"/ignorelist - List all the users that you currently ignore.": null, // NEEDS TRANSLATION
	"/clearignore - Remove all users on your ignore list.": null, // NEEDS TRANSLATION
	"Note that staff messages cannot be ignored.": null, // NEEDS TRANSLATION
	"/nick [new username] - Change your username.": null, // NEEDS TRANSLATION
	"/clear - Clear the room's chat log.": null, // NEEDS TRANSLATION
	"/showdebug - Receive debug messages from battle events.": null, // NEEDS TRANSLATION
	"/hidedebug - Ignore debug messages from battle events.": null, // NEEDS TRANSLATION
	"/showjoins [room] - Receive users' join/leave messages.": null, // NEEDS TRANSLATION
	"/hidejoins [room] - Ignore users' join/leave messages.": null, // NEEDS TRANSLATION
	"If no [room] is provided, changes the global setting.": null, // NEEDS TRANSLATION
	"/showbattles - Receive links to new battles in Lobby.": null, // NEEDS TRANSLATION
	"/hidebattles - Ignore links to new battles in Lobby.": null, // NEEDS TRANSLATION
	"/ffto [turn] - Skip to turn [turn] in the current battle.": null, // NEEDS TRANSLATION
	"/ffto +[turn] - Skip forward [turn] turns.": null, // NEEDS TRANSLATION
	"/ffto -[turn] - Skip backward [turn] turns.": null, // NEEDS TRANSLATION
	"/ffto 0 - Skip to the start of the battle.": null, // NEEDS TRANSLATION
	"/ffto end - Skip to the end of the battle.": null, // NEEDS TRANSLATION
	"/unpackhidden - Suppress hiding locked or banned users' chat messages after the fact.": null, // NEEDS TRANSLATION
	"/packhidden - Hide locked or banned users' chat messages after the fact.": null, // NEEDS TRANSLATION
	"Hidden messages from a user can be restored by clicking the button underneath their lock/ban reason.": null, // NEEDS TRANSLATION
	"Set your timestamps preference:": null, // NEEDS TRANSLATION
	"/timestamps [all|lobby|pms], [minutes|seconds|off]": null, // NEEDS TRANSLATION
	"all - Change all timestamps preferences, lobby - Change only lobby chat preferences, pms - Change only PM preferences.": null, // NEEDS TRANSLATION
	"off - Set timestamps off, minutes - Show timestamps of the form [hh:mm], seconds - Show timestamps of the form [hh:mm:ss].": null, // NEEDS TRANSLATION
	"Set up highlights:": null, // NEEDS TRANSLATION
	"/highlight add [word 1], [word 2], [...] - Add the provided list of words to your highlight list.": null, // NEEDS TRANSLATION
	"/highlight roomadd [word 1], [word 2], [...] - Add the provided list of words to the highlight list of whichever room you used the command in.": null, // NEEDS TRANSLATION
	"/highlight list - List all words that currently highlight you.": null, // NEEDS TRANSLATION
	"/highlight roomlist - List all words that currently highlight you in whichever room you used the command in.": null, // NEEDS TRANSLATION
	"/highlight delete [word 1], [word 2], [...] - Delete the provided list of words from your entire highlight list.": null, // NEEDS TRANSLATION
	"/highlight roomdelete [word 1], [word 2], [...] - Delete the provided list of words from the highlight list of whichever room you used the command in.": null, // NEEDS TRANSLATION
	"/highlight clear - Clear your global highlight list.": null, // NEEDS TRANSLATION
	"/highlight roomclear - Clear the highlight list of whichever room you used the command in.": null, // NEEDS TRANSLATION
	"/highlight clearall - Clear your entire highlight list (all rooms and globally).": null, // NEEDS TRANSLATION
	"/rank [user] - Shows all ladder ranks for the given [user].": null, // NEEDS TRANSLATION
	"/rank [user], [format] - Shows the rank of [user] in the given [format].": null, // NEEDS TRANSLATION
	"If no user is given, it defaults to the user of the command.": null, // NEEDS TRANSLATION
	"/afd full - Enable all April Fools' Day jokes.": null, // NEEDS TRANSLATION
	"/afd sprites - Enable April Fools' Day sprites.": null, // NEEDS TRANSLATION
	"/afd default - Set April Fools' Day to default (full on April 1st, off otherwise).": null, // NEEDS TRANSLATION
	"/afd off - Disable April Fools' Day jokes until the next refresh, and set /afd default.": null, // NEEDS TRANSLATION
	"/afd never - Disable April Fools' Day jokes permanently.": null, // NEEDS TRANSLATION
	"This is a PS system command; do not use it.": null, // NEEDS TRANSLATION
	"This room has been deleted (you can't chat in it anymore)": null, // NEEDS TRANSLATION
	"This room doesn't exist": null, // NEEDS TRANSLATION
	"Are you sure you want to leave?": null, // NEEDS TRANSLATION
	"(Autoreconnect in {secs}s)": null, // NEEDS TRANSLATION
	"(Reconnecting...)": null, // NEEDS TRANSLATION
	" (nor load the translation catalog). Without it,\n * this stand-in keeps the replay controls working, in English.\n */\nfunction ensureTL() {\n\tconst win = window as any;\n\tif (typeof win.TL === 'function') return;\n\twin.TL = (strings: string | readonly string[], ...values: unknown[]) => {\n\t\tlet source = typeof strings === 'string' ? strings :\n\t\t\tstrings.map((part, i) => (i ? ": null, // NEEDS TRANSLATION
	"Color scheme:": null, // NEEDS TRANSLATION
	"Speed:": null, // NEEDS TRANSLATION
	"Hyperfast": null, // NEEDS TRANSLATION
	"Fast": null, // NEEDS TRANSLATION
	"Normal": null, // NEEDS TRANSLATION
	"Slow": null, // NEEDS TRANSLATION
	"Really Slow": null, // NEEDS TRANSLATION
	"Music:": null, // NEEDS TRANSLATION
	"On": null, // NEEDS TRANSLATION
	"This replay was uploaded from a third-party server ({server}). It contains errors.": null, // NEEDS TRANSLATION
	"Replays uploaded from third-party servers can contain errors if the server is running custom code, or the server operator has otherwise incorrectly configured their server.": null, // NEEDS TRANSLATION
	"[Reset]": null, // NEEDS TRANSLATION
	"[Last turn]": null, // NEEDS TRANSLATION
	"[Next turn]": null, // NEEDS TRANSLATION
	"[Go to turn...]": null, // NEEDS TRANSLATION
	"[Switch sides]": null, // NEEDS TRANSLATION
	"Turn?": null, // NEEDS TRANSLATION
	"Invalid turn": null, // NEEDS TRANSLATION

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
	"Resources": null, // NEEDS TRANSLATION
	"While this page chiefly documents the ever-shifting set of commands available to PS! users, here are some useful resources for newcomers:": null, // NEEDS TRANSLATION
	"Within any of the chats, and in private messages, it is possible to type in commands (messages beginning with {SLASH}) to perform a particular action. A great number of these commands exist, with some only available to certain users. For instance, you can broadcast commands to others with the {EXCLAMATION} prefix, but only when you're a player in a battle or a Voice (+) user.": null, // NEEDS TRANSLATION
	"You can also use the \"chat self\" button on your username in the top right if you need a place to send these commands without joining a room.": null, // NEEDS TRANSLATION
	"A complete list of commands available to regular users is provided below. Use {COMMAND} for more in-depth information on how to use them.": null, // NEEDS TRANSLATION
	"PS! Informational Resources": null, // NEEDS TRANSLATION
	"PS! is a wide and varied site, with more facets than can be covered here easily.": null, // NEEDS TRANSLATION
	"Beginner's Guide to Pokémon Showdown": null, // NEEDS TRANSLATION
	"An introduction to competitive Pokémon": null, // NEEDS TRANSLATION
	"What do 'OU', 'UU', etc mean?": null, // NEEDS TRANSLATION
	"What are the rules for each format?": null, // NEEDS TRANSLATION
	"What is 'Sleep Clause' and other clauses?": null, // NEEDS TRANSLATION
	"Next Steps for Competitive Battling": null, // NEEDS TRANSLATION
	"Commands": null, // NEEDS TRANSLATION
	"For more information on ranks, type {COMMAND} in any chat.": null, // NEEDS TRANSLATION
	"Here's a list of the most useful commands for the average Pokémon Showdown experience:": null, // NEEDS TRANSLATION
	"COMMANDS": null, // NEEDS TRANSLATION
	"BATTLE ROOM COMMANDS": null, // NEEDS TRANSLATION
	"OPTION COMMANDS": null, // NEEDS TRANSLATION
	"INFORMATIONAL/RESOURCE COMMANDS": null, // NEEDS TRANSLATION
	"(replace / with ! to broadcast. Broadcasting requires: + % @ # ~)": null, // NEEDS TRANSLATION
	"DATA COMMANDS": null, // NEEDS TRANSLATION
	"For an overview of room commands, use {COMMAND}": null, // NEEDS TRANSLATION
	"For details of a specific command, you can use {COMMAND}, for example {EXAMPLE}.": null, // NEEDS TRANSLATION
	"Search": null, // NEEDS TRANSLATION
	"Collapse all": null, // NEEDS TRANSLATION
	"Filter by command name": null, // NEEDS TRANSLATION
	"Loading command data, please try again in a few moments...": null, // NEEDS TRANSLATION
	"Chat plugin": null, // NEEDS TRANSLATION
	"Core commands": null, // NEEDS TRANSLATION
	"Namelocked": null, // NEEDS TRANSLATION
	"Effects": null, // NEEDS TRANSLATION
	"Music": null, // NEEDS TRANSLATION
	"Notifications": null, // NEEDS TRANSLATION
	"Mute all": null, // NEEDS TRANSLATION
	"Image is too large and can't be saved. It should be under 3.5MB or so.": null, // NEEDS TRANSLATION
	"Failed to load background image.": null, // NEEDS TRANSLATION
	"Charizards": null, // NEEDS TRANSLATION
	"Horizon": null, // NEEDS TRANSLATION
	"Ocean": null, // NEEDS TRANSLATION
	"Solid blue": null, // NEEDS TRANSLATION
	"Upload": null, // NEEDS TRANSLATION
	"Usable formatting:": null, // NEEDS TRANSLATION
	"bold": null, // NEEDS TRANSLATION
	"italics": null, // NEEDS TRANSLATION
	"code formatting": null, // NEEDS TRANSLATION
	"strikethrough": null, // NEEDS TRANSLATION
	"superscript": null, // NEEDS TRANSLATION
	"subscript": null, // NEEDS TRANSLATION
	"Suppress {GREENTEXT}": null, // NEEDS TRANSLATION
	"greentext": null, // NEEDS TRANSLATION
	"Suppress {ME} {ACTION_FORMATTING}": null, // NEEDS TRANSLATION
	"action formatting": null, // NEEDS TRANSLATION
	"Auto-show spoilers": null, // NEEDS TRANSLATION
	"these things": null, // NEEDS TRANSLATION
	"Make [[clickable links]] unclickable": null, // NEEDS TRANSLATION
	"Don't warn for untrusted links": null, // NEEDS TRANSLATION
	"Close {ROOM}?": null, // NEEDS TRANSLATION
	"Try vertical tabs": null, // NEEDS TRANSLATION
	"Follow US laws (PS is based in the US). No porn (minors use PS), don't distribute pirated material, and don't slander others.": null, // NEEDS TRANSLATION
	"No sex. Don't discuss anything sexually explicit, not even in private messages, not even if you're both adults.": null, // NEEDS TRANSLATION
	"No cheating. Don't exploit bugs to gain an unfair advantage. Don't game the system (by intentionally losing against yourself or a friend in a ladder match, by timerstalling, etc). Don't impersonate staff if you're not.": null, // NEEDS TRANSLATION
	"Moderators have discretion to punish any behaviour they deem inappropriate, whether or not it's on this list. If you disagree with a moderator ruling, appeal to an administrator (a user with ~ next to their name) or {LINK}.": null, // NEEDS TRANSLATION
	"(Note: The First Amendment does not apply to PS, since PS is not a government organization.)": null, // NEEDS TRANSLATION
	"Do not spam, flame, or troll. This includes advertising, raiding, asking questions with one-word answers in the lobby, and flooding the chat such as by copy/pasting logs in the lobby.": null, // NEEDS TRANSLATION
	"Don't call unnecessary attention to yourself. Don't be obnoxious. ALL CAPS and {FORMATTING} are acceptable to emphasize things, but should be used sparingly, not all the time.": null, // NEEDS TRANSLATION
	"No minimodding: don't mod if it's not your job. Don't tell people they'll be muted, don't ask for people to be muted, and don't talk about whether or not people should be muted ('inb4 mute', etc). This applies to bans and other punishments, too.": null, // NEEDS TRANSLATION
	"We reserve the right to tell you to stop discussing moderator decisions if you become unreasonable or belligerent": null, // NEEDS TRANSLATION
	"(Note: You can opt out of chat rules in private chat rooms and battle rooms, but only if all ROs or players agree to it.)": null, // NEEDS TRANSLATION
	"Usernames may not impersonate a recognized user (a user with %, @, #, or ~ next to their name) or a famous person/organization that uses PS or is associated with Pokémon.": null, // NEEDS TRANSLATION
	"Usernames may not be derogatory or insulting in nature, to an individual or group (insulting yourself is okay as long as it's not too serious).": null, // NEEDS TRANSLATION
	"Usernames may not directly reference sexual activity, or be excessively disgusting.": null, // NEEDS TRANSLATION
	"This policy is less restrictive than that of many places, so you might see some \"borderline\" nicknames that might not be accepted elsewhere. You might consider it unfair that they are allowed to keep their nickname. The fact remains that their nickname follows the above rules, and if you were asked to choose a new name, yours does not.": null, // NEEDS TRANSLATION
	"You have been warned for breaking the rules.": null, // NEEDS TRANSLATION
	"Pokémon Showdown Rules": null, // NEEDS TRANSLATION
	"Be nice to people. Respect people. Don't be rude or mean to people.": null, // NEEDS TRANSLATION
	"Discipline Appeals": null, // NEEDS TRANSLATION
	"formatting": null, // NEEDS TRANSLATION
	"English only, unless specified otherwise.": null, // NEEDS TRANSLATION
	"Usernames": null, // NEEDS TRANSLATION
	"Your username can be chosen and changed at any time. Keep in mind:": null, // NEEDS TRANSLATION

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
	"Rock Paper Scissors": null, // NEEDS TRANSLATION
	"Best-of-{NUMBER}": null, // NEEDS TRANSLATION
	"Spotlight": null, // NEEDS TRANSLATION
	"Pokémon Showdown is offline due to a DDoS attack!": null, // NEEDS TRANSLATION
	"Pokémon Showdown is offline due to technical difficulties!": null, // NEEDS TRANSLATION
	"Bear with us as we freak out.": null, // NEEDS TRANSLATION
	"(We'll be back up in a few hours.)": null, // NEEDS TRANSLATION
	"Start a team-locked best-of-n series": null, // NEEDS TRANSLATION
	"Tera Type Preview": null, // NEEDS TRANSLATION
	"Item Clause": null, // NEEDS TRANSLATION
	"Rules separated by commas or lines": null, // NEEDS TRANSLATION
	"Custom rules guide": null, // NEEDS TRANSLATION

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
	"{effect} suppressed by {suppressor}": null, // NEEDS TRANSLATION
	"{multiplier}&times; from {label}": null, // NEEDS TRANSLATION
	"can't miss": null, // NEEDS TRANSLATION
	"found": null, // NEEDS TRANSLATION
	"frisked": null, // NEEDS TRANSLATION
	"stolen": null, // NEEDS TRANSLATION
	"harvested": null, // NEEDS TRANSLATION
	"bestowed": null, // NEEDS TRANSLATION
	"tricked": null, // NEEDS TRANSLATION
	"knocked off": null, // NEEDS TRANSLATION
	"disturbed": null, // NEEDS TRANSLATION
	"shared": null, // NEEDS TRANSLATION
	"was {item}": null, // NEEDS TRANSLATION
	"{item} was eaten": null, // NEEDS TRANSLATION
	"{item} was consumed": null, // NEEDS TRANSLATION
	"{item} was popped": null, // NEEDS TRANSLATION
	"{item} was held up": null, // NEEDS TRANSLATION
	"{item} was flung": null, // NEEDS TRANSLATION
	"{item} was knocked off": null, // NEEDS TRANSLATION
	"{item} was stolen": null, // NEEDS TRANSLATION
	"{item} was incinerated": null, // NEEDS TRANSLATION
	"{item} was given away": null, // NEEDS TRANSLATION
	"(Terastallized)": null, // NEEDS TRANSLATION
	"(Type changed)": null, // NEEDS TRANSLATION
	"Poison type": null, // NEEDS TRANSLATION
	"fails if target's Speed is higher": null, // NEEDS TRANSLATION
	"not Ice-type": null, // NEEDS TRANSLATION
	"FAILS: target's level is higher": null, // NEEDS TRANSLATION
	"+1% per level above target": null, // NEEDS TRANSLATION
	"fails if target's level is higher": null, // NEEDS TRANSLATION
	"Acrobatics + no item": null, // NEEDS TRANSLATION
	"Tera Stellar boost": null, // NEEDS TRANSLATION
	"Brine + target below half HP": null, // NEEDS TRANSLATION
	"Facade + status": null, // NEEDS TRANSLATION
	"{moveName} + status": null, // NEEDS TRANSLATION
	"Smelling Salts + Paralysis": null, // NEEDS TRANSLATION
	"{moveName} + Poison": null, // NEEDS TRANSLATION
	"Wake-Up Slap + Sleep": null, // NEEDS TRANSLATION
	"Terrain Pulse boost": null, // NEEDS TRANSLATION
	"blocked by target's Dynamax": null, // NEEDS TRANSLATION
	"{aura} + Aura Break": null, // NEEDS TRANSLATION
	"Terrain boost": null, // NEEDS TRANSLATION
	"Misty Terrain + grounded target": null, // NEEDS TRANSLATION
	"Grassy Terrain + grounded target": null, // NEEDS TRANSLATION
	"Expanding Force + Psychic Terrain boost": null, // NEEDS TRANSLATION
	"Misty Explosion + Misty Terrain boost": null, // NEEDS TRANSLATION
	"Rising Voltage + Electric Terrain boost": null, // NEEDS TRANSLATION
	"Tera type BP minimum": null, // NEEDS TRANSLATION
	"Burn": null, // NEEDS TRANSLATION
	"no Terrain": null, // NEEDS TRANSLATION
	"{totalTime} total": null, // NEEDS TRANSLATION
	"Error: Missing BattleChoiceBuilder": null, // NEEDS TRANSLATION
	"[Download replay]": null, // NEEDS TRANSLATION

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
	"You reconnected.": "Vous êtes reconnecté.",
	"Note: Scrollback doesn't go all the way back to when you disconnected.": "Remarque : l'historique ne remonte pas jusqu'au moment de votre déconnexion.",
	"You disconnected.": "Vous avez été déconnecté.",
	"d3 not loaded yet": null, // NEEDS TRANSLATION
	"the replay viewer's Smogon thread": null, // NEEDS TRANSLATION
	"Bug? Report it to {smogonThread}": null, // NEEDS TRANSLATION
	"Unrecognized": null, // NEEDS TRANSLATION
	"Standard": null, // NEEDS TRANSLATION
	"Standard AG": null, // NEEDS TRANSLATION
	"Standard Doubles": null, // NEEDS TRANSLATION
	"Standard NatDex": null, // NEEDS TRANSLATION
	"Flat Rules": null, // NEEDS TRANSLATION
	"VGC Timer": null, // NEEDS TRANSLATION
	"Species Clause": null, // NEEDS TRANSLATION
	"Nickname Clause": null, // NEEDS TRANSLATION
	"Sleep Clause Mod": null, // NEEDS TRANSLATION
	"Sleep Moves Clause": null, // NEEDS TRANSLATION
	"Gravity Sleep Clause": null, // NEEDS TRANSLATION
	"OHKO Clause": null, // NEEDS TRANSLATION
	"Evasion Clause": null, // NEEDS TRANSLATION
	"Evasion Abilities Clause": null, // NEEDS TRANSLATION
	"Evasion Items Clause": null, // NEEDS TRANSLATION
	"Evasion Moves Clause": null, // NEEDS TRANSLATION
	"Endless Battle Clause": null, // NEEDS TRANSLATION
	"Terastal Clause": null, // NEEDS TRANSLATION
	"Dynamax Clause": null, // NEEDS TRANSLATION
	"Mega Rayquaza Clause": null, // NEEDS TRANSLATION
	"Z-Move Clause": null, // NEEDS TRANSLATION
	"Same Type Clause": null, // NEEDS TRANSLATION
	"HP Percentage Mod": null, // NEEDS TRANSLATION
	"Exact HP Mod": null, // NEEDS TRANSLATION
	"Cancel Mod": null, // NEEDS TRANSLATION
	"NatDex Mod": null, // NEEDS TRANSLATION
	"Obtainable": null, // NEEDS TRANSLATION
	"Team Preview": null, // NEEDS TRANSLATION
	"Picked Team Size": null, // NEEDS TRANSLATION
	"Adjust Level": null, // NEEDS TRANSLATION
	"Adjust Level Down": null, // NEEDS TRANSLATION
	"Best Of": null, // NEEDS TRANSLATION
	"Open Team Sheets": null, // NEEDS TRANSLATION
	"Force Open Team Sheets": null, // NEEDS TRANSLATION
	"Blitz": null, // NEEDS TRANSLATION
	"Little Cup": null, // NEEDS TRANSLATION
	"Cobblemon No Egg Moves": null, // NEEDS TRANSLATION
	"Cobblemon New Megas": null, // NEEDS TRANSLATION
	"Limit one of each Pokémon": null, // NEEDS TRANSLATION
	"Limit one foe put to sleep": null, // NEEDS TRANSLATION
	"OHKO moves are banned": null, // NEEDS TRANSLATION
	"Evasion abilities, items, and moves are banned": null, // NEEDS TRANSLATION
	"Evasion abilities are banned": null, // NEEDS TRANSLATION
	"Evasion items are banned": null, // NEEDS TRANSLATION
	"Evasion moves are banned": null, // NEEDS TRANSLATION
	"Sleep-inducing moves are banned": null, // NEEDS TRANSLATION
	"The combination of sleep-inducing moves with imperfect accuracy and Gravity or Gigantamax Orbeetle are banned": null, // NEEDS TRANSLATION
	"The combination of Gravity and sleep-inducing moves with imperfect accuracy are banned": null, // NEEDS TRANSLATION
	"Forcing endless battles is banned": null, // NEEDS TRANSLATION
	"You cannot Terastallize": null, // NEEDS TRANSLATION
	"You cannot dynamax": null, // NEEDS TRANSLATION
	"You cannot mega evolve Rayquaza": null, // NEEDS TRANSLATION
	"Z-Moves are banned": null, // NEEDS TRANSLATION
	"Pokémon in a team must share a type": null, // NEEDS TRANSLATION
	"HP is shown in percentages": null, // NEEDS TRANSLATION
	"Exact HP is shown": null, // NEEDS TRANSLATION
	"Tera Types are shown at Team Preview": null, // NEEDS TRANSLATION
	"Super-fast timer": null, // NEEDS TRANSLATION
	"Limit {count} of each item": null, // NEEDS TRANSLATION
	"{formatName} (Custom rules: {customRules})": null, // NEEDS TRANSLATION
	"outdated code no longer supported": null, // NEEDS TRANSLATION
	"You will need to click Download again once the replay file is at the end.": null, // NEEDS TRANSLATION
	"Chatroom \"{title}\" not found": null, // NEEDS TRANSLATION
	"This room has expired (you can't chat in it anymore)": null, // NEEDS TRANSLATION
	"(Hide {hiddenCount} lines from {userid})": null, // NEEDS TRANSLATION
	"(Hide {hiddenCount} line from {userid})": null, // NEEDS TRANSLATION
	"This user has not played any ladder games yet.": null, // NEEDS TRANSLATION
	"user's percentage chance of winning a random battle (aka GLIXARE)": null, // NEEDS TRANSLATION
	"Glicko-1 rating: rating ± deviation": null, // NEEDS TRANSLATION
	"Total": null, // NEEDS TRANSLATION
	"Suspect reqs possible?": null, // NEEDS TRANSLATION
	"(provisional)": null, // NEEDS TRANSLATION
	"No": null, // NEEDS TRANSLATION
	"This user has not played any ladder games that match {formatsText}.": null, // NEEDS TRANSLATION
	"This user has no notable ladder activity.": null, // NEEDS TRANSLATION
	"Show {hiddenCount} hidden format": null, // NEEDS TRANSLATION
	"Show {hiddenCount} hidden formats": null, // NEEDS TRANSLATION
	"Reset W/L": null, // NEEDS TRANSLATION
	"Challenge from {name}": null, // NEEDS TRANSLATION
	"W": {
		"wins": null, // NEEDS TRANSLATION
	},

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
	"Sort": null, // NEEDS TRANSLATION
	"Cat": null, // NEEDS TRANSLATION
	"Pow": null, // NEEDS TRANSLATION
	"Acc": null, // NEEDS TRANSLATION
	"PP": null, // NEEDS TRANSLATION
	"Unrecognized pokemon": null, // NEEDS TRANSLATION
	"Unrecognized item": null, // NEEDS TRANSLATION
	"Unrecognized ability": null, // NEEDS TRANSLATION
	"(slot {slot} empty)": null, // NEEDS TRANSLATION
	"Unrecognized move": null, // NEEDS TRANSLATION
	"Power": null, // NEEDS TRANSLATION
	"Accuracy": null, // NEEDS TRANSLATION
	"(search type)": null, // NEEDS TRANSLATION
	"(article)": null, // NEEDS TRANSLATION
	"(egg group)": null, // NEEDS TRANSLATION
	"(tier)": null, // NEEDS TRANSLATION
	"Error: not found": null, // NEEDS TRANSLATION
	"Filters": null, // NEEDS TRANSLATION
	"(backspace = delete filter)": null, // NEEDS TRANSLATION
	"Show previous search results": null, // NEEDS TRANSLATION
	"Show next search results": null, // NEEDS TRANSLATION
	"{clipboardTeam.team.name} (copy)": null, // NEEDS TRANSLATION
	"(No moves)": null, // NEEDS TRANSLATION
	"Clipboard": null, // NEEDS TRANSLATION
	"Yes": null, // NEEDS TRANSLATION
	"Paste exported teams, pokepaste URLs, or JSON here": null, // NEEDS TRANSLATION
	"No {set.species} sets found in boxes": null, // NEEDS TRANSLATION
	"No Pokemon set found.": null, // NEEDS TRANSLATION
	"Smogon analysis": null, // NEEDS TRANSLATION
	"(You probably want to change the team's levels by changing the format, not here)": null, // NEEDS TRANSLATION
	"Random": null, // NEEDS TRANSLATION
	"Gigantamax": null, // NEEDS TRANSLATION
	"Find more helpful resources for {FORMAT} on {LINK}.": null, // NEEDS TRANSLATION
	"Find helpful resources for {FORMAT} on {LINK}.": null, // NEEDS TRANSLATION
	"the Smogon Dex": null, // NEEDS TRANSLATION
	"This is a disconnected team. This could be because you uploaded it on a different account, or because you deleted or un-uploaded it on a different computer. For safety, you can't edit this team. You can, however, delete it, or make a copy (which will be editable).": null, // NEEDS TRANSLATION
	"Share URL": null, // NEEDS TRANSLATION
	"Not found in the Teams database. Maybe you uploaded it on a different account?": null, // NEEDS TRANSLATION
	"Stored in cookies on your computer. Warning: Your browser might delete these. Make sure to use backups.": null, // NEEDS TRANSLATION
	"Uploaded to the Teams database. You can share with the URL.": null, // NEEDS TRANSLATION
	"Uploaded to the Teams database publicly. Share with the URL or people can find it by searching.": null, // NEEDS TRANSLATION
	"Copy of {copyFrom.name}": null, // NEEDS TRANSLATION
	"Readable": null, // NEEDS TRANSLATION

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
	"No data returned from server.": null, // NEEDS TRANSLATION
	"{formatName} Top - '{room.searchValue}'": null, // NEEDS TRANSLATION
	"{formatName} Top 500": null, // NEEDS TRANSLATION
	"username prefix": null, // NEEDS TRANSLATION

	// #endregion Ladder

	// #region Misc rooms
	// ==================================================================

	"[Join the Help room for live help]": "Rejoindre le salon Help pour une aide en direct",
	"Unrecognized command: {INPUT}": "Commande non reconnue : {INPUT}",

	// #endregion Misc rooms
};
