/* eslint-disable */
import React from 'react'
// 컴포넌트들
import AppWrap from '../component/common/appWrap'
import Footer from '../component/common/footer'
import Intro from '../component/main/intro'
import GoogleLogin from '../component/main/googleLogin'
import useCheckMember from '../hooks/signup/useCheckMember'


function Main() {
  // const parsedHash = new URLSearchParams(window.location.hash.substring(1));
  // const accessToken = parsedHash.get("access_token");
  const { renderState, accessToken } = useCheckMember()


  

  if(renderState) return (
    <AppWrap background='#FDDF3F'>
      <Intro/>
      { accessToken ? null : <GoogleLogin/> }
      <Footer/>
    </AppWrap>
  )
}

export default Main


