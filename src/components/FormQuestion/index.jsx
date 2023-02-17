import React from "react";
import styled from "styled-components";

const Question = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  display: flex;
  justify-content: flex-end;
  margin-top: -1rem;
`;

const FormQuestion = ({ Ques }) => {
  return (
    <div>
      <Question>{Ques}</Question>
    </div>
  );
};

export default FormQuestion;
