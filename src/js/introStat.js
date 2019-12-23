import {counterMess, counterChar, counterWords} from './counters.js';
import {getDateFromMessage} from './getDateFromMessage';
import decode from './decode.js';

const first = document.getElementById('first__message');
const most = document.getElementById('most__messages');
const char = document.getElementById('most__char');
const word = document.getElementById('most__word');

export function introStat(messagesAll) {

	const messages = messagesAll.messages;

	let firstMessage = messages[messages.length - 1];
	let date = getDateFromMessage(firstMessage);
	first.textContent = `${date.day}. ${date.month}. ${date.year} ${decode(firstMessage.sender_name)} s obsahom: "${firstMessage.content}"`;

	let messCount = counterMess(messagesAll);
	let mostMessages = winnerFrom(messCount);
	most.textContent = `${mostMessages.name} napísal historicky najviac správ (${mostMessages.count})`;

	let charsCount = counterChar(messagesAll);
	let rates = charForMess(messCount, charsCount)
	let highestRates = winnerFrom(rates);
	char.textContent = `${highestRates.name} píše priemerne najdlhšie správy (${highestRates.count} znakov na správu)`;

	let wordCounts = counterWords(messages);
	let text = '';
	for (let word in wordCounts) {
		text = text + word + '(' + wordCounts[word] + 'x) '
	}
	word.textContent = text;
}

function winnerFrom(messages) {

	let num = 0,
		winner = '';

	for (let karista in messages) {

		if (messages[karista] > num) {
			num = messages[karista];
			winner = karista;
		}
	}

	return {
		name: decode(winner),
		count: Math.round(num * 100 + Number.EPSILON) / 100
	};
}

function charForMess(messCount, charsCount) {

	let kar = {};

	for (let karChar in charsCount) {
		for (let karMess in messCount) {

			if (karChar == karMess) {
				kar[karChar] = charsCount[karChar] / messCount[karMess]
			}
		}
	}

	return kar
}
