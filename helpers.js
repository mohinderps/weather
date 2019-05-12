const trimLocation = location => location.trim()

const displayTemperature = temperature => `${temperature} degrees celsius`

const displayTime = time => `${time.split(' ')[1]}`

const parseTemperature = ({data: temperatureData}) => temperatureData.data.current_condition[0].temp_C

const parseTime = ({data: timeData}) => timeData.data.time_zone[0].localtime

module.exports = {
  trimLocation,
  displayTemperature,
  displayTime,
  parseTemperature,
  parseTime
}
