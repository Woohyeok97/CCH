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
import { useSelector } from 'react-redux'




function Main() {
  const { isLoginning, cookies } = useLogin()
  const userData = useSelector( state => state.userData )

   if(isLoginning) return (
    <AppWrap background='#FDDF3F'>
      <Intro/>
      { cookies.jwtToken ? <StartLayout/> : <GoogleLogin/> }
      <Footer/>
    </AppWrap>
  )
}


export default Main


