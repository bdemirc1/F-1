import React, { useState } from 'react'
import './AddDriver.scss';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import DriversDatable from '../../components/datatable/DriversDatatable'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function AddDriver() {
  //let driverid = 856;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [code, setCode] = useState("");
  const [dob, setDob] = useState("");
  const [nationality, setNationality] = useState("");
  const [url, setUrl] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { code, firstName, lastName, dob, nationality, url }
      const response = await fetch("http://localhost:5555/drivers", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body) 
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  }


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
              <form onSubmit={onSubmitForm}>
                <div className="formInput">
                  <label>First Name</label>
                  <input type="text" placeholder='Lewis' required value={firstName} 
                  onChange={ e => {
                    setFirstName(e.target.value)
                  }}/> 
                </div>
                <div className="formInput">
                  <label>Last Name</label>
                  <input type="text" placeholder='Hamilton' required value={lastName} 
                  onChange = {
                    e => {
                      setLastName(e.target.value);
                    }}/> 
                </div>
                <div className="formInput">
                  <label>Code</label>
                  <input type="text" placeholder='HAM' required value={code}
                  onChange = {
                    e => {
                      setCode(e.target.value);
                    }}/> 
                </div>
                <div className="formInput">
                  <label>Date of Birth(YYYY-MM-DD)</label>
                  <input type="text" placeholder='1985-01-07' required value={dob}
                  onChange = {
                    e => {
                      setDob(e.target.value);
                    }}/> 
                </div>
                <div className="formInput">
                  <label>Nationality</label>
                  <input type="text" placeholder='British' required value={nationality} 
                  onChange = {
                    e => {
                      setNationality(e.target.value);
                    }}/> 
                </div>
                <div className="formInput">
                  <label>URL (optional)</label>
                  <input type="text" value={url} onChange = {
                    e => {
                      setUrl(e.target.value);
                    }}/> 
                </div>
                <button>Add</button> 
              </form>
            </div>
          </div>
          <div className="list">
            <DriversDatable className='datatable'/>
          </div>
        </div>
    </div>
  )
}

export default AddDriver