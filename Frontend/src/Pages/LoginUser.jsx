import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginUser = () => {
   const [email,setEmail]=React.useState("");
   const [password,setPassword]=React.useState("");
   const[userdata,setUserdata]=React.useState("");
   const navigate=useNavigate();
   const handleSubmit=async (e)=>{
    e.preventDefault();
    const userData={
      email:email,
      password:password
    }
    const res=await axios.post(`${import.meta.env.VITE_BASE_URL}/Login`,userData);
    if(res.status===200){
      const data=res.data;
      setUserdata(data.user);
      localStorage.setItem("token",data.token); 
      navigate("/home");
    }
    setEmail("");
    setPassword("");

   }

  return (
    <div className="p-7 h-screen flex flex-col justify-center items-center">

      {/* Uber Logo */}
      <img className="w-16 mb-10" src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt=""/>

      {/* Login Form */}
      <form className="w-full max-w-sm bg-white p-7 shadow rounded-lg" onSubmit={handleSubmit}>
        <h2 className="text-lg font-medium mb-4 text-center">Login User</h2>

        <label htmlFor="email" className="text-lg font-medium mb-1">
          Email:
        </label>
        <input className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

        <label htmlFor="password" className="text-lg font-medium mb-1">Password:</label>
        <input className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className="bg-[#111] text-white font-semibold mb-4 py-3 rounded flex items-center justify-center w-full" type="submit" > Login</button>

        <Link className="text-blue-600 text-center block" to="/userSignup" >   Register as User </Link>
      </form>
      {/* Captain Login Button */}
      <Link
        className="bg-[#10b461] text-white font-semibold mt-5 py-3 rounded flex items-center justify-center w-full max-w-sm shadow"
        to="/captainLogin"
      >
        Login as Captain
      </Link>

    </div>
  )
}

export default LoginUser
