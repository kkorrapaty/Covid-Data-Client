'use strict'
const eventsAuth = require('./auth/events')
const eventsPatient = require('./patient/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // // Hide Create Patient until Signed in
  // $('#createPatient').hide()
  // CHANGE PASSWORD hidden until Signed In
  $('#change-pass-sec').hide()

  // SIGN UP
  $('#sign-up').on('submit', eventsAuth.onSignUp)

  // SIGN IN
  $('#sign-in').on('submit', eventsAuth.onSignIn)

  // CHANGE PASSWORD
  $('#change-pass').on('submit', eventsAuth.onChangePassword)

  // SIGN OUT
  $('#sign-out').on('click', eventsAuth.onSignOut)

  // Create Patient With Handlebar
  eventsPatient.addHandlers()
  // hide Display patients
  // $('#showAllPatients').hide()
  $('.patients').hide()
})
