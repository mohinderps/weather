const {fetchWeather} = require('./helpers')

const args = process.argv.slice(2)

Promise.all(args.map(val => fetchWeather(val)))
  .then(res => res.map(val => val.data.main.temp))
  .then(res => console.log(res))
  .catch(err => console.log(err))


