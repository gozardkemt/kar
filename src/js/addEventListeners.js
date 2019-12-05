import generator from './generator.js';

export default function addEventListeners(messages) {

	const buttons = [].slice.call(document.getElementsByClassName('button'));
	const output = document.getElementById('generator__output');

	buttons.forEach( function(button, index) {
		button.addEventListener('click', function() {
			output.innerHTML = '';
			let fnToExecute = allFn[index].fnToExecute;
			output.innerHTML = fnToExecute(messages);
		});
	})
}

const allFn =  [

{
	buttonID: 'generator__button',
	innerText: 'Nájdi náhodnú správu',
	fnToExecute: generator
}

];
