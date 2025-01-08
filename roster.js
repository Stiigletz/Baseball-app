const teamOneRosterList = document.getElementById("tOnePlayer"); // UL for the roster
const userInput = document.getElementById("teamOneRosterInput"); // Input field
const addButton = document.getElementById("addPlayerButton"); // Button to add player
const rosterArray = JSON.parse(localStorage.getItem("rosterArray")) || []; // Load roster from localStorage or initialize as empty

// Function to initialize the roster from localStorage
function initializeRoster() {
    rosterArray.forEach(playerName => updateRosterUI(playerName));
}

// Function to save the roster to localStorage
function saveToLocalStorage() {
    localStorage.setItem("rosterArray", JSON.stringify(rosterArray));
}

// Function to add a player to the roster
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

// Function to remove a player from the roster
function removeFromRoster(playerName, rosterItem) {
    const index = rosterArray.indexOf(playerName);
    if (index > -1) {
        rosterArray.splice(index, 1);
        saveToLocalStorage(); // Save updated roster to localStorage
    }
    rosterItem.remove();
}

// Event listener for the add button
addButton.addEventListener("click", addToRoster);

// Initialize roster on page load
initializeRoster();

//Nice little clock here

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
