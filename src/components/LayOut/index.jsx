import React from "react";
import styled from "styled-components";
import Header from "../Header";
import SideBar from "../SideBar";

const LayOutBox = styled.div`
  display: flex;
`;

const RightBox = styled.div`
  width: calc(100% - 270px);
`;

export default function LayOut(props) {
  return (
    <LayOutBox>
      <SideBar />
      <RightBox>
        <Header title={props.title} />
        <div> {props.children} </div>
      </RightBox>
    </LayOutBox>
  );
}
