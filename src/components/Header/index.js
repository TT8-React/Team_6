import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import avatar from "../../assets/photos/Ellipse.png";
import { useAuthContext } from "../../contexts/AuthContext";
import { Flex } from "../../global/style";

const HeaderBox = styled.div`
  background: #4f4f4f;
  padding: 17px 30px 17px 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 23px;
  line-height: 28px;
  color: #ffffff;
`;

const Title = styled.div`
  font-family: "Arial";
  font-weight: 600;
  font-size: 23px;
  line-height: 28px;
`;

const LogOutButton = styled.button`
  padding: 0px 16px;
  background: #ffffff;
  border-radius: 5px;
  color: white;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  height: 40px;
  cursor: pointer;
`;

export default function Header(props) {
    const { logout } = useAuthContext();

  return (
    <HeaderBox>
      <Title>{props.title}</Title>
      <Flex align="center" gap="10">
        <LogOutButton onClick={logout}>Logout</LogOutButton>
        <Link to="/profileDetails">
          <img src={avatar} alt="profile pic " />
        </Link>
      </Flex>
    </HeaderBox>
  );
}
