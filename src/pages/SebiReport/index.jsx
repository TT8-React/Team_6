import React from "react";
import LayOut from "../../components/LayOut";
import NavButton from "../../components/NavButton";
import { StyledLink } from "../Login/style";
import { Styledbtn } from "../Report/style";
import Accordions from "./../../components/Accordions/index";
import ReportDetails from "./../../components/ReportDetails/index";
import { Container } from './../Dashboard/index';

const SebiReport = () => {
  return (
    <LayOut title="SEBI Report">

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

export default SebiReport;
