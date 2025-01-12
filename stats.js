let players = JSON.parse(localStorage.getItem('players')) || [];
let nextId = players.length ? Math.max(...players.map(p => p.id)) + 1 : 1;

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

    saveToLocalStorage();
    document.getElementById('playerName').value = '';
    document.getElementById('jerseyNumber').value = '';
    renderPlayers();
}

// Update Stats
function updateStat(id, stat, value) {
    const player = players.find(p => p.id === id);
    if (player) {
        player[stat] += value;
        saveToLocalStorage();
        renderPlayers();
    }
}

// Remove Player
function removePlayer(id) {
    players = players.filter(p => p.id !== id);
    saveToLocalStorage();
    renderPlayers();
}

// Save to Local Storage
function saveToLocalStorage() {
    localStorage.setItem('players', JSON.stringify(players));
}

// Export to CSV
function exportToCSV() {
    const headers = ['ID', 'Name', 'Jersey', 'Position', 'Games Played', 'Runs', 'Hits'];
    const rows = players.map(player =>
        [player.id, player.name, player.jersey, player.position, player.gamesPlayed, player.runs, player.hits]
    );

    const csvContent = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'baseball_stats.csv';
    link.click();
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
                <button onclick="updateStat(${player.id}, 'gamesPlayed', 1)">+1 Game</button>
                <button onclick="removePlayer(${player.id})">Remove</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Init the Table here. Bc its a nice table. holds a couple eggs
renderPlayers();
