/* eslint-disable */
import React, { useEffect } from 'react'

// common components
import AppWrap from '../component/common/appWrap'
import Header from '../component/common/header'
import Title from '../component/common/title'
import ImageUploadInput from '../component/common/imageUploadInput'

// component
import UploadContents from '../component/upload/uploadContents'
import UploadButton from '../component/upload/uploadButton'

// custom hooks
import usePostContent from '../hooks/upload/usePostContent'
import LayoutBox from '../component/common/layoutBox'


function Upload() {
  const { isTodayUpload, notifyUpload } = usePostContent()

  useEffect(()=>{
    isTodayUpload()
  }, [])
 
  return(
    <AppWrap background="#FEFBEA">
      <Header>오늘의 나 칭찬하기</Header>
      <LayoutBox direction="column" width="80%">
        <Title basis="10%">{ <ImageUploadInput>이미지 추가!</ImageUploadInput> }</Title>
        <UploadContents basis="60%"/>
        <UploadButton action={ notifyUpload } basis="30%"/>
      </LayoutBox>
    </AppWrap>
  )
}


export default Upload