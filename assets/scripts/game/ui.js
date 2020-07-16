'use strict'

const store = require('./../store.js')
const gameCan = require('./../game/game-logic.js')

const showGameSuccess = function (response) {
    store.gamesPlayed = response.games.length
    $('#main-message').text(`${store.gamesPlayed} Completed Games`)
  }
  
  const showGameFailure = function () {
    $('#main-message').text('Cant find your Games!')
  }
  
  const createGameSuccess = function (response) {
    store.game = response.game
    gameCan.clearBoard()
    $('.board').show()
    $('.message').text('')
    $('.player').text('X start the Game!')
    store.movesMade = 0
    store.currentPlayer = 'O'
    store.gameOver = false
  }
  
  const createGameFailure = function () {
    $('.message').text('Oops, someone stole the tic-tac-toe board!')
  }
  
  const onUpdateGameFailure = function () {
    // $('#main-message').text('didnt update game')
  }
  
  const onUpdateGameSuccess = function (response) {
    // $('#main-message').text('game is updated')
  }

  module.exports = {
    showGameSuccess,
    showGameFailure,
    createGameSuccess,
    createGameFailure,
    onUpdateGameFailure,
    onUpdateGameSuccess
  }