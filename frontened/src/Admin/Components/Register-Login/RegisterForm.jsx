import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

// Register Form
const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  // import { toast } from "react-toastify";

  const navigate = useNavigate();

  // Form Validation
  const isValidate = () => {
    let isProceed = true;
    let errorMessage = "Please enter the value in ";

    if (name === null || name === "") {
      isProceed = false;
      errorMessage += " name";
    }

    if (email === null || email === "") {
      isProceed = false;
      errorMessage += " email";
    }

    if (phone === null || phone === "") {
      isProceed = false;
      errorMessage += " phone";
    }

    if (address === null || address === "") {
      isProceed = false;
      errorMessage += " address";
    }

    if (password === null || password === "") {
      isProceed = false;
      errorMessage += " password";
    }
    if (!isProceed) {
      toast.warning(errorMessage);
    }

    return isProceed;
  };

  // Handle Register
  const handleRegister = (e) => {
    e.preventDefault();
    const registerObj = {
      name,
      email,
      phone,
      address,
      password,
    };
    if (isValidate()) {
      axios
        .post(`http://localhost:8000/users`, registerObj)
        .then((res) => {
          if (res.status === 201) {
            toast.success("Your account is successfully created !!");
            navigate("/login");
            console.log(`Account Created Successfully`);
          }
        })
        .catch((err) => {
          console.log(err.message);
          toast.error("Failed :" + err.message);
        });
    }
  };

  //

  return (
    <Wrapper>
      <Content>
        <form onSubmit={handleRegister}>
          <DIV>
            <Paragraph>Name</Paragraph>
            <input
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Name"
            />
          </DIV>

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
            <Paragraph>Phone</Paragraph>
            <input
              value={phone}
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="Enter Phone Number"
            />
          </DIV>

          <DIV>
            <Paragraph>Address</Paragraph>
            <input
              value={address}
              name="address"
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Enter Address"
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

          <input type="submit" value="Register" />
        </form>
        <br />
        <p>
          Already a User ? <NavLink to="/login">Login</NavLink>
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

export default RegisterForm;
