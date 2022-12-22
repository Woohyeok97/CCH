/* eslint-disable */
import React from "react";
import styled from "styled-components";
import usePostContent from "../../hooks/upload/usePostContent";

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

  const { notifyTodayUpload } = usePostContent()

  return (
    <UploadButtonStyled>
      <Button size='large' color='yellow' url="upload" >오늘의 나 칭찬하기</Button>
    </UploadButtonStyled>
  )
}

export default UploadButton
