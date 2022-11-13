/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

function AppWrap({ children, background }) {

  return <AppWrapStyled background={background} >{ children }</AppWrapStyled>
}


const AppWrapStyled = styled.div`
  display : flex;
  flex-direction: column;
  height : 100%;
  position : relative;
  background : ${(props)=> props.background || '#FFF9E8' };
`

export default AppWrap