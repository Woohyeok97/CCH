/* eslint-disable */
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

//custom hooks
import useSetContent from '../../hooks/upload/useSetContent'


function UploadContent({ basis }) {

  const { setText, setUserId } = useSetContent()
  const userData = useSelector( state => state.userData )

  useEffect(()=>{
    setUserId(userData.userId)
  }, [])
  
  return(
   <UploadContentStyled basis={basis}>
     <textarea placeholder="오늘의 나를 칭찬해보자!" spellCheck="false"
     onChange={(e)=>{ setText(e) }}/>
   </UploadContentStyled>
  )
}



const UploadContentStyled = styled.div`
  flex-basis : ${(props)=> props.basis || '100%' };
  padding-top : 36px;
  
  > textarea {
    font-size : 2.5rem;
    width : 100%;
    height : 100%;
    padding : 24px;
    background-color : #FFF9E8;
    border : none;
    box-sizing: border-box;

    &: focus { 
      outline: none;
      resize: none;
    }
  }
`

export default UploadContent;