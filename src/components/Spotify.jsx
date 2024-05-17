import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMusic } from '../store/music/musicSlice'
import spotifyLogo from '../assets/spotify.png'

function Spotify () {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch()
  const searchData = useSelector((state) => state.music.value)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={spotifyLogo} className="logo" alt="Spotify logo" />
        </a>
      </div>
      <h1>Search from Spotify</h1>
      <div className="card">
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
