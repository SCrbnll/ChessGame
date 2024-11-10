import { renderTable, renderFigures } from './js/board.js';
import { addDragAndDropListeners } from './js/dragAndDrop.js';

let playerColor = '';
let aiColor = '';
let playerName = '';

document.addEventListener("DOMContentLoaded", function () {
	const startButton = document.getElementById("start-game");
	const playerNameInput = document.getElementById("player-name");
	const colorSelection = document.getElementsByName("color");

	document.getElementById("game-screen").classList.add("hidden");
	document.getElementById("welcome-screen").classList.remove("hidden");

	startButton.addEventListener("click", function () {
		playerName = playerNameInput.value.trim();
		playerColor = Array.from(colorSelection).find(radio => radio.checked)?.value;
		aiColor = playerColor === 'white' ? 'black' : 'white';

		if (playerName && playerColor) {
			document.getElementById("welcome-screen").classList.add("hidden");
			document.getElementById("game-screen").classList.remove("hidden");

			renderTable();
			renderFigures(playerColor, aiColor); 
			addDragAndDropListeners(); 
		} else {
			alert("Por favor, ingresa un nombre y selecciona un color.");
		}
	});
});
