import { renderTable, renderFigures } from './js/board.js';
import { addDragAndDropListeners } from './js/dragAndDrop.js';

let playerColor = '';
let aiColor = '';
let playerName = '';

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

    document.getElementById("game-screen").classList.add("hidden");
    document.getElementById("welcome-screen").classList.remove("hidden");

    startButton.addEventListener("click", function () {
        playerName = playerNameInput.value.trim();
        playerColor = Array.from(colorSelection).find(radio => radio.checked)?.value;
        aiColor = playerColor === 'white' ? 'black' : 'white';
        
        if (playerName && playerColor) {
            setupButtons();
            renderTable();
            renderFigures(playerColor, aiColor);
            addDragAndDropListeners(playerColor);

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
            } else {
                alert("Por favor, ingresa un nombre y selecciona un color.");
            }
        };
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

function restartGame() {
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
