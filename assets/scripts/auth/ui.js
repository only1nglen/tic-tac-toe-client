'use strict'

const store = require('./../store.js')
const gameCan = require('./../game/game-logic.js')

const signUpSuccess = () => {
  $('#main-message').text('Successfully signed up!')
  $('#sign-up')[0].reset('')
}
const signUpFailure = () => {
  $('#main-message').text('Sign up Failed!')
  $('#sign-up')[0].reset()
}

const userLoggedin = () => {
  $('#main-message').text('Successfully signed In!')
  $('#sign-in')[0].reset()
  $('#sign-out, #pw-button, #new-game, #show-game').show()
  $('#register, #lets-play, #sign-up, #sign-in, #change-password, .board').hide()
}

const userLoggedout = () => {
  $('#main-message').text('Successfully Signed Out')
  $('#sign-out, #change-password, .board, #new-game, #show-game, #pw-button').hide()
  $('#register, #lets-play').show()
}

const signInSuccess = (response) => {
  userLoggedin()
  gameCan.clearBoard()
  store.user = response.user
}
const signInFailure = () => {
  $('#main-message').text('Sign In Failed!')
  $('#sign-in')[0].reset()
}

const changePasswordSuccess = (response) => {
  $('#main-message').text('Successfully Changed Password')
  $('#change-password').hide()
  $('#change-password')[0].reset()
}

const changePasswordFailure = () => {
  $('#main-message').text('Change Password Failed!')
  $('#change-password')[0].reset()
}

const signOutSuccess = () => {
  userLoggedout()
}

const signOutFailure = () => {
  $('#main-message').text('Sign Out Failed!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signUpFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signInFailure
}
