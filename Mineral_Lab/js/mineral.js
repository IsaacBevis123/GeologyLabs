export default class Mineral{

	constructor(){
		this.nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39];
		let num = Math.round(Math.random() * this.nums.length - 1);
		this.mineral = Mineral.MINERALS[this.nums[num]];

		this.nums.splice(num, 1);

		this.isSecondOpt = null;
	}

	drawMineral(draw){
		switch (this.mineral.files.length){
			case 2:
				this.pic_1 = draw.image("../minerals/" + this.mineral.files[0]).size(400, 300);
				this.pic_2 = draw.image("../minerals/" + this.mineral.files[1]).size(400, 300).move(400, 0);
				this.pic_3 = null;
				break;

			case 3:
				this.pic_1 = draw.image("../minerals/" + this.mineral.files[0]).size(400, 300);
				this.pic_2 = draw.image("../minerals/" + this.mineral.files[1]).size(400, 300).move(400, 0);
				this.pic_3 = draw.image("../minerals/" + this.mineral.files[2]).size(400, 300).move(800, 0);
				break;

			default:
				console.log("ERROR");
				break;
		}
	}

	eraseMineral() {
		if (this.pic_1 != null){
			this.pic_1.remove();
		}
		
		if (this.pic_2 != null){
			this.pic_2.remove();
		}
		
		if (this.pic_3 != null){
			this.pic_3.remove();
		}
	}

	checkCorrect(i, stepIndex){
		if (this.isSecondOpt == null){
			if (this.mineral.correct[stepIndex].length == 2){
				if (i == this.mineral.correct[stepIndex][0]){
					this.isSecondOpt = false;
					return true;
				}
				else if (i == this.mineral.correct[stepIndex][1]){
					this.isSecondOpt = true;
					return true;
				}
				else {
					return false;
				}
			}
			else {
				return (this.mineral.correct[stepIndex][0] == i)
			}
		}
		else if (this.isSecondOpt){
			return (this.mineral.correct[stepIndex][1] == i);
		}
		else {
			return (this.mineral.correct[stepIndex][0] == i);
		}				
	}

	loadNext() {
		if (this.nums.length > 0){
			let temp = Math.random();
			let num = Math.round(temp * (this.nums.length - 1));
			this.mineral = Mineral.MINERALS[this.nums[num]];
			this.nums.splice(num, 1);
			this.isSecondOpt = null;
			return true;
		}
		else {
			// end assignment here
			return false;
		}
	}

	testMineral(i, draw){
		this.mineral = Mineral.MINERALS[i];
		this.drawMineral(draw);
	}

}
// NOTE:  correct is a list containing lists of the acceptable answers on each step (some minerals are in two sections [nonmetalic dark and nonmetalic light])

Mineral.MINERALS = {
	0: {
		name: "Alabaster Gypsum",
		files: ["Alabaster_Gypsum/Alabaster_Gypsum_1.jpg", "Alabaster_Gypsum/Alabaster_Gypsum_2.jpg"],
		correct: [[2], [1], [1], [1]]
	},
	1: {
		name: "Apatite",
		files: ["Apatite/Apatite_1.jpg", "Apatite/Apatite_2.jpg", "Apatite/Apatite_3.jpg"],
		correct: [[1], [1], [1], [2]]
	},
	2: {
		name: "Augite",
		files: ["Augite/Augite_1.jpg", "Augite/Augite_2.jpg", "Augite/Augite_3.jpg"],
		correct: [[1], [0], [0], [0]]
	},
	3: {
		name: "Azurite",
		files: ["Azurite/Azurite_1.jpg", "Azurite/Azurite_2.jpg", "Azurite/Azurite_3.jpg"],
		correct: [[1], [1], [1], [4]]
	},
	4: {
		name: "Bauxite",
		files: ["Bauxite/Bauxite_1.jpg", "Bauxite/Bauxite_2.jpg", "Bauxite/Bauxite_3.jpg"],
		correct: [[2], [1], [1], [3]]
	},
	5: {
		name: "Biotite",
		files: ["Biotite/Biotite_1.jpg", "Biotite/Biotite_2.jpg", "Biotite/Biotite_3.jpg"],
		correct: [[1], [1], [0], [1]]
	},
	6: {
		name: "Calcite",
		files: ["Calcite/Calcite_1.jpg", "Calcite/Calcite_2.jpg", "Calcite/Calcite_3.jpg"],
		correct: [[2], [1], [1], [5]]
	},
	7: {
		name: "Chacopyrite",
		files: ["Chacopyrite/Chacopyrite_1.jpg", "Chacopyrite/Chacopyrite_2.jpg", "Chacopyrite/Chacopyrite_3.jpg"],
		correct: [[0], [0], [3], [0]]
	},
	8: {
		name: "Chalcedony",
		files: ["Chalcedony/Chalcedony_1.jpg", "Chalcedony/Chalcedony_2.jpg", "Chalcedony/Chalcedony_3.jpg"],
		correct: [[2], [0], [1], [2]]
	},
	9: {
		name: "Copper",
		files: ["Copper/Copper_1.jpg", "Copper/Copper_2.jpg", "Copper/Copper_3.jpg"],
		correct: [[0], [1], [1], [0]]
	},
	10: {
		name: "Corundum",
		files: ["Corundum/Corundum_1.jpg", "Corundum/Corundum_2.jpg", "Corundum/Corundum_3.jpg"],
		correct: [[1], [0], [1], [0]]
	},
	11: {
		name: "Crystalline Quartz",
		files: ["Crystalline_Quartz/Crystalline_Quartz_1.jpg", "Crystalline_Quartz/Crystalline_Quartz_2.jpg"],
		correct: [[1, 2], [0, 0], [1, 1], [3, 1]]
	},
	12: {
		name: "Dolomite",
		files: ["Dolomite/Dolomite_1.jpg", "Dolomite/Dolomite_2.jpg", "Dolomite/Dolomite_3.jpg"],
		correct: [[2], [1], [0, 1], [2, 6]]
	},
	13: {
		name: "Epidote",
		files: ["Epidote/Epidote_1.jpg", "Epidote/Epidote_2.jpg", "Epidote/Epidote_3.jpg"],
		correct: [[1, 2], [0, 0], [0, 0], [3, 0]]
	},
	14: {
		name: "Fluorite",
		files: ["Fluorite/Fluorite_1.jpg", "Fluorite/Fluorite_2.jpg", "Fluorite/Fluorite_3.jpg"],
		correct: [[2], [1], [0], [6]]
	},
	15: {
		name: "Garnet",
		files: ["Garnet/Garnet_1.jpg", "Garnet/Garnet_2.jpg", "Garnet/Garnet_3.jpg"],
		correct: [[1], [0], [1], [1]]
	},
	16: {
		name: "Graphite",
		files: ["Graphite/Graphite_1.jpg", "Graphite/Graphite_2.jpg", "Graphite/Graphite_3.jpg"],
		correct: [[0], [0], [1], [0]]
	},
	17: {
		name: "Halite",
		files: ["Halite/Halite_1.jpg", "Halite/Halite_2.jpg", "Halite/Halite_3.jpg"],
		correct: [[2], [1], [0], [0]]
	},
	18: {
		name: "Hornblende",
		files: ["Hornblende/Hornblende_1.jpg", "Hornblende/Hornblende_2.jpg", "Hornblende/Hornblende_3.jpg"],
		correct: [[1], [0], [0], [1]]
	},
	19: {
		name: "Iron Stone Hematite",
		files: ["Iron_Stone_Hematite/Iron_Stone_Hematite_1.jpg", "Iron_Stone_Hematite/Iron_Stone_Hematite_2.jpg"],
		correct: [[0], [1], [0], [0]]
	},
	20: {
		name: "Kaolinite",
		files: ["Kaolinite/Kaolinite_1.jpg", "Kaolinite/Kaolinite_2.jpg", "Kaolinite/Kaolinite_3.jpg"],
		correct: [[2], [1], [1], [2]]
	},
	21: {
		name: "Kyanite",
		files: ["Kyanite/Kyanite_1.jpg", "Kyanite/Kyanite_2.jpg", "Kyanite/Kyanite_3.jpg"],
		correct: [[2], [0], [0], [3]]
	},
	22: {
		name: "Limonite",
		files: ["Limonite/Limonite_1.jpg", "Limonite/Limonite_2.jpg", "Limonite/Limonite_3.jpg"],
		correct: [[0], [2], [0], [0]]
	},
	23: {
		name: "Magnetite",
		files: ["Magnetite/Magnetite_1.jpg", "Magnetite/Magnetite_2.jpg", "Magnetite/Magnetite_3.jpg"],
		correct: [[0], [0], [0], [0]]
	},
	24: {
		name: "Malachite",
		files: ["Malachite/Malachite_1.jpg", "Malachite/Malachite_2.jpg", "Malachite/Malachite_3.jpg"],
		correct: [[1], [1], [1], [3]]
	},
	25: {
		name: "Massive Quartz",
		files: ["Massive_Quartz/Massive_Quartz_1.jpg", "Massive_Quartz/Massive_Quartz_2.jpg"],
		correct: [[1, 2], [0, 0], [1, 1], [3, 1]]
	},
	26: {
		name: "Muscovite",
		files: ["Muscovite/Muscovite_1.jpg", "Muscovite/Muscovite_2.jpg", "Muscovite/Muscovite_3.jpg"],
		correct: [[2], [1], [0], [5]]
	},
	27: {
		name: "Olivine",
		files: ["Olivine/Olivine_1.jpg", "Olivine/Olivine_2.jpg", "Olivine/Olivine_3.jpg"],
		correct: [[1, 2], [0, 0], [1, 1], [5, 3]]
	},
	28: {
		name: "Orthoclase",
		files: ["Orthoclase/Orthoclase_1.jpg", "Orthoclase/Orthoclase_2.jpg", "Orthoclase/Orthoclase_3.jpg"],
		correct: [[2], [0], [0], [2]]
	},
	29: {
		name: "Plagioclase",
		files: ["Plagioclase/Plagioclase_1.jpg", "Plagioclase/Plagioclase_2.jpg", "Plagioclase/Plagioclase_3.jpg"],
		correct: [[1, 2], [0, 0], [0, 0], [2, 1]]
	},
	30: {
		name: "Pyrite",
		files: ["Pyrite/Pyrite_1.jpg", "Pyrite/Pyrite_2.jpg", "Pyrite/Pyrite_3.jpg"],
		correct: [[0], [0], [2], [0]]
	},
	31: {
		name: "Satin Spar Gypsum",
		files: ["Satin_Spar_Gypsum/Satin_Spar_Gypsum_1.jpg", "Satin_Spar_Gypsum/Satin_Spar_Gypsum_2.jpg"],
		correct: [[2], [1], [1], [1]]
	},
	32: {
		name: "Sedimentary Hematite",
		files: ["Sedimentary_Hematite/Sedimentary_Hematite_1.jpg", "Sedimentary_Hematite/Sedimentary_Hematite_2.jpg"],
		correct: [[1], [1], [1], [0]]
	},
	33: {
		name: "Selenite Gypsum",
		files: ["Selenite_Gypsum/Selenite_Gypsum_1.jpg", "Selenite_Gypsum/Selenite_Gypsum_2.jpg"],
		correct: [[2], [1], [0], [3]]
	},
	34: {
		name: "Specular Hematite",
		files: ["Specular_Hematite/Specular_Hematite_1.jpg", "Specular_Hematite/Specular_Hematite_2.jpg"],
		correct: [[0], [1], [0], [0]]
	},
	35: {
		name: "Sphalerite",
		files: ["Sphalerite/Sphalerite_1.jpg", "Sphalerite/Sphalerite_2.jpg", "Sphalerite/Sphalerite_3.jpg"],
		correct: [[0], [2], [0], [1]]
	},
	36: {
		name: "Staurolite",
		files: ["Staurolite/Staurolite_1.jpg", "Staurolite/Stauolite_2.jpg", "Staurolite/Staurolite_3.jpg"],
		correct: [[1], [0], [0], [4]]
	},
	37: {
		name: "Sulfur",
		files: ["Sulfur/Sulfur_1.jpg", "Sulfur/Sulfur_2.jpg", "Sulfur/Sulfur_3.jpg"],
		correct: [[2], [1], [1], [0]]
	},
	38: {
		name: "Talc",
		files: ["Talc/Talc_1.jpg", "Talc/Talc_2.jpg", "Talc/Talc_3.jpg"],
		correct: [[2], [1], [1, 0], [4, 4]]
	},
	39: {
		name: "Tourmaline",
		files: ["Tourmaline/Tourmaline_1.jpg", "Tourmaline/Tourmaline_2.jpg", "Tourmaline/Tourmaline_3.jpg"],
		correct:[[1, 2], [0, 0], [1, 1], [2, 0]]
	}
};