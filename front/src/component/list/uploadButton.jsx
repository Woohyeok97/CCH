/* eslint-disable */
import React from "react";


import styled from "styled-components";
import Button from "../common/button";

function UploadButton() {

  const UploadButton = styled.section`
    display : flex;
    flex-basis : 20%;
    justify-content : center;
    align-items : start;
    padding-top : 36px;
  `
  return (
    <UploadButton>
      <Button size='large' color='yellow' url="upload">오늘의 나 칭찬하기</Button>
    </UploadButton>
  )
}

export default UploadButton
