import * as d3 from "d3";
import {counterMess} from './counters.js';
import decode from './decode.js';

export function mostMessVis(messagesAll) {

	const mess = counterMess(messagesAll);
	const arrayOfValues = Object.values(mess);
	let arOfar = [];

	for (let [name, value] of Object.entries(mess)) {
		arOfar.push({name: name, value: value});
	}

	const sorted = arOfar.sort((a, b) => b.value - a.value);
	const max = d3.max(arrayOfValues);

	const parents = d3.select('#most__messages--vis').selectAll('progress')
		.data(sorted)
		.enter()
		.append('div')

	parents.append('label')
		.attr("class", "label")
		.text( (person) => decode(person.name) + ' (' + person.value + ' správ)');

	parents.append('progress')
		.attr("class", "bar")
		.attr("max", max)
		.attr("value", function(d) {
			return d.value;
		});
}
