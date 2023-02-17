import React from "react";
import styled from "styled-components";
import { detailReport } from "./../../mock/data";

const Table = styled.div`
  width: 700px;
  display: table;
  border-collapse: collapse;
  position: absolute;
  left: 50%;
  top: 15%;
`;

const Row = styled.div`
  display: table-row;
`;

const Cell = styled.div`
  display: table-cell;
  border: 1px solid #ddd;
  padding: 12px;
`;

const ID = styled(Cell)`
  width: 20%;
`;

const Detail = styled(Cell)`
  width: 80%;
`;

const ReportDetails = () => {
  return (
    <Table>
      {detailReport.map((item) => (
        <Row key={item.id}>
          <ID>{item.id}</ID>
          <Detail>{item.detail}</Detail>
        </Row>
      ))}
    </Table>
  );
};

export default ReportDetails;
