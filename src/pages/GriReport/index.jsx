import React from 'react'
import Accordions from '../../components/Accordions'
import LayOut from '../../components/LayOut'
import NavButton from '../../components/NavButton'
import ReportDetails from '../../components/ReportDetails'
import { Styledbtn } from '../Report/style'

const GriReport = () => {
  return (
    <LayOut title="Gri Report">
    <Styledbtn>
      <NavButton name="back" />
      <Accordions />
      <ReportDetails />
    </Styledbtn>
  </LayOut>
  )
}

export default GriReport