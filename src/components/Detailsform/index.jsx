import styled from "styled-components";
import InputCard from "../InputCard/index";
import Button from "../Button/index";
import { Flex } from "../../global/style";
import { useEffect, useState } from "react";
import { useAdminContext } from "../../contexts/AdminContext";
import { useNavigate } from "react-router-dom";
import { generateId } from "./../../utils/generateId";

const Box = styled.div`
  width: 90%;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0 10px;
`;

const Detailsform = ({ profile }) => {
  const navigate = useNavigate();
  const { setDetails, setReports, reports } = useAdminContext();

  const [username, setUserName] = useState("");
  const [test1, setTest1] = useState("");
  const [test2, setTest2] = useState("");
  const [test3, setTest3] = useState("");
  const [test4, setTest4] = useState("");
  const [test5, setTest5] = useState("");
  const [test6, setTest6] = useState("");

  const [reportname, setReportName] = useState("");
  const [report1, setReport1] = useState("");
  const [report2, setReport2] = useState("");
  const [report3, setReport3] = useState("");
  const [report4, setReport4] = useState("");
  const [report5, setReport5] = useState("");
  const [report6, setReport6] = useState("");

  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    if (id === "username") setUserName(value);
    if (id === "test1") setTest1(value);
    if (id === "test2") setTest2(value);
    if (id === "test3") setTest3(value);
    if (id === "test4") setTest4(value);
    if (id === "test5") setTest5(value);
    if (id === "test6") setTest6(value);
    if (id === "reportname") setReportName(value);
    if (id === "report1") setReport1(value);
    if (id === "report2") setReport2(value);
    if (id === "report3") setReport3(value);
    if (id === "report4") setReport4(value);
    if (id === "report5") setReport5(value);
    if (id === "report6") setReport6(value);
  };

  useEffect(() => {
    const savedDetails = JSON.parse(localStorage.getItem("savedDetails"));
    if (savedDetails) {
      setUserName(savedDetails.username);

      setTest1(savedDetails.test1);
      setTest2(savedDetails.test2);
      setTest3(savedDetails.test3);
      setTest4(savedDetails.test4);
      setTest5(savedDetails.test5);
      setTest6(savedDetails.test6);
    }

    // const savedReports = JSON.parse(localStorage.getItem("savedReports"));
    // setReportName(savedReports.username);
    // se(savedReports.test1);
    // setTest2(savedReports.test2);
    // setTest3(savedReports.test3);
    // setTest4(savedReports.test4);
    // setTest5(savedReports.test5);
    // setTest6(savedReports.test6);
  }, [setDetails]);

  const handleProfileSubmit = (e) => {
    e.preventDefault();

    const newCompanyDetails = {
      username: username,
      test1: test1,
      test2: test2,
      test3: test3,
      test4: test4,
      test5: test5,
      test6: test6,
    };
    setDetails(newCompanyDetails);

    localStorage.setItem("savedDetails", JSON.stringify(newCompanyDetails));
    navigate("/companyDetails");
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();

    const newReport = {
      id: generateId(),
      reportname: reportname,
      report1: report1,
      report2: report2,
      report3: report3,
      report4: report4,
      report5: report5,
      report6: report6,
    };
    const newReports = [...reports, newReport];

    setReports(newReports);

    localStorage.setItem("savedReports", JSON.stringify(newReports));
    console.log(reports);
    navigate("/myReport");
  };

  if (profile) {
    return (
      <form onSubmit={handleProfileSubmit}>
        <Box>
          <InputCard
            label="Name"
            disc="Enter Name "
            width="320"
            id="username"
            value={username}
            onChangeFunction={handleChangeInput}
          />
          <InputCard
            label="Test 1"
            disc="Enter Test 1"
            width="320"
            id="test1"
            value={test1}
            onChangeFunction={handleChangeInput}
          />
          <InputCard
            label="Test 2"
            disc="Enter Test 2"
            width="320"
            id="test2"
            value={test2}
            onChangeFunction={handleChangeInput}
          />
          <InputCard
            label="Test 3"
            disc="Enter Test 3"
            width="320"
            id="test3"
            value={test3}
            onChangeFunction={handleChangeInput}
          />
          <InputCard
            label="Test 4"
            disc="Enter Test 4"
            width="320"
            id="test4"
            value={test4}
            onChangeFunction={handleChangeInput}
          />
          <InputCard
            label="Test 5"
            disc="Enter Test 5"
            width="320"
            id="test5"
            value={test5}
            onChangeFunction={handleChangeInput}
          />
          <InputCard
            label="Test 6"
            disc="Enter Test 6"
            width="320"
            id="test6"
            value={test6}
            onChangeFunction={handleChangeInput}
          />
        </Box>
        <Flex justify="center">
          <Button name="Submit" />
        </Flex>
      </form>
    );
  } else {
    return (
      <form onSubmit={handleReportSubmit}>
        <Box>
          <InputCard
            label="Name"
            disc="Enter Name "
            width="320"
            id="reportname"
            value={reportname}
            onChangeFunction={handleChangeInput}
          />
          <InputCard
            label="Report 1"
            disc="Enter Report 1"
            width="320"
            id="report1"
            value={report1}
            onChangeFunction={handleChangeInput}
          />
          <InputCard
            label="Report 2"
            disc="Enter Report 2"
            width="320"
            id="report2"
            value={report2}
            onChangeFunction={handleChangeInput}
          />
          <InputCard
            label="Report 3"
            disc="Enter Report 3"
            width="320"
            id="report3"
            value={report3}
            onChangeFunction={handleChangeInput}
          />
          <InputCard
            label="Report 4"
            disc="Enter Report 4"
            width="320"
            id="report4"
            value={report4}
            onChangeFunction={handleChangeInput}
          />
          <InputCard
            label="Report 5"
            disc="Enter Report 5"
            width="320"
            id="report5"
            value={report5}
            onChangeFunction={handleChangeInput}
          />
          <InputCard
            label="Report 6"
            disc="Enter Report 6"
            width="320"
            id="report6"
            value={report6}
            onChangeFunction={handleChangeInput}
          />
        </Box>

        <Flex justify="center">
          <Button name="Submit" />
        </Flex>
      </form>
    );
  }
};

export default Detailsform;
