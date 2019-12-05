import {getMessages} from './fetchData.js';
import addEventListeners from './addEventListeners.js';
import {introStat} from './introStat';

export default async function startApp() {


let messagesAll = await getMessages();

addEventListeners(messagesAll.messages);
introStat(messagesAll);


}
