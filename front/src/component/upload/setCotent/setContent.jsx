/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

//components
import SetValue from './setValue'
import Header from './header'


const SetContentStyled = styled.section`
    flex-basis : 60%;
    display : flex;
    flex-direction: column;
    align-items : center; 
  `

function SetContent() {

  return(
   <SetContentStyled>
      <Header/>
      <SetValue/>
   </SetContentStyled>
  )
}


export default SetContent;