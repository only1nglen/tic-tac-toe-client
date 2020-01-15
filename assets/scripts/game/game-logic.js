'use strict'
const gameAction = require('./events.js')

const gameBoard = [' ',' ',' ',' ',' ',' ',' ',' ', ' ']

const checkWinner =  function (movesMade) {
  if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
    $('.message').text(`Player ${gameAction.currentPlayer} has won1!`)
    $('.box').off('click')
  } else if
    (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
    $('.message').text(`Player ${gameAction.currentPlayer} has won2!`)
    $('.box').off('click')
  } else if
    (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
    $('.message').text(`Player ${gameAction.currentPlayer} has won!3`)
    $('.box').off('click')
  } else if
    (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
    $('.message').text(`Player ${gameAction.currentPlayer} has won!4`)
    $('.box').off('click')
  } else if
    (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
    $('.message').text(`Player ${gameAction.currentPlayer} has won!5`)
    $('.box').off('click')
  }  else if
    (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
    $('.message').text(`Player ${gameAction.currentPlayer} has won!6`)
    $('.box').off('click')
  } else if
    (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
    $('.message').text(`Player ${gameAction.currentPlayer} has won7!`)
    $('.box').off('click')
  } else if
    (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
    $('.message').text(`Player ${gameAction.currentPlayer} has won8!`)
    $('.box').off('click')
  } else if (movesMade >= 9) {
  $('.message').text('Game is a Draw')
  $('.box').off('click')
  } else {
    $('.message').text("You've made a move!")
  }
}

const collectMove = function () {
  const boxPicked0 = document.getElementById("box0").innerHTML
  const boxPicked1 = document.getElementById("box1").innerHTML
  const boxPicked2 = document.getElementById("box2").innerHTML
  const boxPicked3 = document.getElementById("box3").innerHTML
  const boxPicked4 = document.getElementById("box4").innerHTML
  const boxPicked5 = document.getElementById("box5").innerHTML
  const boxPicked6 = document.getElementById("box6").innerHTML
  const boxPicked7 = document.getElementById("box7").innerHTML
  const boxPicked8 = document.getElementById("box8").innerHTML
  gameBoard.splice( 0, 1, boxPicked0)
  gameBoard.splice( 1, 1, boxPicked1)
  gameBoard.splice( 2, 1, boxPicked2)
  gameBoard.splice( 3, 1, boxPicked3)
  gameBoard.splice( 4, 1, boxPicked4)
  gameBoard.splice( 5, 1, boxPicked5)
  gameBoard.splice( 6, 1, boxPicked6)
  gameBoard.splice( 7, 1, boxPicked7)
  gameBoard.splice( 8, 1, boxPicked8)
}

const addLogic = function () {

}

module.exports = {
  // addLogic,
  collectMove,
  checkWinner,
  gameBoard
}
