/* eslint-disable */
import React from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import useEditContent from '../../hooks/edit/useEditContent'
import Button from '../common/button'
 
 

 
function EditButton({ basis }) {
    const navigate = useNavigate()
    const movementList = ()=> navigate('/list')
    const { editContent } = useEditContent()

    return (
        <PostContentStyled basis={basis}>
            <div>
                <Button size="large" action={ movementList }>취소</Button>
                <Button size="large" color="green" action={ editContent }>수정</Button>
            </div>
        </PostContentStyled>
    )
}


const PostContentStyled = styled.section`
    flex-basis : ${(props)=> props.basis || '100%' };
    display : flex;
    justify-content : center;
    align-items : center;

    > div {
    display : flex;
    justify-content : space-around;
    width : 260px;
    }
`
 
 
 
 export default EditButton