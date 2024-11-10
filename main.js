'use strict'
const rowName='ABCDEFGH';  
const board = document.getElementById('board');

window.addEventListener('load', () => {
    renderTable();
});

function renderTable() {
	let tabla='';
	for (let i=8; i>0; i--) {
		tabla+=`<tr><th>${i}</th>`;
		for (let j=0; j<8; j++) {
			tabla+=`
				<td id="${rowName.charAt(j)+i}" class="${((i+j)%2)?'black':'white'}"></td>`;
		}
		tabla+='</tr><tr><th></th>';
	}
	for (let i=0;i<8;i++) {
		tabla+=`<th>${rowName.charAt(i)}</th>`;
	}
	tabla+='</tr>';
	
	board.innerHTML=tabla;
}