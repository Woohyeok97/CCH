/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

function Header({ children }) {

  return <HeaderStyled>{ children }</HeaderStyled>
}

const HeaderStyled = styled.header`
  flex-basis : 10%;
  display : flex;
  justify-content : center;
  align-items : center;
  width : 100%;
  background-color : #FDDF3F;
  font-size : 2rem;
  font-weight : 800;
`

export default Header