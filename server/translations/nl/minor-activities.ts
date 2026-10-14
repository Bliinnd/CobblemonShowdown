import type { TranslationCatalog } from '../../server/chat';

export const translations: TranslationCatalog = {
	"The announcement has ended.": "De mededeling is voorbij.",
	"Battles do not support announcements.": "Mededelingen worden in gevechten niet ondersteund.",
	"You are not allowed to use filtered words in announcements.": "Je mag geen gefilterde woorden gebruiken in mededelingen.",
	"There is already a poll or announcement in progress in this room.": "Er loopt al een poll of mededeling in deze room.",
	"An announcement was started by {USER}.": "{USER}. heeft een mededeling aangemaakt.",
	"There is no announcement running in this room.": "Er zijn momenteel geen mededelingen in deze room.",
	"There is no timer to clear.": "Er loopt momenteel geen timer om de mededeling verwijderen.",
	"The announcement timer was turned off.": "De mededelingtimer is uitgezet.",
	"Invalid time given.": "Ongeldige tijd opgegeven.",
	"The announcement timer is off.": "De mededelingtimer staat uit.",
	"The announcement was ended by {USER}.": "De mededeling is beëindigd door {USER}.",
	"Accepts the following commands:": "De volgende commando's worden geaccepteerd:",

	"That option is not selected.": "Die optie is niet geselecteerd.",
	"You have already voted for this poll.": "Je hebt al gestemd op deze poll.",
	"No options selected.": "Geen opties geselecteerd.",
	"you will not be able to vote after viewing results": "als je de uitslag hebt gezien kun je niet meer stemmen",
	"View results": "Bekijk de uitslag",
	"You can't vote after viewing results": "Je kunt niet stemmen nadat je de uitslag gezien hebt",
	"The poll has ended &ndash; scroll down to see the results": "De poll is voorbij &ndash; scroll naar beneden om de uitslag te zien",
	"Vote for {NUMBER}": "Stem op optie {NUMBER}",
	"Submit your vote": "Breng je stem uit",
	"Quiz": "Quiz",
	"Poll": "Poll",
	"Submit": "Verzenden",
	"ended": "beëindigd",
	"votes": "stemmen",
	"delete": "verwijder",
	"Poll too long.": "De poll is te lang.",
	"Battles do not support polls.": "Polls worden in gevechten niet ondersteund.",
	"You are not allowed to use filtered words in polls.": "Je mag geen gefilterde woorden gebruiken in polls.",
	"Not enough arguments for /poll new.": "Onvoldoende argumenten (antwoordmogelijkheden) opgegeven voor /poll new.",
	"Too many options for poll (maximum is 8).": "Te veel antwoordmogelijkheden voor een poll (de limiet is 8).",
	"There are duplicate options in the poll.": "De poll bevat twee of meer identieke opties.",
	"{USER} queued a poll.": "{USER} heeft een poll in de wachtrij gezet.",
	"A poll was started by {USER}.": "{USER} heeft een poll aangemaakt.",
	"The queue is already empty.": "De wachtrij is al leeg.",
	"Cleared poll queue.": "Wachtrij leeggemaakt.",
	"Room \"{ROOMID}\" not found.": "Room \"{ROOMID}\" is niet gevonden.",
	"Can't delete poll at slot {SLOT} - \"{SLOT2}\" is not a number.": "Kan poll op plek {SLOT} niet verwijderen - \"{SLOT2}\" is geen geldig getal.",
	"There is no poll in queue at slot {SLOT}.": "Er staat geen poll op plek {SLOT} van de wachtrij.",
	"({USER} deleted the queued poll in slot {SLOT}.)": "({USER} heeft de poll op plek {SLOT} van de wachtrij verwijderd.)",
	"There is no poll running in this room.": "Er loopt momenteel geen poll in deze room.",
	"To vote, specify the number of the option.": "Specificeer het nummer van de optie om te stemmen.",
	"Option not in poll.": "Deze optie staat niet in de poll.",
	"The poll timer was turned off.": "De polltimer is uitgezet.",
	"The queued poll was started.": "De poll uit de wachtrij is gestart.",
	"The poll timer was turned on: the poll will end in {TIME} minute(s).": "De polltimer is aangezet: de poll zal over {TIME} minuten eindigen.",
	"The poll timer was set to {TIME} minute(s) by {USER}.": "{USER} heeft de polltimer op {TIME} minuten gezet.",
	"The poll timer is on and will end in {TIME} minute(s).": "De polltimer staat aan en de poll zal over {TIME} minuten eindigen.",
	"The poll timer is off.": "De polltimer staat uit.",
	"The poll was ended by {USER}.": "{USER} heeft de poll beëindigd.",
	"Queued polls:": "Polls in de wachtrij:",
	"No polls queued.": "Geen polls in de wachtrij.",
	"#{NUMBER} in queue": "Plaats {NUMBER} in de wachtrij.",
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
