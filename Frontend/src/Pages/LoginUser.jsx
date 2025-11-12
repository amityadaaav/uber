import React from 'react'

const LoginUser = () => {
  return (
    <div className='p-7 h-screen flex justify-center items-center'>
       <img className="w-16 ml-8" src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />

      <form action="">
        <h2>Login User</h2>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" />
          <label htmlFor="email">Password:</label>
          <input type="password" /> 
          </div>
      </form>
    </div>
  )
}

export default LoginUser
