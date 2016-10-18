var boardDisplay =
  '[ ][ ][ ]\n' +
  '[ ][ ][ ]\n' +
  '[ ][ ][ ]\n';

var board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

var createBoard = function() {

}

var checkWon = function(board, player) {
  // check horizontal
  for (var i = 0; i < board.length; i++) {
    var gameWon = true;
    for (var j = 0; j < board.length; j++) {
      if (board[i][j] !== player) {
        gameWon = false;
      }
    }
    if (gameWon) {
      return true;
    }
  }

  // check vertical
  for (var i = 0; i < board[0].length; i++) {
    var gameWon = true;
    for (var j = 1; j < board.length; j++) {
      if (board[i][j] !== player) {
        gameWon = false;
      }
    }
    if (gameWon) {
      return true;
    }
  }

  // check horizontal
}

var game = function() {
  var gameWon = false
  var player1 = 'X';
  var player2 = 'O';
  var currentPlayer = 'X';

  while (gameWon === false) {
    console.log(board);

    console.log('Input coordinates of next move')
    // move piece to input coordinates
    // check if current player wins
    checkWon(board, currentPlayer);
    // switch player
    if (currentPlayer === 'O') {
      currentPlayer = 'X';
    } else {
      currentPlayer = 'O';
    }
    gameWon = true;
  }

}

game();