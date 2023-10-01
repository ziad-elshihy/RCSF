import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Nav/Navbar';
import ExecutiveDirector from './Pages/ExecutiveDirector/ExecutiveDirector';
import StrategicGoals from './Pages/StrategicGoals/StrategicGoals';
import Patrols from './Pages/Patrols/Patrols';
import Home from './Pages/Home';
import Regulations from './Pages/regulations/Reg';
import MissionVision from './Pages/mission&vision/MissionVision';
import Footer from './components/footer/Footer';
import { Context } from './context/Context.jsx';
import SustainableFinance from './Pages/sustainable finance/SustainableFinance';
import Reports from './Pages/reports/Reports';
import Discussion from './Pages/discussionPanel/Discussion';

const App = () => {

   return (
      <>
         <Context >
            <Navbar />
            <Routes >
               <Route path='/' element={<Home />} />
               <Route path='/director' element={<ExecutiveDirector />} />
               <Route path='/strategicGoals' element={<StrategicGoals />} />
               <Route path='/patrols' element={<Patrols />} />
               <Route path='/regulations' element={<Regulations />} />
               <Route path='/mission&vision' element={<MissionVision />} />
               <Route path='/sustainable-finance' element={<SustainableFinance />} />
               <Route path='/reports' element={<Reports />} />
               <Route path='/discussion-panel' element={<Discussion />} />
               {/* <Route path='*' element={<PageNotFound />} /> */}
            </Routes>
            <Footer />
         </Context >
      </>

   )
}

export default App
