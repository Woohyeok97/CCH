/* eslint-disable */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
// 컴포넌트들
import AppWrap from '../component/common/appWrap'
import Footer from '../component/common/footer'
import Intro from '../component/main/intro'
import GoogleLogin from '../component/main/googleLogin'
import useCheckMember from '../hooks/signup/useCheckMember'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import Header from '../component/common/header'
import SignUpButton from '../component/signUp/signUpButton'
import WriteInfo from '../component/signUp/writeInfo'


function Main() {
  const navigate = useNavigate()
  const parsedHash = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = parsedHash.get("access_token");


  const user = useSelector( state => state.user )
  const { test, swit, setSwit  } = useCheckMember()

  useEffect(()=>{
    test(accessToken)
    return ()=> setSwit(false); 
  }, [])

  // const render = (user)=>{
  //   if(user) return <p>이미 회원이시네요!</p>
  //   window.location.replace('/signup')
  // }

  useEffect(()=>{

  },[])
  

  if(swit) return (
    <AppWrap background='#FDDF3F'>
      <Intro/>
      { accessToken ? <p>gd</p> : <GoogleLogin/> }
      <Footer/>
    </AppWrap>
  )
}

export default Main


