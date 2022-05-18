import Home from './pages/home/Home';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Drivers from './pages/drivers/Drivers';
import Constructors from './pages/constructors/Constructors';
import AddDriver from './pages/addDriver/AddDriver';
import { UserProvider} from './UserContext';
import "./style/dark.scss";
import { DarkModeContext } from './darkModeContext';
import { useContext } from 'react';


function App() {

    const {darkMode} = useContext(DarkModeContext);
  
    return (
        <div className={ darkMode ? "app dark" : "app"}>
            <UserProvider>
                <BrowserRouter>
                        <Routes>
                            <Route path="/">     
                                <Route index element={<Home/>}/>
                                <Route path="driver_standings" element={<Drivers/>}/>
                                <Route path='constructor_standings' element={<Constructors/>}/>
                                <Route path='addDriver' element= {<AddDriver/>}/>
                            </Route>
                        </Routes>
                </BrowserRouter>
            </UserProvider>
        </div>
    )
}

export default App;