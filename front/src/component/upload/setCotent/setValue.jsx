/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

//custom hooks
import useSetContent from '../../../hooks/upload/useSetContent'

const SetValueStyled = styled.div`
  width : 80%;
  height : 100%;
  padding-top : 36px;
  
  > textarea {
    font-size : 2.5rem;
    width : 100%;
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

function SetValue() {
  const { setText } = useSetContent()

  return(
   <SetValueStyled>
     <textarea placeholder="오늘의 나를 칭찬해보자!" spellcheck="false"
     onChange={(e)=>{ setText(e) }}/>
   </SetValueStyled>
  )
}

export default SetValue;