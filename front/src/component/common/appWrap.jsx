/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

function AppWrap({ children, background, basis, direction, justify, align }) {
  return (
    <AppWrapStyled background={background} basis={basis} direction={direction} justify={justify} align={align}>
      { children }
    </AppWrapStyled>
  )
}


const AppWrapStyled = styled.div`
  display : flex;
  height : 100%;
  position : relative;
  flex-basis : ${(props)=> props.basis || '100%' };
  flex-direction : ${(props)=> props.direction || 'column' };
  justify-content : ${(props)=> props.justify || 'center' };
  align-items : ${(props)=> props.align || 'center' };
  background : ${(props)=> props.background || '#FFF9E8' };
`

export default AppWrap