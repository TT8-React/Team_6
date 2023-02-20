import React, { useState } from "react";
import CustomizeReportModal from "../../components/CustomizeReportModal";
import ReportCard from "../../components/ReportCard";
import { Allreports, Styledbtn, Styledline } from "./style";
import LayOut from "./../../components/LayOut/index";
import NavButton from "./../../components/NavButton/index";
import { StyledLink } from "../Login/style";

const Report = () => {
  const [showCustomizeModal, setShowCustomizeModal] = useState(false);

  const handleReportClick = () => {
    setShowCustomizeModal(true);
  };

  const handleCloseModal = () => {
    setShowCustomizeModal(false);
  };

  return (
    <LayOut title="Report">
      <StyledLink to="/createReport">
      <Styledbtn>
        <NavButton name="create report" />
      </Styledbtn>
      </StyledLink>
      <Styledline></Styledline>
      <Allreports>
        <StyledLink to="/sebiReport">
          <ReportCard title={"SEBI report"} />
        </StyledLink>
        <StyledLink to="/griReport">
          <ReportCard title={"GRI report"} />
        </StyledLink>
       
          <ReportCard title={"Customize report"} onClick={handleReportClick} />

        <CustomizeReportModal
          show={showCustomizeModal}
          handleClose={handleCloseModal}
        />
      </Allreports>
    </LayOut>
  );
};

export default Report;
