import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminHome from "../Pages/Home_Admin";
import AdminLogin from "../Pages/Login_Admin";
import AdminRegister from "../Pages/Register_Admin";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/register" element={<AdminRegister />} />
    </Routes>
  );
};

export default AdminRoutes;
