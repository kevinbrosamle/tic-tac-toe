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
  // create board of N sizes
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
    for (var j = 0; j < board.length; j++) {
      if (board[j][i] !== player) {
        gameWon = false;
      }
    }
    if (gameWon) {
      return true;
    }
  }

  // check horizontal
  var j = 0;
  var gameWon = true;
  for (var i = 0; i < board.length; i++) {
    console.log(i, j);
    if (board[i][j] !== player) {
      gameWon = false;
    }
    j++;
  }
  if (gameWon) {
    return true;
  }
}

var game = function() {
  var gameWon = false
  var player1 = 'X';
  var player2 = 'O';
  var currentPlayer = 'X';

  while (gameWon === false) {
    // move piece to input coordinates
    console.log('Input coordinates of next move')

    // check if current player wins
    if (checkWon(board, currentPlayer)) {
      console.log(currentPlayer + 'Wins')
    };
    // switch player
    if (currentPlayer === 'O') {
      currentPlayer = 'X';
    } else {
      currentPlayer = 'O';
    }
    gameWon = true;
  }
}

// start game
game();
