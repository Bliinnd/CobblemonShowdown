import type { TranslationCatalog } from '../../server/chat';

export const translations: TranslationCatalog = {
	"The announcement has ended.": "Die Ankündigung wurde beendet.",
	"Battles do not support announcements.": "Kämpfe unterstützen keine Ankündigungen.",
	"You are not allowed to use filtered words in announcements.": "Du darfst keine gefilterten Worte in Ankündigungen verwenden.",
	"There is already a poll or announcement in progress in this room.": "Es gibt bereits eine Umfrage oder Ankündigung in diesem Raum.",
	"An announcement was started by {USER}.": "Eine Ankündigung wurde von {USER} gestartet.",
	"There is no announcement running in this room.": "Derzeit gibt es keine Ankündigung in diesem Raum.",
	"There is no timer to clear.": "Es gibt keinen Timer zum Ausschalten.",
	"The announcement timer was turned off.": "Der Ankündigungs-Timer wurde ausgeschaltet.",
	"Invalid time given.": "Ungültige Zeitangabe.",
	"The announcement timer is off.": "Der Ankündigungs-Timer ist ausgeschaltet.",
	"The announcement was ended by {USER}.": "Die Ankündigung wurde von {USER} beendet.",
	"Accepts the following commands:": "Folgende Befehle werden akzeptiert:",

	"That option is not selected.": "Diese Wahloption ist nicht ausgewählt.",
	"You have already voted for this poll.": "Du hast bereits für diese Umfrage abgestimmt.",
	"No options selected.": "Keine Wahloption wurde ausgewählt.",
	"you will not be able to vote after viewing results": "du wirst nicht mehr abstimmen können, nachdem du die Ergebnisse eingesehen hast",
	"View results": "Ergebnisse einsehen",
	"You can't vote after viewing results": "Du kannst nicht mehr abstimmen, nachdem du die Ergebnisse eingesehen hast",
	"The poll has ended &ndash; scroll down to see the results": "Die Umfrage wurde beendet &ndash; scrolle nach unten, um die Ergebnisse einzusehen",
	"Vote for {NUMBER}": "Stimme ab für {NUMBER}",
	"Submit your vote": "Reiche deine Stimme ein",
	"Quiz": "Quiz",
	"Poll": "Umfrage",
	"Submit": "Einreichen",
	"ended": "beendet",
	"votes": "Stimmen",
	"delete": "löschen",
	"Poll too long.": "Die Umfrage ist zu lang.",
	"Battles do not support polls.": "Kämpfe unterstützen keine Umfragen.",
	"You are not allowed to use filtered words in polls.": "Du darfst keine gefilterten Worte in Umfragen verwenden.",
	"Not enough arguments for /poll new.": "Die Argumente für /poll new sind nicht hinreichend.",
	"Too many options for poll (maximum is 8).": "Es liegen zu viele Wahloptionen in der Umfrage (maximal 8) vor.",
	"There are duplicate options in the poll.": "Es liegen doppelte Wahloptionen in der Umfrage vor.",
	"{USER} queued a poll.": "{USER} hat eine Umfrage in die Warteschleife gestellt.",
	"A poll was started by {USER}.": "Eine Umfrage wurde von {USER} gestartet.",
	"The queue is already empty.": "Die Warteschleife ist bereits leer.",
	"Cleared poll queue.": "Die Umfrage-Warteschleife wurde gelöscht.",
	"Room \"{ROOMID}\" not found.": "Room \"{ROOMID}\" wurde nicht gefunden.",
	"Can't delete poll at slot {SLOT} - \"{SLOT2}\" is not a number.": "Die Umfrage kann nicht gelöscht werden an der Stelle {SLOT} - \"{SLOT2}\" ist keine Nummer.",
	"There is no poll in queue at slot {SLOT}.": "An der Stelle {SLOT} gibt es keine Umfrage in der Warteschleife.",
	"({USER} deleted the queued poll in slot {SLOT}.)": "({USER} hat die Umfrage in der Warteschleife an der Stelle {SLOT}.) gelöscht.",
	"There is no poll running in this room.": "Derzeit gibt es keine Umfrage in diesem Raum.",
	"To vote, specify the number of the option.": "Um abzustimmen, musst du dich für eine Wahloption entscheiden.",
	"Option not in poll.": "Die Wahloption ist nicht in der Umfrage.",
	"The poll timer was turned off.": "Der Umfrage-Timer wurde ausgeschaltet.",
	"The queued poll was started.": "Die Umfrage in der Warteschleife wurde gestartet.",
	"The poll timer was turned on: the poll will end in {TIME} minute(s).": "Der Umfrage-Timer wurde eingeschaltet: Die Umfrage wird in {TIME} Minute(n) beendet.",
	"The poll timer was set to {TIME} minute(s) by {USER}.": "Der Umfrage-Timer wurde von {USER} auf {TIME} Minute(n) gestellt.",
	"The poll timer is on and will end in {TIME} minute(s).": "Der Umfrage-Timer ist eingeschaltet und wird in {TIME} Minute(n) enden.",
	"The poll timer is off.": "Der Umfrage-Timer ist ausgeschaltet.",
	"The poll was ended by {USER}.": "Die Umfrage wurde von {USER} beendet.",
	"Queued polls:": "Umfragen in der Warteschleife:",
	"No polls queued.": "Keine Umfragen befinden sich in der Warteschleife.",
	"#{NUMBER} in queue": "#{NUMBER} in der Warteschleife.",
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
