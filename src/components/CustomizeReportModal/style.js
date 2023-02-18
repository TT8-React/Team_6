import styled from "styled-components";

export const StyledModal = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 1;
  width: 696px;
  height: 326px;
  left: 478px;
  top: 266px;
  overflow: auto;
  background: #ffffff;

  box-shadow: 0px 7px 35px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  font-family: "Arial";

  & h2 {
    margin-right: 410px;
  }
`;
export const StyledForm = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & div {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
`;
export const StyledLabel = styled.label``;
export const StyledInput = styled.input`
  width: 279px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: block;
`;

export const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledLine = styled.div`
  width: 695px;
  height: 0px;
  left: 478px;
  top: 342px;

  border: 1px solid #000000;
`;
