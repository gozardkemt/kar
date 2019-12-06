
export function getRandomMessage(messages) {
	return messages[getRandomNumber(messages.length - 1)];
}

const getRandomNumber = (scale) => {
	return Math.round(Math.random() * scale);
}
