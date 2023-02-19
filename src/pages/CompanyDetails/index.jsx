import React from "react";
import LayOut from "../../components/LayOut";
import NavButton from "../../components/NavButton";
import DetailsCard from "../../components/DetailsCard";
import { StyledLink } from "../Login/style";
import { Styledbtn } from "../Report/style";
import styled from "styled-components";
const Container = styled.div`
    padding: 30px;
`
export default function CompanyDetails() {
  return (
    <LayOut title="Company details">
      <Container>
        <Styledbtn>
          <StyledLink to="/ProfileDetails">
            <NavButton name="Edit company details" />
          </StyledLink>
        </Styledbtn>
        <DetailsCard />
      </Container>
    </LayOut>
  );
}
