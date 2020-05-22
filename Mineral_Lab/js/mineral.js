export default class Mineral{

	constructor(){
		let num = Math.round(Math.random() * 39);
		this.mineral = Mineral.MINERALS[num];
	}

	drawMineral(draw){
		switch (this.mineral.files.length){
			case 2:
				draw.image("../minerals/" + this.mineral.files[0]).size(400, 300);
				draw.image("../minerals/" + this.mineral.files[1]).size(400, 300).move(400, 0);
				break;

			case 3:
				draw.image("../minerals/" + this.mineral.files[0]).size(400, 300);
				draw.image("../minerals/" + this.mineral.files[1]).size(400, 300).move(400, 0);
				draw.image("../minerals/" + this.mineral.files[2]).size(400, 300).move(800, 0);
				break;

			default:
				console.log("ERROR");
				break;
		}
	}

	testMineral(i, draw){
		this.mineral = Mineral.MINERALS[i];
		this.drawMineral(draw);
	}

}

Mineral.MINERALS = {
	0: {
		name: "Alabaster Gypsum",
		files: ["Alabaster_Gypsum/Alabaster_Gypsum_1.jpg", "Alabaster_Gypsum/Alabaster_Gypsum_2.jpg"]
	},
	1: {
		name: "Apatite",
		files: ["Apatite/Apatite_1.jpg", "Apatite/Apatite_2.jpg", "Apatite/Apatite_3.jpg"]
	},
	2: {
		name: "Augite",
		files: ["Augite/Augite_1.jpg", "Augite/Augite_2.jpg", "Augite/Augite_3.jpg"]
	},
	3: {
		name: "Azurite",
		files: ["Azurite/Azurite_1.jpg", "Azurite/Azurite_2.jpg", "Azurite/Azurite_3.jpg"]
	},
	4: {
		name: "Bauxite",
		files: ["Bauxite/Bauxite_1.jpg", "Bauxite/Bauxite_2.jpg", "Bauxite/Bauxite_3.jpg"]
	},
	5: {
		name: "Biotite",
		files: ["Biotite/Biotite_1.jpg", "Biotite/Biotite_2.jpg", "Biotite/Biotite_3.jpg"]
	},
	6: {
		name: "Calcite",
		files: ["Calcite/Calcite_1.jpg", "Calcite/Calcite_2.jpg", "Calcite/Calcite_3.jpg"]
	},
	7: {
		name: "Chacopyrite",
		files: ["Chacopyrite/Chacopyrite_1.jpg", "Chacopyrite/Chacopyrite_2.jpg", "Chacopyrite/Chacopyrite_3.jpg"]
	},
	8: {
		name: "Chalcedony",
		files: ["Chalcedony/Chalcedony_1.jpg", "Chalcedony/Chalcedony_2.jpg", "Chalcedony/Chalcedony_3.jpg"]
	},
	9: {
		name: "Copper",
		files: ["Copper/Copper_1.jpg", "Copper/Copper_2.jpg", "Copper/Copper_3.jpg"]
	},
	10: {
		name: "Corundum",
		files: ["Corundum/Corundum_1.jpg", "Corundum/Corundum_2.jpg", "Corundum/Corundum_3.jpg"]
	},
	11: {
		name: "Crystalline Quartz",
		files: ["Crystalline_Quartz/Crystalline_Quartz_1.jpg", "Crystalline_Quartz/Crystalline_Quartz_2.jpg"]
	},
	12: {
		name: "Dolomite",
		files: ["Dolomite/Dolomite_1.jpg", "Dolomite/Dolomite_2.jpg", "Dolomite/Dolomite_3.jpg"]
	},
	13: {
		name: "Epidote",
		files: ["Epidote/Epidote_1.jpg", "Epidote/Epidote_2.jpg", "Epidote/Epidote_3.jpg"]
	},
	14: {
		name: "Fluorite",
		files: ["Fluorite/Fluorite_1.jpg", "Fluorite/Fluorite_2.jpg", "Fluorite/Fluorite_3.jpg"]
	},
	15: {
		name: "Garnet",
		files: ["Garnet/Garnet_1.jpg", "Garnet/Garnet_2.jpg", "Garnet/Garnet_3.jpg"]
	},
	16: {
		name: "Graphite",
		files: ["Graphite/Graphite_1.jpg", "Graphite/Graphite_2.jpg", "Graphite/Graphite_3.jpg"]
	},
	17: {
		name: "Halite",
		files: ["Halite/Halite_1.jpg", "Halite/Halite_2.jpg", "Halite/Halite_3.jpg"]
	},
	18: {
		name: "Hornblende",
		files: ["Hornblende/Hornblende_1.jpg", "Hornblende/Hornblende_2.jpg", "Hornblende/Hornblende_3.jpg"]
	},
	19: {
		name: "Iron Stone Hematite",
		files: ["Iron_Stone_Hematite/Iron_Stone_Hematite_1.jpg", "Iron_Stone_Hematite/Iron_Stone_Hematite_2.jpg"]
	},
	20: {
		name: "Kaolinite",
		files: ["Kaolinite/Kaolinite_1.jpg", "Kaolinite/Kaolinite_2.jpg", "Kaolinite/Kaolinite_3.jpg"]
	},
	21: {
		name: "Kyanite",
		files: ["Kyanite/Kyanite_1.jpg", "Kyanite/Kyanite_2.jpg", "Kyanite/Kyanite_3.jpg"]
	},
	22: {
		name: "Limonite",
		files: ["Limonite/Limonite_1.jpg", "Limonite/Limonite_2.jpg", "Limonite/Limonite_3.jpg"]
	},
	23: {
		name: "Magnetite",
		files: ["Magnetite/Magnetite_1.jpg", "Magnetite/Magnetite_2.jpg", "Magnetite/Magnetite_3.jpg"]
	},
	24: {
		name: "Malachite",
		files: ["Malachite/Malachite_1.jpg", "Malachite/Malachite_2.jpg", "Malachite/Malachite_3.jpg"]
	},
	25: {
		name: "Massive Quartz",
		files: ["Massive_Quartz/Massive_Quartz_1.jpg", "Massive_Quartz/Massive_Quartz_2.jpg"]
	},
	26: {
		name: "Muscovite",
		files: ["Muscovite/Muscovite_1.jpg", "Muscovite/Muscovite_2.jpg", "Muscovite/Muscovite_3.jpg"]
	},
	27: {
		name: "Olivine",
		files: ["Olivine/Olivine_1.jpg", "Olivine/Olivine_2.jpg", "Olivine/Olivine_3.jpg"]
	},
	28: {
		name: "Orthoclase",
		files: ["Orthoclase/Orthoclase_1.jpg", "Orthoclase/Orthoclase_2.jpg", "Orthoclase/Orthoclase_3.jpg"]
	},
	29: {
		name: "Plagioclase",
		files: ["Plagioclase/Plagioclase_1.jpg", "Plagioclase/Plagioclase_2.jpg", "Plagioclase/Plagioclase_3.jpg"]
	},
	30: {
		name: "Pyrite",
		files: ["Pyrite/Pyrite_1.jpg", "Pyrite/Pyrite_2.jpg", "Pyrite/Pyrite_3.jpg"]
	},
	31: {
		name: "Satin Spar Gypsum",
		files: ["Satin_Spar_Gypsum/Satin_Spar_Gypsum_1.jpg", "Satin_Spar_Gypsum/Satin_Spar_Gypsum_2.jpg"]
	},
	32: {
		name: "Sedimentary Hematite",
		files: ["Sedimentary_Hematite/Sedimentary_Hematite_1.jpg", "Sedimentary_Hematite/Sedimentary_Hematite_2.jpg"]
	},
	33: {
		name: "Selenite Gypsum",
		files: ["Selenite_Gypsum/Selenite_Gypsum_1.jpg", "Selenite_Gypsum/Selenite_Gypsum_2.jpg"]
	},
	34: {
		name: "Specular Hematite",
		files: ["Specular_Hematite/Specular_Hematite_1.jpg", "Specular_Hematite/Specular_Hematite_2.jpg"]
	},
	35: {
		name: "Sphalerite",
		files: ["Sphalerite/Sphalerite_1.jpg", "Sphalerite/Sphalerite_2.jpg", "Sphalerite/Sphalerite_3.jpg"]
	},
	36: {
		name: "Staurolite",
		files: ["Staurolite/Staurolite_1.jpg", "Staurolite/Stauolite_2.jpg", "Staurolite/Staurolite_3.jpg"]
	},
	37: {
		name: "Sulfur",
		files: ["Sulfur/Sulfur_1.jpg", "Sulfur/Sulfur_2.jpg", "Sulfur/Sulfur_3.jpg"]
	},
	38: {
		name: "Talc",
		files: ["Talc/Talc_1.jpg", "Talc/Talc_2.jpg", "Talc/Talc_3.jpg"]
	},
	39: {
		name: "Tourmaline",
		files: ["Tourmaline/Tourmaline_1.jpg", "Tourmaline/Tourmaline_2.jpg", "Tourmaline/Tourmaline_3.jpg"]
	}
};