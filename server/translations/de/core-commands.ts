import type { TranslationCatalog } from '../../server/chat';

export const translations: TranslationCatalog = {
	"Server version: <b>{VERSION}</b>": "Server-Version: <b>{VERSION}</b>",
	"/mee - must not start with a letter or number": "/mee - darf nicht mit einem Buchstaben oder einer Zahl anfangen",
	"What?! How are you not more excited to battle?! Try /battle! to show me you're ready.": "Wie bitte?! Wie kannst du dich nicht über einen Kampf freuen?! Sobald du bereit bist, benutze den Befehl /battle!",
	"Access denied for custom avatar - make sure you're on the right account?": "Zugriff auf einen Custom Avatar verweigert - bitte stelle sicher, dass du den richtigen Account verwendest.",
	"Invalid avatar.": "Ungültiger Avatar.",
	"Avatar changed to:": "Avatar geändert zu:",
	"Artist: ": "Ersteller: ",
	"No one has PMed you yet.": "Niemand hat dir bisher eine private Nachricht geschrieben.",
	"You forgot the comma.": "Du hast das Komma vergessen.",
	"User {TARGETUSER} not found. Did you misspell their name?": "Der Nutzer {TARGETUSER} wurde nicht gefunden. Hast du den Namen falsch geschrieben?",
	"User {TARGETUSER} is offline.": "Der Nutzer {TARGETUSER} ist offline.",
	"The user \"{TARGETUSER}\" was not found.": "Der Nutzer \"{TARGETUSER}\" wurde nicht gefunden.",
	"The room \"{TARGET}\" was not found.": "Der Raum \"{TARGET}\" wurde nicht gefunden.",
	"You do not have permission to invite people into this room.": "Du hast keine Berechtigung, Nutzer in diesen Raum einzuladen.",
	"This user is already in \"{ROOM}\".": "Dieser Nutzer ist bereits in \"{ROOM}\".",
	"Setting status messages in /busy is no longer supported. Set a status using /status.": "Es ist nicht mehr möglich, eine Statusmeldung mit /busy einzustellen. Stelle eine Statusmeldung mit /status ein.",
	"Setting status messages in /away is no longer supported. Set a status using /status.": "Es ist nicht mehr möglich, eine Statusmeldung mit /away einzustellen. Stelle eine Statusmeldung mit /status ein.",
	"{TARGETUSER} does not have a status set.": "{TARGETUSER} hat keine Statusmeldung eingestellt.",
	"{TARGETUSER}'s status \"{STATUS}\" was cleared by {USER}{REASON}": "Die Statusmeldung \"{STATUS}\" von {TARGETUSER} wurde von {USER}{REASON} entfernt",
	"You don't have a status message set.": "Du hast keine Statusmeldung eingestellt.",
	"You have cleared your status message.": "Du hast deine Statusmeldung entfernt.",
	"This user has not played any ladder games yet.": "Dieser Nutzer hat noch keine Ladder-Kämpfe bestritten.",
	// TRANSLATORS: initial for Wins
	"W": "S",
	// TRANSLATORS: initial for Losses
	"L": "N",
	"You already have the temporary symbol '{GROUP}'.": "Du hast bereits das vorübergehende Symbol '{GROUP}'.",
	"You must specify a valid group symbol.": "Du musst ein gültiges Gruppensymbol angeben.",
	"You may only set a temporary symbol below your current rank.": "Du darfst nur ein vorübergehendes Symbol einstellen, welches unter deinem derzeitigen Rang ist.",
	"Your temporary group symbol is now": "Dein vorübergehendes Gruppensymbol ist jetzt",
	"Currently, you're viewing Pokémon Showdown in {LANGUAGE}.": "Derzeit wird Pokémon Showdown in {LANGUAGE} angezeigt.",
	"Valid languages are: {LANGUAGES}": "Gültige Sprachen sind: {LANGUAGES}",
	"Pokémon Showdown will now be displayed in {LANGUAGE} (except in language rooms).": "Pokémon Showdown wird jetzt in {LANGUAGE} angezeigt (außer in Sprachräumen).",
	"Note that rooms can set their own language, which will override this setting.": "Bitte beachte, dass Räume ihre eigene Sprache einstellen können, welche diese Einstellung überschreibt.",
	"/updatesettings expects JSON encoded object.": "/updatesettings verlangt ein Objekt, welches in JSON verschlüsselt ist.",
	"Unable to parse settings in /updatesettings!": "Es ist nicht möglich, die Einstellungen in /updatesettings zu analysieren!",
	"Must be in a battle.": "Muss in einem Kampf sein.",
	"User {USER} not found.": "Nutzer {USER} wurde nicht gefunden.",
	"Must be a player in this battle.": "Muss ein Spieler in diesem Kampf sein.",
	"{TARGETUSER} has not requested extraction.": "{TARGETUSER} hat keine Extraktion angefordert.",
	"You have already consented to extraction with {TARGETUSER}.": "Du hast bereits einer Extraktion mit {TARGETUSER} zugestimmt.",
	"{USER} consents to sharing battle team and choices with {TARGETUSER}.": "{USER} gibt das Einverständnis, das Kampf-Team und die Entscheidungen mit {TARGETUSER} zu teilen.",
	"No input log found.": "Kein Input-Protokoll wurde gefunden.",
	"This command only works in battle rooms.": "Dieser Befehl funktioniert nur in Kampfräumen.",
	"This command only works when the battle has ended - if the battle has stalled, use /offertie.": "Dieser Befehl funktioniert nur, sobald der Kampf beendet wurde - falls der Kampf hinausgezögert wird, benutze /offertie",
	"Alternatively, you can end the battle with /forcetie.": "Alternativ kannst du den Kampf mit /forcetie beenden.",
	"{USER} has extracted the battle input log.": "{USER} hat das Input-Protokoll des Kampfes extrahiert.",
	"You already extracted the battle input log.": "Du hast bereits das Input-Protokoll des Kampfes extrahiert.",
	"Battle input log re-requested.": "Input-Protokoll des Kampfes wurde nochmal angefordert.",
	"Invalid input log.": "Ungültiges Input-Protokoll.",
	"Your input log contains untrusted code - you must have console access to use it.": "Dein Input-Protokoll enthält einen nicht vertrauenswürdigen Code - du musst Zugriff auf die Konsole haben, um es zu benutzen.",
	"This command can only be used in a battle.": "Dieser Befehl kann nur in einem Kampf benutzt werden.",
	"Only players can extract their team.": "Nur Spieler können ihre Teams extrahieren.",
	"Use a number between 1-6 to view a specific set.": "Benutze eine Nummer zwischen 1-6, um ein bestimmtes Set einzusehen.",
	"The Pokemon \"{TARGET}\" is not in your team.": "Das Pokemon \"{TARGET}\" ist nicht in deinem Team.",
	"That Pokemon is not in your team.": "Dieses Pokemon ist nicht in deinem Team.",
	"View team": "Team einsehen",
	"Must be in a battle room.": "Muss in einem Kampfraum sein.",
	"User {USER} must be in the battle room already.": null, // NEEDS TRANSLATION
	"This server does not allow offering ties.": "Dieser Server unterstützt es nicht, Unentschieden anzubieten.",
	"You can't offer ties in tournaments.": "Du kannst keine Unentschieden in einem Turnier anbieten.",
	"It's too early to tie, please play until turn 100.": "Es ist noch zu früh, um ein Unentschieden anzubieten, bitte warte bis Zug 100.",
	"No other player is requesting a tie right now. It was probably canceled.": "Kein Spieler fordert gerade ein Unentschieden an. Wahrscheinlich wurde es abgebrochen.",
	"{USER} is offering a tie.": "{USER} bietet ein Unentschieden an.",
	"Accept tie": "Unentschieden akzeptieren",
	"Reject": "Ablehnen",
	"Must be a player to accept ties.": "Muss ein Spieler sein, um Unentschieden zu akzeptieren.",
	"You have already agreed to a tie.": "Du hast bereits einem Unentschieden zugestimmt.",
	"{USER} accepted the tie.": "{USER} hat das Unentschieden angenommen.",
	"All players have accepted the tie.": "Alle Spieler haben einem Unentschieden zugestimmt.",
	"Must be a player to reject ties.": "Muss ein Spieler sein, um Unentschieden abzulehnen.",
	"{USER} rejected the tie.": "{USER} hat das Unentschieden abgelehnt.",
	"This room doesn't have an active game.": " In diesem Raum findet kein aktiver Kampf statt.",
	"This kind of game can't be forfeited.": "In diesem Kampf kann man nicht aufgeben.",
	"This game doesn't support /choose": "Dieses Spiel unterstützt nicht /choose",
	"This game doesn't support /undo": "Dieses Spiel unterstützt nicht /undo",
	"You can only save replays for battles.": "Du kannst nur Replays für Kämpfe speichern.",
	"This battle can't have hidden replays, because the tournament is set to be forced public.": "Dieser Kampf unterstützt keine verborgenen Replays, da das Turnier so eingestellt wurde, dass alle Kämpfe öffentlich sind.",
	"The replay for this battle is already set to hidden.": "Das Replay dieses Kampfes wurde bereits verborgen.",
	"{USER} hid the replay of this battle.": "{USER} hat das Replay dieses Kampfes verborgen.",
	"You can only do this in battle rooms.": "Du kannst dies nur in Kampfräumen machen.",
	"You can only add a Player to unrated battles.": "Du kannst einen Spieler ausschließlich in Unrated-Kämpfen hinzufügen.",
	"Player must be set to \"p1\" or \"p2\", not \"{TARGET}\".": "Spieler müssen zu \"p1\" oder \"p2\" zugeordnet werden, nicht \"{TARGET}\".",
	"This room already has a player in slot {TARGET}.": "Dieser Raum besitzt bereits einen Spieler in Slot {TARGET}",
	"{TARGETUSER} is already a player in this battle.": "{TARGETUSER} ist bereits ein Spieler in diesem Kampf.",
	"Player 2": "Spieler 2",
	"Players could not be restored (maybe this battle already has two players?).": "Spieler konnten nicht wiederhergestellt werden (vielleicht hat dieser Kampf bereits zwei Spieler?).",
	"This game doesn't support /joingame": "Dieses Spiel unterstützt nicht /joingame",
	"This game doesn't support /leavegame": "Dieses Spiel unterstützt nicht /leavegame",
	"You can only do this in unrated non-tour battles.": "Du kannst dies nur in einem Unrated-Kampf machen, welcher nicht Teil eines Turniers ist.",
	"{TARGETUSER} was kicked from a battle by {USER} {REASON}": "{TARGETUSER} wurde aus dem Kampf von {USER} gekickt {REASON}",
	"You can only set the timer from inside a battle room.": "Du kannst den Timer nur innerhalb eines Kampfraumes einstellen.",
	"This game's timer is managed by a different command.": "Der Timer dieses Kampfes wird mit einem anderen Befehl gesteuert.",
	"The game timer is OFF.": "Der Timer des Kampfes ist ausgeschaltet.",
	"The game timer is ON (requested by {USER})": "Der Timer des Kampfes ist eingeschaltet (von {USER} angefordert)",
	"Access denied.": "Zugriff verweigert",
	"Timer was turned off by staff. Please do not turn it back on until our staff say it's okay.": "Der Timer wurde vom Staff ausgeschaltet. Bitte schalte diesen nicht wieder ein, außer der Staff wünscht es.",
	"The timer is already off.": "Der Timer ist bereits ausgeschaltet.",
	"\"{TARGET}\" is not a recognized timer state.": "\"{TARGET}\" ist kein erkannter Zeitwert.",
	"Forcetimer is now OFF: The timer is now opt-in. (set by {USER})": "Der Forcetimer ist jetzt ausgeschaltet: Der Timer kann nur noch mit entsprechender Einwilligung eingeschaltet werden. (eingestellt von {USER})",
	"Forcetimer is now ON: All battles will be timed. (set by {USER})": "Der Forcetimer ist jetzt eingeschaltet: Alle Kämpfe unterstehen einem Timer. (eingestellt von {USER})",
	"'{TARGET}' is not a recognized forcetimer setting.": "'{TARGET}' ist keine erkannte Einstellung bezüglich des Forcetimers.",
	"This server requires you to be rank {GROUP} or higher to search for a battle.": "Dieser Server erfordert es, Rang {GROUP} oder höher zu sein, um nach Kämpfen zu suchen.",
	"Since you have reached {ELO} ELO in {TARGET}, you must register your account to continue playing that format on ladder.": "Da du {ELO} ELO in {TARGET} erreicht hast, musst du deinen Account registrieren, um weiterhin dieses Format auf der Ladder spielen zu können.",
	"Register": "Registrieren",
	"The user '{TARGETUSER}' was not found.": "Der Nutzer '{TARGETUSER}' wurde nicht gefunden.",
	"You are locked and cannot challenge unlocked users. If this user is your friend, ask them to challenge you instead.": "Du bist gesperrt und kannst andere Nutzer nicht zu einem Kampf herausfordern.",
	"You are banned from battling and cannot challenge users.": "Du bist davon ausgeschlossen, Kämpfe zu bestreiten und kannst keine anderen Nutzer herausfordern.",
	"You must choose a username before you challenge someone.": "Du musst einen Nutzernamen haben, bevor du jemanden herausforderst.",
	"This server requires you to be rank {GROUP} or higher to challenge users.": "Dieser Server erfordert es, Rang {GROUP} oder höher zu sein, um Nutzer herauszufordern.",
	"This command does not support specifying multiple users": "Dieser Befehl unterstützt es nicht, mehrere Nutzer anzugeben.",
	"Provide a valid format.": "Gib ein gültiges Format an.",
	"Please provide a valid format.": "Bitte gib ein gültiges Format an.",
	"The format '{FORMAT}' was not found.": "Das Format '{FORMAT}' wurde nicht gefunden.",
	"Your team is valid for {FORMAT}.": "Dein Team ist gültig für {FORMAT}.",
	"Your team was rejected for the following reasons:": "Dein Team wurde aus folgenden Gründen abgelehnt:",
	"Battles are now hidden (except to staff) in your trainer card.": "Kämpfe werden jetzt in deiner Trainer-Karte verborgen (außer vom Staff).",
	"Battles are now visible in your trainer card.": "Kämpfe sind jetzt in deiner Trainer-Karte öffentlich.",
	"'{COMMAND}' is a help command.": "'{COMMAND}' ist ein informativer Befehl.",
	"The command '/{TARGET}' does not exist.": "Der Befehl '/{TARGET}' existiert nicht.",
	"Could not find help for '/{TARGET}'. Try /help for general help.": "Es konnten keine Hilfestellungen für '/{TARGET}' gefunden werden. Benutze /help um eine allgemeine Hilfestellung zu erhalten.",
	"Could not find help for '/{TARGET}' - displaying help for '/{CLOSEST}' instead": "Es konnten keine Hilfestellungen für '/{TARGET}' gefunden werden - stattdessen wird eine Hilfestellung für '/{CLOSEST}' angezeigt.",
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
