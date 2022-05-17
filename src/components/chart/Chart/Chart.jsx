import React, { useEffect, useState, useContext } from 'react'
import './Chart.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { UserContext } from '../../../UserContext';

function Chart() {
    const {raceid} = useContext(UserContext)
    const [lapTimes, setLapTimes] = useState([]);
    const [data, setData] = useState([]);

    const getLapTimes = async () => {
        try{
            const response = await fetch(`http://localhost:5555/fastestLapTime/${raceid}`).then((resLapTimes) => resLapTimes.json()).then((lapJson) => setLapTimes(lapJson) );
          /*   console.log(response);
            const jsonData = await response.json();
            if (jsonData){
                setLapTimes(jsonData)
            }
            else {console.log("json data empty")}; */
            
        }catch(err){
            console.error(err.message);
        }
    }

    const stringToTime = (time) => {
      if (time == "\\N"){
        return 0
      }else{
        const items = time.split(":");
        let min = parseInt(items[0]);
        const rest = items[1].split(".")
        let sec = parseInt(rest[0]);
        let splitsec = parseInt(rest[1])
        let total = min * 60 + sec + parseInt(splitsec/60);
        return total;
      }
    }

    const getDataForGraph = () => {
        if (lapTimes){
        setData(lapTimes.map((item) => {
            return {name: item.code, time: stringToTime(item.fastestlaptime)}
        }))
      }
        //console.log(data)
    }

    useEffect(() => {
        getLapTimes();
        return () => {};
    }, [raceid])

    useEffect( () => {
      getDataForGraph();
    }, [lapTimes]);

  console.log(lapTimes);
  return (
    <div className='chart'>
        <div className="title">Fastest Lap Times</div>
        <ResponsiveContainer width="100%" height="70%">
         <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="time" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" dy={10} offset={0} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="time" stroke="#8884d8" fillOpacity={1} fill="url(#time)" />
          {/* <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" /> */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart