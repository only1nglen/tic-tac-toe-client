"use strict";

const config = require('./../config')
const store = require('./../store')

const showGame = function () {
    return $.ajax({
      url: config.apiUrl + '/games?over=true',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data:{}
    })
  }
  
  const createGame = function () {
    return $.ajax({
      url: config.apiUrl + '/games',
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data: '{}'
    })
  }
  
  const updateGame = function () {
    return $.ajax({
      url: config.apiUrl + '/games/'+ store.game._id,
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + store.user.token
      },
      data: {
    "game": {
      "cell": {
        "index": store.movePlayed,
        "value": store.currentPlayer
      },
      "over": store.gameOver
    }
  }
  })
  }

module.exports = {
    showGame,
    createGame,
    updateGame
}
