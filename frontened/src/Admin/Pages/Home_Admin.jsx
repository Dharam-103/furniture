import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Admin-Navbar/Navbar";
import Sidebar from "../Components/Sidebar";
import Widget from "../Components/Admin-Home/Widget";
import { NavLink } from "react-router-dom";

const AdminHome = () => {
  return (
    <Wrapper>
      {/* Sidebar */}
      <SideDashboard>
        <Sidebar />
      </SideDashboard>
      {/* Home Page Contents */}
      <HomeContent>
        <Navbar />
        <Widget />
      </HomeContent>
      {/*  */}
      <br />
      <br />
      <NavLink to='/login'>
        <button>Login</button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
const SideDashboard = styled.div`
  flex: 1;
  border: 1px solid red;
`;
const HomeContent = styled.div`
  flex: 4;
`;

export default AdminHome;
