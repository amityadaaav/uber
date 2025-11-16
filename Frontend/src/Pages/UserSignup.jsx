import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyContext from '../Context/CreateContext';
import ReCAPTCHA from "react-google-recaptcha";

const UserSignup = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [captchaValue, setCaptchaValue] = React.useState("");

  const navigate = useNavigate();
  const { user, setUser } = React.useContext(MyContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please complete the CAPTCHA!");
      return;
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/Signup`, {
        Firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        captchaToken: captchaValue  // <-- Send token to backend
      });

      console.log("RESPONSE:", res.data);

      if (res.status === 200) {
        alert("User Registered Successfully");

        setUser(res.data.user);
        localStorage.setItem("token", res.data.token);

        setEmail("");
        setPassword("");
        setFirstname("");
        setLastname("");

        navigate("/loginUser");
      }
    } catch (error) {
      console.log("Signup Error:", error);
      alert(error.response?.data?.message || "Signup Failed");
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-center items-center bg-gray-50">

      <img
        className="w-20 mb-8"
        src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg"
        alt="uber"
      />

      <form
        className="w-full max-w-sm bg-white p-7 shadow-lg rounded-xl border"
        onSubmit={handleRegister}
      >
        <h2 className="text-xl font-semibold mb-6 text-center">Signup User</h2>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-lg font-medium mb-1">Firstname:</label>
            <input
              className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full"
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>

          <div className="w-1/2">
            <label className="block text-lg font-medium mb-1">Lastname:</label>
            <input
              className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>

        <label className="block text-lg font-medium mb-1">Email:</label>
        <input
          className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block text-lg font-medium mb-1">New Password:</label>
        <input
          className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* ✔ reCAPTCHA added here */}
        <ReCAPTCHA
          sitekey={`${import.meta.env.VITE_CAPTCHA_SITE_KEY}`}   
          onChange={(value) => setCaptchaValue(value)}
        />

        <button
          className="bg-[#111] text-white font-semibold mt-5 py-3 rounded flex items-center justify-center w-full"
          type='submit'
        >
          Register
        </button>

        <Link
          className="text-blue-600 text-center block underline"
          to="/loginUser"
        >
          Login as User
        </Link>
      </form>

      <span className="text-sm text-gray-700 mt-4 text-center px-3">
        You will register as a User and enjoy all Uber ride features.
      </span>
    </div>
  );
};

export default UserSignup;
