const Weather = ({ weatherData }) => {
  if (weatherData === null) {
    return null
  }
  console.log(weatherData)
  return <>temperature {weatherData.main.temp}</>
}

export default Weather
