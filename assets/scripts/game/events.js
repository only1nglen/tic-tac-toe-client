'use strict'
const gameThink = require('./game-logic')

let currentPlayer = 'X'

const changeTurn = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
    $('.player').text(`Player ${currentPlayer}'s Turn`)
  } else {
    currentPlayer = 'X'
    $('.player').text(`Player ${currentPlayer}'s Turn`)
  } return currentPlayer
}

const pickAnother = function () {
// if ($('.box') === 'X' || 'O') {
   $('.message').text('Please choose another move!')
 // }
}

const playMove = function (event) {
  event.preventDefault()
  $(event.target).text(currentPlayer)
  $('.message').text("You've made a move!")
  $(event.target).on('click', pickAnother)
  changeTurn()
  gameThink.collectMove()
  gameThink.checkWinner()
}


const addHandlers = function () {
  $('.box').one('click', playMove)
}

module.exports = {
  addHandlers
}
