/* eslint-disable */
import React from 'react'
import Appwrap from '../component/common/appWrap'
import Header from '../component/common/header'
import Calendar from '../component/list/calendar'
import UploadButton from '../component/list/uploadButton'

function List() {
  return(
    <Appwrap background='#FFF9EE'>
      <Header>칭찬모아보기</Header>
      <Calendar/>
      <UploadButton/>
    </Appwrap>
  )
}

export default List