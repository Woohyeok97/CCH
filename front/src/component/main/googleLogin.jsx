/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import Button from '../common/button'


const GoogleLoginStyled = styled.section`
  display : flex;
  flex-basis : 20%;
  justify-content : center;
  align-items : center;
`

function GoogleLogin() {

  // 구글한테 OAuth 로그인을 요청하는 url주소 (access-token을 받기위함!)
  const googleLoginHref = 
  "https://accounts.google.com/o/oauth2/auth?" +
  "client_id=502387057863-ca5enr2rm47gsqjidg5jd6l6aavn5r3o.apps.googleusercontent.com&"+
  "redirect_uri=https://web-cch-p8xrq2mlfs3c9q1.sel3.cloudtype.app/&"+
  "response_type=id_token%20token&"+
  "scope=openid email profile";

  
  return (
    <GoogleLoginStyled>
      <Button size='large' color='brown' href={ googleLoginHref }>구글 계정으로 시작하기</Button>
    </GoogleLoginStyled>
  )
}

export default GoogleLogin