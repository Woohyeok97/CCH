/* eslint-disable */
import React from 'react'

// common components
import AppWrap from '../component/common/appWrap'
import Header from '../component/common/header'
import LayoutBox from '../component/common/layoutBox'

// component
import UploadContent from '../component/upload/uploadContent'
import UploadButton from '../component/upload/uploadButton'

import useAuth from '../hooks/common/useAuth'



function Upload() {

  const {  } = useAuth()

  return(

    <AppWrap background="#FEFBEA">
      <Header>오늘의 나 칭찬하기</Header>
      <LayoutBox direction="column" width="80%">
        <UploadContent basis="60%"/>
        <UploadButton basis="30%"/>
      </LayoutBox>
    </AppWrap>
    
  )
}


export default Upload