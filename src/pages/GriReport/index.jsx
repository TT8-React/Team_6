import React from 'react'
import Accordions from '../../components/Accordions'
import LayOut from '../../components/LayOut'
import NavButton from '../../components/NavButton'
import ReportDetails from '../../components/ReportDetails'
import { StyledLink } from '../Login/style'
import { Styledbtn } from '../Report/style'

const GriReport = () => {
  return (
    <LayOut title="Gri Report">
      <Styledbtn>
        <StyledLink to="/report">
          <NavButton name="back" />
        </StyledLink>
        <Accordions />
        <ReportDetails />
      </Styledbtn>
    </LayOut>
  );
}

export default GriReport