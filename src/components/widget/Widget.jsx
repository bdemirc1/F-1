import React, {useState, useEffect } from 'react'
import './Widget.scss';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import GroupWorkOutlinedIcon from '@mui/icons-material/GroupWorkOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


export default function Widget({ type }) {
    const [race, setRace] = useState({});
    const [topConstructor, setTopConstructor] = useState({});
    const [topDriver, setTopDriver] = useState({});

    
      /*  const getRace = async () => {
                try{
                    const response = await fetch("http://localhost:5555/races/1067");
                    const jsonData = await response.json();
                    if(jsonData){ setRace(jsonData)};
                }catch(err){
                    console.error(err.message);
                }
        }

        const getTopConstructor = async () => {
            try{
                const response = await fetch("http://localhost:5555/top_constructor");
                const jsonData = await response.json();
                if (jsonData) {setTopConstructor(jsonData)};
            }catch(err){
                console.error(err.message);
            }
        }

        const getTopDriver = async () => {
            try{
                const response = await fetch("http://localhost:5555/top_driver");
                const jsonData = await response.json();
                if (jsonData) {setTopDriver(jsonData)};
            }catch(err){
                console.error(err.message);
            }
        }   */
    
       const fetchAll = async () => {
            try{
                const results = await Promise.all([
                    fetch("http://localhost:5555/races/1067").then((resRace) => resRace.json()).then((raceJson) => setRace(raceJson) ),
                    fetch("http://localhost:5555/top_constructor").then((resTopConstructor) => resTopConstructor.json()).then((topConsJson) => setTopConstructor(topConsJson)),
                    fetch("http://localhost:5555/top_driver").then((resTopDriver) => resTopDriver.json()).then((topDriverJson) => setTopDriver(topDriverJson)),
                ])
                //console.log(results)
            }catch(err){
                console.error(err.message);
            }
        }  

    useEffect(()=>{
        fetchAll();
        
    }, []);

    console.log(race);
    console.log(topConstructor);
    console.log(topDriver); 

    let data;
    switch(type){
        case 'race':
            data ={
                title:race.name,
                isDate: true,
                link: 'See all races',
                icon: <DateRangeOutlinedIcon className='icon'/>,
                info: race.date   
            };
        break;
        case 'constructor':
            data ={
                title:'Top Constructor Standing',
                isDate: false,
                link: 'See all constructors',
                icon:  <GroupWorkOutlinedIcon className='icon'/>,
                info: topConstructor.name
            };
        break;
        case 'driver':
            data ={
                title:'Top Driver Standing',
                isDate: false,
                link: 'See all drivers',
                icon:  <PersonOutlineOutlinedIcon className='icon'/>,
                info: topDriver.forename + " " + topDriver.surname
                
            };
        break;
        default:
            break;
    }

  return (
    <div className='widget'>
        <div className="left">
            <span className='title'>{data.title}</span>
            <span className='date'>
                {data.icon} {data.info}
            </span>
            <span className='link'>{data.link}</span>
        </div>
        <div className="right">
            
        </div>

    </div>
  )
}
