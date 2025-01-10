let players = [];
let nextId = 1;

// Add Player
function addPlayer() {
    const playerName = document.getElementById('playerName').value.trim();
    const jerseyNumber = parseInt(document.getElementById('jerseyNumber').value);
    const playerPosition = document.getElementById('playerPosition').value;

    if (!playerName || isNaN(jerseyNumber)) {
        alert("Please enter valid player information.");
        return;
    }

    players.push({
        id: nextId++,
        name: playerName,
        jersey: jerseyNumber,
        position: playerPosition,
        gamesPlayed: 0,
        runs: 0,
        hits: 0
    });

    document.getElementById('playerName').value = '';
    document.getElementById('jerseyNumber').value = '';
    renderPlayers();
}

// Update Runs or Hits
function updateStat(id, stat, value) {
    const player = players.find(p => p.id === id);
    if (player) {
        player[stat] += value;
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
            <td>${player.jersey}</td>
            <td>${player.position}</td>
            <td>${player.gamesPlayed}</td>
            <td>${player.runs}</td>
            <td>${player.hits}</td>
            <td class="actions">
                <button onclick="updateStat(${player.id}, 'runs', 1)">+ Run</button>
                <button onclick="updateStat(${player.id}, 'hits', 1)">+ Hit</button>
                <button onclick="updateStat(${player.id}, 'gamesPlayed', 1)">+ +1 Game</button>
                <button onclick="removePlayer(${player.id})">Remove</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}
