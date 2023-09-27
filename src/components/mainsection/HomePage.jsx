import image from '../../assets/images/rscf (Large).png'
import { useContext, useState } from 'react'
import { dataContext } from '../../context/Context';


import "./home.css"

function HomePage() {
   const { lang } = useContext(dataContext)
   return (
      <div className='slide__s'>
         <div className='image container'>
            <img className="big-logo" src={image} alt="Logo" />
            {
               lang
                  ? <h2>المركز الإقليمي للتمويل المستدام</h2>
                  : <h2 className='text-45'>Regional Center For Sustainable Finance</h2>
            }
         </div>
      </div>
   )
}

export default HomePage