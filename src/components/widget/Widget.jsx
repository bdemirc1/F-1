import React, {useState, useEffect} from 'react'
import './Widget.scss';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import GroupWorkOutlinedIcon from '@mui/icons-material/GroupWorkOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


export default function Widget({ type }) {
    const [race, setRace] = useState({});
    const [topConstructor, setTopConstructor] = useState([]);
    const [topDriver, setTopDriver] = useState([]);

    const getRace = async () => {
        try{
            const response = await fetch("http://localhost:5555/races/1067");
            const jsonData = await response.json();
            setRace(jsonData);
        }catch(err){
            console.error(err.message);
        }
    }

    const getTopConstructor = async () => {
        try{
            const response = await fetch("http://localhost:5555/top_constructor");
            const jsonData = await response.json();
            setTopConstructor(jsonData);
        }catch(err){
            console.error(err.message);
        }
    }

    const getTopDriver = async () => {
        try{
            const response = await fetch("http://localhost:5555/top_driver");
            const jsonData = await response.json();
            setTopDriver(jsonData);
        }catch(err){
            console.error(err.message);
        }
    }

    useEffect(()=>{
        getRace();
        getTopConstructor();
        getTopDriver();
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
                info: topConstructor[0].name
            };
        break;
        case 'driver':
            data ={
                title:'Top Driver Standing',
                isDate: false,
                link: 'See all drivers',
                icon:  <PersonOutlineOutlinedIcon className='icon'/>,
                info: topDriver[0].forename + " " + topDriver[0].surname
                
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
