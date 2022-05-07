import React from 'react'
import "./Home.scss";
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/chart/Featured/Featured';
import Chart from '../../components/chart/Chart/Chart';


function Home() {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type='race'/>
            <Widget type='constructor'/>
            <Widget type='driver'/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart/>
          </div>
        </div>

    </div>
  )
}

export default Home;