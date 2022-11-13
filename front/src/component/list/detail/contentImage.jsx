/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

const ContentImageStyled = styled.div`
  padding-bottom : 24px;
  border-bottom : 2px solid #DFE0DF;

  > img {
    width : 100%;
    border : 1px soild transparent;
    border-radius : 0.25rem;
  }

`

function ContentImage() {

  return (
    <ContentImageStyled>
      <img src='/초밥사진.jpeg'/>
    </ContentImageStyled>
  )
}

export default ContentImage