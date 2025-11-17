import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import LoginUser from './Pages/LoginUser'
import CaptainLogin from './Pages/CaptainLogin'
import UserSignup from './Pages/UserSignup'
import CaptainSignup from './Pages/CaptainSignup'
import Start from "./Pages/Start"
import UserProtectedwrapper from './Pages/UserProtectedwrapper'
import Userlogout from "./Pages/Userlogout"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Start />} />

          <Route path='/loginUser' element={<LoginUser />} />
          <Route path='/captainLogin' element={<CaptainLogin />} />
          <Route path='/userSignup' element={<UserSignup />} />
          <Route path='/captainSignup' element={<CaptainSignup />} />

          {/* PROTECTED ROUTE */}
          <Route
            path='/home'
            element={
              <UserProtectedwrapper>
                <Home />
              </UserProtectedwrapper>
            }
          />
          <Route path='/logout' element={
            <UserProtectedwrapper>
            <Userlogout />
            </UserProtectedwrapper>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
