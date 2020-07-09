'use strict'
const api = require('./api')
const ui = require('./ui')

const getForm = require('../../../lib/get-form-fields')

// form is used in numberous methods, so made a single function to recall
const createForm = function (event) {
  event.preventDefault()
  const form = event.target
  return getForm(form)
}

const onCreatePatient = function (event) {
  const data = createForm(event)

  api.createPatient(data)
    .then(ui.createPatientSuccess)
    .catch(ui.createPatientFailure)
}

const onShowAllPatient = function (event) {
  const data = createForm(event)

  api.showAllPatients(data)
    .then(ui.showAllPatientSuccess)
    .catch(ui.showAllPatientFailure)
}

const onHideAllPatient = function (event) {
  $('#display').html('').addClass('.display')
}

const onDeletePatient = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')

  api.deletePatient(id)
    .then(() => {
      ui.deletePatientSuccess(event)
    })
    .catch(ui.deletePatientFailure)
}

const onUpdatePatient = function (event) {
  const data = createForm(event)
  const id = $(event.target).data('id')

  api.updatePatient(id, data)
    .then(() => {
      ui.updatePatientSuccess(data, id)
    })
    .catch(ui.updatePatientFailure)
}

// const onShowSymptoms = function (event) {
//   console.log(event)
// }

// Handler
const addHandlers = () => {
  $('#createPatient').on('submit', onCreatePatient)
  $('#showAllPatients').on('click', onShowAllPatient)
  $('#hideAllPatients').on('click', onHideAllPatient)
  $('#display').on('click', '.deletePatientButton', onDeletePatient)
  $('#display').on('submit', '.updatePatient', onUpdatePatient)
  // USED FOR WHEN NEW RESOURCE IS MADE IN SERVER
  // $('#display').on('click', onShowSymptoms)
}

module.exports = {
  addHandlers
}
