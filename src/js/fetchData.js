
/**
 * getData - description
 *
 * @return {type}  description
 */
export const getMessages = async () => {
  const messages = await fetch('http://localhost:8080/data/message.json');
  return messages.json();
};
