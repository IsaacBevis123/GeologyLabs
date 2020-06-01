import Mineral from './mineral.js';
import MineralPath from './mineralPath.js';

export default class Assignment {
	constructor(pic_id, assignment_id){
		this.draw_minerals = SVG(pic_id).size(1200, 300);
		this.mineral = new Mineral();
		this.path = new MineralPath();
		
		this.draw_assignment = SVG(assignment_id).size(1400, 1000);
		this.opt = [];
		this.opt.push([this.draw_assignment.rect(300, 300).move(280, 0).attr({fill: '#fff'}).data('opt', 0, true)
				,this.draw_assignment.text("").move(290, 20)]);
		this.opt.push([this.draw_assignment.rect(300, 300).move(580, 0).attr({fill: '#fff'}).data('opt', 1, true)
				,this.draw_assignment.text("").move(590, 20)]);
		this.opt.push([this.draw_assignment.rect(300, 300).move(880, 0).attr({fill: '#fff'}).data('opt', 2, true)
				,this.draw_assignment.text("").move(890, 20)]);
		this.opt.push([this.draw_assignment.rect(300, 300).move(280, 300).attr({fill: '#fff'}).data('opt', 3, true)
				,this.draw_assignment.text("").move(290, 320)]);
		this.opt.push([this.draw_assignment.rect(300, 300).move(580, 300).attr({fill: '#fff'}).data('opt', 4, true)
				,this.draw_assignment.text("").move(590, 320)]);
		this.opt.push([this.draw_assignment.rect(300, 300).move(880, 300).attr({fill: '#fff'}).data('opt', 5, true)
				,this.draw_assignment.text("").move(890, 320)]);
		this.opt.push([this.draw_assignment.rect(300, 300).move(280, 600).attr({fill: '#fff'}).data('opt', 6, true)
				,this.draw_assignment.text("").move(290, 620)]);
		this.opt.push([this.draw_assignment.rect(300, 300).move(580, 600).attr({fill: '#fff'}).data('opt', 7, true)
				,this.draw_assignment.text("").move(590, 620)]);
		this.opt.push([this.draw_assignment.rect(300, 300).move(880, 600).attr({fill: '#fff'}).data('opt', 8, true)
				,this.draw_assignment.text("").move(890, 620)]);
	}

	drawMinerals() {
		this.mineral.drawMineral(this.draw_minerals);
	}

	loadNextMineral(){
		this.mineral.loadNext();
		this.mineral.eraseMineral();
		this.mineral.drawMineral(this.draw_minerals);
	}

	drawCurrentOptions(){
		for (let i = 0; i <= 8; i++){
			this.opt[i][0].attr({stroke: '#fff'});
			this.opt[i][1].clear();
			this.opt[i][1].build(true);
		}
		for (let i = 0; i < this.path.getCurrent().getAllNext().length; i++){
			this.opt[i][0].attr({stroke: '#000'});
			this.opt[i][1].tspan(this.path.getCurrent().getNext(i).getValue());
		}
	}

	advance(i){
		this.path.advance(i);
		// add checking correctness
	}
}