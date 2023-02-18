import React, { useState } from "react";
import RightArrow from "../../assets/photos/rightArrow.png";
import {
  AnalyticsSubMenu,
  Logo,
  ReportSubMenu,
  SideBarBox,
  SideBarList,
} from "./style";

export default function SideBar() {
  const [ReportMenu, SetReportMenu] = useState(false);
  const [AnalyticsMenu, SetAnalyticsMenu] = useState(false);

  const HandleReport = () => {
    SetReportMenu((prevstate) => !prevstate);
  };

  const HandleAnalytics = () => {
    SetAnalyticsMenu((prevstate) => !prevstate);
  };

  return (
    <SideBarBox>
      <Logo>LOGO HERE</Logo>
      <SideBarList>
        <li className="active">Dashboard</li>
        <li>Company details</li>
        <li>
          Report{" "}
          <img
            style={
              ReportMenu
                ? { transform: "rotate(90deg)", transition: ".5s" }
                : { transition: ".5s" }
            }
            src={RightArrow}
            alt="arrow"
            onClick={HandleReport}
          />
        </li>
        <ReportSubMenu display={ReportMenu ? "block" : "none"}>
          <li>My Report</li>
        </ReportSubMenu>
        <li>Data upload</li>
        <li>
          Analytics{" "}
          <img
            style={
              AnalyticsMenu
                ? { transform: "rotate(90deg)", transition: ".5s" }
                : { transition: ".5s" }
            }
            src={RightArrow}
            alt="arrow"
            onClick={HandleAnalytics}
          />
        </li>
        <AnalyticsSubMenu display={AnalyticsMenu ? "block" : "none"}>
          <li>Enviroment</li>
          <li>Social</li>
          <li>Governance</li>
        </AnalyticsSubMenu>
      </SideBarList>
    </SideBarBox>
  );
}
