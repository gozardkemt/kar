import * as d3 from "d3";
import {counterMess} from './counters.js';

export function mostMessVis(messagesAll) {

	const m = counterMess(messagesAll);
	console.log(m);
	const s = Object.values(m).sort((a, b) => b - a);

	d3.select('#most__messages--vis').selectAll('progress')
		.data(s)
		.enter()
		.append('progress')
		.attr("class", "bar")
		.attr("max", '17790')
		.attr("value", function(d) {
			return d;
		})
}
