import type { TranslationCatalog } from '../../server/chat';

export const translations: TranslationCatalog = {
	"Server version: <b>{VERSION}</b>": "Version du serveur : <b>{VERSION}</b>",
	"/mee - must not start with a letter or number": "/mee - ne doit pas commencer avec une lettre ou un nombre",
	"What?! How are you not more excited to battle?! Try /battle! to show me you're ready.": "Quoi ? Comment ça se fait que tu ne sois pas plus content que ça de combattre ? Essaie /battle! pour me montrer que tu es prêt !",
	"Access denied for custom avatar - make sure you're on the right account?": "Accès refusé pour l'avatar personnalisé - es-tu sûr d'être sur le bon compte ?",
	"Invalid avatar.": "Avatar invalide.",
	"Avatar changed to:": "Avatar changé pour :",
	"Artist: ": "Artiste : ",
	"No one has PMed you yet.": "Personne ne t'a encore envoyé de MP.",
	"You forgot the comma.": "Tu as oublié la virgule.",
	"User {TARGETUSER} not found. Did you misspell their name?": "Aucun {TARGETUSER} n'a été trouvé. As-tu bien écrit son pseudo ?",
	"User {TARGETUSER} is offline.": "{TARGETUSER} est hors-ligne.",
	"The user \"{TARGETUSER}\" was not found.": "L'utilisateur \"{TARGETUSER}\" n'a pas été trouvé.",
	"The room \"{TARGET}\" was not found.": "La room \"{TARGET}\" n'a pas été trouvée.",
	"You do not have permission to invite people into this room.": "Tu n'as pas la permission d'inviter des gens dans cette room.",
	"This user is already in \"{ROOM}\".": "Cet utilisateur est déjà sur \"{ROOM}\"",
	"Setting status messages in /busy is no longer supported. Set a status using /status.": "Écrire un statut avec /busy n'est plus possible. Pour le faire, utilise /status.",
	"Setting status messages in /away is no longer supported. Set a status using /status.": "Écrire un statut avec /away n'est plus possible. Pour le faire, utilise /status.",
	"{TARGETUSER} does not have a status set.": "{TARGETUSER} n'a pas de statut actuellement",
	"{TARGETUSER}'s status \"{STATUS}\" was cleared by {USER}{REASON}": "Le statut de {TARGETUSER}, \"{STATUS}\", a été effacé par {USER}{REASON}",
	"You don't have a status message set.": "Tu n'as pas encore de message de statut.",
	"You have cleared your status message.": "Tu as effacé ton message de statut.",
	"This user has not played any ladder games yet.": "Cet utilisateur n'a pas encore fait de combat de ladder.",
	// TRANSLATORS: initial for Wins
	"W": "V",
	// TRANSLATORS: initial for Losses
	"L": "D",
	"You already have the temporary symbol '{GROUP}'.": "Tu as déjà temporairement le symbole '{GROUP}'.",
	"You must specify a valid group symbol.": "Tu dois préciser un symbole de groupe valide.",
	"You may only set a temporary symbol below your current rank.": "Tu ne peux t'attribuer un symbole temporaire que en-dessous de ton rang actuel.",
	"Your temporary group symbol is now": "Ton symbole de groupe temporaire est maintenant",
	"Currently, you're viewing Pokémon Showdown in {LANGUAGE}.": "Actuellement, tu vois Pokémon Showdown en {LANGUAGE}.",
	"Valid languages are: {LANGUAGES}": "Les langues disponibles sont : {LANGUAGES}",
	"Pokémon Showdown will now be displayed in {LANGUAGE} (except in language rooms).": "Pokémon Showdown sera maintenant affiché en {LANGUAGE} (hors chatrooms dédiées à une langue en particulier).",
	"Note that rooms can set their own language, which will override this setting.": "Note que les rooms peuvent choisir la langue dans laquelle elles s'affichent, ce qui aura priorité sur ce changement.",
	"/updatesettings expects JSON encoded object.": "/updatesettings demande un objet codé en JSON.",
	"Unable to parse settings in /updatesettings!": "Incapable d'analyser les paramètres dans /updatesettings!",
	"Must be in a battle.": "Doit être utilisé dans un combat.",
	"User {USER} not found.": "L'utilisateur {USER} n'a pas été trouvé.",
	"Must be a player in this battle.": "Doit être un joueur dans ce match",
	"{TARGETUSER} has not requested extraction.": "{TARGETUSER} n'a pas demandé l'extraction des logs.",
	"You have already consented to extraction with {TARGETUSER}.": "Tu as déjà approuvé l'extraction des logs avec {TARGETUSER}.",
	"{USER} consents to sharing battle team and choices with {TARGETUSER}.": "{USER} est d'accord pour partager son équipe dans le match et ses choix en jeu avec {TARGETUSER}.",
	"No input log found.": "Aucun log de trouvé.",
	"This command only works in battle rooms.": "Cette commande marche seulement en combat.",
	"This command only works when the battle has ended - if the battle has stalled, use /offertie.": "Cette commande marche seulement quand le combat est fini.",
	"Alternatively, you can end the battle with /forcetie.": "Alternativement, tu peux finir le combat avec /forcetie.",
	"{USER} has extracted the battle input log.": "{USER} a extrait le log du combat.",
	"You already extracted the battle input log.": "Tu as déjà extrait le log du combat.",
	"Battle input log re-requested.": "Le log du combat a été demandé de nouveau.",
	"Invalid input log.": "Log invalide.",
	"Your input log contains untrusted code - you must have console access to use it.": "Ton log contient du code non sécurisé - tu dois avoir accès à la console du système pour l'utiliser.",
	"This command can only be used in a battle.": "Cette commande peut seulement être utilisée en match.",
	"Only players can extract their team.": "Seuls les jouerus peuvent extraire leurs équipes.",
	"Use a number between 1-6 to view a specific set.": "Utilise un chiffre entre 1 et 6 pour voir un set spécifique.",
	"The Pokemon \"{TARGET}\" is not in your team.": "Le Pokémon \"{TARGET}\" n'est pas dans ton équipe.",
	"That Pokemon is not in your team.": "Ce Pokémon n'est pas dans ton équipe.",
	"View team": "Voir l'équipe.",
	"Must be in a battle room.": "Doit être en combat.",
	"User {USER} must be in the battle room already.": null, // NEEDS TRANSLATION
	"This server does not allow offering ties.": "Ce serveur ne permet pas les propositions de matchs nuls.",
	"You can't offer ties in tournaments.": "Tu ne peux pas proposer un match nul en tournoi.",
	"It's too early to tie, please play until turn 100.": "C'est trop tôt pour proposer un match nul, merci de jouer jusqu'au tour 100.",
	"No other player is requesting a tie right now. It was probably canceled.": "Aucun joueur ne demande un match nul. La demande a probablement été annulée.",
	"{USER} is offering a tie.": "{USER} propose un match nul.",
	"Accept tie": "Accepter le match nul.",
	"Reject": "Rejeter.",
	"Must be a player to accept ties.": "Tu dois être un des joueurs pour accepter le match nul.",
	"You have already agreed to a tie.": "Tu as déjà accepté le match nul.",
	"{USER} accepted the tie.": "{USER} a accepté le match nul.",
	"All players have accepted the tie.": "Tous les joueurs ont accepté le match nul.",
	"Must be a player to reject ties.": "Tu dois être un des joueurs pour refuser le match nul.",
	"{USER} rejected the tie.": "{USER} a refusé le match nul.",
	"This room doesn't have an active game.": "La room n'a pas de jeu actif.",
	"This kind of game can't be forfeited.": "Il n'est pas possible d'abandonner dans ce genre de jeu.",
	"This game doesn't support /choose": "Ce jeu n'accepte pas /choose.",
	"This game doesn't support /undo": "Ce jeu n'accepte pas /undo.",
	"You can only save replays for battles.": "Tu peux seulement sauvegarder les replays des combats.",
	"This battle can't have hidden replays, because the tournament is set to be forced public.": "Ce combat ne peut pas sauvegarder de replay caché, car le tournoi est paramétré pour être public.",
	"The replay for this battle is already set to hidden.": "Le replay de ce combat est déjà paramétré comme caché.",
	"{USER} hid the replay of this battle.": "{USER} a caché le replay de ce combat.",
	"You can only do this in battle rooms.": "Tu peux seulement faire ça dans les combats.",
	"You can only add a Player to unrated battles.": "Tu ne peux ajouter un autre Joueur que dans les combats non classés.",
	"Player must be set to \"p1\" or \"p2\", not \"{TARGET}\".": "Un Joueur doit être désigné comme \"p1\" ou \"p2\", pas \"{TARGET}\".",
	"This room already has a player in slot {TARGET}.": "Ce combat a déjà un joueur en tant que {TARGET}.",
	"{TARGETUSER} is already a player in this battle.": "{TARGETUSER} est déjà un joueur dans ce match.",
	"Player 2": "Joueur 2",
	"Players could not be restored (maybe this battle already has two players?).": "Les Joueurs n'ont pas pu être remis en place (peut-être que ce combat a déjà deux joueurs ?).",
	"This game doesn't support /joingame": "Ce jeu n'accepte pas /joingame",
	"This game doesn't support /leavegame": "Ce jeu n'accepte pas /leavegame",
	"You can only do this in unrated non-tour battles.": "Tu peux seulement faire ça dans les combats non-classés hors tournois;",
	"{TARGETUSER} was kicked from a battle by {USER} {REASON}": "{TARGETUSER} a été exclu d'un combat par {USER} {REASON}",
	"You can only set the timer from inside a battle room.": "Tu ne peux paramétrer le timer que dans un combat.",
	"This game's timer is managed by a different command.": "Le timer du jeu est géré par une commande différente.",
	"The game timer is OFF.": "Le timer du jeu est OFF.",
	"The game timer is ON (requested by {USER})": "Le timer du jeu est ON (demandé par {USER})",
	"Access denied.": "Accès refusé.",
	"Timer was turned off by staff. Please do not turn it back on until our staff say it's okay.": "Le timer a été désactivé par le staff. Merci de ne pas le réactiver jusqu'à ce que notre staff dise que c'est bon.",
	"The timer is already off.": "Le timer est déjà désactivé.",
	"\"{TARGET}\" is not a recognized timer state.": "\"{TARGET}\" n'est pas un état possible pour le timer.",
	"Forcetimer is now OFF: The timer is now opt-in. (set by {USER})": "Le timer automatique est maintenant désactivé. Le timer est maintenant activable au cas par cas.",
	"Forcetimer is now ON: All battles will be timed. (set by {USER})": "Le timer automatique est maintenant activé. Il démarrera automatiquement au début de tous les combats (activé par {USER}).",
	"'{TARGET}' is not a recognized forcetimer setting.": "{TARGET}' n'est pas un paramètre reconnu pour le timer automatique.",
	"This server requires you to be rank {GROUP} or higher to search for a battle.": "Le serveur demande un rang de {GROUP} ou plus haut pour chercher un match.",
	"Since you have reached {ELO} ELO in {TARGET}, you must register your account to continue playing that format on ladder.": "Maintenant que tu as atteint un ELO de {ELO} en {TARGET}, tu dois enregistrer ton compte pour continuer de jouer ce format en classé.",
	"Register": "Enregistrer son compte",
	"The user '{TARGETUSER}' was not found.": "L'utilisateur '{TARGETUSER}' n'a pas été trouvé.",
	"You are locked and cannot challenge unlocked users. If this user is your friend, ask them to challenge you instead.": "Tu es locked et ne peux pas envoyer de challenge aux utilisateurs qui ne le sont pas.",
	"You are banned from battling and cannot challenge users.": "Tu es banni des combats et ne peux pas envoyer de challenge aux autres utilisateurs",
	"You must choose a username before you challenge someone.": "Tu dois choisir un pseudo avant d'envoyer des challenges aux autres utilisateurs",
	"This server requires you to be rank {GROUP} or higher to challenge users.": "Ce serveur demande d'être au moins {GROUP} ou plus pour envoyer des challenges aux autres utilisateurs.",
	"This command does not support specifying multiple users": "Cette commande ne permet pas de spécifier plusieurs utilisateurs.",
	"Provide a valid format.": "Précise un format valide.",
	"Please provide a valid format.": "Précise un format valide s'il te plaît.",
	"The format '{FORMAT}' was not found.": "Le format '{FORMAT}' n'a pas été trouvé.",
	"Your team is valid for {FORMAT}.": "Ton équipe est valide pour du {FORMAT}",
	"Your team was rejected for the following reasons:": "Ton équipe a été rejetée pour les raisons suivantes :",
	"Battles are now hidden (except to staff) in your trainer card.": "Les combats sont maintenant invisibles (excepté au staff) dans ta carte de Dresseur.",
	"Battles are now visible in your trainer card.": "Les combats sont maintenant visibles dans ta carte de Dresseur.",
	"'{COMMAND}' is a help command.": "{COMMAND}' est une commande d'aide.",
	"The command '/{TARGET}' does not exist.": "La commande '/{TARGET}' n'existe pas.",
	"Could not find help for '/{TARGET}'. Try /help for general help.": "Aucune aide trouvée pour '/{TARGET}'. Essaie /help pour une aide plus générale.",
	"Could not find help for '/{TARGET}' - displaying help for '/{CLOSEST}' instead": "Impossible de trouver de l'aide pour '/{TARGET}' - voici celle pour '/{CLOSEST}' à la place",
	"Server version: <b>{VERSION}": null, // NEEDS TRANSLATION
	"User {TARGETUSER} is offline. Send the message again to confirm. If you are using /msg, use /offlinemsg instead.": null, // NEEDS TRANSLATION
	"You are already blocking {PREFIX}private messages! To unblock, use /unblockpms": null, // NEEDS TRANSLATION
	"You are now blocking {PREFIX}private messages, except from staff and {TARGET}.": null, // NEEDS TRANSLATION
	"You are now blocking {PREFIX}private messages, except from staff, friends, and {TARGET} users.": null, // NEEDS TRANSLATION
	"You are now blocking {PREFIX}private messages, except from staff and friends.": null, // NEEDS TRANSLATION
	"You are now blocking {PREFIX}private messages, except from staff.": null, // NEEDS TRANSLATION
	"You are not blocking {PREFIX}private messages! To block, use /blockpms": null, // NEEDS TRANSLATION
	"You are no longer blocking {PREFIX}private messages.": null, // NEEDS TRANSLATION
	"You are now blocking room invites, except from staff and {TARGET}.": null, // NEEDS TRANSLATION
	"You are now blocking room invites, except from staff and {TARGET} users.": null, // NEEDS TRANSLATION
	"You are now blocking room invites, except from staff.": null, // NEEDS TRANSLATION
	"Format": null, // NEEDS TRANSLATION
	"You are not a player and don't have a team.": null, // NEEDS TRANSLATION
	"You don't have a Pokémon matching \"{TARGET}\" in your team.": null, // NEEDS TRANSLATION
	"You don't have a Pokémon #{NUMBER} on your team - your team only has {COUNT} Pokémon.": null, // NEEDS TRANSLATION
	"Must be a player to agree to open team sheets.": null, // NEEDS TRANSLATION
	"This format does not allow requesting open team sheets. You can both manually agree to it by using !showteam hidestats.": null, // NEEDS TRANSLATION
	"You cannot agree to open team sheets after Team Preview. Each player can still show their own sheet by using this command: !showteam hidestats": null, // NEEDS TRANSLATION
	"An opponent has already rejected open team sheets.": null, // NEEDS TRANSLATION
	"You have already made your decision about agreeing to open team sheets.": null, // NEEDS TRANSLATION
	"{USER} has agreed to open team sheets.": null, // NEEDS TRANSLATION
	"Must be a player to reject open team sheets.": null, // NEEDS TRANSLATION
	"This format does not allow requesting open team sheets.": null, // NEEDS TRANSLATION
	"You cannot reject open team sheets after Team Preview.": null, // NEEDS TRANSLATION
	"{USER} rejected open team sheets.": null, // NEEDS TRANSLATION
	"The user '{USER}' is not accepting challenges right now.": null, // NEEDS TRANSLATION
	"'/{TARGET}' is a help command.": null, // NEEDS TRANSLATION
	"{USER} wants to extract the battle input log.": null, // NEEDS TRANSLATION
	"{TARGETUSER} was kicked from a battle by {USER}.{REASON}": null, // NEEDS TRANSLATION
	"unlocked": null, // NEEDS TRANSLATION
	"friended": null, // NEEDS TRANSLATION
	"The player in slot {SLOT} has already been eliminated.": null, // NEEDS TRANSLATION
	"Section Leader": null, // NEEDS TRANSLATION
	"/version - Get the current server version.": null, // NEEDS TRANSLATION
	"There is {count} user in this room:": null, // NEEDS TRANSLATION
	"There are {count} users in this room:": null, // NEEDS TRANSLATION
	"/userlist - Displays a list of users who are currently in the room.": null, // NEEDS TRANSLATION
	"/me [action] - Adds the given [action] into chat, attributed to the user.": null, // NEEDS TRANSLATION
	"/shrug [message] - Sends the given message, if any, appended with ¯\\_(ツ)_/¯": null, // NEEDS TRANSLATION
	"/tableflip [message] - Sends the given message, if any, appended with (╯°□°）╯︵ ┻━┻": null, // NEEDS TRANSLATION
	"/tableunflip [message] - Sends the given message, if any, appended with ┬──┬◡ﾉ(° -°ﾉ)": null, // NEEDS TRANSLATION
	"/battle! [format] - Starts a battle in the given [format].": null, // NEEDS TRANSLATION
	"If none is given, defaults to current generation random battle.": null, // NEEDS TRANSLATION
	"/logout - Logs you out and ends your session.": null, // NEEDS TRANSLATION
	"/noreply [command] - Runs the command without displaying the response.": null, // NEEDS TRANSLATION
	"You must be registered in order to use this command. If you just registered, please refresh and try again.": null, // NEEDS TRANSLATION
	"Linking...": null, // NEEDS TRANSLATION
	"malformed name received": null, // NEEDS TRANSLATION
	"Error while verifying username: {error}": null, // NEEDS TRANSLATION
	"If the page failed to open, you may link your Smogon and PS accounts by clicking <a href=\"{link}\">this link</a>.": null, // NEEDS TRANSLATION
	"Room not found.": null, // NEEDS TRANSLATION
	"Please do not nest /msgroom inside itself.": null, // NEEDS TRANSLATION
	"/msgroom [room], [command] - Runs the [command] in the given [room].": null, // NEEDS TRANSLATION
	"/reply OR /r [message] - Send a message to the last user you got a message from, or sent a message to.": null, // NEEDS TRANSLATION
	"{targetUsername} is offline.": null, // NEEDS TRANSLATION
	"/msg OR /whisper OR /w [username], [message] - Send a private message.": null, // NEEDS TRANSLATION
	"Commands sent to offline users run immediately, with replies displayed in that user's PM window.": null, // NEEDS TRANSLATION
	"Offline private messages have been disabled.": null, // NEEDS TRANSLATION
	"You cannot send offline PMs to yourself.": null, // NEEDS TRANSLATION
	"You cannot send offline PMs to guests.": null, // NEEDS TRANSLATION
	"That user is online, so a normal PM is being sent.": null, // NEEDS TRANSLATION
	"Invalid userid. Must be <=18 characters in length.": null, // NEEDS TRANSLATION
	"/offlinemsg [username], [message] - Sends a message to the offline [username], to be received when they log in.": null, // NEEDS TRANSLATION
	"/offlinepms - View your recently received offline PMs.": null, // NEEDS TRANSLATION
	"You do not have permission to mass-invite users.": null, // NEEDS TRANSLATION
	"You cannot invite more than 10 users at once.": null, // NEEDS TRANSLATION
	"This user is currently blocking room invites.": null, // NEEDS TRANSLATION
	"/invite [username] - Invites the player [username] to join the room you sent the command to.": null, // NEEDS TRANSLATION
	"/invite [comma-separated usernames] - Invites multiple users to join the room you sent the command to. Requires trusted": null, // NEEDS TRANSLATION
	"/invite [username], [roomname] - Invites the player [username] to join the room [roomname].": null, // NEEDS TRANSLATION
	"(in a PM) /invite [roomname] - Invites the player you're PMing to join the room [roomname].": null, // NEEDS TRANSLATION
	"/blockpms - Blocks private messages except from staff. Unblock them with /unblockpms.": null, // NEEDS TRANSLATION
	"/blockpms [unlocked, ac, trusted, friends, +] - Blocks PMs, except for staff, friends, and the specified group(s).": null, // NEEDS TRANSLATION
	"/unblockpms - Unblocks private messages. Block them with /blockpms.": null, // NEEDS TRANSLATION
	"/unblockofflinepms - Unblocks offline private messages. Block them with /blockofflinepms.": null, // NEEDS TRANSLATION
	"You are not blocking room invites! To block, use /blockinvites.": null, // NEEDS TRANSLATION
	"You are no longer blocking room invites.": null, // NEEDS TRANSLATION
	"You are already blocking room invites - to unblock, use /unblockinvites": null, // NEEDS TRANSLATION
	"/blockinvites [rank] - Allows only users with the given [rank] to invite you to rooms.": null, // NEEDS TRANSLATION
	"Valid settings: autoconfirmed, trusted, unlocked, +, %, @, ~.": null, // NEEDS TRANSLATION
	"/unblockinvites - Allows anyone to invite you to rooms.": null, // NEEDS TRANSLATION
	"/status [note] - Sets a short note as your status, visible when users click your username.": null, // NEEDS TRANSLATION
	"Use /clearstatus to clear your status message.": null, // NEEDS TRANSLATION
	"/busy OR /donotdisturb - Marks you as busy.": null, // NEEDS TRANSLATION
	"Use /donotdisturb to also block private messages and challenges.": null, // NEEDS TRANSLATION
	"Use /back to mark yourself as back.": null, // NEEDS TRANSLATION
	"/away - Marks you as away. Send a message or use /back to indicate you are back.": null, // NEEDS TRANSLATION
	"/clearstatus - Clears your status message.": null, // NEEDS TRANSLATION
	"/clearstatus user, reason - Clears another person's status message. Requires: % @ ~": null, // NEEDS TRANSLATION
	"/back - Marks you as back if you are away.": null, // NEEDS TRANSLATION
	"User:": null, // NEEDS TRANSLATION
	"/rank [user] - Shows all ladder ranks for the given [user].": null, // NEEDS TRANSLATION
	"If no user is given, it defaults to the user of the command.": null, // NEEDS TRANSLATION
	"/hiderank - Access denied.": null, // NEEDS TRANSLATION
	"/hiderank [rank] - Displays your global rank as the given [rank].": null, // NEEDS TRANSLATION
	"/showrank - Displays your true global rank instead of the rank you're hidden as.": null, // NEEDS TRANSLATION
	"/language - View your current language setting.": null, // NEEDS TRANSLATION
	"/language [language] - Changes the language Pokémon Showdown will be displayed to you in.": null, // NEEDS TRANSLATION
	"/updatesettings [settings] - Update your settings to match the given JSON settings blob.": null, // NEEDS TRANSLATION
	"/allowexportinputlog [user] - Consents to sharing teams and choices from the current battle with the specified user.": null, // NEEDS TRANSLATION
	"Share your team and choices with \"{name}\"": null, // NEEDS TRANSLATION
	"/exportinputlog - Asks players in a battle for permission to export an inputlog. Requires: + % @ ~": null, // NEEDS TRANSLATION
	"This is an imported replay": null, // NEEDS TRANSLATION
	"Players will need to be manually added with <code>/invitebattle</code> or <code>/restoreplayers</code>": null, // NEEDS TRANSLATION
	"/importinputlog [inputlog] - Starts a battle with a given inputlog. Requires: + % @ ~": null, // NEEDS TRANSLATION
	"!showteam - show the team you're using in the current battle (must be used in a battle you're a player in).": null, // NEEDS TRANSLATION
	"!showteam hidestats - show the team you're using in the current battle, without displaying any stat-related information.": null, // NEEDS TRANSLATION
	"!showset [number] - shows the set of the pokemon corresponding to that number (in original Team Preview order, not necessarily current order)": null, // NEEDS TRANSLATION
	"/acceptopenteamsheets - Agrees to an open team sheet opportunity during Team Preview, where all information on a team except stats is shared with the opponent. Requires: ☆": null, // NEEDS TRANSLATION
	"/rejectopenteamsheetshelp - Rejects an open team sheet opportunity during Team Preview, where all information on a team except stats is shared with the opponent. Requires: ☆": null, // NEEDS TRANSLATION
	"/offertie - Offers a tie to all players in a battle; if all accept, it ties. Can only be used after 100+ turns have passed. Requires: ☆ @ # ~": null, // NEEDS TRANSLATION
	"/rejecttie - Rejects a tie offered by another player in a battle.": null, // NEEDS TRANSLATION
	"/forfeit - Forfeits your currently active game, if it supports that.": null, // NEEDS TRANSLATION
	"/choose [text] - Make a choice for the currently active game.": null, // NEEDS TRANSLATION
	"/move [move] - Make a move for the current game.": null, // NEEDS TRANSLATION
	"/switch [pokemon] - Make a switch for the current game.": null, // NEEDS TRANSLATION
	"/team [pokemon] - Change your team for the current game.": null, // NEEDS TRANSLATION
	"/undo - Reverts the last move of the player in the current game, if it supports it.": null, // NEEDS TRANSLATION
	"/savereplay - Saves the replay for the current battle.": null, // NEEDS TRANSLATION
	"Must be used in a battle.": null, // NEEDS TRANSLATION
	"/hidereplay - Hides the replay of the current battle. Requires: ☆ ~": null, // NEEDS TRANSLATION
	"This battle does not support having players in {slot}": null, // NEEDS TRANSLATION
	"Someone else ({player.invite}) has already been invited to be {slot}!": null, // NEEDS TRANSLATION
	"You're invited to join a battle (with {playerNames})": null, // NEEDS TRANSLATION
	"Invite sent to {targetUser.name}!": null, // NEEDS TRANSLATION
	"/addplayer [username], [p1|p2|p3|p4] - Invites the player to join your current battle.": null, // NEEDS TRANSLATION
	"Room {chall.roomid} not found": null, // NEEDS TRANSLATION
	"You haven't been invited to that battle.": null, // NEEDS TRANSLATION
	"You accepted the battle invite": null, // NEEDS TRANSLATION
	"/acceptbattle - Accept an invite from someone to join a battle.": null, // NEEDS TRANSLATION
	"User {target} is not currently invited to the battle": null, // NEEDS TRANSLATION
	"The battle invite was changed to someone else; sorry!": null, // NEEDS TRANSLATION
	"/uninvitebattle [username] - Revokes an invite from a user to join a battle.": null, // NEEDS TRANSLATION
	"Requires: ☆ ~": null, // NEEDS TRANSLATION
	"/restoreplayers - Restore previous players in an imported input log.": null, // NEEDS TRANSLATION
	"/joingame [username] - Join the game being played in the current room.": null, // NEEDS TRANSLATION
	"/leavegame - Leave the current game.": null, // NEEDS TRANSLATION
	"/kickbattle - User isn't in battle.": null, // NEEDS TRANSLATION
	"/kickbattle [username], [reason] - Kicks a user from a battle with reason. Requires: % @ ~": null, // NEEDS TRANSLATION
	"/kickinactive - Activates the inactive timer, if the game supports it.": null, // NEEDS TRANSLATION
	"/timer [start|stop] - Starts or stops the game timer. Requires: ☆ % @ ~": null, // NEEDS TRANSLATION
	"/forcetimer [start|stop] - Forces all battles to have the inactive timer enabled. Requires: ~": null, // NEEDS TRANSLATION
	"/forcewin - This is not a battle room.": null, // NEEDS TRANSLATION
	"/forcetie - Forces the current match to end in a tie. Requires: ~": null, // NEEDS TRANSLATION
	"/forcewin [user] - Forces the current match to end in a win for a user. Requires: ~": null, // NEEDS TRANSLATION
	"/search [format] - Searches for a battle in the specified format.": null, // NEEDS TRANSLATION
	"/cancelsearch [format] - Cancels a search for a battle in the specified format.": null, // NEEDS TRANSLATION
	"If no format is given, cancels searches for all formats.": null, // NEEDS TRANSLATION
	"/challenge [user], [format] - Challenges the given [user] to a battle in the given [format].": null, // NEEDS TRANSLATION
	"/blockchallenges - Blocks challenges so no one can challenge you. Unblock them with /unblockchallenges.": null, // NEEDS TRANSLATION
	"/unblockchallenges - Unblocks challenges so you can be challenged again. Block them with /blockchallenges.": null, // NEEDS TRANSLATION
	"You are not challenging {this.pmTarget.name}. Maybe they accepted/rejected before you cancelled?": null, // NEEDS TRANSLATION
	"{user.name} cancelled the challenge.": null, // NEEDS TRANSLATION
	"/cancelchallenge [user] - Cancels a pending challenge to the given [user].": null, // NEEDS TRANSLATION
	"{this.pmTarget.id} is not challenging you. Maybe they cancelled before you accepted?": null, // NEEDS TRANSLATION
	"{accepterName} accepted the challenge, starting {gameLink}": null, // NEEDS TRANSLATION
	"/accept [user] - Accepts a challenge from the given user.": null, // NEEDS TRANSLATION
	"{this.pmTarget.id} is not challenging you. Maybe they cancelled before you rejected?": null, // NEEDS TRANSLATION
	"{user.name} rejected the challenge.": null, // NEEDS TRANSLATION
	"/reject [user] - Rejects a challenge from the given user.": null, // NEEDS TRANSLATION
	"/useteam [packed team] - Sets your team for your next battles to the given [team].": null, // NEEDS TRANSLATION
	"/vtm [format] - Validates your current team (set with /utm).": null, // NEEDS TRANSLATION
	"/hidebattlesfromtrainercard OR /hbtc - Hides your battles in your trainer card.": null, // NEEDS TRANSLATION
	"/showbattlesintrainercard OR /sbtc - Displays your battles in your trainer card.": null, // NEEDS TRANSLATION
	"/trn [username], [registered], [token] - Finishes a rename to the [username] with a given [token].": null, // NEEDS TRANSLATION
	"/help [command] - Gives you help for a specific command.": null, // NEEDS TRANSLATION
	"[Received PMs]": null, // NEEDS TRANSLATION
	"Offline PMs are presently disabled.": null, // NEEDS TRANSLATION

};
