/* eslint-disable */
import React from 'react'
//components
import AppWrap from '../component/common/appWrap'
import Header from '../component/common/header'
import SetContent from '../component/upload/setCotent/setContent'
import PostContent from '../component/upload/postContent'

function Upload() {

  return(
    <AppWrap background="#FEFBEA">
      <Header>오늘의 나 칭찬하기</Header>
      <SetContent/>
      <PostContent/>
    </AppWrap>
  )
}


export default Upload