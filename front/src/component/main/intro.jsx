/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

function Intro() {

  const Intro = styled.section`
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

  return(
    <Intro>
      <h1>칭찬해~</h1>
    </Intro>
  )
}

export default Intro