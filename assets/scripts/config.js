'use strict'

let apiUrl
const apiUrls = {
  production: 'https://git.heroku.com/protected-ocean-81713.git',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
