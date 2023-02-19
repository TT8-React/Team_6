import React from "react";
import FormCard from "../../components/FormCard";

import Button from "../../components/Button";
import FormQuestion from "../../components/FormQuestion";
import FormTitle from "../../components/FormTitle";
import InputCard from "../../components/InputCard";
import NavButton from "../../components/NavButton";

import { DivButton, DivQuestion, StyledLink } from "./style";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <FormCard>
        <FormTitle title="LOG IN" />
        <form>
          <InputCard label="Email ID" disc="Enter Email ID" typeInput="email" />
          <InputCard
            label="Password"
            disc="Enter password"
            typeInput="Password"
          />
            <StyledLink to="/forgotpassword">

          <FormQuestion Ques="Forgotpassword ?" />
            </StyledLink>
          <DivButton>
            <Button name="LOG IN" />
          </DivButton>
          <DivQuestion>
            <FormQuestion Ques="Don’t have an account ?" />
            <NavLink to="/signup">
              <NavButton name="Sign up" type="navigate" />
            </NavLink>
          </DivQuestion>
        </form>
      </FormCard>
    </div>
  );
};

export default Login;
