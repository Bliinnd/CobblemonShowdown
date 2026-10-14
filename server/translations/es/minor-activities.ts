import type { TranslationCatalog } from '../../server/chat';

export const translations: TranslationCatalog = {
	"The announcement has ended.": "El anuncio ha terminado.",
	"Battles do not support announcements.": "Las batallas no admiten anuncios.",
	"You are not allowed to use filtered words in announcements.": "No puedes usar palabras filtradas en los anuncios.",
	"There is already a poll or announcement in progress in this room.": "Ya hay una encuesta o anuncio en progreso en esta sala.",
	"An announcement was started by {USER}.": "Un anuncio fue creado por {USER}.",
	"There is no announcement running in this room.": "No hay ningun anuncio en la sala actualmente.",
	"There is no timer to clear.": "No hay temporizador que quitar.",
	"The announcement timer was turned off.": "El temporizador del anuncio fue desactivado.",
	"Invalid time given.": "Tiempo especificado no válido.",
	"The announcement timer is off.": "El temporizador del anuncio está apagado.",
	"The announcement was ended by {USER}.": "El anuncio ha sido finalizado por {USER}.",
	"Accepts the following commands:": "Acepta los siguientes comandos:",

	"That option is not selected.": "Esa opción no está seleccionada.",
	"You have already voted for this poll.": "Tú ya has votado por esta encuesta.",
	"No options selected.": "Ninguna opción seleccionada.",
	"you will not be able to vote after viewing results": "Tú no podrás votar después de ver los resultados",
	"View results": "Ver resultados",
	"You can't vote after viewing results": "Tú no puedes votar después de ver los resultados",
	"The poll has ended &ndash; scroll down to see the results": "La encuesta ha finalizado &ndash; desliza hacia abajo para ver los resultados",
	"Vote for {NUMBER}": "Vota por {NUMBER}",
	"Submit your vote": "Envía tu voto",
	"Quiz": "Quiz",
	"Poll": "Encuesta",
	"Submit": "Enviar",
	"ended": "finalizada",
	"votes": "votos",
	"delete": "eliminar",
	"Poll too long.": "La encuesta es demasiado larga.",
	"Battles do not support polls.": "Las batallas no admiten encuestas.",
	"You are not allowed to use filtered words in polls.": "No puedes usar palabras filtradas en las encuestas.",
	"Not enough arguments for /poll new.": "No hay suficientes argumentos para /poll new.",
	"Too many options for poll (maximum is 8).": "Demasiadas opciones para la encuesta (máximo 8).",
	"There are duplicate options in the poll.": "Hay opciones duplicadas en la encuesta.",
	"{USER} queued a poll.": "{USER} ha puesto en espera una encuesta.",
	"A poll was started by {USER}.": "Una encuesta fue iniciada por {USER}.",
	"The queue is already empty.": "La cola ya está vacía.",
	"Cleared poll queue.": "Cola de encuestas borrada.",
	"Room \"{ROOMID}\" not found.": "Sala \"{ROOMID}\" no encontrada.",
	"Can't delete poll at slot {SLOT} - \"{SLOT2}\" is not a number.": " No se puede eliminar la encuesta en la posición {SLOT} - \"{SLOT2}\" no es un número.",
	"There is no poll in queue at slot {SLOT}.": "No hay encuesta en espera en la posición {SLOT}.",
	"({USER} deleted the queued poll in slot {SLOT}.)": "({USER} borró la encuesta puesta en espera en la posición {SLOT}.)",
	"There is no poll running in this room.": "No hay encuesta en curso en esta sala.",
	"To vote, specify the number of the option.": "Para votar, especifíca el número de la opción.",
	"Option not in poll.": "La opción no está en la encuesta.",
	"The poll timer was turned off.": "El temporizador de la encuesta fue desactivado.",
	"The queued poll was started.": "La encuesta en espera empezó.",
	"The poll timer was turned on: the poll will end in {TIME} minute(s).": "El temporizador de la encuesta fue activado: la encuesta terminará en {TIME} minuto(s).",
	"The poll timer was set to {TIME} minute(s) by {USER}.": "El temporizador de encuesta fue fijado a {TIME} minuto(s) por {USER}.",
	"The poll timer is on and will end in {TIME} minute(s).": "El temporizador de la encuesta está activado y finalizará automáticamente en {TIME} minuto(s).",
	"The poll timer is off.": "El temporizador de la encuesta está desactivado.",
	"The poll was ended by {USER}.": "La encuesta fue terminada por {USER}.",
	"Queued polls:": "Encuestas en espera.",
	"No polls queued.": "No hay encuestas en espera.",
	"#{NUMBER} in queue": "#{NUMBER} en espera.",
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
