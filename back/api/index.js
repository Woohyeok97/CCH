const express = require('express')
const router = express.Router();

const user = require('./user')
const content = require('./content')

router.use('/user', user)
router.use('/content', content)


module.exports = router;