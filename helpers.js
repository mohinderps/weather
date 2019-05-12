const axios = require('axios')
const {timezoneAPI, weatherAPI} = require('./apiUrls')

const trimLocation = location => location.trim()

const fetchWeatherAtLocation = location => axios.get(weatherAPI(location))

const fetchTimeAtLocation = location => axios.get(timezoneAPI(location))


module.exports = {
  trimLocation,
  fetchWeatherAtLocation,
  fetchTimeAtLocation
}
