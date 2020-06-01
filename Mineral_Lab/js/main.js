import Assignment from './assignment.js';

var buttonNext = SVG('nextButton').size(200, 75);
buttonNext.rect(200, 75).attr({fill: '#f06'})
buttonNext.text("check").move(20, 20);

let nextB = document.getElementById("nextButton");
nextB.addEventListener("click", clickHandler, false);

let el = document.getElementById("assignment");
el.addEventListener("click", clickHandler, false);

let assignment = new Assignment("mineralPics", "assignment");
assignment.drawMinerals();
assignment.drawCurrentOptions();

async function clickHandler(e) {
	//assignment.loadNextMineral();
	if (e.target.dataset.opt != undefined) {
		console.log(e.target.dataset.opt)
		assignment.advance(e.target.dataset.opt);
		assignment.drawCurrentOptions();
	}
}