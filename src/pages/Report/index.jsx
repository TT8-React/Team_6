import React, { useState } from "react";
import CustomizeReportModal from "../../components/CustomizeReportModal";
import ReportCard from "../../components/ReportCard";
import { Allreports, Styledbtn, Styledline } from "./style";
import LayOut from "./../../components/LayOut/index";
import NavButton from "./../../components/NavButton/index";

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
      <Styledbtn>
        <NavButton name="create report" />
      </Styledbtn>
      <Styledline></Styledline>
      <Allreports>
        <ReportCard title={"SEBI report"} />
        <ReportCard title={"GRI report"} />
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
