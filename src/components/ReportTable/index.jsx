import styled from "styled-components";

// Images 
import Delete from "../../assets/photos/delete.png";
import Edit from "../../assets/photos/edit.png";

const ReportBox = styled.div`
    width: 80%;
    height: 500px;
    margin: 25px auto;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
`;

const Table = styled.table`
    width:100%;
`;

const Tr = styled.tr`
    width: 100%;
    height: 40px;
    background: #E5E5E5;
    border: 1px solid #828282;
    border-radius: 4px 0px 0px 0px;
`;

const Th = styled.th`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    align-items: center;
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
`

const Img = styled.img`
    margin: 0 7.5px;
    cursor: pointer;
`;

const Button = styled.button`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    width: 71px;
    height: 40px;
    background: #000000;
    border-radius: 5px;
    margin-bottom: 84px ;
`;


const ReportTable = () => {
    return (
        <ReportBox>


            <Table>
                <Tr>
                    <Th>Report 1</Th>
                    <Th>Report 2</Th>
                    <Th>Report 3</Th>
                    <Th>Report 4</Th>
                    <Th>Report 5</Th>
                    <Th>Report 6</Th>
                    <Th>Action</Th>
                </Tr>
                
                <tr>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>
                        <FlexBox>
                            <Img src={Edit} />
                            <Img src={Delete} />
                        </FlexBox>
                    </Td>
                </tr>
                <tr>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>
                        <FlexBox>
                            <Img src={Edit} />
                            <Img src={Delete} />
                        </FlexBox>
                    </Td>
                </tr>
                <tr>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>
                        <FlexBox>
                            <Img src={Edit} />
                            <Img src={Delete} />
                        </FlexBox>
                    </Td>
                </tr>
                <tr>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>
                        <FlexBox>
                            <Img src={Edit} />
                            <Img src={Delete} />
                        </FlexBox>
                    </Td>
                </tr>
                <tr>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>lorem ipsum</Td>
                    <Td>
                        <FlexBox>
                            <Img src={Edit} />
                            <Img src={Delete} />
                        </FlexBox>
                    </Td>
                </tr>
                
            </Table>
        </ReportBox>
    )
}

export default ReportTable