import getRandomMessage from './getRandomMessage.js';
import {getDateFromMessage} from './getDateFromMessage.js';
import decode from './decode.js';


export default function generator(messages) {

	let randomMessage = getRandomMessage(messages);
	let randomMessageDate = getDateFromMessage(randomMessage);
	let karista = decode(randomMessage.sender_name);
	let content = ('" ' + randomMessage.content + ' "') || ('(Táto správa obsahovala fotografiu alebo sticker)');

	return `
		<p>
			${decode(content)}
		</p>
		<p>
			autor: ${decode(karista)}, ${randomMessageDate.day}. ${randomMessageDate.month}. ${randomMessageDate.year}
		</p>
		`
}
