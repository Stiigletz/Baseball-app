//Team One Variables
const  increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const clearBtn = document.getElementById("clear");
const savenameOne = document.getElementById("savenameOne")
let teamOne = document.getElementById("teamOne");

let count = 0;

//Team Two Variables
const  increaseBtnTwo = document.getElementById("increaseTwo");
const decreaseBtnTwo = document.getElementById("decreaseTwo");
const clearBtnTwo = document.getElementById("clearTwo");
const savenameTwo = document.getElementById("savenameTwo")
let teamTwo = document.getElementById("teamTwo");

 let countTwo = 0;


//Inning Counter Variables
const inningUp = document.getElementById("inningCntUp");
const inningDwn = document.getElementById("inningCntDwn");
const inningReset = document.getElementById("inningRst");

var inningCounter = 1;

//Inning Timer Variables with 3 out func
    //Team One Variables
const oneOutUp = document.getElementById("oneOutUp");
const oneOutDwn = document.getElementById("oneOutDwn");
const oneOutReset = document.getElementById("oneOutRst");

var teamOneOuts = 0;

    //Team Two Variables
const twoOutUp = document.getElementById("twoOutUp");
const twoOutDwn = document.getElementById("twoOutDwn");
const twoOutReset = document.getElementById("twoOutRst");

var teamTwoOuts = 0;

let inningTimer = '0:00';






// Team One Functions

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

clearBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}

savenameOne.onclick = function() {
    const userInput = document.getElementById("oneInput").value;
    document.querySelector("h1").textContent = userInput;
    
}

//Team Two Functions

increaseBtnTwo.onclick = function() {
    countTwo++;
    countLabelTwo.textContent = countTwo;
}

decreaseBtnTwo.onclick = function() {
    countTwo--;
    countLabelTwo.textContent = countTwo;
}

clearBtnTwo.onclick = function() {
    countTwo = 0;
    countLabelTwo.textContent = countTwo;
}

savenameTwo.onclick = function() {
    const userInput = document.getElementById("twoInput").value;
    document.querySelector("h2").textContent = userInput;
    
}

//Inning Counter Functions

inningUp.onclick = function() {
    inningCounter++
    inningCount.textContent = inningCounter;
}

inningDwn.onclick = function() {
    inningCounter--
    inningCount.textContent = inningCounter;
}

inningReset.onclick = function() {
    inningCounter = 0;
    inningCount.textContent = inningCounter;
}

//Innings Timer with 3 Outs If / Else Func

    //Team One Outs Functions
oneOutUp.onclick = function() {
    teamOneOuts++
    teamOneOutsLabel.textContent = teamOneOuts;
    checkOuts();
}

oneOutDwn.onclick = function() {
    teamOneOuts--
    teamOneOutsLabel.textContent = teamOneOuts;
}

oneOutRst.onclick = function() {
    teamOneOuts = 0;
    teamOneOutsLabel.textContent = teamOneOuts;
}

    //Team Two Outs Functions
    twoOutUp.onclick = function() {
        teamTwoOuts++
        teamTwoOutsLabel.textContent = teamTwoOuts;
        checkOuts();
    }
    
    twoOutDwn.onclick = function() {
        teamTwoOuts--
        teamTwoOutsLabel.textContent = teamTwoOuts;
    }
    
    twoOutRst.onclick = function() {
        teamTwoOuts = 0;
        teamTwoOutsLabel.textContent = teamTwoOuts;
    }
    
    //Outs auto Inning Increment Function
    function checkOuts() {
if (teamOneOuts === 3 && teamTwoOuts === 3) {
    inningCounter++
    inningCount.textContent = inningCounter;
    teamOneOuts = 0;
    teamTwoOuts = 0;
    teamOneOutsLabel.textContent = teamOneOuts;
    teamTwoOutsLabel.textContent = teamTwoOuts;
}
    }

