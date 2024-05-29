const getWeatherData = function () {
  fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=43.1805&longitude=12.5096&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum&forecast_days=1'
  )
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('errore nella chiamata')
      }
    })
    .then((weather) => {
      console.log('WEATHER DATA', weather)
      const min = document.getElementById('min')
      const max = document.getElementById('max')
      min.innerText = 'MIN: ' + weather.daily.temperature_2m_min[0] + 'C' // temperatura minima
      max.innerText = 'MAX: ' + weather.daily.temperature_2m_max[0] + 'C' // temperatura max
    })
    .catch((err) => console.log(err))
}

getWeatherData()
