const {fetchWeather, trimData} = require('./helpers')

const args = process.argv.slice(2)

if(args.length === 0 || args.length > 1) {
  console.log('No arguments provided')
  console.log('Usage: ./weather \'New York\', 10001, Tokyo')
  return
}

const splitArgs = args[0].split(',');
const locations = splitArgs.map(trimData);


Promise.all(locations.map(val => fetchWeather(val)))
  .then(res => res.map(val => val.data.main.temp))
  .then(res => console.log(res))
  .catch(err => console.log(err))


