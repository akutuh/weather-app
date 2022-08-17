import {
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line,
  YAxis,
  ResponsiveContainer,
} from 'recharts'

const WeatherChart = ({ weatherForecastData }) => {
  if (weatherForecastData === '' || weatherForecastData === null) {
    return null
  }
  return (
    <div className="container">
      <ResponsiveContainer width="95%" height={400}>
        <LineChart
          data={weatherForecastData.list}
          margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
        >
          <XAxis dataKey="dt_txt" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line
            type="monotone"
            dataKey="main.temp"
            stroke="#ff7300"
            name="temperature"
          />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default WeatherChart
