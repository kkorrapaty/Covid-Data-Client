'use strict'
const store = require('../store')

const showPatientTemplate = require('../templates/patient-listing.handlebars')
const updatePatientTemplate = require('../templates/patient-update.handlebars')

// Create Patient Display
const createPatientSuccess = function (response) {
  // console.log(response)
  store.patient = response.patient
  $('form').trigger('reset')
  $('#display').show()
  $('#content').hide()
  // $('#content').removeClass().addClass('success').text('Create Patient Success!')
}

const createPatientFailure = function () {
  $('#content').removeClass().addClass('failure').text('Create Patient Failed')
}

// show all patients
const showAllPatientSuccess = function (data) {
  $('#content').hide()
  // $('.patients').show()
  // console.log(data)
  const showPatientsHTML = showPatientTemplate({ patients: data.patients })

  $('#display').html(showPatientsHTML).addClass('.display').show()

  if ($('#display').is(':empty')) {
    $('#display').html('Please Enter Patient Info').addClass('.display').show()
  }
}

const showAllPatientFailure = function () {
  $('#content').removeClass().addClass('failure').text('Show All Patients Failed')
}

const deletePatientSuccess = function (event) {
  // console.log('In Patient UI')
  // console.log(event)
  $(event.target).parent().remove()
  $('#content').hide()
}

const deletePatientFailure = function () {
  $('#content').removeClass().addClass('failure').text('Delete Patient Failed').show()
}

const updatePatientSuccess = function (data, id) {
  // clear form
  $('form').trigger('reset')
  $('#' + id).remove()

  // call template to update data
  const updatePatientsHTML = updatePatientTemplate({
    name: data.patients.name,
    dob: data.patients.dob,
    state: data.patients.state,
    number: data.patients.number
  })
  // const displayHTML = $('#display').html()

  $('#display').addClass('.display').fadeOut(800, function () {
    $('#display').html('').fadeIn('fast', function () {
      $('#display').html('<h3>Updated Patient</h3>').append(updatePatientsHTML).addClass('.display').show()
    })
  })
  // Handlebars.registerHelper('loud', function (str) {
  //   return str.toUpperCase()
  // })
  $('#content').removeClass().addClass('success').text('Update Patient Success!').show()
}

const updatePatientFailure = function () {
  $('#content').removeClass().addClass('failure').text('Update Patient Failed').show()
}

module.exports = {
  createPatientSuccess,
  createPatientFailure,
  showAllPatientSuccess,
  showAllPatientFailure,
  deletePatientSuccess,
  deletePatientFailure,
  updatePatientSuccess,
  updatePatientFailure
}
