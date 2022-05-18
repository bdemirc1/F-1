import React from 'react'
import "./Featured.scss";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect, useState, useContext } from "react";
import { UserContext } from '../../../UserContext';


function Featured() {
  const { raceid } = useContext(UserContext)
  const [pitStops, setpitStops] = useState([]);
  const [ data, setData] = useState([]);
  //const [maxpitStop, setMaxpitStop] = useState();
  //can get maxpit stop time for y range

  const getpitStops = async () => {
    try{
        const response = await fetch(`http://localhost:5555/pitStops/${raceid}`).then((respitStops) => respitStops.json()).then((pitJson) => setpitStops(pitJson) );
       
        
    }catch(err){
        console.error(err.message);
    }
  }

  const tickFormatter = (value) => {
    const limit = 10; // maximum character
    if (value.length <= limit) return value;
    return `${value.substring(0, limit)}`;
  }

  const getDataforChart = () => {
    setData(pitStops.map((item) => {
      return {name: tickFormatter(item.name), pit_stop_time: item.pit_stop_time}
    }));
   /*  let maxpit = 0;
    for(let i=0; i < data.length; i++){
      if (data[i].pit_stop_time > maxpit){
        maxpit = data[i].pit_stop_time;
      }
    }
    setMaxpitStop(maxpit); */
  }

  useEffect(() => {
    getpitStops();
    return () => {};
  }, [ raceid])

  useEffect(() => {
    getDataforChart();
  }, [pitStops]);
  
  console.log("Pit stops", pitStops);
  return (
    <div className='featured'>
        <div className="title">Total Pit Stops (sec)</div>
        <div className='no_data'>
          {
            pitStops.length == 0 && <h3> No data available for pitstops</h3>
          }
        </div>
        <div className="chart">
        <ResponsiveContainer width="100%" height="70%">
        <BarChart
          width={500}
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
          <YAxis type='number' domain={[0, 'dataMax+200']}/>
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar className='bar' dataKey="pit_stop_time" fill="#ff8800" background={{ fill: '#bbb' }} />
        </BarChart>
      </ResponsiveContainer>
        </div>
    </div>
  )
}

export default Featured