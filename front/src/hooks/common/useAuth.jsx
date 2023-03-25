/* eslint-disable */
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import axios from 'axios'

export default function useAuth() {
    const [ cookie, ] = useCookies(['jwtToken'])
    const navigate = useNavigate()

    useEffect(()=>{
        authJWT()
    },[])

    const authJWT = async ()=> {
        if(!cookie.jwtToken) {
            alert('토큰이 없네 로그인 먼저 해주세요!')
            navigate('/')
            return
        }

        const response = await axios.post('http://localhost:3001/login/authJWT', { jwtToken : cookie.jwtToken })
        if(response.data.authResult) {
            console.log('인증된사용자입니다.')
            return
        } else {
            alert('로그인 먼저 해주세요!')
            navigate('/')
        }
    }

    return {  }
}