import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import FormCard from "../../components/FormCard";
import FormTitle from "../../components/FormTitle";
import InputCard from "../../components/InputCard";
import { StyledLink } from "../Login/style";

const DivInput = styled.div`
  margin-top: 30px;
`;
const DivBtn = styled.div`
  margin-top: 65px;
  display: flex;
  justify-content: center;
`;
const ForgotPass = () => {
  return (
    <div>
      <FormCard>
        <FormTitle title="FORGOT PASSWORD" />
        <form>
          <DivInput>
            <InputCard
              label="Email ID"
              disc="Enter Email ID"
              typeInput="email"
            />
          </DivInput>

          <DivBtn>
            <StyledLink to="/verification">
              <Button name="SUBMIT" />
            </StyledLink>
          </DivBtn>
        </form>
      </FormCard>
    </div>
  );
};

export default ForgotPass;
