import type { TranslationCatalog } from '../../server/chat';

export const translations: TranslationCatalog = {
	// #region Generic UI
	// ==================================================================

	"Total": null, // NEEDS TRANSLATION
	"User '{TARGETUSER}' not found.": null, // NEEDS TRANSLATION
	"User \"{TARGETUSER}\" not found.": null, // NEEDS TRANSLATION
	"Refresh": null, // NEEDS TRANSLATION
	"Action": null, // NEEDS TRANSLATION

	// #endregion Generic

	"namelocked": null, // NEEDS TRANSLATION
	"locked": null, // NEEDS TRANSLATION

	"autoconfirmed": null, // NEEDS TRANSLATION
	"trusted": null, // NEEDS TRANSLATION

	"Please follow the rules:": "Lütfen kurallara uyun:",
	// TRANSLATORS: Link to the PS rules for your language (the part after pokemonshowdown.com)
	"/rules": "/pages/rules-tr",
	"Global Rules": "Genel kurallar",
	"{ROOM} room rules": "{ROOM} odası kuralları",

	"<strong>Global ranks</strong>": null, // NEEDS TRANSLATION
	"+ <strong>Global Voice</strong> - They can use ! commands like !groups": null, // NEEDS TRANSLATION
	"% <strong>Global Driver</strong> - Like Voice, and they can lock users and check for alts": null, // NEEDS TRANSLATION
	"@ <strong>Global Moderator</strong> - The above, and they can globally ban users": null, // NEEDS TRANSLATION
	"* <strong>Global Bot</strong> - An automated account that can use HTML anywhere": null, // NEEDS TRANSLATION
	"* <strong>Global Bot</strong> - Like Moderator, but makes it clear that this user is a bot": null, // NEEDS TRANSLATION
	"~ <strong>Global Administrator</strong> - They can do anything, like change what this message says and promote users globally": null, // NEEDS TRANSLATION

	"<strong>Room ranks</strong>": null, // NEEDS TRANSLATION
	"^ <strong>Prize Winner</strong> - They don't have any powers beyond a symbol.": null, // NEEDS TRANSLATION
	"+ <strong>Voice</strong> - They can use ! commands like !groups": null, // NEEDS TRANSLATION
	"% <strong>Driver</strong> - The above, and they can mute and warn": null, // NEEDS TRANSLATION
	"@ <strong>Moderator</strong> - The above, and they can room ban users": null, // NEEDS TRANSLATION
	"* <strong>Bot</strong> - An automated account that can mute, warn, and use HTML": null, // NEEDS TRANSLATION
	"* <strong>Bot</strong> - Like Moderator, but makes it clear that this user is a bot": null, // NEEDS TRANSLATION
	"# <strong>Room Owner</strong> - They are leaders of the room and can almost totally control it": null, // NEEDS TRANSLATION

	"/help OR /h OR /? - Gives you help.": null, // NEEDS TRANSLATION
	"For an overview of room commands, use /roomhelp": null, // NEEDS TRANSLATION
	"For details of a specific command, use something like: /help data": null, // NEEDS TRANSLATION

	"COMMANDS": null, // NEEDS TRANSLATION
	"BATTLE ROOM COMMANDS": null, // NEEDS TRANSLATION
	"OPTION COMMANDS": null, // NEEDS TRANSLATION
	"INFORMATIONAL/RESOURCE COMMANDS": null, // NEEDS TRANSLATION
	"DATA COMMANDS": null, // NEEDS TRANSLATION
	"DRIVER COMMANDS": null, // NEEDS TRANSLATION
	"MODERATOR COMMANDS": null, // NEEDS TRANSLATION
	"ADMIN COMMANDS": null, // NEEDS TRANSLATION

	"(replace / with ! to broadcast. Broadcasting requires: + % @ # ~)": null, // NEEDS TRANSLATION

	"<strong>Room punishments</strong>:": null, // NEEDS TRANSLATION
	"<strong>warn</strong> - Displays a popup with the rules.": null, // NEEDS TRANSLATION
	"<strong>mute</strong> - Mutes a user (makes them unable to talk) for 7 minutes.": null, // NEEDS TRANSLATION
	"<strong>hourmute</strong> - Mutes a user for 60 minutes.": null, // NEEDS TRANSLATION
	"<strong>ban</strong> - Bans a user (makes them unable to join the room) for 2 days.": null, // NEEDS TRANSLATION
	"<strong>weekban</strong> - Bans a user from the room for a week.": null, // NEEDS TRANSLATION
	"<strong>blacklist</strong> - Bans a user for a year.": null, // NEEDS TRANSLATION

	"<strong>Global punishments</strong>:": null, // NEEDS TRANSLATION
	"<strong>lock</strong> - Locks a user (makes them unable to talk in any rooms or PM non-staff) for 2 days.": null, // NEEDS TRANSLATION
	"<strong>weeklock</strong> - Locks a user for a week.": null, // NEEDS TRANSLATION
	"<strong>namelock</strong> - Locks a user and prevents them from having a username for 2 days.": null, // NEEDS TRANSLATION
	"<strong>globalban</strong> - Globally bans (makes them unable to connect and play games) for a week.": null, // NEEDS TRANSLATION

	"<strong>Indefinite global punishments</strong>:": null, // NEEDS TRANSLATION
	"<strong>permalock</strong> - Issued for repeated instances of bad behavior and is rarely the result of a single action. ": null, // NEEDS TRANSLATION
	"These can be appealed in the <a href=\"https://www.smogon.com/forums/threads/discipline-appeal-rules.3583479/\">Discipline Appeal</a>": null, // NEEDS TRANSLATION
	" forum after at least 3 months without incident.": null, // NEEDS TRANSLATION
	"<strong>permaban</strong> - Unappealable global ban typically issued for the most severe cases of offensive/inappropriate behavior.": null, // NEEDS TRANSLATION

	"<strong>Room drivers (%)</strong> can use:": null, // NEEDS TRANSLATION
	"- /warn OR /k <em>username</em>: warn a user and show the Pok&eacute;mon Showdown rules": null, // NEEDS TRANSLATION
	"- /mute OR /m <em>username</em>: 7 minute mute": null, // NEEDS TRANSLATION
	"- /hourmute OR /hm <em>username</em>: 60 minute mute": null, // NEEDS TRANSLATION
	"- /unmute <em>username</em>: unmute": null, // NEEDS TRANSLATION
	"- /hidetext <em>username</em>: hide a user's messages from the room": null, // NEEDS TRANSLATION
	"- /announce OR /wall <em>message</em>: make an announcement": null, // NEEDS TRANSLATION
	"- /modlog <em>username</em>: search the moderator log of the room": null, // NEEDS TRANSLATION
	"- /modnote <em>note</em>: add a moderator note that can be read through modlog": null, // NEEDS TRANSLATION

	"<strong>Room moderators (@)</strong> can also use:": null, // NEEDS TRANSLATION
	"- /roomban OR /rb <em>username</em>: ban user from the room": null, // NEEDS TRANSLATION
	"- /roomunban <em>username</em>: unban user from the room": null, // NEEDS TRANSLATION
	"- /roomvoice <em>username</em>: appoint a room voice": null, // NEEDS TRANSLATION
	"- /roomdevoice <em>username</em>: remove a room voice": null, // NEEDS TRANSLATION
	"- /staffintro <em>intro</em>: set the staff introduction that will be displayed for all staff joining the room": null, // NEEDS TRANSLATION
	"- /roomsettings: change a variety of room settings, namely modchat": null, // NEEDS TRANSLATION

	"<strong>Room owners (#)</strong> can also use:": null, // NEEDS TRANSLATION
	"- /roomintro <em>intro</em>: set the room introduction that will be displayed for all users joining the room": null, // NEEDS TRANSLATION
	"- /rules <em>rules link</em>: set the room rules link seen when using /rules": null, // NEEDS TRANSLATION
	"- /roommod, /roomdriver <em>username</em>: appoint a room moderator/driver": null, // NEEDS TRANSLATION
	"- /roomdemod, /roomdedriver <em>username</em>: remove a room moderator/driver": null, // NEEDS TRANSLATION
	"- /roomdeauth <em>username</em>: remove all room auth from a user": null, // NEEDS TRANSLATION
	"- /declare <em>message</em>: make a large blue declaration to the room": null, // NEEDS TRANSLATION
	"- !htmlbox <em>HTML code</em>: broadcast a box of HTML code to the room": null, // NEEDS TRANSLATION
	"- !showimage <em>[url], [width], [height]</em>: show an image to the room": null, // NEEDS TRANSLATION
	"- !show [image or youtube link]: display given media in chat.": null, // NEEDS TRANSLATION
	"- /whitelist [user]: whitelist a non-staff user to use !show.": null, // NEEDS TRANSLATION
	"- /unwhitelist [user]: removes the user from !show whitelist.": null, // NEEDS TRANSLATION
	"- /roomsettings: change a variety of room settings, including modchat, capsfilter, etc": null, // NEEDS TRANSLATION

	"More detailed help can be found in the <a href=\"https://www.smogon.com/forums/posts/6774654/\">roomauth guide</a>": null, // NEEDS TRANSLATION

	"Tournament Help:": null, // NEEDS TRANSLATION
	"- /tour create <em>format</em>, elimination: create a new single elimination tournament in the current room.": null, // NEEDS TRANSLATION
	"- /tour create <em>format</em>, roundrobin: create a new round robin tournament in the current room.": null, // NEEDS TRANSLATION
	"- /tour end: forcibly end the tournament in the current room": null, // NEEDS TRANSLATION
	"- /tour start: start the tournament in the current room": null, // NEEDS TRANSLATION
	"- /tour banlist [pokemon], [talent], [...]: ban moves, abilities, Pokémon or items from being used in a tournament (it must be created first)": null, // NEEDS TRANSLATION

	"More detailed help can be found in the <a href=\"https://www.smogon.com/forums/posts/6777489/\">tournaments guide</a>": null, // NEEDS TRANSLATION

	"Your status cannot be updated while you are locked or semilocked.": null, // NEEDS TRANSLATION
	"Your status is too long; it must be under {MAX} characters.": null, // NEEDS TRANSLATION
	"Your status contains a banned word.": null, // NEEDS TRANSLATION
	"Your status has been set to: {TARGET}.": null, // NEEDS TRANSLATION
	"You are now marked as busy.": null, // NEEDS TRANSLATION
	"You are now marked as away. Send a message or use /back to indicate you are back.": null, // NEEDS TRANSLATION
	"You are already marked as back.": null, // NEEDS TRANSLATION
	"You are no longer marked as busy.": null, // NEEDS TRANSLATION

	"You must choose a name before you can talk.": null, // NEEDS TRANSLATION
	"You are {LOCKTYPE} and can't talk in chat. {EXPIRATION}": null, // NEEDS TRANSLATION
	// TRANSLATORS: your lock
	"Get help with this": null, // NEEDS TRANSLATION
	"You are muted and cannot talk in this room.": null, // NEEDS TRANSLATION
	"Because moderated chat is set, your account must be at least one week old and you must have won at least one ladder game to speak in this room.": null, // NEEDS TRANSLATION
	"Because moderated chat is set, your account must be staff in a public room or have a global rank to speak in this room.": null, // NEEDS TRANSLATION
	"Because moderated chat is set, you must be of rank {GROUP} or higher to speak in this room.": null, // NEEDS TRANSLATION
	"Your message can't be blank.": null, // NEEDS TRANSLATION
	"Your message is too long: ": null, // NEEDS TRANSLATION
	"Your message contains banned characters.": null, // NEEDS TRANSLATION
	"This room has slow-chat enabled. You can only talk once every {SECONDS} seconds.": null, // NEEDS TRANSLATION
	"Your username contains a phrase banned by this room.": null, // NEEDS TRANSLATION
	"Your status message contains a phrase banned by this room.": null, // NEEDS TRANSLATION

	"You are {LOCKTYPE} and can only private message members of the global moderation team. {EXPIRATION}": null, // NEEDS TRANSLATION
	"The user \"{TARGETUSER}\" is locked and cannot be PMed.": null, // NEEDS TRANSLATION
	"On this server, you must be of rank {GROUP} or higher to PM users.": null, // NEEDS TRANSLATION
	"This user is blocking private messages right now.": null, // NEEDS TRANSLATION
	"This {GROUP} is too busy to answer private messages right now. Please contact a different staff member.": null, // NEEDS TRANSLATION
	"If you need help, try opening a <a href=\"view-help-request\" class=\"button\">help ticket</a>": null, // NEEDS TRANSLATION
	"You are blocking private messages right now.": null, // NEEDS TRANSLATION
	"You are blocking challenges right now.": null, // NEEDS TRANSLATION

	"Your message contained banned words in this room.": null, // NEEDS TRANSLATION
	"You can't send the same message again so soon.": null, // NEEDS TRANSLATION
	"Due to this room being a high traffic room, your message must contain at least two letters.": null, // NEEDS TRANSLATION

	"You are already blocking private messages! To unblock, use /unblockpms": null, // NEEDS TRANSLATION
	"You are now blocking private messages, except from staff and {RANK}.": null, // NEEDS TRANSLATION
	"You are now blocking private messages, except from staff and {STATUS} users.": null, // NEEDS TRANSLATION
	"You are now blocking private messages, except from staff.": null, // NEEDS TRANSLATION
	"You are not blocking private messages! To block, use /blockpms": null, // NEEDS TRANSLATION
	"You are no longer blocking private messages.": null, // NEEDS TRANSLATION
	"You are now blocking all incoming challenge requests.": null, // NEEDS TRANSLATION
	"You are already blocking challenges!": null, // NEEDS TRANSLATION
	"You are already available for challenges!": null, // NEEDS TRANSLATION
	"You are available for challenges from now on.": null, // NEEDS TRANSLATION
	"You are now blocking challenges, except from staff and {RANK}.": null, // NEEDS TRANSLATION
	"You are now blocking challenges, except from staff and {STATUS} users.": null, // NEEDS TRANSLATION

	"Staff FAQ": null, // NEEDS TRANSLATION
	"You cannot broadcast all FAQs at once.": null, // NEEDS TRANSLATION
	"A user is autoconfirmed when they have won at least one rated battle and have been registered for one week or longer. In order to prevent spamming and trolling, most chatrooms only allow autoconfirmed users to chat. If you are not autoconfirmed, you can politely PM a staff member (staff have %, @, or # in front of their username) in the room you would like to chat and ask them to disable modchat. However, staff are not obligated to disable modchat.": null, // NEEDS TRANSLATION
	"How the ladder works": null, // NEEDS TRANSLATION
	"Tiering FAQ": null, // NEEDS TRANSLATION
	"Badge FAQ": null, // NEEDS TRANSLATION
	"Common misconceptions about our RNG": null, // NEEDS TRANSLATION
	"To join a room tournament, click the <strong>Join!</strong> button or type the command <code>/tour join</code> in the room's chat. You can check if your team is legal for the tournament by clicking the <strong>Validate</strong> button once you've joined and selected a team. To battle your opponent in the tournament, click the <strong>Ready!</strong> button when it appears. There are two different types of room tournaments: elimination (if a user loses more than a certain number of times, they are eliminated) and round robin (all users play against each other, and the user with the most wins is the winner).": null, // NEEDS TRANSLATION
	"Frequently Asked Questions": null, // NEEDS TRANSLATION

	"Invalid room.": null, // NEEDS TRANSLATION

	"pages/faq": null, // NEEDS TRANSLATION
	"pages/ladderhelp": null, // NEEDS TRANSLATION
	"pages/rng": null, // NEEDS TRANSLATION
	"pages/staff": null, // NEEDS TRANSLATION

	"- We log PMs so you can report them - staff can't look at them without permission unless there's a law enforcement reason.": null, // NEEDS TRANSLATION
	"- We log IPs to enforce bans and mutes.": null, // NEEDS TRANSLATION
	"- We use cookies to save your login info and teams, and for Google Analytics and AdSense.": null, // NEEDS TRANSLATION
	"- For more information, you can read our <a href=\"https://{ROOT}/privacy\">full privacy policy.</a>": null, // NEEDS TRANSLATION
	"pages/proxyhelp": null, // NEEDS TRANSLATION
	"Proxy lock help": null, // NEEDS TRANSLATION
	"Custom avatars are given to Global Staff members, contributors (coders and spriters) to Pokemon Showdown, and Smogon badgeholders at the discretion of the PS! Administrators. They are also sometimes given out as rewards for major events such as PSPL (Pokemon Showdown Premier League). If you're curious, you can view the entire list of <a href=\"https://www.smogon.com/smeargle/customs/\">custom avatars</a>.": null, // NEEDS TRANSLATION
	"pages/privacy": null, // NEEDS TRANSLATION
	"Pokémon Showdown privacy policy": null, // NEEDS TRANSLATION
	"{TARGETUSER}'s status \"{STATUS}\" was cleared by {USER}{REASON}.": null, // NEEDS TRANSLATION
	"To use the friends feature you must be autoconfirmed, which means being registered for at least one week and winning one rated game.": null, // NEEDS TRANSLATION
	"That name is too long - choose a valid name.": null, // NEEDS TRANSLATION
	"You are currently blocking friend requests, and so cannot accept your own.": null, // NEEDS TRANSLATION
	"You already are allowing friend requests.": null, // NEEDS TRANSLATION
	"You are now allowing friend requests.": null, // NEEDS TRANSLATION
	"You already are blocking incoming friend requests.": null, // NEEDS TRANSLATION
	"You are now blocking incoming friend requests.": null, // NEEDS TRANSLATION
	"Unrecognized setting.": null, // NEEDS TRANSLATION
	"You are already not receiving friend notifications.": null, // NEEDS TRANSLATION
	"You will not receive friend notifications.": null, // NEEDS TRANSLATION
	"You are already hiding your logins from friends.": null, // NEEDS TRANSLATION
	"You are already allowing friends to see your login times.": null, // NEEDS TRANSLATION
	"You are already allowing other people to view your friends list.": null, // NEEDS TRANSLATION
	"You are now allowing other people to view your friends list.": null, // NEEDS TRANSLATION
	"You are already hiding your friends list.": null, // NEEDS TRANSLATION
	"You are now hiding your friends list.": null, // NEEDS TRANSLATION
	"You are already sharing your battles with friends.": null, // NEEDS TRANSLATION
	"You are already not sharing your battles with friends.": null, // NEEDS TRANSLATION
	"Undo": null, // NEEDS TRANSLATION
	"Accept": null, // NEEDS TRANSLATION
	"Deny": null, // NEEDS TRANSLATION
	"You are locked due to your proxy / VPN and can't talk in chat.": null, // NEEDS TRANSLATION
	"|html|<div class=\"message-error\">You must be registered to chat in temporary rooms (like battles).</div>": null, // NEEDS TRANSLATION
	"You may register in the <button name=\"openOptions\"><i class=\"fa fa-cog\"></i> Options</button> menu.": null, // NEEDS TRANSLATION
	"Moderated chat is set. To speak in this room, your account must be autoconfirmed, which means being registered for at least one week and winning at least one rated game (any game started through the 'Battle!' button).": null, // NEEDS TRANSLATION
	"|html|You may register in the <button name=\"openOptions\"><i class=\"fa fa-cog\"></i> Options</button> menu.": null, // NEEDS TRANSLATION
	"|html|<div class=\"message-error\">You must be registered to send private messages.</div>": null, // NEEDS TRANSLATION
	"That user is unregistered and cannot be PMed.": null, // NEEDS TRANSLATION
	"You are locked due to your proxy / VPN and can only private message members of the global moderation team.": null, // NEEDS TRANSLATION
	"All Friends": null, // NEEDS TRANSLATION
	"Spectate": null, // NEEDS TRANSLATION
	"Sent": null, // NEEDS TRANSLATION
	"Received": null, // NEEDS TRANSLATION
	"Help": null, // NEEDS TRANSLATION
	"Settings": null, // NEEDS TRANSLATION
	"You are currently blocking friend requests.": null, // NEEDS TRANSLATION
	"You are not blocking friend requests.": null, // NEEDS TRANSLATION
	"You are currently allowing friend notifications.": null, // NEEDS TRANSLATION
	"Your friend notifications are disabled.": null, // NEEDS TRANSLATION
	"Online": null, // NEEDS TRANSLATION
	"Idle": null, // NEEDS TRANSLATION
	"Busy": null, // NEEDS TRANSLATION
	"Offline": null, // NEEDS TRANSLATION
	"<code>/friend list</code> - View current friends.": null, // NEEDS TRANSLATION
	"<code>/friend add [name]</code> OR <code>/friend [name]</code> - Send a friend request to [name], if you don't have them added.": null, // NEEDS TRANSLATION
	"<code>/friend remove [username]</code> OR <code>/unfriend [username]</code>  - Unfriend the user.": null, // NEEDS TRANSLATION
	"<code>/friend accept [username]</code> - Accepts the friend request from [username], if it exists.": null, // NEEDS TRANSLATION
	"<code>/friend reject [username]</code> - Rejects the friend request from [username], if it exists.": null, // NEEDS TRANSLATION
	"<code>/friend toggle [off/on]</code> - Enable or disable receiving of friend requests.": null, // NEEDS TRANSLATION
	"<code>/friend hidenotifications</code> OR <code>hidenotifs</code> - Opts out of receiving friend notifications.": null, // NEEDS TRANSLATION
	"<code>/friend viewnotifications</code> OR <code>viewnotifs</code> - Opts into view friend notifications.": null, // NEEDS TRANSLATION
	"<code>/friend listdisplay [on/off]</code> - Opts [in/out] of letting others view your friends list.": null, // NEEDS TRANSLATION
	"<code>/friend viewlist [user]</code> - View the given [user]'s friend list, if they're allowing others to see.": null, // NEEDS TRANSLATION
	"<code>/friends sharebattles [on|off]</code> - Allow or disallow your friends from seeing your ongoing battles.": null, // NEEDS TRANSLATION
	"You have {COUNT} friend requests pending!": null, // NEEDS TRANSLATION
	"View requests": null, // NEEDS TRANSLATION
	"Your friend {FRIEND} has just connected!": null, // NEEDS TRANSLATION
	"Add friend:": null, // NEEDS TRANSLATION
	"Add": null, // NEEDS TRANSLATION
	"Your friends:": null, // NEEDS TRANSLATION
	"You currently have no friends added.": null, // NEEDS TRANSLATION
	"To add a friend, use <code>/friend add [username]</code>.": null, // NEEDS TRANSLATION
	"{USER}'s friends:": null, // NEEDS TRANSLATION
	"This user has no friends added.": null, // NEEDS TRANSLATION
	"Status: {STATUS}": null, // NEEDS TRANSLATION
	"On an alternate account": null, // NEEDS TRANSLATION
	"Last seen: {TIME} ({AGO})": null, // NEEDS TRANSLATION
	"The friends list feature is currently disabled.": null, // NEEDS TRANSLATION
	"To use the friends list, you must be logged in to a registered account.": null, // NEEDS TRANSLATION
	"You are locked, and so cannot use the friends feature.": null, // NEEDS TRANSLATION
	"You are currently unable to use the friends feature.": null, // NEEDS TRANSLATION
	"Specify a user.": null, // NEEDS TRANSLATION
	"You sent a friend request to {USER}!": null, // NEEDS TRANSLATION
	"Removed friend {TARGET}.": null, // NEEDS TRANSLATION
	"You accepted a friend request from {TARGET}.": null, // NEEDS TRANSLATION
	"{USER} accepted your friend request!": null, // NEEDS TRANSLATION
	"You have no friend request pending from {TARGET}.": null, // NEEDS TRANSLATION
	"You denied a friend request from {TARGET}.": null, // NEEDS TRANSLATION
	"You have no pending friend request to {TARGET}.": null, // NEEDS TRANSLATION
	"You removed your friend request to {TARGET}.": null, // NEEDS TRANSLATION
	"You are already allowing friend notifications.": null, // NEEDS TRANSLATION
	"You will now receive friend notifications.": null, // NEEDS TRANSLATION
	"Invalid setting.": null, // NEEDS TRANSLATION
	"You are now hiding your login times from your friends.": null, // NEEDS TRANSLATION
	"You are now allowing your friends to see your login times.": null, // NEEDS TRANSLATION
	"You are currently displaying your friends list.": null, // NEEDS TRANSLATION
	"You are currently hiding your friends list.": null, // NEEDS TRANSLATION
	"You invalidated each entry in the friends database cache.": null, // NEEDS TRANSLATION
	"You are now allowing your friends to see your ongoing battles.": null, // NEEDS TRANSLATION
	"You are now hiding your ongoing battles from your friends.": null, // NEEDS TRANSLATION
	"Invalid setting '{TARGET}'. Provide 'on' or 'off'.": null, // NEEDS TRANSLATION
	"/friends sharebattles [on|off] - Allow or disallow your friends from seeing your ongoing battles.": null, // NEEDS TRANSLATION
	"More commands...": null, // NEEDS TRANSLATION
	"[Friends] Sent": null, // NEEDS TRANSLATION
	"You have no outgoing friend requests pending.": null, // NEEDS TRANSLATION
	"You have 1 outgoing friend request pending.": null, // NEEDS TRANSLATION
	"You have {COUNT} outgoing friend requests pending.": null, // NEEDS TRANSLATION
	"(maximum reached)": null, // NEEDS TRANSLATION
	"[Friends] Received": null, // NEEDS TRANSLATION
	"You have no pending friend requests.": null, // NEEDS TRANSLATION
	"You have 1 incoming friend request pending.": null, // NEEDS TRANSLATION
	"You have {COUNT} incoming friend requests pending.": null, // NEEDS TRANSLATION
	"Use /friends list to view your own list.": null, // NEEDS TRANSLATION
	"{TARGET}'s friends list is not public or they do not have one.": null, // NEEDS TRANSLATION
	"[Friends List] {TARGET}": null, // NEEDS TRANSLATION
	"[Friends] Help": null, // NEEDS TRANSLATION
	"/friend OR /friends OR /friendslist:": null, // NEEDS TRANSLATION
	"[Friends] Settings": null, // NEEDS TRANSLATION
	"Friends Settings:": null, // NEEDS TRANSLATION
	"Enable": null, // NEEDS TRANSLATION
	"Disable": null, // NEEDS TRANSLATION
	"Notify me when my friends come online:": null, // NEEDS TRANSLATION
	"Receive friend requests:": null, // NEEDS TRANSLATION
	"Allow others to see your list:": null, // NEEDS TRANSLATION
	"Hide": null, // NEEDS TRANSLATION
	"Allow": null, // NEEDS TRANSLATION
	"Allow friends to see my login times:": null, // NEEDS TRANSLATION
	"Allow friends to see my hidden battles on the spectator list:": null, // NEEDS TRANSLATION
	"Block PMs except from friends (and staff):": null, // NEEDS TRANSLATION
	"Block challenges except from friends (and staff):": null, // NEEDS TRANSLATION
	"[Friends] Spectating": null, // NEEDS TRANSLATION
	"Spectate your friends:": null, // NEEDS TRANSLATION
	"Use the <a roomid=\"view-friends-settings\">settings page</a> to disallow your friends from seeing your hidden battles on this page.": null, // NEEDS TRANSLATION
	"Use the <a roomid=\"view-friends-settings\">settings page</a> to allow your friends to see your hidden battles on this page.": null, // NEEDS TRANSLATION
	"You have no friends to spectate.": null, // NEEDS TRANSLATION
	"None of your friends are currently around to spectate.": null, // NEEDS TRANSLATION
	"None of your friends are currently in a battle.": null, // NEEDS TRANSLATION
	"Rated: {RATING}": null, // NEEDS TRANSLATION
	"(with {FRIEND})": null, // NEEDS TRANSLATION
	"[Friends] All Friends": null, // NEEDS TRANSLATION
	"Sorry! The database process crashed. We've been notified and will fix this.": null, // NEEDS TRANSLATION
	"You are at the maximum number of friends.": null, // NEEDS TRANSLATION
	"You are already friends with {USER}.": null, // NEEDS TRANSLATION
	"You have already sent a friend request to {USER}.": null, // NEEDS TRANSLATION
	"{USER} has already sent you a friend request. Use \"/friends view received\" to accept it.": null, // NEEDS TRANSLATION
	"You already have {MAX} pending friend requests. Use \"/friends view sent\" to see your outgoing requests and \"/friends view received\" to see your incoming requests.": null, // NEEDS TRANSLATION
	"Note: If this request is accepted, your friend will be notified when you come online, and you will be notified when they do, unless you opt out of receiving them.": null, // NEEDS TRANSLATION
	"{USER} sent you a friend request!": null, // NEEDS TRANSLATION
	"(You can also stop this user from sending you friend requests with <code>/ignore</code>)": null, // NEEDS TRANSLATION
	"You can't friend yourself.": null, // NEEDS TRANSLATION
	"{USER} is not a registered account, and cannot be friended.": null, // NEEDS TRANSLATION
	"{USER} is blocking friend requests.": null, // NEEDS TRANSLATION
	"This user is blocking PMs, and cannot be friended right now.": null, // NEEDS TRANSLATION
	"Invalid sender username.": null, // NEEDS TRANSLATION
	"Invalid receiver username.": null, // NEEDS TRANSLATION
	"Invalid usernames supplied.": null, // NEEDS TRANSLATION
	"You do not have {USER} friended.": null, // NEEDS TRANSLATION
	"/htmlbox [message] - Displays a message, parsing HTML code contained.": null, // NEEDS TRANSLATION
	"!htmlbox [message] - Shows everyone a message, parsing HTML code contained. Requires: * # ~": null, // NEEDS TRANSLATION
	"/addhtmlbox [message] - Shows everyone a message, parsing HTML code contained. Requires: * # ~": null, // NEEDS TRANSLATION
	"Group '{rank}' does not exist.": null, // NEEDS TRANSLATION
	"/addrankhtmlbox [rank], [message] - Shows everyone with the specified rank or higher a message, parsing HTML code contained. Requires: * # ~": null, // NEEDS TRANSLATION
	"/adduhtml [name], [message] - Shows everyone a message that can change, parsing HTML code contained.  Requires: * # ~": null, // NEEDS TRANSLATION
	"/changeuhtml [name], [message] - Changes the message previously shown with /adduhtml [name]. Requires: * # ~": null, // NEEDS TRANSLATION
	"/addrankuhtml [rank], [name], [message] - Shows everyone with the specified rank or higher a message that can change, parsing HTML code contained.  Requires: * # ~": null, // NEEDS TRANSLATION
	"/changerankuhtml [rank], [name], [message] - Changes the message previously shown with /addrankuhtml [rank], [name]. Requires: * # ~": null, // NEEDS TRANSLATION
	"Specify a source username to take the color from. Name must be <19 characters.": null, // NEEDS TRANSLATION
	"Specify a valid name to set a new color for. Names must be <19 characters.": null, // NEEDS TRANSLATION
	"The loginserver is currently disabled.": null, // NEEDS TRANSLATION
	"<username>{userid}</username>'s namecolor was successfully updated to match '<username>{source}</username>'.": null, // NEEDS TRANSLATION
	"Refresh your browser for it to take effect.": null, // NEEDS TRANSLATION
	"{userid}'s namecolor was removed.": null, // NEEDS TRANSLATION
	"/setnamecolor OR /snc [username], [source name] - Set [username]'s name color to match the [source name]'s color.": null, // NEEDS TRANSLATION
	"Requires: ~": null, // NEEDS TRANSLATION
	"/deletenamecolor OR /dnc [username] - Remove [username]'s namecolor.": null, // NEEDS TRANSLATION
	"/pminfobox [user], [html]- PMs an [html] infobox to [user]. Requires * # ~": null, // NEEDS TRANSLATION
	"/pmuhtml [user], [name], [html] - PMs [html] that can change to [user]. Requires * # ~": null, // NEEDS TRANSLATION
	"/pmuhtmlchange [user], [name], [html] - Changes html that was previously PMed to [user] to [html]. Requires * # ~": null, // NEEDS TRANSLATION
	"{targetUsername} [offline/misspelled]": null, // NEEDS TRANSLATION
	"{targetUser.name} [locked]": null, // NEEDS TRANSLATION
	"{targetUser.name} [not in room / blocking PMs]": null, // NEEDS TRANSLATION
	"Closed the bot page {pageid} for {successList}.": null, // NEEDS TRANSLATION
	"Unable to close the bot page for {errorList}.": null, // NEEDS TRANSLATION
	"Sent {successList} the selector {selector} on the bot page {pageid}.": null, // NEEDS TRANSLATION
	"Sent {successList} the bot page {pageid}.": null, // NEEDS TRANSLATION
	"Unable to send the bot page {pageid} to {errorList}.": null, // NEEDS TRANSLATION
	"/sendhtmlpage [userid], [pageid], [html] - Sends [userid] the bot page [pageid] with the content [html]. Requires: * # ~": null, // NEEDS TRANSLATION
	"/changehtmlpageselector [userid], [pageid], [selector], [html] - Sends [userid] the content [html] for the selector [selector] on the bot page [pageid]. Requires: * # ~": null, // NEEDS TRANSLATION
	"/closehtmlpage [userid], [pageid], - Closes the bot page [pageid] for [userid]. Requires: * # ~": null, // NEEDS TRANSLATION
	"This user is currently locked, so you cannot send them highlights.": null, // NEEDS TRANSLATION
	"{title} [from {user.name}]": null, // NEEDS TRANSLATION
	"Sent a highlight to {targetUser.name} on the bot page {pageid}.": null, // NEEDS TRANSLATION
	"/highlighthtmlpage [userid], [pageid], [title], [optional highlight] - Sends a highlight to [userid] if they're viewing the bot page [pageid].": null, // NEEDS TRANSLATION
	"If a [highlight] is specified, only highlights them if they have that term on their highlight list.": null, // NEEDS TRANSLATION
	"{targetUser.name} [not in room]": null, // NEEDS TRANSLATION
	"[Private from {senderName}]": null, // NEEDS TRANSLATION
	"Sent private HTML to {successList}.": null, // NEEDS TRANSLATION
	"Unable to send private HTML to {errorList}.": null, // NEEDS TRANSLATION
	"/sendprivatehtmlbox [userid], [html] - Sends [userid] the private [html]. Requires: * # ~": null, // NEEDS TRANSLATION
	"/sendprivateuhtml [userid], [name], [html] - Sends [userid] the private [html] that can change. Requires: * # ~": null, // NEEDS TRANSLATION
	"/changeprivateuhtml [userid], [name], [html] - Changes the message previously sent with /sendprivateuhtml [userid], [name], [html]. Requires: * # ~": null, // NEEDS TRANSLATION
	"The user \"{targetUser.name}\" is not a bot in this room.": null, // NEEDS TRANSLATION
	"/botmsg [username], [message] - Send a private message to a bot without feedback. For room bots, must use in the room the bot is auth in.": null, // NEEDS TRANSLATION
	"Command \"/{target}\" is in an invalid format.": null, // NEEDS TRANSLATION
	"Command \"/{target}\" not found.": null, // NEEDS TRANSLATION
	"Command \"/{target}\" is already disabled": null, // NEEDS TRANSLATION
	"/disablecommand [command] - Disables the given [command]. Requires: ~": null, // NEEDS TRANSLATION
	"This command has been replaced by /datacenter add": null, // NEEDS TRANSLATION
	"/disableladder - Ladder is already disabled.": null, // NEEDS TRANSLATION
	"Due to technical difficulties, the ladder has been temporarily disabled.": null, // NEEDS TRANSLATION
	"Rated games will no longer update the ladder. It will be back momentarily.": null, // NEEDS TRANSLATION
	"/disableladder - Stops all rated battles from updating the ladder. Requires: ~": null, // NEEDS TRANSLATION
	"/enable - Ladder is already enabled.": null, // NEEDS TRANSLATION
	"The ladder is now back.": null, // NEEDS TRANSLATION
	"Rated games will update the ladder now..": null, // NEEDS TRANSLATION
	"/enable - Allows all rated games to update the ladder. Requires: ~": null, // NEEDS TRANSLATION
	"1 command are disabled right now.": null, // NEEDS TRANSLATION
	"{disabledCommands.length} commands are disabled right now.": null, // NEEDS TRANSLATION
	"Be aware that restarting will re-enable them.": null, // NEEDS TRANSLATION
	"Currently disabled: {disabledList}": null, // NEEDS TRANSLATION
	"/lockdown - locks down the server, which prevents new battles from starting so that the server can eventually be restarted. Requires: ~": null, // NEEDS TRANSLATION
	"The server is already set to automatically kill itself upon the final battle finishing.": null, // NEEDS TRANSLATION
	"The server is already set to not automatically kill itself upon the final battle finishing.": null, // NEEDS TRANSLATION
	"/autolockdownkill on - Turns on the setting to enable the server to automatically kill itself upon the final battle finishing. Requires ~": null, // NEEDS TRANSLATION
	"/autolockdownkill off - Turns off the setting to enable the server to automatically kill itself upon the final battle finishing. Requires ~": null, // NEEDS TRANSLATION
	"/prelockdown - Prevents new tournaments from starting so that the server can be restarted. Requires: ~": null, // NEEDS TRANSLATION
	"/slowlockdown - Locks down the server, but disables the automatic restart after all battles end.": null, // NEEDS TRANSLATION
	"We're not under lockdown right now.": null, // NEEDS TRANSLATION
	"/crashfixed - There is no active crash.": null, // NEEDS TRANSLATION
	"We fixed the crash without restarting the server!": null, // NEEDS TRANSLATION
	"The server restart was canceled.": null, // NEEDS TRANSLATION
	"Preparation for the server shutdown was canceled.": null, // NEEDS TRANSLATION
	"/endlockdown - Cancels the server restart and takes the server out of lockdown state. Requires: ~": null, // NEEDS TRANSLATION
	"/crashfixed - Ends the active lockdown caused by a crash without the need of a restart. Requires: ~": null, // NEEDS TRANSLATION
	"We're already in emergency mode.": null, // NEEDS TRANSLATION
	"The server has entered emergency mode. Some features might be disabled or limited.": null, // NEEDS TRANSLATION
	"/emergency - Turns on emergency mode and enables extra logging. Requires: ~": null, // NEEDS TRANSLATION
	"We're not in emergency mode.": null, // NEEDS TRANSLATION
	"The server is no longer in emergency mode.": null, // NEEDS TRANSLATION
	"/endemergency - Turns off emergency mode. Requires: ~": null, // NEEDS TRANSLATION
	"The server is not under lockdown right now.": null, // NEEDS TRANSLATION
	"Total remaining rated battles: <b>{battleRooms.length}</b>": null, // NEEDS TRANSLATION
	"View all battles": null, // NEEDS TRANSLATION
	"(Private)": null, // NEEDS TRANSLATION
	"/remainingbattles - View a list of the remaining battles during lockdown. Requires: ~": null, // NEEDS TRANSLATION
	"Saving battles...": null, // NEEDS TRANSLATION
	"DONE.": null, // NEEDS TRANSLATION
	"{count} battles saved.": null, // NEEDS TRANSLATION
	"For safety reasons, using /kill without saving battles can only be done during lockdown.": null, // NEEDS TRANSLATION
	"Wait for /updateserver to finish before using /kill.": null, // NEEDS TRANSLATION
	"The server is restarting soon.": null, // NEEDS TRANSLATION
	"While battles are being saved, no more can be started. If you're in a battle, it will be paused during saving.": null, // NEEDS TRANSLATION
	"After the restart, you will be able to resume your battles from where you left off.": null, // NEEDS TRANSLATION
	"/kill - kills the server. Use the argument `nosave` to prevent the saving of battles.": null, // NEEDS TRANSLATION
	" If this argument is used, the server must be in lockdown. Requires: ~": null, // NEEDS TRANSLATION
	"Are you sure you wish to refresh the page for every user online?": null, // NEEDS TRANSLATION
	"If you are sure, please type /refreshpage again to confirm.": null, // NEEDS TRANSLATION
	"/refreshpage - refreshes the page for every user online. Requires: ~": null, // NEEDS TRANSLATION
	"/editbattle - This is not a battle room.": null, // NEEDS TRANSLATION
	"/editbattle hp [player], [pokemon], [hp]": null, // NEEDS TRANSLATION
	"/editbattle status [player], [pokemon], [status]": null, // NEEDS TRANSLATION
	"/editbattle pp [player], [pokemon], [move], [pp]": null, // NEEDS TRANSLATION
	"/editbattle boost [player], [pokemon], [stat], [amount]": null, // NEEDS TRANSLATION
	"/editbattle volatile [player], [pokemon], [volatile]": null, // NEEDS TRANSLATION
	"/editbattle sidecondition [player], [sidecondition]": null, // NEEDS TRANSLATION
	"/editbattle fieldcondition [fieldcondition]": null, // NEEDS TRANSLATION
	"/editbattle weather [weather]": null, // NEEDS TRANSLATION
	"/editbattle terrain [terrain]": null, // NEEDS TRANSLATION
	"/editbattle reseed [optional seed]": null, // NEEDS TRANSLATION
	"Short forms: /ebat h OR s OR pp OR b OR v OR sc OR fc OR w OR t": null, // NEEDS TRANSLATION
	"[player] must be a username or number, [pokemon] must be species name or party slot number (not nickname), [move] must be move name.": null, // NEEDS TRANSLATION
	"The page ID specified is too long.": null, // NEEDS TRANSLATION
	"The bot \"{bot}\" is not available.": null, // NEEDS TRANSLATION
	"\"{bot}\" is not a bot.": null, // NEEDS TRANSLATION
	"Custom avatars start with '#', like '#splxraiders'.": null, // NEEDS TRANSLATION
	"Custom avatars look like 'example.png'. Custom avatars should be put in `config/avatars/`. Your server must be registered for custom avatars to work.": null, // NEEDS TRANSLATION
	"Avatar \"{avatar}\" is not in a valid format.": null, // NEEDS TRANSLATION
	"Avatar \"{avatar}\" doesn't exist.": null, // NEEDS TRANSLATION
	"Avatar \"{avatar}\" is an official avatar that all users already have access to.": null, // NEEDS TRANSLATION
	"You have a new custom avatar!": null, // NEEDS TRANSLATION
	"Use {avatarsButton} for usage instructions.": null, // NEEDS TRANSLATION
	"Unrecognized avatar - make sure you're on the right account?": null, // NEEDS TRANSLATION
	"/avatar [avatar name or number] - Change your trainer sprite.": null, // NEEDS TRANSLATION
	"!avatar [avatar name or number] - Show the specified trainer sprite and credits. Requires: + % @ # ~": null, // NEEDS TRANSLATION
	"Custom avatars from account <strong>{id}</strong>:": null, // NEEDS TRANSLATION
	"User <strong>{targetId}</strong> doesn't have any custom avatars.": null, // NEEDS TRANSLATION
	"Custom avatars require you to be a contributor/staff or win a tournament prize.": null, // NEEDS TRANSLATION
	"change your avatar": null, // NEEDS TRANSLATION
	"Options": null, // NEEDS TRANSLATION
	"full list of avatars": null, // NEEDS TRANSLATION
	"[avatar's name]": null, // NEEDS TRANSLATION
	"You can {changeButton} by clicking on it in the {optionsButton} menu in the upper right.": null, // NEEDS TRANSLATION
	"Avatars from generations other than 4-5 are hidden.": null, // NEEDS TRANSLATION
	"You can find them in this {fullList}.": null, // NEEDS TRANSLATION
	"You can use them by typing {avatarCommand} into any chat.": null, // NEEDS TRANSLATION
	"For example, {exampleCommand}.": null, // NEEDS TRANSLATION
	"/avatars - Explains how to change avatars.": null, // NEEDS TRANSLATION
	"/avatars [username] - Shows custom avatars available to a user.": null, // NEEDS TRANSLATION
	"!avatars - Show everyone that information. Requires: + % @ # ~": null, // NEEDS TRANSLATION
	"Is this a personal avatar or a group avatar?": null, // NEEDS TRANSLATION
	"/personalavatar [username], [avatar] - Gives a user a default (personal) avatar.": null, // NEEDS TRANSLATION
	"/groupavatar [username], [avatar] - Gives a user an allowed (group) avatar.": null, // NEEDS TRANSLATION
	"/removeavatar [username], [avatar] - Removes access to an avatar from a user.": null, // NEEDS TRANSLATION
	"/removeavatar [username] - Removes access to all custom avatars from a user.": null, // NEEDS TRANSLATION
	"/moveavatars [oldname], [newname] - Moves access to all custom avatars from oldname to newname.": null, // NEEDS TRANSLATION
	"\"{inputUsername}\" is not a valid username.": null, // NEEDS TRANSLATION
	"User \"{inputUsername}\" can already use avatar \"{avatar}\".": null, // NEEDS TRANSLATION
	"Added to {username}": null, // NEEDS TRANSLATION
	"{inputUsername} doesn't have any custom avatars.": null, // NEEDS TRANSLATION
	"{inputUsername} doesn't have access to avatar \"{avatar}\"": null, // NEEDS TRANSLATION
	"Removed from {username}": null, // NEEDS TRANSLATION
	"You don't have access to avatar \"{target}\"": null, // NEEDS TRANSLATION
	"Unrecognized avatar \"{target}\"": null, // NEEDS TRANSLATION
	"No users currently allowed to use this avatar": null, // NEEDS TRANSLATION
	"That user has no avatars.": null, // NEEDS TRANSLATION
	"Moved {from}'s avatars to '{to}'.": null, // NEEDS TRANSLATION
	"/moveavatars [from user], [to user] - Move all of the custom avatars from [from user] to [to user]. Requires: ~": null, // NEEDS TRANSLATION
	"Invalid username \"{username}\"": null, // NEEDS TRANSLATION
	"Added {userids.length} avatars": null, // NEEDS TRANSLATION
	"Added:": null, // NEEDS TRANSLATION
	"New:": null, // NEEDS TRANSLATION
	"Removed:": null, // NEEDS TRANSLATION
	"No change": null, // NEEDS TRANSLATION
	"Elo rating": null, // NEEDS TRANSLATION
	"/{cmd} - Access denied.": null, // NEEDS TRANSLATION
	"ac": null, // NEEDS TRANSLATION
	"(offline)": null, // NEEDS TRANSLATION
	"Global {groupName} ({targetUser.tempGroup})": null, // NEEDS TRANSLATION
	"Section Leader ({sectionName})": null, // NEEDS TRANSLATION
	"(Pok&eacute;mon Showdown System Operator)": null, // NEEDS TRANSLATION
	"(Unregistered)": null, // NEEDS TRANSLATION
	"Rooms:": null, // NEEDS TRANSLATION
	"(no public rooms)": null, // NEEDS TRANSLATION
	"punished": null, // NEEDS TRANSLATION
	"{desc} as {punishedId}": null, // NEEDS TRANSLATION
	"Previous names:": null, // NEEDS TRANSLATION
	"Alt:": null, // NEEDS TRANSLATION
	"(reason: {reason})": null, // NEEDS TRANSLATION
	"NAMELOCKED:": null, // NEEDS TRANSLATION
	"LOCKED:": null, // NEEDS TRANSLATION
	"IP or host is in a temporary range-lock": null, // NEEDS TRANSLATION
	"host is permanently locked for being a proxy": null, // NEEDS TRANSLATION
	"BATTLEBANNED:": null, // NEEDS TRANSLATION
	"Banned from using groupchats: {bannedId}": null, // NEEDS TRANSLATION
	"Banned from using groupchats": null, // NEEDS TRANSLATION
	"Banned from creating help tickets: {bannedId}": null, // NEEDS TRANSLATION
	"Banned from creating help tickets": null, // NEEDS TRANSLATION
	"Semilocked:": null, // NEEDS TRANSLATION
	"(reason hidden)": null, // NEEDS TRANSLATION
	"shared: {sharedNote}": null, // NEEDS TRANSLATION
	"shared": null, // NEEDS TRANSLATION
	"IP:": null, // NEEDS TRANSLATION
	"IPs:": null, // NEEDS TRANSLATION
	"Host:": null, // NEEDS TRANSLATION
	"Hidden rooms:": null, // NEEDS TRANSLATION
	"Secret rooms:": null, // NEEDS TRANSLATION
	"Recent games:": null, // NEEDS TRANSLATION
	"Room punishments:": null, // NEEDS TRANSLATION
	"{punishDesc} for {expireString}": null, // NEEDS TRANSLATION
	"/whois - Get details on yourself: alts, group, IP address, and rooms.": null, // NEEDS TRANSLATION
	"/whois [username] - Get details on a username: alts (Requires: % @ ~), group, IP address (Requires: @ ~), and rooms.": null, // NEEDS TRANSLATION
	"/offlinewhois - Access denied.": null, // NEEDS TRANSLATION
	"Please enter a valid username.": null, // NEEDS TRANSLATION
	"/checkpunishment - User not found.": null, // NEEDS TRANSLATION
	"This username has no punishments associated with it.": null, // NEEDS TRANSLATION
	"/offlinewhois [username] - Get details on a username without requiring them to be online.": null, // NEEDS TRANSLATION
	"Requires: trusted user. ": null, // NEEDS TRANSLATION
	"{targetUsername1} and {targetUsername2} have no common battles.": null, // NEEDS TRANSLATION
	"Common battles between {targetUsername1} and {targetUsername2}:": null, // NEEDS TRANSLATION
	"/sharedbattles [user1], [user2] - Finds recent battles common to [user1] and [user2]. Requires % @ ~": null, // NEEDS TRANSLATION
	"This command is unavailable in temporary rooms.": null, // NEEDS TRANSLATION
	"/showpunishments - Shows the current punishments in the room. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/showpunishments - Shows the current global punishments. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"You must pass a valid IPv4 IP to /host.": null, // NEEDS TRANSLATION
	"IP {target}: {hostName} [{hostType}]{dnsblMessage}": null, // NEEDS TRANSLATION
	"/host [ip] - Gets the host for a given IP. Requires: % @ ~": null, // NEEDS TRANSLATION
	"The room \"{roomid}\" does not exist.": null, // NEEDS TRANSLATION
	"Users with host {ipOrHost} in the room {targetRoom.title}:": null, // NEEDS TRANSLATION
	"Users with host {ipOrHost}:": null, // NEEDS TRANSLATION
	"Users with IP {ipOrHost} in the room {targetRoom.title}:": null, // NEEDS TRANSLATION
	"Users with IP {ipOrHost}:": null, // NEEDS TRANSLATION
	"Users in IP range {ipOrHost} in the room {targetRoom.title}:": null, // NEEDS TRANSLATION
	"Users in IP range {ipOrHost}:": null, // NEEDS TRANSLATION
	"{ipOrHost} is not a valid IP, IP range, or host.": null, // NEEDS TRANSLATION
	"No users found.": null, // NEEDS TRANSLATION
	"More than 100 users found. Use /ipsearchall for the full list.": null, // NEEDS TRANSLATION
	"/ipsearch [ip|range|host], (room) - Find all users with specified IP, IP range, or host. If a room is provided only users in the room will be shown. Requires: ~": null, // NEEDS TRANSLATION
	"This command must be broadcast:": null, // NEEDS TRANSLATION
	"Both users must be in this room.": null, // NEEDS TRANSLATION
	"{name1} and {name2} are not challenging each other.": null, // NEEDS TRANSLATION
	"{fromName} is challenging {toName} in {formatName}.": null, // NEEDS TRANSLATION
	"!checkchallenges [user1], [user2] - Check if the specified users are challenging each other. Requires: * @ # ~": null, // NEEDS TRANSLATION
	"In PMs, this command can only be used by itself to ignore the person you're talking to: \"/{cmd}\", not \"/{cmdWithTarget}\"": null, // NEEDS TRANSLATION
	"You're using a custom client that doesn't support the ignore command.": null, // NEEDS TRANSLATION
	"/ignore [user] - Ignore the given [user].": null, // NEEDS TRANSLATION
	"'{target}' doesn't match any Pokémon, item, move, ability or nature in Gen {dex.gen}. (Check your spelling?)": null, // NEEDS TRANSLATION
	"'{target}' doesn't match any Pokémon, item, move, ability or nature. (Check your spelling?)": null, // NEEDS TRANSLATION
	"'{target}' has no exact match. Too many approximate matches: {matchNames}": null, // NEEDS TRANSLATION
	"'{target}' has no exact match in Gen {dex.gen}.": null, // NEEDS TRANSLATION
	"'{target}' has no exact match.": null, // NEEDS TRANSLATION
	"Approximate match:": null, // NEEDS TRANSLATION
	"Approximate matches:": null, // NEEDS TRANSLATION
	"{nature.name} nature: +10% {plusStat}, -10% {minusStat}.": null, // NEEDS TRANSLATION
	"{nature.name} nature: No effect.": null, // NEEDS TRANSLATION
	"{name} (level-up{condition})": null, // NEEDS TRANSLATION
	"{name} (level-up with high Friendship{condition})": null, // NEEDS TRANSLATION
	"{name} (level-up holding {evo.evoItem}{condition})": null, // NEEDS TRANSLATION
	"{name} (level-up with {evo.evoMove}{condition})": null, // NEEDS TRANSLATION
	"{name} (trade holding {evo.evoItem})": null, // NEEDS TRANSLATION
	"{name} (trade{condition})": null, // NEEDS TRANSLATION
	"Unknown": null, // NEEDS TRANSLATION
	"Not affected by Gastro Acid": null, // NEEDS TRANSLATION
	"Ignored by Mold Breaker": null, // NEEDS TRANSLATION
	"/data [pokemon/item/move/ability/nature] - Get details on this pokemon/item/move/ability/nature.": null, // NEEDS TRANSLATION
	"/data [pokemon/item/move/ability/nature], Gen [generation number/format name] - Get details on this pokemon/item/move/ability/nature for that generation/format.": null, // NEEDS TRANSLATION
	"!data [pokemon/item/move/ability/nature] - Show everyone these details. Requires: + % @ # ~": null, // NEEDS TRANSLATION
	"<code>/details [Pokémon/item/move/ability/nature]</code>: get additional details on this Pokémon/item/move/ability/nature.": null, // NEEDS TRANSLATION
	"<code>/details [Pokémon/item/move/ability/nature], Gen [generation number]</code>: get details on this Pokémon/item/move/ability/nature in that generation.": null, // NEEDS TRANSLATION
	"You can also append the generation number to <code>/dt</code>; for example, <code>/dt1 Mewtwo</code> gets details on Mewtwo in Gen 1.": null, // NEEDS TRANSLATION
	"<code>/details [Pokémon/item/move/ability/nature], [format]</code>: get details on this Pokémon/item/move/ability/nature in that format.": null, // NEEDS TRANSLATION
	"<code>!details [Pokémon/item/move/ability/nature]</code>: show everyone these details. Requires: + % @ # ~": null, // NEEDS TRANSLATION
	"{searchHTML} isn't a recognized type or Pokemon in Gen {dex.gen}.": null, // NEEDS TRANSLATION
	"{searchHTML} isn't a recognized type or Pokemon.": null, // NEEDS TRANSLATION
	"No Pokémon or type named '{originalSearch}' was found in Gen {dex.gen}. Searching for '{target}' instead.": null, // NEEDS TRANSLATION
	"No Pokémon or type named '{originalSearch}' was found. Searching for '{target}' instead.": null, // NEEDS TRANSLATION
	"Burn": null, // NEEDS TRANSLATION
	"Frozen": null, // NEEDS TRANSLATION
	"Hail damage": null, // NEEDS TRANSLATION
	"Paralysis": null, // NEEDS TRANSLATION
	"Powder moves": null, // NEEDS TRANSLATION
	"Prankster": null, // NEEDS TRANSLATION
	"Sandstorm damage": null, // NEEDS TRANSLATION
	"Toxic": null, // NEEDS TRANSLATION
	"Trapping": null, // NEEDS TRANSLATION
	"{target} (ignoring abilities):": null, // NEEDS TRANSLATION
	"Weaknesses": null, // NEEDS TRANSLATION
	"Resistances": null, // NEEDS TRANSLATION
	"Immunities": null, // NEEDS TRANSLATION
	"/weakness [pokemon] - Provides a Pokémon's resistances, weaknesses, and immunities, ignoring abilities.": null, // NEEDS TRANSLATION
	"/weakness [type 1], [type 2] - Provides a type or type combination's resistances, weaknesses, and immunities, ignoring abilities.": null, // NEEDS TRANSLATION
	"/weakness [pokemon], [type 1], [type 2] - Provides a Pokémon's type and type combination's resistances, weaknesses, and immunities, ignoring abilities.": null, // NEEDS TRANSLATION
	"!weakness [pokemon] - Shows everyone a Pokémon's resistances, weaknesses, and immunities, ignoring abilities. Requires: + % @ # &": null, // NEEDS TRANSLATION
	"!weakness [type 1], [type 2] - Shows everyone a type or type combination's resistances, weaknesses, and immunities, ignoring abilities. Requires: + % @ # &": null, // NEEDS TRANSLATION
	"!weakness [pokemon], [type 1], [type 2] - Shows everyone a Pokémon's type and type combination's resistances, weaknesses, and immunities, ignoring abilities. Requires: + % @ # &": null, // NEEDS TRANSLATION
	"Attacker and defender must be separated with a comma.": null, // NEEDS TRANSLATION
	"{foundData.name} (not counting abilities)": null, // NEEDS TRANSLATION
	"However, Thousand Arrows will be 1x effective on the first hit.": null, // NEEDS TRANSLATION
	"{atkName} is {factor}x effective against {defName}.{additionalInfo}": null, // NEEDS TRANSLATION
	"/effectiveness [attack], [defender] - Provides the effectiveness of a move or type on another type or a Pokémon.": null, // NEEDS TRANSLATION
	"!effectiveness [attack], [defender] - Shows everyone the effectiveness of a move or type on another type or a Pokémon.": null, // NEEDS TRANSLATION
	"The full table cannot be broadcast.": null, // NEEDS TRANSLATION
	"Type or move '{arg}' not found.": null, // NEEDS TRANSLATION
	"Move '{arg}' is not available in Gen {dex.gen}.": null, // NEEDS TRANSLATION
	"No moves using a type table for determining damage were specified.": null, // NEEDS TRANSLATION
	"Specify a maximum of 4 moves or types.": null, // NEEDS TRANSLATION
	"Coverage for {sourceList}:": null, // NEEDS TRANSLATION
	"Super Effective": null, // NEEDS TRANSLATION
	"Neutral": null, // NEEDS TRANSLATION
	"Resists": null, // NEEDS TRANSLATION
	"Thousand Arrows has neutral type effectiveness on Flying-type Pokémon if not already smacked down.": null, // NEEDS TRANSLATION
	"/coverage [move 1], [move 2] ... - Provides the best effectiveness match-up against all defending types for given moves or attacking types": null, // NEEDS TRANSLATION
	"!coverage [move 1], [move 2] ... - Shows this information to everyone.": null, // NEEDS TRANSLATION
	"Adding the parameter 'all' or 'table' will display the information with a table of all type combinations.": null, // NEEDS TRANSLATION
	"Invalid value for level: {argHTML}": null, // NEEDS TRANSLATION
	"Level should be between 1 and 9999.": null, // NEEDS TRANSLATION
	"Invalid value for IVs: {argHTML}": null, // NEEDS TRANSLATION
	"Invalid value for EVs: {argHTML}": null, // NEEDS TRANSLATION
	"The amount of EVs should be between 0 and 255.": null, // NEEDS TRANSLATION
	"Invalid value for modifier: {modifier}": null, // NEEDS TRANSLATION
	"Modifier should be a number between -6 and +6": null, // NEEDS TRANSLATION
	"Invalid value for target real stat: {argHTML}": null, // NEEDS TRANSLATION
	"The target real stat must be greater than 0.": null, // NEEDS TRANSLATION
	"No stat found.": null, // NEEDS TRANSLATION
	"No valid value for base stat possible with given parameters.": null, // NEEDS TRANSLATION
	"No valid EV/IV combination possible with given parameters. Maybe try a different nature?{ev}": null, // NEEDS TRANSLATION
	"Too many parameters given; nothing to calculate.": null, // NEEDS TRANSLATION
	"No valid value for base stat found.": null, // NEEDS TRANSLATION
	"Base {baseStat} HP at level {level} with {iv} IVs, {ev}{natureSign} EVs: <b>{finalStat}</b>.": null, // NEEDS TRANSLATION
	"Base {baseStat} at level {level} with {iv} IVs, {ev}{natureSign} EVs at {boostSign}{modifier}: <b>{finalStat}</b>.": null, // NEEDS TRANSLATION
	"Base {baseStat} at level {level} with {iv} IVs, {ev}{natureSign} EVs: <b>{finalStat}</b>.": null, // NEEDS TRANSLATION
	"/statcalc [level] [base stat] [IVs] [nature] [EVs] [modifier] (only base stat is required) - Calculates what the actual stat of a Pokémon is with the given parameters. For example, '/statcalc lv50 100 30iv positive 252ev scarf' calculates the speed of a base 100 scarfer with HP Ice in Battle Spot, and '/statcalc uninvested 90 neutral' calculates the attack of an uninvested Crobat.": null, // NEEDS TRANSLATION
	"!statcalc [level] [base stat] [IVs] [nature] [EVs] [modifier] (only base stat is required) - Shows this information to everyone.": null, // NEEDS TRANSLATION
	"Inputting 'hp' as an argument makes it use the formula for HP. Instead of giving nature, '+' and '-' can be appended to the EV amount (e.g. 252+ev) to signify a boosting or inhibiting nature.": null, // NEEDS TRANSLATION
	"An actual stat can be given in place of a base stat or EVs. In this case, the minimum base stat or EVs necessary to have that real stat with the given parameters will be determined. For example, '/statcalc 502real 252+ +1' calculates the minimum base speed necessary for a positive natured fully invested scarfer to outspeed": null, // NEEDS TRANSLATION
	"{uptimeDays} day": null, // NEEDS TRANSLATION
	"{uptimeDays} days": null, // NEEDS TRANSLATION
	"{uptimeHours} hour": null, // NEEDS TRANSLATION
	"{uptimeHours} hours": null, // NEEDS TRANSLATION
	"Uptime: <b>{uptimeText}</b>": null, // NEEDS TRANSLATION
	"/uptime - Shows how long the server has been online for.": null, // NEEDS TRANSLATION
	"Server time: <b>{servertime}</b>": null, // NEEDS TRANSLATION
	"/servertime - Shows the current time where the server is.": null, // NEEDS TRANSLATION
	"/groups - Explains what the symbols (like % and @) before people's names mean.": null, // NEEDS TRANSLATION
	"/groups [global|room] - Explains only global or room symbols.": null, // NEEDS TRANSLATION
	"!groups - Shows everyone that information. Requires: + % @ # ~": null, // NEEDS TRANSLATION
	"/punishments - Explains punishments.": null, // NEEDS TRANSLATION
	"!punishments - Show everyone that information. Requires: + % @ # ~": null, // NEEDS TRANSLATION
	"Pok&eacute;mon Showdown is open source:": null, // NEEDS TRANSLATION
	"- Language: mostly TypeScript, a little PHP": null, // NEEDS TRANSLATION
	"- <a href=\"https://github.com/smogon/pokemon-showdown/commits/master\">What's new?</a>": null, // NEEDS TRANSLATION
	"- <a href=\"https://github.com/smogon/pokemon-showdown\">Server source code</a>": null, // NEEDS TRANSLATION
	"- <a href=\"https://github.com/smogon/pokemon-showdown-client\">Client source code</a>": null, // NEEDS TRANSLATION
	"- <a href=\"https://github.com/Zarel/Pokemon-Showdown-Dex\">Dex source code</a>": null, // NEEDS TRANSLATION
	"- <a href=\"https://github.com/smogon/pokemon-showdown-loginserver\">Login server source code</a>": null, // NEEDS TRANSLATION
	"/opensource - Links to PS's source code repository.": null, // NEEDS TRANSLATION
	"!opensource - Show everyone that information. Requires: + % @ # ~": null, // NEEDS TRANSLATION
	"<a href=\"https://www.smogon.com/forums/posts/10715136/\">Pok&eacute;mon Showdown Staff List</a>": null, // NEEDS TRANSLATION
	"/staff - View the staff list.": null, // NEEDS TRANSLATION
	"<a href=\"https://www.smogon.com/forums/forums/209/\">Pok&eacute;mon Showdown Forums</a>": null, // NEEDS TRANSLATION
	"/forums - Links to the PS forums.": null, // NEEDS TRANSLATION
	"/privacypolicy - Displays PS's privacy policy.": null, // NEEDS TRANSLATION
	"<a href=\"https://play.pokemonshowdown.com/suggestions\">Make a suggestion for Pok&eacute;mon Showdown</a>": null, // NEEDS TRANSLATION
	"/suggestions - Links to the place to make suggestions for Pokemon Showdown.": null, // NEEDS TRANSLATION
	"<center><button name=\"saveReplay\"><i class=\"fa fa-upload\"></i> Save Replay</button> &mdash; <a href=\"https://www.smogon.com/forums/threads/3520646/\">Questions</a> &mdash; <a href=\"https://play.pokemonshowdown.com/bugs\">Bug Reports</a></center>": null, // NEEDS TRANSLATION
	"Have a replay showcasing a bug on Pok&eacute;mon Showdown?": null, // NEEDS TRANSLATION
	"- <a href=\"https://www.smogon.com/forums/threads/3520646/\">Questions</a>": null, // NEEDS TRANSLATION
	"- <a href=\"https://play.pokemonshowdown.com/bugs\">Bug Reports</a> (ask in <a href=\"/help\">Help</a> before posting if you're unsure)": null, // NEEDS TRANSLATION
	"/bugs - Links to the various bug reporting services.": null, // NEEDS TRANSLATION
	"<button name=\"openOptions\" class=\"button\"><i style=\"font-size: 16px; vertical-align: -1px\" class=\"fa fa-cog\"></i> Options</button> (The Sound and Options buttons are at the top right, next to your username)": null, // NEEDS TRANSLATION
	"/optionsbutton - Provides a button to the Options menu.": null, // NEEDS TRANSLATION
	"<button name=\"openSounds\" class=\"button\"><i style=\"font-size: 16px; vertical-align: -1px\" class=\"fa fa-volume-up\"></i> Sound</button> (The Sound and Options buttons are at the top right, next to your username)": null, // NEEDS TRANSLATION
	"/soundbutton - Provides a button to the Sounds menu.": null, // NEEDS TRANSLATION
	"New to competitive Pok&eacute;mon?": null, // NEEDS TRANSLATION
	"- <a href=\"https://www.smogon.com/forums/threads/3676132/\">Beginner's Guide to Pok&eacute;mon Showdown</a>": null, // NEEDS TRANSLATION
	"- <a href=\"https://www.smogon.com/dp/articles/intro_comp_pokemon\">An introduction to competitive Pok&eacute;mon</a>": null, // NEEDS TRANSLATION
	"- <a href=\"https://www.smogon.com/sm/articles/sm_tiers\">What do 'OU', 'UU', etc mean?</a>": null, // NEEDS TRANSLATION
	"- <a href=\"https://www.smogon.com/dex/sv/formats/\">What are the rules for each format?</a>": null, // NEEDS TRANSLATION
	"- <a href=\"https://www.smogon.com/sv/articles/clauses\">What is 'Sleep Clause' and other clauses?</a>": null, // NEEDS TRANSLATION
	"- <a href=\"https://www.smogon.com/articles/getting-started\">Next Steps for Competitive Battling</a>": null, // NEEDS TRANSLATION
	"/intro - Provides an introduction to competitive Pokémon.": null, // NEEDS TRANSLATION
	"!intro - Show everyone that information. Requires: + % @ # ~": null, // NEEDS TRANSLATION
	"Welcome to Smogon's official simulator! The <a href=\"https://www.smogon.com/forums/forums/intro_hub\">Information & Resources forum</a> can help you get integrated into the community.": null, // NEEDS TRANSLATION
	"- <a href=\"https://www.smogon.com/forums/threads/3710821/\">Introduction to Smogon</a>": null, // NEEDS TRANSLATION
	"- <a href=\"https://www.smogon.com/forums/threads/3652546/\">Smogon Discord Directory</a>": null, // NEEDS TRANSLATION
	"/smogintro - Provides an introduction to Smogon.": null, // NEEDS TRANSLATION
	"Random Battles damage calculator. (Courtesy of dhelmise &amp; jetou)": null, // NEEDS TRANSLATION
	"Random Battles Damage Calculator": null, // NEEDS TRANSLATION
	"Battle Spot damage calculator. (Courtesy of cant say &amp; LegoFigure11)": null, // NEEDS TRANSLATION
	"Battle Spot Damage Calculator": null, // NEEDS TRANSLATION
	"Pok&eacute;mon Showdown! damage calculator. (Courtesy of Honko, Austin, dhelmise, &amp; jetou)": null, // NEEDS TRANSLATION
	"Damage Calculator": null, // NEEDS TRANSLATION
	"/calc - Provides a link to a damage calculator": null, // NEEDS TRANSLATION
	"/rcalc - Provides a link to the random battles damage calculator": null, // NEEDS TRANSLATION
	"/bsscalc - Provides a link to the Battle Spot damage calculator": null, // NEEDS TRANSLATION
	"!calc - Shows everyone a link to a damage calculator. Requires: + % @ # ~": null, // NEEDS TRANSLATION
	"An introduction to the Create-A-Pok&eacute;mon project:": null, // NEEDS TRANSLATION
	"- <a href=\"https://www.smogon.com/cap/\">CAP project website and description</a>": null, // NEEDS TRANSLATION
	"- <a href=\"https://www.smogon.com/forums/forums/66/\">CAP project discussion forum</a>": null, // NEEDS TRANSLATION
	"- <a href=\"https://www.smogon.com/forums/threads/48782/\">What Pok&eacute;mon have been made?</a>": null, // NEEDS TRANSLATION
	"- <a href=\"https://www.smogon.com/forums/forums/477\">Talk about the metagame here</a>": null, // NEEDS TRANSLATION
	"- <a href=\"https://www.smogon.com/forums/threads/3718107/\">Sample SV CAP teams</a>": null, // NEEDS TRANSLATION
	"/cap - Provides an introduction to the Create-A-Pokémon project.": null, // NEEDS TRANSLATION
	"!cap - Show everyone that information. Requires: + % @ # ~": null, // NEEDS TRANSLATION
	"/battlerules - Provides information on the rules that can be added to tournament and challenge battles.": null, // NEEDS TRANSLATION
	"- <a href=\"https://www.smogon.com/forums/forums/smogon-metagames.725/\">Smogon Metagames</a>": null, // NEEDS TRANSLATION
	"- <a href=\"https://www.smogon.com/forums/threads/3628026/\">Tiering Framework</a>": null, // NEEDS TRANSLATION
	"- <a href=\"https://www.smogon.com/forums/threads/3644714/\">Tiering FAQ</a>": null, // NEEDS TRANSLATION
	"Type /tier <strong>[tier name]</strong> to get details, banlists, and helpful resources like sample teams for any tier!": null, // NEEDS TRANSLATION
	"No matched formats found.": null, // NEEDS TRANSLATION
	"Ruleset": null, // NEEDS TRANSLATION
	"Bans": null, // NEEDS TRANSLATION
	"Unbans": null, // NEEDS TRANSLATION
	"Restricted": null, // NEEDS TRANSLATION
	"Banlist/Ruleset": null, // NEEDS TRANSLATION
	"No ruleset found for {format.name}": null, // NEEDS TRANSLATION
	"This format has no resources linked on its <a href=\"https://www.smogon.com/dex/{dexGenID}/formats/\">Smogon Dex page</a>.": null, // NEEDS TRANSLATION
	"Please contact a <a href=\"https://www.smogon.com/forums/forums/757/\">C&amp;C Leader</a> to resolve this.": null, // NEEDS TRANSLATION
	"Alternatively, if this format can't have a page on the Smogon Dex, message <username>dhelmise</username>.": null, // NEEDS TRANSLATION
	"/formathelp [format] - Provides information on the given [format].": null, // NEEDS TRANSLATION
	"If no format is given, provides information on how tiers work.": null, // NEEDS TRANSLATION
	"The server is restarting. Things to know:": null, // NEEDS TRANSLATION
	"- We wait a few minutes before restarting so people can finish up their battles": null, // NEEDS TRANSLATION
	"- The restart itself will take around 0.6 seconds": null, // NEEDS TRANSLATION
	"- Your ladder ranking and teams will not change": null, // NEEDS TRANSLATION
	"- We are restarting to update Pok&eacute;mon Showdown to a newer version": null, // NEEDS TRANSLATION
	"This is not a room you can set the rules of.": null, // NEEDS TRANSLATION
	"'{target}' is both a room and a tier.": null, // NEEDS TRANSLATION
	"If you were looking for rules of that room, use /roomrules [room].": null, // NEEDS TRANSLATION
	"Otherwise, use /tier [tiername].": null, // NEEDS TRANSLATION
	"{possibleRoom.title}'s rules:": null, // NEEDS TRANSLATION
	"None set.": null, // NEEDS TRANSLATION
	"Error: Room rules link is too long (must be under 150 characters). You can use a URL shortener to shorten the link.": null, // NEEDS TRANSLATION
	"This room does not have rules set to remove.": null, // NEEDS TRANSLATION
	"/rules - Show links to room rules and global rules.": null, // NEEDS TRANSLATION
	"!rules - Show everyone links to room rules and global rules. Requires: + % @ # ~": null, // NEEDS TRANSLATION
	"/rules [url] - Change the room rules URL. Requires: # ~": null, // NEEDS TRANSLATION
	"/rules remove - Removes a room rules URL. Requires: # ~": null, // NEEDS TRANSLATION
	"Until an email server for Pokemon Showdown is set up, <b>it is no longer possible to reset the password for your account</b>": null, // NEEDS TRANSLATION
	"'{target}' is an invalid FAQ.": null, // NEEDS TRANSLATION
	"/faq [topic] - Provides a link that answers the FAQ topic. List of FAQ topics: autoconfirmed, badges, customavatar, decay, ladder, lostpassword, privacy, proxy, rng, staff, tiers, tournaments.": null, // NEEDS TRANSLATION
	"!faq [topic] - Shows to other users a link that answers the FAQ topic. List of FAQ topics: autoconfirmed, badges, customavatar, decay, ladder, lostpassword, privacy, proxy, rng, staff, tiers, tournaments. Requires: + % @ # ~": null, // NEEDS TRANSLATION
	"{pokemon.name} did not exist in {genName}!": null, // NEEDS TRANSLATION
	"Triples formats are not an available format in Pok&eacute;mon generation {genName}.": null, // NEEDS TRANSLATION
	"<a href=\"{analysisURL}\">{genName} {formatHTML} {pokemonHTML} analysis</a>, brought to you by <a href=\"https://www.smogon.com\">Smogon University</a>": null, // NEEDS TRANSLATION
	"Other languages:": null, // NEEDS TRANSLATION
	"<a href=\"https://www.smogon.com/dex/{generation}/items/{item.id}\">{genName} {item.name} item analysis</a>, brought to you by <a href=\"https://www.smogon.com\">Smogon University</a>": null, // NEEDS TRANSLATION
	"<a href=\"https://www.smogon.com/dex/{generation}/abilities/{ability.id}\">{genName} {ability.name} ability analysis</a>, brought to you by <a href=\"https://www.smogon.com\">Smogon University</a>": null, // NEEDS TRANSLATION
	"<a href=\"https://www.smogon.com/dex/{generation}/moves/{moveId}\">{genName} {move.name} move analysis</a>, brought to you by <a href=\"https://www.smogon.com\">Smogon University</a>": null, // NEEDS TRANSLATION
	"<a href=\"{analysisURL}\">{genName} {formatHTML} format analysis</a>, brought to you by <a href=\"https://www.smogon.com\">Smogon University</a>": null, // NEEDS TRANSLATION
	"Pok&eacute;mon, item, move, ability, or format not found for generation {genName}.": null, // NEEDS TRANSLATION
	"/analysis [pokemon], [generation], [format] - Links to the Smogon University analysis for this Pokémon in the given generation.": null, // NEEDS TRANSLATION
	"!analysis [pokemon], [generation], [format] - Shows everyone this link. Requires: + % @ # ~": null, // NEEDS TRANSLATION
	"{pokemon.name} is not a real Pokémon.": null, // NEEDS TRANSLATION
	"<a href=\"{link}\">{pokemonHTML} in-game information</a>, provided by Bulbapedia": null, // NEEDS TRANSLATION
	"{item.name} is not a real item.": null, // NEEDS TRANSLATION
	"<a href=\"{link}\">{itemHTML} item description</a>, provided by Bulbapedia": null, // NEEDS TRANSLATION
	"{ability.name} is not a real ability.": null, // NEEDS TRANSLATION
	"<a href=\"{link}\">{ability.name} ability description</a>, provided by Bulbapedia": null, // NEEDS TRANSLATION
	"{move.name} is not a real move.": null, // NEEDS TRANSLATION
	"<a href=\"{link}\">{move.name} move description</a>, provided by Bulbapedia": null, // NEEDS TRANSLATION
	"<a href=\"{link}\">Nature descriptions</a>, provided by Bulbapedia": null, // NEEDS TRANSLATION
	"Pok&eacute;mon, item, move, ability, or nature not found.": null, // NEEDS TRANSLATION
	"/bulbapedia [pokemon/item/move/ability/nature] - Links to Bulbapedia wiki page for this pokemon/item/move/ability/nature.": null, // NEEDS TRANSLATION
	"!bulbapedia [pokemon/item/move/ability/nature] - Shows everyone this link. Requires: + % @ # ~": null, // NEEDS TRANSLATION
	"You will be prompted to register upon winning a rated battle. Alternatively, there is a register button in the <button name=\"openOptions\"><i class=\"fa fa-cog\"></i> Options</button> menu in the upper right.": null, // NEEDS TRANSLATION
	"/register - Provides information on how to register.": null, // NEEDS TRANSLATION
	"The amount of dice rolled should be a natural number up to {maxDice}.": null, // NEEDS TRANSLATION
	"The specified offset must be an integer up to {Number.MAX_SAFE_INTEGER}.": null, // NEEDS TRANSLATION
	"More than one dice should be rolled before removing outliers.": null, // NEEDS TRANSLATION
	"Rolled dice must have a natural amount of faces up to {Number.MAX_SAFE_INTEGER}.": null, // NEEDS TRANSLATION
	"The maximum sum of rolled dice must be lower or equal than {Number.MAX_SAFE_INTEGER}.": null, // NEEDS TRANSLATION
	"Rolling (1 to {diceFaces}){offsetFragment}: {rollSum}": null, // NEEDS TRANSLATION
	"Sum{offsetFragment} except highest: {rollSum}": null, // NEEDS TRANSLATION
	"Sum{offsetFragment} except lowest: {rollSum}": null, // NEEDS TRANSLATION
	"Sum{offsetFragment}: {rollSum}": null, // NEEDS TRANSLATION
	"{diceQuantity} rolls (1 to {diceFaces}){rollsFragment}": null, // NEEDS TRANSLATION
	"/dice [max number] - Randomly picks a number between 1 and the number you choose.": null, // NEEDS TRANSLATION
	"/dice [number of dice]d[number of sides] - Simulates rolling a number of dice, e.g., /dice 2d4 simulates rolling two 4-sided dice.": null, // NEEDS TRANSLATION
	"/dice [number of dice]d[number of sides][+/-][offset] - Simulates rolling a number of dice and adding an offset to the sum, e.g., /dice 2d6+10: two standard dice are rolled; the result lies between 12 and 22.": null, // NEEDS TRANSLATION
	"/dice [number of dice]d[number of sides]-[H/L] - Simulates rolling a number of dice with removal of extreme values, e.g., /dice 3d8-L: rolls three 8-sided dice; the result ignores the lowest value.": null, // NEEDS TRANSLATION
	"We randomly picked:": null, // NEEDS TRANSLATION
	"/pick [option], [option], ... - Randomly selects an item from a list containing 2 or more elements.": null, // NEEDS TRANSLATION
	"Shuffled:": null, // NEEDS TRANSLATION
	"/shuffle [option], [option], [option], ... - Randomly shuffles a list of 2 or more elements.": null, // NEEDS TRANSLATION
	"/showimage has been deprecated - use /show instead.": null, // NEEDS TRANSLATION
	"Media approvals are disabled in this room.": null, // NEEDS TRANSLATION
	"Use !show instead.": null, // NEEDS TRANSLATION
	"You have a request pending already.": null, // NEEDS TRANSLATION
	"Please provide an actual link (you probably copied the URL wrong?).": null, // NEEDS TRANSLATION
	"Invalid link.": null, // NEEDS TRANSLATION
	"You cannot use filtered words in comments.": null, // NEEDS TRANSLATION
	"You have requested to show the link: {link} (with the comment {comment}).": null, // NEEDS TRANSLATION
	"You have requested to show the link: {link}.": null, // NEEDS TRANSLATION
	"Pending media request!": null, // NEEDS TRANSLATION
	"{user.name} has requested to show media in {room.title}.": null, // NEEDS TRANSLATION
	"{requesterHTML} wants to show {linkHTML}": null, // NEEDS TRANSLATION
	"Comment: {commentHTML}": null, // NEEDS TRANSLATION
	"Approve": null, // NEEDS TRANSLATION
	"/requestshow [link], [comment] - Requests permission to show media in the room.": null, // NEEDS TRANSLATION
	"{userid} has no pending request.": null, // NEEDS TRANSLATION
	"You can't approve your own /show request.": null, // NEEDS TRANSLATION
	"full-size image": null, // NEEDS TRANSLATION
	"Could not get YouTube video": null, // NEEDS TRANSLATION
	"(Requested by {requesterHTML})": null, // NEEDS TRANSLATION
	"/approveshow [user] - Approves the media display request of [user]. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"Your media request was denied.": null, // NEEDS TRANSLATION
	"Media request denied": null, // NEEDS TRANSLATION
	"/denyshow [user] - Denies the media display request of [user]. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/approvallog - View a log of past media approvals in the current room. Requires: ~": null, // NEEDS TRANSLATION
	"/viewapprovals - View a list of users who have requested to show media in the current room.": null, // NEEDS TRANSLATION
	"Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/show cannot be used in temporary rooms.": null, // NEEDS TRANSLATION
	"You are using this command too quickly. Wait a bit and try again.": null, // NEEDS TRANSLATION
	"Specify a Twitch channel.": null, // NEEDS TRANSLATION
	"Watching {channelHTML}...": null, // NEEDS TRANSLATION
	"Please provide an actual link (you probably copied it wrong?).": null, // NEEDS TRANSLATION
	"Invalid image, audio, or video URL.": null, // NEEDS TRANSLATION
	"/show [url] - Shows you an image, audio clip, video file, or YouTube video.": null, // NEEDS TRANSLATION
	"!show [url] - Shows an image, audio clip, video file, or YouTube video to everyone in a chatroom. Requires: whitelist % @ # ~": null, // NEEDS TRANSLATION
	"!rebroadcast ![command] - Bypasses the broadcast cooldown to broadcast a command.": null, // NEEDS TRANSLATION
	"Only autoconfirmed users can use this command.": null, // NEEDS TRANSLATION
	"User '{target}' is unregistered.": null, // NEEDS TRANSLATION
	"less than a day": null, // NEEDS TRANSLATION
	"The user '{target}' registered {regTimeAgo} ago, on the date {regDate}.": null, // NEEDS TRANSLATION
	"/registertime OR /regtime [user] - Find out when [user] registered.": null, // NEEDS TRANSLATION
	"Did you mean: 1. 3.1415926535897932384626... (Decimal)": null, // NEEDS TRANSLATION
	"2. 3.184809493B91866... (Duodecimal)": null, // NEEDS TRANSLATION
	"3. 3.243F6A8885A308D... (Hexadecimal)": null, // NEEDS TRANSLATION
	"How many digits of pi do YOU know? Test it out <a href=\"http://guangcongluo.com/mempi/\">here</a>!": null, // NEEDS TRANSLATION
	"/pi - Displays the first several digits of pi in several notation types.": null, // NEEDS TRANSLATION
	"Your code must be under 8192 characters long!": null, // NEEDS TRANSLATION
	"Invalid code.": null, // NEEDS TRANSLATION
	"!code [code] - Broadcasts code to a room. Accepts multi-line arguments. Requires: + % @ ~ #": null, // NEEDS TRANSLATION
	"/code [code] - Shows you code. Accepts multi-line arguments.": null, // NEEDS TRANSLATION
	"No parameters given.": null, // NEEDS TRANSLATION
	"No format specified.": null, // NEEDS TRANSLATION
	"The format '{format}' does not exist.": null, // NEEDS TRANSLATION
	"Invalid rule or modifier: {name}": null, // NEEDS TRANSLATION
	"Here's the string for your desired rules!": null, // NEEDS TRANSLATION
	"Use <code>/challenge [user],{fullFormat}</code> to challenge someone with it!": null, // NEEDS TRANSLATION
	"Admin commands:": null, // NEEDS TRANSLATION
	"Get help": null, // NEEDS TRANSLATION
	"(no help found)": null, // NEEDS TRANSLATION
	"/adminhelp - Programmatically generates a list of all administrator commands. Requires: ~": null, // NEEDS TRANSLATION
	"/altslog [userid] - View the alternate account history for the given [userid]. Requires: % @ ~": null, // NEEDS TRANSLATION
	"This room has no random topics to select from.": null, // NEEDS TRANSLATION
	"/randtopic - Randomly selects a topic from the room's discussion topic pool and displays it.": null, // NEEDS TRANSLATION
	"/addtopic [target] - Adds the [target] to the pool of random discussion topics. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/removetopic [index] - Removes the topic from the room's topic pool. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/randomtopics - View the discussion topic pool for the current room.": null, // NEEDS TRANSLATION
	"Invalid topic index: {target}. Must be a number.": null, // NEEDS TRANSLATION
	"Topic {topicNumber} not found.": null, // NEEDS TRANSLATION
	"[Alts Log]": null, // NEEDS TRANSLATION
	"Please specify a user to find alternate accounts for.": null, // NEEDS TRANSLATION
	"The alternate account log is currently disabled.": null, // NEEDS TRANSLATION
	"3000 is the maximum number of results from the alternate account log.": null, // NEEDS TRANSLATION
	"The max results must be a real number that is at least one (received \"{rawLimit}\")": null, // NEEDS TRANSLATION
	"Alternate accounts for {target}": null, // NEEDS TRANSLATION
	"{resultCount} found.": null, // NEEDS TRANSLATION
	"Userid": null, // NEEDS TRANSLATION
	"Latest IP": null, // NEEDS TRANSLATION
	"Times Used": null, // NEEDS TRANSLATION
	"[Topics] {room.title}": null, // NEEDS TRANSLATION
	"This room has no discussion topics saved.": null, // NEEDS TRANSLATION
	"Random topics for {room.title} ({topicCount}):": null, // NEEDS TRANSLATION
	"Custom Rules": null, // NEEDS TRANSLATION
	"Custom Rules in challenges and tournaments": null, // NEEDS TRANSLATION
	"Pok&eacute;mon Showdown! supports custom rules in three ways:": null, // NEEDS TRANSLATION
	"Challenging another user, using the command <code>/challenge USERNAME, FORMAT @@@ RULES</code>": null, // NEEDS TRANSLATION
	"Tournaments, using the command <code>/tour rules RULES</code> (see the <a href=\"{tourHelp}\">Tournament command help</a>)": null, // NEEDS TRANSLATION
	"Custom rules on your own server": null, // NEEDS TRANSLATION
	"Bans are just a <code>-</code> followed by the thing you want to ban.": null, // NEEDS TRANSLATION
	"Individual bans": null, // NEEDS TRANSLATION
	"<code>- Arceus</code>: Ban a Pok&eacute;mon (including all formes)": null, // NEEDS TRANSLATION
	"<code>- Arceus-Flying</code> or <code>- Giratina-Altered</code>: Ban a Pok&eacute;mon forme": null, // NEEDS TRANSLATION
	"<code>- Baton Pass</code>: Ban a move/item/ability/etc": null, // NEEDS TRANSLATION
	"Group bans": null, // NEEDS TRANSLATION
	"<code>- OU</code> or <code>- DUU</code>: Ban a tier": null, // NEEDS TRANSLATION
	"<code>- Mega</code> or <code>- CAP</code>: Ban a Pok&eacute;mon category": null, // NEEDS TRANSLATION
	"Complex bans": null, // NEEDS TRANSLATION
	"<code>- Blaziken + Speed Boost</code>: Ban a combination of things in a single Pokemon (you can have a Blaziken, and you can have Speed Boost on the same team, but the Blaziken can't have Speed Boost)": null, // NEEDS TRANSLATION
	"<code>- Drizzle ++ Swift Swim</code>: Ban a combination of things in a team (if any Pokémon on your team have Drizzle, no Pokémon can have Swift Swim)": null, // NEEDS TRANSLATION
	"Using a <code>+</code> instead of a <code>-</code> unbans that category.": null, // NEEDS TRANSLATION
	"<code>+ Blaziken</code>: Unban/unrestrict a Pok&eacute;mon.": null, // NEEDS TRANSLATION
	"More details": null, // NEEDS TRANSLATION
	"Rule Name": null, // NEEDS TRANSLATION
	"Description": null, // NEEDS TRANSLATION
	"Rules, mods, and clauses": null, // NEEDS TRANSLATION
	"The following rules can be added to challenges/tournaments to modify the style of play. Alternatively, already present rules can be removed from formats by preceding the rule name with <code>!</code>": null, // NEEDS TRANSLATION
	"However, some rules, like <code>Obtainable</code>, are made of subrules, that can be individually turned on and off.": null, // NEEDS TRANSLATION
	"No description.": null, // NEEDS TRANSLATION
	"Value rules": null, // NEEDS TRANSLATION
	"Value rules are formatted like [Name] = [value], e.g. \"Force Monotype = Water\" or \"Min Team Size = 4\"": null, // NEEDS TRANSLATION
	"To remove a value rule, use <code>![rule name]</code>.": null, // NEEDS TRANSLATION
	"To override another value rule, use <code>!! [Name] = [new value]</code>. For example, overriding the Min Source Gen on [Gen 8] VGC 2021 from 8 to 3 would look like <code>!! Min Source Gen = 3</code>.": null, // NEEDS TRANSLATION
	"[Format Customizer]": null, // NEEDS TRANSLATION
	"Format customizer": null, // NEEDS TRANSLATION
	"Choose your format:": null, // NEEDS TRANSLATION
	"Continue": null, // NEEDS TRANSLATION
	"Format: {format.name}": null, // NEEDS TRANSLATION
	"User to challenge:": null, // NEEDS TRANSLATION
	"(optional)": null, // NEEDS TRANSLATION
	"Bans/Unbans": null, // NEEDS TRANSLATION
	"Bans are a <code>-</code> followed by the thing you want to ban.": null, // NEEDS TRANSLATION
	"Using a <code>+</code> instead unbans Pokemon.": null, // NEEDS TRANSLATION
	"Bans/Unbans:": null, // NEEDS TRANSLATION
	"(separated by commas)": null, // NEEDS TRANSLATION
	"Clauses": null, // NEEDS TRANSLATION
	"The following rules can be added to challenges/tournaments to modify the style of play.": null, // NEEDS TRANSLATION
	"Alternatively, already present rules can be removed from formats by preceding the rule name with <code>!</code>.": null, // NEEDS TRANSLATION
	"Note that if you do not explicitly check a mod to include it, it will not be included in the final output.": null, // NEEDS TRANSLATION
	"Toggle": null, // NEEDS TRANSLATION
	"Value Rules": null, // NEEDS TRANSLATION
	"Click the \"enabled\" checkbox and fill in a value to enable a rule - uncheck the box to remove the rule.": null, // NEEDS TRANSLATION
	"Enabled:": null, // NEEDS TRANSLATION
	"Value:": null, // NEEDS TRANSLATION
	"Create!": null, // NEEDS TRANSLATION
	"Punishments": null, // NEEDS TRANSLATION
	"Global Punishments": null, // NEEDS TRANSLATION
	"No pending approvals on {room.title}": null, // NEEDS TRANSLATION
	"Pending media requests on {room.title}": null, // NEEDS TRANSLATION
	"Requester ID:": null, // NEEDS TRANSLATION
	"Link:": null, // NEEDS TRANSLATION
	"Comment:": null, // NEEDS TRANSLATION
	"User '{username}' does not exist (the username is too long).": null, // NEEDS TRANSLATION
	"User '{username}' is offline and unrecognized, and so can't be promoted.": null, // NEEDS TRANSLATION
	"User '{username}' is unregistered, and so can't be promoted.": null, // NEEDS TRANSLATION
	"regular user": null, // NEEDS TRANSLATION
	"User '{username}' is already a {groupName} in this room.": null, // NEEDS TRANSLATION
	"Access denied for promoting/demoting {username} from {currentGroupName}.": null, // NEEDS TRANSLATION
	"Access denied for promoting/demoting {username} to {nextGroup.name}.": null, // NEEDS TRANSLATION
	"{username} is locked and can't be promoted.": null, // NEEDS TRANSLATION
	"Locked for a year": null, // NEEDS TRANSLATION
	"/roomowner - This room isn't designed for per-room moderation to be added": null, // NEEDS TRANSLATION
	"This command does not support specifying a reason.": null, // NEEDS TRANSLATION
	"{targetUsername} is already a room owner.": null, // NEEDS TRANSLATION
	"{targetUsername} was appointed Room Owner by {user.name}.": null, // NEEDS TRANSLATION
	"You were appointed Room Owner by {user.name} in {room.roomid}.": null, // NEEDS TRANSLATION
	"/roomowner [username] - Appoints [username] as a room owner. Requires: ~": null, // NEEDS TRANSLATION
	"This command is only available in rooms": null, // NEEDS TRANSLATION
	"Please specify a group such as /roomvoice or /roomdeauth": null, // NEEDS TRANSLATION
	"If you want to promote to a nonexistent group, use /forceroompromote.": null, // NEEDS TRANSLATION
	"Admins can forcepromote to nonexistent groups only if they are one character long": null, // NEEDS TRANSLATION
	"Group '{roomGroup}' does not exist as a room rank.": null, // NEEDS TRANSLATION
	"{targetUser.name} was invited (and promoted to Room {roomGroupName}) by {user.name}.": null, // NEEDS TRANSLATION
	"You were demoted to Room {userGroupName} by {user.name}.": null, // NEEDS TRANSLATION
	"{name} was demoted to Room {roomGroupName} by {user.name}.": null, // NEEDS TRANSLATION
	"You were demoted to Room {userGroupName} by {user.name} in {room.roomid}.": null, // NEEDS TRANSLATION
	"{name} was promoted to {roomGroupName} by {user.name}.": null, // NEEDS TRANSLATION
	"You were promoted to {userGroupName} by {user.name} in {room.roomid}.": null, // NEEDS TRANSLATION
	"{name} was promoted to Room {roomGroupName} by {user.name}.": null, // NEEDS TRANSLATION
	"You were promoted to Room {userGroupName} by {user.name} in {room.roomid}.": null, // NEEDS TRANSLATION
	"/roompromote OR /roomdemote [comma-separated usernames], [group symbol] - Promotes/demotes the user(s) to the specified room rank. Requires: @ # ~": null, // NEEDS TRANSLATION
	"/room[group] [comma-separated usernames] - Promotes/demotes the user(s) to the specified room rank. Requires: @ # ~": null, // NEEDS TRANSLATION
	"/roomdeauth [comma-separated usernames] - Removes all room rank from the user(s). Requires: @ # ~": null, // NEEDS TRANSLATION
	"Use ``/auth +`` to show global voice users.": null, // NEEDS TRANSLATION
	"This server has no global authority.": null, // NEEDS TRANSLATION
	"/auth - Show global staff for the server.": null, // NEEDS TRANSLATION
	"/auth + - Show global staff for the server, including voices.": null, // NEEDS TRANSLATION
	"/auth [room] - Show what roomauth a room has.": null, // NEEDS TRANSLATION
	"/auth [user] - Show what global and roomauth a user has.": null, // NEEDS TRANSLATION
	"To look up auth for a user, use /userauth {target}": null, // NEEDS TRANSLATION
	"Whitelisted (this list is only visible to staff)": null, // NEEDS TRANSLATION
	"{subroomTitle} is a modjoin {modjoinSetting} subroom of {parentTitle}, so {parentUsersTitle} users of rank {minRank} and above also have authority in this room.": null, // NEEDS TRANSLATION
	"{subroomTitle} is a modjoin {modjoinSetting} subroom of {parentTitle}, so {parentUsersTitle} users of rank {minRank} and above have authority in this room.": null, // NEEDS TRANSLATION
	"{subroomTitle} is a subroom of {parentTitle}, so {parentUsersTitle} users also have authority in this room.": null, // NEEDS TRANSLATION
	"{subroomTitle} is a subroom of {parentTitle}, so {parentUsersTitle} users have authority in this room.": null, // NEEDS TRANSLATION
	"The room '{targetRoom.title}' has no auth.": null, // NEEDS TRANSLATION
	"{curRoom.title} is a public room, so global auth with no relevant roomauth will have authority in this room.": null, // NEEDS TRANSLATION
	"{curRoom.title} is a hidden room, so global auth with no relevant roomauth will have authority in this room.": null, // NEEDS TRANSLATION
	"Names in **bold** are online.": null, // NEEDS TRANSLATION
	"{targetRoom.title} room auth:": null, // NEEDS TRANSLATION
	"/roomauth [room] - Shows a list of the staff and authority in the given [room].": null, // NEEDS TRANSLATION
	"If no room is given, it defaults to the current room.": null, // NEEDS TRANSLATION
	"Global auth: {globalGroup}": null, // NEEDS TRANSLATION
	"Section leader: {leaderSection}": null, // NEEDS TRANSLATION
	"Room auth: {roomAuthList}": null, // NEEDS TRANSLATION
	"Hidden room auth: {hiddenRoomAuthList}": null, // NEEDS TRANSLATION
	"Private room auth: {privateRoomAuthList}": null, // NEEDS TRANSLATION
	"No global or room auth.": null, // NEEDS TRANSLATION
	"{targetUsername} user auth:": null, // NEEDS TRANSLATION
	"/userauth [username] - Shows all authority visible to the user for the given [username].": null, // NEEDS TRANSLATION
	"If no username is given, it defaults to the current user.": null, // NEEDS TRANSLATION
	"There are no Section Leaders currently.": null, // NEEDS TRANSLATION
	"/sectionleaders - Shows the current room sections and their section leaders.": null, // NEEDS TRANSLATION
	"To prevent DoS attacks, you can only use /autojoin for 16 or fewer rooms, when you haven't joined any rooms yet. Please use /join for each room separately.": null, // NEEDS TRANSLATION
	"/autojoin [rooms] - Automatically joins all the given rooms.": null, // NEEDS TRANSLATION
	"You can only join 50 rooms at a time.": null, // NEEDS TRANSLATION
	"The room '{target}' does not exist or requires a login to join.": null, // NEEDS TRANSLATION
	"/join [roomname] - Attempt to join the room [roomname].": null, // NEEDS TRANSLATION
	"The room '{target}' does not exist.": null, // NEEDS TRANSLATION
	"/leave - Leave the current room, or a given room.": null, // NEEDS TRANSLATION
	"Warning is unavailable in group chats.": null, // NEEDS TRANSLATION
	"{targetID} was warned by {user.name} while offline.{reasonText}": null, // NEEDS TRANSLATION
	"User {targetUsername} is not in the room {room.roomid}.": null, // NEEDS TRANSLATION
	"The reason is too long. It cannot exceed {MAX_REASON_LENGTH} characters.": null, // NEEDS TRANSLATION
	"You are not allowed to warn upper staff members.": null, // NEEDS TRANSLATION
	"You must wait {remainder} more seconds before you can warn {targetUser.name} again.": null, // NEEDS TRANSLATION
	"{targetUser.name} was warned by {user.name}.{reasonText}": null, // NEEDS TRANSLATION
	"/warn OR /k [username], [reason] - Warns a user showing them the site rules and [reason] in an overlay.": null, // NEEDS TRANSLATION
	"/warn OR /k [username], [reason] spoiler: [private reason] - Warns a user, marking [private reason] only in the modlog.": null, // NEEDS TRANSLATION
	"Users cannot be redirected from private or personal rooms.": null, // NEEDS TRANSLATION
	"Redirects have been deprecated. Instead of /redirect, use <<room links>> or /invite to guide users to the correct room, and punish if users don't cooperate.": null, // NEEDS TRANSLATION
	"Users cannot be redirected to the global room.": null, // NEEDS TRANSLATION
	"The room \"{targetRoom.title}\" is not public.": null, // NEEDS TRANSLATION
	"User {targetUser.name} is already in the room {targetRoom.title}!": null, // NEEDS TRANSLATION
	"You are in the wrong room; please go to <<{targetRoom.roomid}>> instead": null, // NEEDS TRANSLATION
	"{targetUser.name} was redirected to room {targetRoom.title} by {user.name}.": null, // NEEDS TRANSLATION
	"/redirect OR /redir [username], [roomname] - [DEPRECATED]": null, // NEEDS TRANSLATION
	"Attempts to redirect the [username] to the [roomname]. Requires: ~": null, // NEEDS TRANSLATION
	"You are not allowed to mute upper staff members.": null, // NEEDS TRANSLATION
	"{targetUser.name} would be muted by {user.name}  but was already locked.{reasonText}": null, // NEEDS TRANSLATION
	"{targetUser.name} would be muted by {user.name}  but was already muted.{reasonText}": null, // NEEDS TRANSLATION
	"{targetUser.name} would be muted by {user.name}  but was already room banned.{reasonText}": null, // NEEDS TRANSLATION
	"{user.name} has muted you in {room.roomid} for 1 hour. {publicReason}": null, // NEEDS TRANSLATION
	"{user.name} has muted you in {room.roomid} for 7 minutes. {publicReason}": null, // NEEDS TRANSLATION
	"{targetUser.name} was muted by {user.name} for 1 hour.{muteReasonText}": null, // NEEDS TRANSLATION
	"{targetUser.name} was muted by {user.name} for 7 minutes.{muteReasonText}": null, // NEEDS TRANSLATION
	"{targetUser.name}'s ac account: {targetUser.autoconfirmed}": null, // NEEDS TRANSLATION
	"/mute OR /m [username], [reason] - Mutes a user with reason for 7 minutes. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/hourmute OR /hm [username], [reason] - Mutes a user with reason for an hour. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"Your mute in '{room.title}' has been lifted.": null, // NEEDS TRANSLATION
	"{unmutedName} was unmuted by {user.name}.": null, // NEEDS TRANSLATION
	"{notMutedName} is not muted.": null, // NEEDS TRANSLATION
	"/unmute [username] - Removes mute from user. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"You are not allowed to ban upper staff members.": null, // NEEDS TRANSLATION
	"This user is already blacklisted from {room.roomid}.": null, // NEEDS TRANSLATION
	"{name} is a trusted user. If you are sure you would like to ban them, use {forceCommand}.": null, // NEEDS TRANSLATION
	"Use {banCommand}; {name} is not a trusted user.": null, // NEEDS TRANSLATION
	"{name} would be banned by {user.name}  but was already banned.": null, // NEEDS TRANSLATION
	"Trusted user {targetUser.name} {trustedID} was roombanned from {room.roomid} by {user.name}, and should probably be demoted.": null, // NEEDS TRANSLATION
	"{bannerName} has banned you from the room {room.roomid}  and its subrooms for 1 week.": null, // NEEDS TRANSLATION
	"{bannerName} has banned you from the room {room.roomid}  and its subrooms for 2 days.": null, // NEEDS TRANSLATION
	"{bannerName} has banned you from the room {room.roomid}  for 1 week.": null, // NEEDS TRANSLATION
	"{bannerName} has banned you from the room {room.roomid}  for 2 days.": null, // NEEDS TRANSLATION
	"Reason: {reasonHTML}": null, // NEEDS TRANSLATION
	"To appeal the ban, PM the staff member that banned you or a room owner.": null, // NEEDS TRANSLATION
	"List Room Staff": null, // NEEDS TRANSLATION
	"To appeal the ban, PM the staff member that banned you.": null, // NEEDS TRANSLATION
	"{name} was banned for 1 week from {room.title} by {user.name}.{reasonText}": null, // NEEDS TRANSLATION
	"{name} was banned for 2 days from {room.title} by {user.name}.{reasonText}": null, // NEEDS TRANSLATION
	"{name}'s  ac account: {acAccount},  banned alts: {alts}": null, // NEEDS TRANSLATION
	"{name}'s  banned alts: {alts}": null, // NEEDS TRANSLATION
	"/ban [username], [reason] - Bans the user from the room you are in. Requires: @ # ~": null, // NEEDS TRANSLATION
	"/weekban [username], [reason] - Bans the user from the room you are in for a week. Requires: @ # ~": null, // NEEDS TRANSLATION
	"{name} was unbanned from {room.title} by {user.name}.": null, // NEEDS TRANSLATION
	"User '{target}' is not banned from this room.": null, // NEEDS TRANSLATION
	"/unban [username] - Unbans the user from the room you are in. Requires: @ # ~": null, // NEEDS TRANSLATION
	"User '{targetUsername}' not found. Use ``{forceCommand}`` if you need to to lock them anyway.": null, // NEEDS TRANSLATION
	"{name} would be locked by {user.name} but was already locked.": null, // NEEDS TRANSLATION
	"{name} was locked by {user.name} and demoted from {demotedFrom}.": null, // NEEDS TRANSLATION
	"{name} is a trusted user. If you are sure you would like to lock them use {forceCommand}.": null, // NEEDS TRANSLATION
	"Use /lock; {name} is not a trusted user and is online.": null, // NEEDS TRANSLATION
	"{name} was locked from talking for a week by {user.name}.{reasonText}": null, // NEEDS TRANSLATION
	"{name} was locked from talking for a month by {user.name}.{reasonText}": null, // NEEDS TRANSLATION
	"{name} was locked from talking by {user.name}.{reasonText}": null, // NEEDS TRANSLATION
	"{name}'s  ac account: {acAccount},  locked alts: {alts}": null, // NEEDS TRANSLATION
	"{name}'s  locked alts: {alts}": null, // NEEDS TRANSLATION
	"{lockerName} has locked you from talking in chats, battles, and PMing regular users for a week": null, // NEEDS TRANSLATION
	"{lockerName} has locked you from talking in chats, battles, and PMing regular users for a month": null, // NEEDS TRANSLATION
	"{lockerName} has locked you from talking in chats, battles, and PMing regular users": null, // NEEDS TRANSLATION
	"Appeal your punishment": null, // NEEDS TRANSLATION
	"If you feel that your lock was unjustified, you can {appealButton}.": null, // NEEDS TRANSLATION
	"If you feel that your lock was unjustified, you can appeal: {appealLink}.": null, // NEEDS TRANSLATION
	"Your lock will expire in a few days.": null, // NEEDS TRANSLATION
	"Locked user {name} has public roomauth ({roomauthList}), and should probably be demoted.": null, // NEEDS TRANSLATION
	"/lock OR /l [username], [reason] - Locks the user from talking in all chats. Requires: % @ ~": null, // NEEDS TRANSLATION
	"/weeklock OR /wl [username], [reason] - Same as /lock, but locks users for a week.": null, // NEEDS TRANSLATION
	"/lock OR /l [username], [reason] spoiler: [private reason] - Marks [private reason] in modlog only.": null, // NEEDS TRANSLATION
	"User {targetUser.name} is namelocked, not locked. Use /unnamelock to unnamelock them.": null, // NEEDS TRANSLATION
	"{unlockedNames} were unlocked by {user.name}.{reason}": null, // NEEDS TRANSLATION
	"{unlockedNames} was unlocked by {user.name}.{reason}": null, // NEEDS TRANSLATION
	"{user.name} has unlocked you.": null, // NEEDS TRANSLATION
	"User '{target}' is not locked.": null, // NEEDS TRANSLATION
	"You cannot unlock the guest userid - provide their original username instead.": null, // NEEDS TRANSLATION
	"This name isn't locked.": null, // NEEDS TRANSLATION
	"\"{userid}\" was specifically locked by a staff member (check the global modlog). Use /unlock if you really want to unlock this name.": null, // NEEDS TRANSLATION
	"The name '{target}' was unlocked by {user.name}.": null, // NEEDS TRANSLATION
	"Please enter a valid IP address.": null, // NEEDS TRANSLATION
	"{target} is not a locked/banned IP or IP range.": null, // NEEDS TRANSLATION
	"{user.name} unlocked the IP range: {target}": null, // NEEDS TRANSLATION
	"{user.name} unlocked the IP: {target}": null, // NEEDS TRANSLATION
	"/unlockip [ip] - Unlocks a punished ip while leaving the original punishment intact. Requires: @ ~": null, // NEEDS TRANSLATION
	"/unlockname [name] - Unlocks a punished alt, leaving the original lock intact. Requires: % @ ~": null, // NEEDS TRANSLATION
	"/unlock [username] - Unlocks the user. Requires: % @ ~": null, // NEEDS TRANSLATION
	"/unlockname [username] - Unlocks a punished alt while leaving the original punishment intact. Requires: % @ ~": null, // NEEDS TRANSLATION
	"User '{targetUsername}' not found. Use /forceglobalban to ban them anyway.": null, // NEEDS TRANSLATION
	"Global bans require a reason.": null, // NEEDS TRANSLATION
	"{name} was globally banned by {user.name} and demoted from {demotedFrom}.": null, // NEEDS TRANSLATION
	"{name} is a trusted user. If you are sure you would like to ban them use /forceglobalban.": null, // NEEDS TRANSLATION
	"Globally banned user {name} has public roomauth ({roomauthList}), and should probably be demoted.": null, // NEEDS TRANSLATION
	"{user.name} has globally banned you.": null, // NEEDS TRANSLATION
	"If you feel that your ban was unjustified, you can appeal:": null, // NEEDS TRANSLATION
	"Your ban will expire in a few days.": null, // NEEDS TRANSLATION
	"{name} was globally banned by {user.name}.{reasonText}": null, // NEEDS TRANSLATION
	"{name}'s ac account: {acAccount},  banned alts: {alts}": null, // NEEDS TRANSLATION
	"[{guests} guests]": null, // NEEDS TRANSLATION
	"/globalban OR /gban [username], [reason] - Kick user from all rooms and ban user's IP address with reason. Requires: @ ~": null, // NEEDS TRANSLATION
	"/globalban OR /gban [username], [reason] spoiler: [private reason] - Marks [private reason] in modlog only.": null, // NEEDS TRANSLATION
	"User '{target}' is not globally banned.": null, // NEEDS TRANSLATION
	"{name} was globally unbanned by {user.name}.": null, // NEEDS TRANSLATION
	"/unglobalban [username] - Unban a user. Requires: @ ~": null, // NEEDS TRANSLATION
	"Room does not have roomauth.": null, // NEEDS TRANSLATION
	"THIS WILL DEROOMVOICE ALL ROOMVOICED USERS.": null, // NEEDS TRANSLATION
	"To confirm, use: /deroomvoiceall confirm": null, // NEEDS TRANSLATION
	"This room has zero roomvoices": null, // NEEDS TRANSLATION
	"All {count} roomvoices have been cleared by {user.name}.": null, // NEEDS TRANSLATION
	"/deroomvoiceall - Devoice all roomvoiced users. Requires: # ~": null, // NEEDS TRANSLATION
	"{user.name} banned the IP {target} from opening tickets for a year{reasonText}": null, // NEEDS TRANSLATION
	"{user.name} banned the IP range {target} from opening tickets for a year{reasonText}": null, // NEEDS TRANSLATION
	"{user.name} banned {target} from opening tickets for a year{reasonText}": null, // NEEDS TRANSLATION
	"/yearticketban [IP/userid] - Ban an IP or a userid from opening tickets for a year. ": null, // NEEDS TRANSLATION
	"Accepts wildcards to ban ranges. Requires: ~": null, // NEEDS TRANSLATION
	"/banip requires a ban reason": null, // NEEDS TRANSLATION
	"The IP range {ip} is already temporarily banned.": null, // NEEDS TRANSLATION
	"The IP {ip} is already temporarily banned.": null, // NEEDS TRANSLATION
	"You year-banned the IP range {ip}.": null, // NEEDS TRANSLATION
	"You year-banned the IP {ip}.": null, // NEEDS TRANSLATION
	"You hour-banned the IP range {ip}.": null, // NEEDS TRANSLATION
	"You hour-banned the IP {ip}.": null, // NEEDS TRANSLATION
	"{user.name} year-banned the IP range {ip}: {reason}": null, // NEEDS TRANSLATION
	"{user.name} year-banned the IP {ip}: {reason}": null, // NEEDS TRANSLATION
	"{user.name} hour-banned the IP range {ip}: {reason}": null, // NEEDS TRANSLATION
	"{user.name} hour-banned the IP {ip}: {reason}": null, // NEEDS TRANSLATION
	"/banip [ip] OR /yearbanip [ip] - Globally bans this IP or IP range for an hour. Accepts wildcards to ban ranges.": null, // NEEDS TRANSLATION
	"Existing users on the IP will not be banned. Requires: ~": null, // NEEDS TRANSLATION
	"{user.name} unbanned the IP range: {target}": null, // NEEDS TRANSLATION
	"{user.name} unbanned the IP: {target}": null, // NEEDS TRANSLATION
	"/unbanip [ip] - Unbans. Accepts wildcards to ban ranges. Requires: ~": null, // NEEDS TRANSLATION
	"Invalid userid.": null, // NEEDS TRANSLATION
	"That user is registered. Either permalock them normally or use /forceyearlockname.": null, // NEEDS TRANSLATION
	"{user.name} locked the userid '{targetUserid}' for a year{reasonText}.": null, // NEEDS TRANSLATION
	"/lockip requires a lock reason": null, // NEEDS TRANSLATION
	"The IP range {ip} is already temporarily locked.": null, // NEEDS TRANSLATION
	"The IP {ip} is already temporarily locked.": null, // NEEDS TRANSLATION
	"{user.name} year-namelocked the IP range {ip}: {reason}": null, // NEEDS TRANSLATION
	"{user.name} year-namelocked the IP {ip}: {reason}": null, // NEEDS TRANSLATION
	"{user.name} hour-namelocked the IP range {ip}: {reason}": null, // NEEDS TRANSLATION
	"{user.name} hour-namelocked the IP {ip}: {reason}": null, // NEEDS TRANSLATION
	"{user.name} year-locked the IP range {ip}: {reason}": null, // NEEDS TRANSLATION
	"{user.name} year-locked the IP {ip}: {reason}": null, // NEEDS TRANSLATION
	"{user.name} hour-locked the IP range {ip}: {reason}": null, // NEEDS TRANSLATION
	"{user.name} hour-locked the IP {ip}: {reason}": null, // NEEDS TRANSLATION
	"/lockip [ip] - Globally locks this IP or IP range for an hour. Accepts wildcards to ban ranges.": null, // NEEDS TRANSLATION
	"/yearlockip [ip] - Globally locks this IP or IP range for one year. Accepts wildcards to ban ranges.": null, // NEEDS TRANSLATION
	"/yearnamelockip [ip] - Namelocks this IP or IP range for one year. Accepts wildcards to ban ranges.": null, // NEEDS TRANSLATION
	"The note is too long. It cannot exceed {MAX_REASON_LENGTH} characters.": null, // NEEDS TRANSLATION
	"{user.name} notes: {target}": null, // NEEDS TRANSLATION
	"/modnote <note> - Adds a moderator note that can be read through modlog. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/modnote [<userid>] <note> - Adds a moderator note to a user's modlog that can be read through modlog. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"Please specify a group such as /globalvoice or /globaldeauth": null, // NEEDS TRANSLATION
	"Did you mean \"{globalCommand}\"?": null, // NEEDS TRANSLATION
	"Did you mean \"{roomCommand}\" or \"{globalCommand}\"?": null, // NEEDS TRANSLATION
	"Group '{nextGroup}' does not exist as a global rank.": null, // NEEDS TRANSLATION
	"User '{name}' is already a {shownGroupName}": null, // NEEDS TRANSLATION
	"{command} - Access denied for promoting from {currentGroup}": null, // NEEDS TRANSLATION
	"You can only promote to/from: {jurisdiction}": null, // NEEDS TRANSLATION
	"{command} - Access denied for promoting to {shownGroupName}": null, // NEEDS TRANSLATION
	"/globalpromote - WARNING: '{name}' is offline and unrecognized. The username might be misspelled (either by you or the person who told you) or unregistered. Use /forcepromote if you're sure you want to risk it.": null, // NEEDS TRANSLATION
	"{name} was demoted to Global {roomGroupName} by {user.name}.": null, // NEEDS TRANSLATION
	"You were demoted to Global {userGroupName} by {user.name}.": null, // NEEDS TRANSLATION
	"{name} was promoted to Global {roomGroupName} by {user.name}.": null, // NEEDS TRANSLATION
	"You were promoted to Global {userGroupName} by {user.name}.": null, // NEEDS TRANSLATION
	"/promote [username], [group] - Promotes the user to the specified group. Requires: ~": null, // NEEDS TRANSLATION
	"User '{name}' is trusted indirectly through global rank {currentGroup}. Demote them from that rank to remove trusted status.": null, // NEEDS TRANSLATION
	"User '{name}' is trusted indirectly through room ranks {trustedSourceRooms}. Demote them from those ranks to remove trusted status.": null, // NEEDS TRANSLATION
	"User '{name}' is not trusted.": null, // NEEDS TRANSLATION
	"{name} was set to no longer be a trusted user by {user.name}.": null, // NEEDS TRANSLATION
	"User '{name}' is offline. Use {forceCommand} if you're sure.": null, // NEEDS TRANSLATION
	"User '{name}' is already trusted.": null, // NEEDS TRANSLATION
	"User '{name}' has a global rank higher than trusted.": null, // NEEDS TRANSLATION
	"{name} was set as a trusted user by {user.name}.": null, // NEEDS TRANSLATION
	"/trustuser [username] - Trusts the user (makes them immune to locks). Requires: ~": null, // NEEDS TRANSLATION
	"/untrustuser [username] - Removes the trusted user status from the user. Requires: ~": null, // NEEDS TRANSLATION
	"{name} is already a Section Leader of {leaderSection}.": null, // NEEDS TRANSLATION
	"{name} is not a Section Leader.": null, // NEEDS TRANSLATION
	"{name} was appointed Section Leader of {roomSection} by {user.name}.": null, // NEEDS TRANSLATION
	"You were appointed Section Leader of {userSection} by {user.name}.": null, // NEEDS TRANSLATION
	"{name} was demoted from Section Leader of {roomSection} by {user.name}.": null, // NEEDS TRANSLATION
	"They are also no longer manually trusted. If they should be, use '/trustuser'.": null, // NEEDS TRANSLATION
	"You were demoted from Section Leader of {userSection} by {user.name}.": null, // NEEDS TRANSLATION
	"/sectionleader [target user], [sectionid] - Appoints [target user] Section Leader.": null, // NEEDS TRANSLATION
	"/desectionleader [target user] - Demotes [target user] from Section Leader.": null, // NEEDS TRANSLATION
	"Valid sections: {validSections}": null, // NEEDS TRANSLATION
	"If you want to change which section someone leads, demote them and then re-promote them in the desired section.": null, // NEEDS TRANSLATION
	"/demote [username], [group] - Demotes the user to the specified group. Requires: ~": null, // NEEDS TRANSLATION
	"/forcepromote - Don't forcepromote unless you have to.": null, // NEEDS TRANSLATION
	"Declares should not exceed 2000 characters.": null, // NEEDS TRANSLATION
	"{room.title} announcement!": null, // NEEDS TRANSLATION
	"/declare [message] - Anonymously announces a message. Requires: # * ~": null, // NEEDS TRANSLATION
	"/htmldeclare [message] - Anonymously announces a message using safe HTML. Requires: # * ~": null, // NEEDS TRANSLATION
	"/globaldeclare [message] - Anonymously sends a private message to all the users on the site. Requires: ~": null, // NEEDS TRANSLATION
	"/cdeclare [message] - Anonymously announces a message to all chatrooms on the server. Requires: ~": null, // NEEDS TRANSLATION
	"/announce OR /wall [message] - Makes an announcement. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"{room.title} {groupName}+ message!": null, // NEEDS TRANSLATION
	"{room.title} message!": null, // NEEDS TRANSLATION
	"notification from {user.name}": null, // NEEDS TRANSLATION
	"Notifications should not exceed 300 characters.": null, // NEEDS TRANSLATION
	"/notifyrank [rank], [title], [message], [highlight] - Sends a notification to users who are [rank] or higher (and highlight on [highlight], if specified). Requires: # * ~": null, // NEEDS TRANSLATION
	"/notifyoffrank [rank] - Closes the notification previously sent with /notifyrank [rank]. Requires: # * ~": null, // NEEDS TRANSLATION
	"Closed the notification previously sent to {targetUser.name}.": null, // NEEDS TRANSLATION
	"{room.title} notification!": null, // NEEDS TRANSLATION
	"Sent a notification to {targetUser.name}.": null, // NEEDS TRANSLATION
	"/notifyuser [username], [title], [message] - Sends a notification to [user]. Requires: # * ~": null, // NEEDS TRANSLATION
	"/notifyoffuser [user] - Closes the notification previously sent with /notifyuser [user]. Requires: # * ~": null, // NEEDS TRANSLATION
	"User has already changed their name to '{targetUserInexact.name}'.": null, // NEEDS TRANSLATION
	"User '{inputUsername}' not found. (use /offlineforcerename to rename anyway.)": null, // NEEDS TRANSLATION
	"That name is blocked from being forcerenamed.": null, // NEEDS TRANSLATION
	"Use /noforcerename remove to remove it from the list if you wish to rename it.": null, // NEEDS TRANSLATION
	"{user.name} considers your name inappropriate{reasonText}": null, // NEEDS TRANSLATION
	"{renamedName} was forced to choose a new name by {user.name}{reasonText}": null, // NEEDS TRANSLATION
	"{renamedName} was forced to choose a new name by {user.name} while offline{reasonText}": null, // NEEDS TRANSLATION
	"{nameHTML} {rankHTML} was forced to choose a new name by {renamerHTML}{reasonHTML}": null, // NEEDS TRANSLATION
	"{nameHTML} {rankHTML} was forced to choose a new name by {renamerHTML} while offline{reasonHTML}": null, // NEEDS TRANSLATION
	"/forcerename OR /fr [username], [reason] - Forcibly change a user's name and shows them the [reason]. Requires: % @ ~": null, // NEEDS TRANSLATION
	"/allowname [username] - Unmarks a forcerenamed username, stopping staff from being notified when it is used. Requires % @ ~": null, // NEEDS TRANSLATION
	"{targetUsername} is already on the noforcerename list.": null, // NEEDS TRANSLATION
	"{user.name} added the name {targetId} to the no forcerename list.{reasonText}": null, // NEEDS TRANSLATION
	"{targetUsername} is not on the noforcerename list.": null, // NEEDS TRANSLATION
	"{user.name} removed {targetId} from the no forcerename list.{reasonText}": null, // NEEDS TRANSLATION
	"/noforcerename add OR /nfr add [username] - Adds [username] to the list of users who can't be forcerenamed by staff.": null, // NEEDS TRANSLATION
	"/noforcerename remove OR /nfr remove [username] - Removes [username] from the list of users who can't be forcerenamed by staff.": null, // NEEDS TRANSLATION
	"{user.name} has cleared your status message for being inappropriate: {reason}": null, // NEEDS TRANSLATION
	"{user.name} has cleared your status message for being inappropriate.": null, // NEEDS TRANSLATION
	"User '{targetUsername}' not found. Use ``{forceCommand}`` if you need to namelock them anyway.": null, // NEEDS TRANSLATION
	"{inputUsername} has already changed their name to {targetUser.name}. To namelock anyway, use {forceCommand}.": null, // NEEDS TRANSLATION
	"User '{targetUser.name}' is already namelocked.": null, // NEEDS TRANSLATION
	"User '{userid}' is already normally locked for more than 2 days.": null, // NEEDS TRANSLATION
	"Use /weeknamelock to namelock them instead, so you don't decrease the existing punishment.": null, // NEEDS TRANSLATION
	"If you really need to override this, use /forcenamelock.": null, // NEEDS TRANSLATION
	"{namelockedName} was weeknamelocked by {user.name}{reasonText}": null, // NEEDS TRANSLATION
	"{namelockedName} was namelocked by {user.name}{reasonText}": null, // NEEDS TRANSLATION
	"Namelocked user {userid} has public roomauth ({roomauthList}), and should probably be demoted.": null, // NEEDS TRANSLATION
	"{user.name} has locked your name and you can't change names anymore{reasonText}": null, // NEEDS TRANSLATION
	"/namelock OR /nl [user], [reason] - Name locks a [user] and shows the [reason]. Requires: % @ ~": null, // NEEDS TRANSLATION
	"User '{target}' is not namelocked.": null, // NEEDS TRANSLATION
	"{unlocked} was unnamelocked by {user.name}.{reason}": null, // NEEDS TRANSLATION
	"{user.name} has unnamelocked you.": null, // NEEDS TRANSLATION
	"/unnamelock [username] - Unnamelocks the user. Requires: % @ ~": null, // NEEDS TRANSLATION
	"Your reason was a number; use /hidelines if you wanted to clear a specific number of lines, or /forcehidetext if you really wanted your reason to be a number.": null, // NEEDS TRANSLATION
	"You must specify a number of messages to clear. To clear all messages, use /hidetext.": null, // NEEDS TRANSLATION
	"User {name} not found or has no roomlogs.": null, // NEEDS TRANSLATION
	"You can't specify a line count when using /hidealtstext.": null, // NEEDS TRANSLATION
	"{name}'s alts messages were cleared from {room.title} by {user.name}.{reasonText}": null, // NEEDS TRANSLATION
	"{lineCount} of {name}'s messages were cleared from {room.title} by {user.name}.{reasonText}": null, // NEEDS TRANSLATION
	"{name}'s messages were cleared from {room.title} by {user.name}.{reasonText}": null, // NEEDS TRANSLATION
	"/hidetext [username], [optional reason] - Removes a user's messages from chat, with an optional reason. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/hidealtstext [username], [optional reason] - Removes a user's messages and their alternate accounts' messages from the chat, with an optional reason.  Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/hidelines [username], [number], [optional reason] - Removes the [number] most recent messages from a user, with an optional reason. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"Use /cleartext, /clearaltstext, and /clearlines to remove messages without displaying a button to reveal them.": null, // NEEDS TRANSLATION
	"You're looking for /showbl": null, // NEEDS TRANSLATION
	"If you want to blacklist an offline account by name (not IP), consider /blacklistname": null, // NEEDS TRANSLATION
	"This room is not going to last long enough for a blacklist to matter - just ban the user": null, // NEEDS TRANSLATION
	"This user is already blacklisted from this room.": null, // NEEDS TRANSLATION
	"{targetUser.name} is a trusted user. If you are sure you would like to blacklist them use /forceblacklist.": null, // NEEDS TRANSLATION
	"Use /blacklist; {targetUser.name} is not a trusted user.": null, // NEEDS TRANSLATION
	"Blacklists require a reason.": null, // NEEDS TRANSLATION
	"Trusted user {targetUser.name}{trustedID} was blacklisted from {room.roomid} by {user.name}, and should probably be demoted.": null, // NEEDS TRANSLATION
	"{blacklisterName} has blacklisted you from the room {room.roomid} and its subrooms. Reason: {reasonHTML}": null, // NEEDS TRANSLATION
	"{blacklisterName} has blacklisted you from the room {room.roomid}. Reason: {reasonHTML}": null, // NEEDS TRANSLATION
	"To appeal the ban, PM the staff member that blacklisted you.": null, // NEEDS TRANSLATION
	"To appeal the ban, PM the staff member that blacklisted you or a room owner.": null, // NEEDS TRANSLATION
	"{name} was blacklisted from {room.title} by {user.name} for ten years.{reasonText}": null, // NEEDS TRANSLATION
	"{name} was blacklisted from {room.title} by {user.name}.{reasonText}": null, // NEEDS TRANSLATION
	"{name}'s  ac account: {acAccount}, blacklisted alts: {alts}": null, // NEEDS TRANSLATION
	"{name}'s  blacklisted alts: {alts}": null, // NEEDS TRANSLATION
	"/blacklist [username], [reason] - Blacklists the user from the room you are in for a year. Requires: # ~": null, // NEEDS TRANSLATION
	"/permablacklist OR /permabl - blacklist a user for 10 years. Requires: # ~": null, // NEEDS TRANSLATION
	"/unblacklist [username] - Unblacklists the user from the room you are in. Requires: # ~": null, // NEEDS TRANSLATION
	"/showblacklist OR /showbl - show a list of blacklisted users in the room. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/expiringblacklists OR /expiringbls - show a list of blacklisted users from the room whose blacklists are expiring in 3 months or less. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"Battle bans require a reason.": null, // NEEDS TRANSLATION
	"Battle bans require a battle replay if used outside of a battle; if the battle has expired, use /forcebattleban.": null, // NEEDS TRANSLATION
	"Battlebans have been deprecated. Alternatives:": null, // NEEDS TRANSLATION
	"- timerstalling and bragging about it: lock": null, // NEEDS TRANSLATION
	"- other timerstalling: they're not timerstalling, leave them alone": null, // NEEDS TRANSLATION
	"- bad nicknames: lock, locks prevent nicknames from appearing; you should always have been locking for this": null, // NEEDS TRANSLATION
	"- ladder cheating: gban, get a moderator if necessary": null, // NEEDS TRANSLATION
	"- serious ladder cheating: permaban, get an administrator": null, // NEEDS TRANSLATION
	"- other: get an administrator": null, // NEEDS TRANSLATION
	"User '{targetUser.name}' is already banned from battling.": null, // NEEDS TRANSLATION
	"{targetUser.name} was banned from starting new battles by {user.name} ({reason})": null, // NEEDS TRANSLATION
	"Trusted user {targetUser.name} was banned from battling by {user.name}, and should probably be demoted.": null, // NEEDS TRANSLATION
	"{user.name} has prevented you from starting new battles for 2 days ({reason})": null, // NEEDS TRANSLATION
	"/battleban [username], [reason] - [DEPRECATED]": null, // NEEDS TRANSLATION
	"Prevents the user from starting new battles for 2 days and shows them the [reason]. Requires: ~": null, // NEEDS TRANSLATION
	"{unbanned} was allowed to battle again by {user.name}.": null, // NEEDS TRANSLATION
	"{user.name} has allowed you to battle again.": null, // NEEDS TRANSLATION
	"User {target} is not banned from battling.": null, // NEEDS TRANSLATION
	"/unbattleban [username] - [DEPRECATED] Allows a user to battle again. Requires: % @ ~": null, // NEEDS TRANSLATION
	"/groupchatban has been deprecated.": null, // NEEDS TRANSLATION
	"For future groupchat misuse, lock the creator, it will take away their trusted status and their ability to make groupchats.": null, // NEEDS TRANSLATION
	"User '{targetUser.name}' is already banned from using groupchats.": null, // NEEDS TRANSLATION
	"{targetUser.name} was banned from using groupchats for a month by {user.name}{reasonText}.": null, // NEEDS TRANSLATION
	"{targetUser.name} was banned from using groupchats for a week by {user.name}{reasonText}.": null, // NEEDS TRANSLATION
	"Trusted user {targetUser.name} was banned from using groupchats by {user.name}, and should probably be demoted.": null, // NEEDS TRANSLATION
	"{user.name} has banned you from using groupchats for a month{reasonText}": null, // NEEDS TRANSLATION
	"{user.name} has banned you from using groupchats for a week{reasonText}": null, // NEEDS TRANSLATION
	"reason: {reason}": null, // NEEDS TRANSLATION
	"This groupchat ({targetRoom.title}) has been deleted due to inappropriate conduct by its creator, {targetUser.name}.": null, // NEEDS TRANSLATION
	"Do not attempt to recreate it, or you may be punished.": null, // NEEDS TRANSLATION
	"/groupchatban [user], [optional reason]": null, // NEEDS TRANSLATION
	"/monthgroupchatban [user], [optional reason]": null, // NEEDS TRANSLATION
	"Bans the user from joining or creating groupchats for a week (or month). Requires: % @ ~": null, // NEEDS TRANSLATION
	"{unbanned} was ungroupchatbanned by {user.name}.": null, // NEEDS TRANSLATION
	"{user.name} has allowed you to use groupchats again.": null, // NEEDS TRANSLATION
	"User {target} is not banned from using groupchats.": null, // NEEDS TRANSLATION
	"/ungroupchatban [user] - Allows a groupchatbanned user to use groupchats again. Requires: % @ ~": null, // NEEDS TRANSLATION
	"Usage: /blacklistname name1, name2, ... | reason": null, // NEEDS TRANSLATION
	"[{duplicateList}] are already blacklisted.": null, // NEEDS TRANSLATION
	"[{duplicateList}] is already blacklisted.": null, // NEEDS TRANSLATION
	"User '{userid}' is not a valid userid.": null, // NEEDS TRANSLATION
	"/blacklistname - Access denied: {userid} is of equal or higher authority than you.": null, // NEEDS TRANSLATION
	"Trusted user {userid}{trustedID} was nameblacklisted from {room.roomid} by {user.name}, and should probably be demoted.": null, // NEEDS TRANSLATION
	"{targetList} were nameblacklisted from {room.title} by {user.name} for ten years.": null, // NEEDS TRANSLATION
	"{targetList} were nameblacklisted from {room.title} by {user.name}.": null, // NEEDS TRANSLATION
	"{targetList} was nameblacklisted from {room.title} by {user.name} for ten years.": null, // NEEDS TRANSLATION
	"{targetList} was nameblacklisted from {room.title} by {user.name}.": null, // NEEDS TRANSLATION
	"/blacklistname OR /nameblacklist [name1, name2, etc.] | reason - Blacklists all name(s) from the room you are in for a year. Requires: # ~": null, // NEEDS TRANSLATION
	"/permablacklistname [name1, name2, etc.] | reason - Blacklists all name(s) from the room you are in for 10 years. Requires: # ~": null, // NEEDS TRANSLATION
	"{name} was unblacklisted by {user.name}.": null, // NEEDS TRANSLATION
	"User '{target}' is not blacklisted.": null, // NEEDS TRANSLATION
	"THIS WILL UNBLACKLIST ALL BLACKLISTED USERS IN THIS ROOM.": null, // NEEDS TRANSLATION
	"To confirm, use: /unblacklistall confirm": null, // NEEDS TRANSLATION
	"No users are currently blacklisted in this room to unblacklist.": null, // NEEDS TRANSLATION
	"All blacklists in this room have been lifted by {user.name}.": null, // NEEDS TRANSLATION
	"Unblacklisted users: {unblacklistedList}": null, // NEEDS TRANSLATION
	"/unblacklistall - Unblacklists all blacklisted users in the current room. Requires: # ~": null, // NEEDS TRANSLATION
	"This room does not support blacklists.": null, // NEEDS TRANSLATION
	"This room has no blacklisted users.": null, // NEEDS TRANSLATION
	"Blacklist for {roomTitle} (expiring within 3 months):": null, // NEEDS TRANSLATION
	"Blacklist for {roomTitle}:": null, // NEEDS TRANSLATION
	"for {expiresDays} days": null, // NEEDS TRANSLATION
	"for {expiresDays} day": null, // NEEDS TRANSLATION
	", alts/ips: {altList}": null, // NEEDS TRANSLATION
	", alts: {altList}": null, // NEEDS TRANSLATION
	"Official": null, // NEEDS TRANSLATION
	"Battle formats": null, // NEEDS TRANSLATION
	"Languages": null, // NEEDS TRANSLATION
	"Entertainment": null, // NEEDS TRANSLATION
	"Gaming": null, // NEEDS TRANSLATION
	"Life & hobbies": null, // NEEDS TRANSLATION
	"On-site games": null, // NEEDS TRANSLATION
	"This command cannot be used in battle rooms.": null, // NEEDS TRANSLATION
	"Room Settings for {roomTitle}": null, // NEEDS TRANSLATION
	"/roomsettings - Shows current room settings with buttons to change them (if you can).": null, // NEEDS TRANSLATION
	"OFF": null, // NEEDS TRANSLATION
	"Moderated chat is currently set to: {modchatSetting}": null, // NEEDS TRANSLATION
	"/modchat - Access denied.": null, // NEEDS TRANSLATION
	"/modchat - Access denied for changing a setting currently at {room.settings.modchat}.": null, // NEEDS TRANSLATION
	"This battle is required to have modchat on due to one of the players having a username that starts with {prefix}.": null, // NEEDS TRANSLATION
	"The rank '{target}' was unrecognized as a modchat level.": null, // NEEDS TRANSLATION
	"/modchat - Access denied for setting to {target}.": null, // NEEDS TRANSLATION
	"off": null, // NEEDS TRANSLATION
	"Modchat is already set to {modchatSetting}.": null, // NEEDS TRANSLATION
	"Moderated chat was disabled!": null, // NEEDS TRANSLATION
	"Anyone may talk now.": null, // NEEDS TRANSLATION
	"Moderated chat was set to {modchatSetting}!": null, // NEEDS TRANSLATION
	"Only users of rank {modchatSetting} and higher can talk.": null, // NEEDS TRANSLATION
	"{user.name} set modchat to {newModchat}": null, // NEEDS TRANSLATION
	"/modchat [off/autoconfirmed/trusted/+/%/@/*/player/#/~] - Set the level of moderated chat. Requires: % ☆ for off/autoconfirmed/+/player options, * @ # ~ for all the options": null, // NEEDS TRANSLATION
	"This room has automodchat OFF.": null, // NEEDS TRANSLATION
	"Automodchat is currently set to set modchat to {curRank} after {curTime} minutes.": null, // NEEDS TRANSLATION
	"Auto modchat is not set.": null, // NEEDS TRANSLATION
	"{user.name} turned off automatic modchat.": null, // NEEDS TRANSLATION
	"Invalid rank.": null, // NEEDS TRANSLATION
	"Invalid duration. Choose a number under 480 (in minutes) and over 5 minutes.": null, // NEEDS TRANSLATION
	"{user.name} set automodchat to rank {rank} and timeout {time} minutes.": null, // NEEDS TRANSLATION
	"/automodchat [number], [rank] - Sets modchat [rank] to automatically turn on after [number] minutes with no staff.": null, // NEEDS TRANSLATION
	"[number] must be between 5 and 480. Requires: # ~": null, // NEEDS TRANSLATION
	"/automodchat off - Turns off automodchat.": null, // NEEDS TRANSLATION
	"\"ionext\" is an outdated feature. Hidden battles now have password-protected URLs, making them fully secure against eavesdroppers.": null, // NEEDS TRANSLATION
	"You probably want to switch from /ionext to /hidenext, and from /ioo to /hideroom": null, // NEEDS TRANSLATION
	"\"ioo\" is an outdated feature. Hidden battles now have password-protected URLs, making them fully secure against eavesdroppers.": null, // NEEDS TRANSLATION
	"You probably want to switch from /ioo to /hideroom": null, // NEEDS TRANSLATION
	"/ionext - Access denied.": null, // NEEDS TRANSLATION
	"Your next battle will be publicly visible.": null, // NEEDS TRANSLATION
	"Your next battle will be invite-only, unless it is rated.": null, // NEEDS TRANSLATION
	"Your next battle will be invite-only.": null, // NEEDS TRANSLATION
	"/inviteonlynext - Sets your next battle to be invite-only.": null, // NEEDS TRANSLATION
	"/inviteonlynext off - Sets your next battle to be publicly visible.": null, // NEEDS TRANSLATION
	"/inviteonly [on|off] - Sets modjoin %. Users can't join unless invited with /invite. Requires: # ~": null, // NEEDS TRANSLATION
	"/ioo - Shortcut for /inviteonly on": null, // NEEDS TRANSLATION
	"/inviteonlynext OR /ionext - Sets your next battle to be invite-only.": null, // NEEDS TRANSLATION
	"/ionext off - Sets your next battle to be publicly visible.": null, // NEEDS TRANSLATION
	"SYNC": null, // NEEDS TRANSLATION
	"Modjoin is currently set to: {modjoinSetting}": null, // NEEDS TRANSLATION
	"This battle is required to be public due to a player having a name prefixed by '{prefix}'.": null, // NEEDS TRANSLATION
	"Only the person who set this battle to be invite-only can turn it off.": null, // NEEDS TRANSLATION
	"You can't do this in tournaments where modjoin is prohibited.": null, // NEEDS TRANSLATION
	"Modjoin is already turned off in this room.": null, // NEEDS TRANSLATION
	"This room is no longer invite only!": null, // NEEDS TRANSLATION
	"Anyone may now join.": null, // NEEDS TRANSLATION
	"{user.name} turned off modjoin.": null, // NEEDS TRANSLATION
	"Modjoin is already set to sync modchat in this room.": null, // NEEDS TRANSLATION
	"Moderated join is set to sync with modchat!": null, // NEEDS TRANSLATION
	"Only users who can speak in modchat can join.": null, // NEEDS TRANSLATION
	"{user.name} set modjoin to sync with modchat.": null, // NEEDS TRANSLATION
	"Modjoin is already set to autoconfirmed.": null, // NEEDS TRANSLATION
	"Moderated join is set to autoconfirmed!": null, // NEEDS TRANSLATION
	"Users must be rank autoconfirmed or invited with <code>/invite</code> to join": null, // NEEDS TRANSLATION
	"{user.name} set modjoin to autoconfirmed.": null, // NEEDS TRANSLATION
	"/modjoin - Access denied from setting modjoin past % in battles.": null, // NEEDS TRANSLATION
	"/modjoin - Access denied from setting modjoin past % in group chats.": null, // NEEDS TRANSLATION
	"Modjoin is already set to {target} in this room.": null, // NEEDS TRANSLATION
	"This room is now invite only!": null, // NEEDS TRANSLATION
	"Users must be rank {target} or invited with <code>/invite</code> to join": null, // NEEDS TRANSLATION
	"{user.name} set modjoin to {target}.": null, // NEEDS TRANSLATION
	"Unrecognized modjoin setting.": null, // NEEDS TRANSLATION
	"/modjoin [+|%|@|*|player|~|#|off] - Sets modjoin. Users lower than the specified rank can't join this room unless they have a room rank. Requires: ☆ # ~": null, // NEEDS TRANSLATION
	"/modjoin [sync|off] - Sets modjoin. Only users who can speak in modchat can join this room. Requires: ☆ # ~": null, // NEEDS TRANSLATION
	"This room's primary language is {language}": null, // NEEDS TRANSLATION
	"\"{target}\" is not a supported language.": null, // NEEDS TRANSLATION
	"The room's language has been set to {language}": null, // NEEDS TRANSLATION
	"/roomlanguage [language] - Sets the the language for the room, which changes language of a few commands. Requires # ~": null, // NEEDS TRANSLATION
	"Supported Languages: English, Spanish, Italian, French, Simplified Chinese, Traditional Chinese, Japanese, Hindi, Turkish, Dutch, German.": null, // NEEDS TRANSLATION
	"Slow chat is currently set to: {slowchatSetting}": null, // NEEDS TRANSLATION
	"Slow chat is already disabled in this room.": null, // NEEDS TRANSLATION
	"This room must have at least {SLOWCHAT_USER_REQUIREMENT} users to set slowchat; it only has {room.userCount} right now.": null, // NEEDS TRANSLATION
	"Slow chat is already set to {room.settings.slowchat} seconds in this room.": null, // NEEDS TRANSLATION
	"{user.name} set slowchat to {shownSlowchatSetting}": null, // NEEDS TRANSLATION
	"/slowchat [number] - Sets a limit on how often users in the room can send messages, between 2 and 60 seconds. Requires % @ # ~": null, // NEEDS TRANSLATION
	"/slowchat off - Disables slowchat in the room. Requires % @ # ~": null, // NEEDS TRANSLATION
	"This room does not allow customizing permissions.": null, // NEEDS TRANSLATION
	"{rank} is not a valid rank.": null, // NEEDS TRANSLATION
	"{perm} is not a valid room permission.": null, // NEEDS TRANSLATION
	"/permissions set - You must be at least a Room Owner to set permissions.": null, // NEEDS TRANSLATION
	"/permissions set - You can't set the permission \"{perm}\" because you don't have it.": null, // NEEDS TRANSLATION
	"default": null, // NEEDS TRANSLATION
	"{perm} is already set to {shownRank}.": null, // NEEDS TRANSLATION
	"{user.name} set the required rank for {perm} to {displayRank}.": null, // NEEDS TRANSLATION
	"/permissions set [command], [rank symbol] - sets the required permission to use the command [command] to [rank]. Requires: # ~": null, // NEEDS TRANSLATION
	"/permissions clear [command] - resets the required permission to use the command [command] to the default. Requires: # ~": null, // NEEDS TRANSLATION
	"Room permissions help:": null, // NEEDS TRANSLATION
	"Usage:": null, // NEEDS TRANSLATION
	"/permissions set [permission], [rank symbol]": null, // NEEDS TRANSLATION
	"/permissions clear [permission]": null, // NEEDS TRANSLATION
	"Group permissions:": null, // NEEDS TRANSLATION
	"(will affect multiple commands or part of one command)": null, // NEEDS TRANSLATION
	"Single-command permissions:": null, // NEEDS TRANSLATION
	"(will affect one command)": null, // NEEDS TRANSLATION
	"Permissions starting with <code>!</code> are for broadcasting the command, not using it.": null, // NEEDS TRANSLATION
	"Sub-commands:": null, // NEEDS TRANSLATION
	"(will affect one sub-command, like /roomevents view)": null, // NEEDS TRANSLATION
	"This room's stretch filter is currently: ON": null, // NEEDS TRANSLATION
	"This room's stretch filter is currently: OFF": null, // NEEDS TRANSLATION
	"This room's stretch filter is already ON": null, // NEEDS TRANSLATION
	"This room's stretch filter is already OFF": null, // NEEDS TRANSLATION
	"{user.name} turned the stretch filter ON": null, // NEEDS TRANSLATION
	"{user.name} turned the stretch filter OFF": null, // NEEDS TRANSLATION
	"/stretchfilter [on/off] - Toggles filtering messages in the room for stretchingggggggg. Requires # ~": null, // NEEDS TRANSLATION
	"This room's caps filter is currently: ON": null, // NEEDS TRANSLATION
	"This room's caps filter is currently: OFF": null, // NEEDS TRANSLATION
	"This room's caps filter is already ON": null, // NEEDS TRANSLATION
	"This room's caps filter is already OFF": null, // NEEDS TRANSLATION
	"{user.name} turned the caps filter ON": null, // NEEDS TRANSLATION
	"{user.name} turned the caps filter OFF": null, // NEEDS TRANSLATION
	"/capsfilter [on/off] - Toggles filtering messages in the room for EXCESSIVE CAPS. Requires # ~": null, // NEEDS TRANSLATION
	"This room's emoji filter is currently: ON": null, // NEEDS TRANSLATION
	"This room's emoji filter is currently: OFF": null, // NEEDS TRANSLATION
	"This room's emoji filter is already ON": null, // NEEDS TRANSLATION
	"This room's emoji filter is already OFF": null, // NEEDS TRANSLATION
	"{user.name} turned the emoji filter ON": null, // NEEDS TRANSLATION
	"{user.name} turned the emoji filter OFF": null, // NEEDS TRANSLATION
	"/emojifilter [on/off] - Toggles filtering messages in the room for emojis. Requires # ~": null, // NEEDS TRANSLATION
	"This room's link filter is currently: ON": null, // NEEDS TRANSLATION
	"This room's link filter is currently: OFF": null, // NEEDS TRANSLATION
	"This room's link filter is already ON": null, // NEEDS TRANSLATION
	"This room's link filter is already OFF": null, // NEEDS TRANSLATION
	"{user.name} turned the link filter ON": null, // NEEDS TRANSLATION
	"{user.name} turned the link filter OFF": null, // NEEDS TRANSLATION
	"/linkfilter [on/off] - Toggles filtering messages in the room for links. Requires # ~": null, // NEEDS TRANSLATION
	"Regex banwords are only allowed for administrators.": null, // NEEDS TRANSLATION
	"\"{word}\" might be a regular expression, did you mean \"/banword addregex\"?": null, // NEEDS TRANSLATION
	"{word} is already a banned phrase.": null, // NEEDS TRANSLATION
	"This room has too many banned phrases to add the ones given.": null, // NEEDS TRANSLATION
	"The banwords {wordList} were added by {user.name}.": null, // NEEDS TRANSLATION
	"Banned phrases successfully added.": null, // NEEDS TRANSLATION
	"The banword '{words[0]}' was added by {user.name}.": null, // NEEDS TRANSLATION
	"Banned phrase successfully added.": null, // NEEDS TRANSLATION
	"The list is currently: {banwordList}": null, // NEEDS TRANSLATION
	"This room has no banned phrases.": null, // NEEDS TRANSLATION
	"{word} is not a banned phrase in this room.": null, // NEEDS TRANSLATION
	"The banwords {wordList} were removed by {user.name}.": null, // NEEDS TRANSLATION
	"Banned phrases successfully deleted.": null, // NEEDS TRANSLATION
	"The banword '{words[0]}' was removed by {user.name}.": null, // NEEDS TRANSLATION
	"Banned phrase successfully deleted.": null, // NEEDS TRANSLATION
	"The list is now: {banwordList}": null, // NEEDS TRANSLATION
	"The list is now empty.": null, // NEEDS TRANSLATION
	"Banned phrases in room {room.roomid}: {banwordList}": null, // NEEDS TRANSLATION
	"/banword add [words] - Adds the comma-separated list of phrases to the banword list of the current room. Requires: # ~": null, // NEEDS TRANSLATION
	"/banword addregex [words] - Adds the comma-separated list of regular expressions to the banword list of the current room. Requires ~": null, // NEEDS TRANSLATION
	"/banword delete [words] - Removes the comma-separated list of phrases from the banword list. Requires: # ~": null, // NEEDS TRANSLATION
	"/banword list - Shows the list of banned words in the current room. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"Approvals are currently ENABLED for {roomName}.": null, // NEEDS TRANSLATION
	"Approvals are currently DISABLED for {roomName}.": null, // NEEDS TRANSLATION
	"Approvals are already disabled.": null, // NEEDS TRANSLATION
	"{user.name} disabled approvals in this room.": null, // NEEDS TRANSLATION
	"Approvals are already enabled.": null, // NEEDS TRANSLATION
	"{user.name} enabled the use of media approvals in this room.": null, // NEEDS TRANSLATION
	"Note: Due to this room's settings, Drivers aren't allowed to use /show directly, but will be able to request and approve each other's /requestshow": null, // NEEDS TRANSLATION
	"Unrecognized setting for approvals. Use 'on' or 'off'.": null, // NEEDS TRANSLATION
	"/showapprovals [setting] - Enable or disable the use of media approvals in the current room.": null, // NEEDS TRANSLATION
	"Requires: # ~": null, // NEEDS TRANSLATION
	"/showmedia has been deprecated. Use /permissions instead.": null, // NEEDS TRANSLATION
	"This room is: high traffic": null, // NEEDS TRANSLATION
	"This room is: low traffic": null, // NEEDS TRANSLATION
	"This room was marked as high traffic by {user.name}.": null, // NEEDS TRANSLATION
	"This room was marked as low traffic by {user.name}.": null, // NEEDS TRANSLATION
	"/hightraffic [on|off] - (Un)marks a room as a high traffic room. Requires ~": null, // NEEDS TRANSLATION
	"When a room is marked as high-traffic, PS requires all messages sent to that room to contain at least 2 letters.": null, // NEEDS TRANSLATION
	"The room '{target}' already exists or it is using an invalid title.": null, // NEEDS TRANSLATION
	"Private chat room created: {titleHTML}": null, // NEEDS TRANSLATION
	"The private chat room '{target}' was created.": null, // NEEDS TRANSLATION
	"Public chat room created: {titleHTML}": null, // NEEDS TRANSLATION
	"The chat room '{target}' was created.": null, // NEEDS TRANSLATION
	"/makeprivatechatroom [roomname] - Creates a new private room named [roomname]. Requires: ~": null, // NEEDS TRANSLATION
	"/makepublicchatroom [roomname] - Creates a new public room named [roomname]. Requires: ~": null, // NEEDS TRANSLATION
	"You must be trusted (public room driver or global voice) to make a groupchat.": null, // NEEDS TRANSLATION
	"You are banned from using groupchats {expireText}.": null, // NEEDS TRANSLATION
	"You can only create subroom groupchats for rooms you're staff in.": null, // NEEDS TRANSLATION
	"You cannot create a subroom of a battle.": null, // NEEDS TRANSLATION
	"You cannot create a subroom of a groupchat.": null, // NEEDS TRANSLATION
	"Title must be under 32 characters long.": null, // NEEDS TRANSLATION
	"Invalid title.": null, // NEEDS TRANSLATION
	"Room titles can't contain any of: ,|[-": null, // NEEDS TRANSLATION
	"Your group chat name is too similar to existing chat room '{title}'.": null, // NEEDS TRANSLATION
	"A group chat named '{title}' already exists.": null, // NEEDS TRANSLATION
	"Due to high load, you are limited to creating 4 group chats every hour.": null, // NEEDS TRANSLATION
	"Welcome to {ownerName}'s {titleName} subroom groupchat!": null, // NEEDS TRANSLATION
	"Welcome to {ownerName}'s {titleName} groupchat!": null, // NEEDS TRANSLATION
	"Welcome to {ownerName}'s subroom groupchat!": null, // NEEDS TRANSLATION
	"Welcome to {ownerName}'s groupchat!": null, // NEEDS TRANSLATION
	"Follow the <a href=\"/rules\">Pokémon Showdown Global Rules</a>!": null, // NEEDS TRANSLATION
	"Don't be disruptive to the rest of the site.": null, // NEEDS TRANSLATION
	"Groupchats are temporary rooms, and will expire if there hasn't been any activity in 40 minutes.": null, // NEEDS TRANSLATION
	"You can invite new users using <code>/invite</code>. Be careful with who you invite!": null, // NEEDS TRANSLATION
	"Commands:": null, // NEEDS TRANSLATION
	"Room Management": null, // NEEDS TRANSLATION
	"Room Settings": null, // NEEDS TRANSLATION
	"Tournaments": null, // NEEDS TRANSLATION
	"As creator of this groupchat, <u>you are entirely responsible for what occurs in this chatroom</u>. Global rules apply at all times.": null, // NEEDS TRANSLATION
	"If this room is used to break global rules or disrupt other areas of the server, <strong>you as the creator will be held accountable and punished</strong>.": null, // NEEDS TRANSLATION
	"An unknown error occurred while trying to create the room '{title}'.": null, // NEEDS TRANSLATION
	"You've just made a groupchat; it is now your responsibility, regardless of whether or not you actively partake in the room. For more info, read your groupchat's staff intro.": null, // NEEDS TRANSLATION
	"/makegroupchat [roomname] - Creates an invite-only group chat named [roomname].": null, // NEEDS TRANSLATION
	"/subroomgroupchat [roomname] - Creates a subroom groupchat of the current room. Can only be used in a public room you have staff in.": null, // NEEDS TRANSLATION
	"Only users who are staff in a public room or global auth can make groupchats.": null, // NEEDS TRANSLATION
	"Can only be used in a room.": null, // NEEDS TRANSLATION
	"Room uptime: <b>{uptime}</b>": null, // NEEDS TRANSLATION
	"/roomuptime - Displays the uptime of the room.": null, // NEEDS TRANSLATION
	"NOTE: You probably want to use `/deleteroom` now that it exists.": null, // NEEDS TRANSLATION
	"The room '{target}' doesn't exist.": null, // NEEDS TRANSLATION
	"The room '{target}' was deregistered.": null, // NEEDS TRANSLATION
	"It will be deleted as of the next server restart.": null, // NEEDS TRANSLATION
	"Private chat room deregistered by {user.id}: {titleHTML}": null, // NEEDS TRANSLATION
	"Public chat room deregistered: {titleHTML}": null, // NEEDS TRANSLATION
	"Public chat room deregistered by {user.id}: {titleHTML}": null, // NEEDS TRANSLATION
	"The room \"{target}\" isn't registered.": null, // NEEDS TRANSLATION
	"/deregisterchatroom [roomname] - Deletes room [roomname] after the next server restart. Requires: ~": null, // NEEDS TRANSLATION
	"Private chat room deleted by {user.id}: {titleHTML}": null, // NEEDS TRANSLATION
	"Public chat room deleted: {titleHTML}": null, // NEEDS TRANSLATION
	"Public chat room deleted by {user.id}: {titleHTML}": null, // NEEDS TRANSLATION
	"This room has been deleted.": null, // NEEDS TRANSLATION
	"/deleteroom [roomname] - Deletes room [roomname]. Must be typed in the room to delete. Requires: ~": null, // NEEDS TRANSLATION
	"/deletegroupchat - Deletes the current room, if it's a groupchat. Requires: ★ # ~": null, // NEEDS TRANSLATION
	"Did you mean /renameroom?": null, // NEEDS TRANSLATION
	"Cannot rename room while a tour/poll/game is running.": null, // NEEDS TRANSLATION
	"Cannot rename battle rooms.": null, // NEEDS TRANSLATION
	"This isn't a groupchat.": null, // NEEDS TRANSLATION
	"Use /renamegroupchat instead.": null, // NEEDS TRANSLATION
	"Your groupchat name is too similar to existing chat room '{existingRoom.title}'.": null, // NEEDS TRANSLATION
	"Private chat room <b>{oldTitleHTML}</b> renamed to <b>{newTitleHTML}</b>": null, // NEEDS TRANSLATION
	"Public chat room <b>{oldTitleHTML}</b> renamed to <b>{newTitleHTML}</b>": null, // NEEDS TRANSLATION
	"Hidden chat room <b>{oldTitleHTML}</b> renamed to <b>{newTitleHTML}</b>": null, // NEEDS TRANSLATION
	"Unlisted chat room <b>{oldTitleHTML}</b> renamed to <b>{newTitleHTML}</b>": null, // NEEDS TRANSLATION
	"Voice chat room <b>{oldTitleHTML}</b> renamed to <b>{newTitleHTML}</b>": null, // NEEDS TRANSLATION
	"The room has been renamed to <b>{newTitleHTML}</b>": null, // NEEDS TRANSLATION
	"/renameroom [new title] - Renames the current room to [new title]. Case-sensitive. Requires ~": null, // NEEDS TRANSLATION
	"This battle is required to be public because a player has a name prefixed by '{prefix}'.": null, // NEEDS TRANSLATION
	"This battle can't be hidden, because the tournament is set to be forced public.": null, // NEEDS TRANSLATION
	"This room is a secret room. Use \"/publicroom\" to make it public, or \"/hiddenroom force\" to force it hidden.": null, // NEEDS TRANSLATION
	"Please specify what privacy setting you want for this room: /hiddenroom, /secretroom, or /publicroom": null, // NEEDS TRANSLATION
	"This room is already public.": null, // NEEDS TRANSLATION
	"This room's parent {room.parent.title} must be public for this room to be public.": null, // NEEDS TRANSLATION
	"This room can't be made public.": null, // NEEDS TRANSLATION
	"You can't make the room public since you didn't make it private - only {privacySetters} can.": null, // NEEDS TRANSLATION
	"You are no longer forcing the room to stay private, but {privacySetters} also needs to use /publicroom to make the room public.": null, // NEEDS TRANSLATION
	"You are no longer forcing the room to stay private, but {privacySetters} also need to use /publicroom to make the room public.": null, // NEEDS TRANSLATION
	"{user.name} made this room public.": null, // NEEDS TRANSLATION
	"Secret rooms cannot have subrooms.": null, // NEEDS TRANSLATION
	"Subroom {subRoom.title} must be private to make this room private.": null, // NEEDS TRANSLATION
	"This room is already secret, but is now forced to stay that way until you use /publicroom.": null, // NEEDS TRANSLATION
	"This room is already hidden, but is now forced to stay that way until you use /publicroom.": null, // NEEDS TRANSLATION
	"This room is already unlisted, but is now forced to stay that way until you use /publicroom.": null, // NEEDS TRANSLATION
	"This room is already secret.": null, // NEEDS TRANSLATION
	"This room is already hidden.": null, // NEEDS TRANSLATION
	"This room is already unlisted.": null, // NEEDS TRANSLATION
	"{user.name} made this room secret.": null, // NEEDS TRANSLATION
	"{user.name} made this room hidden.": null, // NEEDS TRANSLATION
	"{user.name} made this room unlisted.": null, // NEEDS TRANSLATION
	"/secretroom - Makes a room secret. Secret rooms are visible to ~ and up. Requires: ~": null, // NEEDS TRANSLATION
	"/hiddenroom [on/off] - Makes a room hidden. Hidden rooms are visible to % and up, and inherit global ranks. Requires: ☆ ~": null, // NEEDS TRANSLATION
	"/publicroom - Makes a room public. Requires: ☆ ~": null, // NEEDS TRANSLATION
	"/hidenext - Access denied.": null, // NEEDS TRANSLATION
	"Your next battle will be hidden, unless it is rated.": null, // NEEDS TRANSLATION
	"Your next battle will be hidden.": null, // NEEDS TRANSLATION
	"/hidenext - Sets your next battle to be hidden.": null, // NEEDS TRANSLATION
	"/hidenext off - Sets your next battle to be publicly visible.": null, // NEEDS TRANSLATION
	"/roomspotlight - You can't spotlight this room.": null, // NEEDS TRANSLATION
	"This chatroom is not being spotlighted.": null, // NEEDS TRANSLATION
	"{user.name} removed this chatroom from the spotlight.": null, // NEEDS TRANSLATION
	"This chat room is already spotlighted.": null, // NEEDS TRANSLATION
	"{user.name} spotlighted this room with the message \"{target}\".": null, // NEEDS TRANSLATION
	"/roomspotlight [spotlight] - Makes the room this command is used in a spotlight room for the [spotlight] category on the roomlist. Requires: ~": null, // NEEDS TRANSLATION
	"/roomspotlight off - Removes the room this command is used in from the list of spotlight rooms. Requires: ~": null, // NEEDS TRANSLATION
	"/subroom - Access denied. Did you mean /subrooms?": null, // NEEDS TRANSLATION
	"Temporary rooms cannot be subrooms.": null, // NEEDS TRANSLATION
	"This room is already a subroom. To change which room this subroom belongs to, remove the subroom first.": null, // NEEDS TRANSLATION
	"This room is already a parent room, and a parent room cannot be made as a subroom.": null, // NEEDS TRANSLATION
	"Parent room '{target}' must be a chat room.": null, // NEEDS TRANSLATION
	"Subrooms cannot have subrooms.": null, // NEEDS TRANSLATION
	"Only public and hidden rooms can have subrooms.": null, // NEEDS TRANSLATION
	"Private rooms cannot have public subrooms.": null, // NEEDS TRANSLATION
	"Temporary rooms cannot be parent rooms.": null, // NEEDS TRANSLATION
	"You cannot set a room to be a subroom of itself.": null, // NEEDS TRANSLATION
	"This room was set as a subroom of {parent.title} by {user.name}.": null, // NEEDS TRANSLATION
	"This room is not currently a subroom of a public room.": null, // NEEDS TRANSLATION
	"This room was unset as a subroom by {user.name}.": null, // NEEDS TRANSLATION
	"/unsubroom - Unmarks the current room as a subroom. Requires: ~": null, // NEEDS TRANSLATION
	"This room is not a subroom.": null, // NEEDS TRANSLATION
	"This is a subroom of {room.parent.title}.": null, // NEEDS TRANSLATION
	"Temporary rooms cannot have subrooms.": null, // NEEDS TRANSLATION
	"This room doesn't have any subrooms.": null, // NEEDS TRANSLATION
	"{roomTitle}'s subroom:": null, // NEEDS TRANSLATION
	"{roomTitle}'s subrooms:": null, // NEEDS TRANSLATION
	"/subroom [room] - Marks the current room as a subroom of [room]. Requires: ~": null, // NEEDS TRANSLATION
	"/subrooms - Displays the current room's subrooms.": null, // NEEDS TRANSLATION
	"/parentroom - Displays the current room's parent room.": null, // NEEDS TRANSLATION
	"This room does not have a description set.": null, // NEEDS TRANSLATION
	"The room description is: {desc}": null, // NEEDS TRANSLATION
	"Error: Room description is too long (must be at most 80 characters).": null, // NEEDS TRANSLATION
	"Error: Room description must not contain the word \"welcome\".": null, // NEEDS TRANSLATION
	"Error: Room description must not start with the word \"discuss\".": null, // NEEDS TRANSLATION
	"Error: Room description must not start with the phrase \"talk about\".": null, // NEEDS TRANSLATION
	"(The room description is now: {target})": null, // NEEDS TRANSLATION
	"{user.name} changed the roomdesc to: \"{target}\".": null, // NEEDS TRANSLATION
	"/roomdesc [description] - Sets the [description] of the current room. Requires: ~": null, // NEEDS TRANSLATION
	"This room does not have an introduction set.": null, // NEEDS TRANSLATION
	"Source:": null, // NEEDS TRANSLATION
	"Did you mean \"/deleteroomintro\"?": null, // NEEDS TRANSLATION
	"(The room introduction has been changed to:)": null, // NEEDS TRANSLATION
	"{user.name} changed the roomintro.": null, // NEEDS TRANSLATION
	"/roomintro - Display the room introduction of the current room.": null, // NEEDS TRANSLATION
	"/roomintro [content] - Set an introduction for the room. Requires: # ~": null, // NEEDS TRANSLATION
	"This room does not have a introduction set.": null, // NEEDS TRANSLATION
	"{user.name} deleted the roomintro.": null, // NEEDS TRANSLATION
	"/deleteroomintro - Deletes the current room's introduction. Requires: # ~": null, // NEEDS TRANSLATION
	"This room does not have a staff introduction set.": null, // NEEDS TRANSLATION
	"Did you mean \"/deletestaffintro\"?": null, // NEEDS TRANSLATION
	"(The staff introduction has been changed to:)": null, // NEEDS TRANSLATION
	"{user.name} changed the staffintro.": null, // NEEDS TRANSLATION
	"/staffintro [content] - Set an introduction for staff members. Requires: @ # ~": null, // NEEDS TRANSLATION
	"{user.name} deleted the staffintro.": null, // NEEDS TRANSLATION
	"/deletestaffintro - Deletes the current room's staff introduction. Requires: @ # ~": null, // NEEDS TRANSLATION
	"This room does not have any aliases.": null, // NEEDS TRANSLATION
	"This room has the following aliases: {aliases}": null, // NEEDS TRANSLATION
	"Invalid room alias: {target.trim()}": null, // NEEDS TRANSLATION
	"Only alphanumeric characters are valid in an alias.": null, // NEEDS TRANSLATION
	"You cannot set an alias to an existing room or alias.": null, // NEEDS TRANSLATION
	"Personal rooms can't have aliases.": null, // NEEDS TRANSLATION
	"{user.name} added the room alias '{alias}'.": null, // NEEDS TRANSLATION
	"/roomalias - displays a list of all room aliases of the room the command was entered in.": null, // NEEDS TRANSLATION
	"/roomalias [alias] - adds the given room alias to the room the command was entered in. Requires: ~": null, // NEEDS TRANSLATION
	"/removeroomalias [alias] - removes the given room alias of the room the command was entered in. Requires: ~": null, // NEEDS TRANSLATION
	"Please specify an existing alias.": null, // NEEDS TRANSLATION
	"You may only remove an alias from the current room.": null, // NEEDS TRANSLATION
	"{user.name} removed the room alias '{alias}'.": null, // NEEDS TRANSLATION
	"This room is currently displaying {room.settings.dataCommandTierDisplay} as the tier when using /data.": null, // NEEDS TRANSLATION
	"Invalid tier display: {target.trim()}": null, // NEEDS TRANSLATION
	"(The room's tier display is now: {tierDisplay})": null, // NEEDS TRANSLATION
	"{user.name} changed the room's tier display to: {tierDisplay}.": null, // NEEDS TRANSLATION
	"(The room's tier display is now: tiers)": null, // NEEDS TRANSLATION
	"{user.name} reset the room's tier display.": null, // NEEDS TRANSLATION
	"/roomtierdisplay - displays the current room's display.": null, // NEEDS TRANSLATION
	"/roomtierdisplay [option] - changes the current room's tier display. Valid options are: tiers, doubles tiers, numbers. Requires: # ~": null, // NEEDS TRANSLATION
	"/resettierdisplay - resets the current room's tier display. Requires: # ~": null, // NEEDS TRANSLATION
	"This room is in the {currentSection} section.": null, // NEEDS TRANSLATION
	"This room is not in a section.": null, // NEEDS TRANSLATION
	"The room section is now: {newSection}": null, // NEEDS TRANSLATION
	"{user.name} changed the room section of {room.title} to {roomSection}.": null, // NEEDS TRANSLATION
	"The room section is now: none": null, // NEEDS TRANSLATION
	"{user.name} changed the room section of {room.title} to none.": null, // NEEDS TRANSLATION
	"/roomsection [section] - Sets the room this is used in to the specified [section]. Requires: ~": null, // NEEDS TRANSLATION
	"This room's default format is {room.settings.defaultFormat}.": null, // NEEDS TRANSLATION
	"This room has no default format.": null, // NEEDS TRANSLATION
	"{user.name} removed this room's default format.": null, // NEEDS TRANSLATION
	"Unrecognized format or mod \"{target}\"": null, // NEEDS TRANSLATION
	"{user.name} set this room's default format to {target}.": null, // NEEDS TRANSLATION
	"/roomdefaultformat [format] or [mod] or gen[number] - Sets this room's default format/mod. Requires: # ~": null, // NEEDS TRANSLATION
	"/roomdefaultformat off - Clears this room's default format/mod. Requires: # ~": null, // NEEDS TRANSLATION
	"Affected commands: /details, /coverage, /effectiveness, /weakness, /learn": null, // NEEDS TRANSLATION
	"Modchat": null, // NEEDS TRANSLATION
	"Modjoin": null, // NEEDS TRANSLATION
	"Stretch filter": null, // NEEDS TRANSLATION
	"on": null, // NEEDS TRANSLATION
	"Caps filter": null, // NEEDS TRANSLATION
	"Emoji filter": null, // NEEDS TRANSLATION
	"Link filter": null, // NEEDS TRANSLATION
	"Slowchat": null, // NEEDS TRANSLATION
	"/data Tier display": null, // NEEDS TRANSLATION
	"tiers": null, // NEEDS TRANSLATION
	"doubles tiers": null, // NEEDS TRANSLATION
	"National Dex tiers": null, // NEEDS TRANSLATION
	"numbers": null, // NEEDS TRANSLATION
	"/requestshow": null, // NEEDS TRANSLATION
	"[Permissions]": null, // NEEDS TRANSLATION
	"Command permissions for {roomTitle}": null, // NEEDS TRANSLATION
	"Permission": null, // NEEDS TRANSLATION
	"Required rank": null, // NEEDS TRANSLATION
	"You don't have any permissions configured.": null, // NEEDS TRANSLATION
	"Use <code>/permissions</code> to add new permissions": null, // NEEDS TRANSLATION
	"and the battle lasted less than {turnLimit} turn": null, // NEEDS TRANSLATION
	"and the battle lasted less than {turnLimit} turns": null, // NEEDS TRANSLATION
	"Battle Search": null, // NEEDS TRANSLATION
	"the users {userList} were players": null, // NEEDS TRANSLATION
	"the user {userids[0]} was a player": null, // NEEDS TRANSLATION
	"{tierid} battles on {month} where {players}{turnsClause}:": null, // NEEDS TRANSLATION
	"Full summary": null, // NEEDS TRANSLATION
	"Won": null, // NEEDS TRANSLATION
	"Lost": null, // NEEDS TRANSLATION
	"Turns": null, // NEEDS TRANSLATION
	"Number": null, // NEEDS TRANSLATION
	"Total Battles": null, // NEEDS TRANSLATION
	"Total Wins": null, // NEEDS TRANSLATION
	"Total Losses": null, // NEEDS TRANSLATION
	"Opponent": null, // NEEDS TRANSLATION
	"Times Battled": null, // NEEDS TRANSLATION
	"Days must be between 1 and 15. To search longer ranges, use psbattletools manually on sim3.": null, // NEEDS TRANSLATION
	"No user specified.": null, // NEEDS TRANSLATION
	"You must install <a href=\"https://crates.io/crates/psbattletools\">psbattletools</a> to use the alternate battlesearch.": null, // NEEDS TRANSLATION
	"Warning: Usage stats may be running currently.": null, // NEEDS TRANSLATION
	"Battlesearch can interfere with usage stats processing due to high computational load.": null, // NEEDS TRANSLATION
	"Please exercise caution.": null, // NEEDS TRANSLATION
	"Type the command again to confirm.": null, // NEEDS TRANSLATION
	"Battlesearch": null, // NEEDS TRANSLATION
	"{targetUser} in {format}": null, // NEEDS TRANSLATION
	"Battlesearch for {targetUser} in {format} in the last {days} days": null, // NEEDS TRANSLATION
	"Searching...": null, // NEEDS TRANSLATION
	"Done!": null, // NEEDS TRANSLATION
	"/battlesearch - Access Denied": null, // NEEDS TRANSLATION
	"Battlesearch has been temporarily disabled due to load issues.": null, // NEEDS TRANSLATION
	"Some arguments are missing or invalid for battlesearch. Use /battlesearch to start over.": null, // NEEDS TRANSLATION
	"Userid: {userList}": null, // NEEDS TRANSLATION
	"Userids: {userList}": null, // NEEDS TRANSLATION
	"Maximum Turns: {turnLimit}": null, // NEEDS TRANSLATION
	"Please select a month:": null, // NEEDS TRANSLATION
	"Invalid month selected.": null, // NEEDS TRANSLATION
	"Back to month selection": null, // NEEDS TRANSLATION
	"Please select the tier to search:": null, // NEEDS TRANSLATION
	"Invalid tier selected.": null, // NEEDS TRANSLATION
	"Back to tier selection": null, // NEEDS TRANSLATION
	"user(s) {userList} were players": null, // NEEDS TRANSLATION
	"Are you sure you want to run a battle search for for {tierid} battles on {month} where the {players}{turns}?": null, // NEEDS TRANSLATION
	"Yes, run the battle search": null, // NEEDS TRANSLATION
	"No, go back": null, // NEEDS TRANSLATION
	"Searching for {tierid} battles on {month} where the {players} {turns}": null, // NEEDS TRANSLATION
	"Loading... (this will take a while)": null, // NEEDS TRANSLATION
	"Invalid limit: {limit}": null, // NEEDS TRANSLATION
	"/battlesearch [args] - Searches rated battle history for the provided [args] and returns information on battles between the userids given.": null, // NEEDS TRANSLATION
	"If a number is provided in the [args], it is assumed to be a turn limit, else they're assumed to be userids. Requires ~": null, // NEEDS TRANSLATION
	"/battlesearch <user>, <format>, <days> - Searches for battles played by <user> in the past <days> days. Requires: ~": null, // NEEDS TRANSLATION
	"Invalid regular expression: /{word}/: {e.message}": null, // NEEDS TRANSLATION
	"{filterWord.word} is already added to the {filterWord.list} list.": null, // NEEDS TRANSLATION
	"Autolock": null, // NEEDS TRANSLATION
	"would be locked: {word}{reasonText}": null, // NEEDS TRANSLATION
	"Please do not say '{match[0]}'{publicText}.": null, // NEEDS TRANSLATION
	"Filtered in public": null, // NEEDS TRANSLATION
	"would be filtered in public: {word}{reasonText}": null, // NEEDS TRANSLATION
	"Filtered": null, // NEEDS TRANSLATION
	"would be filtered: {word}{reasonText}": null, // NEEDS TRANSLATION
	"Filter Evasion Detection": null, // NEEDS TRANSLATION
	"Do not say '{word}'.": null, // NEEDS TRANSLATION
	"would be locked for filter evading: {match[0]} ({word})": null, // NEEDS TRANSLATION
	"Filtered to a different phrase": null, // NEEDS TRANSLATION
	"Filtered in names": null, // NEEDS TRANSLATION
	"Filtered in battles": null, // NEEDS TRANSLATION
	"You have been muted for using a banned phrase. Please do not say '{match[0]}'{publicText}.": null, // NEEDS TRANSLATION
	"URL Shorteners": null, // NEEDS TRANSLATION
	"shortener: {word}": null, // NEEDS TRANSLATION
	"Please do not use URL shorteners such as '{word}'{publicText}.": null, // NEEDS TRANSLATION
	"Username used: {username} (forcerenamed from {oldName})": null, // NEEDS TRANSLATION
	"Username used: {username} (automatically forcerenamed from {oldName})": null, // NEEDS TRANSLATION
	"You were warned while offline: {offlineWarn}": null, // NEEDS TRANSLATION
	"You were warned while offline.": null, // NEEDS TRANSLATION
	"Filters": null, // NEEDS TRANSLATION
	"public reason: {escapedReason}": null, // NEEDS TRANSLATION
	"Whitelisted names": null, // NEEDS TRANSLATION
	"There are no filtered words.": null, // NEEDS TRANSLATION
	"Syntax: /filter add list {separator} word {separator} reason [{separator} optional public reason]": null, // NEEDS TRANSLATION
	"Invalid list: {list}. Possible options: {lists}": null, // NEEDS TRANSLATION
	"Syntax for word filters: /filter add {list} {separator} regex {separator} reason [{separator} optional public reason]": null, // NEEDS TRANSLATION
	"Invalid word: '{filterWord.word}'.": null, // NEEDS TRANSLATION
	"'{filterWord.word}' was added to the {list} list.": null, // NEEDS TRANSLATION
	"Syntax: /filter remove list, words": null, // NEEDS TRANSLATION
	"{notFoundList} is not on the {list} list.": null, // NEEDS TRANSLATION
	"{notFoundList} are not on the {list} list.": null, // NEEDS TRANSLATION
	"'{wordList}' was removed from the {list} list.": null, // NEEDS TRANSLATION
	"'{wordList}' were removed from the {list} list.": null, // NEEDS TRANSLATION
	"\"{target}\" would be blocked from being sent.": null, // NEEDS TRANSLATION
	"\"{target}\" doesn't trigger any filters. Check spelling?": null, // NEEDS TRANSLATION
	"/filter test [test string] - Tests whether or not the provided test string would trigger any of the chat monitors.": null, // NEEDS TRANSLATION
	"Requires: % @ ~": null, // NEEDS TRANSLATION
	"/filter add list, word, reason[, optional public reason] - Adds a word to the given filter list. Requires: ~": null, // NEEDS TRANSLATION
	"/filter remove list, words - Removes words from the given filter list. Requires: ~": null, // NEEDS TRANSLATION
	"/filter view - Opens the list of filtered words. Requires: % @ ~": null, // NEEDS TRANSLATION
	"/filter test [test string] - Tests whether or not the provided test string would trigger any of the chat monitors. Requires: % @ ~": null, // NEEDS TRANSLATION
	"You may use / instead of , in /filter add if you want to specify a reason that includes commas.": null, // NEEDS TRANSLATION
	"Syntax: /allowname username": null, // NEEDS TRANSLATION
	"{target} is already allowed as a username.": null, // NEEDS TRANSLATION
	"{target} was allowed as a username by {user.name}.": null, // NEEDS TRANSLATION
	"Legacy image {legacyImage}": null, // NEEDS TRANSLATION
	"Daily Spotlights": null, // NEEDS TRANSLATION
	"Invalid sorting type '{sortType}' - must be either 'time', 'alphabet', or not provided.": null, // NEEDS TRANSLATION
	"(sorted by latest time updated)": null, // NEEDS TRANSLATION
	"(sorted by alphabetical)": null, // NEEDS TRANSLATION
	"This room has no daily spotlights.": null, // NEEDS TRANSLATION
	"Current": null, // NEEDS TRANSLATION
	"Delete": null, // NEEDS TRANSLATION
	"Cannot find a daily spotlight with name '{key}'": null, // NEEDS TRANSLATION
	"{user.name} removed the daily spotlight named '{key}'.": null, // NEEDS TRANSLATION
	"{user.name} removed the current entry from the queue of the daily spotlight named '{key}'.": null, // NEEDS TRANSLATION
	"Invalid queue number": null, // NEEDS TRANSLATION
	"Queue number must be between 1 and {maxQueueNumber}": null, // NEEDS TRANSLATION
	"{user.name} removed the {queueNumber}th entry from the queue of the daily spotlight named '{key}'.": null, // NEEDS TRANSLATION
	"There are no dailies for this room.": null, // NEEDS TRANSLATION
	"Queue numbers must be numbers.": null, // NEEDS TRANSLATION
	"Queue numbers must between 1 and the length of the queue ({queueLength}).": null, // NEEDS TRANSLATION
	"{user.name} swapped the queued dailies for '{key}' at queue numbers {indexA} and {indexB}.": null, // NEEDS TRANSLATION
	"Spotlight names can be a maximum of 20 characters long.": null, // NEEDS TRANSLATION
	"The queue number must be a number.": null, // NEEDS TRANSLATION
	"Queue numbers must be between 1 and the length of the queue ({queueLength}).": null, // NEEDS TRANSLATION
	"Invalid image url: {url}": null, // NEEDS TRANSLATION
	"Descriptions can be at most 500 characters long.": null, // NEEDS TRANSLATION
	"{user.name} set the daily {key}.": null, // NEEDS TRANSLATION
	"{user.name} queued a daily {key} at queue number {index}.": null, // NEEDS TRANSLATION
	"{user.name} replaced the daily {key} at queue number {index}.": null, // NEEDS TRANSLATION
	"{user.name} queued a daily {key}.": null, // NEEDS TRANSLATION
	"Source": null, // NEEDS TRANSLATION
	"<code>/daily [name]</code>: shows the daily spotlight.": null, // NEEDS TRANSLATION
	"<code>!daily [name]</code>: shows the daily spotlight to everyone. Requires: + % @ # ~": null, // NEEDS TRANSLATION
	"<code>/setdaily [name], [image], [description]</code>: sets the daily spotlight. Image can be left out. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"<code>/queuedaily [name], [image], [description]</code>: queues a daily spotlight. At midnight, the spotlight with this name will automatically switch to the next queued spotlight. Image can be left out. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"<code>/queuedailyat [name], [queue number], [image], [description]</code>: inserts a daily spotlight into the queue at the specified number (starting from 1). Requires: % @ # ~": null, // NEEDS TRANSLATION
	"<code>/replacedaily [name], [queue number], [image], [description]</code>: replaces the daily spotlight queued at the specified number. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"<code>/removedaily [name][, queue number]</code>: If no queue number is provided, the current spotlight is deleted (and tomorrow's, if it exists, is moved up). If a number is provided, removes a specific future spotlight from the queue. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"<code>/removedaily [name], all</code>: Deletes all current and queued spotlights with the given name. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"<code>/swapdaily [name], [queue number], [queue number]</code>: swaps the two queued spotlights at the given queue numbers. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"<code>/viewspotlights [sorter]</code>: shows all current spotlights in the room. For staff, also shows queued spotlights.": null, // NEEDS TRANSLATION
	"[sorter] can either be unset, 'time', or 'alphabet'. These sort by either the time added, or alphabetical order.": null, // NEEDS TRANSLATION
	"You can't guess in your own hangman game.": null, // NEEDS TRANSLATION
	"Use \"/guess [letter]\" to guess a letter, or \"/guess [phrase]\" to guess the entire Hangman phrase.": null, // NEEDS TRANSLATION
	"Guesses must be {MAX_HANGMAN_LENGTH} or fewer letters – \"{word}\" is too long.": null, // NEEDS TRANSLATION
	"Your guess \"{word}\" has already been guessed.": null, // NEEDS TRANSLATION
	"Your guess \"{sanitized}\" is invalid.": null, // NEEDS TRANSLATION
	"{name} guessed \"{sanitized}\"!": null, // NEEDS TRANSLATION
	"Your guess \"{sanitized}\" is not a valid letter.": null, // NEEDS TRANSLATION
	"Too bad! The mon has been hanged.": null, // NEEDS TRANSLATION
	"The word has been guessed. Congratulations!": null, // NEEDS TRANSLATION
	"Hangman": null, // NEEDS TRANSLATION
	"(Hint: {hint})": null, // NEEDS TRANSLATION
	"Letters: {letters}": null, // NEEDS TRANSLATION
	"Winner: {guesser}": null, // NEEDS TRANSLATION
	"Guessed: {guess}": null, // NEEDS TRANSLATION
	"The game of hangman was ended.": null, // NEEDS TRANSLATION
	"The game of hangman has ended &ndash; scroll down to see the results": null, // NEEDS TRANSLATION
	"The room {room} has no saved hangman words.": null, // NEEDS TRANSLATION
	"No terms found with tag {tag}": null, // NEEDS TRANSLATION
	"Enter a valid word": null, // NEEDS TRANSLATION
	"Phrase must be less than {MAX_HANGMAN_LENGTH} characters long.": null, // NEEDS TRANSLATION
	"Each word in the phrase must be less than {MAX_INDIVIDUAL_WORD_LENGTH} characters long.": null, // NEEDS TRANSLATION
	"Word must contain at least one letter.": null, // NEEDS TRANSLATION
	"Hint must be less than {MAX_HINT_LENGTH} characters long.": null, // NEEDS TRANSLATION
	"You are not allowed to use filtered words in hangmans.": null, // NEEDS TRANSLATION
	"Hangman is disabled for this room.": null, // NEEDS TRANSLATION
	"There is already a game of {gameTitle} in progress in this room.": null, // NEEDS TRANSLATION
	"No word entered.": null, // NEEDS TRANSLATION
	"A game of hangman was started by {name} – use /guess to play!": null, // NEEDS TRANSLATION
	"/hangman create [word], [hint] - Makes a new hangman game. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"You may not use filtered words in guesses.": null, // NEEDS TRANSLATION
	"/guess [letter] - Makes a guess for the letter entered.": null, // NEEDS TRANSLATION
	"/guess [word] - Same as a letter, but guesses an entire word.": null, // NEEDS TRANSLATION
	"The game of hangman was ended by {name}.": null, // NEEDS TRANSLATION
	"/hangman end - Ends the game of hangman before the man is hanged or word is guessed. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"Hangman is already disabled.": null, // NEEDS TRANSLATION
	"Hangman has been disabled for this room.": null, // NEEDS TRANSLATION
	"Hangman is already enabled.": null, // NEEDS TRANSLATION
	"Hangman has been enabled for this room.": null, // NEEDS TRANSLATION
	"There is already a game of {gameTitle} running.": null, // NEEDS TRANSLATION
	"{name} started a random game of hangman - use /guess to play!": null, // NEEDS TRANSLATION
	"{name} added a random hangman with {count} hints.": null, // NEEDS TRANSLATION
	"{name} added a random hangman with {count} hint.": null, // NEEDS TRANSLATION
	"Invalid room: {newID}": null, // NEEDS TRANSLATION
	"There are no hangman words for this room.": null, // NEEDS TRANSLATION
	"That word is not a saved hangman.": null, // NEEDS TRANSLATION
	"{name} deleted the hangman entry for '{word}'": null, // NEEDS TRANSLATION
	"{name} deleted {count} hints for the hangman term '{word}'": null, // NEEDS TRANSLATION
	"{name} deleted {count} hint for the hangman term '{word}'": null, // NEEDS TRANSLATION
	"Term {term} not found.": null, // NEEDS TRANSLATION
	"The tag {tag} is already on the term {term} and has been skipped.": null, // NEEDS TRANSLATION
	"Specify at least one valid tag.": null, // NEEDS TRANSLATION
	"{name} added {count} tags to the hangman term {term}": null, // NEEDS TRANSLATION
	"{name} added {count} tag to the hangman term {term}": null, // NEEDS TRANSLATION
	"This room has no hangman terms.": null, // NEEDS TRANSLATION
	"That term was not found.": null, // NEEDS TRANSLATION
	"That term has no tags.": null, // NEEDS TRANSLATION
	"{name} removed {count} tags from the hangman term {term}": null, // NEEDS TRANSLATION
	"{name} removed {count} tag from the hangman term {term}": null, // NEEDS TRANSLATION
	"{name} removed all tags from the hangman term {term}": null, // NEEDS TRANSLATION
	"/hangman allows users to play the popular game hangman in PS rooms.": null, // NEEDS TRANSLATION
	"/hangman guess [letter] - Makes a guess for the letter entered.": null, // NEEDS TRANSLATION
	"/hangman guess [word] - Same as a letter, but guesses an entire word.": null, // NEEDS TRANSLATION
	"/hangman display - Displays the game.": null, // NEEDS TRANSLATION
	"/hangman [enable/disable] - Enables or disables hangman from being started in a room. Requires: # ~": null, // NEEDS TRANSLATION
	"/hangman random [tag]- Runs a random hangman, if the room has any added. ": null, // NEEDS TRANSLATION
	"If a tag is given, randomizes from only terms with those tags. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/hangman addrandom [word], [...hints] - Adds an entry for [word] with the [hints] provided to the room's hangman pool. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/hangman removerandom [word][, hints] - Removes data from the hangman entry for [word]. If hints are given, removes only those hints. Otherwise it removes the entire entry. Requires: % @ ~ #": null, // NEEDS TRANSLATION
	"/hangman addtag [word], [...tags] - Adds tags to the hangman term matching [word]. Requires: % @ ~ #": null, // NEEDS TRANSLATION
	"/hangman untag [term][, ...tags] - Removes tags from the hangman [term]. If tags are given, removes only those tags. Requires: % @ # * ": null, // NEEDS TRANSLATION
	"/hangman terms - Displays all random hangman in a room. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"[Hangman]": null, // NEEDS TRANSLATION
	"Hangman entries on {roomTitle}": null, // NEEDS TRANSLATION
	"No hangman terms found for {roomTitle}.": null, // NEEDS TRANSLATION
	"Hints:": null, // NEEDS TRANSLATION
	"Delete all terms": null, // NEEDS TRANSLATION
	"Tags:": null, // NEEDS TRANSLATION
	"Delete all tags": null, // NEEDS TRANSLATION
	"disabled": null, // NEEDS TRANSLATION
	"enabled": null, // NEEDS TRANSLATION
	"punishment: {punishmentName}": null, // NEEDS TRANSLATION
	"ticket type: {punishment.ticketType}": null, // NEEDS TRANSLATION
	"severity: {certainty} (for {types})": null, // NEEDS TRANSLATION
	"required modlog: {punishment.modlogCount}": null, // NEEDS TRANSLATION
	"for single messages only": null, // NEEDS TRANSLATION
	"the Artemis AI": null, // NEEDS TRANSLATION
	"Want to learn more about the AI? <a href=\"{threadLink}\">Visit the information thread</a>.": null, // NEEDS TRANSLATION
	"{user.name} has locked your username and prevented you from changing names for {days} days.": null, // NEEDS TRANSLATION
	"{user.name} has locked you from talking in chats, battles, and PMing regular users for {days} days.": null, // NEEDS TRANSLATION
	"appeal:": null, // NEEDS TRANSLATION
	"report from {ticket.creator}": null, // NEEDS TRANSLATION
	"{id} was locked from talking for a week by Artemis. ({reason})": null, // NEEDS TRANSLATION
	"{id} was locked from talking by Artemis. ({reason})": null, // NEEDS TRANSLATION
	"{id} was weeknamelocked by Artemis. ({reason})": null, // NEEDS TRANSLATION
	"{id} was namelocked by Artemis. ({reason})": null, // NEEDS TRANSLATION
	"Reason: {result.reason}.": null, // NEEDS TRANSLATION
	"Your name was detected to be breaking our name rules.": null, // NEEDS TRANSLATION
	"Please change it, or submit a help ticket by typing /ht in chat to appeal this action.": null, // NEEDS TRANSLATION
	"{username} was automatically forced to choose a new name by Artemis (report from {ticket.userid}).": null, // NEEDS TRANSLATION
	"{id} was automatically forcerenamed. Thank you for reporting.": null, // NEEDS TRANSLATION
	"{toID(user)} was automatically namelocked. Thank you for reporting.": null, // NEEDS TRANSLATION
	"{toID(user)} was automatically weeknamelocked. Thank you for reporting.": null, // NEEDS TRANSLATION
	"{toID(user)} was automatically locked. Thank you for reporting.": null, // NEEDS TRANSLATION
	"{toID(user)} was automatically weeklocked. Thank you for reporting.": null, // NEEDS TRANSLATION
	"{user} was warned by Artemis. while offline ({reason})": null, // NEEDS TRANSLATION
	"{user} was warned by Artemis. ({reason})": null, // NEEDS TRANSLATION
	"{user} was automatically warned. Thank you for reporting.": null, // NEEDS TRANSLATION
	"You were punished for your behavior.": null, // NEEDS TRANSLATION
	"{actions.size - 1} other(s) were also punished.": null, // NEEDS TRANSLATION
	"The person you reported was also punished.": null, // NEEDS TRANSLATION
	"[{ticket.type} Monitor] Recommended: {res.action}: for {res.user} ({res.reason})": null, // NEEDS TRANSLATION
	"Results for \"{escapedTarget}\":": null, // NEEDS TRANSLATION
	"Score breakdown:": null, // NEEDS TRANSLATION
	"More than one {k} param provided.": null, // NEEDS TRANSLATION
	"Invalid classifier type '{type}'. Valid types are {validTypes}": null, // NEEDS TRANSLATION
	"Certainty must be a number below 1 and above 0.": null, // NEEDS TRANSLATION
	"Modlog count must be a number above 0.": null, // NEEDS TRANSLATION
	"The ticket type '{type}' does not exist or is not supported.": null, // NEEDS TRANSLATION
	"Supported types are {supportedTypes}.": null, // NEEDS TRANSLATION
	"Punishment '{name}' not supported.": null, // NEEDS TRANSLATION
	"Supported punishments: {supportedPunishments}": null, // NEEDS TRANSLATION
	"The 'single' value must always be 'on'.": null, // NEEDS TRANSLATION
	"If you don't want it enabled, just do not use this argument type.": null, // NEEDS TRANSLATION
	"Must specify a ticket type to handle.": null, // NEEDS TRANSLATION
	"Must specify a punishment to apply.": null, // NEEDS TRANSLATION
	"A severity to monitor for must be specified (certainty).": null, // NEEDS TRANSLATION
	"That punishment is already added.": null, // NEEDS TRANSLATION
	"{user.name} added a {punishment.punishment} punishment to the Artemis helpticket handler.": null, // NEEDS TRANSLATION
	"There is no punishment at index {num + 1}.": null, // NEEDS TRANSLATION
	"{user.name} removed the Artemis helpticket {punishment.punishment} punishment indexed at {num + 1}": null, // NEEDS TRANSLATION
	"Artemis helpticket punishments": null, // NEEDS TRANSLATION
	"None.": null, // NEEDS TRANSLATION
	"Automatic punishments are already enabled.": null, // NEEDS TRANSLATION
	"{user.name} enabled automatic punishments for the Artemis ticket handler": null, // NEEDS TRANSLATION
	"Automatic punishments are already disabled.": null, // NEEDS TRANSLATION
	"{user.name} disabled automatic punishments for the Artemis ticket handler": null, // NEEDS TRANSLATION
	"Invalid setting. Must be 'on' or 'off'.": null, // NEEDS TRANSLATION
	"The user '{ticketId}' does not have a ticket open at present.": null, // NEEDS TRANSLATION
	"The result must be 'success' or 'failure'.": null, // NEEDS TRANSLATION
	"/aht addpunishment [args] - Adds a punishment with the given [args]. Requires: whitelist ~": null, // NEEDS TRANSLATION
	"/aht deletepunishment [index] - Deletes the automatic helpticket punishment at [index]. Requires: whitelist ~": null, // NEEDS TRANSLATION
	"/aht viewpunishments - View automatic helpticket punishments. Requires: whitelist ~": null, // NEEDS TRANSLATION
	"/aht togglepunishments [on | off] - Turn [on | off] automatic helpticket punishments. Requires: whitelist ~": null, // NEEDS TRANSLATION
	"/aht stats - View success rates of the Artemis ticket handler. Requires: whitelist ~": null, // NEEDS TRANSLATION
	"Invalid month. Must be in YYYY-MM format.": null, // NEEDS TRANSLATION
	"Artemis Ticket Stats": null, // NEEDS TRANSLATION
	"Artemis ticket stats": null, // NEEDS TRANSLATION
	"Total:": null, // NEEDS TRANSLATION
	"Success rate:": null, // NEEDS TRANSLATION
	"Failure rate:": null, // NEEDS TRANSLATION
	"Day stats:": null, // NEEDS TRANSLATION
	"Marked as inaccurate": null, // NEEDS TRANSLATION
	"Artemis Ticket Logs": null, // NEEDS TRANSLATION
	"Artemis ticket logs": null, // NEEDS TRANSLATION
	"All hits:": null, // NEEDS TRANSLATION
	"No hits found.": null, // NEEDS TRANSLATION
	"Invalid date.": null, // NEEDS TRANSLATION
	"This room has no quotes.": null, // NEEDS TRANSLATION
	"Added by {userid} on {time}": null, // NEEDS TRANSLATION
	"/randquote [showauthor] - Show a random quote from the room. Add 'showauthor' to see who added it and when.": null, // NEEDS TRANSLATION
	"Invalid quote.": null, // NEEDS TRANSLATION
	"\"{target}\" is already quoted in this room.": null, // NEEDS TRANSLATION
	"Your quote cannot exceed 8192 characters.": null, // NEEDS TRANSLATION
	"This room already has {MAX_QUOTES} quotes, which is the maximum for private rooms.": null, // NEEDS TRANSLATION
	"{user.name} added a new quote: \"{collapsedQuote}\".": null, // NEEDS TRANSLATION
	"/addquote [quote] - Adds [quote] to the room's quotes. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"Invalid index.": null, // NEEDS TRANSLATION
	"Quote not found.": null, // NEEDS TRANSLATION
	"{user.name} removed quote indexed at {quoteNumber}: \"{collapsedQuote}\" (originally added by {author}).": null, // NEEDS TRANSLATION
	"/removequote [index] - Removes the quote from the room's quotes. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/viewquote [index][, params] - View the quote from the room's quotes.": null, // NEEDS TRANSLATION
	"If 'showauthor' is used for the [params] argument, it shows who added the quote and when.": null, // NEEDS TRANSLATION
	"/quotes [room] - Shows all quotes for [room]. Defaults the room the command is used in.": null, // NEEDS TRANSLATION
	"/quote as a method of adding quotes has been deprecated. Use /addquote instead.": null, // NEEDS TRANSLATION
	"[Quotes]": null, // NEEDS TRANSLATION
	"Quotes for {roomTitle} ({quoteCount}):": null, // NEEDS TRANSLATION
	"This room has no FAQs.": null, // NEEDS TRANSLATION
	"Invalid topic.": null, // NEEDS TRANSLATION
	"You said:": null, // NEEDS TRANSLATION
	"Our automated reply:": null, // NEEDS TRANSLATION
	"Send to {roomTitle} if you weren't answered correctly.": null, // NEEDS TRANSLATION
	"Your input must be in the format [input] => [faq].": null, // NEEDS TRANSLATION
	"Your FAQ ID can't be empty.": null, // NEEDS TRANSLATION
	"FAQ ID \"{faq}\" not found.": null, // NEEDS TRANSLATION
	"Too many arguments.": null, // NEEDS TRANSLATION
	"Your given string is too long.": null, // NEEDS TRANSLATION
	"One or more of your arguments is too long. Use less than 100 characters.": null, // NEEDS TRANSLATION
	"Invalid use of |. Make sure you have an option on either side.": null, // NEEDS TRANSLATION
	"That regex is already stored.": null, // NEEDS TRANSLATION
	"There are no regexes for {faq}.": null, // NEEDS TRANSLATION
	"Your provided index is invalid.": null, // NEEDS TRANSLATION
	"Invalid terms.": null, // NEEDS TRANSLATION
	"One of your terms is too long.": null, // NEEDS TRANSLATION
	"The autoresponse filter in this room has no ignored terms.": null, // NEEDS TRANSLATION
	"This room does not have an autoresponder configured.": null, // NEEDS TRANSLATION
	"No answer found.": null, // NEEDS TRANSLATION
	"/question [question] - Asks the current room's auto-response filter a question.": null, // NEEDS TRANSLATION
	"This room has not configured an autoresponder.": null, // NEEDS TRANSLATION
	"The Help auto-response filter is currently set to: ON": null, // NEEDS TRANSLATION
	"The Help auto-response filter is currently set to: OFF": null, // NEEDS TRANSLATION
	"Secret rooms cannot enable an autoresponder.": null, // NEEDS TRANSLATION
	"The Autoresponder for this room is already enabled.": null, // NEEDS TRANSLATION
	"The Autoresponder for this room is already disabled.": null, // NEEDS TRANSLATION
	"{user.name} disabled the auto-response filter.": null, // NEEDS TRANSLATION
	"{user.name} enabled the auto-response filter.": null, // NEEDS TRANSLATION
	"This room has not configured an auto-response filter.": null, // NEEDS TRANSLATION
	"You cannot use raw regex - use /autoresponder add instead.": null, // NEEDS TRANSLATION
	"{user.name} added regex for \"{input}\" to the autoresponder.": null, // NEEDS TRANSLATION
	"{room.title} has not configured an auto-response filter.": null, // NEEDS TRANSLATION
	"{user.name} removed regex {num} from the usable regexes for {faq}.": null, // NEEDS TRANSLATION
	"{user.name} added {count} terms to the autoresponder ignore list.": null, // NEEDS TRANSLATION
	"{user.name} added {count} term to the autoresponder ignore list.": null, // NEEDS TRANSLATION
	"{user.name} removed {count} terms from the autoresponder ignore list.": null, // NEEDS TRANSLATION
	"{user.name} removed {count} term from the autoresponder ignore list.": null, // NEEDS TRANSLATION
	"<code>/autoresponder view [page]</code> - Views the Autoresponder page [page]. (options: keys, stats)": null, // NEEDS TRANSLATION
	"<code>/autoresponder toggle [on | off]</code> - Enables or disables the Autoresponder for the current room. Requires: @ # ~": null, // NEEDS TRANSLATION
	"<code>/autoresponder add [input] => [faq]</code> - Adds regex made from the input string to the current room's Autoresponder, to respond with [faq] to matches.": null, // NEEDS TRANSLATION
	"<code>/autoresponder remove [faq], [regex index]</code> - removes the regex matching the [index] from the current room's responses for [faq].": null, // NEEDS TRANSLATION
	"Indexes can be found in /autoresponder keys.": null, // NEEDS TRANSLATION
	"Requires: @ # ~": null, // NEEDS TRANSLATION
	"{room.title} does not have a configured autoresponder.": null, // NEEDS TRANSLATION
	"Back to all": null, // NEEDS TRANSLATION
	"Stats for the {roomTitle} auto-response filter on {date}.": null, // NEEDS TRANSLATION
	"Stats for the {roomTitle} auto-response filter.": null, // NEEDS TRANSLATION
	"No stats.": null, // NEEDS TRANSLATION
	"[Autoresponder Stats]": null, // NEEDS TRANSLATION
	"No stats for {date}.": null, // NEEDS TRANSLATION
	"Total messages answered: {answeredCount}": null, // NEEDS TRANSLATION
	"All messages and the corresponding answers (FAQs):": null, // NEEDS TRANSLATION
	"Message:": null, // NEEDS TRANSLATION
	"FAQ: {entry.faqName}": null, // NEEDS TRANSLATION
	"Regex:": null, // NEEDS TRANSLATION
	"No date specified.": null, // NEEDS TRANSLATION
	"Dates with stats:": null, // NEEDS TRANSLATION
	"(total matches: {totalCount})": null, // NEEDS TRANSLATION
	"[Autoresponder Regexes]": null, // NEEDS TRANSLATION
	"{roomTitle} responder regexes and responses:": null, // NEEDS TRANSLATION
	"Index": null, // NEEDS TRANSLATION
	"Regex": null, // NEEDS TRANSLATION
	"{roomTitle} Autoresponder ignore list": null, // NEEDS TRANSLATION
	"{roomTitle} responder terms to ignore:": null, // NEEDS TRANSLATION
	"No terms on ignore list.": null, // NEEDS TRANSLATION
	"{roomTitle} Autoresponder": null, // NEEDS TRANSLATION
	"Specify a filter page to view.": null, // NEEDS TRANSLATION
	"Options:": null, // NEEDS TRANSLATION
	"Regex keys": null, // NEEDS TRANSLATION
	"Ignore list": null, // NEEDS TRANSLATION
	"The time remaining for this event is not available": null, // NEEDS TRANSLATION
	"This event will start soon": null, // NEEDS TRANSLATION
	"This event has started": null, // NEEDS TRANSLATION
	"This event will start in: {duration}": null, // NEEDS TRANSLATION
	"There are currently no planned upcoming events for this room.": null, // NEEDS TRANSLATION
	"Event Name:": null, // NEEDS TRANSLATION
	"Event Aliases:": null, // NEEDS TRANSLATION
	"Event Categories:": null, // NEEDS TRANSLATION
	"Event Description:": null, // NEEDS TRANSLATION
	"Event Date:": null, // NEEDS TRANSLATION
	"You're missing a command parameter - to see this command's syntax, use /help roomevents.": null, // NEEDS TRANSLATION
	"Event names should not exceed 50 characters.": null, // NEEDS TRANSLATION
	"Event dates should not exceed 150 characters.": null, // NEEDS TRANSLATION
	"Event descriptions should not exceed 1000 characters.": null, // NEEDS TRANSLATION
	"Event names must contain at least one alphanumerical character.": null, // NEEDS TRANSLATION
	"\"{eventId}\" is already the name of a category.": null, // NEEDS TRANSLATION
	"{user.name} edited the roomevent titled \"{eventNameActual}\".": null, // NEEDS TRANSLATION
	"{user.name} added a roomevent titled \"{eventNameActual}\".": null, // NEEDS TRANSLATION
	"Usage: /roomevents rename [old name], [new name]": null, // NEEDS TRANSLATION
	"The new name must be different from the old one.": null, // NEEDS TRANSLATION
	"Event names must contain at least one alphanumeric character.": null, // NEEDS TRANSLATION
	"There is no event titled \"{oldName}\".": null, // NEEDS TRANSLATION
	"\"{newName}\" is already an event, alias, or category.": null, // NEEDS TRANSLATION
	"{user.name} renamed the roomevent titled \"{originalName}\" to \"{newName}\".": null, // NEEDS TRANSLATION
	"There are currently no planned upcoming events for this room to start.": null, // NEEDS TRANSLATION
	"Usage: /roomevents start [event name]": null, // NEEDS TRANSLATION
	"There is no event titled '{target}'. Check spelling?": null, // NEEDS TRANSLATION
	"The event {eventName} has already started.": null, // NEEDS TRANSLATION
	"A new roomevent in {roomTitle} has started!": null, // NEEDS TRANSLATION
	"The \"{eventName}\" roomevent has started!": null, // NEEDS TRANSLATION
	"There are currently no planned upcoming events for this room to remove.": null, // NEEDS TRANSLATION
	"Usage: /roomevents remove [event name]": null, // NEEDS TRANSLATION
	"To delete aliases, use /roomevents removealias.": null, // NEEDS TRANSLATION
	"{user.name} removed a roomevent titled \"{target}\".": null, // NEEDS TRANSLATION
	"Usage: /roomevents view [event name, alias, or category]": null, // NEEDS TRANSLATION
	"There is no event or category titled '{target}'. Check spelling?": null, // NEEDS TRANSLATION
	"Usage: /roomevents addalias [alias], [event name]. Aliases must contain at least one alphanumeric character.": null, // NEEDS TRANSLATION
	"There are currently no scheduled events.": null, // NEEDS TRANSLATION
	"{user.name} added an alias \"{alias}\" for the roomevent \"{eventId}\".": null, // NEEDS TRANSLATION
	"Usage: /roomevents removealias <alias>": null, // NEEDS TRANSLATION
	"{target} isn't an alias.": null, // NEEDS TRANSLATION
	"{user.name} removed the alias \"{target}\"": null, // NEEDS TRANSLATION
	"Usage: /roomevents addtocategory [event name], [category].": null, // NEEDS TRANSLATION
	"There is no event or alias titled \"{eventId}\".": null, // NEEDS TRANSLATION
	"There is already an event or alias titled \"{categoryId}\".": null, // NEEDS TRANSLATION
	"There is no category titled \"{categoryId}\". To create it, use /roomevents addcategory {newCategoryId}.": null, // NEEDS TRANSLATION
	"The event \"{eventId}\" is already in the \"{categoryId}\" category.": null, // NEEDS TRANSLATION
	"{user.name} added the roomevent \"{eventId}\" to the category \"{categoryId}\".": null, // NEEDS TRANSLATION
	"Usage: /roomevents removefromcategory [event name], [category].": null, // NEEDS TRANSLATION
	"There is no category titled \"{categoryId}\".": null, // NEEDS TRANSLATION
	"The event \"{eventId}\" isn't in the \"{categoryId}\" category.": null, // NEEDS TRANSLATION
	"{user.name} removed the roomevent \"{eventId}\" from the category \"{categoryId}\".": null, // NEEDS TRANSLATION
	"Usage: /roomevents addcategory [category name]. Categories must contain at least one alphanumeric character.": null, // NEEDS TRANSLATION
	"The category \"{target}\" already exists.": null, // NEEDS TRANSLATION
	"{user.name} added the category \"{categoryId}\".": null, // NEEDS TRANSLATION
	"Usage: /roomevents removecategory [category name].": null, // NEEDS TRANSLATION
	"The category \"{target}\" doesn't exist.": null, // NEEDS TRANSLATION
	"{user.name} removed the category \"{categoryId}\".": null, // NEEDS TRANSLATION
	"There are no roomevent categories in {room.title}.": null, // NEEDS TRANSLATION
	"Roomevent categories in {room.title}: {categoryList}": null, // NEEDS TRANSLATION
	"Invalid column name \"{columnName}\". Please use one of: date, desc, name.": null, // NEEDS TRANSLATION
	"sorted by column: {columnName} in descending order": null, // NEEDS TRANSLATION
	"sorted by column: {columnName} in ascending order (by default)": null, // NEEDS TRANSLATION
	"sorted by column: {columnName} in ascending order": null, // NEEDS TRANSLATION
	"<code>/roomevents</code>: displays a list of upcoming room-specific events.": null, // NEEDS TRANSLATION
	"<code>/roomevents add [event name] | [event date/time] | [event description]</code>: adds a room event. A timestamp in event date/time field like YYYY-MM-DD HH:MM±hh:mm will be displayed in user's timezone. Requires: @ # ~": null, // NEEDS TRANSLATION
	"<code>/roomevents start [event name]</code>: declares to the room that the event has started. Requires: @ # ~": null, // NEEDS TRANSLATION
	"<code>/roomevents remove [event name]</code>: deletes an event. Requires: @ # ~": null, // NEEDS TRANSLATION
	"<code>/roomevents rename [old event name] | [new name]</code>: renames an event. Requires: @ # ~": null, // NEEDS TRANSLATION
	"<code>/roomevents addalias [alias] | [event name]</code>: adds an alias for the event. Requires: @ # ~": null, // NEEDS TRANSLATION
	"<code>/roomevents removealias [alias]</code>: removes an event alias. Requires: @ # ~": null, // NEEDS TRANSLATION
	"<code>/roomevents addcategory [category]</code>: adds an event category. Requires: @ # ~": null, // NEEDS TRANSLATION
	"<code>/roomevents removecategory [category]</code>: removes an event category. Requires: @ # ~": null, // NEEDS TRANSLATION
	"<code>/roomevents addtocategory [event name] | [category]</code>: adds the event to a category. Requires: @ # ~": null, // NEEDS TRANSLATION
	"<code>/roomevents removefromcategory [event name] | [category]</code>: removes the event from a category. Requires: @ # ~": null, // NEEDS TRANSLATION
	"<code>/roomevents sortby [column name] | [asc/desc (optional)]</code> sorts events table by column name and an optional argument to ascending or descending order. Ascending order is default. Requires: @ # ~": null, // NEEDS TRANSLATION
	"<code>/roomevents view [event name or category]</code>: displays information about a specific event or category of events.": null, // NEEDS TRANSLATION
	"<code>/roomevents viewcategories</code>: displays a list of event categories for that room.": null, // NEEDS TRANSLATION
	"You are not allowed to use raw HTML in roomfaqs.": null, // NEEDS TRANSLATION
	"You are not allowed to use filtered words in roomfaq entries.": null, // NEEDS TRANSLATION
	"FAQ topics should not exceed 25 characters.": null, // NEEDS TRANSLATION
	"FAQ entries must not exceed {maxLength} characters.": null, // NEEDS TRANSLATION
	"FAQ entries must include at least one character.": null, // NEEDS TRANSLATION
	"{name} edited an FAQ for '{topic}'": null, // NEEDS TRANSLATION
	"{name} added an FAQ for '{topic}'": null, // NEEDS TRANSLATION
	"{name} removed the FAQ for '{topic}'": null, // NEEDS TRANSLATION
	"You cannot make the alias have the same name as the topic.": null, // NEEDS TRANSLATION
	"You cannot overwrite an existing topic with an alias; please delete the topic first.": null, // NEEDS TRANSLATION
	"The topic {topic} was not found in this room's faq list.": null, // NEEDS TRANSLATION
	"You cannot make an alias of an alias. Use /addalias {alias}, {aliasedTopic} instead.": null, // NEEDS TRANSLATION
	"{name} added an alias for '{topic}': {alias}": null, // NEEDS TRANSLATION
	"This room has no FAQ topics.": null, // NEEDS TRANSLATION
	"'{target}' is an invalid topic.": null, // NEEDS TRANSLATION
	"/roomfaq - Shows the list of all available FAQ topics": null, // NEEDS TRANSLATION
	"/roomfaq <topic> - Shows the FAQ for <topic>.": null, // NEEDS TRANSLATION
	"/addfaq <topic>, <text> - Adds an entry for <topic> in this room or updates it. Requires: @ # ~": null, // NEEDS TRANSLATION
	"/addhtmlfaq <topic>, <text> - Adds or updates an entry for <topic> with HTML support. Requires: # ~": null, // NEEDS TRANSLATION
	"/addalias <alias>, <topic> - Adds <alias> as an alias for <topic>, displaying it when users use /roomfaq <alias>. Requires: @ # ~": null, // NEEDS TRANSLATION
	"/removefaq <topic> - Removes the entry for <topic> in this room. If used on an alias, removes the alias. Requires: @ # ~": null, // NEEDS TRANSLATION
	"[Room FAQs]": null, // NEEDS TRANSLATION
	"FAQs for {roomTitle}:": null, // NEEDS TRANSLATION
	"Aliases:": null, // NEEDS TRANSLATION
	"Delete FAQ": null, // NEEDS TRANSLATION
	"Name": null, // NEEDS TRANSLATION
	"Perfect Score": null, // NEEDS TRANSLATION
	"Players who finish the hunt without submitting a single wrong answer get a shoutout!": null, // NEEDS TRANSLATION
	"{names} have completed the hunt without a single wrong answer!": null, // NEEDS TRANSLATION
	"{names} has completed the hunt without a single wrong answer!": null, // NEEDS TRANSLATION
	"Bonus Round": null, // NEEDS TRANSLATION
	"Players can choose whether or not they choose to complete the 4th question.": null, // NEEDS TRANSLATION
	"This twist requires at least four questions.  Please reset the hunt and make it again.": null, // NEEDS TRANSLATION
	"(You may choose to skip this question using ``/scavenge skip``.)": null, // NEEDS TRANSLATION
	"The hunt was not set up correctly.  Please wait for the host to reset the hunt and create a new one.": null, // NEEDS TRANSLATION
	"You have opted to skip the current question.": null, // NEEDS TRANSLATION
	"{names} have completed the hunt without skipping the last question!": null, // NEEDS TRANSLATION
	"{names} has completed the hunt without skipping the last question!": null, // NEEDS TRANSLATION
	"Incognito": null, // NEEDS TRANSLATION
	"Upon answering the last question correctly, the player's finishing time will not be announced in the room!  Results will only be known at the end of the hunt.": null, // NEEDS TRANSLATION
	"Congratulations! You have gotten the correct answer.": null, // NEEDS TRANSLATION
	"This is a special style where finishes aren't announced! To see your placement, wait for the hunt to end. Until then, it's your secret that you finished!": null, // NEEDS TRANSLATION
	"Spam Filter": null, // NEEDS TRANSLATION
	"Every wrong answer adds 30 seconds to your final time!": null, // NEEDS TRANSLATION
	"Perfect!": null, // NEEDS TRANSLATION
	"1 incorrect guess": null, // NEEDS TRANSLATION
	"{wrong} incorrect guesses": null, // NEEDS TRANSLATION
	"{name} has finished the hunt! (Final Time: {time} - {deductionMessage} - BLITZ)": null, // NEEDS TRANSLATION
	"{name} has finished the hunt! (Final Time: {time} - {deductionMessage})": null, // NEEDS TRANSLATION
	"Blind Incognito": null, // NEEDS TRANSLATION
	"Upon completing the last question, neither you nor other players will know if the last question is correct!  You may be in for a nasty surprise when the hunt ends!": null, // NEEDS TRANSLATION
	"That may or may not be the right answer - if you aren't confident, you can try again!": null, // NEEDS TRANSLATION
	"Time Trial": null, // NEEDS TRANSLATION
	"Time starts when the player starts the hunt!": null, // NEEDS TRANSLATION
	"This twist requires at least four questions. Please reset the hunt and make it again.": null, // NEEDS TRANSLATION
	"You already have started the hunt as {this.altIps[altIp].name}.": null, // NEEDS TRANSLATION
	"You joined the scavenger hunt! Use the command /scavenge to answer.": null, // NEEDS TRANSLATION
	"You have already joined the hunt.": null, // NEEDS TRANSLATION
	"{name} is the {place} player to finish the hunt! ({takenTime} - BLITZ)": null, // NEEDS TRANSLATION
	"{name} is the {place} player to finish the hunt! ({takenTime})": null, // NEEDS TRANSLATION
	"Scavengers Feud": null, // NEEDS TRANSLATION
	"After completing the hunt, players will guess what the most common incorrect answer for each question is.": null, // NEEDS TRANSLATION
	"Please enter what you think are the most common incorrect answers to each question.  (Enter your guesses in the order of the previous questions, and separate them with a comma)": null, // NEEDS TRANSLATION
	"Any": null, // NEEDS TRANSLATION
	"No wrong answers!": null, // NEEDS TRANSLATION
	"No one guessed correctly!": null, // NEEDS TRANSLATION
	"Most common incorrect answers:": null, // NEEDS TRANSLATION
	"Pointless": null, // NEEDS TRANSLATION
	"Players get bonus points for guessing the least commonly guessed answers.": null, // NEEDS TRANSLATION
	"Least frequent correct answers:": null, // NEEDS TRANSLATION
	"Minesweeper": null, // NEEDS TRANSLATION
	"The huntmaker adds 'mines' to the hunt using `!(mine)` - players that dodge all mines get extra points, while the huntmaker gets points every time a mine is hit.": null, // NEEDS TRANSLATION
	"This twist requires at least one mine for each question. Please reset the hunt and make it again.": null, // NEEDS TRANSLATION
	"The hint for question {questionNum} has been edited.": null, // NEEDS TRANSLATION
	"The answer for question {questionNum} has been edited.": null, // NEEDS TRANSLATION
	"That is not the answer - try again!": null, // NEEDS TRANSLATION
	"Solution:": null, // NEEDS TRANSLATION
	"Mines:": null, // NEEDS TRANSLATION
	"{names} have completed the hunt without hitting a single mine!": null, // NEEDS TRANSLATION
	"{names} has completed the hunt without hitting a single mine!": null, // NEEDS TRANSLATION
	"KO Games": null, // NEEDS TRANSLATION
	"You are not allowed to join this scavenger hunt.": null, // NEEDS TRANSLATION
	"No one has completed the hunt - the round has been void.": null, // NEEDS TRANSLATION
	"Round {game.round} - {finishers} have successfully completed the last hunt and have moved on to the next round!": null, // NEEDS TRANSLATION
	"Round {game.round} - {eliminatedList} has been eliminated! {survivors} have successfully completed the last hunt and have moved on to the next round!": null, // NEEDS TRANSLATION
	"Round {game.round} - {eliminatedList} have been eliminated! {survivors} have successfully completed the last hunt and have moved on to the next round!": null, // NEEDS TRANSLATION
	"Congratulations to the winner - {winner}!": null, // NEEDS TRANSLATION
	"Everyone has been eliminated!  Better luck next time!": null, // NEEDS TRANSLATION
	"Scavenger Games": null, // NEEDS TRANSLATION
	"Point Rally": null, // NEEDS TRANSLATION
	"Round {++game.round}": null, // NEEDS TRANSLATION
	"Jump Start": null, // NEEDS TRANSLATION
	"{targetUser.name} has received their first hint early.": null, // NEEDS TRANSLATION
	"The first hint to the next hunt is:": null, // NEEDS TRANSLATION
	"Early Hint": null, // NEEDS TRANSLATION
	"You may start guessing!": null, // NEEDS TRANSLATION
	"The hunt is not open for guesses yet!": null, // NEEDS TRANSLATION
	"An {type} Scavenger Hunt by {hosts} has been started by {staffHost}.": null, // NEEDS TRANSLATION
	"An {type} Scavenger Hunt by {hosts} has been started.": null, // NEEDS TRANSLATION
	"A {type} Scavenger Hunt by {hosts} has been started by {staffHost}.": null, // NEEDS TRANSLATION
	"A {type} Scavenger Hunt by {hosts} has been started.": null, // NEEDS TRANSLATION
	"The first hint is currently being handed out to early finishers.": null, // NEEDS TRANSLATION
	"Team Scavs": null, // NEEDS TRANSLATION
	"Your team has already completed the hunt!": null, // NEEDS TRANSLATION
	"You are not allowed to join this scavenger hunt as you are not on any of the teams.": null, // NEEDS TRANSLATION
	"Teams have not been set up yet.  Please reset the hunt.": null, // NEEDS TRANSLATION
	"<strong>{name}</strong> has gotten the correct answer ({answer}) for question #{questionNum}.": null, // NEEDS TRANSLATION
	"{name} has guessed \"{guess}\".": null, // NEEDS TRANSLATION
	"<strong>{name}</strong> has gotten the correct answer for question #{questionNum}.  Your team has completed the hunt!": null, // NEEDS TRANSLATION
	"[start]": null, // NEEDS TRANSLATION
	"[Unrated]": null, // NEEDS TRANSLATION
	"[{hiddenCount} hidden questions]": null, // NEEDS TRANSLATION
	"The scavenger queue is currently empty.": null, // NEEDS TRANSLATION
	"By": null, // NEEDS TRANSLATION
	"Questions": null, // NEEDS TRANSLATION
	"Auto Timer Duration: {timerDuration} minutes": null, // NEEDS TRANSLATION
	"Auto Dequeue:": null, // NEEDS TRANSLATION
	"ON": null, // NEEDS TRANSLATION
	"Start the next hunt": null, // NEEDS TRANSLATION
	"Invalid mod. Starting the hunt without the mod {modId}.": null, // NEEDS TRANSLATION
	"This hunt is part of an ongoing {twistName}.": null, // NEEDS TRANSLATION
	"This hunt uses the twist {twistName}.": null, // NEEDS TRANSLATION
	"A new {type} scavenger hunt by {hosts} has been started by {staffHost}.": null, // NEEDS TRANSLATION
	"A new {type} scavenger hunt by {hosts} has been started.": null, // NEEDS TRANSLATION
	"An {type} scavenger hunt by {hosts} has been started by {staffHost}.": null, // NEEDS TRANSLATION
	"An {type} scavenger hunt by {hosts} has been started.": null, // NEEDS TRANSLATION
	"A {type} scavenger hunt by {hosts} has been started by {staffHost}.": null, // NEEDS TRANSLATION
	"A {type} scavenger hunt by {hosts} has been started.": null, // NEEDS TRANSLATION
	"Hint #1:": null, // NEEDS TRANSLATION
	"(To answer, use <kbd>/scavenge <em>ANSWER</em></kbd>)": null, // NEEDS TRANSLATION
	"You cannot join your own hunt! If you wish to view your questions, use /viewhunt instead!": null, // NEEDS TRANSLATION
	"You already have one alt in the hunt.": null, // NEEDS TRANSLATION
	"You have not joined the scavenger hunt.": null, // NEEDS TRANSLATION
	"You have already completed this scavenger hunt.": null, // NEEDS TRANSLATION
	"You have left the scavenger hunt.": null, // NEEDS TRANSLATION
	"Time limit must be under 24 hours (you asked for {asked}).": null, // NEEDS TRANSLATION
	"Final Hint #{current.number}:": null, // NEEDS TRANSLATION
	"Hint #{current.number}:": null, // NEEDS TRANSLATION
	"Extra Hints:": null, // NEEDS TRANSLATION
	"Hint": null, // NEEDS TRANSLATION
	"Answer": null, // NEEDS TRANSLATION
	"{name} has finished the hunt in {place} place! ({time} - BLITZ)": null, // NEEDS TRANSLATION
	"{name} has finished the hunt in {place} place! ({time})": null, // NEEDS TRANSLATION
	"The {type} scavenger hunt by {hosts} was ended by {ender}.": null, // NEEDS TRANSLATION
	"The {type} scavenger hunt by {hosts} was ended automatically.": null, // NEEDS TRANSLATION
	"{place} place: {who}.": null, // NEEDS TRANSLATION
	"Consolation Prize: {consolation}": null, // NEEDS TRANSLATION
	"A scavenger hunt with multiple hosts needs points!": null, // NEEDS TRANSLATION
	"A scavenger hunt with multiple hosts has ended.": null, // NEEDS TRANSLATION
	"The scavenger hunt has been reset by {ender}.": null, // NEEDS TRANSLATION
	"The hunt has been reset automatically, due to the lack of finishers.": null, // NEEDS TRANSLATION
	"A scavenger hunt by {hosts} has been automatically started. It will automatically end in {duration} minutes.": null, // NEEDS TRANSLATION
	"You have been caught for doing your own hunt; staff has been notified.": null, // NEEDS TRANSLATION
	"{name} has been caught trying to do their own hunt.": null, // NEEDS TRANSLATION
	"You have been caught for attempting a hunt with multiple connections on your account.  Staff has been notified.": null, // NEEDS TRANSLATION
	"{name} has been caught attempting a hunt with {uniqueConnections} connections on the account. The user has also been given 1 infraction point on the player leaderboard.": null, // NEEDS TRANSLATION
	"Please do not leak the answer. Use /scavenge [guess] to submit your guess instead.": null, // NEEDS TRANSLATION
	"Your final question is missing an answer": null, // NEEDS TRANSLATION
	"You must have at least 3 hints and answers": null, // NEEDS TRANSLATION
	"Empty answer - only alphanumeric characters will count in answers.": null, // NEEDS TRANSLATION
	"Empty question.": null, // NEEDS TRANSLATION
	"The hint has been changed to:": null, // NEEDS TRANSLATION
	"There is no scavenger hunt currently running.": null, // NEEDS TRANSLATION
	"There is already a scavenger game running.": null, // NEEDS TRANSLATION
	"You cannot start a scavenger game where there is already a scavenger hunt in the room.": null, // NEEDS TRANSLATION
	"Invalid game mode.": null, // NEEDS TRANSLATION
	"A {gameName} has been created by {userName}.": null, // NEEDS TRANSLATION
	"A game of {gameName} has been started!": null, // NEEDS TRANSLATION
	"There is no scavenger game currently running.": null, // NEEDS TRANSLATION
	"The {gameName} has been forcibly ended by {userName}.": null, // NEEDS TRANSLATION
	"The {gameName} has been forcibly ended.": null, // NEEDS TRANSLATION
	"Invalid player.": null, // NEEDS TRANSLATION
	"User '{targetId}' has been kicked from the {gameName}.": null, // NEEDS TRANSLATION
	"Unable to kick user '{targetId}'.": null, // NEEDS TRANSLATION
	"This scavenger game does not have a leaderboard.": null, // NEEDS TRANSLATION
	"User '{targetId}' does not have any points on the scavenger games leaderboard.": null, // NEEDS TRANSLATION
	"User '{rankName}' is #{place} on the scavenger games leaderboard with {points} points.": null, // NEEDS TRANSLATION
	"There is currently no game of Team Scavs going on.": null, // NEEDS TRANSLATION
	"The team {teamName} already exists.": null, // NEEDS TRANSLATION
	"The user you specified is currently not online": null, // NEEDS TRANSLATION
	"The user is already a member of another team.": null, // NEEDS TRANSLATION
	"A new team \"{team}\" has been created with {leaderName} as the leader.": null, // NEEDS TRANSLATION
	"The team {target} does not exist.": null, // NEEDS TRANSLATION
	"The team \"{team}\" has been removed.": null, // NEEDS TRANSLATION
	"You must be the leader of a team to add people into the team.": null, // NEEDS TRANSLATION
	"Please select a user that is currently online.": null, // NEEDS TRANSLATION
	"{targetName} is already in a team.": null, // NEEDS TRANSLATION
	"You have joined {teamName}.": null, // NEEDS TRANSLATION
	"{names} have been added into {team}.": null, // NEEDS TRANSLATION
	"{names} has been added into {team}.": null, // NEEDS TRANSLATION
	"Invalid team.": null, // NEEDS TRANSLATION
	"User \"{userid}\" is not in team \"{teamName}.\"": null, // NEEDS TRANSLATION
	"You cannot remove \"{userid}\", who is the leader of \"{teamName}\".": null, // NEEDS TRANSLATION
	"{userid} was removed from \"{teamName}.\"": null, // NEEDS TRANSLATION
	"User \"{userid}\" is not currently online.": null, // NEEDS TRANSLATION
	"User \"{userid}\" is already part of \"{teamName}.\"": null, // NEEDS TRANSLATION
	"User \"{userid}\" is already part of another team - \"{otherTeam}\".": null, // NEEDS TRANSLATION
	"{targetName} was added to \"{teamName}.\"": null, // NEEDS TRANSLATION
	"You are not currently part of this Team Scavs game.": null, // NEEDS TRANSLATION
	"Question #{questionNum} guesses:": null, // NEEDS TRANSLATION
	"Please include a message as the note.": null, // NEEDS TRANSLATION
	"Note from {userName}:": null, // NEEDS TRANSLATION
	"/tscav createteam [team name], [leader name] - creates a new team for the current Team Scavs game. (Requires: % @ * # ~)": null, // NEEDS TRANSLATION
	"/tscav deleteteam [team name] - deletes an existing team for the current Team Scavs game. (Requires: % @ * # ~)": null, // NEEDS TRANSLATION
	"/tscav addplayer [user] - allows a team leader to add a player onto their team.": null, // NEEDS TRANSLATION
	"/tscav editplayers [team name], [added user | -removed user], [...] (use - preceding a user's name to remove a user) - Edits the players within an existing team. (Requires: % @ * # ~)": null, // NEEDS TRANSLATION
	"/tscav teams - views the list of teams and the players on each team.": null, // NEEDS TRANSLATION
	"/tscav guesses - views the list of guesses already submitted by your team for the current question.": null, // NEEDS TRANSLATION
	"/tscav chat [message] - adds a message that can be seen by all of your teammates in the Team Scavs game.": null, // NEEDS TRANSLATION
	"Scavenger hunts can only be created in the scavengers room.": null, // NEEDS TRANSLATION
	"There is already a game in this room - {room.game.title}.": null, // NEEDS TRANSLATION
	"There are currently hunts in the queue! If you would like to start the hunt anyways, use {forceCommand}.": null, // NEEDS TRANSLATION
	"There are no hunts in the database.": null, // NEEDS TRANSLATION
	"You specified an invalid hunt number.": null, // NEEDS TRANSLATION
	"The user(s) you specified as the host is not online, or is not in the room.": null, // NEEDS TRANSLATION
	"A new scavenger hunt was created by {user.name}.": null, // NEEDS TRANSLATION
	"(started by - {staffHostName})": null, // NEEDS TRANSLATION
	"The current {gameTypeMsg} scavenger hunt by {hostersMsg} has been up for: {elapsedMsg}": null, // NEEDS TRANSLATION
	"The timer is currently off.": null, // NEEDS TRANSLATION
	"The hunt ends in: {endsIn}": null, // NEEDS TRANSLATION
	"Completed ({completedCount}): {finishers}": null, // NEEDS TRANSLATION
	"You finished the hunt in: {finisher.time}.": null, // NEEDS TRANSLATION
	"You joined the hunt {joinedFor} ago.": null, // NEEDS TRANSLATION
	"You have not joined the hunt.": null, // NEEDS TRANSLATION
	"Users on this Question": null, // NEEDS TRANSLATION
	"Completed": null, // NEEDS TRANSLATION
	"You are not currently participating in the hunt.": null, // NEEDS TRANSLATION
	"You must specify a timer length that is a positive number.": null, // NEEDS TRANSLATION
	"The scavenger timer has been turned off.": null, // NEEDS TRANSLATION
	"The scavenger timer has been turned off by {user.name}.": null, // NEEDS TRANSLATION
	"The scavenger timer has been set to {result} minutes.": null, // NEEDS TRANSLATION
	"The scavenger timer has been set to {result} minutes by {user.name}.": null, // NEEDS TRANSLATION
	"You already have staff permissions for this hunt.": null, // NEEDS TRANSLATION
	"{user.name} has inherited staff permissions for the current hunt.": null, // NEEDS TRANSLATION
	"{user.name} has reset the scavenger hunt.": null, // NEEDS TRANSLATION
	"{user.name} has reset the scavenger hunt, and placed it in the queue.": null, // NEEDS TRANSLATION
	"No one has finished the hunt yet.  Use /forceendhunt if you want to end the hunt and reveal the answers.": null, // NEEDS TRANSLATION
	"This hunt has 1 finisher; use /endhunt": null, // NEEDS TRANSLATION
	"This hunt has {completed.length} finishers; use /endhunt": null, // NEEDS TRANSLATION
	"{user.name} has ended the scavenger hunt.": null, // NEEDS TRANSLATION
	"There is currently no hunt to be viewed.": null, // NEEDS TRANSLATION
	"You cannot edit the hints and answers if you are not the host.": null, // NEEDS TRANSLATION
	"/scavengers edithunt [question number], [hint | answer], [value] - edits the current scavenger hunt.": null, // NEEDS TRANSLATION
	"You cannot add more hints if you are not the host.": null, // NEEDS TRANSLATION
	"Invalid question number.": null, // NEEDS TRANSLATION
	"The hint cannot be left empty.": null, // NEEDS TRANSLATION
	"Question #{questionNum} hint - spoiler: {hint}": null, // NEEDS TRANSLATION
	"Scavenger hint for Q{questionNum}": null, // NEEDS TRANSLATION
	"You cannot remove hints if you are not the host.": null, // NEEDS TRANSLATION
	"Invalid hint number.": null, // NEEDS TRANSLATION
	"Hint has been removed.": null, // NEEDS TRANSLATION
	"You cannot edit hints if you are not the host.": null, // NEEDS TRANSLATION
	"Hint has been modified.": null, // NEEDS TRANSLATION
	"{user.name} has kicked '{targetId}' from the scavenger hunt.": null, // NEEDS TRANSLATION
	"Unable to kick '{targetId}' from the scavenger hunt.": null, // NEEDS TRANSLATION
	"This command can only be used in the scavengers room.": null, // NEEDS TRANSLATION
	"{user.name} has added a scavenger hunt to the queue.": null, // NEEDS TRANSLATION
	"{user.name} has removed a scavenger hunt created by [{creators}] from the queue.": null, // NEEDS TRANSLATION
	"The scavenger hunt queue is currently empty.": null, // NEEDS TRANSLATION
	"The queue is already disabled.": null, // NEEDS TRANSLATION
	"The queue is already enabled.": null, // NEEDS TRANSLATION
	"The queue has been disabled by {user.name}.": null, // NEEDS TRANSLATION
	"The queue has been enabled by {user.name}.": null, // NEEDS TRANSLATION
	"The default scavenger timer is currently set at: {duration_string} minutes.": null, // NEEDS TRANSLATION
	"The default timer must be an integer greater than zero, in minutes.": null, // NEEDS TRANSLATION
	"The default scavenger timer has been set to {duration} minutes by {user.name}.": null, // NEEDS TRANSLATION
	"Invalid username.": null, // NEEDS TRANSLATION
	"Points must be an integer between 1 and 1000.": null, // NEEDS TRANSLATION
	"{targetId} was given {points} points on the current scavengers ladder by {user.name}.": null, // NEEDS TRANSLATION
	"{user.name} has taken {points} points from {targetId} on the current scavengers ladder.": null, // NEEDS TRANSLATION
	"{user.name} has reset the current scavengers ladder.": null, // NEEDS TRANSLATION
	"Show Auth": null, // NEEDS TRANSLATION
	"Hide Auth": null, // NEEDS TRANSLATION
	"User '{targetId}' does not have any points on the scavengers leaderboard.": null, // NEEDS TRANSLATION
	"User '{rankName}' is #{place} on the scavengers leaderboard with {points} points.": null, // NEEDS TRANSLATION
	"The points rewarded for winning hunts within a minute is:": null, // NEEDS TRANSLATION
	"You cannot set blitz points for {gameType} hunts.": null, // NEEDS TRANSLATION
	"The points value awarded for blitz must be an integer between 0 and 1000.": null, // NEEDS TRANSLATION
	"{user.name} has set the points awarded for blitz for {gameType} hunts to {blitzPoints}.": null, // NEEDS TRANSLATION
	"{user.name} has set the points awarded for blitz for {gameType} hunts to {blitzPoints} in <<{room.roomid}>>.": null, // NEEDS TRANSLATION
	"The points rewarded for hosting a regular hunt is {pointSetting}.": null, // NEEDS TRANSLATION
	"{target} is not a valid number of points.": null, // NEEDS TRANSLATION
	"{user.name} has set the points awarded for hosting regular scavenger hunts to {points}": null, // NEEDS TRANSLATION
	"{user.name} has set the points awarded for hosting regular scavenger hunts to - {points} in <<{room.roomid}>>": null, // NEEDS TRANSLATION
	"The points rewarded for winning hunts is:": null, // NEEDS TRANSLATION
	"You cannot set win points for {type} hunts.": null, // NEEDS TRANSLATION
	"The points value awarded for winning a scavenger hunt must be an integer between 0 and 1000.": null, // NEEDS TRANSLATION
	"{user.name} has set the points awarded for winning {type} scavenger hunts to - {pointsDisplay}": null, // NEEDS TRANSLATION
	"{user.name} has set the points awarded for winning {type} scavenger hunts to - {pointsDisplay} in <<{room.roomid}>>": null, // NEEDS TRANSLATION
	"none": null, // NEEDS TRANSLATION
	"The current official twist is: {twist}": null, // NEEDS TRANSLATION
	"Invalid twist.": null, // NEEDS TRANSLATION
	"{user.name} has set the official twist to {room.settings.scavSettings.officialtwist}": null, // NEEDS TRANSLATION
	"{user.name} has removed the official twist.": null, // NEEDS TRANSLATION
	"{user.name} has set the official twist to - {twist} in <<{room.roomid}>>": null, // NEEDS TRANSLATION
	"{user.name} has reset the official twist in <<{room.roomid}>>": null, // NEEDS TRANSLATION
	"Twist": null, // NEEDS TRANSLATION
	"{user.name} has reset the host log leaderboard into the next month.": null, // NEEDS TRANSLATION
	"{user.name} has hard reset the host log leaderboard.": null, // NEEDS TRANSLATION
	"Hunts Created": null, // NEEDS TRANSLATION
	"Total Hunts Created": null, // NEEDS TRANSLATION
	"History": null, // NEEDS TRANSLATION
	"{user.name} has reset the player log leaderboard into the next month.": null, // NEEDS TRANSLATION
	"{user.name} has hard reset the player log leaderboard.": null, // NEEDS TRANSLATION
	"(History: {values})": null, // NEEDS TRANSLATION
	"Finished Hunts": null, // NEEDS TRANSLATION
	"Joined Hunts": null, // NEEDS TRANSLATION
	"Ratio": null, // NEEDS TRANSLATION
	"Infractions": null, // NEEDS TRANSLATION
	"Please include the name of the user to {this.cmd}.": null, // NEEDS TRANSLATION
	"{user.name} has given one infraction point to '{targetId}'.": null, // NEEDS TRANSLATION
	"{user.name} has taken one infraction point from '{targetId}'.": null, // NEEDS TRANSLATION
	"Scavenger Moderation Settings:": null, // NEEDS TRANSLATION
	"Multiple connection verification: {ipcheck}": null, // NEEDS TRANSLATION
	"Invalid setting - ON, OFF, TOGGLE": null, // NEEDS TRANSLATION
	"{user.name} has set multiple connections verification to ON.": null, // NEEDS TRANSLATION
	"{user.name} has set multiple connections verification to OFF.": null, // NEEDS TRANSLATION
	"Scavenger Hunts can only be added to the database in the scavengers room.": null, // NEEDS TRANSLATION
	"Usage: {cmd} Hunt Text": null, // NEEDS TRANSLATION
	"You need to specify a host.": null, // NEEDS TRANSLATION
	"A recycled hunt has been added to the database.": null, // NEEDS TRANSLATION
	"Usage: removehunt hunt_number": null, // NEEDS TRANSLATION
	"Usage: addhint hunt number, question number, hint text": null, // NEEDS TRANSLATION
	"Usage: removehint hunt number, question number, hint text": null, // NEEDS TRANSLATION
	"Usage: autostart on/off": null, // NEEDS TRANSLATION
	"You specified an invalid question number.": null, // NEEDS TRANSLATION
	"You specified an invalid hint number.": null, // NEEDS TRANSLATION
	"Recycled hunt #{huntNumber} was removed from the database.": null, // NEEDS TRANSLATION
	"Hint added to Recycled hunt #{huntNumber} question #{questionNumber}: {hintText}.": null, // NEEDS TRANSLATION
	"Hint #{hintNumber} was removed from Recycled hunt #{huntNumber} question #{questionNumber}.": null, // NEEDS TRANSLATION
	"Autostarting recycled hunts is already on.": null, // NEEDS TRANSLATION
	"Autostarting recycled hunts is already off.": null, // NEEDS TRANSLATION
	"Automatically adding recycled hunts to the queue is now on": null, // NEEDS TRANSLATION
	"Automatically adding recycled hunts to the queue is now off": null, // NEEDS TRANSLATION
	"Help for Recycled Hunts": null, // NEEDS TRANSLATION
	"- addhunt &lt;Hunt Text>: Adds a hunt to the database of recycled hunts.": null, // NEEDS TRANSLATION
	"- removehunt&lt;Hunt Number>: Removes a hunt form the database of recycled hunts.": null, // NEEDS TRANSLATION
	"- list: Shows a list of hunts in the database along with their questions and hints.": null, // NEEDS TRANSLATION
	"- addhint &lt;Hunt Number, Question Number, Hint Text>: Adds a hint to the specified question in the specified hunt.": null, // NEEDS TRANSLATION
	"- removehint &lt;Hunt Number, Question Number, Hint Number>: Removes the specified hint from the specified question in the specified hunt.": null, // NEEDS TRANSLATION
	"- autostart &lt;on/off>: Sets whether or not recycled hunts are automatically added to the queue when a hunt ends.": null, // NEEDS TRANSLATION
	"Recycled Hunts": null, // NEEDS TRANSLATION
	"List of recycled Scavenger hunts": null, // NEEDS TRANSLATION
	"By {hosts}": null, // NEEDS TRANSLATION
	"Answers:": null, // NEEDS TRANSLATION
	"<strong>Player commands:</strong>": null, // NEEDS TRANSLATION
	"- /scavengers: Join the scavengers room.": null, // NEEDS TRANSLATION
	"- /joinhunt: Join the current scavenger hunt.": null, // NEEDS TRANSLATION
	"- /leavehunt: Leave the current scavenger hunt. Also resets your progress.": null, // NEEDS TRANSLATION
	"- /viewhunt: Show the ongoing hunt up to where you solved it.": null, // NEEDS TRANSLATION
	"- /scavenge <em>[guess]</em>: Submit your answer to the current hint.": null, // NEEDS TRANSLATION
	"- /scavengerstatus  (or /scav status): Check your status in the current hunt.": null, // NEEDS TRANSLATION
	"- /scavengers queue (or /scav queue): Showcase the hunts currently in queue, with the answers hidden for any hunt that is not yours.": null, // NEEDS TRANSLATION
	"- /scavengerhint (or /scav hint): View your latest hint in the current game.": null, // NEEDS TRANSLATION
	"- /scavladder (or /scav top): View the current scavengers leaderboard.": null, // NEEDS TRANSLATION
	"- /scavrank <em>[user]</em>: View the rank of the user on the current scavenger leaderboard. Defaults to the user if no name is provided.": null, // NEEDS TRANSLATION
	"For a more in-depth overview, use /scavhelp staff.": null, // NEEDS TRANSLATION
	"<strong>Staff and auth commands:</strong>": null, // NEEDS TRANSLATION
	"As a <strong>room voice (+)</strong>, you can use the following Scavengers commands, on top of the regular commands (see /scavhelp):": null, // NEEDS TRANSLATION
	"- /scav edithunt <em>[question number]</em>, <em>[hint | answer]</em>, <em>[value]</em>: Edit the ongoing scavenger hunt. Only the host(s) can edit the hunt.": null, // NEEDS TRANSLATION
	"- /scav addhint <em>[question number]</em>, <em>[value]</em>: Add a hint to a question in the ongoing scavenger hunt. Only the host(s) can add a hint.": null, // NEEDS TRANSLATION
	"- /scav edithint <em>[question number]</em>, <em>[hint number]</em>, <em>[value]</em>: Edit a hint to a question in the ongoing scavenger hunt. Only the host(s) can edit a hint.": null, // NEEDS TRANSLATION
	"- /scav removehint <em>[question number]</em>, <em>[hint number]<e/m> (or /scav deletehint): Remove a hint from a question in the current scavenger hunt. Only the host(s) can remove a hint.": null, // NEEDS TRANSLATION
	"- /teamscavshelp: Explains the team scavs plugin.": null, // NEEDS TRANSLATION
	"<br />As a <strong>room driver (%)</strong>, you can also use the following Scavengers commands:": null, // NEEDS TRANSLATION
	"- /scav queue (unrated) <em>[host(s)]</em> | <em>[hint]</em> | <em>[answer]</em> | <em>[hint]</em> | <em>[answer]</em> | <em>[hint]</em> | <em>[answer]</em> | ...: Queue a scavenger hunt to be started after the current hunt is finished.": null, // NEEDS TRANSLATION
	"- /scav queuehtml (unrated) <em>[host(s)]</em> | <em>[hint]</em> | <em>[answer]</em> | <em>[hint]</em> | <em>[answer]</em> | <em>[hint]</em> | <em>[answer]</em> | ...: Queue a scavenger hunt that uses HTML to be started after the current hunt is finished.": null, // NEEDS TRANSLATION
	"- /start(official/practice/mini/unrated)hunt <em>[host]</em> | <em>[hint]</em> | <em>[answer]</em> | <em>[hint]</em> | <em>[answer]</em> | <em>[hint]</em> | </em>[answer]</em> | ...: Create a new (official/practice/mini/unrated) scavenger hunt and start it immediately.": null, // NEEDS TRANSLATION
	"- /starthtml(official/practice/mini/unrated)hunt <em>[host]</em> | <em>[hint]</em> | <em>[answer]</em> | <em>[hint]</em> | <em>[answer]</em> | <em>[hint]</em> | </em>[answer]</em> | ...: Create a new (official/practice/mini/unrated) scavenger hunt that uses HTML and start it immediately.": null, // NEEDS TRANSLATION
	"- /scav viewqueue (or /scav queue): Look at the list of queued scavenger hunts. Now also includes the option to remove hunts from the queue.": null, // NEEDS TRANSLATION
	"- /resethunt: Reset the current scavenger hunt without revealing the hints and answers, nor giving out points.": null, // NEEDS TRANSLATION
	"- /resethunttoqueue: Reset the ongoing scavenger hunt without revealing the hints and answers, nor giving out points. Then, add it directly to the queue.": null, // NEEDS TRANSLATION
	"- /scav timer <em>[minutes]</em>: Set a timer to automatically end the current hunt. Setting [minutes] to 0 turns off the timer.": null, // NEEDS TRANSLATION
	"- /endhunt: End the current scavenger hunt immediately and announce the winners and the answers.": null, // NEEDS TRANSLATION
	"- /nexthunt: Start the next hunt in the queue.": null, // NEEDS TRANSLATION
	"- /viewhunt: View the ongoing scavenger hunt. As a host, you can also view the hunt in its entirety.": null, // NEEDS TRANSLATION
	"- /inherithunt: Become the staff host, gaining staff permissions to the current hunt.": null, // NEEDS TRANSLATION
	"- /scav games create <em>[game mode]</em>: start a game of the given mode.": null, // NEEDS TRANSLATION
	"&nbsp;&nbsp;&nbsp;&nbsp;Game modes include: Jump Start, Point Rally, KO games, Scav games and team scavs.": null, // NEEDS TRANSLATION
	"- /scav games end: End the game of the given type.": null, // NEEDS TRANSLATION
	"- /starttwist(hunt / practice / official / mini /unrated) <em>[twist]</em> | <em>[host]</em> | <em>[hint]</em> | <em>[answer]</em> | <em>[hint]</em> | <em>[answer]</em> | <em>[hint]</em> | <em>[answer]</em> | … : Create and start a new scavenger hunt that uses a specified twist mode. This can be used inside a scavenger game mode.": null, // NEEDS TRANSLATION
	"- /scav twists: Show a list of all the twists that are available on the server.": null, // NEEDS TRANSLATION
	"- /scav settwist: View the current default official hunt twist that is in use.": null, // NEEDS TRANSLATION
	"- /scav setpoints: Show the current point distribution for officials, minis and regular hunts.": null, // NEEDS TRANSLATION
	"- /scav sethostpoints: Show the current points awarded for hosting hunts.": null, // NEEDS TRANSLATION
	"- /scav setblitz: Show the current points awarded for Blitzing an official, mini or regular hunt.": null, // NEEDS TRANSLATION
	"- /scav defaulttimer: Show the default timer applied to hunts started automatically from the queue.": null, // NEEDS TRANSLATION
	"- /scav addpoints <em>[user]</em>, <em>[amount]</em>: Give the user the specified amount of points towards the current ladder.": null, // NEEDS TRANSLATION
	"- /scav removepoints <em>[user]</em>, <em>[amount]</em>: Remove the specified amount of points from the user towards the current ladder.": null, // NEEDS TRANSLATION
	"- /recycledhunts: Modify the database of recycled hunts and enable/disable autoqueing them.": null, // NEEDS TRANSLATION
	"- /scav queuerecycled <em>[number]</em>: Queue a recycled hunt from the database. If <em>[number]</em> is left blank, then a random hunt is queued.": null, // NEEDS TRANSLATION
	"- /recycledhuntshelp: give more info about the recycled hunts.": null, // NEEDS TRANSLATION
	"<br />As a <strong>room owner (#)</strong>, you can also use the following scavengers commands:": null, // NEEDS TRANSLATION
	"- /scav resetladder: Reset the current scavenger leaderboard.": null, // NEEDS TRANSLATION
	"- /scav setpoints <em>[1st place]</em>, <em>[2nd place]</em>, <em>[3rd place]</em>, <em>[4th place]</em>, <em>[5th place]</em>, ...: Set the point values for wins of officials, minis and regular hunts.": null, // NEEDS TRANSLATION
	"- /scav sethostpoints <em>[value]</em>: Set the point value for hosting regular hunts.": null, // NEEDS TRANSLATION
	"- /scav defaulttimer <em>[value]</em>: Set the default timer applied to automatically started hunts from the queue.": null, // NEEDS TRANSLATION
	"- /scav setblitz <em>[value]</em> ...: Set the blitz award to the given value.": null, // NEEDS TRANSLATION
	"- /scav settwist <em>[twist name]</em>: Set the default twist mode for all official hunts.": null, // NEEDS TRANSLATION
	"- /scav resettwist: Reset the default twist mode for all official hunts to nothing.": null, // NEEDS TRANSLATION
	"- /scav modsettings: Allow or disallow miscellaneous room settings": null, // NEEDS TRANSLATION
	"<strong>Game commands:</strong>": null, // NEEDS TRANSLATION
	"- /scav game create <em>[kogames | pointrally | scavengergames | jumpstart | teamscavs]</em>: Start a new scripted scavenger game. (Requires: % @ * # ~)": null, // NEEDS TRANSLATION
	"- /scav game end: End the current scavenger game. (Requires: % @ * # ~)": null, // NEEDS TRANSLATION
	"- /scav game kick <em>[user]</em>: Kick the user from the current scavenger game. (Requires: % @ * # ~)": null, // NEEDS TRANSLATION
	"- /scav game score: Show the current scoreboard for any game with a leaderboard.": null, // NEEDS TRANSLATION
	"- /scav game rank <em>[user]</em>: Show a user's rank in the current scavenger game leaderboard.": null, // NEEDS TRANSLATION
	"official": {
		"scavenger hunt type": null, // NEEDS TRANSLATION
	},
	"regular": {
		"scavenger hunt type": null, // NEEDS TRANSLATION
	},
	"mini": {
		"scavenger hunt type": null, // NEEDS TRANSLATION
	},
	"unrated": {
		"scavenger hunt type": null, // NEEDS TRANSLATION
	},
	"practice": {
		"scavenger hunt type": null, // NEEDS TRANSLATION
	},
	"recycled": {
		"scavenger hunt type": null, // NEEDS TRANSLATION
	},
	"Green": null, // NEEDS TRANSLATION
	"Yellow": null, // NEEDS TRANSLATION
	"Blue": null, // NEEDS TRANSLATION
	"Red": null, // NEEDS TRANSLATION
	"Black": null, // NEEDS TRANSLATION
	"Reverse": null, // NEEDS TRANSLATION
	"Skip": null, // NEEDS TRANSLATION
	"Red {value}": null, // NEEDS TRANSLATION
	"Blue {value}": null, // NEEDS TRANSLATION
	"Green {value}": null, // NEEDS TRANSLATION
	"Yellow {value}": null, // NEEDS TRANSLATION
	"Wild +4": null, // NEEDS TRANSLATION
	"Wild": null, // NEEDS TRANSLATION
	"Game messages won't show up unless you're playing or watching.": null, // NEEDS TRANSLATION
	"A new game of <strong>UNO</strong> is starting!": null, // NEEDS TRANSLATION
	"Join and play": null, // NEEDS TRANSLATION
	"Watch": null, // NEEDS TRANSLATION
	"A game of UNO is currently in progress.": null, // NEEDS TRANSLATION
	"Spectate Game": null, // NEEDS TRANSLATION
	"The game of UNO was forcibly ended because there aren't enough users.": null, // NEEDS TRANSLATION
	"There must be at least 2 players to start a game of UNO.": null, // NEEDS TRANSLATION
	"The game of UNO has started.": null, // NEEDS TRANSLATION
	"The top card is {topCard}.": null, // NEEDS TRANSLATION
	"You have already joined the game of UNO.": null, // NEEDS TRANSLATION
	"{name} has joined the game of UNO.": null, // NEEDS TRANSLATION
	"{name} has left the game of UNO.": null, // NEEDS TRANSLATION
	"{escapedName} failed to pick a color. It will remain {color}.": null, // NEEDS TRANSLATION
	"Unable to disqualify {name}.": null, // NEEDS TRANSLATION
	"{name}'s turn.": null, // NEEDS TRANSLATION
	"{name} has been automatically disqualified.": null, // NEEDS TRANSLATION
	"{name} has drawn a card.": null, // NEEDS TRANSLATION
	"You can't play a card, {name}. You must pass.": null, // NEEDS TRANSLATION
	"You do not have that card.": null, // NEEDS TRANSLATION
	"You can only play {lockedName} after drawing.": null, // NEEDS TRANSLATION
	"You cannot play this card; you can only play: Wild cards, and {color} cards.": null, // NEEDS TRANSLATION
	"You cannot play this card; you can only play: Wild cards, {color} cards and cards with the digit {value}.": null, // NEEDS TRANSLATION
	"You cannot play Wild +4 when you still have a card with the same color as the top card.": null, // NEEDS TRANSLATION
	"{name} has played a {playedCard}.": null, // NEEDS TRANSLATION
	"The direction of the game has changed.": null, // NEEDS TRANSLATION
	"{name}'s turn has been skipped.": null, // NEEDS TRANSLATION
	"{name} has been forced to draw 2 cards.": null, // NEEDS TRANSLATION
	"{nextName} has been forced to draw 4 cards.": null, // NEEDS TRANSLATION
	"The color has been changed to {newColor}.": null, // NEEDS TRANSLATION
	"You have drawn the following card: {cards}.": null, // NEEDS TRANSLATION
	"You have drawn the following cards: {cards}.": null, // NEEDS TRANSLATION
	"**UNO!** {name} is down to their last card!": null, // NEEDS TRANSLATION
	"{name} forgot to say UNO! and is forced to draw 2 cards.": null, // NEEDS TRANSLATION
	"Congratulations to {name} for winning the game of UNO!": null, // NEEDS TRANSLATION
	"The game of UNO has ended.": null, // NEEDS TRANSLATION
	"Players ({playerCount}):": null, // NEEDS TRANSLATION
	"Draw a card!": null, // NEEDS TRANSLATION
	"Pass!": null, // NEEDS TRANSLATION
	"Top Card: {topCard}": null, // NEEDS TRANSLATION
	"UNO is already disabled in this room.": null, // NEEDS TRANSLATION
	"UNO has been disabled for this room.": null, // NEEDS TRANSLATION
	"UNO is already enabled in this room.": null, // NEEDS TRANSLATION
	"UNO has been enabled for this room.": null, // NEEDS TRANSLATION
	"UNO is currently disabled for this room.": null, // NEEDS TRANSLATION
	"There is already a game in progress in this room.": null, // NEEDS TRANSLATION
	"A game of UNO was created by {name}.": null, // NEEDS TRANSLATION
	"There is no UNO game in the signups phase in this room, so adjusting the player cap would do nothing.": null, // NEEDS TRANSLATION
	"The playercap was set to {cap} by {name}.": null, // NEEDS TRANSLATION
	"There is no UNO game in signups phase in this room.": null, // NEEDS TRANSLATION
	"The game of UNO was started by {name}.": null, // NEEDS TRANSLATION
	"There is no UNO game going on in this room.": null, // NEEDS TRANSLATION
	"The game of UNO was forcibly ended.": null, // NEEDS TRANSLATION
	"The game of UNO was ended by {name}.": null, // NEEDS TRANSLATION
	"The amount must be a number between 5 and 300.": null, // NEEDS TRANSLATION
	"{name} has set the UNO automatic disqualification timer to {amount} seconds.": null, // NEEDS TRANSLATION
	"There is no autostart timer running on.": null, // NEEDS TRANSLATION
	"{name} has turned off the UNO autostart timer.": null, // NEEDS TRANSLATION
	"The amount must be a number between 30 and 600 seconds.": null, // NEEDS TRANSLATION
	"The game of UNO has already started.": null, // NEEDS TRANSLATION
	"{name} has set the UNO autostart timer to {amount} seconds.": null, // NEEDS TRANSLATION
	"Player \"{target}\" not found.": null, // NEEDS TRANSLATION
	"{name} has disqualified {playerName} from the UNO game.": null, // NEEDS TRANSLATION
	"{playerName} has been disqualified from the UNO game.": null, // NEEDS TRANSLATION
	"Unable to join the game.": null, // NEEDS TRANSLATION
	"You have joined the game of UNO.": null, // NEEDS TRANSLATION
	"Unable to leave the game.": null, // NEEDS TRANSLATION
	"You have left the game of UNO.": null, // NEEDS TRANSLATION
	"There is no UNO game going on in this room right now.": null, // NEEDS TRANSLATION
	"You are not in the game of UNO.": null, // NEEDS TRANSLATION
	"You have already drawn a card this turn.": null, // NEEDS TRANSLATION
	"It is currently not your turn.": null, // NEEDS TRANSLATION
	"You cannot pass until you draw a card.": null, // NEEDS TRANSLATION
	"You cannot pass until you choose a color.": null, // NEEDS TRANSLATION
	"{name} has passed.": null, // NEEDS TRANSLATION
	"\"{target}\" is not a valid color.": null, // NEEDS TRANSLATION
	"Suppression of UNO game messages is currently on.": null, // NEEDS TRANSLATION
	"Suppression of UNO game messages is currently off.": null, // NEEDS TRANSLATION
	"Suppression of UNO game messages is already on.": null, // NEEDS TRANSLATION
	"Suppression of UNO game messages is already off.": null, // NEEDS TRANSLATION
	"{name} has turned on suppression of UNO game messages.": null, // NEEDS TRANSLATION
	"{name} has turned off suppression of UNO game messages.": null, // NEEDS TRANSLATION
	"The current UNO game is not suppressing messages.": null, // NEEDS TRANSLATION
	"You are already spectating this game.": null, // NEEDS TRANSLATION
	"You are now spectating this private UNO game.": null, // NEEDS TRANSLATION
	"You are currently not spectating this game.": null, // NEEDS TRANSLATION
	"You are no longer spectating this private UNO game.": null, // NEEDS TRANSLATION
	"/uno create [player cap] - creates a new UNO game with an optional player cap (default player cap at 12). Use the command [createpublic] to force a public game or [createprivate] to force a private game. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/uno setcap [player cap] - adjusts the player cap of the current UNO game. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/uno timer [amount] - sets an auto disqualification timer for [amount] seconds. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/uno autostart [amount] - sets an auto starting timer for [amount] seconds. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/uno end - ends the current game of UNO. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/uno start - starts the current game of UNO. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/uno disqualify [player] - disqualifies the player from the game. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/uno hand - displays your own hand.": null, // NEEDS TRANSLATION
	"/uno cards - displays the number of cards for each player.": null, // NEEDS TRANSLATION
	"/uno getusers - displays the players still in the game.": null, // NEEDS TRANSLATION
	"/uno [spectate|unspectate] - spectate / unspectate the current private UNO game.": null, // NEEDS TRANSLATION
	"/uno suppress [on|off] - Toggles suppression of game messages.": null, // NEEDS TRANSLATION
	"UNO": null, // NEEDS TRANSLATION
	"There is already a challenge ({challenge.format}) between {challenge.to} and {challenge.from}!": null, // NEEDS TRANSLATION
	"Challenge not found. You are using the wrong command. Challenges should be accepted with /accept": null, // NEEDS TRANSLATION
	"User \"{chall.from}\" is not available right now.": null, // NEEDS TRANSLATION
	", translated for each recipient\n\t * (e.g. TLkey": null, // NEEDS TRANSLATION
	"{name} Top 100": null, // NEEDS TRANSLATION
	"T": null, // NEEDS TRANSLATION
	"Ratings not updated. The ladders are currently disabled.": null, // NEEDS TRANSLATION
	"{change} for winning": null, // NEEDS TRANSLATION
	"{change} for losing": null, // NEEDS TRANSLATION
	"{change} for tying": null, // NEEDS TRANSLATION
	"{playerName}'s rating: {oldRating} &rarr; <strong>{newRating}</strong>": null, // NEEDS TRANSLATION
	"There was an error calculating rating changes:": null, // NEEDS TRANSLATION
	"The server is restarting. Battles will be available again in a few minutes.": null, // NEEDS TRANSLATION
	"The server is under attack. Battles cannot be started at this time.": null, // NEEDS TRANSLATION
	"You are barred from starting any new games until your battle ban expires.": null, // NEEDS TRANSLATION
	"Virtual formats can only be used for ladder searches.": null, // NEEDS TRANSLATION
	"Bots are not allowed to queue for suspect tests.": null, // NEEDS TRANSLATION
	"If you feel this designation is in error, please contact staff by typing /helpticket in chat.": null, // NEEDS TRANSLATION
	"Your selected format is invalid:": null, // NEEDS TRANSLATION
	"Your team was rejected for the following reason:": null, // NEEDS TRANSLATION
	"Your Pokémon has a banned nickname: {bannedNickname}": null, // NEEDS TRANSLATION
	"Your Unowns spell out a banned word: {bannedWord}": null, // NEEDS TRANSLATION
	"The ladder is temporarily disabled due to technical difficulties - you will not receive ladder rating for this game.": null, // NEEDS TRANSLATION
	"You can't battle yourself. The best you can do is open PS in Private Browsing (or another browser) and log into a different username, and battle that username.": null, // NEEDS TRANSLATION
	"You are already challenging someone. Cancel that challenge before challenging someone else.": null, // NEEDS TRANSLATION
	"You challenged less than 10 seconds after your last challenge! It's cancelled in case it's a misclick.": null, // NEEDS TRANSLATION
	"This user already has 3 pending challenges.": null, // NEEDS TRANSLATION
	"You must be autoconfirmed to challenge them.": null, // NEEDS TRANSLATION
	"There's already a challenge ({existingChall.format}) between you and {targetUser.name}!": null, // NEEDS TRANSLATION
	"{user.name} wants to battle!": null, // NEEDS TRANSLATION
	"You changed your name and are no longer looking for a battle in {formatid}": null, // NEEDS TRANSLATION
	"Error: Your format {format.id} is not ladderable.": null, // NEEDS TRANSLATION
	"Couldn't search: You are already searching for a {formatid} battle.": null, // NEEDS TRANSLATION
	"Sorry, your opponent {missingUser} went offline before your battle could start.": null, // NEEDS TRANSLATION
	"Next game": null, // NEEDS TRANSLATION
	"It's time for game {gameNum} in your best-of-{this.game.bestOf}!": null, // NEEDS TRANSLATION
	"Are you ready for game {gameNum}, {this.name}?": null, // NEEDS TRANSLATION
	"I'm ready!": null, // NEEDS TRANSLATION
	"waiting for opponent...": null, // NEEDS TRANSLATION
	"This best-of set is required to be public due to a player having a name starting with '{this.forcedSettings.privacy}'.": null, // NEEDS TRANSLATION
	"This best-of set is invite-only!": null, // NEEDS TRANSLATION
	"Users must be invited with <code>/invite</code> (or be staff) to join": null, // NEEDS TRANSLATION
	"<strong>Game {gameNum}</strong> of <a href=\"/{this.roomid}\">a best-of-{this.bestOf}</a>": null, // NEEDS TRANSLATION
	"Next:": null, // NEEDS TRANSLATION
	"Game {gameNum} of {this.bestOf}": null, // NEEDS TRANSLATION
	"Game {gameNum}": null, // NEEDS TRANSLATION
	"{p1name} and {p2name}'s Best-of-{this.bestOf} progress:": null, // NEEDS TRANSLATION
	"being played": null, // NEEDS TRANSLATION
	"won by {winner.name}": null, // NEEDS TRANSLATION
	"tied": null, // NEEDS TRANSLATION
	"Game {gameNumber}:": null, // NEEDS TRANSLATION
	"{winnerName} won!": null, // NEEDS TRANSLATION
	"The battle was tied.": null, // NEEDS TRANSLATION
	"{winnerName} won game {gameNumber}!": null, // NEEDS TRANSLATION
	"Game {this.games.length} was a tie.": null, // NEEDS TRANSLATION
	"{p.name} has {timeLeft} to reconnect!": null, // NEEDS TRANSLATION
	"{p.name} has {timeLeft} to confirm battle start!": null, // NEEDS TRANSLATION
	"You aren't a player in this best-of set.": null, // NEEDS TRANSLATION
	"The battle is not currently waiting for ready confirmation.": null, // NEEDS TRANSLATION
	"{player.name} is ready for game {nextGameNum}.": null, // NEEDS TRANSLATION
	"The timer can't be enabled after a battle has ended.": null, // NEEDS TRANSLATION
	"{requesterName} also wants the timer to be on.": null, // NEEDS TRANSLATION
	"The timer can't be re-enabled so soon after disabling it ({remainingSeconds} seconds remaining).": null, // NEEDS TRANSLATION
	"(requested by {requester.name})": null, // NEEDS TRANSLATION
	"Battle timer is ON: inactive players will automatically lose when time's up.": null, // NEEDS TRANSLATION
	"{requesterName} no longer wants the timer on, but the timer is staying on because {requesters} still does.": null, // NEEDS TRANSLATION
	"Battle timer is now OFF.": null, // NEEDS TRANSLATION
	"{player.name} has {dcSecondsLeft} seconds to reconnect!": null, // NEEDS TRANSLATION
	"{player.name} disconnected!": null, // NEEDS TRANSLATION
	"{player.name} disconnected and has a minute to reconnect!": null, // NEEDS TRANSLATION
	"{player.name} disconnected and has {player.dcSecondsLeft} seconds to reconnect!": null, // NEEDS TRANSLATION
	"{player.name} disconnected and has no disconnection time left!": null, // NEEDS TRANSLATION
	"{player.name} reconnected.": null, // NEEDS TRANSLATION
	"{player.name} reconnected and has {player.turnSecondsLeft} seconds left.": null, // NEEDS TRANSLATION
	"All players are inactive.": null, // NEEDS TRANSLATION
	"Your battle is currently paused, so you cannot move right now.": null, // NEEDS TRANSLATION
	"There's nothing to choose": null, // NEEDS TRANSLATION
	"Sorry, too late to make a different move; the next turn has already started": null, // NEEDS TRANSLATION
	"There's nothing to cancel": null, // NEEDS TRANSLATION
	"Sorry, too late to cancel; the next turn has already started": null, // NEEDS TRANSLATION
	"You have already joined this battle.": null, // NEEDS TRANSLATION
	"This battle already has a user in slot {slot}.": null, // NEEDS TRANSLATION
	"Slot \"{slot}\" doesn't exist in this battle.": null, // NEEDS TRANSLATION
	"This battle has no available player slots.": null, // NEEDS TRANSLATION
	"Which slot would you like to join into? Use something like `/joingame {exampleSlot}`": null, // NEEDS TRANSLATION
	"You must be set as a player to join a battle you didn't start. Ask a player to use /addplayer on you to join this battle.": null, // NEEDS TRANSLATION
	"Players can't be swapped out in a tournament battle.": null, // NEEDS TRANSLATION
	"Players can't be swapped out in a rated battle.": null, // NEEDS TRANSLATION
	"Failed to leave battle - you're not a player.": null, // NEEDS TRANSLATION
	"The simulator process crashed. We've been notified and will fix this ASAP.": null, // NEEDS TRANSLATION
	"If you want to tie earlier, consider using `/offertie`.": null, // NEEDS TRANSLATION
	"{name} was made to forfeit.": null, // NEEDS TRANSLATION
	"{name} forfeited.": null, // NEEDS TRANSLATION
	"{name} forfeited the series.": null, // NEEDS TRANSLATION
	"{name} lost due to inactivity.": null, // NEEDS TRANSLATION
	"{name} lost the series due to inactivity.": null, // NEEDS TRANSLATION
	"{name} lost by being unavailable at the start of a game.": null, // NEEDS TRANSLATION
	"{name} lost by having an inappropriate name.": null, // NEEDS TRANSLATION
	"{name} forfeited by changing their name.": null, // NEEDS TRANSLATION
	"{name} lost by being banned.": null, // NEEDS TRANSLATION
	"{name} lost by being offline too long.": null, // NEEDS TRANSLATION
	"{name} was disqualified from the tournament.": null, // NEEDS TRANSLATION
	"This battle is required to be public due to a player having a name starting with '{this.forcedSettings.privacy}'.": null, // NEEDS TRANSLATION
	"This battle is invite-only!": null, // NEEDS TRANSLATION
	"{format.name} is currently suspecting {suspectTest.suspect}!": null, // NEEDS TRANSLATION
	"For information on how to participate check out the <a href=\"{suspectTest.url}\">suspect thread</a>.": null, // NEEDS TRANSLATION
	"This is a 4-player challenge battle": null, // NEEDS TRANSLATION
	"The players will need to add more players before the battle can start.": null, // NEEDS TRANSLATION
	"Player {player.num}:": null, // NEEDS TRANSLATION
	"(invited)": null, // NEEDS TRANSLATION
	"Uninvite": null, // NEEDS TRANSLATION
	"Add Player": null, // NEEDS TRANSLATION
	"This battle needs more players to start": null, // NEEDS TRANSLATION
	"Your mute in '{this.title}' has expired.": null, // NEEDS TRANSLATION
	"You joined {roomTitle}": null, // NEEDS TRANSLATION
	"{this.settings.modchat} or higher to talk": null, // NEEDS TRANSLATION
	"{modjoin} or higher to join": null, // NEEDS TRANSLATION
	"Slowchat {this.settings.slowchat}s": null, // NEEDS TRANSLATION
	"(Staff intro:)": null, // NEEDS TRANSLATION
	"(Pending media requests: {this.pendingApprovals.size})": null, // NEEDS TRANSLATION
	"(Resized)": null, // NEEDS TRANSLATION
	"Link": null, // NEEDS TRANSLATION
	"Modchat currently set to {this.settings.modchat}": null, // NEEDS TRANSLATION
	"Room title \"{newTitle}\" can't contain any of: ,|": null, // NEEDS TRANSLATION
	"Room title \"{newTitle}\" can't contain -": null, // NEEDS TRANSLATION
	"The given room title is too long.": null, // NEEDS TRANSLATION
	"The room '{newTitle}' already exists.": null, // NEEDS TRANSLATION
	"The room <<{this.roomid}>> has been made private; you must log in to be in private rooms.": null, // NEEDS TRANSLATION
	"\"{target}\" is not a valid room section. Valid categories include: {sections}": null, // NEEDS TRANSLATION
	"You cannot change the section of temporary rooms.": null, // NEEDS TRANSLATION
	"Only public rooms can change their section.": null, // NEEDS TRANSLATION
	"{this.title}'s room section is already set to \"{sectionName}\".": null, // NEEDS TRANSLATION
	"Please finish your game ({this.game.title}) before renaming {this.roomid}.": null, // NEEDS TRANSLATION
	"This room has had no active staff for {time} minutes, and has had modchat set to {rank}.": null, // NEEDS TRANSLATION
	"The server needs to restart because of a crash:": null, // NEEDS TRANSLATION
	"Please restart the server.": null, // NEEDS TRANSLATION
	"You will not be able to start new battles until the server restarts.": null, // NEEDS TRANSLATION
	"The server needs to restart because of a crash.": null, // NEEDS TRANSLATION
	"No new battles can be started until the server is done restarting.": null, // NEEDS TRANSLATION
	"Please finish your battles quickly. No new battles can be started until the server resets in a few minutes.": null, // NEEDS TRANSLATION
	"Moderated chat was set to +!": null, // NEEDS TRANSLATION
	"Only users of rank + and higher can talk.": null, // NEEDS TRANSLATION
	"Automatic server lockdown kill canceled.": null, // NEEDS TRANSLATION
	"The server tried to automatically kill itself upon the final battle finishing, but the server was updating while trying to kill itself.": null, // NEEDS TRANSLATION
	"The server is about to automatically kill itself in 10 seconds.": null, // NEEDS TRANSLATION
	"In the last final seconds, the automatic lockdown was manually disabled.": null, // NEEDS TRANSLATION
	"Modchat can only be changed by the user who turned it on, or by staff": null, // NEEDS TRANSLATION
	"Your replay has been uploaded! It's available at:": null, // NEEDS TRANSLATION
	"Copy": null, // NEEDS TRANSLATION
	"Your replay could not be saved: {e}": null, // NEEDS TRANSLATION
	"This server's request IP {result.errorip} is not a registered server.": null, // NEEDS TRANSLATION
	"The server will be restarting soon. Best-of-{isBestOf} battles cannot be started at this time.": null, // NEEDS TRANSLATION
	"Your special battle settings don't match: {mismatch}": null, // NEEDS TRANSLATION
	"banned from tournaments": null, // NEEDS TRANSLATION
	"Single Elimination": null, // NEEDS TRANSLATION
	"Double Elimination": null, // NEEDS TRANSLATION
	"Round Robin": null, // NEEDS TRANSLATION
	"Double Round Robin": null, // NEEDS TRANSLATION
	"Custom rule error: {e.message}": null, // NEEDS TRANSLATION
	"Invalid rules.": null, // NEEDS TRANSLATION
	"Added bans": null, // NEEDS TRANSLATION
	"Removed bans": null, // NEEDS TRANSLATION
	"Added restrictions": null, // NEEDS TRANSLATION
	"Added rules": null, // NEEDS TRANSLATION
	"Removed rules": null, // NEEDS TRANSLATION
	"The tournament was forcefully ended.": null, // NEEDS TRANSLATION
	"You can finish playing, but this battle is no longer considered a tournament battle.": null, // NEEDS TRANSLATION
	"Signups for tournaments are only available for autoconfirmed users in this room.": null, // NEEDS TRANSLATION
	"Due to high load, you are limited to 4 games at the same time.": null, // NEEDS TRANSLATION
	"The tournament is now full.": null, // NEEDS TRANSLATION
	"{user.name} isn't in the tournament.": null, // NEEDS TRANSLATION
	"{replacementUser.name} must be named to join the tournament.": null, // NEEDS TRANSLATION
	"{replacementUser.name} is already in the tournament.": null, // NEEDS TRANSLATION
	"{replacementUser.name} is banned from joining tournaments.": null, // NEEDS TRANSLATION
	"{replacementUser.name} already has an alt in the tournament.": null, // NEEDS TRANSLATION
	"{replacementUser.name} is not in this room ({this.room.title}).": null, // NEEDS TRANSLATION
	"{userName} is no longer in the tournament.": null, // NEEDS TRANSLATION
	"You have been disqualified from the tournament in {roomTitle}:": null, // NEEDS TRANSLATION
	"You have been disqualified from the tournament in {roomTitle}.": null, // NEEDS TRANSLATION
	"You failed to accept your opponent's challenge in time.": null, // NEEDS TRANSLATION
	"You failed to challenge your opponent in time.": null, // NEEDS TRANSLATION
	"All available matches were checked for automatic disqualification.": null, // NEEDS TRANSLATION
	"Modjoining is now allowed (Players can modjoin their tournament battles).": null, // NEEDS TRANSLATION
	"Modjoining is now banned (Players cannot modjoin their tournament battles).": null, // NEEDS TRANSLATION
	"This tournament is now disallowing non-autoconfirmed users' joining.": null, // NEEDS TRANSLATION
	"This tournament is now allowing non-autoconfirmed users' joining.": null, // NEEDS TRANSLATION
	"Forcetimer is now on for the tournament.": null, // NEEDS TRANSLATION
	"Forcetimer is now off for the tournament.": null, // NEEDS TRANSLATION
	"Tournament battles forced public: ON": null, // NEEDS TRANSLATION
	"Tournament battles forced public: OFF": null, // NEEDS TRANSLATION
	"The tournament will start once {this.playerCap} players have joined.": null, // NEEDS TRANSLATION
	"Tournament backend breaks specifications. Please report this to an admin.": null, // NEEDS TRANSLATION
	"You left the tournament": null, // NEEDS TRANSLATION
	"Scouting is banned: tournament players can't watch other tournament battles.": null, // NEEDS TRANSLATION
	"{generatorName} is not a valid type.": null, // NEEDS TRANSLATION
	"Valid types: {generatorNames}": null, // NEEDS TRANSLATION
	"Tournaments can only be created in chat rooms.": null, // NEEDS TRANSLATION
	"You cannot have a tournament until the current room activity is over: {room.game.title}": null, // NEEDS TRANSLATION
	"The server is restarting soon, so a tournament cannot be created.": null, // NEEDS TRANSLATION
	"{format.id} is not a valid tournament format.": null, // NEEDS TRANSLATION
	"A {format.name} tournament was made too recently.": null, // NEEDS TRANSLATION
	"You cannot have a player cap that is less than 2.": null, // NEEDS TRANSLATION
	"You cannot use filtered words in tour names.": null, // NEEDS TRANSLATION
	"The tournament's name cannot exceed {MAX_CUSTOM_NAME_LENGTH} characters.": null, // NEEDS TRANSLATION
	"The tournament's name cannot include the | symbol.": null, // NEEDS TRANSLATION
	"Recent tournaments aren't documented in this room.": null, // NEEDS TRANSLATION
	"There haven't been any documented tournaments in this room recently.": null, // NEEDS TRANSLATION
	"The last tournament ended {ago} ago - {name}": null, // NEEDS TRANSLATION
	"Previous tournaments:": null, // NEEDS TRANSLATION
	"/recenttours - Displays the n most recent tour(s), where n represents the number defined by staff (i.e. the 6 most recent tours).": null, // NEEDS TRANSLATION
	"No tournaments are currently running.": null, // NEEDS TRANSLATION
	"({playerCount} players)": null, // NEEDS TRANSLATION
	"({playerCount} player)": null, // NEEDS TRANSLATION
	"Accepting Signups:": null, // NEEDS TRANSLATION
	"Started:": null, // NEEDS TRANSLATION
	"{this.cmdToken}{this.fullCmd} has been deprecated. Instead, use \"{this.cmdToken}permissions set tournaments, [rank symbol]\".": null, // NEEDS TRANSLATION
	"Tournament announcements are enabled.": null, // NEEDS TRANSLATION
	"Tournament announcements are disabled.": null, // NEEDS TRANSLATION
	"Tournament announcements are already enabled.": null, // NEEDS TRANSLATION
	"Tournament announcements were enabled by {user.name}": null, // NEEDS TRANSLATION
	"Tournament announcements are already disabled.": null, // NEEDS TRANSLATION
	"Tournament announcements were disabled by {user.name}": null, // NEEDS TRANSLATION
	"Usage: /tour {cmd} <on|off>": null, // NEEDS TRANSLATION
	"Usage: /tour {cmd} <format>, <type> [, <comma-separated arguments>]": null, // NEEDS TRANSLATION
	"{user.name} created a tournament in {tour.baseFormat} format.": null, // NEEDS TRANSLATION
	"{formatName} tournament created in {roomTitle}.": null, // NEEDS TRANSLATION
	"Valid Formats:": null, // NEEDS TRANSLATION
	"Usage: /tour banuser <user>, <reason>": null, // NEEDS TRANSLATION
	"This user is already banned from tournaments.": null, // NEEDS TRANSLATION
	"{targetName} was banned from joining tournaments by {user.name}. ({reason})": null, // NEEDS TRANSLATION
	"Usage: /tour unbanuser <user>": null, // NEEDS TRANSLATION
	"This user isn't banned from tournaments.": null, // NEEDS TRANSLATION
	"{targetName} was unbanned from joining tournaments by {user.name}.": null, // NEEDS TRANSLATION
	"You have already been eliminated from this tournament.": null, // NEEDS TRANSLATION
	"{count} users remain in this tournament:": null, // NEEDS TRANSLATION
	"Your tournament bracket has been updated.": null, // NEEDS TRANSLATION
	"Usage: /tour {cmd} <user>": null, // NEEDS TRANSLATION
	"Your team is valid for this tournament.": null, // NEEDS TRANSLATION
	"this tournament": null, // NEEDS TRANSLATION
	"The tournament does not have any custom rules.": null, // NEEDS TRANSLATION
	"This tournament includes:": null, // NEEDS TRANSLATION
	"Usage: /tour {cmd} <type> [, <comma-separated arguments>]": null, // NEEDS TRANSLATION
	"{user.name} set tournament type to {roomTypeName} with a player cap of {newCap}.": null, // NEEDS TRANSLATION
	"{user.name} set tournament type to {roomTypeName}.": null, // NEEDS TRANSLATION
	"Tournament set to {typeName} with a player cap of {newCap}.": null, // NEEDS TRANSLATION
	"Tournament set to {typeName}.": null, // NEEDS TRANSLATION
	"Usage: /tour {cmd} <cap>; The current player cap is {tournament.playerCap}": null, // NEEDS TRANSLATION
	"Usage: /tour {cmd} <cap>": null, // NEEDS TRANSLATION
	"The player cap cannot be changed once the tournament has started.": null, // NEEDS TRANSLATION
	"The tournament does not have a player cap.": null, // NEEDS TRANSLATION
	"{user.name} removed the tournament's player cap.": null, // NEEDS TRANSLATION
	"Tournament cap removed.": null, // NEEDS TRANSLATION
	"The tournament cannot have a player cap less than 2.": null, // NEEDS TRANSLATION
	"The tournament's player cap is already {playerCap}.": null, // NEEDS TRANSLATION
	"{user.name} set the tournament's player cap to {tournament.playerCap}.": null, // NEEDS TRANSLATION
	"Tournament cap set to {tournament.playerCap}.": null, // NEEDS TRANSLATION
	"{user.name} forcibly ended a tournament.": null, // NEEDS TRANSLATION
	"The new syntax is: /tour rules -bannedthing, +un[banned|restricted]thing, *restrictedthing, !removedrule, addedrule": null, // NEEDS TRANSLATION
	"Usage: /tour rules <list of rules>": null, // NEEDS TRANSLATION
	"Rules can be: -bannedthing, +un[banned|restricted]thing, *restrictedthing, !removedrule, addedrule": null, // NEEDS TRANSLATION
	"The custom rules cannot be changed once the tournament has started.": null, // NEEDS TRANSLATION
	"{user.name} updated the tournament's custom rules.": null, // NEEDS TRANSLATION
	"The tournament's custom rules were cleared.": null, // NEEDS TRANSLATION
	"{user.name} cleared the tournament's custom rules.": null, // NEEDS TRANSLATION
	"Usage: /tour {cmd} <comma-separated arguments>": null, // NEEDS TRANSLATION
	"{user.name} set the tournament's name to {tournament.name}.": null, // NEEDS TRANSLATION
	"The tournament does not have a name.": null, // NEEDS TRANSLATION
	"{user.name} cleared the tournament's name.": null, // NEEDS TRANSLATION
	"{user.name} started the tournament.": null, // NEEDS TRANSLATION
	"{targetName} was disqualified from the tournament by {user.name} ({reason})": null, // NEEDS TRANSLATION
	"{targetName} was disqualified from the tournament by {user.name}": null, // NEEDS TRANSLATION
	"Usage: /tour {cmd} <on|minutes|off>": null, // NEEDS TRANSLATION
	"The tournament has already started.": null, // NEEDS TRANSLATION
	"The tournament does not have a player cap set.": null, // NEEDS TRANSLATION
	"The tournament is already set to autostart when the player cap is reached.": null, // NEEDS TRANSLATION
	"The tournament was set to autostart when the player cap is reached by {user.name}": null, // NEEDS TRANSLATION
	"The automatic tournament start timer is already off.": null, // NEEDS TRANSLATION
	"The automatic tournament start timer must be set to a positive number.": null, // NEEDS TRANSLATION
	"The tournament auto start timer was set to {target} by {user.name}": null, // NEEDS TRANSLATION
	"Usage: /tour {cmd} <minutes|off>; The current automatic disqualify timer is set to {minutes} minute(s)": null, // NEEDS TRANSLATION
	"Usage: /tour {cmd} <minutes|off>": null, // NEEDS TRANSLATION
	"The automatic disqualification timer must be set to a positive number.": null, // NEEDS TRANSLATION
	"The automatic tournament disqualify timer is already set to {target} minute(s).": null, // NEEDS TRANSLATION
	"The tournament auto disqualify timer was set to {target} by {user.name}": null, // NEEDS TRANSLATION
	"The automatic tournament disqualify timer is not set.": null, // NEEDS TRANSLATION
	"This tournament allows spectating other battles while in a tournament.": null, // NEEDS TRANSLATION
	"This tournament disallows spectating other battles while in a tournament.": null, // NEEDS TRANSLATION
	"Scouting for this tournament is already set to allowed.": null, // NEEDS TRANSLATION
	"The tournament was set to allow scouting by {user.name}": null, // NEEDS TRANSLATION
	"Scouting for this tournament is already disabled.": null, // NEEDS TRANSLATION
	"The tournament was set to disallow scouting by {user.name}": null, // NEEDS TRANSLATION
	"Usage: /tour {cmd}<allow|disallow>": null, // NEEDS TRANSLATION
	"This tournament allows players to modjoin their battles.": null, // NEEDS TRANSLATION
	"This tournament does not allow players to modjoin their battles.": null, // NEEDS TRANSLATION
	"Modjoining is already allowed for this tournament.": null, // NEEDS TRANSLATION
	"The tournament was set to allow modjoin by {user.name}": null, // NEEDS TRANSLATION
	"Modjoining is already not allowed for this tournament.": null, // NEEDS TRANSLATION
	"The tournament was set to disallow modjoin by {user.name}": null, // NEEDS TRANSLATION
	"Usage: /tour {cmd} <allow|disallow>": null, // NEEDS TRANSLATION
	"This tournament does not allow non-autoconfirmed users to join a tournament.": null, // NEEDS TRANSLATION
	"This tournament allows non-autoconfirmed users to join a tournament.": null, // NEEDS TRANSLATION
	"This tournament is already set to disallow non-autoconfirmed users.": null, // NEEDS TRANSLATION
	"This tournament is already set to allow non-autoconfirmed users.": null, // NEEDS TRANSLATION
	"{user.name} set this tournament to disallow non-autoconfirmed users.": null, // NEEDS TRANSLATION
	"{user.name} set this tournament to allow non-autoconfirmed users.": null, // NEEDS TRANSLATION
	"Tournament battles are already being forced public.": null, // NEEDS TRANSLATION
	"Tournament public battles were turned ON by {user.name}": null, // NEEDS TRANSLATION
	"Tournament battles are not being forced public.": null, // NEEDS TRANSLATION
	"Tournament public battles were turned OFF by {user.name}": null, // NEEDS TRANSLATION
	"The timer was turned on for the tournament by {user.name}": null, // NEEDS TRANSLATION
	"The timer was turned off for the tournament by {user.name}": null, // NEEDS TRANSLATION
	"Modjoin is already enabled for every tournament.": null, // NEEDS TRANSLATION
	"Modjoin was enabled for every tournament by {user.name}": null, // NEEDS TRANSLATION
	"Modjoin is already disabled for every tournament.": null, // NEEDS TRANSLATION
	"Modjoin was disabled for every tournament by {user.name}": null, // NEEDS TRANSLATION
	"Scouting is already enabled for every tournament.": null, // NEEDS TRANSLATION
	"Scouting was enabled for every tournament by {user.name}": null, // NEEDS TRANSLATION
	"Scouting is already disabled for every tournament.": null, // NEEDS TRANSLATION
	"Scouting was disabled for every tournament by {user.name}": null, // NEEDS TRANSLATION
	"All tournaments are already set to disallow non-autoconfimed users.": null, // NEEDS TRANSLATION
	"All tournaments are already set to allow non-autoconfimed users.": null, // NEEDS TRANSLATION
	"{user.name} set all tournaments to disallow non-autoconfirmed users.": null, // NEEDS TRANSLATION
	"{user.name} set all tournaments to allow non-autoconfirmed users.": null, // NEEDS TRANSLATION
	"Forced public battles are already disabled for every tournament.": null, // NEEDS TRANSLATION
	"Forced public battles were disabled for every tournament by {user.name}": null, // NEEDS TRANSLATION
	"Forced public battles are already enabled for every tournament.": null, // NEEDS TRANSLATION
	"Forced public battles were enabled for every tournament by {user.name}": null, // NEEDS TRANSLATION
	"Forced timer is already disabled for every tournament.": null, // NEEDS TRANSLATION
	"Forced timer was disabled for every tournament by {user.name}": null, // NEEDS TRANSLATION
	"Forced timer is already enabled for every tournament.": null, // NEEDS TRANSLATION
	"Forced timer was enabled for every tournament by {user.name}": null, // NEEDS TRANSLATION
	"Autostart is already disabled for every tournament.": null, // NEEDS TRANSLATION
	"Autostart was disabled for every tournament by {user.name}": null, // NEEDS TRANSLATION
	"Autostart for every tournament is already set to true.": null, // NEEDS TRANSLATION
	"Autostart was set to true for every tournament by {user.name}": null, // NEEDS TRANSLATION
	"The autostart must be set to at least 0.5.": null, // NEEDS TRANSLATION
	"Autostart for every tournament is already set to {num}.": null, // NEEDS TRANSLATION
	"Autostart was set to {num} minute(s) for every tournament by {user.name}": null, // NEEDS TRANSLATION
	"Automatic disqualification is already disabled for every tournament.": null, // NEEDS TRANSLATION
	"Automatic disqualification was disabled for every tournament by {user.name}": null, // NEEDS TRANSLATION
	"The autodq must be set to a number greater than 1.": null, // NEEDS TRANSLATION
	"Automatic disqualification for every tournament is already set to {num}.": null, // NEEDS TRANSLATION
	"Automatic disqualification was set to {num} minute(s) for every tournament by {user.name}": null, // NEEDS TRANSLATION
	"Player Cap is already removed for every tournament.": null, // NEEDS TRANSLATION
	"Player Cap was removed for every tournament by {user.name}": null, // NEEDS TRANSLATION
	"The Player Cap must be at least 2.": null, // NEEDS TRANSLATION
	"Player Cap for every tournament is already set to {num}.": null, // NEEDS TRANSLATION
	"Player Cap was set to {num} for every tournament by {user.name}": null, // NEEDS TRANSLATION
	"Usage: {this.cmdToken}{this.fullCmd} <number|off>": null, // NEEDS TRANSLATION
	"Number of recent tournaments to record is already set to {num}.": null, // NEEDS TRANSLATION
	"Number of recent tournaments to record was set to {num} by {user.name}.": null, // NEEDS TRANSLATION
	"Recent tournaments list was deleted by {user.name}.": null, // NEEDS TRANSLATION
	"Number of recent tournaments to record is already disabled.": null, // NEEDS TRANSLATION
	"Number of recent tournaments to record was turned off by {user.name}.": null, // NEEDS TRANSLATION
	"Recent tournaments are currently blocked from being made.": null, // NEEDS TRANSLATION
	"Recent tournaments are already blocked from being made.": null, // NEEDS TRANSLATION
	"Recent tournaments were blocked from being made by {user.name}.": null, // NEEDS TRANSLATION
	"Recent tournaments are already allowed to be remade.": null, // NEEDS TRANSLATION
	"Recent tournaments were allowed to be remade by {user.name}.": null, // NEEDS TRANSLATION
	"<code>/tour settings autodq &lt;minutes|off></code> - Sets the automatic disqualification timeout for every tournament.": null, // NEEDS TRANSLATION
	"<code>/tour settings autostart &lt;on|minutes|off></code> - Sets the automatic start timeout for every tournament.": null, // NEEDS TRANSLATION
	"<code>/tour settings forcepublic &lt;on|off></code> - Specifies whether users can hide their battles for every tournament.": null, // NEEDS TRANSLATION
	"<code>/tour settings forcetimer &lt;on|off></code> - Specifies whether users can toggle the timer for every tournament.": null, // NEEDS TRANSLATION
	"<code>/tour settings modjoin &lt;on|off></code> - Specifies whether users can modjoin their battles for every tournament.": null, // NEEDS TRANSLATION
	"<code>/tour settings autoconfirmedonly&lt;on|off></code> - Set requirement for signups for this tournament. If this is on, only autoconfirmed users can join a tournament.": null, // NEEDS TRANSLATION
	"<code>/tour settings playercap &lt;number></code> - Sets the playercap for every tournament.": null, // NEEDS TRANSLATION
	"<code>/tour settings scouting &lt;on|off></code> - Specifies whether users can spectate other participants for every tournament.": null, // NEEDS TRANSLATION
	"<code>/tour settings recenttours &lt;number|off|forcedelete></code> - Specifies the amount of recent tournaments to list in /recenttours.": null, // NEEDS TRANSLATION
	"<code>/tour settings blockrecents &lt;on|off></code> - Toggles blocking tours in /recenttours from being made.": null, // NEEDS TRANSLATION
	"Tournament Commands": null, // NEEDS TRANSLATION
	"- create/new &lt;format>, &lt;type>, [ &lt;comma-separated arguments>]: Creates a new tournament in the current room.": null, // NEEDS TRANSLATION
	"- rules &lt;comma-separated arguments>: Sets the custom rules for the tournament before it has started. <a href=\"view-battlerules\">Custom rules help/list</a>": null, // NEEDS TRANSLATION
	"- end/stop/delete: Forcibly ends the tournament in the current room.": null, // NEEDS TRANSLATION
	"- begin/start: Starts the tournament in the current room.": null, // NEEDS TRANSLATION
	"Configuration Commands": null, // NEEDS TRANSLATION
	"- settype &lt;type> [, &lt;comma-separated arguments>]: Modifies the type of tournament after it's been created, but before it has started.": null, // NEEDS TRANSLATION
	"- cap/playercap &lt;cap>: Sets the player cap of the tournament before it has started.": null, // NEEDS TRANSLATION
	"- viewrules/viewbanlist: Shows the custom rules for the tournament.": null, // NEEDS TRANSLATION
	"- clearrules/clearbanlist: Clears the custom rules for the tournament before it has started.": null, // NEEDS TRANSLATION
	"- name &lt;name>: Sets a custom name for the tournament.": null, // NEEDS TRANSLATION
	"- clearname: Clears the custom name of the tournament.": null, // NEEDS TRANSLATION
	"- autostart/setautostart &lt;on|minutes|off>: Sets the automatic start timeout.": null, // NEEDS TRANSLATION
	"- dq/disqualify &lt;user>: Disqualifies a user.": null, // NEEDS TRANSLATION
	"- autodq/setautodq &lt;minutes|off>: Sets the automatic disqualification timeout.": null, // NEEDS TRANSLATION
	"- runautodq: Manually run the automatic disqualifier.": null, // NEEDS TRANSLATION
	"- autoconfirmedonly/onlyautoconfirmed/aconly/onlyac &lt;on|off>: Set requirement for signups for this tournament. If this is on, only autoconfirmed users can join a tournament.": null, // NEEDS TRANSLATION
	"- scouting &lt;allow|disallow>: Specifies whether joining tournament matches while in a tournament is allowed.": null, // NEEDS TRANSLATION
	"- modjoin &lt;allow|disallow>: Specifies whether players can modjoin their battles.": null, // NEEDS TRANSLATION
	"- forcetimer &lt;on|off>: Turn on the timer for tournament battles.": null, // NEEDS TRANSLATION
	"- forcepublic &lt;on|off>: Forces tournament battles and their replays to be public.": null, // NEEDS TRANSLATION
	"- getusers: Lists the users in the current tournament.": null, // NEEDS TRANSLATION
	"- announce/announcements &lt;on|off>: Enables/disables tournament announcements for the current room.": null, // NEEDS TRANSLATION
	"- banuser/unbanuser &lt;user>: Bans/unbans a user from joining tournaments in this room. Lasts 2 weeks.": null, // NEEDS TRANSLATION
	"- sub/replace &lt;olduser>, &lt;newuser>: Substitutes a new user for an old one": null, // NEEDS TRANSLATION
	"- settings: Do <code>/help tour settings</code> for more information": null, // NEEDS TRANSLATION
	"You can also consult <a href=\"https://www.smogon.com/forums/threads/3570628/#post-6777489\">more detailed help</a>.": null, // NEEDS TRANSLATION
	"Tournament Forced Public Battles": null, // NEEDS TRANSLATION
	"Tournament Forced Timer": null, // NEEDS TRANSLATION
	"Tournament Modjoin": null, // NEEDS TRANSLATION
	"allow": null, // NEEDS TRANSLATION
	"disallow": null, // NEEDS TRANSLATION
	"Tournament Autoconfirmed Only": null, // NEEDS TRANSLATION
	"Tournament Scouting": null, // NEEDS TRANSLATION
	"Tournament Recent Tours": null, // NEEDS TRANSLATION
	"Tournament Block Recent Tours": null, // NEEDS TRANSLATION
	"You need an authentication token to log in as a trusted user.": null, // NEEDS TRANSLATION
	"Your authentication token was invalid.": null, // NEEDS TRANSLATION
	"Your assertion is for the wrong server. This server is {legalHost}.": null, // NEEDS TRANSLATION
	"The assertion you sent us is corrupt or incorrect. Please send the exact assertion given by the login server's JSON response.": null, // NEEDS TRANSLATION
	"Your verification signature doesn't match your new username.": null, // NEEDS TRANSLATION
	"Your verification signature doesn't match your authentication token.": null, // NEEDS TRANSLATION
	"Your assertion is stale. This usually means that the clock on the server computer is incorrect. If this is your server, please set the clock to the correct time.": null, // NEEDS TRANSLATION
	"Your verification signature was invalid.": null, // NEEDS TRANSLATION
	"You can't change your name right now because you're in {room.game.title}, which doesn't allow renaming.": null, // NEEDS TRANSLATION
	"Your name must contain at least one letter.": null, // NEEDS TRANSLATION
	"Your name must be 18 characters or shorter.": null, // NEEDS TRANSLATION
	"Your name contains a banned word.": null, // NEEDS TRANSLATION
	"You must wait {wait} more seconds before using another unregistered name.": null, // NEEDS TRANSLATION
	"Someone is already using the name \"{conflictUser.name}\".": null, // NEEDS TRANSLATION
	"You are locked because someone using your IP has spammed/hacked other websites. This usually means either you're using a proxy, you're in a country where other people commonly hack, or you have a virus on your computer that's spamming websites.": null, // NEEDS TRANSLATION
	"The room \"{roomid}\" is invite-only, and you haven't been invited.": null, // NEEDS TRANSLATION
	"You are banned from the room \"{roomid}\".": null, // NEEDS TRANSLATION
	"You are banned from using groupchats{expireText}.": null, // NEEDS TRANSLATION
	"Challenge cancelled because they changed their username.": null, // NEEDS TRANSLATION
	"Your searches and challenges have been cancelled because you changed your username.": null, // NEEDS TRANSLATION
	"Your message was not sent because you've been typing too quickly.": null, // NEEDS TRANSLATION
	"You're sending too many lines at once. Try using a paste service like [[Pastebin]].": null, // NEEDS TRANSLATION
	"Syntax: {syntax}": null, // NEEDS TRANSLATION
	"Syntax for word filters: {syntax}": null, // NEEDS TRANSLATION
	"{command} has been deprecated. Instead, use \"{replacement}\".": null, // NEEDS TRANSLATION
	"{command} - Access denied.": null, // NEEDS TRANSLATION
	"BST": null, // NEEDS TRANSLATION
	"Power": null, // NEEDS TRANSLATION
	"Accuracy": null, // NEEDS TRANSLATION
	"Game {gameNum}: {p1name} vs. {p2name}": null, // NEEDS TRANSLATION

};
