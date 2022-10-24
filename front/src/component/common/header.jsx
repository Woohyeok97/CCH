/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

function Header({ children }) {

  const Header = styled.header`
    flex-basis : 10%;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color : #FDD000;
    font-size : 2rem;
    font-weight : 800;
  `

  return <Header>{ children }</Header>
}

export default Header