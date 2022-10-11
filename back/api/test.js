const express = require('express')
const router = express.Router()

router.get('hi/', (req, res)=>{
    res.send({test : 'ji'})
})

module.exports = router;