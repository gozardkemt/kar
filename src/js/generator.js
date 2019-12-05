import getRandomMessage from './getRandomMessage.js';
import {getDateFromMessage} from './getDateFromMessage.js';
import decode from './decode.js';


export default function generator(messages) {
	let randomMessage = getRandomMessage(messages);
	let randomMessageDate = getDateFromMessage(randomMessage);
	let karista = decode(randomMessage.sender_name);
	let content = randomMessage.content;
	let img;

	if (!content) { img = randomMessage.photos[0].uri || randomMessage.sticker[0].uri }

	console.log(randomMessage);

	return `<p>
		Dňa ${randomMessageDate.day}. ${randomMessageDate.month}. roku ${randomMessageDate.year},
		napísal ${decode(karista)} do spoločnej konverzácie túto správu:
			</p>
			<p>
		${content}
		<img src="${img}"
			</p>`;

}
