import Assignment from './assignment.js';

let el = document.getElementById("assignment");
el.addEventListener("click", clickHandler, false);
document.addEventListener("keydown", keyHandler);

let assignment = new Assignment("rockPics", "assignment");
assignment.drawRocks();
assignment.drawCurrentOptions();

async function clickHandler(e) {
	if (e.target.dataset.type == "nextStep") {
		assignment.advance(e.target.dataset.opt);
		assignment.drawCurrentOptions();
	}
}

async function keyHandler(e) {
	
}