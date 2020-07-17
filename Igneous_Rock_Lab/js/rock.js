export default class Rock{

	constructor(){
		this.nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
		let num = Math.round(Math.random() * this.nums.length - 1);
		this.rock = Rock.ROCKS[this.nums[num]];
		this.pics = [];

		this.nums.splice(num, 1);

		this.isSecondOpt = null;
	}

	drawRock(draw){
		for (let i = 0; i < this.rock.files.length; i++){
			this.pics.push(draw.image(this.rock.files[i]).size(400, 300).move(i * 400));
		}
	}

	eraseRock() {
		for (let i = 0; i < this.rock.files.length; i++){
			this.pics[i].remove();
		}
	}

	checkCorrect(i, stepIndex){
		if (this.isSecondOpt == null){
			if (this.rock.correct[stepIndex].length == 2){
				if (i == this.rock.correct[stepIndex][0]){
					this.isSecondOpt = false;
					return true;
				}
				else if (i == this.rock.correct[stepIndex][1]){
					this.isSecondOpt = true;
					return true;
				}
				else {
					return false;
				}
			}
			else {
				return (this.rock.correct[stepIndex][0] == i)
			}
		}
		else if (this.isSecondOpt){
			return (this.rock.correct[stepIndex][1] == i);
		}
		else {
			return (this.rock.correct[stepIndex][0] == i);
		}				
	}

	loadNext() {
		if (this.nums.length > 0){
			let temp = Math.random();
			let num = Math.round(temp * (this.nums.length - 1));
			this.rock = Rock.ROCKS[this.nums[num]];
			this.nums.splice(num, 1);
			this.isSecondOpt = null;
			return true;
		}
		else {
			// end assignment here
			return false;
		}
	}

	testRock(i, draw){
		this.rock = Rock.ROCKS[i];
		this.drawRock(draw);
	}

}
// NOTE:  correct is a list containing lists of the acceptable answers on each step (some minerals are in two sections [nonmetalic dark and nonmetalic light])

Rock.ROCKS = {
	0: {
		name: "Andesite Porphy",
		files: ["https://www.mediafire.com/convkey/1376/12drcmwu890mjrp6g.jpg", "https://www.mediafire.com/convkey/1a56/hnkm57euxg3gsca6g.jpg", "https://www.mediafire.com/convkey/f21e/tx4dz6ittjacn1f6g.jpg"],
		correct: undefined
	},
	1: {
		name: "Basalt",
		files: ["https://www.mediafire.com/convkey/d557/jvax455odrd41tv6g.jpg", "https://www.mediafire.com/convkey/a239/1djevy9bnawwwym6g.jpg"],
		correct: undefined
	},
	2: {
		name: "Basalt Porphyry",
		files: ["https://www.mediafire.com/convkey/dfe2/ea8awalez0cl4rk6g.jpg", "https://www.mediafire.com/convkey/0e71/171jxw7i8dcfzvi6g.jpg"],
		correct: undefined
	},
	3: {
		name: "Dacite Porphyry",
		files: ["https://www.mediafire.com/convkey/5e72/5e13a1g883ihqnc6g.jpg", "https://www.mediafire.com/convkey/a228/cmln8spd0xj2uil6g.jpg", "https://www.mediafire.com/convkey/ed55/ag2dlaju2642ltj6g.jpg"],
		correct: undefined
	},
	4: {
		name: "Diorite",
		files: ["https://www.mediafire.com/convkey/a9a7/ak7ho079igtt36y6g.jpg", "https://www.mediafire.com/convkey/959f/bgsf5mpuzin32bh6g.jpg", "https://www.mediafire.com/convkey/b0c9/0ecabwhshhpp5ae6g.jpg"],
		correct: undefined
	},
	5: {
		name: "Dunite",
		files: ["https://www.mediafire.com/convkey/25ca/0ty7zj21w8na94w6g.jpg", "https://www.mediafire.com/convkey/5b85/gmus4urmes1x9zd6g.jpg", "https://www.mediafire.com/convkey/9ae7/m3j6zk1qrnh7rfj6g.jpg"],
		correct: undefined
	},
	6: {
		name: "Gabbro",
		files: ["https://www.mediafire.com/convkey/b29e/nqga3wqmtljv5op6g.jpg", "https://www.mediafire.com/convkey/4454/e6pcfdt72qyynwz6g.jpg", "https://www.mediafire.com/convkey/77b5/u4lfove3bc7w3fy6g.jpg"],
		correct: undefined
	},
	7: {
		name: "Granite",
		files: ["https://www.mediafire.com/convkey/91c4/isdmbycbaspzsan6g.jpg", "https://www.mediafire.com/convkey/d0a9/t9j7salb7ujrkc36g.jpg"],
		correct: undefined
	},
	8: {
		name: "Granite",
		files: ["https://www.mediafire.com/convkey/c434/fixbca98vrvl0yu6g.jpg", "https://www.mediafire.com/convkey/4e6c/jmqvoft1ibrs8026g.jpg"],
		correct: undefined
	},
	9: {
		name: "Granodiorite",
		files: ["https://www.mediafire.com/convkey/633f/pnkqro9tnlrfdsu6g.jpg", "https://www.mediafire.com/convkey/564e/ltqss6xhtv7k2bk6g.jpg", "https://www.mediafire.com/convkey/4058/m36j48nb8pymr8x6g.jpg"],
		correct: undefined
	},
	10: {
		name: "Monzonite",
		files: ["https://www.mediafire.com/convkey/0d35/hphlogvy97z3m0r6g.jpg", "https://www.mediafire.com/convkey/6aad/g65bift8t6r81h86g.jpg", "https://www.mediafire.com/convkey/39fa/ip90mzfdf4y6ztk6g.jpg"],
		correct: undefined
	},
	11: {
		name: "Obsidian",
		files: ["https://www.mediafire.com/convkey/8323/y7pvemtlk06b3y16g.jpg", "https://www.mediafire.com/convkey/a9d7/dptexypc099wvvc6g.jpg", "https://www.mediafire.com/convkey/74f4/tz8adme6n37x3nj6g.jpg"],
		correct: undefined
	},
	12: {
		name: "Pegmatitic Granite",
		files: ["https://www.mediafire.com/convkey/5b3b/1h23pcz4fzcwovi6g.jpg", "https://www.mediafire.com/convkey/b8cf/syr5iqv99y4rvlu6g.jpg", "https://www.mediafire.com/convkey/d6cb/x703c1964graswg6g.jpg"],
		correct: undefined
	},
	13: {
		name: "Peridotite",
		files: ["https://www.mediafire.com/convkey/80bb/tzzl8gufr2iit876g.jpg", "https://www.mediafire.com/convkey/fb44/ougoi1kyosovdai6g.jpg", "https://www.mediafire.com/convkey/e99f/8gbowsrtl6xgbmu6g.jpg"],
		correct: undefined
	},
	14: {
		name: "Pumice",
		files: ["https://www.mediafire.com/convkey/4338/fvumu6q95tthgk76g.jpg", "https://www.mediafire.com/convkey/5f3c/35xtnevafre061p6g.jpg", "https://www.mediafire.com/convkey/d243/hamjprqc1160e4r6g.jpg"],
		correct: undefined
	},
	15: {
		name: "Rhyolite",
		files: ["https://www.mediafire.com/convkey/b3f9/9hc9wxex2t3vg7m6g.jpg", "https://www.mediafire.com/convkey/9011/j1uwwali7tjrrjx6g.jpg"],
		correct: undefined
	},
	16: {
		name: "Rhyolite Breccia Tuff",
		files: ["https://www.mediafire.com/convkey/e290/7weeqxg2azq1igm6g.jpg", "https://www.mediafire.com/convkey/69cd/e20w646bwipwba46g.jpg"],
		correct: undefined
	},
	17: {
		name: "Rhyolite Tuff",
		files: ["https://www.mediafire.com/convkey/9252/1uw9n4m24gn2zcc6g.jpg", "https://www.mediafire.com/convkey/3c33/c3rqjwbj02eg5qq6g.jpg"],
		correct: undefined
	},
	18: {
		name: "Scoria",
		files: ["https://www.mediafire.com/convkey/6fe0/cz7e556onjw0fcq6g.jpg", "https://www.mediafire.com/convkey/29c6/59gj9zw4yxjimf56g.jpg", "https://www.mediafire.com/convkey/8ddd/vla3tb1e1yvs8wp6g.jpg", "https://www.mediafire.com/convkey/30e1/xpgzq2mat6nlrsd6g.jpg"],
		correct: undefined
	},
	19: {
		name: "Syenite",
		files: ["https://www.mediafire.com/convkey/7ad3/j1fcdjkwml3l0y86g.jpg", "https://www.mediafire.com/convkey/eb5f/fa5otrqdysdwkq46g.jpg", "https://www.mediafire.com/convkey/500c/fmltllruief58xp6g.jpg", "https://www.mediafire.com/convkey/7f04/jj503skmjllehxh6g.jpg"],
		correct: undefined
	},
	20: {
		name: "Vesicular Basalt",
		files: ["https://www.mediafire.com/convkey/897d/r3v2a8hhcai7b8j6g.jpg", "https://www.mediafire.com/convkey/8783/diepbgmb0dr4fxs6g.jpg"],
		correct: undefined
	},
	21: {
		name: "Vesicular Basalt Porphyry",
		files: ["https://www.mediafire.com/convkey/dcae/5uexvw0rl3yn7ia6g.jpg", "https://www.mediafire.com/convkey/9e11/r4x183bpdde4txb6g.jpg"],
		correct: undefined
	},
	22: {
		name: "Welded Rhyolite Tuff",
		files: ["https://www.mediafire.com/convkey/1b11/dqro1w8iap0rftj6g.jpg", "https://www.mediafire.com/convkey/c927/lqsz02sk4xmqces6g.jpg", "https://www.mediafire.com/convkey/7943/ftwzpm13l1fo93n6g.jpg"],
		correct: undefined
	}
};

// 0: {
// 		name: "Alabaster Gypsum",
// 		files: ["Alabaster_Gypsum/Alabaster_Gypsum_1.jpg", "Alabaster_Gypsum/Alabaster_Gypsum_2.jpg"],
// 		correct: [[2], [1], [1], [1]]
// 	}