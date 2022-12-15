const express = require('express')
const router = express.Router()
// mongoose schema 가져오기
const Post = require('../models/post')
// req.body를 사용하기 위한 body-parser 셋팅
router.use( express.json() )
router.use( express.urlencoded({ extended : true }) )

// [ GET요청 ] post/get -> 포스트 가져오기
// [ POST요청 ] post/upload -> 포스트 올리기
// [ PUT요청 ] post/edit -> 포스트 수정하기
// [ DELETE요청 ] post/delete -> 포스트 삭제하기

router.get('/get', (req, res)=>{
    Post.find({ date : {$gte: new Date(req.query.startDate), $lte: req.query.endDate} },
    (에러, 결과)=>{
        if(!결과) return res.send({ message : '에러발생!', err : 에러 })
        res.send(결과)
    })

})

router.post('/upload', (req, res)=>{
    Post.create({
        userId : req.body.userId,
        date : req.body.date,
        text : req.body.text,
        image : req.body.image,
    }, (에러, 결과)=>{
        if(!결과) return res.send({ message : '에러발생!', err : 에러 })
        res.send({ 결과 : 결과, message : '업로드요청 성공!' })
    })
})

router.put('/edit', (req, res)=>{
    Post.updateOne({ _id : req.body._id }, { $set : { text : req.body.text, image : req.body.image } },
        (에러, 결과)=>{
            if(!결과) return res.send({ message : 'content 수정요청실패..', err : 결과 })
            console.log(req.body)
            res.send({ 결과 : 결과, message : 'content수정성공!' })
        })
})


router.delete('/delete', (req, res)=>{
    Post.deleteOne({ _id : req.body._id }, (에러, 결과)=>{
        if(!결과) return res.send({ message : 'content 삭제요청실패..', err : 에러 })
        res.send({ 결과 : 결과, message : 'content삭제성공! 다음에 또 칭찬해~' })
    })
})

module.exports = router