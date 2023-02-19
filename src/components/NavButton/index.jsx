import React from "react";

import styled from "styled-components";

const Navbtn = styled.button`
  color: #ff0000;
  font-weight: 700;
  font-size: 17px;
  line-height: 19px;
  border: none;
  cursor: pointer;
  background: #f8f8f8;
  margin-left: 0.3rem;
  margin-bottom: 32px;
`;

const Navbtn1 = styled.button`
  padding: 0px 16px;
  height: 40px;
  background: #000000;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;

const NavButton = ({ name, type }) => {
  if (type === "navigate") {
    return (
      <div>
        <Navbtn>{name}</Navbtn>
      </div>
    );
  } else {
    return (
      <div>
        <Navbtn1>{name}</Navbtn1>
      </div>
    );
  }
};

export default NavButton;
