import React from "react";

import ChartCard from "../../components/ChartCard";
import LayOut from "../../components/LayOut";

import img1 from "../../assets/photos/LineChart.png";
import img2 from "../../assets/photos/charts.png";

import styled from "styled-components";

import { Flex } from "../../global/style";

const AllCharts = styled.div`
padding:30px;
`;
const Governance = () => {
  return (
    <LayOut title="Governance">
      <AllCharts>
        <Flex align="center" gap="39">
          <div>
            <ChartCard image={img1} width="557" />
          </div>
          <div>
            <ChartCard image={img1} width="557" />
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
