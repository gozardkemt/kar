
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
