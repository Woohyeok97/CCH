 /* eslint-disable */
import React from 'react'
import styled from 'styled-components'

import Button from '../common/button'

function ButtonBox() {
  const ButtonBox = styled.section`
    flex-basis : 20%;
    display : flex;
    justify-content : center;
    align-items : center;

    > div {
      display : flex;
      justify-content : space-around;
      width : 260px;
    }
    `


  return (
    <ButtonBox>
      <div>
        <Button size="large">취소</Button>
        <Button size="large" color="green">칭찬!</Button>
      </div>
    </ButtonBox>
  )
}

export default ButtonBox