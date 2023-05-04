import React from "react";
import styled from "styled-components";
import Sidebar from "../Components/Sidebar";

const AdminHome = () => {
  return (
    <Wrapper>
      <SideDashboard>
        <Sidebar />
      </SideDashboard>
      <HomeContent>

      </HomeContent>
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
`

export default AdminHome;
