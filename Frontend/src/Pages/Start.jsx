import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className="h-screen bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1557404763-69708cd8b9ce?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764')] pt-8 flex justify-between flex-col w-full bg-red-400">
      <img className="w-16 ml-8" src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="Uber logo" />
      <div className='bg-white py-4 px-4 '>
        <h2 className='text-3xl font-bold '>Get started with Uber</h2>
        <Link to="/loginUser" className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-2'>Continue</Link>
      </div>
    </div>
  )
}

export default Start
