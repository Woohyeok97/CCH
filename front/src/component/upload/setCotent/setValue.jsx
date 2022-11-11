/* eslint-disable */
import React from 'react'
import styled from 'styled-components'


function SetValue({ setContent }) {
  
  return(
   <SetValueStyled>
     <textarea placeholder="오늘의 나를 칭찬해보자!" spellcheck="false"
     onChange={(e)=>{ setContent(e.target.value) }}/>
   </SetValueStyled>
  )
}


const SetValueStyled = styled.div`
  > textarea {
    font-size : 2.5rem;
    padding-top : 36px;
    width : 80%;
    height : 100%;
    background-color : #FFF9E8;
    border : none;
    box-sizing: border-box;

    &: focus { 
      outline: none;
      resize: none;
    }
  }
`

export default SetValue;