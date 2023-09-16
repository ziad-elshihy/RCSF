import React, { useContext } from 'react'

import { dataContext } from '../../context/Context';
import './exclusive.css'
const ExecutiveDirector = () => {
   const { lang } = useContext(dataContext)
   return (
      <>
         <main>
            <div>
               <h1>
                  {
                     lang
                        ? 'أ.أحمد رشدي'
                        : 'MR.Ahmed Roushdy'
                  }
               </h1>
               <h2>
                  {
                     lang
                        ? 'المدير التنفيذي'
                        : 'Executive Director'
                  }
               </h2>
            </div>
         </main>
      </>
   )
}

export default ExecutiveDirector
