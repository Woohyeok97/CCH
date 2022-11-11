/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

//components
import SetValue from './setValue'
import Header from './header'



function SetContent({ setContent }) {

  return(
   <SetContentStyled>
    <Header/>
    <SetValue setContent={setContent}/>
   </SetContentStyled>
  )
}

const SetContentStyled = styled.section`
    flex-basis : 50%;
    display : flex;
    flex-direction: column;
    align-items : center; 
  `

export default SetContent;