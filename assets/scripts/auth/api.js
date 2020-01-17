'use strict'

const config = require('./../config')
const store = require('./../store')


const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games' + store.game.id,
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
  // console.log(store, "is open")
  return $.ajax({
    url: config.apiUrl + '/games/'+ store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
  "game": {
    "cell": {
      "index": 0,
      "value": "x"
    },
    "over": false
  }
}
})
}

// console.log(game.cell.index)

module.exports = {
 signUp,
 signIn,
 changePassword,
 signOut,
 showGame,
 createGame,
 updateGame
}
