'use strict'

const gameBoard = []

// winning indexes
// [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]

// const checkWinner =  function () {
//   if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
//     $('message').text(`Player ${currentPlayer} has won!`)
//   } else if
//     (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
//     $('message').text(`Player ${currentPlayer} has won!`)
//   } else if
//     (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
//     $('message').text(`Player ${currentPlayer} has won!`)
//   } else if
//     (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
//     $('message').text(`Player ${currentPlayer} has won!`)
//   } else if
//     (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
//     $('message').text(`Player ${currentPlayer} has won!`)
//   }  else if
//     (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
//     $('message').text(`Player ${currentPlayer} has won!`)
//   } else if
//     (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
//     $('message').text(`Player ${currentPlayer} has won!`)
//   } else if
//     (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[8]) {
//     $('message').text(`Player ${currentPlayer} has won!`)
//   } else {
//     $('message').text('Game is a Draw')
//   }
// }

const getMove = function (event) {
    gameBoard.push($(event.target).text())
}

const addLogic = function () {
$('.box').one('click', getMove)
}

module.exports = {
  addLogic
}
