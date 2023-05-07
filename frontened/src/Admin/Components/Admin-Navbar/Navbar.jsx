import Brightness4Icon from "@mui/icons-material/Brightness4";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <SearchBox>
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </SearchBox>
        {/* Icons */}
        <NavIcons>
          <Icon>
            <LanguageIcon />
            <span>English</span>
          </Icon>

          <Icon>
            <NotificationsIcon />
          </Icon>

          <Icon>
            <ChatBubbleOutlineIcon />
          </Icon>

          <Icon>
            <Brightness4Icon />
          </Icon>
        </NavIcons>
      </Container>
    </Wrapper>
  );
};

// CSS
const Wrapper = styled.div`
  max-width: 100%;
  height: 95px;
  /* border: 1px solid red; */
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchBox = styled.div`
  display: flex;
  width: 340px;
  align-items: center;
  border: 1px solid grey;
  border-radius: 5px;
  margin: 30px 10px;
  input {
    height: 25px;
    width: 300px;
    padding: 5px;
    font-size: 16px;
    border: none;
    outline: none;
    background: transparent;
    ::placeholder {
      padding-left: 5px;
      font-size: 14px;
    }
  }
`;

const NavIcons = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  margin-right: 20px;
  span {
    margin-left: 10px;
  }
`;
export default Navbar;
