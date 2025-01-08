// Team One Variables
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const clearBtn = document.getElementById("clear");
const savenameOne = document.getElementById("savenameOne");
let teamOne = document.getElementById("teamOne");
let count = 0;

// Team Two Variables
const increaseBtnTwo = document.getElementById("increaseTwo");
const decreaseBtnTwo = document.getElementById("decreaseTwo");
const clearBtnTwo = document.getElementById("clearTwo");
const savenameTwo = document.getElementById("savenameTwo");
let teamTwo = document.getElementById("teamTwo");
let countTwo = 0;

// Inning Counter Variables
const inningUp = document.getElementById("inningCntUp");
const inningDwn = document.getElementById("inningCntDwn");
const inningReset = document.getElementById("inningRst");
let inningCounter = 1;

// Inning Timer Variables with 3 out func
// Team One Variables
const oneOutUp = document.getElementById("oneOutUp");
const oneOutDwn = document.getElementById("oneOutDwn");
const oneOutReset = document.getElementById("oneOutRst");
let teamOneOuts = 0;

// Team Two Variables
const twoOutUp = document.getElementById("twoOutUp");
const twoOutDwn = document.getElementById("twoOutDwn");
const twoOutReset = document.getElementById("twoOutRst");
let teamTwoOuts = 0;

let inningTimer = '0:00';

// Save the state to local storage
function saveState() {
    localStorage.setItem("teamOneCount", count);
    localStorage.setItem("teamTwoCount", countTwo);
    localStorage.setItem("teamOneName", document.querySelector("h1").textContent);
    localStorage.setItem("teamTwoName", document.querySelector("h2").textContent);
    localStorage.setItem("inningCounter", inningCounter);
    localStorage.setItem("teamOneOuts", teamOneOuts);
    localStorage.setItem("teamTwoOuts", teamTwoOuts);
}

// Load the state from local storage
function loadState() {
    if (localStorage.getItem("teamOneCount") !== null) {
        count = parseInt(localStorage.getItem("teamOneCount"), 10);
        countLabel.textContent = count;
    }
    if (localStorage.getItem("teamTwoCount") !== null) {
        countTwo = parseInt(localStorage.getItem("teamTwoCount"), 10);
        countLabelTwo.textContent = countTwo;
    }
    if (localStorage.getItem("teamOneName") !== null) {
        document.querySelector("h1").textContent = localStorage.getItem("teamOneName");
    }
    if (localStorage.getItem("teamTwoName") !== null) {
        document.querySelector("h2").textContent = localStorage.getItem("teamTwoName");
    }
    if (localStorage.getItem("inningCounter") !== null) {
        inningCounter = parseInt(localStorage.getItem("inningCounter"), 10);
        inningCount.textContent = inningCounter;
    }
    if (localStorage.getItem("teamOneOuts") !== null) {
        teamOneOuts = parseInt(localStorage.getItem("teamOneOuts"), 10);
        teamOneOutsLabel.textContent = teamOneOuts;
    }
    if (localStorage.getItem("teamTwoOuts") !== null) {
        teamTwoOuts = parseInt(localStorage.getItem("teamTwoOuts"), 10);
        teamTwoOutsLabel.textContent = teamTwoOuts;
    }
}

// Clear the state from local storage
function clearState() {
    localStorage.clear();
}

// Call the loadState function on page load
window.onload = function () {
    loadState();
};

// Team One Functions
increaseBtn.onclick = function () {
    count++;
    countLabel.textContent = count;
    saveState();
};

decreaseBtn.onclick = function () {
    count--;
    countLabel.textContent = count;
    saveState();
};

clearBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
    saveState();
};

savenameOne.onclick = function () {
    const userInput = document.getElementById("oneInput").value;
    document.querySelector("h1").textContent = userInput;
    saveState();
};

// Team Two Functions
increaseBtnTwo.onclick = function () {
    countTwo++;
    countLabelTwo.textContent = countTwo;
    saveState();
};

decreaseBtnTwo.onclick = function () {
    countTwo--;
    countLabelTwo.textContent = countTwo;
    saveState();
};

clearBtnTwo.onclick = function () {
    countTwo = 0;
    countLabelTwo.textContent = countTwo;
    saveState();
};

savenameTwo.onclick = function () {
    const userInput = document.getElementById("twoInput").value;
    document.querySelector("h2").textContent = userInput;
    saveState();
};

// Inning Counter Functions
inningUp.onclick = function () {
    inningCounter++;
    inningCount.textContent = inningCounter;
    saveState();
};

inningDwn.onclick = function () {
    inningCounter--;
    inningCount.textContent = inningCounter;
    saveState();
};

inningReset.onclick = function () {
    inningCounter = 0;
    inningCount.textContent = inningCounter;
    saveState();
};

// Inning Timer with 3 Outs If statement stored in checkOuts Func
// Team One Outs Functions
oneOutUp.onclick = function () {
    teamOneOuts++;
    teamOneOutsLabel.textContent = teamOneOuts;
    checkOuts();
    saveState();
};

oneOutDwn.onclick = function () {
    teamOneOuts--;
    teamOneOutsLabel.textContent = teamOneOuts;
    saveState();
};

oneOutRst.onclick = function () {
    teamOneOuts = 0;
    teamOneOutsLabel.textContent = teamOneOuts;
    saveState();
};

// Team Two Outs Functions
twoOutUp.onclick = function () {
    teamTwoOuts++;
    teamTwoOutsLabel.textContent = teamTwoOuts;
    checkOuts();
    saveState();
};

twoOutDwn.onclick = function () {
    teamTwoOuts--;
    teamTwoOutsLabel.textContent = teamTwoOuts;
    saveState();
};

twoOutRst.onclick = function () {
    teamTwoOuts = 0;
    teamTwoOutsLabel.textContent = teamTwoOuts;
    saveState();
};

// Outs auto Inning Increment Function
function checkOuts() {
    if (teamOneOuts === 3 && teamTwoOuts === 3) {
        inningCounter++;
        inningCount.textContent = inningCounter;
        teamOneOuts = 0;
        teamTwoOuts = 0;
        teamOneOutsLabel.textContent = teamOneOuts;
        teamTwoOutsLabel.textContent = teamTwoOuts;
        saveState();
    }
}


//Nice little clock here

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1500);
