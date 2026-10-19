import type { TranslationCatalog } from '../../server/chat';

export const translations: TranslationCatalog = {
	"Server version: <b>{VERSION}</b>": "Versione del server: <b>{VERSION}</b>",
	"/mee - must not start with a letter or number": "/mee - non deve iniziare con una lettera o un numero",
	"What?! How are you not more excited to battle?! Try /battle! to show me you're ready.": "Cosa?! Non sei più emozionato di lottare? Usa /battle! e dimostrami che sei pronto.",
	"Access denied for custom avatar - make sure you're on the right account?": "Accesso negato per il custom avatar - sei sicuro di essere sul giusto account?",
	"Invalid avatar.": "Avatar non valido.",
	"Avatar changed to:": "Avatar cambiato in:",
	"Artist: ": "Artista: ",
	"No one has PMed you yet.": "Nessuno ti ha mandato un PM per ora.",
	"You forgot the comma.": "Hai dimenticato la virgola.",
	"User {TARGETUSER} not found. Did you misspell their name?": "Utente {TARGETUSER} non trovato. Forse hai scritto male il nome?",
	"User {TARGETUSER} is offline.": "L'utente {TARGETUSER} è offline.",
	"The user \"{TARGETUSER}\" was not found.": "L'utente \"{TARGETUSER}\" non è stato trovato.",
	"The room \"{TARGET}\" was not found.": "La room \"{TARGET}\" non è stata trovata.",
	"You do not have permission to invite people into this room.": "Non hai i permessi per invitare utenti in questa room.",
	"This user is already in \"{ROOM}\".": "L'utente è già all'interno di \"{ROOM}\".",
	"Setting status messages in /busy is no longer supported. Set a status using /status.": "Non è possibile impostare uno status in modalità /busy. Imposta uno status usando /status.",
	"Setting status messages in /away is no longer supported. Set a status using /status.": "Non è possibile impostare uno status in modalità /away. Imposta uno status usando /status.",
	"{TARGETUSER} does not have a status set.": "{TARGETUSER} non ha uno status.",
	"{TARGETUSER}'s status \"{STATUS}\" was cleared by {USER}{REASON}": "Lo status \"{STATUS}\" di {TARGETUSER} è stato rimosso da {USER}{REASON}",
	"You don't have a status message set.": "Non hai nessuno status.",
	"You have cleared your status message.": "Hai rimosso il tuo status.",
	"This user has not played any ladder games yet.": "Questo utente non ha giocato nessuna partita in ladder per ora.",
	// TRANSLATORS: initial for Wins
	"W": "V",
	// TRANSLATORS: initial for Losses
	"L": "P",
	"You already have the temporary symbol '{GROUP}'.": "Possiedi già il simbolo temporaneo '{GROUP}'.",
	"You must specify a valid group symbol.": "Devi specificare un simbolo di gruppo valido.",
	"You may only set a temporary symbol below your current rank.": "Puoi impostare un simbolo temporaneo solo sotto al tuo attuale rank.",
	"Your temporary group symbol is now": "Il tuo attuale simbolo temporaneo è",
	"Currently, you're viewing Pokémon Showdown in {LANGUAGE}.": "In questo momento, la lingua impostata su Pokémon Showdown è {LANGUAGE}.",
	"Valid languages are: {LANGUAGES}": "Le lingue disponibili sono: {LANGUAGES}",
	"Pokémon Showdown will now be displayed in {LANGUAGE} (except in language rooms).": "Pokémon Showdown verrà ora mostrato in {LANGUAGE} (tranne che nelle room linguistiche).",
	"Note that rooms can set their own language, which will override this setting.": "Ricorda che le room possono impostare la propria lingua, il che sovrascriverà queste impostazioni.",
	"/updatesettings expects JSON encoded object.": "/updatesettings richiede un oggetto codificato JSON.",
	"Unable to parse settings in /updatesettings!": "Impossibile analizzare le impostazioni in /updatesettings!",
	"Must be in a battle.": "Deve essere in una lotta.",
	"User {USER} not found.": "Utente {USER} non trovato.",
	"Must be a player in this battle.": "Deve essere un giocatore in questa lotta.",
	"{TARGETUSER} has not requested extraction.": "{TARGETUSER} non ha richiesto l'estrazione.",
	"You have already consented to extraction with {TARGETUSER}.": "Hai già consentito di estrarre con {TARGETUSER}.",
	"{USER} consents to sharing battle team and choices with {TARGETUSER}.": "{USER} consente di condividere il team e le scelte della lotta con {TARGETUSER}.",
	"No input log found.": "Nessun log input trovato.",
	"This command only works in battle rooms.": "Questo comando funziona solo nelle room di lotta.",
	"This command only works when the battle has ended - if the battle has stalled, use /offertie.": "Questo comando funziona solo quando la lotta è finita - se la lotta è in stallo, usa /offertie.",
	"Alternatively, you can end the battle with /forcetie.": "In alternativa, puoi terminare la lotta con /forcetie.",
	"{USER} has extracted the battle input log.": "{USER} ha estratto i log della lotta.",
	"You already extracted the battle input log.": "Hai già estratto i log della lotta.",
	"Battle input log re-requested.": "Log input della lotta richiesti nuovamente.",
	"Invalid input log.": "Log input non valido.",
	"Your input log contains untrusted code - you must have console access to use it.": "Il tuo log input contiene un codice non sicuro - devi avere accesso alla console per usarlo.",
	"This command can only be used in a battle.": "Questo comando può essere usato solo in lotta.",
	"Only players can extract their team.": "Solo i giocatori possono estrarre il proprio team.",
	"Use a number between 1-6 to view a specific set.": "Utilizza un numero fra 1 e 6 per visualizzare un set specifico.",
	"The Pokemon \"{TARGET}\" is not in your team.": "Il Pokémon \"{TARGET}\" non è nel tuo team.",
	"That Pokemon is not in your team.": "Quel Pokémon non è nel tuo team.",
	"View team": "Visualizza team.",
	"Must be in a battle room.": "Deve essere in una room di lotta.",
	"User {USER} must be in the battle room already.": null, // NEEDS TRANSLATION
	"This server does not allow offering ties.": "In questo server non è possibile proporre un pareggio.",
	"You can't offer ties in tournaments.": "Non puoi proporre un pareggio durante i tornei.",
	"It's too early to tie, please play until turn 100.": "È troppo presto per proporre un pareggio, per favore continua a giocare fino al turno 100.",
	"No other player is requesting a tie right now. It was probably canceled.": "Nessun altro giocatore sta proponendo un pareggio al momento. È stato probabilmente cancellato.",
	"{USER} is offering a tie.": "{USER} sta proponendo un pareggio.",
	"Accept tie": "Accetta il pareggio.",
	"Reject": "Rifiuta.",
	"Must be a player to accept ties.": "Devi essere un giocatore per accettare un pareggio.",
	"You have already agreed to a tie.": "Hai già accettato di voler pareggiare.",
	"{USER} accepted the tie.": "{USER} ha accettato il pareggio.",
	"All players have accepted the tie.": "Tutti i giocatori hanno accettato il pareggio.",
	"Must be a player to reject ties.": "Devi essere un giocatore per rifiutare un pareggio.",
	"{USER} rejected the tie.": "{USER} ha rifiutato il pareggio.",
	"This room doesn't have an active game.": "In questa room non è attivo alcun minigioco.",
	"This kind of game can't be forfeited.": "Non puoi abbandonare questo tipo di minigioco.",
	"This game doesn't support /choose": "Questo minigioco non supporta /choose.",
	"This game doesn't support /undo": "Questo minigioco non supporta /undo",
	"You can only save replays for battles.": "Puoi solamente salvare i replay delle lotte.",
	"This battle can't have hidden replays, because the tournament is set to be forced public.": "Questa lotta non può avere replay nascosti perché il torneo è stato impostato come pubblico.",
	"The replay for this battle is already set to hidden.": "Il replay di questa lotta è stato impostato come nascosto.",
	"{USER} hid the replay of this battle.": "{USER} ha nascosto il replay di questa lotta.",
	"You can only do this in battle rooms.": "Puoi farlo solamente nelle room di lotta.",
	"You can only add a Player to unrated battles.": "Puoi aggiungere un giocatore solamente nelle lotte senza punteggio.",
	"Player must be set to \"p1\" or \"p2\", not \"{TARGET}\".": "I giocatori devono essere impostati come \"p1\" o \"p2\", non \"{TARGET}\".",
	"This room already has a player in slot {TARGET}.": "Questa room ha già un giocatore nello slot {TARGET}.",
	"{TARGETUSER} is already a player in this battle.": "L'utente {TARGETUSER} è già un giocatore in questa lotta.",
	"Player 2": "Giocatore 2",
	"Players could not be restored (maybe this battle already has two players?).": "Non è stato possibile ripristinare i giocatori (forse questa lotta ha già due giocatori?).",
	"This game doesn't support /joingame": "Questo minigioco non supporta /joingame.",
	"This game doesn't support /leavegame": "Questo minigioco non supporta /leavegame.",
	"You can only do this in unrated non-tour battles.": "Puoi farlo solamente in lotte senza punteggio al di fuori dei tornei.",
	"{TARGETUSER} was kicked from a battle by {USER} {REASON}": "{TARGETUSER} è stato cacciato via dalla lotta da {USER} {REASON}",
	"You can only set the timer from inside a battle room.": " Puoi impostare il timer solamente all’interno di una room di lotta.",
	"This game's timer is managed by a different command.": " Il timer di questo minigioco deve essere impostato da un comando diverso.",
	"The game timer is OFF.": "Il timer è OFF.",
	"The game timer is ON (requested by {USER})": "Il timer è ON (richiesto da {USER})",
	"Access denied.": "Accesso negato.",
	"Timer was turned off by staff. Please do not turn it back on until our staff say it's okay.": "Il timer è stato disattivato dallo staff. Per favore, non riattivarlo fino a quando il nostro staff non è d’accordo.",
	"The timer is already off.": "Il timer è già disattivato.",
	"\"{TARGET}\" is not a recognized timer state.": "\"{TARGET}\" non è un'unità di tempo riconosciuta.",
	"Forcetimer is now OFF: The timer is now opt-in. (set by {USER})": "Il forcetimer è ora OFF: È possibile scegliere se attivarlo o meno. (impostato da {USER})",
	"Forcetimer is now ON: All battles will be timed. (set by {USER})": "Il forcetimer è ora ON: tutte le lotto saranno a tempo. (impostato da {USER})",
	"'{TARGET}' is not a recognized forcetimer setting.": "'{TARGET}' non è un’impostazione di forcetimer riconosciuta.",
	"This server requires you to be rank {GROUP} or higher to search for a battle.": "In questo server è necessario possedere il rank {GROUP} o superiore per cercare una lotta.",
	"Since you have reached {ELO} ELO in {TARGET}, you must register your account to continue playing that format on ladder.": "Poiché hai già raggiunto {ELO} ELO in {TARGET}, devi registrare il tuo account per continuare a giocare questo formato in ladder.",
	"Register": "Registrazione",
	"The user '{TARGETUSER}' was not found.": "Utente '{TARGETUSER}' non trovato.",
	"You are locked and cannot challenge unlocked users. If this user is your friend, ask them to challenge you instead.": "Sei lockato e non puoi sfidare utenti non lockati. Se questo utente è tuo amico, chiedigli di sfidarti.",
	"You are banned from battling and cannot challenge users.": "Sei stato bannato dal lottare e non puoi sfidare gli altri utenti.",
	"You must choose a username before you challenge someone.": "Devi scegliere un nome utente prima di sfidare qualcuno.",
	"This server requires you to be rank {GROUP} or higher to challenge users.": "In questo server è necessario possedere il rank {GROUP} o superiore per sfidare gli utenti.",
	"This command does not support specifying multiple users": "Questo comando non supporta un elenco di più utenti.",
	"Provide a valid format.": "Specifica un format valido.",
	"Please provide a valid format.": "Per favore, specifica un format valido.",
	"The format '{FORMAT}' was not found.": "Il format '{FORMAT}' non è stato trovato.",
	"Your team is valid for {FORMAT}.": "Il tuo team è valido per il format {FORMAT}.",
	"Your team was rejected for the following reasons:": "Il tuo team non è stato accettato per le seguenti ragioni:",
	"Battles are now hidden (except to staff) in your trainer card.": "Le lotte sono ora nascoste (tranne che per lo staff) sulla tua scheda allenatore.",
	"Battles are now visible in your trainer card.": "Le lotte sono ora visibili sulla tua scheda allenatore.",
	"'{COMMAND}' is a help command.": "'{COMMAND}' è un comando di aiuto.",
	"The command '/{TARGET}' does not exist.": "Il comando '/{TARGET}' non esiste.",
	"Could not find help for '/{TARGET}'. Try /help for general help.": "Non è possibile ottenere informazioni sul comando '/{TARGET}'; prova /help per informazioni generali.",
	"Could not find help for '/{TARGET}' - displaying help for '/{CLOSEST}' instead": "Non è possibile ottenere informazioni sul comando '/{TARGET}' - ecco invece le informazioni per il comando '/{CLOSEST}'.",
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
