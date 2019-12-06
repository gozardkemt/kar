import {getMessages} from './fetchData.js';
import addEventListeners from './addEventListeners.js';
import {introStat} from './introStat';
import {mostMessVis} from './mostMessagesVis.js';

export default async function startApp() {

	const messagesAll = await getMessages();
	addEventListeners(messagesAll.messages);
	introStat(messagesAll);
	mostMessVis(messagesAll);
}
