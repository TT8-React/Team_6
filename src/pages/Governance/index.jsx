import React from "react";

import ChartCard from "../../components/ChartCard";
import LayOut from "../../components/LayOut";

import img1 from "../../assets/photos/LineChart.png";
import img2 from "../../assets/photos/charts.png";

import styled from "styled-components";

import { Flex } from "../../global/style";

const AllCharts = styled.div`
  position: absolute;
  top: 8rem;
  left: 2rem;
  z-index: -1;
`;
const Governance = () => {
  return (
    <LayOut title="Governance">
      <AllCharts>
        <Flex align="center" gap="39">
          <div>
            <ChartCard image={img1} width="601" />
          </div>
          <div>
            <ChartCard image={img1} width="601" />
          </div>
        </Flex>
        <div>
          <ChartCard image={img2} marginLeft="-2" />
        </div>
      </AllCharts>
    </LayOut>
  );
};

export default Governance;
