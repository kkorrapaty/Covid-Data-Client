'use strict'
// const store = require('../store')

// const winner = require('./winner')

const api = require('./api')
const ui = require('./ui')

const getForm = require('../../../lib/get-form-fields')

// form is used in numberous methods, so made a single function to recall
const createForm = function (event) {
  event.preventDefault()
  const form = event.target
  return getForm(form)
}

// SIGN UP
const onSignUp = function (event) {
  // get data from event
  const data = createForm(event)

  // Call to API
  api.signUp(data)
    // Display success
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// SIGN IN
const onSignIn = function (event) {
  // get data from event
  const data = createForm(event)

  // Call to API
  api.signIn(data)
    // Display Success
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// CHANGE PASSWORD
const onChangePassword = function (event) {
  // get Data from event
  const data = createForm(event)

  // Call to API
  api.changePassword(data)
    // Display Success
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// SIGN OUT
const onSignOut = function (event) {
  // get Data from event
  const data = createForm(event)

  // Call to API
  api.signOut(data)
    // Display success
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
