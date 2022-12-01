/* eslint-disable */
import React from 'react'

//components
import Appwrap from '../component/common/appWrap'
import Header from '../component/common/header'
import LayoutBox from '../component/common/layoutBox'
import Calendar from '../component/list/calendar/calendar'
import Detail from '../component/list/detail/detail'
import UploadButton from '../component/list/uploadButton'


function List() {
  return(
    <Appwrap background='#FEFBEA'>
      
      <Header>칭찬모아보기</Header>

      <LayoutBox basis="90%">
        <LayoutBox direction="column" basis="90%">
          <Calendar/>
          <UploadButton/>
        </LayoutBox>
        <Detail/>
      </LayoutBox>

    </Appwrap>
  )
}

export default List