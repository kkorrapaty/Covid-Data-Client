'use strict'
const store = require('../store')

// SIGN UP
const signUpSuccess = function (response) {
  $('form').trigger('reset')
  $('#content').removeClass().addClass('success').text('Sign Up Success!').show()
}

const signUpFailure = function (response) {
  $('#content').removeClass().addClass('failure').text('Sign Up Failed')
}

// SIGN IN
const signInSuccess = function (response) {
  $('form').trigger('reset')
  // $('#content').removeClass().addClass('success').text('Sign In Success!')
  // hide content
  $('#content').removeClass().addClass('success').hide()
  // console.log(response)
  // Store TOKEN
  store.user = response.user

  // hide SIGN UP section
  $('#sign-up-sec').hide()
  // hide SIGN IN section
  $('#sign-in-sec').hide()
  // show CHANGE PASSWORD
  $('#change-pass-sec').show()
  // show SIGN OUT

  // // Display Create Patient
  // $('#createPatient').show()
  // // hide Create Patient
  // $('#showAllPatients').show()
  $('.patients').show()
  $('.patients #display').hide()
}

const signInFailure = function (response) {
  $('#content').removeClass().addClass('failure').text('Sign In Failed')
}

// CHANGE PWD
const changePasswordSuccess = function (response) {
  $('form').trigger('reset')
  $('#content').removeClass().addClass('success').text('Password Change Success!')
}

const changePasswordFailure = function (response) {
  $('#content').removeClass().addClass('failure').text('Password Change Failed').show()
}

// SIGN OUT
const signOutSuccess = function (response) {
  $('form').trigger('reset')
  $('#content').removeClass().addClass('success').text('Sign Out Success!').show()

  // get rid of auth Token
  store.user = null
  // get rid of patient info
  store.patient = null

  // show SIGN UP section
  $('#sign-up-sec').show()
  // show SIGN IN section
  $('#sign-in-sec').show()
  // hide CHANGE PASSWORD
  $('#change-pass-sec').hide()

  // // hide Create Patient
  // $('#createPatient').hide()
  // // hide show Patient
  // $('#showAllPatients').hide()
  $('.patients').hide()
}

const signOutFailure = function (response) {
  $('#content').removeClass().addClass('failure').text('Sign Out Failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
