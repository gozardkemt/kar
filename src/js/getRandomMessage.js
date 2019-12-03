import getRandomNumber from './getRandomNumber.js';

export default function getRandomMessage(messages) {
	return messages[getRandomNumber(messages.length - 1)];
}
