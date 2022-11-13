/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

//components
import SetValue from './setValue'
import Header from './header'


const SetContentStyled = styled.section`
    flex-basis : 50%;
    display : flex;
    flex-direction: column;
    align-items : center; 
  `

function SetContent({ setContent }) {

  return(
   <SetContentStyled>
    <Header/>
    <SetValue setContent={setContent}/>
   </SetContentStyled>
  )
}


export default SetContent;