import React from "react";
import styled from "styled-components";
import { useAdminContext } from "../../contexts/AdminContext";

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
  const { details } = useAdminContext();
  return (
    <Card>
      <div>
        <Title>Name</Title>
        <Text>{details?.username}</Text>
      </div>
      <div>
        <Title>Test 1</Title>
        <Text>{details?.test1}</Text>
      </div>
      <div>
        <Title>Test 2</Title>
        <Text>{details?.test2}</Text>
      </div>{" "}
      <div>
        <Title>Test 3</Title>
        <Text>{details?.test3}</Text>
      </div>{" "}
      <div>
        <Title>Test 4</Title>
        <Text>{details?.test4}</Text>
      </div>{" "}
      <div>
        <Title>Test 5</Title>
        <Text>{details?.test5}</Text>
      </div>{" "}
      <div>
        <Title>Test 6</Title>
        <Text>{details?.test6}</Text>
      </div>
    </Card>
  );
};

export default DetailsCard;
