import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Nav/Navbar';
import ExecutiveDirector from './Pages/ExecutiveDirector/ExecutiveDirector';
import StrategicGoals from './Pages/StrategicGoals/StrategicGoals';
import Patrols from './Pages/Patrols/Patrols';
import Home from './Pages/Home';
import Regulations from './Pages/regulations/regulations';

const App = () => {
   
   return (
      <BrowserRouter >
         <Navbar />
         <Routes >
            <Route path='/' element={<Home />}  />
            <Route path='/director' element={<ExecutiveDirector  />} />
            <Route path='/StrategicGoals' element={<StrategicGoals />} />
            <Route path='/Patrols' element={<Patrols />} /> 
            <Route path='/Regulations' element={<Regulations />} /> 
            {/* <Route path='*' element={<PageNotFound />} /> */}
         </Routes>
      </BrowserRouter>
   )
}

export default App
