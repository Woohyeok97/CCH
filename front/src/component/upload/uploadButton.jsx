 /* eslint-disable */
import React from 'react'
import styled from 'styled-components'
// common components
import Button from '../common/button'
import LayoutBox from '../common/layoutBox'


function UploadButton({ action, basis }) {

  return (
    <UploadButtonStyled basis={basis}>
      <div>
        <Button size="large" >취소</Button>
        <Button size="large" color="green" action={ action }>칭찬!</Button>
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