/* eslint-disable */
import React from 'react'

//컴포넌트
import Appwrap from '../component/common/appWrap'
import Header from '../component/common/header'
import LayoutBox from '../component/common/layoutBox'
import Calendar from '../component/list/calendar/calendar'
import Detail from '../component/list/detail/detail'
import UploadButton from '../component/list/uploadButton'

function List() {
  return(
    <Appwrap background='#FFF9EE'>
      <Header>칭찬모아보기</Header>
      <LayoutBox basis="90%">
        <Calendar/>
        <Detail/>
      </LayoutBox>
      {/* <UploadButton/> */}
    </Appwrap>
  )
}

export default List