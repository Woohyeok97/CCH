/* eslint-disable */
import React from 'react'
//components
import Appwrap from '../component/common/appWrap'
import Header from '../component/common/header'
import ListBody from '../component/list/listBody'


function List() {

  return(
    <Appwrap background='#FEFBEA' >
      <Header>칭찬모아보기</Header>
      <ListBody/>
    </Appwrap>
  )
}

export default List