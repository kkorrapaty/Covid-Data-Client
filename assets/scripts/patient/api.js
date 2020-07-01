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

// delete Patient
const deletePatient = function (id) {
  console.log('In Patient API')
  $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/patients/${id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
  console.log('Leaving Patient API')
}

const updatePatient = function (id, data) {
  console.log(data)
  $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/patients/${id}`,
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

module.exports = {
  createPatient,
  showAllPatients,
  deletePatient,
  updatePatient
}
