import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWeather } from '../store/weather/weatherSlice'
import AIWeatherLogo from '../assets/aiweather.png'

function Spotify () {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch()
  const searchData = useSelector((state) => state.weather.value)

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchWeather(searchQuery));
  }

  return (
    <>
      <div>
        <a href="https://www.meteosource.com/" target="_blank">
          <img src={AIWeatherLogo} className="logo" alt="AIWeather logo" />
        </a>
      </div>
      <h1>Search city to see weather forecast</h1>
      <form onSubmit={handleSubmit} className="card">
        <div>
          <input
            value={searchQuery}
            type="text"
            className='mb-1'
            onChange={(event) => {setSearchQuery(event.target.value)}}
          />
        </div>
        <button onClick={() => dispatch(fetchWeather(searchQuery))}>
          Search
        </button>
      </form>
      <p className="read-the-docs">
        <code>
          {searchData && JSON.stringify(searchData)}
        </code>
      </p>
    </>
  )
}

export default Spotify
