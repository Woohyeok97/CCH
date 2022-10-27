/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

function ContentImage() {
  const ContentImage = styled.div`
    padding-bottom : 24px;
    border-bottom : 2px solid #DFE0DF;

    > img {
      width : 100%;
      border : 1px soild transparent;
      border-radius : 0.25rem;
    }

  `
  return (
    <ContentImage>
      <img src='/초밥사진.jpeg'/>
    </ContentImage>
  )
}

export default ContentImage