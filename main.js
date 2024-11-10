const rowName = 'ABCDEFGH';
const board = document.getElementById("board");
let playerName = '';
let playerColor = '';
let aiColor = '';
let playerTime = '';
let aiTime = '';

const welcomeScreen = document.getElementById("welcome-screen");
const gameScreen = document.getElementById("game-screen");

const restartButton = document.getElementById('btnRestart');
const newButton = document.getElementById('btnNew');

document.addEventListener("DOMContentLoaded", function () {
	const startButton = document.getElementById("start-game");
	const playerNameInput = document.getElementById("player-name");
	const colorSelection = document.getElementsByName("color");
	const playerPawnImage = document.getElementById("player-pawn"); 
    const aiPawnImage = document.getElementById("ai-pawn"); 

	gameScreen.classList.add("hidden");
	welcomeScreen.classList.remove("hidden");

	setupButtons();

	startButton.addEventListener("click", function () {
		playerName = playerNameInput.value.trim();
		playerColor = Array.from(colorSelection).find(radio => radio.checked)?.value;

		if (playerName && playerColor) {
			aiColor = playerColor === 'white' ? 'black' : 'white';
			welcomeScreen.classList.add("hidden");
			gameScreen.classList.remove("hidden");
			document.getElementById("player-name-heading").textContent = playerName;

			if (playerColor === 'white') {
                playerPawnImage.src = 'assets/white/pawn.png';
                aiPawnImage.src = 'assets/black/pawn.png';
            } else {
                playerPawnImage.src = 'assets/black/pawn.png';
                aiPawnImage.src = 'assets/white/pawn.png';
            }

			clearForm(playerNameInput, colorSelection);

			renderTable();
			renderFigures();
		} else {
			alert("Por favor, ingresa un nombre y selecciona un color.");
		}
	});
});

function clearForm(playerNameInput, colorSelection) {
	playerNameInput.value = '';
	Array.from(colorSelection).forEach(radio => radio.checked = false);
}

function setupButtons() {
	restartButton.addEventListener('click', function () {
		restartGame();  
	});

	newButton.addEventListener('click', function () {
		newGame();  
	});
}

function renderTable() {
	let tabla = '';
	for (let i = 8; i > 0; i--) {
		tabla += `<tr><th>${i}</th>`;
		for (let j = 0; j < 8; j++) {
			tabla += `
					<td id="${rowName.charAt(j) + i}" class="${((i + j) % 2) ? 'black' : 'white'}"></td>`;
		}
		tabla += '</tr><tr><th></th>';
	}
	for (let i = 0; i < 8; i++) {
		tabla += `<th>${rowName.charAt(i)}</th>`;
	}
	tabla += '</tr>';

	board.innerHTML = tabla;
}

function renderFigures() {
	const whitePieces = [
		"rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"
	];
	const blackPieces = [
		"rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"
	];

	let piecesRow1, piecesRow8;
	if (playerColor === "white") {
		piecesRow1 = whitePieces;
		piecesRow8 = blackPieces;
		piecesRow2 = Array(8).fill("pawn");
		piecesRow7 = Array(8).fill("pawn");
	} else {
		piecesRow1 = blackPieces;
		piecesRow8 = whitePieces;
		piecesRow2 = Array(8).fill("pawn");
		piecesRow7 = Array(8).fill("pawn");
	}

	for (let i = 0; i < 8; i++) {
		let playerPawn = document.createElement("img");
		playerPawn.src = `assets/${playerColor}/pawn.png`;
		playerPawn.classList.add("draggable");
		document.getElementById(rowName.charAt(i) + "2").appendChild(playerPawn);

		let piece = document.createElement("img");
		piece.src = `assets/${playerColor}/${piecesRow1[i]}.png`;
		piece.classList.add("draggable");
		document.getElementById(rowName.charAt(i) + "1").appendChild(piece);

		let aiPawn = document.createElement("img");
		aiPawn.src = `assets/${aiColor}/pawn.png`;
		aiPawn.classList.add("draggable");
		document.getElementById(rowName.charAt(i) + "7").appendChild(aiPawn);

		let aiPiece = document.createElement("img");
		aiPiece.src = `assets/${aiColor}/${piecesRow8[i]}.png`;
		aiPiece.classList.add("draggable");
		document.getElementById(rowName.charAt(i) + "8").appendChild(aiPiece);
	}
}

function restartGame() {
	playerTime = '';
	aiTime = '';
    renderTable();
    renderFigures();
}

function newGame() {
    playerName = '';
    playerColor = '';
    aiColor = '';
	gameScreen.classList.add("hidden");
	welcomeScreen.classList.remove("hidden");
}
