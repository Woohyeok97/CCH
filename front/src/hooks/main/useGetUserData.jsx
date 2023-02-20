/* eslint-disable */
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useGetUserData() {
      // 조건부 렌더링을 위해 렌더링스위치를 만들어줌
    const [ isLoginning, setIsLoginning ] = useState(false)

    // 구글OAuth에서 받은 IdToken을 변수에 저장
    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    const idToken = parsedHash.get("id_token");

    // 컴포넌트 첫 등장시, postIdToken 함수를 실행함
    useEffect(()=>{
        if(idToken) { 
            postIdToken(idToken)
            setIsLoginning(true)
        }
        else setIsLoginning(true)
    }, [])

    // 구글OAuth에서 받은 Access Token을 서버측에 전달
    const postIdToken = async (idToken)=> {
        const response = await axios.post('http://localhost:3001/login/getJWT', { idToken })
        console.log(response)
    }



    return { isLoginning, idToken }
}