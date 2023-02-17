import React from "react";
import styled from "styled-components";

const Buttons = styled.button`
  padding: 0px 16px;
  background: #000000;
  border-radius: 5px;
  color: white;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  height: 40px;
  cursor: pointer;
`;

const Button = ({ name }) => {
  return (
    <div>
      <Buttons type="submit">{name}</Buttons>
    </div>
  );
};

export default Button;
