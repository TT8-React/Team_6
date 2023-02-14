import React from "react";
import styled from "styled-components";
import SideBar from "../SideBar";

const LayOutBox = styled.div`
  height: 100vh;
  display: flex;
`;

export default function LayOut(children) {
  return (
    <LayOutBox>
      <SideBar />
    </LayOutBox>
  );
}
