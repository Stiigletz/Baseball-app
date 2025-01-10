const teamOneRosterList = document.getElementById("tOnePlayer"); // UL for the roster
const userInput = document.getElementById("teamOneRosterInput"); // Input field
const addButton = document.getElementById("addPlayerButton"); // Button to add player
const rosterArray = JSON.parse(localStorage.getItem("rosterArray")) || []; // Load roster from localStorage or init as an empty array

//Team Two Roster Variables
const teamTwoRosterList = document.getElementById("tTwoPlayer"); //UL for team two roster
const userInputTwo = document.getElementById("teamTwoRosterInput"); //Input field for Team Two
const addButtonTwo = document.getElementById("addPlayerButtonTwo"); //Button for adding Team Two Roster Player
const rosterTwoArray = JSON.parse(localStorage.getItem("rosterTwoArray")) || []; // Load Roster Two from local storage or init as an empty array

// Function to initialize the team rosters from localStorage
function initializeRoster() {
    rosterArray.forEach(playerName => updateRosterUI(playerName));
}

function initializeRosterTwo() {
    rosterTwoArray.forEach(playerNameTwo => updateRosterUITwo(playerNameTwo));
}

// Function to save the roster to localStorage
function saveToLocalStorage() {
    localStorage.setItem("rosterArray", JSON.stringify(rosterArray));
    localStorage.setItem("rosterTwoArray", JSON.stringify(rosterTwoArray));

}


//Function to update Team Names
function teamOneNameUpdate() {
    const storedInput = localStorage.getItem("teamOneName");

    document.getElementById("teamOne").textContent = storedInput;

}

function teamTwoNameUpdate() {
    const storedInput = localStorage.getItem("teamTwoName");

    document.getElementById("teamTwo").textContent = storedInput;
}

window.onload = teamOneNameUpdate;
window.onload = teamTwoNameUpdate;


// Function to add a player to the Team One roster
function addToRoster() {
    const playerName = userInput.value.trim(); // Get and trim user input

    if (playerName === "") {
        alert("Player name cannot be empty!");
        return;
    }

    if (!rosterArray.includes(playerName)) {
        rosterArray.push(playerName);
        updateRosterUI(playerName);
        saveToLocalStorage(); // Save updated roster to localStorage
        userInput.value = ""; // Clear input field
    } else {
        alert("Player is already on the roster!");
    }
}

// Function to add a player to the Team Two Roster
function addToRosterTwo() {
    const playerNameTwo = userInputTwo.value.trim(); // Get and trim user input two

    if (playerNameTwo === "") {
        alert("Player name cannot be empty!");
        return;
    }

    if (!rosterTwoArray.includes(playerNameTwo)) {
        rosterTwoArray.push(playerNameTwo);
        updateRosterUITwo(playerNameTwo);
        saveToLocalStorage(); //Saving updated roster to local storage here
        userInputTwo.value = ""; //Clear input field here
    } else {
        alert("Player is already on the roster!")
    }
}

// Function to update the roster UI with a new player
function updateRosterUI(playerName) {
    const rosterItem = document.createElement("li");
    rosterItem.textContent = playerName;

    // Create a "Remove" button for each player
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.style.marginLeft = "10px";
    removeButton.addEventListener("click", () => removeFromRoster(playerName, rosterItem));

    // Modify Button Roster 1
    const modifyButton = document.createElement("button");
    modifyButton.textContent = "Edit Player";
    modifyButton.style.marginLeft = "5px";
    modifyButton.addEventListener("click", () => modifyFromRosterOne(playerName, rosterItem));

    // Append the button to the list item and the list item to the UL
    rosterItem.appendChild(removeButton);
    rosterItem.appendChild(modifyButton);
    teamOneRosterList.appendChild(rosterItem);
}

function updateRosterUITwo(playerNameTwo) {
    const rosterItemTwo = document.createElement("li");
    rosterItemTwo.textContent = playerNameTwo;

    //Roster Two create 'remove' button for each player
    const removeButtonTwo = document.createElement("button");
    removeButtonTwo.textContent = "Remove";
    removeButtonTwo.style.marginLeft = "10px";
    removeButtonTwo.addEventListener("click", () => removeFromRosterTwo(playerNameTwo, rosterItemTwo));

    //modify button roster 2

    const modifyButtonTwo = document.createElement("button");
    modifyButtonTwo.textContent = "Edit Player";
    modifyButtonTwo.style.marginLeft = "5px";
    modifyButtonTwo.addEventListener("click", () => modifyFromRosterTwo(playerNameTwo, rosterItemTwo));

    //Append button to the list item and the list item to the UL
    rosterItemTwo.appendChild(removeButtonTwo);
    rosterItemTwo.appendChild(modifyButtonTwo);
    teamTwoRosterList.appendChild(rosterItemTwo);
}

// Function to remove a player from the rosters
function removeFromRoster(playerName, rosterItem) {
    const index = rosterArray.indexOf(playerName);
    if (index > -1) {
        rosterArray.splice(index, 1);
        saveToLocalStorage(); // Save updated roster to localStorage
    }
    rosterItem.remove();
}

function removeFromRosterTwo(playerNameTwo, rosterItemTwo) {
    const indexTwo = rosterTwoArray.indexOf(playerNameTwo);
    if (indexTwo > -1) {
        rosterTwoArray.splice(indexTwo, 1);
        saveToLocalStorage();
    }
    rosterItemTwo.remove();

}

//functions to modify arrays for team rosters
function modifyFromRosterOne(playerName, rosterItem) {
    const index = rosterArray.indexOf(playerName);
    if (index > -1) {
        const newPlayerName = prompt("Enter New Player Name:", playerName);

        if(newPlayerName && newPlayerName.trim() !== "") {
            rosterArray[index] = newPlayerName;
            saveToLocalStorage();


            //Clear HTML Content to prevent func error and appending button duplication
            rosterItem.innerHTML = "";
            rosterItem.textContent = newPlayerName; //Updating UI roster 1


            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.style.marginLeft = "10px";
            removeButton.addEventListener("click", () => removeFromRoster(newPlayerName, rosterItem));

            const modifyButton = document.createElement("button");
            modifyButton.textContent = "Edit Player";
            modifyButton.style.marginLeft = "5px";
            modifyButton.addEventListener("click", () => modifyFromRosterOne(newPlayerName, rosterItem));

            rosterItem.appendChild(removeButton);
            rosterItem.appendChild(modifyButton);
        }
    }
}





function modifyFromRosterTwo(playerNameTwo, rosterItemTwo) {
    const indexTwo = rosterTwoArray.indexOf(playerNameTwo);
    if (indexTwo > -1) {
        const newPlayerNameTwo = prompt("Enter New Player Name:", playerNameTwo);

        if(newPlayerNameTwo && newPlayerNameTwo.trim() !== "") {
            rosterTwoArray[indexTwo] = newPlayerNameTwo;
            saveToLocalStorage();


            rosterItemTwo.textContent = newPlayerNameTwo; //updating the UI here

            //CLear HTML Content to prevent function error by appending html button on top of old button, and update new player's name
            rosterItemTwo.innerHTML = ""; 
            rosterItemTwo.textContent = newPlayerNameTwo; 


            const removeButtonTwo = document.createElement("button");
            removeButtonTwo.textContent = "Remove";
            removeButtonTwo.style.marginLeft = "10px";
            removeButtonTwo.addEventListener("click", () => removeFromRosterTwo(newPlayerNameTwo, rosterItemTwo));

            const modifyButtonTwo = document.createElement("button");
            modifyButtonTwo.textContent = "Edit Player";
            modifyButtonTwo.style.marginLeft = "5px";
            modifyButtonTwo.addEventListener("click", () => modifyFromRosterTwo(newPlayerNameTwo, rosterItemTwo));

            rosterItemTwo.appendChild(removeButtonTwo);
            rosterItemTwo.appendChild(modifyButtonTwo);
        }
    }
}

// Event listener for the add button
addButton.addEventListener("click", addToRoster);
addButtonTwo.addEventListener("click", addToRosterTwo);

// Initialize roster on page load
initializeRoster();
initializeRosterTwo();
teamOneNameUpdate();
teamTwoNameUpdate();

//Nice little clock here

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
updateClock();
setInterval(updateClock, 1000);
window.onload = updateTeamNames;
