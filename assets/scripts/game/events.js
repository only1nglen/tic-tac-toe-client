'use strict'
const gameCan = require('./game-logic.js')

let currentPlayer = 'X'
let movesMade = 0

const changeTurn = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
    $('.player').text(`Player ${currentPlayer}'s Turn`)
  } else {
    currentPlayer = 'X'
    $('.player').text(`Player ${currentPlayer}'s Turn`)
  }
}

const playMove = function (event) {
  event.preventDefault()
    if ($(event.target).text() === '') {
      $(event.target).text(currentPlayer)
      gameCan.collectMove()
      movesMade++
      gameCan.checkWinner(movesMade)
      changeTurn()
    } else {
      $('.message').text('Please choose another move!')
    }
    // console.log(gameCan.boxPicked8)
}

const addHandlers = function () {
  $('.box').on('click', playMove)
}

module.exports = {
  addHandlers,
  movesMade,
  currentPlayer
}
