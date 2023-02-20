import React from "react";
import LayOut from "../../components/LayOut";
import NavButton from "../../components/NavButton";
import ReportTable from "../../components/ReportTable";
import { StyledLink } from "../Login/style";
import { Styledbtn } from "../Report/style";
import { Container } from "./../Dashboard/index";

const MyReport = () => {
  return (
    <LayOut title="My Report">
      <StyledLink to="/dashboard">
        <Styledbtn>
          <NavButton name="back" />
        </Styledbtn>
      </StyledLink>
      <Container>
        <ReportTable />
      </Container>
    </LayOut>
  );
};

export default MyReport;
