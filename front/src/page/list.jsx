/* eslint-disable */
import React from 'react'
import { useSelector } from 'react-redux'
//components
import Appwrap from '../component/common/appWrap'
import Header from '../component/common/header'
import ListBody from '../component/list/listBody'
import useAuth from '../hooks/common/useAuth'




function List() {

  const userData = useSelector( state => state.userData )
  const {  } = useAuth()

  return(
    <Appwrap background='#FEFBEA' >
      <Header>{userData.name} 님의 칭찬</Header>
      <ListBody/>
    </Appwrap>
  )
}

export default List