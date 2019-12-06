import * as d3 from "d3";
import {counterMess} from './counters.js';

export function mostMessVis(messagesAll) {

	const m = counterMess(messagesAll);
	const s = Object.values(m).sort( (a,b) => b - a);

	d3.select('#most__messages--vis').selectAll('div')
		.data(s)
		.enter()
		.append('div')
		.attr("class", "bar")
		.style("width", function(d) {
			return d / 800 + "vw";
		})
}
