import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
        <img className="w-16 ml-8" src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
        <div className='bg-white py-4 px-4 '>
            <h2 className='text-3xl font-bold '>Get started with uber</h2>
      <Link to="/loginUser" className='w-full bg-black text-white py-3 rounded mt-2'>Continoue</Link>
    </div>
    </div>
  )
}

export default Home
