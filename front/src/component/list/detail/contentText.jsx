/* eslint-disable */
import React from 'react'
import styled from 'styled-components'


const ContentTextStyled = styled.div`
  flex-basis : 40%;
  padding-top : 24px;
  white-space: pre-line;
  font-size : 2rem;
  font-weignt : 900;
`

function ContentText({ value }) {

  return (
    <ContentTextStyled>
     { value }
    </ContentTextStyled>
  )
}
  
export default ContentText