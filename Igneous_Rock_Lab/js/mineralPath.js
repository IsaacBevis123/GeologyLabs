import Node from './node.js';

export default class MineralPath {
	constructor(){
		this.start = new Node("start", "Crystal Size");
		this.current = this.start;
		this.makeDefaultPath();
	}

	getCurrent(){
		return this.current;
	}

	advance(i) {
		this.current = this.current.getNext(i);
	}

	reset(){
		this.current = this.start;
	}

	makeDefaultPath() {
		//step 0
		this.start.setNext(new Node("Phaneritic ~(coarse, visible crystals)", "Mineral Content and/or Color"))
			.setNext(new Node("Porphyritic ~(some coarse crystals)", "Mineral Content and/or Color"))
			.setNext(new Node("Aphanitic ~(tiny crystals)", "Mineral Content and/or Color"))
			.setNext(new Node("Glassy ~(Amorphous)", "Mineral Content and/or Color"));

		//step 1 path 0
		this.start.getNext(0).setNext(new Node("Mafic minerals dominate", "ID Minerals"))
			.setNext(new Node("Mix of mafic and felsic minerals", "ID Minerals"))
			.setNext(new Node("Felsic minerals dominate", "ID Minerals"));

		//step 1 path 1
		this.start.getNext(1).setNext(new Node("Dark groundmass colors dominate", "ID Minerals"))
			.setNext(new Node("Intermediate groundmass colors", "ID Minerals"))
			.setNext(new Node("Light groundmass dominate", "ID Minerals"));

		//step 1 path 2
		this.start.getNext(2).setNext(new Node("Dark groundmass colors dominate", "ID Minerals"))
			.setNext(new Node("Intermediate groundmass colors", "ID Minerals"))
			.setNext(new Node("Light groundmass dominate", "ID Minerals"));

		//step 1 path 3
		this.start.getNext(3).setNext(new Node("Dark colored", "ID Minerals"))
			.setNext(new Node("Light colored", "ID Minerals"));

		//step 2 path 0 0
		this.start.getNext(0).getNext(0).setNext(new Node("stub", "stub"));

		//step 2 path 0 1
		this.start.getNext(0).getNext(1).setNext(new Node("stub", "stub"));

		//step 2 path 0 2
		this.start.getNext(0).getNext(2).setNext(new Node("stub", "stub"));

		//step 2 path 1 0
		this.start.getNext(1).getNext(0).setNext(new Node("Quartz > 20%", "Other properties"))
			.setNext(new Node("Feldspar minerals dominate; ~Quartz < 20%", "Other properties"))
			.setNext(new Node("Mafic minerals dominate; ~Quartz 0-5%", "Other properties"))
			.setNext(new Node("Mafic minerals > 90%; ~Feldspar minerals < 5%", "Other properties"));

		//step 2 path 1 1
		this.start.getNext(1).getNext(1).setNext(new Node("Quartz > 20%", "Other properties"))
			.setNext(new Node("Feldspar minerals dominate; ~Quartz < 20%", "Other properties"))
			.setNext(new Node("Mafic minerals dominate; ~Quartz 0-5%", "Other properties"))
			.setNext(new Node("Mafic minerals > 90%; ~Feldspar minerals < 5%", "Other properties"));

		//step 2 path 1 2
		this.start.getNext(1).getNext(2).setNext(new Node("Quartz > 20%", "Other properties"))
			.setNext(new Node("Feldspar minerals dominate; ~Quartz < 20%", "Other properties"))
			.setNext(new Node("Mafic minerals dominate; ~Quartz 0-5%", "Other properties"))
			.setNext(new Node("Mafic minerals > 90%; ~Feldspar minerals < 5%", "Other properties"));

		//step 3 path 1 0 0
		this.start.getNext(1).getNext(0).getNext(0).setNext(new Node("Mafic minerals < 10%; ~Orthoclase > Plagioclase", "name"))
			.setNext(new Node("Mafic minerals > 10%; ~Plagioclase > Orthoclase", "name"));

		//step 3 path 1 0 1
		this.start.getNext(1).getNext(0).getNext(1).setNext(new Node("Orthoclase > Plagioclase; ~Some Hornblende possible", "name"))
			.setNext(new Node("Plagioclase > Orthoclase; ~Some Augite possible", "name"));

		//step 3 path 1 0 2
		this.start.getNext(1).getNext(0).getNext(2).setNext(new Node("Na-rich Plagioclase; ~Hornblende and Biotite common"))
			.setNext(new Node("Ca-rich Plagioclase; ~Augite common, some Olivine"));

		//step 3 path 1 0 3
		this.start.getNext(1).getNext(0).getNext(3).setNext(new Node("Augite and Hornblende dominate; ~Olivine common"))
			.setNext(new Node("Olivine dominates; ~Black Chromite crystals typical"));

		//step 3 path 1 1 0
		this.start.getNext(1).getNext(1).getNext(0).setNext(new Node("Mafic minerals < 10%; ~Orthoclase > Plagioclase", "name"))
			.setNext(new Node("Mafic minerals > 10%; ~Plagioclase > Orthoclase", "name"));

		//step 3 path 1 1 1
		this.start.getNext(1).getNext(1).getNext(1).setNext(new Node("Orthoclase > Plagioclase; ~Some Hornblende possible", "name"))
			.setNext(new Node("Plagioclase > Orthoclase; ~Some Augite possible", "name"));

		//step 3 path 1 1 2
		this.start.getNext(1).getNext(1).getNext(2).setNext(new Node("Na-rich Plagioclase; ~Hornblende and Biotite common"))
			.setNext(new Node("Ca-rich Plagioclase; ~Augite common, some Olivine"));

		//step 3 path 1 1 3
		this.start.getNext(1).getNext(1).getNext(3).setNext(new Node("Augite and Hornblende dominate; ~Olivine common"))
			.setNext(new Node("Olivine dominates; ~Black Chromite crystals typical"));

		//step 3 path 1 2 0
		this.start.getNext(1).getNext(2).getNext(0).setNext(new Node("Mafic minerals < 10%; ~Orthoclase > Plagioclase", "name"))
			.setNext(new Node("Mafic minerals > 10%; ~Plagioclase > Orthoclase", "name"));

		//step 3 path 1 2 1
		this.start.getNext(1).getNext(2).getNext(1).setNext(new Node("Orthoclase > Plagioclase; ~Some Hornblende possible", "name"))
			.setNext(new Node("Plagioclase > Orthoclase; ~Some Augite possible", "name"));

		//step 3 path 1 2 2
		this.start.getNext(1).getNext(2).getNext(2).setNext(new Node("Na-rich Plagioclase; ~Hornblende and Biotite common"))
			.setNext(new Node("Ca-rich Plagioclase; ~Augite common, some Olivine"));

		//step 3 path 1 2 3
		this.start.getNext(1).getNext(2).getNext(3).setNext(new Node("Augite and Hornblende dominate; ~Olivine common"))
			.setNext(new Node("Olivine dominates; ~Black Chromite crystals typical"));

		
	}
}

MineralPath.default = {
	0: {
		name: "Crystal Size",
		data: { 
			0: ["Phaneritic (coarse, visible crystals", "Porphyritic (some coarse crystals)", "Aphanitic (tiny crystals)", "Glassy (Amorphous)"]
		}
	},
	1: {
		name: "Mineral Content and/or Color",
		data: {
			0: ["Mafic minerals dominate", "Mix of mafic and felsic minerals", "Felsic minerals dominate"],
			1: ["Dark groundmass colors dominate", "Intermediate groundmass colors", "Light groundmass dominate"],
			2: ["Dark groundmass colors dominate", "Intermediate groundmass colors", "Light groundmass dominate"],
			3: ["Dark colored", "Light colored"]
		}
	},
	2: {
		name: "ID Minerals",
		data: {

		}
	}
}