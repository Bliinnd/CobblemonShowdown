import type { TranslationCatalog } from '../../server/chat';

export const translations: TranslationCatalog = {
	"The announcement has ended.": "L'annuncio è terminato.",
	"Battles do not support announcements.": "Le lotte non supportano gli annunci.",
	"You are not allowed to use filtered words in announcements.": "Non ti è permesso utilizzare parole filtrate negli annunci.",
	"There is already a poll or announcement in progress in this room.": "È già presente un poll o un annuncio in room.",
	"An announcement was started by {USER}.": "Un annuncio è stato pubblicato da {USER}.",
	"There is no announcement running in this room.": "Non vi è alcun annuncio in room al momento.",
	"There is no timer to clear.": "Non vi è alcun timer da rimuovere.",
	"The announcement timer was turned off.": "Il timer dell'annuncio è stato disattivato.",
	"Invalid time given.": "Timer impostato invalido.",
	"The announcement timer is off.": "Il timer dell'annuncio è disattivato.",
	"The announcement was ended by {USER}.": "L'annuncio è stato terminato da {USER}.",
	"Accepts the following commands:": "Accetta i seguenti comandi:",

	"That option is not selected.": "Quell'opzione non è selezionata.",
	"You have already voted for this poll.": "Hai già votato per questo sondaggio.",
	"No options selected.": "Nessuna opzione selezionata.",
	"you will not be able to vote after viewing results": "Non ti sarà possibile votare dopo aver visto i risultati.",
	"View results": "Vedi risultati",
	"You can't vote after viewing results": "Non puoi votare dopo aver visto i risultati.",
	"The poll has ended &ndash; scroll down to see the results": "Il sondaggio è terminato &ndash; scorri verso il basso per vederne i risultati.",
	"Vote for {NUMBER}": "Vota per {NUMBER}",
	"Submit your vote": "Invia il tuo voto",
	"Quiz": "Quiz",
	"Poll": "Sondaggio",
	"Submit": "Invia",
	"ended": "terminato",
	"votes": "voti",
	"delete": "elimina",
	"Poll too long.": "Il poll è troppo lungo.",
	"Battles do not support polls.": "Le lotte non supportano i poll.",
	"You are not allowed to use filtered words in polls.": "Non ti è permesso utilizzare parole filtrate nei poll.",
	"Not enough arguments for /poll new.": "Non vi sono sufficienti opzioni per /poll new.",
	"Too many options for poll (maximum is 8).": "Sono presenti troppe opzioni per un poll (il massimo è 8).",
	"There are duplicate options in the poll.": "Sono presenti opzioni uguali nel poll.",
	"{USER} queued a poll.": "{USER} ha messo in coda un poll.",
	"A poll was started by {USER}.": "Un poll è stato iniziato da {USER}.",
	"The queue is already empty.": "La coda è già vuota.",
	"Cleared poll queue.": "Hai rimosso la coda dei poll.",
	"Room \"{ROOMID}\" not found.": "Room \"{ROOMID}\" non trovata.",
	"Can't delete poll at slot {SLOT} - \"{SLOT2}\" is not a number.": "Non è possibile eliminare il poll allo slot {SLOT} - \"{SLOT2}\" non è un numero valido.",
	"There is no poll in queue at slot {SLOT}.": "Non è presente alcun poll in coda allo slot {SLOT}.",
	"({USER} deleted the queued poll in slot {SLOT}.)": "({USER} ha rimosso il poll in coda nello slot {SLOT}.)",
	"There is no poll running in this room.": "Non è presente alcun poll in room.",
	"To vote, specify the number of the option.": "Per votare, specifica il numero dell'opzione.",
	"Option not in poll.": "Opzione non presente nel poll.",
	"The poll timer was turned off.": "Il timer del poll è stato disattivato.",
	"The queued poll was started.": "Il poll in coda è iniziato.",
	"The poll timer was turned on: the poll will end in {TIME} minute(s).": "Il timer del poll è stato attivato: il poll finirà tra {TIME} min.",
	"The poll timer was set to {TIME} minute(s) by {USER}.": "Il timer del poll è stato impostato a {TIME} min da {USER}.",
	"The poll timer is on and will end in {TIME} minute(s).": "Il timer del poll è attivo e finirà in {TIME} min.",
	"The poll timer is off.": "Il timer del poll è disattivato.",
	"The poll was ended by {USER}.": "Il poll è stato terminato da {USER}.",
	"Queued polls:": "Poll in coda",
	"No polls queued.": "Nessun poll in coda.",
	"#{NUMBER} in queue": "#{NUMBER} in coda.",
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
