import React, { useState } from 'react'
import CaptainContext from './CreateContextCaptain'

const CaptainProvider = ({children}) => {
    const [captain,setCaptain]=useState(" ")
  return (
    <div>
        <CaptainContext.Provider value={{captain,setCaptain}}>
              {children}
        </CaptainContext.Provider>
    
    </div>
  )
}

export default CaptainProvider