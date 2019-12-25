import {getMessages} from './fetchData.js';
import addEventListeners from './addEventListeners.js';
import {introStat} from './introStat';
import {mostMessVis} from './mostMessagesVis.js';
import bg from '../img/bg.png';
import olymps from '../img/olymp.png';
import meme from '../img/per.jpg';

export default async function startApp() {
	const messagesAll = await getMessages();
	addEventListeners(messagesAll.messages);
	introStat(messagesAll);
	mostMessVis(messagesAll);
}
