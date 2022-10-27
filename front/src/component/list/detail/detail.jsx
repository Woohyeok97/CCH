/* eslint-disable */
import React, { useState } from 'react'
import styled from 'styled-components'

import DetailHeader from './detailHeader'
import ContentImage from './contentImage'
import ContentText from './contentText'

function Detail() {
  const [isImage, setIsImage] = useState(true)

  const Detail = styled.div`
    flex-basis : 30%;
    display : flex;
    flex-direction : column;
    padding : 0 24px;
    border-left : 2px solid #DFE0DF;
  `
  const text = `다이어트중에 

  초밥한판 다쳐먹은 나 칭찬해~`

  return(
    <Detail>
      <DetailHeader/>
      { isImage ? <ContentImage/> : null }  
      <ContentText value={text}/>
    </Detail>
  )
}

export default Detail