
export function counterMess(messagesAll) {

	let users = messagesAll.users;
	let kar = {};

		for (let i = 0; i < users.length; i++) {

			let name = users[i].name;
			kar[name] = 0;

			messagesAll.messages.forEach( mess => {

			if (mess.sender_name == name ) { kar[name]++ }

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

			messagesAll.messages.forEach( mess => {

				if (mess.sender_name == name && mess.content) {

					for ( let j = 0; j < mess.content.length; j++) {
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

		let word = arrayOfWords[i];

		if (!wordCounts[word]) {
			wordCounts[word] = 1;
		} else {
			wordCounts[word]++;
		}
	}

	for (let w in wordCounts) {

		if (w.length < 3 || wordCounts[w] < 100) {   // slovo musí mať aspoň tri znaky alebo mať aspoň 100 výskytov
			delete wordCounts[w]
		}
	}

	return wordCounts;
}

function arrayFromArrayOfObjectValues(messages) {

	let a = '';

	messages.forEach( m => {
		a = a + ' ' + deleteSpecialCharacters(m.content);
	})

	return a.split(/\s+/);
}

const deleteSpecialCharacters = (s) => {return s.replace(/[^\w\s]/gi,'').toLowerCase()};
