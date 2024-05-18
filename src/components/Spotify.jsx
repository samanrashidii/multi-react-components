import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMusic } from '../store/music/musicSlice'
import spotifyLogo from '../assets/spotify.png'

function Spotify () {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch()
  const searchData = useSelector((state) => state.music.value)

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchMusic(searchQuery));
  }

  return (
    <>
      <div>
        <a href="https://spotify.com" target="_blank">
          <img src={spotifyLogo} className="logo" alt="Spotify logo" />
        </a>
      </div>
      <h1>Search anything from Spotify</h1>
      <form onSubmit={handleSubmit} className="card">
        <div>
          <input
            value={searchQuery}
            type="text"
            className='mb-1'
            onChange={(event) => {setSearchQuery(event.target.value)}}
          />
        </div>
        <button onClick={() => dispatch(fetchMusic(searchQuery))}>
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

export default Spotify;
