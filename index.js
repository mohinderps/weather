const {fetchWeatherAtLocation, fetchTimeAtLocation, trimLocation} = require('./helpers')

const args = process.argv.slice(2)

if(args.length === 0 || args.length > 1) {
  console.log('No arguments provided')
  console.log('Usage: ./weather \'New York\', 10001, Tokyo')
  return
}

const splitArgs = args[0].split(',');
const locations = splitArgs.map(trimLocation)


Promise.all(locations.map(val => fetchWeatherAtLocation(val)))
  .then(res => res.map(r => console.log(r.data.data.current_condition[0].temp_C)))
  .catch(err => console.log(err))

Promise.all(locations.map(val => fetchTimeAtLocation(val)))
.then(res => res.map(r => console.log(r.data.data.time_zone[0].localtime)))
.catch(err => console.log(err))


