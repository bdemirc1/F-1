import React from 'react'
import './Navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Navbar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type='text' placeholder='Search'></input>
          <SearchOutlinedIcon/>
        </div>
        <div className='items'>

        </div>
      </div>
    </div>
  )
}

export default Navbar