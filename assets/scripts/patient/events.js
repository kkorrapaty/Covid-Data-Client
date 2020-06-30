'use strict'
// const store = require('../store')

// const winner = require('./winner')

const api = require('./api')
const ui = require('./ui')

const getForm = require('../../../lib/get-form-fields')




// Handler
const addHandlers = () => {
  $('#createPatient').on('submit', onCreatePatient)
}

module.exports = {
  addHandlers
}
