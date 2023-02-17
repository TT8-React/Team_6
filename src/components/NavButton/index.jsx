import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbtn = styled.button`
  color: #ff0000;
  font-weight: 700;
  font-size: 17px;
  line-height: 19px;
  border: none;
  cursor: pointer;
  background: #f8f8f8;
  margin-bottom: 1rem;
  margin-left: 0.3rem;
`;

const NavButton = ({ name, path }) => {
  return (
    <div>
      <NavLink to={`/${path}`}>
        <Navbtn>{name}</Navbtn>
      </NavLink>
    </div>
  );
};

export default NavButton;
