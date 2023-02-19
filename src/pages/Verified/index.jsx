import React from "react";
import FormCard from "../../components/FormCard";
import FormTitle from "../../components/FormTitle";

import succsess from "../../assets/photos/succsess.png";
import NavButton from "../../components/NavButton";

import styled from "styled-components";

import { Flex } from "../../global/style";
import { NavLink } from "react-router-dom";

const Image = styled.img`
  width: 184px;
  height: 184px;
  margin-top: 59px;
`;

const DivNavButton = styled.div`
  margin-top: 83px;
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
`;

const Verified = () => {
  return (
    <div>
      <FormCard>
        <FormTitle title="Verified" />
        <Flex justify="center">
          <Image src={succsess} alt="succsess" />
        </Flex>
        <DivNavButton>
          <NavLink to="/dashboard">
            <NavButton name="NEXT" />
          </NavLink>
        </DivNavButton>
      </FormCard>
    </div>
  );
};

export default Verified;
