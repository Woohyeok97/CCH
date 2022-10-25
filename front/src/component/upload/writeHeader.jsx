import React from 'react'
import styled from 'styled-components'

import Button from '../common/button'

function WriteHeader() {

  const WriteHeader = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    width : 80%;
    padding : 16px 0;
    margin-top : 5%;
    border-bottom : 2px solid #DFE0DF;
    box-sizing: border-box;

    > h3 { 
      color : #666666;
      margin : 0;
    }
  `

  return(
    <WriteHeader>
      <Button size="small" color="black">사진첨부</Button>
      <h3>2022년 12월 25일 칭찬</h3>
    </WriteHeader>
  )
}

export default WriteHeader