const rows = 3;
const columns = 3;
const board = [];

for (let i = 0; i < rows; i++) {
    board.push([]);
    for (let j = 0; j < columns; j++) {
        board[i].push("");
        
    }
}

const availableRowCells = board.filter((row) => row[1] === "").map((row) => row[1]);

console.log(board);
console.log(availableRowCells);