import React from 'react'
import DriverDatatable from '../../components/datatable/DriverDatatable';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Drivers.scss';

function Drivers() {
  return (
    <div className='drivers'>
        <Sidebar/>
        <div className="driversContainer">
          <Navbar/>
          <DriverDatatable/>
        </div>
    </div>
  )
}

export default Drivers