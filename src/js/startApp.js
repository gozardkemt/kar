import {getMessages} from './fetchData.js';
import getRandomMessage from './getRandomMessage.js';
import {getDateFromMessage} from './getDateFromMessage.js';


export default async function startApp() {

let messagesAll = await getMessages();
let messages = messagesAll.messages;

console.log(getDateFromMessage(getRandomMessage(messages)).month);
}
