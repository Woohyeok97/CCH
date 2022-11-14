/* eslint-disable */
import React from 'react'

// 컴포넌트들
import AppWrap from '../component/common/appWrap'
import Footer from '../component/common/footer'
import Intro from '../component/main/intro'
import LoginWrap from '../component/main/loginWrap'


function Main() {

  return(
  <AppWrap background='#FDDF3F' >
    <Intro/>
    <LoginWrap/>
    <Footer/>
  </AppWrap>
)
}

export default Main