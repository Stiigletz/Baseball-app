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

    // Append the button to the list item and the list item to the UL
    rosterItem.appendChild(removeButton);
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

    //Append button to the list item and the list item to the UL
    rosterItemTwo.appendChild(removeButtonTwo);
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

// Event listener for the add button
addButton.addEventListener("click", addToRoster);
addButtonTwo.addEventListener("click", addToRosterTwo);

// Initialize roster on page load
initializeRoster();
initializeRosterTwo();

//Nice little clock here

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
