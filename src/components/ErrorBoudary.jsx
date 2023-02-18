import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    width: 100wv;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Img = styled.img`
    width: 40%;
`;

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
        return  <Box>
                    <Img src='https://t3.ftcdn.net/jpg/03/56/19/18/360_F_356191845_Uf1HSScTIHcxXeK1UXuEn0rdAzMvTfxo.jpg' />
                </Box>;
        }

        return this.props.children; 
    }
}
