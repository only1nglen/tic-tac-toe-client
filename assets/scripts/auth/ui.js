'use strict'
const store = require('./../store.js')
const gameCan = require('./../game/game-logic.js')
const gameAction = require('./../game/events.js')

const signUpSuccess = function () {
  $('#message').text('Successfully signed up!')
  $('#sign-up')[0].reset('')
}
const signUpFailure = function () {
  $('#message').text('Sign up Failed!')
  $('#sign-up')[0].reset()
}

const signInSuccess = function (response) {
  $('#main-message').text('Successfully signed In!')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#temp').show()
  $('#sign-in')[0].reset()
  $('#new-game').show()
  $('.board').show()
  $('#show-game').show()
  $('.board').hide()
  // gameCan.clearBoard()
  // $('.box').on('click', gameAction.playMove)
  store.user = response.user
  // store.movesMade = 0
}
const signInFailure = function () {
  $('#message').text('Sign In Failed!')
  $('#sign-in')[0].reset()
}

const changePasswordSuccess = function (response) {
  $('#message').text('Successfully Changed Password')
  $('#change-password')[0].reset()
}

const changePasswordFailure = function () {
  $('#message').text('Change Password Failed!')
  $('#change-password')[0].reset()
}

const signOutSuccess = function (response) {
  $('#main-message').text('Successfully Signed Out')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#temp').hide()
  $('.board').hide()
  $('#new-game').hide()
  $('#show-game').hide()
  // gameCan.clearBoard()
  // $('.box').on('click', gameAction.playMove)
  // store.movesMade = 0
}

const signOutFailure = function () {
  $('#message').text('Sign Out Failed!')
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
  console.log(store.game, "is the new game")
  gameCan.clearBoard()
  $('.board').show()
  $('.message').text('Start Your Game!')
  $('.player').text()
  $('.box').on('click', gameAction.playMove)
  store.movesMade = 0
  // store.game = response.game
}

const createGameFailure = function () {
  $('#main-message').text('Could Not Create a New Game')
}

const onUpdateGameFailure = function () {
  $('#main-message').text('didnt update game')
}

const onUpdateGameSuccess = function (response) {
  $('#main-message').text('game is updated')
  console.log(response, "update")
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
