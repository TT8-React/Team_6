import styled from "styled-components";
import React, { useState } from "react";
import UploadIcon from "../../assets/photos/upload.png";
import { Flex } from "../../global/style";

const Box = styled.div`
  width: 100%;
  height: 50%;
  margin: 17px 0;
`;

const Title = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  text-align: left;
  color: #111111;
  padding: 17px;
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  border: none;
  outline: none;
  width: 454px;
  height: 69px;
  background: #efefef;
  border: 1px solid #848484;
  border-radius: 49px;
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 23px;
  text-align: center;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

const Img = styled.img`
  padding: 0 15px 0 30px;
`;

const Button = styled.button`
  width: 88px;
  height: 40px;
  background: #000000;
  border-radius: 5px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin: 0 72px;
`;

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async (e) => {
    setIsLoading(true);
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    console.log(uploadedFile);

    try {
      const formData = new FormData();
      formData.append("file", uploadedFile);

      // Use axios to send the form data to your backend
      // const response = await axios.post('your-server-url', formData);
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <Title> Upload CSV document </Title>

      <Flex justify="flex-start" align="center">
        <Input onChange={handleFileUpload} id="file" type="file" accept="*" />
        <Label htmlFor="file">
          <Img src={UploadIcon} alt="upload file icon .." />
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <p> {file ? file.name : "Upload here..."}</p>
          )}
        </Label>

        <Button>Submit</Button>
      </Flex>
    </Box>
  );
};

export default UploadFile;
