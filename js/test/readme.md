example of tic-tac-toe board

[ 'O', '' , ''  ] 
[ 'X', '' , ''  ] 
[ 'O', '' , 'O' ]

row with col 1 = empty cel at row 0 col 1
                           at row 1 col 1
                           at row 2 col 1
<!-- using if else -->
if row = 0
    availableCells.length - 3

if row = 1
    availableCells.length - 2

if row = 2
    availableCells.length - 1

<!-- using switch case -->
switch(row)
    case:0
    availableCells.length - 3
    case:1
    availableCells.length - 2
    case:2
    availableCells.length - 1
    default
    return

const selectedRow = availableCells.length - row;
board[selectedRow][column].addMarker(player);