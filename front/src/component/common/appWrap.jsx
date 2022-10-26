/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

function AppWrap({ children, background }) {

  const AppWrap = styled.div`
    display : flex;
    flex-direction: column;
    height : 100%;
    position : relative;
    background : ${(props)=> props.background || '#FFF9E8' };
  `

  return(
    <AppWrap background={background} >{ children }</AppWrap>
  )
}

export default AppWrap