const express = require('express')
const router = express.Router();

const content = require('./content')
const login = require('./login')

router.use('/content', content)
router.use('/login', login)


module.exports = router;