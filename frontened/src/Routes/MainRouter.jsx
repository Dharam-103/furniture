import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserSignup from '../Pages/UserLoginSignup/UserSignup'
import UserLogin from '../Pages/UserLoginSignup/UserLogin'
import CartPage from '../Pages/Cart/CartPage'

const MainRouter = () => {
  return (
    <Routes>
      <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/cart' element={<CartPage/>}/>
    </Routes>
  )
}

export default MainRouter
