import type { TranslationCatalog } from '../../server/chat';

export const translations: TranslationCatalog = {
	"The announcement has ended.": "L'annonce est terminée.",
	"Battles do not support announcements.": "Les combats ne permettent pas de faire des annonces.",
	"You are not allowed to use filtered words in announcements.": "Tu n'es pas autorisé à utiliser des mots filtrés dans les annonces.",
	"There is already a poll or announcement in progress in this room.": "Il y a déjà un sondage ou une annonce dans cette room.",
	"An announcement was started by {USER}.": "Une annonce a été lancée par {USER}.",
	"There is no announcement running in this room.": "Il n'y a actuellement pas d'annonce dans cette room.",
	"There is no timer to clear.": "Il n'y a pas de minuteur à supprimer.",
	"The announcement timer was turned off.": "Le minuteur de l'annonce a été désactivé.",
	"Invalid time given.": "Temps donné invalide.",
	"The announcement timer is off.": "Le minuteur de l'annonce n'est pas actif.",
	"The announcement was ended by {USER}.": "L'annonce a été terminée par {USER}.",
	"Accepts the following commands:": "Accepte les commandes suivantes :",

	"That option is not selected.": "Cette option n'est pas sélectionnée.",
	"You have already voted for this poll.": "Tu as déjà voté pour ce sondage.",
	"No options selected.": "Pas d'option sélectionnée.",
	"you will not be able to vote after viewing results": "Tu ne seras plus capable de voter après avoir vu les résultats",
	"View results": "Voir les résultats",
	"You can't vote after viewing results": "Tu ne peux pas voter après avoir vu les résultats",
	"The poll has ended &ndash; scroll down to see the results": "Le sondage est terminé &ndash; descends dans le chat pour voir les résultats.",
	"Vote for {NUMBER}": "Voter pour {NUMBER}",
	"Submit your vote": "Soumettre ton vote",
	"Quiz": "Quiz",
	"Poll": "Sondage",
	"Submit": "Soumettre",
	"ended": "terminé",
	"votes": "votes",
	"delete": "supprimé",
	"Poll too long.": "Sondage trop long.",
	"Battles do not support polls.": "Les combats ne permettent pas de faire des sondages.",
	"You are not allowed to use filtered words in polls.": "Tu n'es pas autorisé à utiliser des mots filtrés dans les annonces.",
	"Not enough arguments for /poll new.": "Pas assez d'arguments pour /poll new.",
	"Too many options for poll (maximum is 8).": "Il y a trop d'options pour un sondage (le maximum est de 8).",
	"There are duplicate options in the poll.": "Il y a plusieurs options identiques dans le sondage.",
	"{USER} queued a poll.": "{USER} a mis un sondage en attente.",
	"A poll was started by {USER}.": "Un sondage a été lancé par {USER}.",
	"The queue is already empty.": "La file d'attente est déjà vide.",
	"Cleared poll queue.": "La file d'attente des sondages a été supprimée.",
	"Room \"{ROOMID}\" not found.": "La salle \"{ROOMID}\" n'a pas été trouvée.",
	"Can't delete poll at slot {SLOT} - \"{SLOT2}\" is not a number.": "Impossible de supprimer le sondage en position {SLOT} - \"{SLOT2}\" n'est pas un nombre.",
	"There is no poll in queue at slot {SLOT}.": "Il n'y a pas de sondage dans la file d'attente en position {SLOT}.",
	"({USER} deleted the queued poll in slot {SLOT}.)": "{USER} a supprimé le poll en attente en position {SLOT}.",
	"There is no poll running in this room.": "Il n'y a pas de sondage actuellement dans cette room.",
	"To vote, specify the number of the option.": "Pour voter, spécifiez le numéro de l'option.",
	"Option not in poll.": "L'option n'est pas dans le sondage.",
	"The poll timer was turned off.": "Le minuteur du sondage a été désactivé.",
	"The queued poll was started.": "Le sondage en attente a été lancé.",
	"The poll timer was turned on: the poll will end in {TIME} minute(s).": "Le minuteur du sondage a été activé : le sondage va se terminer dans {TIME} minute(s).",
	"The poll timer was set to {TIME} minute(s) by {USER}.": "Le minuteur du sondage a été fixé à {TIME} minute(s) par {USER}.",
	"The poll timer is on and will end in {TIME} minute(s).": "Le minuteur du sondage est activé et se terminera dans {TIME} minute(s).",
	"The poll timer is off.": "Le minuteur du sondage est désactivé.",
	"The poll was ended by {USER}.": "Le sondage a été terminé par {USER}.",
	"Queued polls:": "Sondages en attente :",
	"No polls queued.": "Pas de sondages en attente.",
	"#{NUMBER} in queue": "#{NUMBER} dans la file d'attente",
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
