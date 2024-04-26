const rows = 3;
const columns = 3;
const board = [];

for (let i = 0; i < rows; i++) {
    board.push([]);
    for (let j = 0; j < columns; j++) {
        board[i].push(Cell());
        
    }
}

// board[0][0] = "O";

// board[1][0] = "X";

// board[2][0] = "O";
// board[2][1] = "O";
// board[2][2] = "O";

// for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//         // console.log(board[i][j]);

//         if (board[i][j] === "") {
            
//         }
//     }
    
// }

function Cell() {
        let value = 0;
  
    // Accept a player's token to change the value of the cell
    const addToken = (player) => {
        value = player;
    };
  
    // How we will retrieve the current value of this cell through closure
    const getValue = () => value;
  
    return {
        addToken,
        getValue
    };
}

const cell1 = Cell();
const cell2 = Cell();

console.log(board);
