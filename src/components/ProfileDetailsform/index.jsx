import styled from "styled-components";
import InputCard from "../InputCard/index";
import Button from "../Button/index";
import { Flex } from "../../global/style";

const Box = styled.div`
    width: 90%;
    margin: 50px auto; 
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; 
    gap: 0 10px;
`

const index = () => {
    return (
        <>
            <Box>
                <InputCard label="Name" disc="Enter Name " width="320" />
                <InputCard label="Test 1" disc="Enter Test 1" width="320" />
                <InputCard label="Test 2" disc="Enter Test 2" width="320" />
                <InputCard label="Test 3" disc="Enter Test 3" width="320" />
                <InputCard label="Test 4" disc="Enter Test 4" width="320" />
                <InputCard label="Test 5" disc="Enter Test 5" width="320" />
                <InputCard label="Test 6" disc="Enter Test 6" width="320" />
                <InputCard label="Test 7" disc="Enter Test 7" width="320" />
                <InputCard label="Test 8" disc="Enter Test 8" width="320" />
            </Box>

            <Flex justify="center">
                <Button name="Submit"></Button>
            </Flex>
        </>
    )
}

export default index;