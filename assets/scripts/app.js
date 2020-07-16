'use strict'
const gameEvents = require('./game/events.js')
const gameLogic = require('./game/game-logic.js').default
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
 const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#main-message').show()
  $('#sign-up, #sign-in, #pw-button, #change-password, #sign-out, #new-game, #show-game, .board').hide()
  // your JS code goes here
  gameEvents.addHandlers()
  authEvents.addHandlers()
})
