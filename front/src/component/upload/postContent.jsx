 /* eslint-disable */
import React from 'react'
import styled from 'styled-components'

import Button from '../common/button'

function PostContent({ action }) {
  const PostContent = styled.section`
    flex-basis : 20%;
    display : flex;
    justify-content : center;
    align-items : center;

    > div {
      display : flex;
      justify-content : space-around;
      width : 260px;
    }
    `


  return (
    <PostContent>
      <div>
        <Button size="large" action={action} >취소</Button>
        <Button size="large" color="green" action={action} >칭찬!</Button>
      </div>
    </PostContent>
  )
}

export default PostContent