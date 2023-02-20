const express = require('express')
const router = express.Router();

const user = require('./user')
const content = require('./content')
const login = require('./login')

router.use('/user', user)
router.use('/content', content)
router.use('/login', login)


module.exports = router;