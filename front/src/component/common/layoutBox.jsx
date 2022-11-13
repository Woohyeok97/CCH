/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

function LayoutBox({ children, basis, direction, justify, align }) {

  return (
    <LayoutBoxStyled basis={basis} direction={direction} justify={justify} align={align}>
    { children }
    </LayoutBoxStyled>
  )
}

const LayoutBoxStyled = styled.section`
    display : flex;
    flex-basis : ${(props)=> props.basis };
    flex-direction : ${(props)=> props.direction || 'row' };
    justify-content : ${(props)=> props.justify || 'center' };
    align-items :${(props)=> props.align };
  `


export default LayoutBox;