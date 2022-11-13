/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import Button from '../common/button'


const LoginWrapStyled = styled.section`
  display : flex;
  flex-basis : 20%;
  justify-content : center;
  align-items : center;
`

function LoginWrap() {

  return (
    <LoginWrapStyled>
      <Button size='large' color='brown' url="list">구글 계정으로 로그인 하기</Button>
    </LoginWrapStyled>
  )
}

export default LoginWrap