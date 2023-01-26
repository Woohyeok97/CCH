/* eslint-disable */
import React from 'react'

// components
import AppWrap from '../component/common/appWrap'
import Footer from '../component/common/footer'
import Intro from '../component/main/intro'
import GoogleLogin from '../component/main/googleLogin'
import StartLayout from '../component/main/startLayout'

// custom hooks
import useGetUserData from '../hooks/signup/useGetUserData'




function Main() {
  const { renderState, accessToken } = useGetUserData()

  if(renderState) return (
    <AppWrap background='#FDDF3F'>
      <Intro/>
      { accessToken ? <StartLayout/> : <GoogleLogin/> }
      <Footer/>
    </AppWrap>
  )
}


export default Main


