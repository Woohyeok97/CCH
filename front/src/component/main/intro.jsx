/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

const IntroStyled = styled.section`
    flex-basis : 40%;
    display : flex;
    justify-content : center;
    align-items: center;

    > h1 {
      margin : 120px 0 0;
      font-size : 120px;
      text-align : center;
    }
  `

function Intro() {

  return(
    <IntroStyled>
      <h1>칭찬해</h1>
    </IntroStyled>
  )
}

export default Intro