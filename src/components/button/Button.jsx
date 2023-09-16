import React, { useContext } from 'react'
import { dataContext } from '../../context/Context';

import './button.css'
const Button = () => {
   const { lang, setLang } = useContext(dataContext)
   return (
      <button
         type='button'
         onClick={() => { setLang(!lang) }}
      >
         {
            lang ? "English" : "العربية"
         }
      </button>
   )
}

export default Button
