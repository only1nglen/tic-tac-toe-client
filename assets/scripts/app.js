'use strict'
const gameEvents = require('./game/events')
const gameLogic = require('./game/game-logic')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
 const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#temp').hide()
  $('.board').hide()
  $('#new-game').hide()
  // your JS code goes here
  gameEvents.addHandlers()
  gameLogic.addLogic()
  authEvents.addHandlers()
})
