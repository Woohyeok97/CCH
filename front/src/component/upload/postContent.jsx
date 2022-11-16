 /* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import Button from '../common/button'

//custom hooks
import usePostContent from '../../hooks/upload/usePostContent'

const PostContentStyled = styled.section`
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

function PostContent() {
  const { notifyUpload } = usePostContent()
  
  return (
    <PostContentStyled>
      <div>
        <Button size="large" >취소</Button>
        <Button size="large" color="green" action={ notifyUpload }>칭찬!</Button>
      </div>
    </PostContentStyled>
  )
}



export default PostContent