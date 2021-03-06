import React from 'react'
import "./Home.scss";
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Chart from '../../components/chart/Chart/Chart';
import Featured from '../../components/chart/Featured/Featured';


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
            <Chart className= "chart1"/>
          </div>
          <div className="featured">
            <Featured/>
          </div>
      
          
        </div>

    </div>
  )
}

export default Home;