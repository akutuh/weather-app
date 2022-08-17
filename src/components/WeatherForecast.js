const WeatherForecast = ({ weatherForecastData }) => {
  if (weatherForecastData == null) return null
  return (
    <>
      <ul>{weatherForecastData.list.map((weather) => {
        <li key></li>
      })}</ul>
    </>
  )
}

export default WeatherForecast
