/* eslint-disable */
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import AppWrap from '../component/common/appWrap'
import Header from '../component/common/header'
import SetContentContainer from '../container/upload/setCotentContainer'
import PostContentContainer from '../container/upload/postContentContainer'

function Upload() {

  const uploadContent = useSelector(state => state.upload )
  
  return(
    <AppWrap background="#FEFBEA">
      <Header>오늘의 나 칭찬하기</Header>
      <SetContentContainer />
      <PostContentContainer />
    </AppWrap>
  )
}
export default Upload