import React from 'react'
import { useNavigate } from 'react-router-dom';

const UserProtectedwrapper = ({children}) => {
    const token=localStorage.getItem("token")
    const navigate=useNavigate();
    console.log("token in wrapper",token);
    if(!token){
        navigate("/loginUser")
    }
  return (
    <div>
      {children}
    </div>
  )
}

export default UserProtectedwrapper
