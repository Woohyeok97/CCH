/* eslint-disable */
import React, { useEffect } from 'react'
import AppWrap from '../component/common/appWrap'
import { useSelector } from 'react-redux'
// component
import Header from '../component/common/header'
import SignUpButton from '../component/signUp/signUpButton'
import WriteInfo from '../component/signUp/writeInfo'



function SignUp() {

  const signUpUserData = useSelector( state => state.setRenderState )
  useEffect(()=>{
    console.log(signUpUserData)
  },[])

  return(
    <AppWrap background='#FDDF3F'>
      <Header>구글 계정으로 가입하기</Header>
      <WriteInfo/>
      <SignUpButton/>
    </AppWrap>
  )
}

export default SignUp