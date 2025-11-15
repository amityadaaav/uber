import React, { useState } from 'react'
import MyContext from './CreateContext'

const Provider = ({children}) => {
    const [user,setUser]=useState("amit")
  return (
    <div>
        <MyContext.Provider value={{user,setUser}}>
              {children}
        </MyContext.Provider>
    
    </div>
  )
}

export default Provider
