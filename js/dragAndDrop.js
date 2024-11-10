export function addDragAndDropListeners() {
    const pieces = document.querySelectorAll('.draggable');

    pieces.forEach(piece => {
        piece.setAttribute('draggable', true);

        piece.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', event.target.id);
            console.log("Pieza arrastrada:", event.target.id); 
        });

        piece.addEventListener('dragover', (event) => {
            event.preventDefault(); 
        });

        piece.addEventListener('drop', (event) => {
            event.preventDefault();

            const draggedPieceId = event.dataTransfer.getData('text/plain');
            const draggedPiece = document.getElementById(draggedPieceId); 

            if (!draggedPiece) {
                console.error("No se pudo encontrar la pieza arrastrada con id:", draggedPieceId);
                return;
            }

            const targetCell = event.target.closest('td'); 

            if (targetCell && targetCell !== draggedPiece.parentElement) {
                targetCell.appendChild(draggedPiece); 
                console.log(`Pieza movida a ${targetCell.id}`); 
            }
        });
    });

    const cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        cell.addEventListener('dragover', (event) => {
            event.preventDefault(); 
        });

        cell.addEventListener('drop', (event) => {
            event.preventDefault();

            const draggedPieceId = event.dataTransfer.getData('text/plain');
            const draggedPiece = document.getElementById(draggedPieceId); 

            if (!draggedPiece) {
                console.error("No se pudo encontrar la pieza arrastrada con id:", draggedPieceId);
                return;
            }

            const targetCell = event.target.closest('td'); 

            if (targetCell && targetCell !== draggedPiece.parentElement) {
                targetCell.appendChild(draggedPiece); 
                console.log(`Pieza movida a ${targetCell.id}`); 
            }
        });
    });
}
