'use strict'
const gameEvents = require('./game/events.js')
const gameLogic = require('./game/game-logic.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
 const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.board').hide()
  $('#new-game').hide()
  $('#show-game').hide()
  $('#main-message').show()
  // your JS code goes here
  gameEvents.addHandlers()
  authEvents.addHandlers()
})
