const axios = require('axios')
const {weatherAPIForLocationName, weatherAPIForLocationZip} = require('./apiUrls')

const trimData = val => val.trim()

const roundData = val => val.round();

const isZipCode = val => {
  const reg = /^[1-9].*/
  return reg.test(val)
}

const fetchWeatherByLocationZip = zip => axios.get(weatherAPIForLocationZip(zip))

const fetchWeatherByLocationName = name => axios.get(weatherAPIForLocationName(name))

const fetchWeather = val => {
  if(isZipCode(val)){
    return fetchWeatherByLocationZip(val)
  }
  return fetchWeatherByLocationName(val)
}

module.exports = {
  trimData,
  fetchWeather
}
