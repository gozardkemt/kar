export function counterMess(messagesAll) {

	let users = messagesAll.users;
	let kar = {};

	for (let i = 0; i < users.length; i++) {

		let name = users[i].name;
		kar[name] = 0;

		messagesAll.messages.forEach(m => {

			if (m.sender_name == name) {
				kar[name]++
			}

		});
	}
	return kar
}

export function counterChar(messagesAll) {


	let users = messagesAll.users;
	let kar = {};

	for (let i = 0; i < users.length; i++) {

		let name = users[i].name;
		kar[name] = 0;

		messagesAll.messages.forEach(mess => {

			if (mess.sender_name == name && mess.content) {

				for (let j = 0; j < mess.content.length; j++) {
					kar[name]++;
				}
			}
		});
	}

	return kar
}

export function counterWords(messages) {

	const arrayOfWords = arrayFromArrayOfObjectValues(messages);
	const wordCounts = {};

	for (let i = 0; i < arrayOfWords.length; i++) {

		let w = arrayOfWords[i];

		if (!wordCounts[w]) {
			wordCounts[w] = 1;
		} else {
			wordCounts[w]++;
		}
	}

	for (let w in wordCounts) {

		if (wordCounts[w] < 175 || w.length < 3) {
			delete wordCounts[w]
		}
	}

	return wordCounts;
}

function arrayFromArrayOfObjectValues(messages) {

	let a = '';

	messages.forEach(m => {
		a = a + ' ' + m.content.replace(/[^\w\s]/gi,'').toLowerCase();
	})

	return a.split(/\s+/);
}
