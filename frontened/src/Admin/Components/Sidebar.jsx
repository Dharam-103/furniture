import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookIcon from "@mui/icons-material/Book";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import StoreIcon from "@mui/icons-material/Store";
import React from "react";
import styled from "styled-components";
import Site_Logo from "../.././Admin/Images/logo.png";

const Sidebar = () => {
  return (
    <Wrapper>
      <Content>
        <Logo>
          <img
            style={{ width: "70%", height: "60px" }}
            src={Site_Logo}
            alt=""
          />
        </Logo>
        <hr />

        <div>
          <UnlistedItem>
            <Paragraph>MAIN</Paragraph>
            <ListedItem>
              <DashboardIcon />
              <Span>Dashboard</Span>
            </ListedItem>

            <Paragraph>LISTS</Paragraph>
            <ListedItem>
              <PersonOutlineIcon className="icon" />
              <Span>Users</Span>
            </ListedItem>

            <ListedItem>
              <StoreIcon className="icon" />
              <Span>Products</Span>
            </ListedItem>

            <ListedItem>
              <CreditCardIcon className="icon" />
              <Span>Orders</Span>
            </ListedItem>

            <ListedItem>
              <LocalShippingIcon className="icon" />
              <Span>Delivery</Span>
            </ListedItem>

            <Paragraph>USEFUL</Paragraph>
            <ListedItem>
              <InsertChartIcon className="icon" />
              <Span>Stats</Span>
            </ListedItem>

            <ListedItem>
              <BookIcon className="icon" />
              <Span>Logs</Span>
            </ListedItem>

            <ListedItem>
              <NotificationsNoneIcon className="icon" />
              <Span>Notifications</Span>
            </ListedItem>

            <Paragraph>SERVICES</Paragraph>
            <ListedItem>
              <SettingsSystemDaydreamIcon className="icon" />
              <Span>Sysyem Health</Span>
            </ListedItem>

            <ListedItem>
              <SettingsApplicationsIcon className="icon" />
              <Span>Settings</Span>
            </ListedItem>

            <ListedItem>
              <AccountCircleIcon className="icon" />
              <Span>Profile</Span>
            </ListedItem>

            <Paragraph>USER</Paragraph>
            <ListedItem>
              <LogoutIcon className="icon" />
              <Span>Logout</Span>
            </ListedItem>
          </UnlistedItem>
        </div>
      </Content>
    </Wrapper>
  );
};

// CSS Here :
const Wrapper = styled.div`
  max-width: 100%;
  height: 100vh;
  height: auto;
`;
const Content = styled.div`
  width: 90%;
  height: 100vh;
  margin: auto;
`;

const Logo = styled.div`
  height: 70px;
  width: 60%;
  margin-top: 15px;
`;

const UnlistedItem = styled.div`
  list-style: none;
`;

const ListedItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  :hover {
    background-color: #ece8ff;
  }
  .icon {
    font-size: 25px;
    color: #7451f8;
  }
`;

const Paragraph = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: #999;
  margin-top: 15px;
  margin-bottom: 5px;
`;

const Span = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #888;
  margin-left: 10px;
`;
export default Sidebar;
