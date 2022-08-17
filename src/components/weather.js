const Weather = ({ weatherData, city }) => {
  if (weatherData === null) {
    return null
  }
  const icon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
  console.log(weatherData)
  return (
    <>
      temperature {weatherData.main.temp} °C for {city}
      <img src={icon} alt={`icon for ${weatherData.weather[0].description}`} />
    </>
  )
}

export default Weather
