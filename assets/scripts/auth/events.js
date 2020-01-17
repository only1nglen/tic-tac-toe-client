'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
// const logic = require('./../game/game-logic.js')

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

// const showBoard = function () {
//   event.preventDefault()
//   $('.board').show()
// }

const onShowGames = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.showGame()
  .then(console.log)
  .catch(console.log('no show'))
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
  // console.log(data,"data")
  console.log(form,"is form")
  console.log(form.id, " is ID")
  console.log(form.innerHTML, 'is innerHTML')
  // console.log(form['data-cell-index'])
  // $(form.id)
  //
}


const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#show-game').on('submit', onShowGames)
  $('#new-game').on('submit', onCreateGame)
  $('.box').on('click', onUpdateGame)
  // $('#new-game').on('click'), showBoard)
}

module.exports = {
  addHandlers
}
