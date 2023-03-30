/* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from "axios";
// react-cookie Library
import { useCookies } from 'react-cookie'
// jwt토큰 디코딩을 위한 jwt-decode 라이브러리
import jwt_decode from 'jwt-decode'
import { setUserData } from "../../store/userData";
import { useDispatch } from "react-redux";
// common custom hooks


export default function useLogin() {
    const [ isLoginning, setIsLoginnig ] = useState(false)
    // 구글OAuth에서 받은 IdToken을 변수에 저장
    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    const idToken = parsedHash.get("id_token");
    const accessToken = parsedHash.get("access_token");
    // 쿠키에 jwt를 저장하기 위한 cookies
    const [ cookies, setCookies, removeCookies ] = useCookies(['jwtToken'])
    const dispatch = useDispatch()

    // 컴포넌트 첫 등장시, postIdToken 함수를 실행함
    useEffect(()=>{
        if(idToken) { 
            saveJWTinCookie(idToken, accessToken)
        } else {
            setIsLoginnig(true)
        }
    }, [])
    
    // 구글OAuth에서 받은 Access Token을 서버측에 전달 & 받아온 JWT토큰을 쿠키에 저장
    const saveJWTinCookie = async (idToken, accessToken)=> {
        const response = await axios.post('https://port-0-cch-server-p8xrq2mlfs3c9q1.sel3.cloudtype.app/login/getJWT', { idToken : idToken, accessToken : accessToken })
        setCookies('jwtToken', response.data.jwtToken, { path : '/', maxAge : 3600 })
        dispatch( setUserData(jwt_decode(response.data.jwtToken)) )
        setIsLoginnig(true)
    }

    // 쿠키에 jwt 토크을 삭제하는 함수
    const removeJWTinCookie = () => {
        removeCookies('jwtToken', { path : '/' })
        window.location.replace('/')
    }

   

    return { isLoginning, removeJWTinCookie }
}