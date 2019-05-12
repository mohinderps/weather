const {WORLD_WEATHER_API_KEY} = require('./constants')

const weatherAPI = location => `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${WORLD_WEATHER_API_KEY}&q=${location}&format=json`

const timezoneAPI = location => `http://api.worldweatheronline.com/premium/v1/tz.ashx?key=${WORLD_WEATHER_API_KEY}&q=${location}&format=json`

module.exports = {
  timezoneAPI,
  weatherAPI
}
