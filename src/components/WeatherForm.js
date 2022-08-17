import { Button } from '@mui/material'

const WeatherForm = ({ onChange, formChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <>
      <h2>weather api call</h2>
      <form onSubmit={formChange}>
        search citys
        <br></br>
        <input onChange={handleChange}></input>
        <Button className="Button" variant="contained" type="submit">
          search
        </Button>
      </form>
    </>
  )
}

export default WeatherForm
