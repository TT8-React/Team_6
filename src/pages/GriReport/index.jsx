import React from "react";
import Accordions from "../../components/Accordions";
import LayOut from "../../components/LayOut";
import NavButton from "../../components/NavButton";
import ReportDetails from "../../components/ReportDetails";
import { StyledLink } from "../Login/style";
import { Styledbtn } from "../Report/style";
import { Container } from "./../Dashboard/index";

const GriReport = () => {
  return (
    <LayOut title="Gri Report">
      <StyledLink to="/report">
        <Styledbtn>
          <NavButton name="back" />
        </Styledbtn>
      </StyledLink>
      <Container>
        <Accordions />
        <ReportDetails />
      </Container>
    </LayOut>
  );
};

export default GriReport;
