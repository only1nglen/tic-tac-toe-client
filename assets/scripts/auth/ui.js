'use strict'
const store = require('./../store')

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
  store.user = response.user
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
}
const signOutFailure = function () {
  $('#message').text('Sign Out Failed!')
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
