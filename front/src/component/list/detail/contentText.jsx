/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import useSetDetail from '../../../hooks/list/useSetDetail'


const ContentTextStyled = styled.div`
  flex-basis : 40%;
  padding-top : 24px;
  white-space: pre-line;
  font-size : 2rem;
  font-weignt : 900;
`

function ContentText() {

  const { currentContent } = useSetDetail()

  return (
    <ContentTextStyled>
     { currentContent.text }
    </ContentTextStyled>
  )
}
  
export default ContentText