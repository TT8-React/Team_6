import React from "react";
import LayOut from "../../components/LayOut";
import NavButton from "../../components/NavButton";
import { Styledbtn } from "../Report/style";
import Accordions from "./../../components/Accordions/index";
import ReportDetails from "./../../components/ReportDetails/index";

const SebiReport = () => {
  return (
    <LayOut title="SEBI Report">
      <Styledbtn>
        <NavButton name="back" />
        <Accordions />
        <ReportDetails />
      </Styledbtn>
    </LayOut>
  );
};

export default SebiReport;
