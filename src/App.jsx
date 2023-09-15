import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ExecutiveDirector from './Pages/ExecutiveDirector'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import StrategicGoals from './Pages/StrategicGoals'

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
