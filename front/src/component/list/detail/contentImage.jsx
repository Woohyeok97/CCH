/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import useSetDetail from '../../../hooks/list/useSetDetail'

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
  const { currentContent } = useSetDetail()

  return (
    <ContentImageStyled>
    { currentContent.image }
    </ContentImageStyled>
  )
}

export default ContentImage