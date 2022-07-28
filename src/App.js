import { useEffect, useState } from 'react'
import axios from 'axios'
import Weather from './components/weather'

const App = () => {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)

  const handleLocation = (event) => {
    console.log(event.target.value)
    setCity(event.target.value)
    console.log(city)
  }

  const getWeather = (event) => {
    event.preventDefault()
    const key = process.env.REACT_APP_API_KEY
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    axios.get(url).then(({ data }) => {
      setWeatherData(data)
    })
  }

  return (
    <div>
      <h2>weather api call</h2>
      <form onSubmit={getWeather}>
        search citys
        <br></br>
        <input onChange={handleLocation}></input>
        <button type="submit">search</button>
      </form>
      <Weather weatherData={weatherData} />
    </div>
  )
}

export default App
