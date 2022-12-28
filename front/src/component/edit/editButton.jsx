/* eslint-disable */
import React from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import useEditContent from '../../hooks/edit/useEditContent'
import Button from '../common/button'
 
 
const PostContentStyled = styled.section`
    flex-basis : 30%;
    display : flex;
    justify-content : center;
    align-items : center;

    > div {
    display : flex;
    justify-content : space-around;
    width : 260px;
    }
    `
 
function EditButton() {
    const navigate = useNavigate()
    const cancel = ()=> navigate('/list')
    const { isEditContent } = useEditContent()

    return (
        <PostContentStyled>
            <div>
                <Button size="large" action={ cancel }>취소</Button>
                <Button size="large" color="green" action={ isEditContent }>수정</Button>
            </div>
        </PostContentStyled>
    )
}
 
 
 
 export default EditButton