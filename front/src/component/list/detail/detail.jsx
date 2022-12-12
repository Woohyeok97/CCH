/* eslint-disable */
import React, { useState } from 'react'
import styled from 'styled-components'

//components
import DetailHeader from './detailHeader'
import ContentImage from './contentImage'
import ContentText from './contentText'
import useSetDetail from '../../../hooks/list/useSetDetail'


const DetailStyled = styled.div`
  flex-basis : 30%;
  display : flex;
  flex-direction : column;
  padding : 0 24px;
  border-left : 2px solid #DFE0DF;
`


function Detail() {
  const { currentContent } = useSetDetail()

  return(
    <DetailStyled>
      <DetailHeader/>
      { currentContent.image ? <ContentImage/> : null } 
      <ContentText/>
    </DetailStyled>
  )
}

export default Detail