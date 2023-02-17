import React from "react";
import FormQuestion from "../FormQuestion";
import FormTitle from "../FormTitle";
import InputCard from "../InputCard";
import { DivFormCard } from "./style";

const FormCard = () => {
  return (
    <DivFormCard>
      <FormTitle title="LOG IN" />
      <InputCard label="Email ID" disc="Enter Email ID" typeInput="email" />
      <InputCard label="Password" disc="Enter password" typeInput="Password" />
      <FormQuestion Ques="Forgotpassword ?" />
    </DivFormCard>
  );
};

export default FormCard;
