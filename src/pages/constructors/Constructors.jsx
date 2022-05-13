import React from 'react'
import ConstructorDatatable from '../../components/datatable/ConstructorDatatable';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Constructors.scss';

function Constructors() {
  return (
    <div className='constructors'>
      <Sidebar/>
      <div className="constructorsContainer">
        <Navbar/>
        <ConstructorDatatable/>
      </div>
    </div>
  )
}

export default Constructors