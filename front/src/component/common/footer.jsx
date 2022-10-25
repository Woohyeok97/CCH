/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

function Footer() {

  const Footer = styled.footer`
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
  return(
    <Footer>
      <p>production by woo</p>
    </Footer>
  )
}

export default Footer