import React from "react";
import styled from "styled-components";

const DivImg = styled.div`
  width: ${(props) => (props.width ? props.width + "px" : "100%")};
  height: 400px;
  background: #f9f9f9;
  border: 1px solid #969696;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 31px;
  overflow: hidden;
`;

const Img = styled.img`
  margin-left: ${(props) =>
    props.marginLeft ? props.marginLeft + "rem" : "0rem"};
  padding: 6px;
`;

const HeadingTitle = styled.h2`
  margin-bottom: 27px;
  font-family: "Arial";
`;

const ChartCard = ({ name, image, width, marginLeft }) => {
  return (
    <div>
      <HeadingTitle>{name}</HeadingTitle>
      <DivImg width={width}>
        <Img src={image} alt="images" marginLeft={marginLeft} />
      </DivImg>
    </div>
  );
};

export default ChartCard;
