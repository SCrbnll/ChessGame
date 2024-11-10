const rowName = 'ABCDEFGH';
const board = document.getElementById("board");

export function renderTable() {
	let tabla = '';
	for (let i = 8; i > 0; i--) {
		tabla += `<tr><th>${i}</th>`;
		for (let j = 0; j < 8; j++) {
			tabla += `<td id="${rowName.charAt(j)}${i}" class="${(i + j) % 2 === 0 ? 'white' : 'black'}"></td>`;
		}
		tabla += '</tr>';
	}
	tabla += '<tr>';
	for (let i = 0; i < 8; i++) {
		tabla += `<th>${rowName.charAt(i)}</th>`;
	}
	tabla += '</tr>';

	board.innerHTML = tabla;
}

export function renderFigures(playerColor, aiColor) {
	const piecesRow1 = [
		"rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"
	];
	const piecesRow2 = Array(8).fill("pawn");
	const piecesRow7 = Array(8).fill("pawn");
	const piecesRow8 = [
		"rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"
	];

	const playerPieces = playerColor === 'white' ? piecesRow1 : piecesRow8;
	const aiPieces = aiColor === 'white' ? piecesRow1 : piecesRow8;

	for (let i = 0; i < 8; i++) {
		createPiece(playerColor, playerPieces, i, 1);  // Fila 1 del jugador
		createPiece(playerColor, piecesRow2, i, 2);  // Peones del jugador
		createPiece(aiColor, aiPieces, i, 8);        // Fila 8 de la IA
		createPiece(aiColor, piecesRow7, i, 7);      // Peones de la IA
	}
}

function createPiece(color, pieces, index, row) {
	const piece = document.createElement("img");
	piece.src = `assets/${color}/${pieces[index]}.png`;
	piece.classList.add("draggable");

	const pieceId = `${rowName.charAt(index)}${row}-${color}-${pieces[index]}`;
	piece.id = pieceId; 

	document.getElementById(rowName.charAt(index) + row).appendChild(piece);
}
