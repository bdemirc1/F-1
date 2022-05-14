import Home from './pages/home/Home';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Drivers from './pages/drivers/Drivers';
import Constructors from './pages/constructors/Constructors';
import AddDriver from './pages/addDriver/AddDriver';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home/>}/>
                        <Route path='driver_standings' element={<Drivers/>}/>
                        <Route path='constructor_standings' element={<Constructors/>}/>
                        <Route path='addDriver' element= {<AddDriver/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App;