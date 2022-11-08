const express = require('express')
const cors = require('cors')
const app = express()
const api = require('./api') // api 폴더의 index.js로 모든 api를 불러옴

// MongoDB & Mongoose 연결시키기 (./Model/index.js 에서 connect 함수 불러오기)  
const connect = require('./models') // 파일내에 index.js 파일이 있다면 파일을 통째로 가져와도 require 됨
connect(); // connect 함수를 실행함

app.use(cors())
app.use('/', api) //api 사용하기



const port = 3001
app.listen(port, ()=>{ console.log(`${port}번 포트 연결성공!`) })