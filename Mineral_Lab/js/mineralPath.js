import Node from './node.js';

export default class MineralPath {
	constructor(){
		this.start = new Node("start", "Describe the Luster");
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

	makeDefaultPath() {
		// step 1
		this.start.setNext(new Node(["Metallic Luster"], "Test for Streak"))
			.setNext(new Node(["Nonmetallic luster; dark"], "Test for Hardness"))
			.setNext(new Node(["Nonmetallic luster; light"], "Test for Hardness"));

		//step 2 branch 0
		this.start.getNext(0).setNext(new Node(["Black; greenish-black;", "dark green to dark gray"], "Choose a Color"))
			.setNext(new Node(["Red; rusty-red; reddish-brown"], "Choose a Color"))
			.setNext(new Node(["Brown; yellow; white"], "Choose a Color"));

		// step 2 branch 1
		this.start.getNext(1).setNext(new Node(["Harder than glass"], "Test for Cleavage"))
			.setNext(new Node(["Softer than glass"], "Test for Cleavage"));

		// step 2 branch 2
		this.start.getNext(2).setNext(new Node(["Harder than glass"], "Test for Cleavage"))
			.setNext(new Node(["Softer than glass"], "Test for Cleavage"));

		// step 3 branch 0 branch 0
		this.start.getNext(0).getNext(0).setNext(new Node(["Black"], "Test Other Properties"))
			.setNext(new Node(["Dark gray"], "Test Other Properties"))
			.setNext(new Node(["Golden-yellow"], "Test Other Properties"))
			.setNext(new Node(["Brass-yellow"], "Test Other Properties"))
			.setNext(new Node(["Lead-yellow"], "Test Other Properties"));

		// step 3 branch 0 branch 1
		this.start.getNext(0).getNext(1).setNext(new Node(["Steel-gray"], "Test Other Properties"))
			.setNext(new Node(["Copper"], "Test Other Properties"));

		// step 3 branch 0 branch 2
		this.start.getNext(0).getNext(2).setNext(new Node(["Dark brown to yellowish-brown"], "Test Other Properties"));

		// step 3 branch 1 branch 0
		this.start.getNext(1).getNext(0).setNext(new Node(["Cleavage present"], "Test Other Properties"))
			.setNext(new Node(["Cleavage absent"], "Test Other Properties"));

		// step 3 branch 1 branch 1
		this.start.getNext(1).getNext(1).setNext(new Node(["Cleavage present"], "Test Other Properties"))
			.setNext(new Node(["Cleavage absent"], "Test Other Properties"));

		//step 3 branch 2 branch 0
		this.start.getNext(2).getNext(0).setNext(new Node(["Cleavage present"], "Test Other Properties"))
			.setNext(new Node(["Cleavage absent"], "Test Other Properties"));

		// step 3 branch 2 branch 1
		this.start.getNext(2).getNext(1).setNext(new Node(["Cleavage present"], "Test Other Properties"))
			.setNext(new Node(["Cleavage absent"], "Test Other Properties"));

		// step 4 branch 0 branch 0 branch 0
		this.start.getNext(0).getNext(0).getNext(0).setNext(new Node(["5.5-6.0 H", "None", "High SP (5.2); strongly magnetic"]));

		// step 4 branch 0 branch 0 branch 1
		this.start.getNext(0).getNext(0).getNext(1).setNext(new Node(["1.0 H", "One, curved sheets", "Low SP (2.2); greasy feel;", "smudgy, writes on paper"])); // "Graphite"

		// step 4 branch 0 branch 0 branch 2
		this.start.getNext(0).getNext(0).getNext(2).setNext(new Node(["6.0-6.5 H", "None", "High SP (4.8-5.0);", "cubic crystals with striated faces"])); // "Pyrite"

		// step 4 branch 0 branch 0 branch 3
		this.start.getNext(0).getNext(0).getNext(3).setNext(new Node(["3.5-4.0 H", "None", "Tarnished bronze to purple", "unsually massive"])); // "Chalcopyrite"

		//step 4 branch 0 branch 0 branch 4
		this.start.getNext(0).getNext(0).getNext(4).setNext(new Node(["2.5 H", "Three, cubic", "Very high SP (7.6)", "Galena"]));

		// step 4 branch 0 branch 1 branch 0
		this.start.getNext(0).getNext(1).getNext(0).setNext(new Node(["5.0-6.0 H", "None", "Brittle; shiny flakes;", "May be submetallic to dull red"])); // "Hematite (iron stone or specular)"

		// step 4 branch 0 branch 1 branch 1
		this.start.getNext(0).getNext(1).getNext(1).setNext(new Node(["3.0-3.5 H", "None", "Very high SP (8.8-8.9)"])); // "Copper"

		// step 4 branch 0 branch 2 branch 0
		this.start.getNext(0).getNext(2).getNext(0).setNext(new Node(["5.0-5.5 H", "One, not commonly observed", "Stained, rusty, iron-like masses"])) // "Limonite"
			.setNext(new Node(["3.5-4.0 H", "Six, not all faces easily observed", "Resinous luster"])); // "Sphalerite"

		// step 4 branch 1 branch 0 branch 0
		this.start.getNext(1).getNext(0).getNext(0).setNext(new Node(["5.5-6.0 H", "Dark green to black; Cleavage in", "two directions at nearly 90 degrees"])) // "Augite"
			.setNext(new Node(["5.0-6.0 H", "Vitreous; black to dark green;", "cleavage in two directions at 56", "and 124 degrees, often splintery"])) // "Hornblende"
			.setNext(new Node(["6.0-6.5 H", "Vitreous; gray to reddish brown or", "black; cleavage in two directions", "at 90 degrees; striations on", "cleavage planes"])) // "Plagioclase (Ca-rich feldspar)"
			.setNext(new Node(["6.0-7.0 H", "Vitreous; pale yellow to dark green;", "cleavage present but poor;", "ganular masses of striated prisms"])) // "Epidote"
			.setNext(new Node(["7.0 H", "Brown to grayish-brown; prismatic", "crystals common, often twinned in", "the shape of crosses"])); // "Staurolite"

		// step 4 branch 1 branch 0 branch 1
		this.start.getNext(1).getNext(0).getNext(1).setNext(new Node(["9.0 H", "Commonly brown-colored;", "barrel-shaped, hexagonal crystals", "with basal striations"])) // "Corundum"
			.setNext(new Node(["7.0-7.5 H", "Vitreous to resinous; dark red,", "reddish- or greenish-brown; brittle;", "planar, nonparallel fractures", "common; dodecahedral crystals"])) // "Garnet"
			.setNext(new Node(["7.0-7.5 H", "Vitreous; color varies; elongated,", "transparent, striated, triangular", "prisms common"])) // "Tourmaline"
			.setNext(new Node(["7.0 H", "Vitreous; color varies; translucent;", "massive, although hexagonal", "crystals common; conchoidal", "fractures" ])) // "Quartz (massive or crystalline)"
			.setNext(new Node(["7.0 H", "Waxy to dull luster; color varies;", "conchoidal fractures; smooth", "textured surfaces"])) // "Chalcedony (chert, flint, jasper)"
			.setNext(new Node(["6.5-7.0 H", "Vitreous; olive green; granular,", "glassy masses"])); // "Olivine"

		// step 4 branch 1 branch 1 branch 0
		this.start.getNext(1).getNext(1).getNext(0).setNext(new Node(["3.5-4.0 H", "Resinous; Dark brown to", "yellowish-brown; cleavage in six", "directions, not all faces easily", "observed"])) // "Sphalerite"
			.setNext(new Node(["2.5-3.0 H", "Vitreous; dark brown, dark green", "to black; cleavage in one direction", "forming thin, flexible sheets"])) // "Biotite"
			.setNext(new Node(["2.0-3.0 H", "Vitreous to dull; dark green to", "greenish-black; cleavage one", "direction forming thin, curved,", "flexible sheets"])); // "Chlorite"

		// step 4 branch 1 branch 1 branch 1
		this.start.getNext(1).getNext(1).getNext(1).setNext(new Node(["5.0-6.0 H", "Dull, earthy luster; red to", "red-brown color and streak; ", "SP (5.0-5.3)"])) // "Hematite (sedimentary)"
			.setNext(new Node(["1.0-5.0 H", "Yellow, yellowish-brown to", "brownish-black; dull, earthy or", "rusty masses"])) // "Limonite (geothite)"
			.setNext(new Node(["5.0 H", "Viterous to resinous; commonly", "greenish, but color varies;", "crystals common"])) // "Apatite"
			.setNext(new Node(["3.5-4.0 H", "Bright to dark green; banded,", "globular masses; occurs as void", "coatings and vein fillings"])) // "Malachite"
			.setNext(new Node(["3.5-4.0 H", "Commonly deep blue; banded,", "globular masses; occurs as void", "coatings and vein fillings"])); // "Azurite"

		// step 4 branch 2 branch 0 branch 0
		this.start.getNext(2).getNext(0).getNext(0).setNext(new Node(["6.0-7.0 H", "Vitreous; pale yellow to dark green;", "cleavage present but poor;", "granular masses of striated prisms"])) // "Epidote"
			.setNext(new Node(["6.0-6.5 H", "Vitreous; white to gray; cleavage", "in two directions at 90°; striations", "(grooves) appear on cleavage", "planes"])) // "Plagioclase (Na-rich feldspar)"
			.setNext(new Node(["6.0 H", "Vitreous; white to fleshy-pink;", "cleavage in two directions at 90°;", "muscle fibers (veins) appear on", "cleavage planes"])) // "Orthoclase (K-rich feldspar)"
			.setNext(new Node(["4.5-5.0 or 6.5-7.0 H", "Vitreous; typically light blue;", "cleavage good in one direction;", "slim, elongated parallel crystals;", "softer parallel to long axis,", "harder perpendicular to long axis"])); // "Kyanite"

		// step 4 branch 2 branch 0 branch 1
		this.start.getNext(2).getNext(0).getNext(1).setNext(new Node(["7.0-7.5 H", "Vitreous; color varies;", "elongated, transparent, striated,", "triangular prisms common"])) // "Tourmaline"
			.setNext(new Node(["7.0 H", "Vitreous; color varies;", "translucent; massive, although", "hexagonal crystals common;", "conchoidal fractures"])) // "Quartz (massive or crystalline)"
			.setNext(new Node(["7.0 H", "Waxy to dull luster; color varies;", "conchoidal fractures; smooth", "textured surfaces"])) // "Chalcedony (chert, flint, or jasper)"
			.setNext(new Node(["6.5-7.0 H", "Vitreous; olive green; granular,", "glassy masses"])) // "Olivine"

		// step 4 branch 2 branch 1 branch 0
		this.start.getNext(2).getNext(1).getNext(0).setNext(new Node(["2.5 H", "Vitreous; clear to white or light", "gray; cubic cleavage; salty taste"])) // "Halite"
			.setNext(new Node(["3.0 H", "Vitreous; clear to white or light", "gray; rhombohedral cleavage;", "reacts with dilute HCl;", "double-refraction in transparent", "varieties"])) // "Calcite"
			.setNext(new Node(["3.5-4.0 H", "Vitreous to pearly; clear,", "white, pink, various colors;", "rhombohedral cleavage; occurs in", "coarsely crystalline masses; reacts", "with dilute HCl only in powdered", "form"])) // "Dolomite"
			.setNext(new Node(["2.0 H", "Vitreous to pearly; clear, white,", "pink, various colors; cleavage", "good in one direction forming", "thick sheets"])) // "Gypsum (selenite)"
			.setNext(new Node(["1.0 H", "Pearly to earthy; white, gray, or", "pale green; cleavage in one", "direction forming thin, curved", "sheets; soapy or greasy feel"])) // "Talc"
			.setNext(new Node(["2.5-3.5 H", "Vitreous; clear, various pale colors;", "cleavage in one direction forming", "thin, flexible sheets"])) // "Muscovite"
			.setNext(new Node(["4.0 H", "Vitreous; clear to yellow, green,", "or purple; cleavage in fours", "directions often forming", "octahedrons"])); // "Fluorite"

		// step 4 branch 2 branch 1 branch 1
		this.start.getNext(2).getNext(1).getNext(1).setNext(new Node(["1.5-2.5 H", "Vitreous to earthy; yellow;", "crystalline or massive"])) // "Sulfur"
			.setNext(new Node(["2.0 H", "Earthy; white to translucent; no", "apparent cleavage; massive,", "fine-grained variety, some with", "chicken-wire structure", "(alabaster); fibrous variety", "(satin spar)"])) // "Gypsum (alabaster or satin spar)"
			.setNext(new Node(["2.0-2.5 H", "Dull, earthy luster; white;", "massive, chalky appearance"])) // "Kaolinite"
			.setNext(new Node(["1.0-3.0 H", "Whitish, with red to brown", "mottling; pisolitic structure"])) // "Bauxite"
			.setNext(new Node(["1.0 H", "Pearly to earthy; white, gray,", "or pale green; cleavage absent in", "massive variety; soapy or", "greasy feel"])) // "Talc"
			.setNext(new Node(["3.0 H", "Dull, earthy luster; white;", "fine crystalline masses with no", "apparent cleavage; reacts with", "dilute HCl"])) // "Calcite"
			.setNext(new Node(["3.5-4.0 H", "Dull, earthy luster; white; fine", "crystalline masses with no", "apparent cleavage; reacts with", "dilute HCl only in powdered form"])); // "Dolomite"
	}
}





// this.start.getNext(0).getNext(0).setNext(new Node(["Black", "5.5 to 6.0", "None", "High SP (5.2); strongly magnetic", "Magnetite"]))
// 			.setNext(new Node(["Dark gray", "1.0", "One, curved sheets", "Low SP (2.2); greasy feel; smudgey, writes on paper"]))
// 			.setNext(new Node(["Golden-yellow", "6.0 to 6.5", "None", "High SP (4.8-5.0); cubic crystals with striated faces"]))
// 			.setNext(new Node(["Brass-yellow"]))