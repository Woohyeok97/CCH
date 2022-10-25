/* eslint-disable */
import React from 'react'
import styled, { css } from 'styled-components'



function Button({ children, size, color }) {
  const buttonSize = SIZE[size]
  const buttonColor = COLOR[color]
  
  return (
    <StyleButton buttonSize={buttonSize} buttonColor={buttonColor}>
      { children }
    </StyleButton>
  )
}

const StyleButton = styled.button`
  font-weight: 600;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  box-sizing: border-box;
  cursor: pointer;

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }

  ${ (props)=> props.buttonSize }
  ${ (props)=> props.buttonColor }

`

const SIZE = {
  small : css`
      font-size: 1rem;
      padding: 6px 12px;
  `,
  midium : css`
    font-size: 1.25rem;
    padding: 10px 16px;
  `,
  large : css`
    font-size: 2rem;
    padding: 12px 20px;
  `,
}

const COLOR = {
  brown : css`
    color : #FFF9EC;
    background-color : #402E32;
    &:hover, active, focus { background-color : #5F4741; }
  `,
  yellow : css`
    background-color : #FDDF3F;
    &:hover, active, focus { background-color : #FDDF3F; }
  `,
  black : css`
  color : #FFF9EC;
  background-color : #000000;
  &:hover, active, focus { background-color : #444444; }
  `,
  green : css`
  background-color : #49ADFF;
  &:hover, active, focus { background-color : #76C8FF; }
  `
}


export default Button