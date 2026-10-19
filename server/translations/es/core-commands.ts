import type { TranslationCatalog } from '../../server/chat';

export const translations: TranslationCatalog = {
	"Server version: <b>{VERSION}</b>": "Versión del servidor: <b>{VERSION}</b>",
	"/mee - must not start with a letter or number": "/mee - no debe empezar con una letra o un número",
	"What?! How are you not more excited to battle?! Try /battle! to show me you're ready.": "¡¿Qué?! ¡¿Cómo no estás más emocionado por combatir?! Prueba usando /battle para demostrarme que estás listo.",
	"Access denied for custom avatar - make sure you're on the right account?": "Acceso denegado a custom avatar - asegúrate de estar en la cuenta correcta",
	"Invalid avatar.": "Avatar inválido.",
	"Avatar changed to:": "Avatar cambiado a:",
	"Artist: ": "Artista:",
	"No one has PMed you yet.": "Nadie te ha enviado mensaje privado aún.",
	"You forgot the comma.": "Olvidaste una coma.",
	"User {TARGETUSER} not found. Did you misspell their name?": "Usuario {TARGETUSER} no encontrado. ¿Lo escribiste mal?",
	"User {TARGETUSER} is offline.": "El usuario {TARGETUSER} está desconectado.",
	"The user \"{TARGETUSER}\" was not found.": "El usuario \"{TARGETUSER}\" no fue encontrado.",
	"The room \"{TARGET}\" was not found.": "La sala \"{TARGET}\" no fue encontrada.",
	"You do not have permission to invite people into this room.": "Tú no tienes permiso para invitar gente a esta sala.",
	"This user is already in \"{ROOM}\".": "Este usuario ya está en la sala \"{ROOM}\".",
	"Setting status messages in /busy is no longer supported. Set a status using /status.": "Poner mensajes de estado en /busy ya no está disponible. Pon un estado utilizando /status.",
	"Setting status messages in /away is no longer supported. Set a status using /status.": "Poner mensajes de estado en /away ya no está disponible. Coloca un estado utilizando /status.",
	"{TARGETUSER} does not have a status set.": "{TARGETUSER} no tiene un mensaje de estado puesto.",
	"{TARGETUSER}'s status \"{STATUS}\" was cleared by {USER}{REASON}": "El mensaje de estado de {TARGETUSER} fue eliminado por {USER}{REASON}",
	"You don't have a status message set.": "Tú no tienes un mensaje de estado puesto.",
	"You have cleared your status message.": "Haz eliminado tu mensaje de estado.",
	"This user has not played any ladder games yet.": "Este usuario no ha jugado un juego en ladder aún.",
	// TRANSLATORS: initial for Wins
	"W": "V",
	// TRANSLATORS: initial for Losses
	"L": "D",
	"You already have the temporary symbol '{GROUP}'.": "Tú ya tienes el símbolo temporal '{GROUP}'",
	"You must specify a valid group symbol.": "Debes especificar un símbolo de grupo válido.",
	"You may only set a temporary symbol below your current rank.": "Solo puedes establecer un símbolo temporal menor que tu rango actual.",
	"Your temporary group symbol is now": "Tu símbolo temporal ahora es",
	"Currently, you're viewing Pokémon Showdown in {LANGUAGE}.": "Ahora mismo estás viendo Pokémon Showdown en {LANGUAGE}.",
	"Valid languages are: {LANGUAGES}": "Los idiomas válidos son: {LANGUAGES}.",
	"Pokémon Showdown will now be displayed in {LANGUAGE} (except in language rooms).": "Pokémon Showdown ahora será mostrado en {LANGUAGE} (excepto en las salas de idiomas).",
	"Note that rooms can set their own language, which will override this setting.": "Ten en cuenta que las salas pueden colocar su propio idioma, el cual se sobrepondrá a esta configuración.",
	"/updatesettings expects JSON encoded object.": "/updatesettings espera un objeto codificado JSON",
	"Unable to parse settings in /updatesettings!": "¡No fue posible analizar la configuración en /updatesettings!",
	"Must be in a battle.": "Debe estar en una batalla.",
	"User {USER} not found.": "Usuario {USER} no encontrado.",
	"Must be a player in this battle.": "Debe ser un jugador en esta batalla.",
	"{TARGETUSER} has not requested extraction.": "El usuario {TARGETUSER} no ha solicitado una extracción",
	"You have already consented to extraction with {TARGETUSER}.": "Tú ya has dado consentimiento para la extracción con {TARGETUSER}.",
	"{USER} consents to sharing battle team and choices with {TARGETUSER}.": "{USER} acepta compartir su equipo y decisiones con {TARGETUSER}.",
	"No input log found.": "No se encontraron mensajes.",
	"This command only works in battle rooms.": "Este comando solo funciona en batallas.",
	"This command only works when the battle has ended - if the battle has stalled, use /offertie.": "Este comando solo funciona si la batalla ha finalizado - si la batalla se ha estancado, utiliza /offertie. ",
	"Alternatively, you can end the battle with /forcetie.": "De otro modo, tú puedes terminar la batalla con /forcetie.",
	"{USER} has extracted the battle input log.": "{USER} ha extraído el registro de mensajes de la batalla.",
	"You already extracted the battle input log.": "Ya has extraído los mensajes de la batalla.",
	"Battle input log re-requested.": "Los mensajes de la batalla se solicitaron nuevamente.",
	"Invalid input log.": "Mensaje inválido.",
	"Your input log contains untrusted code - you must have console access to use it.": "Tu mensaje contiene código que no es de confianza - debes tener acceso a la consola para usarlo.",
	"This command can only be used in a battle.": "Este comando solo puede ser usado en una batalla.",
	"Only players can extract their team.": "Solo los jugadores pueden extraer su equipo.",
	"Use a number between 1-6 to view a specific set.": "Usa un número entre 1 y 6 para ver un set específico.",
	"The Pokemon \"{TARGET}\" is not in your team.": "El Pokémon \"{TARGET}\" no está en tu equipo.",
	"That Pokemon is not in your team.": "Ese Pokémon no está en tu equipo.",
	"View team": "Ver equipo",
	"Must be in a battle room.": "Debe estar en una batalla.",
	"User {USER} must be in the battle room already.": null, // NEEDS TRANSLATION
	"This server does not allow offering ties.": "Este servidor no permite ofrecer empates.",
	"You can't offer ties in tournaments.": "No puedes ofrecer empates en torneos.",
	"It's too early to tie, please play until turn 100.": "Es demasiado pronto para empatar, por favor juega hasta el turno 100.",
	"No other player is requesting a tie right now. It was probably canceled.": "Ningún otro jugador está pidiendo un empate ahora mismo. Probablemente fue cancelado.",
	"{USER} is offering a tie.": "{USER} está ofreciendo un empate.",
	"Accept tie": "Aceptar empate",
	"Reject": "Rechazar",
	"Must be a player to accept ties.": "Debes ser un jugador para aceptar empates.",
	"You have already agreed to a tie.": "Ya has acordado un empate.",
	"{USER} accepted the tie.": "{USER} aceptó el empate.",
	"All players have accepted the tie.": "Todos los jugadores han aceptado el empate.",
	"Must be a player to reject ties.": "Debes ser un jugador para rechazar empates",
	"{USER} rejected the tie.": "{USER} rechazó el empate.",
	"This room doesn't have an active game.": "Esta sala no tiene un juego activo.",
	"This kind of game can't be forfeited.": "No te puedes rendir en este tipo de juego.",
	"This game doesn't support /choose": "Este juego no admite /choose",
	"This game doesn't support /undo": "Este juego no admite /undo",
	"You can only save replays for battles.": "Tú solo puedes guardar repeticiones de batallas.",
	"This battle can't have hidden replays, because the tournament is set to be forced public.": "Esta batalla no puede tener repeticiones ocultas, ya que el torneo está forzado a ser público.",
	"The replay for this battle is already set to hidden.": "La repetición de esta batalla ya está oculta.",
	"{USER} hid the replay of this battle.": "{USER} ocultó la repetición de esta batalla.",
	"You can only do this in battle rooms.": "Tú solo puedes hacer esto en batallas.",
	"You can only add a Player to unrated battles.": "Solo puedes agregar un Jugador en batallas sin puntos.",
	"Player must be set to \"p1\" or \"p2\", not \"{TARGET}\".": "El jugador debe ser establecido como \"p1\" o \"p2\", no \"{TARGET}\".",
	"This room already has a player in slot {TARGET}.": "Esta batalla ya tiene un jugador en el lugar {TARGET}.",
	"{TARGETUSER} is already a player in this battle.": "{TARGETUSER} ya es un jugador en esta batalla.",
	"Player 2": "Jugador 2",
	"Players could not be restored (maybe this battle already has two players?).": "Los jugadores no se pudieron restaurar (¿tal vez esta batalla ya tiene dos jugadores?)",
	"This game doesn't support /joingame": "Este juego no admite /joingame",
	"This game doesn't support /leavegame": "Este juego no admite /leavegame",
	"You can only do this in unrated non-tour battles.": "Tú solo puedes hacer esto en batallas de torneo sin puntos.",
	"{TARGETUSER} was kicked from a battle by {USER} {REASON}": "{TARGETUSER} fue expulsado de una batalla por {USER} {REASON}",
	"You can only set the timer from inside a battle room.": "Solo puedes establecer el temporizador dentro de una batalla.",
	"This game's timer is managed by a different command.": "El temporizador de este juego se utiliza con un comando diferente.",
	"The game timer is OFF.": "El temporizador del juego está APAGADO.",
	"The game timer is ON (requested by {USER})": "El temporizador del juego está ENCENDIDO (solicitado por {USER}",
	"Access denied.": "Acceso denegado.",
	"Timer was turned off by staff. Please do not turn it back on until our staff say it's okay.": "El temporizador fue apagado por un staff. Por favor no lo enciendas de nuevo hasta que el staff diga que puedes hacerlo.",
	"The timer is already off.": "El temporizador ya estaba apagado.",
	"\"{TARGET}\" is not a recognized timer state.": "\"{TARGET}\" no es un estado de temporizador reconocido.",
	"Forcetimer is now OFF: The timer is now opt-in. (set by {USER})": "Forcetimer ahora está APAGADO: El temporizador está habilitado ahora. (colocado por {USER})",
	"Forcetimer is now ON: All battles will be timed. (set by {USER})": "Forcetimer ahora está ENCENDIDO: Todas las batallas tendrán temporizador. (colocado por {USER})",
	"'{TARGET}' is not a recognized forcetimer setting.": "'{TARGET}' no se reconoce como una configuración del forcetimer.",
	"This server requires you to be rank {GROUP} or higher to search for a battle.": "Este servidor requiere que tu rango sea {GROUP} o mayor para buscar una batalla.",
	"Since you have reached {ELO} ELO in {TARGET}, you must register your account to continue playing that format on ladder.": "Dado que alcanzaste {ELO} de ELO en {TARGET}, debes registrar tu cuenta para poder seguir jugando dicho formato en ladder.",
	"Register": "Registrarse",
	"The user '{TARGETUSER}' was not found.": "El usuario '{TARGETUSER}' no fue encontrado.",
	"You are locked and cannot challenge unlocked users. If this user is your friend, ask them to challenge you instead.": "Estás locked y no puedes retar a usuarios que no tengan lock.",
	"You are banned from battling and cannot challenge users.": "Tienes prohibido combatir y no puedes retar a otros usuarios.",
	"You must choose a username before you challenge someone.": "Debes elegir un nombre de usuario antes de retar a alguien.",
	"This server requires you to be rank {GROUP} or higher to challenge users.": "Este servidor requiere que tu rango sea {GROUP} o mayor para retar usuarios.",
	"This command does not support specifying multiple users": "Este comando no permite especificar múltiples usuarios",
	"Provide a valid format.": "Proporciona un formato válido.",
	"Please provide a valid format.": "Por favor proporciona un formato válido.",
	"The format '{FORMAT}' was not found.": "El formato '{FORMAT}' no fue encontrado.",
	"Your team is valid for {FORMAT}.": "Tu equipo es valido para {FORMAT}.",
	"Your team was rejected for the following reasons:": "Tu equipo fue rechazado por las siguientes razones:",
	"Battles are now hidden (except to staff) in your trainer card.": "Las batallas están ahora ocultas (excepto para el staff) en tu tarjeta de entrenador.",
	"Battles are now visible in your trainer card.": "Las batallas son ahora visibles en tu tarjeta de entrenador.",
	"'{COMMAND}' is a help command.": "'{COMMAND}' es un comando de ayuda.",
	"The command '/{TARGET}' does not exist.": "El comando '/{TARGET}' no existe.",
	"Could not find help for '/{TARGET}'. Try /help for general help.": "No se encontró ayuda para '/{TARGET}'. Prueba usando /help para asistencia en general.",
	"Could not find help for '/{TARGET}' - displaying help for '/{CLOSEST}' instead": "No se encontró ayuda para '/{TARGET}' - mostrando ayuda para '/{CLOSEST}' en su lugar",
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
