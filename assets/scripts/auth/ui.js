'use strict'
const store = require('./../store')

const signUpSuccess = function () {
  $('#message').text('Successfully signed up!')
}
const signUpFailure = function () {
  $('#message').text('Sign up Failed!')
}

const signInSuccess = function (response) {
  $('#message').text('Successfully signed In!')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#temp').show()
  store.user = response.user
}
const signInFailure = function () {
  $('#message').text('Sign In Failed!')
}

const changePasswordSuccess = function (response) {
  $('#message').text('Successfully Changed Password')
}
const changePasswordFailure = function () {
  $('#message').text('Change Password Failed!')
}

const signOutSuccess = function (response) {
  $('#message').text('Successfully Signed Out')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#temp').hide()
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
