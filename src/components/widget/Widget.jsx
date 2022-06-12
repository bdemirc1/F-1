import React, {useState, useEffect, useContext } from 'react'
import './Widget.scss';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import GroupWorkOutlinedIcon from '@mui/icons-material/GroupWorkOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { UserContext } from '../../UserContext';
import {Link} from "react-router-dom";


export default function Widget({ type }) {
    const {raceid} = useContext(UserContext)
    const [race, setRace] = useState({});
    const [topConstructor, setTopConstructor] = useState({});
    const [topDriver, setTopDriver] = useState({});

    
      const getRace = async () => {
                try{
                    const response = await fetch(`http://localhost:5555/races/${raceid}`);
                    const jsonData = await response.json();
                    if(jsonData){ setRace(jsonData)};
                }catch(err){
                    console.error(err.message);
                }
        }

        const getTopConstructor = async () => {
            try{
                const response = await fetch(`http://localhost:5555/top_constructor/${raceid}`);
                const jsonData = await response.json();
                if (jsonData) {setTopConstructor(jsonData)};
            }catch(err){
                console.error(err.message);
            }
        }

        const getTopDriver = async () => {
            try{
                const response = await fetch(`http://localhost:5555/top_driver/${raceid}`);
                const jsonData = await response.json();
                if (jsonData) {setTopDriver(jsonData)};
            }catch(err){
                console.error(err.message);
            }
        }  
    
     /*   const fetchAll = async () => {
            try{
                const results = await Promise.all([
                    fetch(`http://localhost:5555/races/${raceid}`).then((resRace) => resRace.json()).then((raceJson) => setRace(raceJson) ),
                    fetch(`http://localhost:5555/top_constructor/${raceid}`).then((resTopConstructor) => resTopConstructor.json()).then((topConsJson) => setTopConstructor(topConsJson)),
                    fetch(`http://localhost:5555/top_driver/${raceid}`).then((resTopDriver) => resTopDriver.json()).then((topDriverJson) => setTopDriver(topDriverJson)),
                ])
                //console.log(results)
            }catch(err){
                console.error(err.message);
            }
        }   */

    useEffect(()=>{
        getRace();
    }, [raceid]);

    useEffect(()=>{
        getTopConstructor();
    }, [raceid]);

    useEffect(()=>{
        getTopDriver();
    }, [raceid]);

    console.log(race);
    console.log(topConstructor);
    console.log(topDriver); 

    let data;
    switch(type){
        case 'race':
            data ={
                title:race.name,
                isDate: true,
                link: '',
                icon: <DateRangeOutlinedIcon className='icon'/>,
                info: race.date   
            };
        break;
        case 'constructor':
            data ={
                title:'Top Constructor Standing',
                isDate: false,
                link: <Link to='/constructor_standings'  style={{ textDecoration:"none", color:"#03b5fc" }}>Constructor Standings</Link>,
                icon:  <GroupWorkOutlinedIcon className='icon'/>,
                info: topConstructor.name
            };
        break;
        case 'driver':
            data ={
                title:'Top Driver Standing',
                isDate: false,
                link: <Link to='/constructor_standings'  style={{ textDecoration:"none", color: "#03b5fc"}}>Driver Standings</Link>,
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
