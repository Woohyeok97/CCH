/* eslint-disable */
import React, { useEffect } from 'react'
//components
import AppWrap from '../component/common/appWrap'
import Header from '../component/common/header'
import UploadBody from '../component/upload/uploadBody'
// custom hooks
import usePostContent from '../hooks/upload/usePostContent'


function Upload() {
  const { isTodayUpload } = usePostContent()

  useEffect(()=>{
    isTodayUpload()
  }, [])
  const parsedHash = new URLSearchParams(window.location.hash.substring(1))
  const accessToken = parsedHash.get("access_token")

  console.log(accessToken)
  return(
    <AppWrap background="#FEFBEA">
      <Header>오늘의 나 칭찬하기</Header>
      <UploadBody/>
    </AppWrap>
  )
}


export default Upload