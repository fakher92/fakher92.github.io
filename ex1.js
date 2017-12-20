let board = [
			[null,null,null],
			[null,null,null],
			[null,null,null]
];

let spaces = document.getElementsByClassName('space');
let player1 = false;
let tie = false;
let win = false;

for(space of spaces) {
	space.addEventListener('click', (e) => {
		// console.log (e.currentTarget.id)
		 player1 = !player1;
		 console.log(player1);

		 let id_string = e.currentTarget.id;
		 let y = id_string[0];
		 let x = id_string[1];
		 // console.log(`[${y}][${x}]`);
		  board[y][x] = player1 ? 'x' : 'o' ;
		 // console.log(board);
		 e.currentTarget.innerHTML = board[y][x];
		 //==========//
				 for (let i=0;i<board.length; i++) {
			// Check vertical wins
			if (board[0][i] != null) {
				if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
					win = true
				}
			} 
			// Check horizontal win
			if (board[i][0] != null) {
				if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
					win = true
				}
			}
			// Check Diagonal Win
			if (i === 0 || i === 2) {
				if (board[0][i] != null) {
					// Downward diagonal
					if (i === 0 && board[0][0] === board[1][1] && board[1][1] === board[2][2] ) {
						win = true
					}

					// Upward diagonal
					else if (i === 2 && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
						win = true
					}
				}
			}
		}
		if (win) {
		 	alert (player1 ? 'p1 win' : 'p2 win');
		}
	}, false)
}