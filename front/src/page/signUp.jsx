/* eslint-disable */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import AppWrap from '../component/common/appWrap'
import axios from 'axios'
// component
import Header from '../component/common/header'
import SignUpButton from '../component/signUp/signUpButton'
import WriteInfo from '../component/signUp/writeInfo'
import useCheckMember from '../hooks/signup/useCheckMember'


function SignUp() {


  return(
    <AppWrap background='#FDDF3F'>
      <Header>구글 계정으로 가입하기</Header>
      <WriteInfo/>
      <SignUpButton/>
    </AppWrap>
  )
}

export default SignUp