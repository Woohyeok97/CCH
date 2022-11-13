/* eslint-disable */
import React from 'react'
import styled from 'styled-components'


const DetailHeaderStyled = styled.div`
  display : flex;
  flex-basis : 10%;
  justify-content : space-between;
  align-items : center;

  > h1 {
    color : gray;
    margin : 0;
    font-weight : 400;
  }
  > span {
    color : gray;
    font-weight : 400;
    cursor : pointer;
  }
`

function DetailHeader() {

  return (
    <DetailHeaderStyled>
      <h1>12월 25일의 나 칭찬해~</h1>
      <span>•••</span>
    </DetailHeaderStyled>
  )
}

export default DetailHeader