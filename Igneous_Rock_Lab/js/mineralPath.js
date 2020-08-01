import Node from './node.js';

export default class MineralPath {
	constructor(){
		this.start = new Node("start", "Crystal size");
		this.makeDefaultPath();
		this.current = this.start;
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

	isEnd() {
		return this.current.getNext(0).isEnd();
	}

	getEnd() {
		return this.current.getEnd();
	}

	makeDefaultPath() {
		//step 0
		this.start.setNext(new Node(["Phaneritic", "(coarse, visible crystals)"], "Mineral Content and/or Color", false))
			.setNext(new Node(["Porphyritic", "(some coarse crystals)"], "Mineral Content and/or Color", false))
			.setNext(new Node(["Aphanitic", "(tiny crystals)"], "Mineral Content and/or Color", false))
			.setNext(new Node(["Glassy", "(Amorphous)"], "Mineral Content and/or Color", false));

		//step 1 path 0
		this.start.getNext(0).setNext(new Node(["Mafic minerals dominate"], "ID Minerals", false))
			.setNext(new Node(["Mix of mafic and felsic minerals"], "ID Minerals", false))
			.setNext(new Node(["Felsic minerals dominate"], "ID Minerals", false));

		//step 1 path 1
		this.start.getNext(1).setNext(new Node(["Dark groundmass colors dominate"], "ID Minerals", false))
			.setNext(new Node(["Intermediate groundmass colors"], "ID Minerals", false))
			.setNext(new Node(["Light groundmass dominate"], "ID Minerals", false));

		//step 1 path 2
		this.start.getNext(2).setNext(new Node(["Dark groundmass colors dominate"], "Other Properties", false))
			.setNext(new Node(["Intermediate groundmass colors"], "Other Properties", false))
			.setNext(new Node(["Light groundmass dominate"], "Other Properties", false));

		//step 1 path 3
		this.start.getNext(3).setNext(new Node(["Dark colored"], "Other Properties", false))
			.setNext(new Node(["Light colored"], "Other Properties", false));

		//step 2 path 0 0
		this.start.getNext(0).getNext(0).setNext(new Node(["Quartz, Orthoclase, or", "Na-rich (light-colored) Plagioclase"], "name", true, 0))
			.setNext(new Node(["Na-rich (light-colored) Plagioclase"], "name", true, 0))
			.setNext(new Node(["Hornblende and Na-rich", "(light-colored) Plagioclase"], "name", true, 0))
			.setNext(new Node(["Na-rich (light-colored) Plagioclase"], "name", true, 0));

		//step 2 path 0 1
		this.start.getNext(0).getNext(1).setNext(new Node(["Quartz, Orthoclase, or", "Na-rich (light-colored) Plagioclase"], "name", true, 0))
			.setNext(new Node(["Na-rich (light-colored) Plagioclase"], "name", true, 0))
			.setNext(new Node(["Hornblende and Na-rich", "(light-colored) Plagioclase"], "name", true, 0))
			.setNext(new Node(["Na-rich (light-colored) Plagioclase"], "name", true, 0));

		//step 2 path 0 2
		this.start.getNext(0).getNext(2).setNext(new Node(["Quartz, Orthoclase, or", "Na-rich (light-colored) Plagioclase"], "name", true, 0))
			.setNext(new Node(["Na-rich (light-colored) Plagioclase"], "name", true, 0))
			.setNext(new Node(["Hornblende and Na-rich", "(light-colored) Plagioclase"], "name", true, 0))
			.setNext(new Node(["Na-rich (light-colored) Plagioclase"], "name", true, 0));

		//step 2 path 1 0
		this.start.getNext(1).getNext(0).setNext(new Node(["Quartz > 20%"], "Other properties", false))
			.setNext(new Node(["Feldspar minerals dominate;", "Quartz < 20%"], "Other properties", false))
			.setNext(new Node(["Mafic minerals dominate;", "Quartz 0-5%"], "Other properties", false))
			.setNext(new Node(["Mafic minerals > 90%;", "Feldspar minerals < 5%"], "Other properties", false));

		//step 2 path 1 1
		this.start.getNext(1).getNext(1).setNext(new Node(["Quartz > 20%"], "Other properties", false))
			.setNext(new Node(["Feldspar minerals dominate;", "Quartz < 20%"], "Other properties", false))
			.setNext(new Node(["Mafic minerals dominate;", "Quartz 0-5%"], "Other properties", false))
			.setNext(new Node(["Mafic minerals > 90%;", "Feldspar minerals < 5%"], "Other properties", false));

		//step 2 path 1 2
		this.start.getNext(1).getNext(2).setNext(new Node(["Quartz > 20%"], "Other properties", false))
			.setNext(new Node(["Feldspar minerals dominate;", "Quartz < 20%"], "Other properties", false))
			.setNext(new Node(["Mafic minerals dominate;", "Quartz 0-5%"], "Other properties", false))
			.setNext(new Node(["Mafic minerals > 90%;", "Feldspar minerals < 5%"], "Other properties", false));

		//step 2 path 3 0
		this.start.getNext(3).getNext(0).setNext(new Node(["Vesicules present"], "Name", true, ["stub", "stub"]))
			.setNext(new Node(["Vesicules not present"], "name", true, ["stub", "stub"]));

		// step 2 path 3 1
		this.start.getNext(3).getNext(1).setNext(new Node(["Vesicules present"], "Name", true, ["stub", "stub"]))
			.setNext(new Node(["Vesicules not present"], "name", true, ["stub", "stub"]));

		// step 2 path 2 0
		this.start.getNext(2).getNext(0).setNext(new Node(["Vesicules present"], "name", true, ["stub", "stub"]))
			.setNext(new Node(["Vesicules not present"], "name", true, ["stub", "stub"]));

		// step 2 path 2 1
		this.start.getNext(2).getNext(1).setNext(new Node(["Vesicules present"], "name", true, ["stub", "stub"]))
			.setNext(new Node(["Vesicules not present"], "name", true, ["stub", "stub"]));

		// step 2 path 2 2
		this.start.getNext(2).getNext(2).setNext(new Node(["Vesicules present"], "name", true, ["stub", "stub"]))
			.setNext(new Node(["Vesicules not present"], "name", true, ["stub", "stub"]));

		//step 3 path 1 0 0
		this.start.getNext(1).getNext(0).getNext(0).setNext(new Node(["Mafic minerals < 10%;", "Orthoclase > Plagioclase"], "name", true, ["stub", "stub"]))
			.setNext(new Node(["Mafic minerals > 10%;", "Plagioclase > Orthoclase"], "name", true, ["stub", "stub"]));

		//step 3 path 1 0 1
		this.start.getNext(1).getNext(0).getNext(1).setNext(new Node(["Orthoclase > Plagioclase;", "Some Hornblende possible"], "name", true, ["stub", "stub"]))
			.setNext(new Node(["Plagioclase > Orthoclase;", "Some Augite possible"], "name", true, ["stub", "stub"]));

		//step 3 path 1 0 2
		this.start.getNext(1).getNext(0).getNext(2).setNext(new Node(["Na-rich Plagioclase;", "Hornblende and Biotite common"], "name", true, ["stub", "stub"]))
			.setNext(new Node(["Ca-rich Plagioclase;", "Augite common, some Olivine"], "name", true, ["stub", "stub"]));

		//step 3 path 1 0 3
		this.start.getNext(1).getNext(0).getNext(3).setNext(new Node(["Augite and Hornblende dominate;", "Olivine common"], "name", true, ["stub", "stub"]))
			.setNext(new Node(["Olivine dominates;", "Black Chromite crystals typical"], "name", true, ["stub", "stub"]));

		//step 3 path 1 1 0
		this.start.getNext(1).getNext(1).getNext(0).setNext(new Node(["Mafic minerals < 10%;", "Orthoclase > Plagioclase"], "name", true, ["stub", "stub"]))
			.setNext(new Node(["Mafic minerals > 10%;", "Plagioclase > Orthoclase"], "name", true, ["stub", "stub"]));

		//step 3 path 1 1 1
		this.start.getNext(1).getNext(1).getNext(1).setNext(new Node(["Orthoclase > Plagioclase;", "Some Hornblende possible"], "name", true, ["stub", "stub"]))
			.setNext(new Node(["Plagioclase > Orthoclase;", "Some Augite possible"], "name", true, ["stub", "stub"]));

		//step 3 path 1 1 2
		this.start.getNext(1).getNext(1).getNext(2).setNext(new Node(["Na-rich Plagioclase;", "Hornblende and Biotite common"], "name", true, ["stub", "stub"]))
			.setNext(new Node(["Ca-rich Plagioclase;", "Augite common, some Olivine"], "name", true, ["stub", "stub"]));

		//step 3 path 1 1 3
		this.start.getNext(1).getNext(1).getNext(3).setNext(new Node(["Augite and Hornblende dominate;", "Olivine common"], "name", true, ["stub", "stub"]))
			.setNext(new Node(["Olivine dominates;", "Black Chromite crystals typical"], "name", true, ["stub", "stub"]));

		//step 3 path 1 2 0
		this.start.getNext(1).getNext(2).getNext(0).setNext(new Node(["Mafic minerals < 10%;", "Orthoclase > Plagioclase"], "name", true, ["stub", "stub"]))
			.setNext(new Node(["Mafic minerals > 10%;", "Plagioclase > Orthoclase"], "name", true, ["stub", "stub"]));

		//step 3 path 1 2 1
		this.start.getNext(1).getNext(2).getNext(1).setNext(new Node(["Orthoclase > Plagioclase;", "Some Hornblende possible"], "name", true, ["stub", "stub"]))
			.setNext(new Node(["Plagioclase > Orthoclase;", "Some Augite possible"], "name", true, ["stub", "stub"]));

		//step 3 path 1 2 2
		this.start.getNext(1).getNext(2).getNext(2).setNext(new Node(["Na-rich Plagioclase;", "Hornblende and Biotite common"], "name", true, ["stub", "stub"]))
			.setNext(new Node(["Ca-rich Plagioclase;", "Augite common, some Olivine"], "name", true, ["stub", "stub"]));

		//step 3 path 1 2 3
		this.start.getNext(1).getNext(2).getNext(3).setNext(new Node(["Augite and Hornblende dominate;", "Olivine common"], "name", true, ["stub", "stub"]))
			.setNext(new Node(["Olivine dominates;", "Black Chromite crystals typical"], "name", true, ["stub", "stub"]));


	}
}





// this.start.getNext(0).getNext(0).setNext(new Node(["Black", "5.5 to 6.0", "None", "High SP (5.2); strongly magnetic", "Magnetite"]))
// 			.setNext(new Node(["Dark gray", "1.0", "One, curved sheets", "Low SP (2.2); greasy feel; smudgey, writes on paper"]))
// 			.setNext(new Node(["Golden-yellow", "6.0 to 6.5", "None", "High SP (4.8-5.0); cubic crystals with striated faces"]))
// 			.setNext(new Node(["Brass-yellow"]))