const express = require('express')
const User = require('../models/users')
const router = express.Router()

// request -> 요청
// response -> 응답

router.post('/', (req, res)=>{
    const user = User.create({
        name : '백우혁',
        email : 'email@gmail.com',
        nickName : '고나우'
    })
    res.send({test : 'ji'})
})

module.exports = router;