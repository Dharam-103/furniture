import React from "react";
import styled from "styled-components";
import LoginForm from "../Components/Register-Login/LoginForm";

const AdminLogin = () => {
  return (
    <Wrapper>
      <Content>
        <Logo></Logo>
        <LoginForm />
      </Content>
    </Wrapper>
  );
};

// CSS

const Wrapper = styled.div`
  max-width: 60%;
  height: 100vh;
  margin: auto;
`;

const Content = styled.div`
  max-width: 60%;
  height: 650px;
  margin: 20px auto;
  border: 1px solid gray;
  border-radius: 5px;
`;

const Logo = styled.div``;

export default AdminLogin;
