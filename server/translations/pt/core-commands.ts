import type { TranslationCatalog } from '../../server/chat';

export const translations: TranslationCatalog = {
	"Server version: <b>{VERSION}</b>": "Versão do servidor: <b>{VERSION}</b>",
	"/mee - must not start with a letter or number": "/mee - não deve iniciar com uma letra ou número",
	"What?! How are you not more excited to battle?! Try /battle! to show me you're ready.": "O quê?! Como assim você não está mais animado para batalhar?! Tente fazer /battle! para me mostrar que está preparado.",
	"Access denied for custom avatar - make sure you're on the right account?": "Acesso negado para avatar personalizado - certifique-se de que você está na conta certa.",
	"Invalid avatar.": "Avatar inválido.",
	"Avatar changed to:": "Avatar trocado para:",
	"Artist: ": "Artista:",
	"No one has PMed you yet.": "Ninguém te enviou uma mensagem privada ainda.",
	"You forgot the comma.": "Você esqueceu da vírgula",
	"User {TARGETUSER} not found. Did you misspell their name?": "Usuário {TARGETUSER} não encontrado. Você digitou o nome corretamente?",
	"User {TARGETUSER} is offline.": "Usuário {TARGETUSER} está offline.",
	"The user \"{TARGETUSER}\" was not found.": "O usuário \"{TARGETUSER}\" não foi encontrado.",
	"The room \"{TARGET}\" was not found.": "A sala \"{TARGET}\" não foi encontrada.",
	"You do not have permission to invite people into this room.": "Você não tem permissão para convidar pessoas para esta sala.",
	"This user is already in \"{ROOM}\".": "O usuário já está em \"{ROOM}\"",
	"Setting status messages in /busy is no longer supported. Set a status using /status.": "Não é mais possível utilizar uma mensagem de status com /busy. Para utilizar um status, utilize /status.",
	"Setting status messages in /away is no longer supported. Set a status using /status.": "Não é mais possível utilizar uma mensagem de status com /away. Para utilizar um status, utilize /status.",
	"{TARGETUSER} does not have a status set.": "{TARGETUSER} não tem uma mensagem de status.",
	"{TARGETUSER}'s status \"{STATUS}\" was cleared by {USER}{REASON}": "O status \"{STATUS}\" de {TARGETUSER} foi removido por {USER}{REASON}",
	"You don't have a status message set.": "Você não tem uma mensagem de status.",
	"You have cleared your status message.": "Você removeu a sua mensagem de status.",
	"This user has not played any ladder games yet.": "Este usuário ainda não jogou nenhuma partida na ladder.",
	// TRANSLATORS: initial for Wins
	"W": "V",
	// TRANSLATORS: initial for Losses
	"L": "D",
	"You already have the temporary symbol '{GROUP}'.": "Você já tem o símbolo temporário '{GROUP}'.",
	"You must specify a valid group symbol.": "Você precisa especificar um símbolo de grupo válido.",
	"You may only set a temporary symbol below your current rank.": "Você só pode utilizar um símbolo temporário que esteja abaixo do seu rank atual.",
	"Your temporary group symbol is now": "Agora o seu símbolo de grupo temporário é",
	"Currently, you're viewing Pokémon Showdown in {LANGUAGE}.": "Atualmelmente, você está vendo o Pokémon Showdown em {LANGUAGE}.",
	"Valid languages are: {LANGUAGES}": "Idiomas válidos são: {LANGUAGES}",
	"Pokémon Showdown will now be displayed in {LANGUAGE} (except in language rooms).": "Agora o Pokémon Showdown sera exibido em {LANGUAGE} (exceto em salas de idioma).",
	"Note that rooms can set their own language, which will override this setting.": " Observação as salas podem escolher sua própria língua, o que sobrepõe essa configuração. ",
	"/updatesettings expects JSON encoded object.": "/updatesettings espera um objeto codificado em JSON.",
	"Unable to parse settings in /updatesettings!": "Não foi possível analisar as configurações em /updatesettings!",
	"Must be in a battle.": "Deve estar em uma batalha.",
	"User {USER} not found.": "Usuário {USER} não encontrado.",
	"Must be a player in this battle.": "Deve ser um jogador nesta batalha.",
	"{TARGETUSER} has not requested extraction.": "{TARGETUSER} não requisitou uma extração.",
	"You have already consented to extraction with {TARGETUSER}.": "Você já consentiu para a extração com {TARGETUSER}.",
	"{USER} consents to sharing battle team and choices with {TARGETUSER}.": "{USER} consentiu em compartilhar a equipe da batalha e escolhas com {TARGETUSER}.",
	"No input log found.": "Nenhum log foi encontrado.",
	"This command only works in battle rooms.": "Este comando só funciona em salas de batalha.",
	"This command only works when the battle has ended - if the battle has stalled, use /offertie.": "Este comando só funciona quando a batalha tiver acabado - se a batalha estiver estancada, use /offertie.",
	"Alternatively, you can end the battle with /forcetie.": "Alternativamente, você pode encerrar a batalha com /forcetie.",
	"{USER} has extracted the battle input log.": "{USER} extraiu os logs da batalha.",
	"You already extracted the battle input log.": "Você já extraiu os logs da batalha.",
	"Battle input log re-requested.": "Logs da batalha foram requisitados outra vez.",
	"Invalid input log.": "Logs inválidos.",
	"Your input log contains untrusted code - you must have console access to use it.": "Seu comando contem código não confiável - você deve ter acesso ao console para usá-lo.",
	"This command can only be used in a battle.": "Este comando só pode ser usado em uma batalha.",
	"Only players can extract their team.": "Apenas jogadores podem extrair suas equipes.",
	"Use a number between 1-6 to view a specific set.": "Use um número entre 1 e 6 para ver um set específico.",
	"The Pokemon \"{TARGET}\" is not in your team.": "O Pokémon \"{TARGET}\" não está na sua equipe.",
	"That Pokemon is not in your team.": "Este Pokémon não está na sua equipe.",
	"View team": "Ver equipe.",
	"Must be in a battle room.": "Deve estar em uma sala de batalha",
	"User {USER} must be in the battle room already.": null, // NEEDS TRANSLATION
	"This server does not allow offering ties.": "Este servidor não permite oferecer empates.",
	"You can't offer ties in tournaments.": "Você não pode oferecer empates em torneios.",
	"It's too early to tie, please play until turn 100.": "É cedo demais para empatar, por favor jogue até o turno 100.",
	"No other player is requesting a tie right now. It was probably canceled.": "Nenhum outro jogador está pedindo por um empate no momento. Provavelmente o pedido foi cancelado.",
	"{USER} is offering a tie.": "{USER} está oferecendo um empate.",
	"Accept tie": "Aceitar empate",
	"Reject": "Rejeitar",
	"Must be a player to accept ties.": "É necessário ser um jogador para aceitar empates.",
	"You have already agreed to a tie.": "Você já concordou com um empate.",
	"{USER} accepted the tie.": "{USER} aceitou o empate.",
	"All players have accepted the tie.": "Todos os jogadores aceitaram o empate.",
	"Must be a player to reject ties.": "É necessário ser um jogador para rejeitar empates.",
	"{USER} rejected the tie.": "{USER} rejeitou o empate.",
	"This room doesn't have an active game.": "Esta sala não tem um jogo ativo.",
	"This kind of game can't be forfeited.": "Você não pode se render neste tipo de jogo.",
	"This game doesn't support /choose": "/choose não funciona neste jogo",
	"This game doesn't support /undo": "/uno não funciona neste jogo",
	"You can only save replays for battles.": "Você só pode salvar replays para batalhas.",
	"This battle can't have hidden replays, because the tournament is set to be forced public.": "Esta batalha não pode ter replays ocultos, visto que o torneio está configurado para ser público.",
	"The replay for this battle is already set to hidden.": "O replay desta batalha já está configurado como oculto.",
	"{USER} hid the replay of this battle.": "{USER} ocultou o replay desta batalha.",
	"You can only do this in battle rooms.": "Você só pode fazer isso em sala de batalhas.",
	"You can only add a Player to unrated battles.": "Você só pode adicionar um jogador em batalhas que não valham pontos.",
	"Player must be set to \"p1\" or \"p2\", not \"{TARGET}\".": "Jogadores devem estar classificados como \"p1\" ou \"p2\", não \"{TARGET}\".",
	"This room already has a player in slot {TARGET}.": "Esta sala já tem um jogador na posição {TARGET}.",
	"{TARGETUSER} is already a player in this battle.": "{TARGETUSER} já é um jogador nesta batalha.",
	"Player 2": "Jogador 2",
	"Players could not be restored (maybe this battle already has two players?).": "Os jogadores não puderam ser restaurados (talvez esta batalha já tenha dois jogadores?).",
	"This game doesn't support /joingame": "/joingame não funciona neste jogo",
	"This game doesn't support /leavegame": "/leavegame não funciona neste jogo",
	"You can only do this in unrated non-tour battles.": "Você só pode fazer isso em batalhas que não valham pontos e nem sejam de torneios.",
	"{TARGETUSER} was kicked from a battle by {USER} {REASON}": "{TARGETUSER} foi expulso de uma batalha por {USER} {REASON}",
	"You can only set the timer from inside a battle room.": "Você só pode acionar o temporizador dentro de uma batalha.",
	"This game's timer is managed by a different command.": "O temporizador deste jogo é administrado por um comando diferente.",
	"The game timer is OFF.": "O temporazidor do jogo está DESLIGADO.",
	"The game timer is ON (requested by {USER})": "O temporizador do jogo está LIGADO (requisitado por {USER})",
	"Access denied.": "Acesso negado.",
	"Timer was turned off by staff. Please do not turn it back on until our staff say it's okay.": "O temporizador foi desligado pela staff. Por favor, não o ligue de volta até que nossa staff diga o contrário.",
	"The timer is already off.": "O temporizador já está desligado.",
	"\"{TARGET}\" is not a recognized timer state.": "\"{TARGET}\" não é uma unidade de tempo reconhecida pelo temporizador.",
	"Forcetimer is now OFF: The timer is now opt-in. (set by {USER})": "Forcetimer agora está DESLIGADO. O temporizador agora é opcional. (estabelecido por {USER})",
	"Forcetimer is now ON: All battles will be timed. (set by {USER})": "Forcetimer agora está LIGADO. Todas as batalhas terão tempo. (estabelecido por {USER})",
	"'{TARGET}' is not a recognized forcetimer setting.": "{TARGET}' não é uma configuração reconhecida de forcetimer.",
	"This server requires you to be rank {GROUP} or higher to search for a battle.": "Este servidor requer que você tenha o rank {GROUP} ou maior para procurar por uma batalha.",
	"Since you have reached {ELO} ELO in {TARGET}, you must register your account to continue playing that format on ladder.": "Visto que você atingiu {ELO} de ELO em {TARGET}, você deve registrar a sua conta para continuar jogando esse formato na ladder.",
	"Register": "Registrar-se",
	"The user '{TARGETUSER}' was not found.": "O usuário '{TARGETUSER}' não foi encontrado.",
	"You are locked and cannot challenge unlocked users. If this user is your friend, ask them to challenge you instead.": "Você está locked e não pode desafiar usuários unlocked.",
	"You are banned from battling and cannot challenge users.": "Você está banido de batalhas e não pode desafiar outros usuários.",
	"You must choose a username before you challenge someone.": "Você deve escolher um nome de usuário antes de desafiar alguém.",
	"This server requires you to be rank {GROUP} or higher to challenge users.": "Este servidor requer que você tenha o rank {GROUP} ou maior para desafiar alguém.",
	"This command does not support specifying multiple users": "Este comando não permite especificar múltiplos usuários.",
	"Provide a valid format.": "Providencie um formato válido.",
	"Please provide a valid format.": "Por favor, providencie um formato válido.",
	"The format '{FORMAT}' was not found.": "O formato '{FORMAT}' não foi encontrado.",
	"Your team is valid for {FORMAT}.": "Sua equipe é válida para {FORMAT}.",
	"Your team was rejected for the following reasons:": "Sua equipe foi rejeitada pelos seguintes motivos:",
	"Battles are now hidden (except to staff) in your trainer card.": "Suas batalhas agora estão ocultas no seu trainer card (exceto para staff).",
	"Battles are now visible in your trainer card.": "Suas batalhas agora estão visíveis no seu trainer card.",
	"'{COMMAND}' is a help command.": "{COMMAND}' é um comando de ajuda.",
	"The command '/{TARGET}' does not exist.": "O comando '/{TARGET}' não existe.",
	"Could not find help for '/{TARGET}'. Try /help for general help.": "Não foi possível encontrar ajuda para '/{TARGET}'. Tente /help para receber ajuda em geral.",
	"Could not find help for '/{TARGET}' - displaying help for '/{CLOSEST}' instead": "Não foi possível encontrar ajuda para '/{TARGET}' - exibindo ajuda para '/{CLOSEST}' em vez disso.",
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
