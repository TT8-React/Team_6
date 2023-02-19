import React from 'react'
import LayOut from '../../components/LayOut'
import NavButton from '../../components/NavButton'
import { StyledLink } from '../Login/style';
import { Styledbtn } from '../Report/style'
import TransferList from './../../components/TransferList/index';

const CustomizeReport = () => {
  return (
    <LayOut title="Customize Report">
      <Styledbtn>
        <StyledLink to="/report">
          <NavButton name="back" />
        </StyledLink>
      </Styledbtn>
      <TransferList />
    </LayOut>
  );
}

export default CustomizeReport