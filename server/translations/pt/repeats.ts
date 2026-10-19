import type { TranslationCatalog } from '../../server/chat';

export const translations: TranslationCatalog = {
	"Repeated phrases in {ROOM}": "Frases repetidas em {ROOM}",
	"There are no repeated phrases in {ROOM}.": "Não há frases repetidas em {ROOM}.",
	"Phrase": "Frase",
	"Identifier": "Identificador",
	"Interval": "Intervalo",
	"every {MINUTES} minute(s)": "a cada {MINUTES} minuto(s)",
	"every {MESSAGES} chat message(s)": "a cada {MESSAGES} mensagen(s) no chat",
	"Raw text": "Texto Puro",
	"Remove": "Remover",
	"Remove all repeats": "Remover todos os repeats",
	"Repeat names must include at least one alphanumeric character.": "Repeats devem incluir pelo menos um caractere alfanumérico.",
	"You must specify an interval as a number of minutes or chat messages between 1 and 1440.": "Você deve especificar um intervalo como um número de minutos ou mensagens no chat entre 1 e 1440.",
	'The phrase labeled with "{ID}" is already being repeated in this room.': 'A frase nomeada como "{ID}" já está sendo repetida nesta sala.',
	'{USER} set the phrase labeled with "{ID}" to be repeated every {INTERVAL} minute(s).': '{USER} a frase nomeada como "{ID}" foi colocada para ser repetida a cada {INTERVAL} minuto(s).',
	'{USER} set the phrase labeled with "{ID}" to be repeated every {INTERVAL} chat message(s).': '{USER} a frase nomeada como "{ID}" foi colocada para ser repetida a cada {INTERVAL} mensagen(s) no chat.',
	'{USER} set the Room FAQ "{TOPIC}" to be repeated every {INTERVAL} minute(s).': '{USER} o Room FAQ "{TOPIC}" foi colocado para ser repetido a cada {INTERVAL} minuto(s).',
	'{USER} set the Room FAQ "{TOPIC}" to be repeated every {INTERVAL} chat message(s).': '{USER} o Room FAQ "{TOPIC}" foi colocado para ser repetido a cada {INTERVAL} mensagen(s) no chat.',
	'The phrase labeled with "{ID}" is not being repeated in this room.': 'A frase nomeada como "{ID}" não está sendo repetida nesta sala.',
	'The text for the Room FAQ "{TOPIC}" is already being repeated.': 'O texto para o Room FAQ "{TOPIC}" já está sendo repetido.',
	'{USER} removed the repeated phrase labeled with "{ID}".': '{USER} removeu a frase repetida nomeada como "{ID}".',
	"There are no repeated phrases in this room.": "Não há frases repetidas nesta sala.",
	"{USER} removed all repeated phrases.": "{USER} removeu todas as frases repetidas.",
	"You must specify a room when using this command in PMs.": "Você deve especificar uma sala quando estiver usando este comando em PMs.",
	"[Repeats]": null, // NEEDS TRANSLATION
	"Personal rooms do not support repeated messages.": null, // NEEDS TRANSLATION
	"<code>/repeat [minutes], [id], [phrase]</code>: repeats a given phrase every [minutes] minutes. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"<code>/repeathtml [minutes], [id], [phrase]</code>: repeats a given phrase containing HTML every [minutes] minutes. Requires: # ~": null, // NEEDS TRANSLATION
	"<code>/repeatfaq [minutes], [FAQ name/alias]</code>: repeats a given Room FAQ every [minutes] minutes. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"<code>/removerepeat [id]</code>: removes a repeated phrase. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"<code>/viewrepeats [optional room]</code>: Displays all repeated phrases in a room. Requires: % @ # ~": null, // NEEDS TRANSLATION
	"You can append <code>bymessages</code> to a <code>/repeat</code> command to repeat a phrase based on how many messages have been sent in chat. For example, <code>/repeatfaqbymessages ...</code>": null, // NEEDS TRANSLATION
	"Phrases for <code>/repeat</code> can include normal chat formatting, but not commands.": null, // NEEDS TRANSLATION

};
