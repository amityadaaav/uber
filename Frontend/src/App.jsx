import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import LoginUser from './Pages/LoginUser'
import CaptainLogin from './Pages/CaptainLogin'
import UserSignup from './Pages/UserSignup'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/loginUser' element={<LoginUser/>}/>
        <Route  path='/captainLogin' element={<CaptainLogin/>}/>
        <Route  path='/userSignup' element={<UserSignup/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
