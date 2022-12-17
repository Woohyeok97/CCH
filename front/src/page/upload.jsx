/* eslint-disable */
import React from 'react'
import { useSelector } from 'react-redux'
//components
import AppWrap from '../component/common/appWrap'
import Header from '../component/common/header'
import SetContent from '../component/upload/setCotent/setContent'
import PostContent from '../component/upload/postContent'
// custom hooks
import usePostContent from '../hooks/upload/usePostContent'

function Upload() {
  const currentContent = useSelector( state => state.currentContent )
  console.log(currentContent)

  const { notifyUpload } = usePostContent()

  return(
    <AppWrap background="#FEFBEA">
      <Header>오늘의 나 칭찬하기</Header>
      <SetContent/>
      <PostContent action={ notifyUpload }/>
    </AppWrap>
  )
}


export default Upload