import {counterMess, counterChar} from './counters.js';
import {getDateFromMessage} from './getDateFromMessage';
import decode from './decode.js';



export function introStat(messagesAll) {

	const first = document.getElementById('first__message');
	const most = document.getElementById('most__messages');
	const char = document.getElementById('most__char');

	let messages = messagesAll.messages;
	let firstMessage = messages[messages.length - 1];
	let date = getDateFromMessage(firstMessage);
	first.textContent = `${date.day}. ${date.month}. ${date.year} ${decode(firstMessage.sender_name)} s obsahom: " ${firstMessage.content} "`;

	let messCount = counterMess(messagesAll);
	let mostMessages = winnerFrom(messCount);
	most.textContent = `${mostMessages[0]} napísal historicky najviac správ (${mostMessages[1]})`;

	let charsCount = counterChar(messagesAll);
	let rates = charForMess(messCount, charsCount)
	let longestMessages = winnerFrom(rates);
	char.textContent = `${longestMessages[0]} píše priemerne najdlhšie správy (${longestMessages[1]} znakov na správu)`;
}


function winnerFrom(messages) {

	let num = 0, winner = '';

	for ( let karista in messages) {

		if (messages[karista] > num) {
			num = messages[karista];
			winner = karista;
		}
	}

	return [
		decode(winner),
		Math.round( num * 100 + Number.EPSILON ) / 100
	];
}

function charForMess(messCount, charsCount) {

	let kar = {};

	for (let karChar in charsCount ) {
		for (let karMess in messCount) {

			if (karChar == karMess) {
				kar[karChar] = charsCount[karChar] / messCount[karMess]
			}
		}
	}

	return kar
}
