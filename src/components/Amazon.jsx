import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from '../store/product/productSlice'
import amazonLogo from '../assets/amazon.png'

function Amazon () {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch()
  const searchData = useSelector((state) => state.product.value)

  return (
    <>
      <div>
        <a href="https://amazon.com" target="_blank">
          <img src={amazonLogo} className="logo" alt="Amazon logo" />
        </a>
      </div>
      <h1>Search anything from Amazon</h1>
      <div className="card">
        <div>
          <input
            value={searchQuery}
            type="text"
            className='mb-1'
            onChange={(event) => {setSearchQuery(event.target.value)}}
          />
        </div>
        <button onClick={() => dispatch(fetchProduct(searchQuery))}>
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

export default Amazon;
