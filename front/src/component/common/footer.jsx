/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

function Footer() {

  return(
    <FooterStyled>
      <p>production by woo</p>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
      flex-basis : 40%;
      display : flex;
      justify-content : center;
      align-items : center;
      background-color : #FDDF3F;

    > p {
      font-weight : 800;
      text-align : conter;
    }
  `

export default Footer