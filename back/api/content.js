const express = require('express')
const router = express.Router()
// mongoose schema 가져오기
const Post = require('../models/post')
// jwt라이브러리
const jwt = require('jsonwebtoken')

// req.body를 사용하기 위한 body-parser 셋팅
router.use( express.json() )
router.use( express.urlencoded({ extended : true }) )


// [ GET요청 ] post/get -> 포스트 가져오기
// [ POST요청 ] post/upload -> 포스트 올리기
// [ PUT요청 ] post/edit -> 포스트 수정하기
// [ DELETE요청 ] post/delete -> 포스트 삭제하기

// 클라이언트에서 보낸 jwt토큰을 검증하는 미들웨어
const verifyJWT = (req, res, next) => {
    // 헤더에서 jwt토큰을 추출
    const jwtToken = req.headers.authorization && req.headers.authorization.split(' ')[1];
    // 만약 jwt토큰이 없다면 return시켜 api를 종료시킴
    if(!jwtToken) return res.send({ message : '인증되지 않은 사용자입니다!' })
    // jwt.verify메소드로 검증에 성공하면 라우터로 넘어감
    try {
        const decoded = jwt.verify(jwtToken, 'sdwfrfsdefgewsdasdsde23ds')
        console.log('jwt인증성공!')
        req.user = decoded
        next()
    // 유효하지않은 jwt토큰일시 에러를 알려줌 
    } catch(err) {
        res.send({ message : '유효하지않은 jwt토큰입니다.' })
    }
}


// 해당달의 컨텐츠를 찾아서 보내주는 함수
router.get('/get', verifyJWT, (req, res) =>{
    Post.find({
        $and : [
            { date : { $gte: new Date(req.query.startDate), $lte: req.query.endDate } },
            { userId : req.user.userId }
        ]
    }, (에러, 결과)=>{
        if(!결과) return res.send({ message : '에러발생!', err : 에러 })
        res.send(결과)
    })

})
// 오늘날짜에 포스트를 업로드 했는지 확인해주는 함수
router.get('/isTodayUpload', (req, res)=>{
    Post.findOne({
        $and : [
            { userId : req.query.userId },
            { date : req.query.today }
        ]
    }, (에러, 결과)=>{
        if(!결과) return res.send(false)
        res.send(true)
    })
})
// DB에 포스트를 업로드 하는 함수
router.post('/upload', verifyJWT, (req, res)=>{
    Post.create({
        userId : req.user.userId,
        date : req.body.date,
        text : req.body.text,
    }, (에러, 결과)=>{
        if(!결과) return res.send({ message : '에러발생!', err : 에러 })
        res.send({ 결과 : 결과, message : '업로드요청 성공!' })
    })
})
// DB에 있는 컨텐츠를 수정해주는 함수
router.put('/edit', verifyJWT, (req, res)=>{
    Post.updateOne({ _id : req.body._id }, { $set : { text : req.body.text,  } },
        (에러, 결과)=>{
            if(!결과) return res.send({ message : 'content 수정요청실패..', err : 결과 })
            res.send({ 결과 : 결과, message : 'content수정성공!' })
        })
})
// DB에 있는 컨텐츠를 삭제해주는 함수
router.delete('/delete', verifyJWT, (req, res)=>{
    Post.deleteOne({ _id : req.body._id }, (에러, 결과)=>{
        if(!결과) return res.send({ message : 'content 삭제요청실패..', err : 에러 })
        res.send({ 결과 : 결과, message : 'content삭제성공! 다음에 또 칭찬해~' })
    })
})

module.exports = router