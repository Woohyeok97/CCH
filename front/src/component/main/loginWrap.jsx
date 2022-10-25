/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import Button from '../common/button'

function LoginWrap() {

  const LoginWrap = styled.section`
    display : flex;
    flex-basis : 20%;
    justify-content : center;
    align-items : center;
  `
  return (
    <LoginWrap>
      <Button size='large' color='brown'>구글 계정으로 로그인 하기</Button>
    </LoginWrap>
  )
}

export default LoginWrap