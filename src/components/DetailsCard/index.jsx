import React from "react";
import styled from "styled-components";
import { detailCardData } from "../../mock/data";

const Card = styled.div`
  /* width: 1200px; */
  width: 92%;
  padding: 20px;
  background: #f2f2f2;
  border: 1px solid #989898;
  border-radius: 10px;
  & div {
    margin-bottom: 10px;
  }
`;

const Title = styled.h3`
  font-family: "Arial";
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
`;

const Text = styled.p`
  font-family: "Arial";
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #000000;
`;

const DetailsCard = () => {
  return (
    <Card>
      {detailCardData.map((item, index) => (
        <div key={index}>
          <Title>{item.title}</Title>
          <Text>{item.text}</Text>
        </div>
      ))}
    </Card>
  );
};

export default DetailsCard;
