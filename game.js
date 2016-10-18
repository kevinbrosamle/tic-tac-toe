var boardDisplay =
  '[ ][ ][ ]\n' +
  '[ ][ ][ ]\n' +
  '[ ][ ][ ]\n';

var boardInfo = [

]

var createBoard = function() {

}

var checkWon = function(board) {
  for (var i = 0; i < board.length; i++) {

  }
}

var game = function() {
  var gameWon = false
  var player1 = 'X';
  var player2 = 'O';
  var currentPlayer = 'X';
  console.log(board);

  while (gameWon === false) {
    console.log(board);

    console.log('Input coordinates of next move')
    // move piece to input coordinates
    // check if current player wins
    // switch player
    if (currentPlayer === 'O') {
      currentPlayer = 'X';
    } else {
      currentPlayer = 'O';
    }
  }

}

game();