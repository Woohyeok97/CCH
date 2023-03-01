/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// react-cookie Library
import { useCookies } from 'react-cookie'
// reducers
import { setJwtToken } from "../../store/jwt";


export default function useLogin() {
    const dispatch = useDispatch() 
    // const jwtToken = useSelector( state => state.jwtToken )
      // 조건부 렌더링을 위해 렌더링스위치를 만들어줌
    const [ isLoginning, setIsLoginning ] = useState(false)
    // 구글OAuth에서 받은 IdToken을 변수에 저장
    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    const idToken = parsedHash.get("id_token");
    // 쿠키에 jwt를 저장하기 위한 cookies
    const [ cookies, setCookies ] = useCookies(['jwtToken'])

    // 컴포넌트 첫 등장시, postIdToken 함수를 실행함
    useEffect(()=>{
        if(idToken) { 
            saveJWTinCookie()
            setIsLoginning(true)
        }
        else setIsLoginning(true)
    }, [])
    
    

    // 구글OAuth에서 받은 Access Token을 서버측에 전달 & 받아온 JWT토큰을 반환 
    const postIdToken = async (idToken)=> {
        const response = await axios.post('http://localhost:3001/login/getJWT', { idToken })
        return { jwt : response.data.jwtToken }
    }
    // 쿠키에 jwt 토크을 저장하는 함수
    const saveJWTinCookie = async () => {
        const result = await postIdToken(idToken)
        setCookies('jwtToken', result.jwt, { path : '/', maxAge : 3600 })
        // if(cookies.jwtToken) dispatch( setJwtToken(cookies.jwtToken) )
    }
    // 쿠키에 jwt 토크을 삭제하는 함수
    const removeJWTinCookie = () => {
        setCookies('jwtToken', null, { path : '/' })
    }

   
    



    return { isLoginning, idToken }
}