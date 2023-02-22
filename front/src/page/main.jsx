/* eslint-disable */
import React from 'react'

// components
import AppWrap from '../component/common/appWrap'
import Footer from '../component/common/footer'
import Intro from '../component/main/intro'
import GoogleLogin from '../component/main/googleLogin'
import StartLayout from '../component/main/startLayout'

// custom hooks
import useLogin from '../hooks/main/useLogin'




function Main() {
  const { isLoginning, idToken } = useLogin()

  if(isLoginning) return (
    <AppWrap background='#FDDF3F'>
      <Intro/>
      { idToken ? <StartLayout/> : <GoogleLogin/> }
      <Footer/>
    </AppWrap>
  )
}


export default Main


