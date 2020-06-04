import Mineral from './mineral.js';
import MineralPath from './mineralPath.js';

export default class Assignment {
	constructor(pic_id, assignment_id){
		this.table = "";
		this.answers = [];
		this.temp_incorrect = 0;
		this.step = 1;
		this.mineralNum = 1;
		this.draw_minerals = SVG(pic_id).size(1200, 300);
		this.mineral = new Mineral();
		this.path = new MineralPath();
		
		this.draw_assignment = SVG(assignment_id).size(1200, 600);
		this.opt = [];
		this.opt.push([this.draw_assignment.rect(300, 300).attr({fill: '#fff'}).data('opt', 0, true).data('type', "nextStep", true)
				,this.draw_assignment.text("").move(10, 20)]);
		this.opt.push([this.draw_assignment.rect(300, 300).move(300, 0).attr({fill: '#fff'}).data('opt', 1, true).data('type', "nextStep", true)
				,this.draw_assignment.text("").move(310, 20)]);
		this.opt.push([this.draw_assignment.rect(300, 300).move(600, 0).attr({fill: '#fff'}).data('opt', 2, true).data('type', "nextStep", true)
				,this.draw_assignment.text("").move(610, 20)]);
		this.opt.push([this.draw_assignment.rect(300, 300).move(900, 0).attr({fill: '#fff'}).data('opt', 3, true).data('type', "nextStep", true)
				,this.draw_assignment.text("").move(910, 20)]);
		this.opt.push([this.draw_assignment.rect(300, 300).move(0, 300).attr({fill: '#fff'}).data('opt', 4, true).data('type', "nextStep", true)
				,this.draw_assignment.text("").move(10, 320)]);
		this.opt.push([this.draw_assignment.rect(300, 300).move(300, 300).attr({fill: '#fff'}).data('opt', 5, true).data('type', "nextStep", true)
				,this.draw_assignment.text("").move(310, 320)]);
		this.opt.push([this.draw_assignment.rect(300, 300).move(600, 300).attr({fill: '#fff'}).data('opt', 6, true).data('type', "nextStep", true)
				,this.draw_assignment.text("").move(610, 320)]);
		this.opt.push([this.draw_assignment.rect(300, 300).move(900, 300).attr({fill: '#fff'}).data('opt', 7, true).data('type', "nextStep", true)
				,this.draw_assignment.text("").move(910, 320)]);
	}

	drawMinerals() {
		this.mineral.drawMineral(this.draw_minerals);
	}

	loadNextMineral(){
		if (this.mineral.loadNext()){
			this.mineral.eraseMineral();
			this.mineral.drawMineral(this.draw_minerals);
			this.mineralNum += 1;
			this.step = 1;
			this.temp_incorrect = 0;
			this.path.reset();
			return true;
		}
		else {
			// end assignment
			return false;
		}		
	}

	drawCurrentOptions(){
		if (this.step == 5){
			return false;
		}
		else {
			document.getElementById("desc").innerHTML = "Click inside the box of one of the following " + this.path.getCurrent().getAllNext().length + " option(s)";
			document.getElementById("stepNum").innerHTML = "Step " + this.step + "; " + this.path.getCurrent().getStep();
			for (let i = 0; i <= 7; i++){
				this.opt[i][0].attr({stroke: '#fff'}).attr({fill: '#fff'});
				this.opt[i][1].clear();
				this.opt[i][1].build(true);
			}
			for (let i = 0; i < this.path.getCurrent().getAllNext().length; i++){
				this.opt[i][0].attr({stroke: '#000'});
				let temp = this.path.getCurrent().getNext(i).getValue();
				for (let t = 0; t < temp.length; t++)
				{
					this.opt[i][1].tspan(temp[t]).newLine();
				}
			}
			return true;
		}
		
	}

	checkCorrect(i){
		if (i < this.path.getCurrent().getAllNext().length){
			let isCorrect = this.mineral.checkCorrect(i, this.step - 1);
			if (this.step == 4){
				// record wrong answers
				if (isCorrect){
					this.answers.push([[this.temp_incorrect, this.path.getCurrent().getAllNext().length], this.mineral.mineral.name]);
					return isCorrect;
				}
				else {
					this.temp_incorrect += 1;
					return isCorrect;
				}
				
			}
			else if (this.step == 1){
				this.table = Assignment.figures[i];
				return isCorrect;
			}
			else {
				return isCorrect;
			}
		}
	}

	addStudentAnswer(name){
		this.answers[this.mineralNum - 1].push(name);
		console.log("added: " + this.mineral.mineral.name + ": " + this.answers[this.mineralNum - 1][0][0] + " Incorrect out of " + this.answers[this.mineralNum - 1][0][1] + ", student entered name: " + this.answers[this.mineralNum - 1][2])
	}

	advance(i){
		this.path.advance(i);
		this.step += 1
	}

	markIncorrect(i) {
		this.opt[i][0].attr({fill: '#ff0000'}); // red
		this.opt[i][1].clear();
		this.opt[i][1].tspan("Incorrect, choose different option.").newLine();
	}

	// only used in step 4
	markCorrect(i) {
		this.opt[i][0].attr({fill: '#2fff00'})// green
		this.opt[i][1].tspan("Correct!").newLine();
	}

	getScore(){
		return this.answers;
	}

	recordSkip(){
		this.answers.push([-1, this.mineral.mineral.name]);
	}
}

Assignment.figures = {
	0: "Table 1.3",
	1: "Table 1.4",
	2: "Table 1.5"
};