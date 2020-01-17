'use strict'
const store = require('./../store.js')

const signUpSuccess = function () {
  $('#message').text('Successfully signed up!')
  $('#sign-up')[0].reset()
}
const signUpFailure = function () {
  $('#message').text('Sign up Failed!')
  $('#sign-up')[0].reset()
}

const signInSuccess = function (response) {
  $('#message').text('Successfully signed In!')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#temp').show()
  $('#sign-in')[0].reset()
  $('#new-game').show()
  $('.board').show()
  $('#show-game').show()
  store.user = response.user
  // console.log(store.user)
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
  $('#message').text('Successfully Signed Out')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#temp').hide()
  $('.board').hide()
  $('#new-game').hide()
  $('#show-game').hide()
}

const signOutFailure = function () {
  $('#message').text('Sign Out Failed!')
}

const showGameSuccess = function () {
  $('#message').text('Your Games!')
}

const showGameFailure = function () {
  $('#message').text('Cant find your Games!')
}

const createGameSuccess = function (response) {
  $('#message').text('Start Your Game!')
  // store.id = response.game.id
  // store.game.id = response.game.id
  // console.log(store.game.id, "is game ID")
  store.game = response.game
  // console.log(response, "game created")
}

const createGameFailure = function () {
  $('#message').text('Could Not Create a New Game')
}

const onUpdateGameFailure = function () {
  $('#message').text('didnt update game')
}

const onUpdateGameSuccess = function (response) {
  $('#message').text('game is updated')
  // store.game.id = response.game.id
  // console.log(response, 'updated')
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
  // showGameSuccess,
  // showGameFailure,
  createGameSuccess,
  createGameFailure,
  onUpdateGameFailure,
  onUpdateGameSuccess
}
