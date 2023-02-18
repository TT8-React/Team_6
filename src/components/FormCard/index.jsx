import React from "react";
import styled from "styled-components";

const DivFormCard = styled.div`
  background: #f8f8f8;
  border: 1px solid #000000;
  border-radius: 30px;
  width: 522px;
  padding: 65px 83px 32px 79px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const FormCard = ({ children }) => {
  return <DivFormCard>{children}</DivFormCard>;
};

export default FormCard;
