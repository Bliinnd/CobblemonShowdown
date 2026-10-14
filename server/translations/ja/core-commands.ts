import type { TranslationCatalog } from '../../server/chat';

export const translations: TranslationCatalog = {
	"Server version: <b>{VERSION}</b>": "サーバーのバージョン: <b>{VERSION}</b>",
	"/mee - must not start with a letter or number": "文字や数字を最初においてはいけません。",
	"What?! How are you not more excited to battle?! Try /battle! to show me you're ready.": "バトルが盛り上がってないって!?覚悟を決めて、/battle! だ!",
	"Access denied for custom avatar - make sure you're on the right account?": "このカスタムアバターを使用する権限がありません。許可されているアカウントでログインしてください。",
	"Invalid avatar.": "アバター名が正しくありません。",
	"Avatar changed to:": "アバターを次のものに変更しました。",
	"Artist: ": "作者: ",
	"No one has PMed you yet.": "誰もあなたにPMを送っていません。",
	"You forgot the comma.": "コンマを忘れていませんか?",
	"User {TARGETUSER} not found. Did you misspell their name?": "ユーザー名:{TARGETUSER}は見つかりませんでした。名前を間違えていませんか?",
	"User {TARGETUSER} is offline.": "ユーザー名:{TARGETUSER}は見つかりませんでした。",
	"The user \"{TARGETUSER}\" was not found.": "ユーザー名:\"{TARGETUSER}\"は見つかりませんでした。",
	"The room \"{TARGET}\" was not found.": "チャットルーム:\"{TARGET}\"は見つかりませんでした。",
	"You do not have permission to invite people into this room.": "あなたはこの部屋でユーザーを招待する権限を持っていません。",
	"This user is already in \"{ROOM}\".": "このユーザーはすでに\"{ROOM}\"にいます。",
	"Setting status messages in /busy is no longer supported. Set a status using /status.": "/busyでのステータスメッセージの設定はサポートされなくなりました。ステータスメッセージの設定は、/statusを使って行ってください。",
	"Setting status messages in /away is no longer supported. Set a status using /status.": "/awayでのステータスメッセージの設定はサポートされなくなりました。ステータスメッセージの設定は、/statusを使って行ってください。",
	"{TARGETUSER} does not have a status set.": "{TARGETUSER}はステータスメッセージを設定していません。",
	"{TARGETUSER}'s status \"{STATUS}\" was cleared by {USER}{REASON}": "{TARGETUSER}のステータスメッセージは{USER}によって消去されました。{REASON}",
	"You don't have a status message set.": "ステータスメッセージを設定していません。",
	"You have cleared your status message.": "ステータスメッセージを消去しました。",
	"This user has not played any ladder games yet.": "このユーザーはレートが有効なバトルをしていません。",
	// TRANSLATORS: initial for Wins
	"W": "W(Winsの頭文字)",
	// TRANSLATORS: initial for Losses
	"L": "L(Lossesの頭文字)",
	"You already have the temporary symbol '{GROUP}'.": "あなたはすでに一時的なランクである'{GROUP}'になっています。",
	"You must specify a valid group symbol.": "有効なランクの記号を特定する必要があります。",
	"You may only set a temporary symbol below your current rank.": "現在のランクより下の一時的なシンボルしか設定できません。",
	"Your temporary group symbol is now": "あなたの一時的なランクの記号",
	"Currently, you're viewing Pokémon Showdown in {LANGUAGE}.": "現在、Pokémon Showdownを{LANGUAGE}で表示しています。",
	"Valid languages are: {LANGUAGES}": "有効な言語一覧: {LANGUAGES}",
	"Pokémon Showdown will now be displayed in {LANGUAGE} (except in language rooms).": "Pokémon Showdownは言語部屋以外の場所は{LANGUAGE}で表示されます。",
	"Note that rooms can set their own language, which will override this setting.": "言語部屋ではそれぞれが独自の言語を設定でき、その場合はユーザー設定より部屋の設定が優先されます。",
	"/updatesettings expects JSON encoded object.": "/updatesettings を使用するには、JSONにエンコードされたデータが必要です。",
	"Unable to parse settings in /updatesettings!": "/updatesettings において、設定に使用するJSONを解析することができません。",
	"Must be in a battle.": "バトルの中でなければいけません。",
	"User {USER} not found.": "ユーザー {USER} は見つかりませんでした。",
	"Must be a player in this battle.": "プレイヤーである必要があります。",
	"{TARGETUSER} has not requested extraction.": "{TARGETUSER} は解析を要求していません。",
	"You have already consented to extraction with {TARGETUSER}.": "あなたはすでに{TARGETUSER}と解析に同意しています。",
	"{USER} consents to sharing battle team and choices with {TARGETUSER}.": "{USER}と{TARGETUSER}はバトルチームや技の選択を共有することに同意します。",
	"No input log found.": "インプットされたログが見つかりませんでした。",
	"This command only works in battle rooms.": "このコマンドはバトル内のみで有効です。",
	"This command only works when the battle has ended - if the battle has stalled, use /offertie.": "このコマンドはバトルが終わった後に有効になります。バトルが長引いた場合は、/offertie を使用してください。",
	"Alternatively, you can end the battle with /forcetie.": "あるいは/forcetie で強制的にバトルを引き分けにすることもできます。",
	"{USER} has extracted the battle input log.": "{USER}がバトルのログを出力しました。",
	"You already extracted the battle input log.": "あなたはすでにログを出力しています。",
	"Battle input log re-requested.": "ログの出力が再要求されました。",
	"Invalid input log.": "不正なログです。",
	"Your input log contains untrusted code - you must have console access to use it.": "入力ログには信頼されていないコードが含まれています。これを使用するにはコンソールへのアクセス権が必要です。",
	"This command can only be used in a battle.": "このコマンドはバトル内でのみ使用できます。",
	"Only players can extract their team.": "プレイヤーのみがチームの詳細を閲覧できます。",
	"Use a number between 1-6 to view a specific set.": "セットを出力するには1から6の間の数字を指定してください。",
	"The Pokemon \"{TARGET}\" is not in your team.": "\"{TARGET}\"はあなたのチームの中にはいません。",
	"That Pokemon is not in your team.": "そのポケモンはあなたのチームの中にはいません。",
	"View team": "チームを見る",
	"Must be in a battle room.": "バトルの中でなければいけません。",
	"User {USER} must be in the battle room already.": "ユーザー \"{USER}\"はすでに入室しています。",
	"This server does not allow offering ties.": "このサーバーでは引き分けの提案が許可されていません。",
	"You can't offer ties in tournaments.": "トーナメントでは引き分けを提案できません。",
	"It's too early to tie, please play until turn 100.": "引き分けの提案が早すぎます。100ターン目まで待ってください。",
	"No other player is requesting a tie right now. It was probably canceled.": "他のプレイヤーは引き分けを提案していません。おそらくキャンセルされました。",
	"{USER} is offering a tie.": "{USER}が引き分けを提案しています。",
	"Accept tie": "引き分けの提案を受け入れる",
	"Reject": "引き分けの提案を拒否する",
	"Must be a player to accept ties.": "引き分けを受け入れるにはプレイヤーである必要があります。",
	"You have already agreed to a tie.": "すでに引き分け同意しています。",
	"{USER} accepted the tie.": "{USER}が引き分けに同意しました。",
	"All players have accepted the tie.": "全てのプレイヤーが引き分けに同意しました。",
	"Must be a player to reject ties.": "引き分けを拒否するにはプレイヤーである必要があります。",
	"{USER} rejected the tie.": "{USER}が引き分けを拒否しました。",
	"This room doesn't have an active game.": "この部屋には、進行中のゲームがありません。",
	"This kind of game can't be forfeited.": "この種類のゲームは降参できません。",
	"This game doesn't support /choose": "このゲームでは\"/choose\"が使えません。",
	"This game doesn't support /undo": "このゲームでは\"/undo\"が使えません。",
	"You can only save replays for battles.": "リプレイが保存できるのはバトルだけです。",
	"This battle can't have hidden replays, because the tournament is set to be forced public.": "トーナメントの設定でこのバトルを隠し部屋にすることが許されていません。",
	"The replay for this battle is already set to hidden.": "このバトルのリプレイはすでに隠されています。",
	"{USER} hid the replay of this battle.": "{USER}がこのバトルのリプレイを非表示にしました。",
	"You can only do this in battle rooms.": "これはバトル部屋のみで使えます。",
	"You can only add a Player to unrated battles.": "プレイヤーを追加できるのはレートが有効でないバトルのみです。",
	"Player must be set to \"p1\" or \"p2\", not \"{TARGET}\".": "プレイヤーは \"{TARGET}\"ではなく\"p1\"か\"p2\"に設定しなければなりません。",
	"This room already has a player in slot {TARGET}.": "スロット {TARGET}にはすでにユーザーが割り当てられています。",
	"{TARGETUSER} is already a player in this battle.": null, // NEEDS TRANSLATION
	"Player 2": "プレイヤー2",
	"Players could not be restored (maybe this battle already has two players?).": "プレイヤーの復元ができませんでした。(このバトルにすでに2人プレイヤーがいるからかもしれません。)",
	"This game doesn't support /joingame": "このゲームでは /joingame が使えません。",
	"This game doesn't support /leavegame": "このゲームでは /leavegame が使えません。",
	"You can only do this in unrated non-tour battles.": "これはトーナメントでなくかつレートが有効ではないバトルでのみ有効です。",
	"{TARGETUSER} was kicked from a battle by {USER} {REASON}": "{TARGETUSER}は{USER}によってバトルからキックされました。({REASON})",
	"You can only set the timer from inside a battle room.": "タイマーはバトル部屋の中で設定できます。",
	"This game's timer is managed by a different command.": "このゲームのタイマーは他のコマンドで管理されています。",
	"The game timer is OFF.": "ゲームのタイマーがオフになりました。",
	"The game timer is ON (requested by {USER})": "ゲームのタイマーがオンになりました({USER}が設定しました)",
	"Access denied.": "アクセスが拒否されました。",
	"Timer was turned off by staff. Please do not turn it back on until our staff say it's okay.": "スタッフがタイマーをオフに設定しました。スタッフの許可を得るまで、元に戻さないでください。",
	"The timer is already off.": "タイマーは既にオフに設定されています。",
	"\"{TARGET}\" is not a recognized timer state.": "\"{TARGET}\"は認識できないタイマーの状態です。",
	"Forcetimer is now OFF: The timer is now opt-in. (set by {USER})": "強制的なタイマーがオフになりました。(by {USER})",
	"Forcetimer is now ON: All battles will be timed. (set by {USER})": "タイマーがオンになりました。すべてのバトルが強制的にタイマーで計測されます。(by {USER})",
	"'{TARGET}' is not a recognized forcetimer setting.": "'{TARGET}'は認識できないタイマーの状態です。",
	"This server requires you to be rank {GROUP} or higher to search for a battle.": "このサーバーでは、バトルを検索するためにはランクが{GROUP}以上であることが必要です。",
	"Since you have reached {ELO} ELO in {TARGET}, you must register your account to continue playing that format on ladder.": "ELOレートが{TARGET}で{ELO}に達したので、アカウントを登録する必要があります。",
	"Register": "登録",
	"The user '{TARGETUSER}' was not found.": "ユーザー \"{TARGETUSER}\"は見つかりませんでした。",
	"You are locked and cannot challenge unlocked users. If this user is your friend, ask them to challenge you instead.": "あなたはロックされており、ロックされていないユーザーにchallengeすることはできません。このユーザーがあなたの友人である場合は、代わりにchallengeするよう依頼してください",
	"You are banned from battling and cannot challenge users.": "あなたはバトルをすることを禁止されているため、ほかのユーザーにchallengeすることはできません。",
	"You must choose a username before you challenge someone.": "誰かにchallengeする前にユーザー名を決める必要があります。",
	"This server requires you to be rank {GROUP} or higher to challenge users.": "このサーバーでは、ユーザーにchallengeするためにはランクが{GROUP}以上であることが必要です。",
	"This command does not support specifying multiple users": "このコマンドでは複数のユーザーを指定できません",
	"Provide a valid format.": "有効なフォーマット名を入力してください",
	"Please provide a valid format.": "有効なフォーマット名を入力してください",
	"The format '{FORMAT}' was not found.": "フォーマット\"{FORMAT}\"は見つかりませんでした。",
	"Your team is valid for {FORMAT}.": "このチームは \"{FORMAT}\"に適合しています。",
	"Your team was rejected for the following reasons:": "このチームは以下の理由によって不適切です。",
	"Battles are now hidden (except to staff) in your trainer card.": "あなたのトレーナーカードからバトルはスタッフ以外には見えなくなりました",
	"Battles are now visible in your trainer card.": "あなたのトレーナーカードからバトルが見られるようになりました。",
	"'{COMMAND}' is a help command.": "\"{COMMAND}\"はヘルプコマンドです。",
	"The command '/{TARGET}' does not exist.": "コマンド \"/{TARGET}\"は見つかりませんでした。",
	"Could not find help for '/{TARGET}'. Try /help for general help.": "\"{TARGET}\"のヘルプは見つかりませんでした。\"/help\"で総合的なヘルプを試してみてください。",
	"Could not find help for '/{TARGET}' - displaying help for '/{CLOSEST}' instead": "\"/{TARGET}\"のヘルプは見つかりませんでした。\"/{CLOSEST}\"のヘルプを表示しています。",
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
