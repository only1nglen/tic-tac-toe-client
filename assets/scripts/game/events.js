'use strict'

const gameCan = require('./game-logic.js')
const store = require('./../store')
const api = require('./api')
const ui = require('./ui')

const onShowGames = function (event) {
  event.preventDefault()
  api.showGame()
  .then(ui.showGameSuccess)
  .catch(ui.showGameFailure)
}

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
  .then(ui.createGameSuccess)
  .catch(ui.createGameFailure)

}

const onUpdateGame = function (event) {
  event.preventDefault()
  api.updateGame()
  .then(ui.onUpdateGameSuccess)
  .catch(ui.onUpdateGameFailure)
}

const changeTurn = function () {
  if (store.currentPlayer === 'X') {
    store.currentPlayer = 'O'
    $('.player').text(`Player X Turn`)
  } else {
    store.currentPlayer = 'X'
    $('.player').text(`Player O Turn`)
  }
}

const clickBox = function (event) {
  if (store.gameOver === false) {
    playMove(event)
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

const addHandlers = function () {
  $('.box').on('click', clickBox)
  $('#show-game').on('click', onShowGames)
  $('#new-game').on('click', onCreateGame)
  $('.box').on('click', onUpdateGame)
}

module.exports = {
  addHandlers,
  playMove,
  clickBox
}
