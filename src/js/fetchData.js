import decode from './decode.js';

/**
 * getData - description
 *
 * @return {type}  description
 */
export const getMessages = async () => {

	let messagesAll = [];
	let done = true;
	let users;

	for (let i = 1; i < 8; i++) {

		let url = `http://localhost:8080/data/message_${i}.json`;
		let messages = await fetch(url);
		messages =  await messages.json();

		if (done) { users = messages.participants }
		messagesAll = [ ...messagesAll, ...messages.messages];

		done = false;
	}

	return {
		messages: messagesAll,
		users: users,
	};
};
