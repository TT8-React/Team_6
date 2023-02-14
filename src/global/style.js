import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
}

ul {
    list-style: none;
}


`;

export const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => (props.justify ? props.justify : "")};
  align-items: ${(props) => (props.align ? props.align : "")};
  gap: ${(props) => (props.gap ? props.gap + "px" : "")};
`;
