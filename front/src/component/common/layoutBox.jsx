/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

function LayoutBox({ children, basis, direction, justify, align, width }) {

  return (
    <LayoutBoxStyled basis={basis} direction={direction} justify={justify} align={align} width={width}>
    { children }
    </LayoutBoxStyled>
  )
}

const LayoutBoxStyled = styled.section`
    display : flex;
    flex-basis : ${(props)=> props.basis || '100%' };
    flex-direction : ${(props)=> props.direction || 'row' };
    justify-content : ${(props)=> props.justify || 'center' };
    align-items :${(props)=> props.align };
    width : ${(props)=> props.width || "100%" }
  `


export default LayoutBox;