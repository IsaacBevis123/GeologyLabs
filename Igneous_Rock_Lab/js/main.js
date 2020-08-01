import Assignment from './assignment.js';

document.getElementById("inputs").style.display = "none";
document.getElementById("mineralNameDiv").style.display = "none";
document.getElementById("summeryQuestions").style.display = "none";

let STATE = "keyOut";

const DEBUG_MODE = true;  // enable for debugging of paths

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
				if (assignment.isEnd()){
					console.log("first")
					STATE = "typeName";
					assignment.markCorrect(e.target.dataset.opt);

				}
				else { // step < 4
					assignment.advance(e.target.dataset.opt);
					assignment.drawCurrentOptions();
					if (assignment.isEnd()){
						console.log("second")
						//let temp_link = "../figures/" + assignment.table[1]
						document.getElementById("mineralNameDiv").style.display = "block";

						switch (assignment.getEnd()) {
							case 0:
								console.log("0 getEnd: " + assignment.getEnd())
								end_0();
								break;
							default:
								console.log("d getEnd: " + assignment.getEnd())
								end_default();
								break;
						}
						


				 			// + "  Then use " + "<a href='" + temp_link + "' target='popup' onclick='window.open(" + temp_link + ")'>" 
				 			// + assignment.table[0] + "</a>"
				 			// + " to determine the name of the mineral and type your answer in the box below."
				 			// + "  Press enter to continue";
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

function end_0() {
	document.getElementById("desc").innerHTML = "Click inside the box of one of the following " 
		+ assignment.path.getCurrent().getAllNext().length + " option(s) to deturmin the percentage of quartz preasent."
		+ "  Then use table 2.1 to find the name and type it in the box below."
		+ "  Press enter to continue";
}

function end_default() {
	document.getElementById("desc").innerHTML = "Click inside the box of one of the following " 
		+ assignment.path.getCurrent().getAllNext().length + " option(s)."
		+ "  Then type the name of the Igneous rock in the answer box."
		+ "  Press enter to continue";
}

function keyHandler(e){
	if (STATE == "typeName"){
		if (e.key == "Enter"){
			if (document.getElementById("mineralName").value == ""){
				alert("Please type a name in the text box.");
			}
			else{
				assignment.addStudentAnswer(document.getElementById("mineralName").value, DEBUG_MODE)
				// if there are no more minerals left, end assignment
				if(!assignment.loadNextMineral()){
					recordResults(assignment.getScore());
					document.getElementById("summeryQuestions").style.display = "block";
					document.getElementById("mineralPics").style.display = "none";
					document.getElementById("mineralNum").style.display = "none";
					document.getElementById("assignment").style.display = "none";
					document.getElementById("stepNum").style.display = "none";
					document.getElementById("mineralNameDiv").style.display = "none";
					document.getElementById("inputs").style.display = "block";
					document.getElementById("desc").innerHTML = "Answer the following symmery questions";
				}
				else{
					assignment.drawCurrentOptions();
					document.getElementById("mineralNum").innerHTML = "Mineral " + assignment.mineralNum + "/23";
				}
				STATE = "keyOut";
				document.getElementById("mineralName").value = "";
				document.getElementById("mineralNameDiv").style.display = "none";
			}
		}
	}
}


function recordResults(scoreList){

	var scoreDiv = document.getElementById("score");

	let data = "<h1 style='margin-top: 2em; text-align: center;'>Mineral Identification Grade Report</h1>";
	data += "<ol>";
	for (let i = 0; i < scoreList.length; i++){
		data += "\n<li>" + scoreList[i][1] + ": " + scoreList[i][0][0] + " incorect out of " + scoreList[i][0][1] + ", name entered: " + scoreList[i][2];
	}
	data += "\n</ol>"
	scoreDiv.innerHTML = data;
}