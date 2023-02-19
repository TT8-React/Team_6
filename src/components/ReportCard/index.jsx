import React from "react";
import styled from "styled-components";

const ReportDiv = styled.div`
  width: 302px;
  height: 169px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #d9d9d9;
  border-radius: 8px;
  cursor: pointer;
`;

const Reports = styled.div`
  width: 57px;
  height: 48px;

  background: #a5a5a5;
`;

const ReportTitle = styled.p`
  height: 22px;

  font-family: "Arial";
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  display: flex;
  justify-content: center;
`;
const ReportCard = ({ title, onClick }) => {
  return (
    <ReportDiv onClick={onClick}>
      <Reports></Reports>
      <ReportTitle>{title}</ReportTitle>
    </ReportDiv>
  );
};

export default ReportCard;
