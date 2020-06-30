'use strict'
const events = require('./auth/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // CHANGE PASSWORD hidden until Signed In
  $('#change-pass-sec').hide()

  // SIGN UP
  $('#sign-up').on('submit', events.onSignUp)

  // SIGN IN
  $('#sign-in').on('submit', events.onSignIn)

  // CHANGE PASSWORD
  $('#change-pass').on('submit', events.onChangePassword)

  // SIGN OUT
  $('#sign-out').on('click', events.onSignOut)
})
