import React, { useState } from "react";
import RightArrow from "../../assets/photos/rightArrow.png";
import {
  AnalyticsSubMenu,
  Logo,
  ReportSubMenu,
  SideBarBox,
  SideBarList,
} from "./style";
import { StyledLink } from "./../../pages/Login/style";

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
          <StyledLink to="/report">
            <li>My Report</li>
          </StyledLink>
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
          <li>
            <StyledLink to="/enviroment">Enviroment</StyledLink>
          </li>
          <li>
            <StyledLink to="/social">Social</StyledLink>
          </li>
          <li>
            <StyledLink to="/Governance">Governance</StyledLink>
          </li>
        </AnalyticsSubMenu>
      </SideBarList>
    </SideBarBox>
  );
}
