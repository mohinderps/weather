const axios = require('axios')
const {timezoneAPI, weatherAPI} = require('./apiUrls')
const {
  trimLocation,
  displayTemperature,
  displayTime,
  parseTemperature,
  parseTime
} = require('./helpers')

const args = process.argv.slice(2)

if(args.length === 0 || args.length > 1) {
  console.log('No arguments provided')
  console.log('Usage: ./weather \'New York\', 10001, Tokyo')
  return
}

const splitArgs = args[0].split(',')
const locations = splitArgs.map(trimLocation)

const fetchWeather = location => axios.get(weatherAPI(location)).then(parseTemperature).then(displayTemperature)

const fetchTime = location => axios.get(timezoneAPI(location)).then(parseTime).then(displayTime)

Promise.all(locations.map(val => fetchWeather(val)))
  .then(res => console.log(`Temperature -> ${res.join(', ')}`))
  .catch(err => console.log(err))

Promise.all(locations.map(val => fetchTime(val)))
  .then(res => console.log(`Time -> ${res.join(', ')}`))
  .catch(err => console.log(err))


