// 'use strict'
// const gameThink = require('./game-logic')
//
// let currentPlayer = 'X'
// let movesMade = 0
//
// const changeTurn = function () {
//   if (currentPlayer === 'X') {
//     currentPlayer = 'O'
//     $('.player').text(`Player ${currentPlayer}'s Turn`)
//   } else {
//     currentPlayer = 'X'
//     $('.player').text(`Player ${currentPlayer}'s Turn`)
//   }
// }
//
// const pickAnother = function () {
// // if ($('.box') === 'X' || 'O') {
//    $('.message').text('Please choose another move!')
//  // }
// }
//
// //clicks a box and play the move
// //make sure box is empty, if empty play x or o
// //if taken, make another choice
// //movesmade++
//
// //if more than 5 or more moves, start checking for winner
// //if no winner, continue with another move
//
// //
// // const playMove = function (event) {
// //   event.preventDefault()
// //   $(event.target).text(currentPlayer)
// //   $('.message').text("You've made a move!")
// //   $(event.target).on('click', pickAnother)
// //   changeTurn()
// //   gameThink.collectMove()
// //   gameThink.checkWinner()
// //  console.log(gameThink.gameBoard)
// // }
//
//
// const playMove = function (event) {
//   event.preventDefault()
//   $(event.target).text(currentPlayer)
//   $('.message').text("You've made a move!")
//   $(event.target).on('click', pickAnother)
//   changeTurn()
//   gameThink.collectMove()
//   movesMade++
//   console.log(gameThink.gameBoard)
// }
//
// // const playMove = function (event) {
// //   event.preventDefault()
// //   console.log(event.target)
// // if ((event.target.innerHTML) === ''){
// //   $(event.target).text(currentPlayer)
// //   $('.message').text("You've made a move!")
// //   changeTurn()
// // } else {
// //   $('.message').text('Please choose another move!')
// // }
// //   // movesMade++
// //   gameThink.collectMove()
// //   console.log(gameThink.gameBoard)
// // }
//
//
// const addHandlers = function () {
//   $('.box').on('click', playMove)
// }
//
// module.exports = {
//   addHandlers
// }
