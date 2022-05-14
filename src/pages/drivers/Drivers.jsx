import React from 'react'
import DriverStandingDatatable from '../../components/datatable/DriverStandingDatatable';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Drivers.scss';

function Drivers() {
  return (
    <div className='drivers'>
        <Sidebar/>
        <div className="driversContainer">
          <Navbar/>
          <DriverStandingDatatable/>
        </div>
    </div>
  )
}

export default Drivers