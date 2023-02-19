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
  position: fixed;
  top: 0;
  width: calc(100% - 270px);
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 23px;
  line-height: 28px;
`;

const DivAvataImg = styled.div`
  width: 57px;
  height: 57px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AvataImg = styled.img`
  max-width: 100%;
`;

export default function Header(props) {
  return (
    <HeaderBox>
      <Title>{props.title}</Title>
      <DivAvataImg>
        <AvataImg src={avatar} alt="profile pic" />
      </DivAvataImg>
    </HeaderBox>
  );
}
