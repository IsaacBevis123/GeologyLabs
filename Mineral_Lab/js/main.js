import Assignment from './assignment.js';

document.getElementById("inputs").style.display = "none";
document.getElementById("mineralNameDiv").style.display = "none";

let STATE = "keyOut";

const DEBUG_MODE = false;  // enable for debugging of paths

let el = document.getElementById("assignment");
el.addEventListener("click", clickHandler, false);
document.addEventListener("keydown", keyHandler);

let assignment = new Assignment("mineralPics", "assignment");
assignment.drawMinerals();
assignment.drawCurrentOptions();

async function clickHandler(e) {
	if (e.target.dataset.type == "nextStep" && STATE == "keyOut") {
		if (e.target.dataset.opt < assignment.path.getCurrent().getAllNext().length){
			if (assignment.checkCorrect(e.target.dataset.opt) || DEBUG_MODE){
				if (assignment.step == 4){
					STATE = "typeName";
					assignment.markCorrect(e.target.dataset.opt);

				}
				else { // step < 4
					assignment.advance(e.target.dataset.opt);
					assignment.drawCurrentOptions();
					if (assignment.step == 4){
						document.getElementById("mineralNameDiv").style.display = "block";
						document.getElementById("desc").innerHTML = "Click inside the box of one of the following " 
				 			+ assignment.path.getCurrent().getAllNext().length + " option(s)" + "\n Then use " + assignment.table + " to determine the name of the mineral and type your answer in the box below"
				 			+ "\n Press enter to continue";
					}
				}
			}
			else {
				assignment.markIncorrect(e.target.dataset.opt);
			}
		}
		
	}
	else {
		console.log("undefined");
	}
}

function keyHandler(e){
	if (STATE == "typeName" && e.key == "Enter"){
		if (document.getElementById("mineralName").value == ""){
			console.log("nothing to see here...")
		}
		else{
			assignment.addStudentAnswer(document.getElementById("mineralName").value, DEBUG_MODE)
			// if there are no more minerals left, end assignment
			if(!assignment.loadNextMineral()){
				recordResults(assignment.getScore());
			}
			else{
				assignment.drawCurrentOptions();
				document.getElementById("mineralNum").innerHTML = "Mineral " + assignment.mineralNum + "/42";
			}
			STATE = "keyOut";
			document.getElementById("mineralName").value = "";
			document.getElementById("mineralNameDiv").style.display = "none";
		}
		
	}
}


function recordResults(scoreList){
	document.getElementById("inputs").style.display = "block";
	document.getElementById("assignment").style.display = "none";
	document.getElementById("mineralPics").style.display = "none";
	document.getElementById("desc").style.display = "none";
	document.getElementById("stepNum").style.display = "none";

	var scoreDiv = document.getElementById("score");

	let data = "<h1 style='margin-top: 2em; text-align: center;'>Mineral Identification Grade Report</h1>";
	data += "<ol>";
	for (let i = 0; i < scoreList.length; i++){
		data += "\n<li>" + scoreList[i][1] + ": " + scoreList[i][0][0] + " incorect out of " + scoreList[i][0][1] + ", name entered: " + scoreList[i][2];
	}
	data += "\n</ol>"
	scoreDiv.innerHTML = data;
}