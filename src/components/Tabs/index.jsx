import { useState } from "react";
import styled from "styled-components";
import UploadComponent from '../UploadFile/index';
import Accordion from "../Accordion/index";
import InputCard from "../InputCard/index";
import { Flex } from "../../global/style";

const Container = styled.div`
  width: 90%;
  height: 100vh;
  margin: 55px auto;
  display: flex;
  flex-direction: column;
`;

const BlocTabs = styled.div`
  width: 902px;
  height: 69px;
  margin: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid #000000;
  border-radius: 5px;
`;

const TabsButton = styled.button`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  text-align: center;
  color: #000000;
  padding: 23px 8px;
  width: 50%;
  height: 100%;
  cursor: pointer;
  background: #FFFFFF;
  border: 1px solid #8F8F8F;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 5px;
  
  &.active-tabs {
    background: #EBEBF0;
    border: 1px solid #8F8F8F;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const ContentTabs = styled.div`
  flex-grow: 1;
`;

const Content = styled.div`
  background: white;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: none;

  & h2 {
    padding: 0px 0 5px 0px;
  }

  & hr {
    width: 100px;
    height: 2px;
    background: #222;
    margin-bottom: 5px;
  }

  & p {
    width: 100%;
    height: 100%;
  }

  &.active-content {
    display: block;
  }
`;

const FirstContnentBox = styled.div`
  width: 100%;
  display: flex;
`;

const AccordionBox = styled.div`
  width: 45%;
  display: flex;
`;

const AccordionInputsGroub = styled.div`
  display: flex;
  width: 55%;
  flex-direction: column;
`

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <Container>
      <div className="container">
        <BlocTabs>
          <TabsButton
            className={toggleState === 1 ? "active-tabs" : ""}
            onClick={() => toggleTab(1)}
          >
            Manual data tab
          </TabsButton>
          <TabsButton
            className={toggleState === 2 ? "active-tabs" : ""}
            onClick={() => toggleTab(2)}
          >
            Bulk upload tab
          </TabsButton>
        </BlocTabs>

        <ContentTabs>
          <Content className={toggleState === 1 ? "active-content" : ""}>

              <FirstContnentBox>

                <AccordionBox>
                  <Accordion />
                </AccordionBox>

                <AccordionInputsGroub>
                    <Flex justify="space-between">
                      <InputCard label='Report 1' disc="Enter Report 1" />
                      <InputCard label='Report 2' disc="Enter Report 2" />
                    </Flex>
                    <Flex justify="space-between">
                      <InputCard label='Report 3' disc="Enter Report 3" />
                      <InputCard label='Report 4' disc="Enter Report 4" />
                    </Flex>
                    <Flex justify="space-between">
                      <InputCard label='Report 5' disc="Enter Report 5" />
                      <InputCard label='Report 6' disc="Enter Report 6" />
                    </Flex>
                    <Flex justify="space-between">
                      <InputCard label='Report 7' disc="Enter Report 7" />
                      <InputCard label='Report 8' disc="Enter Report 8" />
                    </Flex>
                    <Flex justify="space-between">
                      <InputCard label='Report 9' disc="Enter Report 9" />
                      <InputCard label='Report 10' disc="Enter Report 10" />
                    </Flex>
                  </AccordionInputsGroub>
                
              </FirstContnentBox> 

          </Content>

          <Content className={toggleState === 2 ? "active-content" : ""}>
            <UploadComponent />
          </Content>
        </ContentTabs>
      </div>

    </Container>
  );
}

export default Tabs;