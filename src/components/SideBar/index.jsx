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
        <li>
          <StyledLink to="/dashboard">Dashboard </StyledLink>
        </li>

        <li>
          <StyledLink to="/companyDetails"> Company details </StyledLink>
        </li>
        <li onClick={HandleReport}>
          <StyledLink to="/report">Report </StyledLink>

          <img
            style={
              ReportMenu
                ? { transform: "rotate(90deg)", transition: ".5s" }
                : { transition: ".5s" }
            }
            src={RightArrow}
            alt="arrow"
          />
        </li>
        <ReportSubMenu display={ReportMenu ? "block" : "none"}>
          <StyledLink to="/report">
            <li>My Report</li>
          </StyledLink>
        </ReportSubMenu>

        <StyledLink to="/tabs">
          <li>Data upload</li>
        </StyledLink>
        <li onClick={HandleAnalytics}>
          Analytics
          <img
            style={
              AnalyticsMenu
                ? { transform: "rotate(90deg)", transition: ".5s" }
                : { transition: ".5s" }
            }
            src={RightArrow}
            alt="arrow"
          />
        </li>
        <AnalyticsSubMenu display={AnalyticsMenu ? "block" : "none"}>
          <li>
            <StyledLink to="/environment">Enviroment</StyledLink>
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
