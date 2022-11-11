/* eslint-disable */
import React, { useState } from 'react'

import AppWrap from '../component/common/appWrap'
import Header from '../component/common/header'
import SetContentContainer from '../container/upload/setCotentContainer'
import PostContentContainer from '../container/upload/postContentContainer'

function Upload() {

  const [content, setContent] = useState('')
  
  return(
    <AppWrap background="#FEFBEA">
      <Header>오늘의 나 칭찬하기</Header>
      <SetContentContainer setContent={ setContent }/>
      <PostContentContainer content={ content }/>
    </AppWrap>
  )
}
export default Upload