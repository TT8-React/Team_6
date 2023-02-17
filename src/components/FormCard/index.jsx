import React from "react";
import Button from "../Button";
import FormQuestion from "../FormQuestion";
import FormTitle from "../FormTitle";
import InputCard from "../InputCard";
import { DivButton, DivFormCard } from "./style";

const FormCard = () => {
  return (
    <DivFormCard>
      <FormTitle title="LOG IN" />
      <InputCard label="Email ID" disc="Enter Email ID" typeInput="email" />
      <InputCard label="Password" disc="Enter password" typeInput="Password" />
      <FormQuestion Ques="Forgotpassword ?" />
      <DivButton>
        <Button name="LOG IN" />
      </DivButton>
    </DivFormCard>
  );
};

export default FormCard;
