/* eslint-disable */
import React from 'react'
import axios from 'axios'

// 컴포넌트들
import AppWrap from '../component/common/appWrap'
import Footer from '../component/common/footer'
import Intro from '../component/main/intro'
import GoogleLogin from '../component/main/googleLogin'


function Main() {
  const parsedHash = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = parsedHash.get("access_token");
  // const test = ()=> {
  //   if(accessToken) axios.post("http://localhost:3001/user/test", { accessToken });
  // }
  const test = async ()=> { 
    if(accessToken) {
      const { data } = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`);
      const result = await axios.post('http://localhost:3001/user/test', { data : data.id })
      console.log(result)
    }
  }
  test()
  console.log(accessToken)

  // const { data } = await Api.post("oauth/google", { accessToken });

  return(
  <AppWrap background='#FDDF3F'>
    <Intro/>
    <GoogleLogin/>
    <button>로그아웃</button>
    <Footer/>
  </AppWrap>
)
}

export default Main