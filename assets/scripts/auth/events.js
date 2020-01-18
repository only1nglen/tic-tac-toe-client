'use strict'

const api = require('./api')
const store = require('./../store.js')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onShowGames = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.showGame()
  .then(ui.showGameSuccess)
  .catch(ui.showGameFailure)
}

const onCreateGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createGame()
  .then(ui.createGameSuccess)
  .catch(ui.createGameFailure)

}

const onUpdateGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateGame()
  .then(ui.onUpdateGameSuccess)
  .catch(ui.onUpdateGameFailure)
}


const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#show-game').on('submit', onShowGames)
  $('#new-game').on('submit', onCreateGame)
  $('.box').on('click', onUpdateGame)
}

module.exports = {
  addHandlers
}
