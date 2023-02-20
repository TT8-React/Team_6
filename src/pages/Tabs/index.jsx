import { useState } from "react";
import styled from "styled-components";
import InputCard from "../../components/InputCard/index";
import { Flex } from "../../global/style";
import UploadFile from "../../components/UploadFile/index";
import Accordions from "./../../components/Accordions/index";
import LayOut from "../../components/LayOut";

// const Container = styled.div`
//   width: 90%;
//   height: 100vh;
//   margin: 55px auto;
//   display: flex;
//   flex-direction: column;
// `;

const BlocTabs = styled.div`
  width: 902px;
  height: 69px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid #000000;
  border-radius: 5px;
  margin: 4rem auto;
`;

const TabsButton = styled.button`
  font-family: "Inter";
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
  background: #ffffff;
  border: 1px solid #8f8f8f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 5px;

  &.active-tabs {
    background: #ebebf0;
    border: 1px solid #8f8f8f;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const ContentTabs = styled.div`
  flex-grow: 1;
`;

const Content = styled.div`
  background: white;
  width: 95%;
  margin: auto;
  display: none;

  &.active-content {
    display: block;
  }
`;

const FirstContnentBox = styled.div`
  display: flex;

  gap: 100px;
`;

const AccordionBox = styled.div``;

const AccordionInputsGroub = styled.div``;

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <LayOut title="Data upload">
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
              <Accordions />
            </AccordionBox>

            <AccordionInputsGroub>
              <Flex wrap={"wrap"} gap="10">
                <InputCard
                  label="Report 1"
                  disc="Enter Report 1"
                  width={"300"}
                />
                <InputCard
                  label="Report 2"
                  disc="Enter Report 2"
                  width={"300"}
                />
                <InputCard
                  label="Report 3"
                  disc="Enter Report 3"
                  width={"300"}
                />
                <InputCard
                  label="Report 4"
                  disc="Enter Report 4"
                  width={"300"}
                />
                <InputCard
                  label="Report 5"
                  disc="Enter Report 5"
                  width={"300"}
                />
                <InputCard
                  label="Report 6"
                  disc="Enter Report 6"
                  width={"300"}
                />
                <InputCard
                  label="Report 7"
                  disc="Enter Report 7"
                  width={"300"}
                />
                <InputCard
                  label="Report 8"
                  disc="Enter Report 8"
                  width={"300"}
                />
                <InputCard
                  label="Report 9"
                  disc="Enter Report 9"
                  width={"300"}
                />
                <InputCard
                  label="Report 10"
                  disc="Enter Report 10"
                  width={"300"}
                />
              </Flex>
            </AccordionInputsGroub>
          </FirstContnentBox>
        </Content>

        <Content className={toggleState === 2 ? "active-content" : ""}>
          <UploadFile />
        </Content>
      </ContentTabs>
    </LayOut>
  );
}

export default Tabs;
