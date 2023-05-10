
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserSignup from '../Pages/UserLoginSignup/UserSignup'
import UserLogin from '../Pages/UserLoginSignup/UserLogin'
import CartPage from '../Pages/Cart/CartPage'
import SingleProduct from '../Pages/Product/SingleProduct';
import Sofa from "../Pages/Product/Sofa";
import Home from "../Components/Home/Home";

import PrivateRoute from './PrivateRoute'

import Checkout from '../Pages/Payment/Checkout'


const MainRouter = () => {
  return (
    <div>

      

       <Routes>
    <Route path="/" element={<Home />} />
            <Route path="/sofas" element={<Sofa/>} />
            <Route path="/sofas/:id" element={<SingleProduct/>} />
            <Route path="*" element={<h4>404 Page not Found</h4>} />
            <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/login' element={<UserLogin/>}/>

        <Route path='/cart' element={<PrivateRoute><CartPage/></PrivateRoute>}/>

       
        <Route path='/checkout' element={<Checkout/>}/>

        </Routes>

    </div>

  )
}

export default MainRouter
