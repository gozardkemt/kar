import {getMessages} from './fetchData.js';
import addEventListeners from './addEventListeners.js';

export default async function startApp() {

let messagesAll = await getMessages();
let messages = messagesAll.messages;

addEventListeners(messages);

}
