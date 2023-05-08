import { Routes, Route } from "react-router-dom";
import React from 'react';
import SingleProduct from '../Pages/Product/SingleProduct';
import Sofa from "../Pages/Product/Sofa";

const MainRouter = () => {
  return (
    <div>
       <Routes>
            <Route path="/sofas" element={<Sofa/>} />
            <Route path="/sofas/:id" element={<SingleProduct/>} />
            <Route path="*" element={<h4>404 Page not Found</h4>} />
        </Routes>
    </div>
  )
}

export default MainRouter
