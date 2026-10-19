import type { TranslationCatalog } from '../../server/chat';

export const translations: TranslationCatalog = {
	"The announcement has ended.": "广播已结束",
	"Battles do not support announcements.": "对战里不支持广播",
	"You are not allowed to use filtered words in announcements.": "广播里不能使用被禁的词语",
	"There is already a poll or announcement in progress in this room.": "本房已有投票或广播",
	"An announcement was started by {USER}.": "{USER}开了一个广播",
	"There is no announcement running in this room.": "本房没有广播",
	"There is no timer to clear.": "无定时器可以删除",
	"The announcement timer was turned off.": "广播定时器已被关闭",
	"Invalid time given.": "所定的时间无效",
	"The announcement timer is off.": "广播定时器已关闭",
	"The announcement was ended by {USER}.": "广播已被{USER}终结",
	"Accepts the following commands:": "只接受下列的指令",

	"That option is not selected.": "没有选择",
	"You have already voted for this poll.": "你有已经投票了",
	"No options selected.": "无选择",
	"you will not be able to vote after viewing results": "点开结果后就不能再投票",
	"View results": "看结果",
	"You can't vote after viewing results": "你已看了结果，无法投票",
	"The poll has ended &ndash; scroll down to see the results": "投票结束&ndash;结论在此",
	"Vote for {NUMBER}": "投给{NUMBER}",
	"Submit your vote": "提交选择",
	"Quiz": "测验",
	"Poll": "投票",
	"Submit": "提交",
	"ended": "终结了",
	"votes": "票数",
	"delete": "删除",
	"Poll too long.": "投票太长",
	"Battles do not support polls.": "对战里不支持投票",
	"You are not allowed to use filtered words in polls.": "投票里不能使用被禁的词语",
	"Not enough arguments for /poll new.": "投票参数不够使用/poll new",
	"Too many options for poll (maximum is 8).": "投票选项不能超越8个",
	"There are duplicate options in the poll.": "投票选项里有重复",
	"{USER} queued a poll.": "{USER}安插了下一个投票",
	"A poll was started by {USER}.": "{USER}开了一个投票",
	"The queue is already empty.": "队列已是空的",
	"Cleared poll queue.": "投票队列被清空",
	"Room \"{ROOMID}\" not found.": "找不到\"{ROOMID}\"房",
	"Can't delete poll at slot {SLOT} - \"{SLOT2}\" is not a number.": "{SLOT} - \"{SLOT2}\"位置不是数字，无法从投票里删除",
	"There is no poll in queue at slot {SLOT}.": "这个位置没有投票队列",
	"({USER} deleted the queued poll in slot {SLOT}.)": "({USER}在{SLOT}位置删除了队列里的投票",
	"There is no poll running in this room.": "队列的这个位置没有投票",
	"To vote, specify the number of the option.": "请指明选项",
	"Option not in poll.": "投票里没有这个选项",
	"The poll timer was turned off.": "投票定时器已被关闭",
	"The queued poll was started.": "下一个投票开始了",
	"The poll timer was turned on: the poll will end in {TIME} minute(s).": "投票将在{TIME}分钟后终结",
	"The poll timer was set to {TIME} minute(s) by {USER}.": "{USER}.设定了{TIME}分钟的投票定时器",
	"The poll timer is on and will end in {TIME} minute(s).": "投票将在{TIME}分钟后终结",
	"The poll timer is off.": "投票定时器已关闭",
	"The poll was ended by {USER}.": "投票已被{USER}终结",
	"Queued polls:": "投票队列",
	"No polls queued.": "队列里无投票",
	"#{NUMBER} in queue": "队列里第{NUMBER}个",
	"Time should be a number of minutes less than one week.": null, // NEEDS TRANSLATION
	"Extra escape character. To end a poll with '\\', enter it as '\\\\'": null, // NEEDS TRANSLATION
	"Too many options for poll (maximum is {MAX}).": null, // NEEDS TRANSLATION
	"The poll timer was turned on: the poll will end in {TIME}.": null, // NEEDS TRANSLATION
	"The poll timer is on and will end in {TIME}.": null, // NEEDS TRANSLATION
	"The announcement was edited by {USER}.": null, // NEEDS TRANSLATION
	"That option is already selected.": null, // NEEDS TRANSLATION
	"/announcement create [announcement] - Creates an announcement. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/announcement edit [announcement] - Edits the announcement. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"The announcement timer was turned on: the announcement will end in {timeoutMins} minute.": null, // NEEDS TRANSLATION
	"The announcement timer was turned on: the announcement will end in {timeoutMins} minutes.": null, // NEEDS TRANSLATION
	"The announcement timer was set to {timeoutMins} minute by {name}.": null, // NEEDS TRANSLATION
	"The announcement timer was set to {timeoutMins} minutes by {name}.": null, // NEEDS TRANSLATION
	"The announcement timer is on and will end in {timeoutMins} minute.": null, // NEEDS TRANSLATION
	"The announcement timer is on and will end in {timeoutMins} minutes.": null, // NEEDS TRANSLATION
	"/announcement timer [minutes] - Sets the announcement to automatically end after [minutes] minutes. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/announcement timer clear - Clears the announcement's timer. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/announcement end - Ends a announcement and displays the results. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/announcement display - Displays the announcement": null, // NEEDS TRANSLATION
	"/announcement allows rooms to run their own announcements. These announcements are limited to one announcement at a time per room.": null, // NEEDS TRANSLATION
	"/announcement create [announcement] - Creates a announcement. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/announcement htmlcreate [announcement] - Creates a announcement, with HTML allowed. Requires: # ~": null, // NEEDS TRANSLATION
	"/announcement htmledit [announcement] - Edits the announcement, with HTML allowed. Requires: # ~": null, // NEEDS TRANSLATION
	"/announcement timer [minutes] - Sets the announcement to automatically end after [minutes]. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/announcement end - Ends a announcement. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"The poll hit the max vote cap of {maxVotes}, and has ended.": null, // NEEDS TRANSLATION
	"Deselect {num}": null, // NEEDS TRANSLATION
	"Select {num}": null, // NEEDS TRANSLATION
	"{votes} vote": null, // NEEDS TRANSLATION
	"{votes} votes": null, // NEEDS TRANSLATION
	"/poll create [question], [option1], [option2], [...] - Creates a poll. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/poll createmulti [question], [option1], [option2], [...] - Creates a poll, allowing for multiple answers to be selected. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"To queue a poll, use [queue], [queuemulti], [queuehtml], or [htmlqueuemulti].": null, // NEEDS TRANSLATION
	"Polls can be used as quiz questions. To do this, prepend all correct answers with a +.": null, // NEEDS TRANSLATION
	"/viewqueue - view the queue of polls in the room. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/poll deletequeue [number] - deletes poll at the corresponding queue slot (1 = next, 2 = the one after that, etc). Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/poll clearqueue - deletes the queue of polls. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/poll select [number] - Select option [number].": null, // NEEDS TRANSLATION
	"/poll deselect [number] - Deselects option [number].": null, // NEEDS TRANSLATION
	"/poll submit - Submits your vote.": null, // NEEDS TRANSLATION
	"/poll timer [minutes] - Sets the poll to automatically end after [minutes] minutes. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/poll timer clear - Clears the poll's timer. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/poll results - Shows the results of the poll without voting. NOTE: you can't go back and vote after using this.": null, // NEEDS TRANSLATION
	"/poll end - Ends a poll and displays the results. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"/poll display - Displays the poll": null, // NEEDS TRANSLATION
	"Invalid max vote cap: '{target}'": null, // NEEDS TRANSLATION
	"The poll's vote cap is already set to {num}.": null, // NEEDS TRANSLATION
	"{name} set the poll's vote cap to {num}.": null, // NEEDS TRANSLATION
	"The poll has more votes than the maximum vote cap, and has ended.": null, // NEEDS TRANSLATION
	"/poll allows rooms to run their own polls (limit 1 at a time).": null, // NEEDS TRANSLATION
	"Polls can be used as quiz questions, by putting <code>+</code> before correct answers.": null, // NEEDS TRANSLATION
	"<code>/poll create [question], [option1], [option2], [...]</code> - Creates a poll. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"<code>/poll createmulti [question], [option1], [option2], [...]</code> - Creates a poll, allowing for multiple answers to be selected. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"<code>/poll htmlcreate(multi) [question], [option1], [option2], [...]</code> - Creates a poll, with HTML allowed in the question and options. Requires: # ~": null, // NEEDS TRANSLATION
	"<code>/poll vote [number]</code> - Votes for option [number].": null, // NEEDS TRANSLATION
	"<code>/poll timer [minutes]</code> - Sets the poll to automatically end after [minutes]. Requires: % @ # ~.": null, // NEEDS TRANSLATION
	"<code>/poll results</code> - Shows the results of the poll without voting. NOTE: you can't go back and vote after using this.": null, // NEEDS TRANSLATION
	"<code>/poll display</code> - Displays the poll.": null, // NEEDS TRANSLATION
	"<code>/poll end</code> - Ends a poll and displays the results. Requires: % @ # ~.": null, // NEEDS TRANSLATION
	"<code>/poll queue [question], [option1], [option2], [...]</code> - Add a poll in queue. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"<code>/poll deletequeue [number]</code> - Deletes poll at the corresponding queue slot (1 = next, 2 = the one after that, etc).": null, // NEEDS TRANSLATION
	"<code>/poll clearqueue</code> - Deletes the queue of polls. Requires: % @ # ~.": null, // NEEDS TRANSLATION
	"<code>/poll viewqueue</code> - View the queue of polls in the room. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"<code>/poll maxvotes [number]</code> - Set the max poll votes to the given [number]. Requires: % @ # ~": null, // NEEDS TRANSLATION

};
