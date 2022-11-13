/* eslint-disable */
import React, { useState } from 'react'
import styled from 'styled-components'

//components
import DetailHeader from './detailHeader'
import ContentImage from './contentImage'
import ContentText from './contentText'


const DetailStyled = styled.div`
  flex-basis : 30%;
  display : flex;
  flex-direction : column;
  padding : 0 24px;
  border-left : 2px solid #DFE0DF;
`


function Detail() {
  const [isImage, setIsImage] = useState(true)

  const text = `다이어트중에 

  초밥한판 다쳐먹은 나 칭찬해~`

  return(
    <DetailStyled>
      <DetailHeader/>
        { isImage ? <ContentImage/> : null }  
        <ContentText value={text}/>
    </DetailStyled>
  )
}

export default Detail