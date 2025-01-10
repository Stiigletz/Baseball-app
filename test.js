let players = [];
let nextId = 1;

// Add Player
function addPlayer() {
    const playerName = document.getElementById('playerName').value.trim();
    if (!playerName) {
        alert("Please enter a valid name.");
        return;
    }
    players.push({ id: nextId++, name: playerName, score: 0, level: 1 });
    document.getElementById('playerName').value = '';
    renderPlayers();
}

// Update Score
function updateScore(id, points) {
    const player = players.find(p => p.id === id);
    if (player) {
        player.score += points;
        renderPlayers();
    }
}

// Level Up
function levelUp(id) {
    const player = players.find(p => p.id === id);
    if (player) {
        player.level += 1;
        renderPlayers();
    }
}

// Remove Player
function removePlayer(id) {
    players = players.filter(p => p.id !== id);
    renderPlayers();
}

// Render Players Table
function renderPlayers() {
    const tbody = document.querySelector('#playerTable tbody');
    tbody.innerHTML = ''; // Clear existing rows

    players.forEach(player => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${player.id}</td>
            <td>${player.name}</td>
            <td>${player.score}</td>
            <td>${player.level}</td>
            <td class="actions">
                <button onclick="updateScore(${player.id}, 10)">+10</button>
                <button onclick="levelUp(${player.id})">Level Up</button>
                <button onclick="removePlayer(${player.id})">Remove</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}
