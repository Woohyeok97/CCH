/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

import AppWrap from '../component/common/appWrap'
import Header from '../component/common/header'
import WriteBox from '../component/upload/writeBox'
import ButtonBox from '../component/upload/buttonBox'

function Upload() {
  return(
    <AppWrap background="#FEFBEA">
      <Header>오늘의 나 칭찬하기</Header>
      <WriteBox/>
      <ButtonBox/>
    </AppWrap>
  )
}
export default Upload