const express = require('express')
const app = express()
const cors = require('cors')
const test = require('./api/test')

app.use(cors())
app.use('/', test)

const port = 3001
app.listen(port, ()=>{ console.log(`${port}번 포트 연결성공!`) })