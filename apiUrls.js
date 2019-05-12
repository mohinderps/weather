const {OPEN_WEATHER_API_KEY} = require('./constants')

const weatherAPI = appID => qs => `http://api.openweathermap.org/data/2.5/weather?APPID=${appID}&${qs}&units=metric`

const baseWeatherAPI = weatherAPI(OPEN_WEATHER_API_KEY)

const weatherAPIForLocationName = val => baseWeatherAPI(`q=${val}`)
const weatherAPIForLocationZip = val => baseWeatherAPI(`zip=${val}`)

module.exports = {
  weatherAPIForLocationName,
  weatherAPIForLocationZip
}
