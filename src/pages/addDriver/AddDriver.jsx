import React from 'react'
import './AddDriver.scss';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import DriverDatable from '../../components/datatable/DriverDatatable'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function Races() {
  return (
    <div className='races'>
        <Sidebar/>
        <div className="racesContainer">
          <Navbar/>
          <div className="top">
            <h1>Add New Driver</h1>
          </div>
          <div className="bottom">
            <div className="left">
                <PersonOutlineOutlinedIcon className='img'/>
            </div>
            <div className="right">
              <form>
                <div className="formInput">
                  <label>First Name</label>
                  <input type="text" placeholder='Lewis'/> 
                </div>
                <div className="formInput">
                  <label>Last Name</label>
                  <input type="text" placeholder='Hamilton'/> 
                </div>
                <div className="formInput">
                  <label>Code</label>
                  <input type="text" placeholder='HAM'/> 
                </div>
                <div className="formInput">
                  <label>Date of Birth(YYYY-MM-DD)</label>
                  <input type="text" placeholder='1985-01-07'/> 
                </div>
                <div className="formInput">
                  <label>Nationality</label>
                  <input type="text" placeholder='1985-01-07'/> 
                </div>
                <div className="formInput">
                  <label>URL(Wikipedia)</label>
                  <input type="text" /> 
                </div>
                <button>Add</button> 
              </form>
            </div>
          </div>
          <div className="list">
            <DriverDatable className='datatable'/>
          </div>
        </div>
    </div>
  )
}

export default Races