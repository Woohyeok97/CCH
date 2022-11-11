/* eslint-disable */
import React from 'react'
import axios from 'axios'
import PostContent from '../../component/upload/postContent'

function PostContentContainer({ content }) {

  const postContent = ()=> {
    axios.post('http://localhost:3001/post/', content)
    .then((result)=>{ console.log(result) })
    .catch((err)=>{ console.log('요청에러 발생!', err) })
  }

  return <PostContent action={postContent}/>
}

export default PostContentContainer