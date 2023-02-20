import React from "react";
import { DivInput, Input, Label } from "./style";

const InputCard = ({ label, disc, typeInput, id, value, onChangeFunction ,width}) => {
  if(width) {

    return (
      
      <DivInput >
      <Label htmlFor="">{label}</Label>
      <Input
        id={id}
        type={typeInput}
        name=""
        value={value}
        placeholder={disc}
        onChange={onChangeFunction}
        width={width}
        />
    </DivInput>
  );
}else {
  
  return (
      
    <DivInput >
    <Label htmlFor="">{label}</Label>
    <Input
      id={id}
      type={typeInput}
      name=""
      value={value}
      placeholder={disc}
      onChange={onChangeFunction}
      />
  </DivInput>
);
}
};

export default InputCard;
