/* eslint-disable */
import React from 'react'
import { useSelector } from 'react-redux'
//components
import Appwrap from '../component/common/appWrap'
import Header from '../component/common/header'
import ListBody from '../component/list/listBody'




function List() {

  const userData = useSelector( state => state.userData )

  return(
    <Appwrap background='#FEFBEA' >
      <Header>{userData.name} 님의 칭찬</Header>
      <ListBody/>
    </Appwrap>
  )
}

export default List