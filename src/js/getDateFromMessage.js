

export function getDateFromMessage(message) {
	let date = new Date(message.timestamp_ms)

	return {
		year: date.getFullYear(),
		day: date.getDay(),
		month: date.getMonth(),
		hour: date.getHours(),
		minute: date.getMinutes()
	}
}
