import React from "react";
import styled from "styled-components";

import avatar from "../../assets/photos/Ellipse.png";

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

export default function Header(props) {
  return (
    <HeaderBox>
      <Title>{props.title}</Title>
      <img src={avatar} alt="profile pic " />
    </HeaderBox>
  );
}
