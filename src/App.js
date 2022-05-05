import Home from './pages/home/Home';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Drivers from './pages/drivers/Drivers';
import Constructors from './pages/constructors/Constructors';
import Races from './pages/races/Races';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home/>}/>
                        <Route path='drivers' element={<Drivers/>}/>
                        <Route path='constructors' element={<Constructors/>}/>
                        <Route path='races' element= {<Races/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App;