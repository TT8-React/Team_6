import React from "react";
import FormCard from "../../components/FormCard";
import FormTitle from "../../components/FormTitle";

import Dots from "../../assets/photos/dots.png";
import Button from "../../components/Button";

import { Flex } from "../../global/style";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Span = styled.span`
  color: #ff0000;
  font-weight: 400;
  font-size: 18px;
`;

const DivImg = styled.div`
  margin-top: -2rem;
`;

const DivParagraph = styled.div`
  line-height: 39px;
`;

const DivButton = styled.div`
  margin-top: 75px;
  display: flex;
  justify-content: center;
`;

const Verification = () => {
  return (
    <div>
      <FormCard>
        <FormTitle title="Verification" />
        <form>
          <Flex justify="center" align="center" gap="11">
            <DivImg>
              <img src={Dots} alt="dot" />
            </DivImg>
            <DivParagraph>
              <p>
                You are sing up with this account please verify by this link
                <Span> www.loremipsum.com</Span>
              </p>
            </DivParagraph>
          </Flex>
          <DivButton>
            <NavLink to="/verified">
              <Button name="SUBMIT" />
            </NavLink>
          </DivButton>
        </form>
      </FormCard>
    </div>
  );
};

export default Verification;
