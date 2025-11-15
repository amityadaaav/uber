
import React from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [captaindata, setCaptaindata] = React.useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setCaptaindata({ email, password, firstname, lastname });
    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
    console.log(captaindata);
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-center items-center bg-gray-50">

      {/* Logo */}
      <img
        className="w-20 mb-8"
        src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg"
        alt="uber"
      />

      {/* Signup Form */}
      <form
        className="w-full max-w-sm bg-white p-7 shadow-lg rounded-xl border"
        onSubmit={handleRegister}
      >
        <h2 className="text-xl font-semibold mb-6 text-center">Signup Captain</h2>

        {/* First & Last Name in Same Row */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-lg font-medium mb-1">Firstname:</label>
            <input
              className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full focus:outline-none focus:ring-2 focus:ring-black"
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>

          <div className="w-1/2">
            <label className="block text-lg font-medium mb-1">Lastname:</label>
            <input
              className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full focus:outline-none focus:ring-2 focus:ring-black"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>

        {/* Email */}
        <label className="block text-lg font-medium mb-1">Email:</label>
        <input
          className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full focus:outline-none focus:ring-2 focus:ring-black"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <label className="block text-lg font-medium mb-1">New Password:</label>
        <input
          className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full focus:outline-none focus:ring-2 focus:ring-black"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Register Button */}
          <Link
                  className="bg-[#111] text-white font-semibold mt-5 py-3 rounded flex items-center justify-center w-full max-w-sm shadow"
                  to="/captainLogin"
                  onClick={handleRegister}
                >    Register  </Link>

        {/* Login Redirect */}
        <Link
          className="text-blue-600 text-center block underline"
          to="/captainLogin"
        >
          Login as Captain
        </Link>
      </form>

      {/* Bottom Info Text */}
      <span className="text-sm text-gray-700 mt-4 text-center px-3">
        You will register as a User and enjoy all Uber ride features.
      </span>
    </div>
  );
};

export default CaptainSignup;

