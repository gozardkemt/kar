
export default function decode(s) {

	const esc = ['Å¥', 'Ã¡', 'Ã½', 'Å¡', 'Ä¾', 'Ã©', 'Ãº', 'Å¾', 'Å½' ,'Ã­', 'Ä\u008d', 'Ã´', 'Å', 'Ä\u008e', 'Ä\u008f', 'Ä\u008c', 'ð\u009f\u008d»', 'â\u0082¬', 'Ã¤'];
	const html = ['ť', 'á', 'ý', 'š', 'ľ', 'é', 'ú', 'ž', 'Ž' ,'í', 'č', 'ô', 'ň', 'Ď','ď','Č', '👍','€', 'ä'];

	let escLen = esc.length;
	let len = s.length;
	let newString = '';

	for (let i = 0; i < len; i++ ) {

		newString = newString + s[i];

		for (let m = 4; m > 0; m--) {

			let testChar = '';

				for ( let n = m - 1; n >= 0; n--) {

				testChar = testChar + s[i - n];
			}

				for (let j = 0; j < escLen; j++ ) {

				if (testChar == esc[j]) { newString = newString.slice(0, - m) + html[j] }
			}
		}
	}
	return newString;
}
