'use strict'
const gameCan = require('./game-logic.js')
const store = require('./../store')

// let movesMade = 0

const changeTurn = function () {
  if (store.currentPlayer === 'X') {
    store.currentPlayer = 'O'
    $('.message').text(`Player X Turn`)
  } else {
    store.currentPlayer = 'X'
    $('.message').text(`Player O Turn`)
  }
}

const playMove = function (event) {
  event.preventDefault()
  if ($(event.target).text() === '') {
      changeTurn()
      $(event.target).text(store.currentPlayer)
      //pushes to api gameboard
      store.id = $(event.target).attr('data-cell-index')
      //pushes to javascript gamboard
      gameCan.collectMove()
      //increases the movesMade, created when game is started in UI.js
      store.movesMade++
      gameCan.checkWinner(store.movesMade)
      console.log(store.movesMade)
      // changeTurn()
      // console.log(store.game.id)
    } else {
      $('.message').text('Please choose another move!')
    }
}

// const isGameOver = function () {
//   if (store.gameOver === true) {
//     store.movesMade = 0
//   }
//   else {
//     playMove()
//   }
// }

const addHandlers = function () {
  $('.box').on('click', playMove)
}

module.exports = {
  addHandlers,
  // movesMade,
  playMove
  // isGameOver
}
