import React, { useContext } from 'react'

import { dataContext } from '../../context/Context';
import './exclusive.css'
const ExecutiveDirector = () => {
   const { lang } = useContext(dataContext)
   return (
      <>
         <main className='director' >
            <div className='container'>
               {
                  lang
                     ? <h1>
                        أ.أحمد رشدي
                     </h1>
                     : <h1 className='exc-h1-en'>
                        MR.Ahmed Roushdy
                     </h1>
               }
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
