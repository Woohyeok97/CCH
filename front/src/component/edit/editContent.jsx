/* eslint-disable */
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

//custom hooks
import useEditContent from '../../hooks/edit/useEditContent'



function EditContent({ basis }) {
    const currentContent = useSelector( state => state.currentContent )
    const { changeCurrentContent } = useEditContent()

    return(
        <EditContentStyled basis={ basis }>
            <textarea placeholder="오늘의 나를 칭찬해보자!" spellCheck="false" defaultValue={ currentContent.text }
            name="text" onChange={(e)=>{ changeCurrentContent(e) }} />
        </EditContentStyled>
    )
}


const EditContentStyled = styled.div`
  flex-basis : ${(props)=> props.basis || '100%' };
  width : 80%;
  height : 100%;
  padding-top : 36px;
  
  > textarea {
    font-size : 2.5rem;
    width : 100%;
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

export default EditContent;