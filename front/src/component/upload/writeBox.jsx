/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

import WriteHeader from './writeHeader'

function WriteBox() {

  const WriteBox = styled.section`
    flex-basis : 50%;
    display : flex;
    flex-direction: column;
    align-items : center;

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

  return(
   <WriteBox>
     <WriteHeader/>
     <textarea placeholder="오늘의 나를 칭찬해보자!" spellcheck="false"/>
   </WriteBox>
  )
}

export default WriteBox;