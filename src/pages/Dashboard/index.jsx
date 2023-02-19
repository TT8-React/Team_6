import React from "react";

import LayOut from "../../components/LayOut";
import ChartCard from "../../components/ChartCard";

import img1 from "../../assets/photos/LineChart.png";
import img2 from "../../assets/photos/charts-PIE.png";
import img3 from "../../assets/photos/charts.png";

import { Flex } from "../../global/style";

import styled from "styled-components";

export const AllCharts = styled.div`
padding:30px;
`;

const Dashboard = () => {
  return (
    <LayOut title="Dashboard">
      
      <AllCharts>
        <Flex align="center" gap="39">
          <div>
            <ChartCard name="Chart 1" image={img1} width="601" />
          </div>
          <div>
            <ChartCard name="Chart 2" image={img2} width="533" />
          </div>
        </Flex>
        <div>
          <ChartCard name="Chart 3" image={img3} marginLeft="-2" />
        </div>
      </AllCharts>
    </LayOut>
  );
};

export default Dashboard;
