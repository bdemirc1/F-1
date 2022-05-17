import React, { useState, useEffect, useContext } from 'react'
import './Navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { UserContext } from '../../UserContext';

function Navbar() {
  const {raceid, setRaceid} = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [date, setDate] = useState("");
  const [data, setData] = useState([]);

  const onSearch = (searchTerm,xdate, xraceid) => {
    /* console.log("Search Term", searchTerm); */
    setSearchTerm(searchTerm);
    setDate(xdate);
    setRaceid(xraceid);
  }

  useEffect(() => {
    const getData = async () => {
        try{
            const response = await fetch("http://localhost:5555/races");
            const jsonData = await response.json();
            if (jsonData){
                setData(jsonData)
            }
            else {console.log("json data empty")};
            
        }catch(err){
            console.error(err.message);
        }
    }
    getData()
}, []);
  console.log("Raceid", raceid);
  console.log(data);
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type='text' placeholder='Search' value={`${searchTerm}`} onChange={(e)=>{
            setSearchTerm(e.target.value);
          }}/>
         
          <div className='dropdown'>
          {data.filter( item => {
            const lowerSearchTerm = searchTerm.toLocaleLowerCase();
            const raceName = item.name.toLocaleLowerCase();
            return lowerSearchTerm && raceName.startsWith(lowerSearchTerm) && raceName !== lowerSearchTerm;
          })
          
          .map(item => (
            <div onClick = {() => onSearch(item.name, item.date, item.raceid)}
                key={item.raceid}
                 className='dropdown-row'>{`${item.name}, ${item.date}`} 
                 </div> 
          ))}
        </div>
        </div>
        <SearchOutlinedIcon className='icon' onClick={() => onSearch(searchTerm, date, raceid)}/>
        
      </div>
    </div>
  )
}

export default Navbar