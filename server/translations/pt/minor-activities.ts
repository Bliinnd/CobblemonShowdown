import type { TranslationCatalog } from '../../server/chat';

export const translations: TranslationCatalog = {
	"The announcement has ended.": "O anúncio terminou.",
	"Battles do not support announcements.": "Anúncios não funcionam em batalhas.",
	"You are not allowed to use filtered words in announcements.": "Não é permitido usar palavras filtradas em anúncios.",
	"There is already a poll or announcement in progress in this room.": "Já existe uma enquete ou anúncio em progresso nesta sala.",
	"An announcement was started by {USER}.": "Um anúncio foi iniciado por {USER}.",
	"There is no announcement running in this room.": "Não existe um anúncio ativo nesta sala.",
	"There is no timer to clear.": "Não existe nenhum temporizador para ser removido.",
	"The announcement timer was turned off.": "O temporizador do anúncio foi desligado.",
	"Invalid time given.": "Tempo especificado inválido.",
	"The announcement timer is off.": "O temporizador do anúncio está desligado.",
	"The announcement was ended by {USER}.": "O anúncio foi encerrado por {USER}.",
	"Accepts the following commands:": "Aceita os seguintes comandos:",

	"That option is not selected.": "Esta opção não está selecionada.",
	"You have already voted for this poll.": "Você já votou nesta enquete.",
	"No options selected.": "Nenhuma opção selecionada.",
	"you will not be able to vote after viewing results": "você não poderá votar após ver os resultados",
	"View results": "Ver resultados",
	"You can't vote after viewing results": "Você não pode votar após ver os resultados",
	"The poll has ended &ndash; scroll down to see the results": "A enquete foi encerrada &ndash; role para baixo para ver os resultados",
	"Vote for {NUMBER}": "Voto para {NUMBER}",
	"Submit your vote": "Envie seu voto",
	"Quiz": "Quiz",
	"Poll": "Enquete",
	"Submit": "Enviar",
	"ended": "terminou",
	"votes": "votos",
	"delete": "deletar",
	"Poll too long.": "Enquete longa demais.",
	"Battles do not support polls.": "Enquetes não funcionam em batalhas.",
	"You are not allowed to use filtered words in polls.": "Não é permitido usar palavras filtradas em enquetes.",
	"Not enough arguments for /poll new.": "Argumentos insuficientes para /poll new.",
	"Too many options for poll (maximum is 8).": "Opções demais para uma enquete (o máximo é 8).",
	"There are duplicate options in the poll.": "Existem opções duplicadas na enquete.",
	"{USER} queued a poll.": "{USER} colocou uma enquete na fila.",
	"A poll was started by {USER}.": "Uma enquete foi iniciada por {USER}.",
	"The queue is already empty.": "A fila já está vazia.",
	"Cleared poll queue.": "A fila de enquetes foi limpa.",
	"Room \"{ROOMID}\" not found.": "Sala \"{ROOMID}\" não encontrada.",
	"Can't delete poll at slot {SLOT} - \"{SLOT2}\" is not a number.": "Não é possível deletar a enquete na posição {SLOT} - \"{SLOT2}\" não é um número",
	"There is no poll in queue at slot {SLOT}.": "Não existe uma enquete na posição {SLOT} da fila.",
	"({USER} deleted the queued poll in slot {SLOT}.)": "({USER} deletou a enquete na posição {SLOT} da fila).",
	"There is no poll running in this room.": "Não existe uma enquete ativa nesta sala.",
	"To vote, specify the number of the option.": "Para votar, especifique o número da opção.",
	"Option not in poll.": "A opção não está na enquete.",
	"The poll timer was turned off.": "O temporizador da enquete foi desligado.",
	"The queued poll was started.": "A enquete que estava na fila foi iniciada.",
	"The poll timer was turned on: the poll will end in {TIME} minute(s).": "O temporizador da enquete foi ligado: a enquete encerrará em {TIME} minuto(s).",
	"The poll timer was set to {TIME} minute(s) by {USER}.": "O temporizador da enquete foi configurado para {TIME} minuto(s) por {USER}.",
	"The poll timer is on and will end in {TIME} minute(s).": "O temporizador da enquete está ligado e encerrará em {TIME} minuto(s).",
	"The poll timer is off.": "O temporizador da enquete está desligado.",
	"The poll was ended by {USER}.": "A enquete foi encerrada por {USER}.",
	"Queued polls:": "Enquetes na fila:",
	"No polls queued.": "Nenhuma enquete na fila.",
	"#{NUMBER} in queue": "#{NUMBER} na fila",
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
