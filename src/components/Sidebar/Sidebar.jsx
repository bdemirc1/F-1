import React from 'react'
import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupWorkOutlinedIcon from '@mui/icons-material/GroupWorkOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SportsScoreOutlinedIcon from '@mui/icons-material/SportsScoreOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">Formula 1</span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <li>
                    <GroupWorkOutlinedIcon className='icon'/>
                    <span>Constructor Standings</span>
                </li>
                <li>
                    <PersonOutlineOutlinedIcon className='icon'/>
                    <span>Driver Standings</span>
                </li>
                <li>
                    <SportsScoreOutlinedIcon className='icon'/>
                    <span>Add Driver</span>
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