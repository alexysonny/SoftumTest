/*
Tic-Tac-Toe, sometimes also known as Xs and Os, is a game for two players (X and O) who take turns marking the spaces in a 3X3 grid. The player who succeeds in placing three respective marks in a horizontal, vertical, or diagonal rows (NW-SE and NE-SW) wins the game.
But we will not be playing this game. You will be the referee for this games results. You are given a result of a game and you must determine if the game ends in a win or a draw as well as who will be the winner. Make sure to return "X" if the X-player wins and "O" if the O-player wins. If the game is a draw, return "D".
A game's result is presented as a list of strings, where "X" and "O" are players' marks and "." is the empty cell.
Input: A game result as a list of strings (unicode).
Output: "X", "O" or "D" as a string.
Precondition:
There is either one winner or a draw.
*/

function xoReferee(data) {
  var dataArray = [[], [], []];
  data.forEach((element, index) => {
    dataArray[index] = element.split("");
  });
  var gameResult = ".";
  for (var i = 0; i < 3; i++) {
    if (
      dataArray[i][0] == dataArray[i][1] &&
      dataArray[i][1] == dataArray[i][2]
    ) {
      gameResult = dataArray[i][0];
    } else if (
      dataArray[0][i] == dataArray[1][i] &&
      dataArray[1][i] == dataArray[2][i]
    ) {
      gameResult = dataArray[0][i];
    }
  }
  if (!gameResult) {
    if (
      dataArray[0][0] == dataArray[1][1] &&
      dataArray[1][1] == dataArray[2][2]
    ) {
      gameResult = dataArray[1][1];
    } else if (
      dataArray[0][2] == dataArray[1][1] &&
      dataArray[1][1] == dataArray[2][0]
    ) {
      gameResult = dataArray[1][1];
    }
  }

  if (gameResult == ".") {
      gameResult = "D"
  }

  return String(gameResult);
}
