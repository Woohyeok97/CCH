const express = require('express')
const router = express.Router()
// mongoose schema 가져오기
const User = require('../models/users')
// req.body를 사용하기 위한 body-parser
router.use( express.json() )
router.use( express.urlencoded({ extended : true }) )

// 구글한테 받은 인가코드(AccessToken)으로 조회한 사용자정보를 이용해, 이미 가입된 회원인지 확인
router.post('/isMember', (req, res)=>{
    User.findOne({ userId : req.body.userId }, (에러, 결과)=>{
        console.log(req.body.userId)
        if(!결과) return res.send(false)
        res.send(true)
    })
})

router.post('/test', (req, res)=>{
    User.findOne({ userId : req.body.data }, (에러, 결과)=>{
        console.log(req.body.data)
        console.log('결과임 => ', 결과)
        if(!결과) return res.send({ data : false, message : '이런사람 없는디' })
        res.send({ data : true, message : '있네유' })
    })
})

module.exports = router