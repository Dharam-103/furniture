import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Validation
  const isValidate = () => {
    let isProceed = true;
    let errorMessage = "Please enter the value in ";

    if (email === null || email === "") {
      isProceed = false;
      errorMessage += " email";
    }
    if (password === null || password === "") {
      isProceed = false;
      errorMessage += " name";
    }
    if (!isProceed) {
      toast.warning(errorMessage);
    }

    return isProceed;
  };

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();

    if (isValidate()) {
      axios
        .post(`http://localhost:8000/users`, {
          email,
          password,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Wrapper>
      <Content>
        <form onSubmit={handleLogin}>
          <DIV>
            <Paragraph>Email</Paragraph>
            <input
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
            />
          </DIV>

          <DIV>
            <Paragraph>Password</Paragraph>
            <input
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
            />
          </DIV>

          <input type="submit" value="Login" />
        </form>
        <br />
        <p>
          Not a User ? <NavLink to="/register">Register</NavLink>
        </p>
      </Content>
    </Wrapper>
  );
};

// CSS
const Wrapper = styled.div`
  max-width: 85%;
  height: 100vh;
  margin: auto;
`;

const Content = styled.div`
  max-width: 100%;
  height: 650px;
  margin: 20px auto;
  border-radius: 5px;
`;

const DIV = styled.div``;

const Paragraph = styled.p``;
export default LoginForm;
