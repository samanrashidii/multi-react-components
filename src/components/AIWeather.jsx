import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWeather } from '../store/weather/weatherSlice'
import AIWeatherLogo from '../assets/aiweather.png'

function Spotify () {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch()
  const searchData = useSelector((state) => state.weather.value)

  return (
    <>
      <div>
        <a href="https://www.meteosource.com/" target="_blank">
          <img src={AIWeatherLogo} className="logo" alt="AIWeather logo" />
        </a>
      </div>
      <h1>Search city to see weather forecast</h1>
      <div className="card">
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
      </div>
      <p className="read-the-docs">
        <code>
          {searchData && JSON.stringify(searchData)}
        </code>
      </p>
    </>
  )
}

export default Spotify
