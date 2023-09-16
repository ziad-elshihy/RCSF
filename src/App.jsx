import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Nav/Navbar';
import Slider from './components/Slider/Slider';
import ExecutiveDirector from './Pages/ExecutiveDirector/ExecutiveDirector';
import StrategicGoals from './Pages/StrategicGoals/StrategicGoals';

const App = () => {
   
   return (
      <BrowserRouter >
         <Navbar />
         <Routes >
            <Route path='/' element={<Slider />}  />
            <Route path='/director' element={<ExecutiveDirector  />} />
            <Route path='/StrategicGoals' element={<StrategicGoals />} />
            {/* <Route path='/explore/:mediaType' element={<Explore />} /> */} 
            {/* <Route path='*' element={<PageNotFound />} /> */}
         </Routes>
      </BrowserRouter>
   )
}

export default App
