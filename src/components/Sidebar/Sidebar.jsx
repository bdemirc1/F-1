import React from 'react'
import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupWorkOutlinedIcon from '@mui/icons-material/GroupWorkOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SportsScoreOutlinedIcon from '@mui/icons-material/SportsScoreOutlined';
import {Link} from "react-router-dom";

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to='/' style={{ textDecoration:"none" }}>
            <span className="logo">Formula 1</span>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <li>
                <Link to='/' style={{ textDecoration:"none" }}>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </Link>
                </li>
                <li>
                <Link to='/constructor_standings' style={{ textDecoration:"none" }}>
                    <GroupWorkOutlinedIcon className='icon'/>
                    <span>Constructor Standings</span>
                    </Link>
                </li>
                <li>
                <Link to='/driver_standings' style={{ textDecoration:"none" }}>
                    <PersonOutlineOutlinedIcon className='icon'/>
                    <span>Driver Standings</span>
                </Link>
                </li>
                <li>
                <Link to='/addDriver' style={{ textDecoration:"none" }}>
                    <SportsScoreOutlinedIcon className='icon'/>
                    <span>Add Driver</span>
                </Link>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOptions"></div>
            <div className="colorOptions"></div>
        </div>
    </div>
  )
}

export default Sidebar