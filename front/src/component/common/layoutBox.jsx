/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

function LayoutBox({ children, basis, direction, justifyContent }) {

  const LayoutBox = styled.section`
    display : flex;
    flex-basis : ${(props)=> props.basis };
    flex-direction : ${(props)=> props.direction || 'row' };
    justify-content : ${(props)=> props.justifyContent || 'center' };

  `
  return (
    <LayoutBox basis={basis} direction={direction} justifyContent={justifyContent}>
    { children }
    </LayoutBox>
  )
}


export default LayoutBox;