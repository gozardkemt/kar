export const getMessages = async () => {

	let messagesAll = [];
	let done = true;
	let users;

	for (let i = 1; i < 8; i++) {

		let url = `data/message_${i}.json`;
		let messages = await fetch(url);
		messages = await messages.json();

		if (done) {
			users = messages.participants
		}
		messagesAll = [...messagesAll, ...messages.messages];

		done = false;
	}

	return {
		messages: filterMessages(messagesAll),
		users: users,
	};
};

const filterMessages = (a) => {
	return a.filter(m => m.content != undefined)
}
