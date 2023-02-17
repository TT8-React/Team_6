import React from "react";
import { DivInput, Input, Label } from "./style";

const InputCard = ({ label, disc, typeInput }) => {
  return (
    <DivInput>
      <Label htmlFor="">{label}</Label>
      <Input type={typeInput} name="" id="" placeholder={disc} />
    </DivInput>
  );
};

export default InputCard;
