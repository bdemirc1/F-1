import React from 'react'
import "./Featured.scss";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from "react";


function Featured() {
  const [pitStops, setpitStops] = useState([]);
  const [ data, setData] = useState([]);

  const getpitStops = async () => {
    try{
        const response = await fetch("http://localhost:5555/pitStops").then((respitStops) => respitStops.json()).then((pitJson) => setpitStops(pitJson) );
        
    }catch(err){
        console.error(err.message);
    }
  }

  const tickFormatter = (value) => {
    const limit = 12; // maximum character
    if (value.length <= limit) return value;
    return `${value.substring(0, limit)}`;
  }

  const getDataforChart = () => {
    setData(pitStops.map((item) => {
      return {name: tickFormatter(item.name), pit_stop_time: item.pit_stop_time}
    }))
  }

  useEffect(() => {
    getpitStops();
    return () => {};
  }, [])

  useEffect(() => {
    getDataforChart();
  }, [pitStops]);
  
  console.log(pitStops);
  return (
    <div className='featured'>
        <div className="title">Total Pit Stops</div>
        <div className="chart">
        <ResponsiveContainer width="100%" height="70%">
        <BarChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 15, right: 15 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pit_stop_time" fill="#ff8800" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
        </div>
    </div>
  )
}

export default Featured