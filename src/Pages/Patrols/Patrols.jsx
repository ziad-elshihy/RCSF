import { useContext } from 'react'
import { dataContext } from '../../context/Context';


import './patrols.css'

const Patrols = () => {
   const { lang } = useContext(dataContext)
   return (
      <main className='patrols'>
         <h2 className="main-title">
            {
               lang
                  ? 'دوريات'
                  : 'Patrols'
            }
         </h2>
      </main>
   )
}

export default Patrols
