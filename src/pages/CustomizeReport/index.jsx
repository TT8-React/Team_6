import React from 'react'
import LayOut from '../../components/LayOut'
import NavButton from '../../components/NavButton'
import { Styledbtn } from '../Report/style'
import TransferList from './../../components/TransferList/index';

const CustomizeReport = () => {
  return (
    <LayOut title="Customize Report">
    <Styledbtn>
      <NavButton name="back" />
      
    </Styledbtn>
      <TransferList />
  </LayOut>
  )
}

export default CustomizeReport