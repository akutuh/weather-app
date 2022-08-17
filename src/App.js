import { useState } from 'react'
import axios from 'axios'
import WeatherForm from './components/WeatherForm'
import Weather from './components/Weather'
import WeatherChart from './components/WeatherChart'
import './App.css'

const App = () => {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [weatherForecastData, setWeatherFirecastData] = useState('')

  const handleLocation = (value) => {
    setCity(value)
  }

  const getWeather = (event) => {
    event.preventDefault()
    const key = process.env.REACT_APP_API_KEY
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    const forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${key}`
    axios.get(url).then(({ data }) => {
      setWeatherData(data)
    })
    axios.get(forecastUrl).then(({ data }) => {
      setWeatherFirecastData(data)
      console.log(data)
    })
  }

  return (
    <div className="App">
      <WeatherForm onChange={handleLocation} formChange={getWeather} />
      <Weather weatherData={weatherData} city={city} />
      <WeatherChart weatherForecastData={weatherForecastData} />
    </div>
  )
}

export default App
