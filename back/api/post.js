const express = require('express')
const router = express.Router()
// mongoose schema 가져오기
const Post = require('../models/post')

// [ GET요청 ] post/get -> 포스트 가져오기
// [ POST요청 ] post/upload -> 포스트 올리기
// [ PUT요청 ] post/edit -> 포스트 수정하기
// [ DELETE요청 ] post/delete -> 포스트 삭제하기

router.get('/post/get', (req, res)=>{
    Post.create({
        name : '백우혁',
        email : 'qordngur@gmail.com',
        nickName : '고나우'
    })
    res.send({ message : '칭찬 업로드 성공!' })
})

router.post('post/upload', (req, res)=>{

})

router.put('/post/edit'), (req, res)=>{

}

router.delete('/post/delete', (req, res)=>{

})

module.exports = router