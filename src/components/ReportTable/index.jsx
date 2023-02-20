import styled from "styled-components";

// Images
import Delete from "../../assets/photos/delete.png";
import Edit from "../../assets/photos/edit.png";
import { useAdminContext } from "../../contexts/AdminContext";

const ReportBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Table = styled.table`
  width: 100%;
`;

const Tr = styled.tr`
  width: 100%;
  height: 40px;
  background: #e5e5e5;
  border: 1px solid #828282;
  border-radius: 4px 0px 0px 0px;
  & th:last-of-type {
    text-align: center;
  }
`;

const Th = styled.th`
  font-family: "Arial";
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  color: #000000;
  padding: 15px;
  border: 1px solid #828282;
`;

const Td = styled.td`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  align-items: center;
  color: #000000;
  padding: 15px;
  border: 1px solid #828282;
`;

const FlexBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  margin: 0 7.5px;
  cursor: pointer;
`;

const ReportTable = () => {
  const { reports, removeItem } = useAdminContext();

  return (
    <ReportBox>
      <Table>
        <thead>
          <Tr>
            <Th>Report 1</Th>
            <Th>Report 2</Th>
            <Th>Report 3</Th>
            <Th>Report 4</Th>
            <Th>Report 5</Th>
            <Th>Report 6</Th>
            <Th>Action</Th>
          </Tr>
        </thead>
        <tbody>
          {reports?.map((item, index) => (
            <tr key={index}>
              <Td>{item.report1}</Td>
              <Td>{item.report2}</Td>
              <Td>{item.report3}</Td>
              <Td>{item.report4}</Td>
              <Td>{item.report5}</Td>
              <Td>{item.report6}</Td>
              <Td>
                <FlexBox>
                  <Img src={Edit} />
                  <Img
                    src={Delete}
                    onClick={() => {
                      removeItem(item.id);
                    }}
                  />
                </FlexBox>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ReportBox>
  );
};

export default ReportTable;
