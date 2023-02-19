/* eslint-disable */
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//components
import Button from "../common/button";

const UploadButtonStyled = styled.section`
  display : flex;
  flex-basis : 20%;
  justify-content : center;
  align-items : start;
  padding-top : 36px;
`

function UploadButton() {
  const navigate = useNavigate()
  const movementUpload = ()=> navigate('/upload')


  return (
    <UploadButtonStyled>
      <Button size='large' color='yellow' action={ movementUpload } >오늘의 나 칭찬하기</Button>
    </UploadButtonStyled>
  )
}

export default UploadButton
