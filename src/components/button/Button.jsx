import React, { useContext } from 'react'
import { dataContext } from '../../context/Context';

import './button.css'
const Button = () => {
   const { lang, setLang } = useContext(dataContext)
   return (
      <button
      className='language'
         type='button'
         onClick={() => { setLang(!lang) }}
      >
         {
            lang ? "En" : "ع"
         }
      </button>
   )
}

export default Button
