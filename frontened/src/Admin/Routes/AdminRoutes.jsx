import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminHome from "../../Admin/Pages/AdminHome";
import AdminLogin from "../../Admin/Pages/AdminLogin";
import AdminRegister from "../../Admin/Pages/AdminRegister";

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
