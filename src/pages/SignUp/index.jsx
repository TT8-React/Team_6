import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import FormCard from "../../components/FormCard";
import FormQuestion from "../../components/FormQuestion";
import FormTitle from "../../components/FormTitle";
import InputCard from "../../components/InputCard";
import NavButton from "../../components/NavButton";

import { DivButton, DivQuestion } from "../Login/style";

const SignUp = () => {
  return (
    <div>
      <FormCard>
        <FormTitle title="SIGN UP" />
        <form>
          <InputCard label="Name" disc="Enter Name" typeInput="text" />
          <InputCard label="Email ID" disc="Enter Email ID" typeInput="email" />
          <InputCard
            label="Password"
            disc="Enter password"
            typeInput="password"
          />
          <DivButton>
            <Button name="LOG IN" />
          </DivButton>
          <DivQuestion>
            <FormQuestion Ques="Already have an account ?" />

            <NavLink to="/login">
            
            <NavButton name="Login" type="navigate" />
            </NavLink>
          </DivQuestion>
        </form>
      </FormCard>
    </div>
  );
};

export default SignUp;
