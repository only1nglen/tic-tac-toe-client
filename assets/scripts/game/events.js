'use strict'
const gameCan = require('./game-logic.js')
const store = require('./../store')

const changeTurn = function () {
  if (store.currentPlayer === 'X') {
    store.currentPlayer = 'O'
    $('.player').text(`Player X Turn`)
  } else {
    store.currentPlayer = 'X'
    $('.player').text(`Player O Turn`)
  }
}

const playMove = function (event) {
  event.preventDefault()
  if ($(event.target).text() === '') {
      changeTurn()
      $(event.target).text(store.currentPlayer)
      //push movePlayed to api gameboard
      store.movePlayed = $(event.target).attr('data-cell-index')
      //push to javascript gamboard
      gameCan.collectMove()
      //increases the movesMade, created when game is started in UI.js
      store.movesMade++
      gameCan.checkWinner(store.movesMade)
    } else {
      $('.message').text('Please choose another move!')
    }
}

const clickBox = function (event) {
  if (store.gameOver === false) {
    playMove(event)
    }
  }

const addHandlers = function () {
  $('.box').on('click', clickBox)
}

module.exports = {
  addHandlers,
  playMove,
  clickBox
}
