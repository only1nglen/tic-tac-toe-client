'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  // get data from form
  const form = event.target
  const data = getFormFields(form)
  // send data to api
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  // handle the API response
  console.log(data)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  console.log(data)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  console.log(data)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}

//  const onClick = function () {
//    $('.square').text('x')
//  }
//
// gameEvents = function () {
//   $('.square').on('click', onClick)
// }
