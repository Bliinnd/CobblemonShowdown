import type { TranslationCatalog } from '../../server/chat';

export const translations: TranslationCatalog = {
	"Repeated phrases in {ROOM}": "Frasi ripetute in {ROOM}",
	"There are no repeated phrases in {ROOM}.": "Non ci sono frasi ripetute in {ROOM}.",
	"Phrase": "Frase",
	"Identifier": "Identificatore",
	"Interval": "Intervallo",
	"every {MINUTES} minute(s)": "ogni {MINUTES} minuto(i)",
	"every {MESSAGES} chat message(s)": "ogni {MESSAGES} messaggio(i)",
	"Raw text": "Testo",
	"Remove": "Rimuovi",
	"Remove all repeats": "Rimuovi tutti i repeat",
	"Repeat names must include at least one alphanumeric character.": "I nomi dei repeat devono contenere almeno un carattere alfanumerico.",
	"You must specify an interval as a number of minutes or chat messages between 1 and 1440.": "Devi specificare un intervallo di minuti o messaggi compreso tra 1 e 1440.",
	'The phrase labeled with "{ID}" is already being repeated in this room.': 'La frase identificata con "{ID}" viene già ripetuta in questa room.',
	'{USER} set the phrase labeled with "{ID}" to be repeated every {INTERVAL} minute(s).': '{USER} ha impostato la frase identificata con "{ID}" da ripetere ogni {INTERVAL} minuto(i).',
	'{USER} set the phrase labeled with "{ID}" to be repeated every {INTERVAL} chat message(s).': '{USER} ha impostato la frase identificata con "{ID}" da ripetere ogni {INTERVAL} messaggio(i).',
	'{USER} set the Room FAQ "{TOPIC}" to be repeated every {INTERVAL} minute(s).': '{USER} ha impostato il Room FAQ "{TOPIC}" da ripetere ogni {INTERVAL} minuto(i).',
	'{USER} set the Room FAQ "{TOPIC}" to be repeated every {INTERVAL} chat message(s).': '{USER} ha impostato il Room FAQ "{TOPIC}" da ripetere ogni {INTERVAL} messaggio(i).',
	'The phrase labeled with "{ID}" is not being repeated in this room.': 'La frase identificata con "{ID}" non viene ripetuta in questa room.',
	'The text for the Room FAQ "{TOPIC}" is already being repeated.': 'Il testo del Room FAQ "{TOPIC}" viene già ripetuto.',
	'{USER} removed the repeated phrase labeled with "{ID}".': '{USER} ha rimosso la frase ripetuta identificata con "{ID}".',
	"There are no repeated phrases in this room.": "Non ci sono frasi ripetute in questa room.",
	"{USER} removed all repeated phrases.": "{USER} ha rimosso tutte le frasi ripetute.",
	"You must specify a room when using this command in PMs.": "Devi specificare una room quando usi questo comando in PM.",
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
