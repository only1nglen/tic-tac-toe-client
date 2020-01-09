'use strict'
const gameEvents = require('./game/events')
const gameLogic = require('./game/game-logic')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  gameEvents.addHandlers()
  gameLogic.addLogic()
})
