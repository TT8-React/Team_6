import React from "react";

import ChartCard from "../../components/ChartCard";
import LayOut from "../../components/LayOut";

import { Flex } from "../../global/style";

import img1 from "../../assets/photos/LineChart.png";
import img2 from "../../assets/photos/charts.png";
import { Container } from './../Dashboard/index';


const Environment = () => {
  return (
    <LayOut title="Environment">
      <Container>
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
      </Container>
    </LayOut>
  );
};

export default Environment;
