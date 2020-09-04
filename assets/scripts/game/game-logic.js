'use strict'

const store = require('./../store')

const gameBoard = [' ',' ',' ',' ',' ',' ',' ',' ', ' ']

const declareWinner = () => {
  $('.message').text(`Player ${store.currentPlayer} has won!`)
  $('.player').text('Create a New Game')
  store.gameOver = true
}

const declareDraw = () => {
  $('.message').text('Game is a Draw')
  $('.player').text('Create a New Game')
  store.gameOver = true
}

const continueGame = () => {
  $('.message').text("You've made a move!")
  store.gameOver = false
}

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], 
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

  const checkWinner =  function () {
    winningCombos.forEach(combo => {
      if (gameBoard[combo[0]] !== '' && gameBoard[combo[0]] === gameBoard[combo[1]] && gameBoard[combo[0]] === gameBoard[combo[2]])
        declareWinner()
      })
      if (store.movesMade === 9 && store.gameOver === false ) {
        declareDraw()
      }
      else if (store.gameOver === false) {
        continueGame()
      }
    }

const clearBoard = function () {
  $('.box').text('')
}

const collectMove = function () {
  let boardState = []
  for (let i = 0; i < 9; i++) {
    const boxPicked = document.getElementById("box"+i).innerHTML
    boardState.push(boxPicked)
    gameBoard.splice(i, 1, boardState[i])
  }
}

module.exports = {
  collectMove,
  checkWinner,
  gameBoard,
  clearBoard
}
