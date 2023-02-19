 /* eslint-disable */
import React from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import usePostContent from '../../hooks/upload/usePostContent'
// common components
import Button from '../common/button'


function UploadButton({ basis }) {
  const navigate = useNavigate()
  const movementList = () => navigate('/list')
  const { postUploadContent } = usePostContent()

  return (
    <UploadButtonStyled basis={basis}>
      <div>
        <Button size="large" action={ movementList }>취소</Button>
        <Button size="large" color="green" action={ postUploadContent }>칭찬!</Button>
      </div>
    </UploadButtonStyled>
  )
}


const UploadButtonStyled = styled.section`
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



export default UploadButton