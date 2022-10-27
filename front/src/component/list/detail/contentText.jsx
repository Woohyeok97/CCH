/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

function ContentText({ value }) {

  const ContentText = styled.div`
    flex-basis : 40%;
    padding-top : 24px;
    white-space: pre-line;
    font-size : 2rem;
    font-weignt : 900;
  `
  return (
    <ContentText>
     { value }
    </ContentText>
  )
}
  
export default ContentText