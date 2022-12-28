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
  const navigate = useNavigate()
  const value = true
  const parsedHash = new URLSearchParams(window.location.hash.substring(1))
  const accessToken = parsedHash.get("access_token")

  const { isMember } = useCheckMember()

  useEffect(()=>{
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`)
    .then((result)=>{ console.log(isMember(result.data.id)) })
    .catch((err)=>{ console.log(err) })
  }, [])

  return(
    <AppWrap background='#FDDF3F'>
      <Header>구글 계정으로 가입하기</Header>
      <WriteInfo/>
      <SignUpButton/>
    </AppWrap>
  )
}

export default SignUp