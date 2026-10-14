import type { TranslationCatalog } from '../../server/chat';

export const translations: TranslationCatalog = {
	"The announcement has ended.": "アナウンスが終了しました。",
	"Battles do not support announcements.": "バトルではアナウンスが使用できません。",
	"You are not allowed to use filtered words in announcements.": "アナウンスでフィルタリングされた単語を使用することはできません。",
	"There is already a poll or announcement in progress in this room.": "すでにこの部屋で投票かアナウンスが設定されています。",
	"An announcement was started by {USER}.": "{USER}がアナウンスを開始しました。",
	"There is no announcement running in this room.": "この部屋ではアナウンスが設定されていません。",
	"There is no timer to clear.": "消去するタイマーが見つかりません。",
	"The announcement timer was turned off.": "アナウンスのタイマーがオフになりました。",
	"Invalid time given.": "不正な時間の引数です。",
	"The announcement timer is off.": "アナウンスのタイマーはオフになっています。",
	"The announcement was ended by {USER}.": "{USER}がアナウンスを終了しました",
	"Accepts the following commands:": "コマンド一覧",

	"That option is not selected.": "その選択肢は選択されていません。",
	"You have already voted for this poll.": "すでに投票しているため、投票できません。",
	"No options selected.": "選択肢が選ばれていません。",
	"you will not be able to vote after viewing results": "投票結果を見た後は投票できません。",
	"View results": "結果を見る",
	"You can't vote after viewing results": "投票結果を見た後は投票できません。",
	"The poll has ended &ndash; scroll down to see the results": "投票が終了しました &ndash; 下にスクロールすると結果が見られます。",
	"Vote for {NUMBER}": "{NUMBER}に投票する",
	"Submit your vote": "投票を確定する",
	"Quiz": "クイズ",
	"Poll": "投票",
	"Submit": "提出",
	"ended": "終了",
	"votes": "票",
	"delete": "削除",
	"Poll too long.": "投票が長すぎます。",
	"Battles do not support polls.": "バトルでは投票を使用できません。",
	"You are not allowed to use filtered words in polls.": "アナウンスでフィルタリングされた単語を使用することはできません。",
	"Not enough arguments for /poll new.": "/poll newで指定すべき引数が指定されていません。",
	"Too many options for poll (maximum is 8).": "選択肢が多すぎます。(上限は8です)",
	"There are duplicate options in the poll.": "投票の選択肢が重複しています。",
	"{USER} queued a poll.": "{USER}投票のキューを設定しました。",
	"A poll was started by {USER}.": "{USER}が投票を開始しました。",
	"The queue is already empty.": "キューはすでに空になっています。",
	"Cleared poll queue.": "投票のキューを削除しました。",
	"Room \"{ROOMID}\" not found.": "チャットルーム\"{ROOMID}\"は見つかりませんでした。",
	"Can't delete poll at slot {SLOT} - \"{SLOT2}\" is not a number.": "{SLOT}の選択肢は削除できません。\"{SLOT2}\"が数字ではありません。",
	"There is no poll in queue at slot {SLOT}.": "{SLOT}に投票のキューは設定されていません。",
	"({USER} deleted the queued poll in slot {SLOT}.)": "{USER}が{SLOT}の選択肢を削除しました。",
	"There is no poll running in this room.": "この部屋で開催中の投票はありません。",
	"To vote, specify the number of the option.": "投票をするには選択肢のスロット番号を指定する必要があります。",
	"Option not in poll.": "投票に選択肢がありません。",
	"The poll timer was turned off.": "投票のタイマーがオフになりました。",
	"The queued poll was started.": "キューの投票がスタートしました。",
	"The poll timer was turned on: the poll will end in {TIME} minute(s).": "投票のタイマーがオンになりました。{TIME}分後に締め切られます。",
	"The poll timer was set to {TIME} minute(s) by {USER}.": "{USER}が投票のタイマーを{TIME}分に設定しました。",
	"The poll timer is on and will end in {TIME} minute(s).": "投票のタイマーはオンになっています。{TIME}分後に締め切られます。",
	"The poll timer is off.": "投票のタイマーはオフになっています。",
	"The poll was ended by {USER}.": "{USER}が投票を終了しました。",
	"Queued polls:": "キューに追加された投票",
	"No polls queued.": "キューに投票はありません。",
	"#{NUMBER} in queue": "{NUMBER}番目",
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
