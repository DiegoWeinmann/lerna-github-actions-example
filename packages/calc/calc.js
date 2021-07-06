'use strict'
const add = require('add')
const subtract = require('subtract')

module.exports = calc

function calc() {
  console.log('Add 2 + 2')
  console.log(add(2, 2))
  console.log('Subtract 2 - 2')
  console.log(subtract(2, 2))
}

calc()
