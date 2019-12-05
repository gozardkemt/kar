

export function getDateFromMessage(message) {
	let time = message.timestamp_ms;
	let date = new Date(time);

	return {
		year: date.getFullYear(),
		day: date.getDay() + 1,
		month: date.getMonth() + 1,
		hour: date.getHours(),
		minute: date.getMinutes()
	}
}
