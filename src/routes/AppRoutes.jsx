import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/login.signin/login'
import Signin from '../pages/login.signin/Signin'
import Forgotpassword from '../pages/login.signin/ForgotPassword'

function AppRoutes() {
  return (
  <>
      <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path='/forgotpassword' element={<Forgotpassword/>}/>
     </Routes>
    </BrowserRouter>
  </>
  )
}

export default AppRoutes
