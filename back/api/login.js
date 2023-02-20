
const express = require('express')
const router = express.Router()
// 구글 OAuth 인증
const { OAuth2Client } = require('google-auth-library')
// JWT
const jwt = require('jsonwebtoken')

// req.body를 사용하기 위한 body-parser 셋팅
router.use( express.json() )
router.use( express.urlencoded({ extended : true }) )

// 구글 클라이언트 아이디
const CLIENT_ID = '502387057863-ca5enr2rm47gsqjidg5jd6l6aavn5r3o.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID)

// 클라이언트한테서 받은 idToken 인증을 위한 미들웨어
const verifyIdToken = async (req, res, next) => {
  const idToken = req.body.idToken

  try {
    // 클라이언트한테서 받은 idToken 인증
    const ticket = await client.verifyIdToken({
      idToken: idToken,
      audience: CLIENT_ID,
    })
    const payload = ticket.getPayload();
    res.locals.payload = payload;
    next()

  }catch (error) {
    console.error(error)
    res.send('요청에러발생!')
  }

}



router.post('/getJWT',verifyIdToken, (req, res) => {

    // 시크릿키와, 미들웨어를 통해 받은 사용자정보를 저장
    const secretKey = 'sdwfrfsdefgewsdasdsde23ds'
    const jwtPayload = {
      userId : res.locals.payload.sub,
      name : res.locals.payload.name,
      email : res.locals.payload.email
    }
    // JWT토큰 발급
    const jwtToken = jwt.sign(jwtPayload, secretKey, { expiresIn: '1h' })
    // 발급한 jwt토큰을 전달
    res.send({ jwtToken: jwtToken });
});

module.exports = router;

