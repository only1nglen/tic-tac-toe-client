'use strict'
const store = require('./../store.js')
const gameCan = require('./../game/game-logic.js')
const gameAction = require('./../game/events.js')

const signUpSuccess = function () {
  $('#main-message').text('Successfully signed up!')
  $('#sign-up')[0].reset('')
}
const signUpFailure = function () {
  $('#main-message').text('Sign up Failed!')
  $('#sign-up')[0].reset()
}

const signInSuccess = function (response) {
  $('#main-message').text('Successfully signed In!')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#sign-in')[0].reset()
  $('#new-game').show()
  $('.board').show()
  $('.board').hide()
  gameCan.clearBoard()
  store.user = response.user
}
const signInFailure = function () {
  $('#main-message').text('Sign In Failed!')
  $('#sign-in')[0].reset()
}

const changePasswordSuccess = function (response) {
  $('#main-message').text('Successfully Changed Password')
  $('#change-password')[0].reset()
}

const changePasswordFailure = function () {
  $('#main-message').text('Change Password Failed!')
  $('#change-password')[0].reset()
}

const signOutSuccess = function (response) {
  $('#main-message').text('Successfully Signed Out')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('.board').hide()
  $('#new-game').hide()
  $('#show-game').hide()
}

const signOutFailure = function () {
  $('#main-message').text('Sign Out Failed!')
}

const showGameSuccess = function (response) {
  store.game.played = response.games.length
  $('#main-message').text(store.game.played+ " Games have been played!")
}

const showGameFailure = function () {
  $('#main-message').text('Cant find your Games!')
}

const createGameSuccess = function (response) {
  store.game = response.game
  $('#show-game').show()
  gameCan.clearBoard()
  $('.board').show()
  $('.message').text('')
  $('.player').text('X start the Game!')
  $('.box').on('click', gameAction.clickBox)
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
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signUpFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signInFailure,
  showGameSuccess,
  showGameFailure,
  createGameSuccess,
  createGameFailure,
  onUpdateGameFailure,
  onUpdateGameSuccess
}
