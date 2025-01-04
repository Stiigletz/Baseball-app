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
