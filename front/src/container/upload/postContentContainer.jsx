/* eslint-disable */
import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import PostContent from '../../component/upload/postContent'

function PostContentContainer() {

  const uploadContent = useSelector( state => state.upload )
  console.log(uploadContent)

  const postContent = ()=> {
    axios.post('http://localhost:3001/post/', uploadContent)
    .then((result)=>{ console.log(result) })
    .catch((err)=>{ console.log('요청에러 발생!', err) })
  }

  return <PostContent action={postContent}/>
}

export default PostContentContainer