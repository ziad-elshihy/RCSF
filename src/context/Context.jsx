import { createContext, useState } from "react"

export const dataContext = createContext()
export const Context = (props) => {
   const [lang, setLang] = useState(true)
   return (
      <dataContext.Provider value={{
         lang,
         setLang
         }}>
         {props.children}
      </dataContext.Provider>
   )
}