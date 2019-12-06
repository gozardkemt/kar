import {getRandomMessage} from './getRandomMessage.js';
import {getDateFromMessage} from './getDateFromMessage.js';
import decode from './decode.js';


export default function generator(messages) {

	let randomMessage = getRandomMessage(messages);
	let randomMessageDate = getDateFromMessage(randomMessage);
	let karista = decode(randomMessage.sender_name);
	let content = '" ' + decode(randomMessage.content) + ' "';

	return `
		<p>
			${content}
		</p>
		<p>
			autor: ${karista}, ${randomMessageDate.day}. ${randomMessageDate.month}. ${randomMessageDate.year}
		</p>
		`
}
