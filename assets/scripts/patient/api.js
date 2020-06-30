'use strict'

const config = require('../config')
const store = require('../store')

// Creating Patient
const createPatient = function (data) {
  console.log(data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/patients',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      patients: {
        name: data.patients.name,
        dob: data.patients.dob,
        state: data.patients.state
      }
    }
  })
}

// index all patients
const showAllPatients = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/patients',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletePatient = function (id) {
  $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/patients/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createPatient,
  showAllPatients,
  deletePatient
}
