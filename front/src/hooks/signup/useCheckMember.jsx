/* eslint-disable */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSignUpUserData } from "../../store/signUpUserData";

export default function useCheckMember() {
    const dispatch = useDispatch()
    // 구글OAuth에서 받은 Access Token을 변수에 저장
    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = parsedHash.get("access_token");

    // 조건부 렌더링을 위한 state를 만들어줌
    // 함수동작후, 렌더링을 하기위함!
    const [renderState, setRenderState] = useState(false)

    // 해당유저가 CCH의 기존회원인지 확인후, list or signup 으로 이동시키는 함수
    const isMember = async ()=> { 
      if(accessToken) {
        const { data } = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`)
        const response = await axios.post('http://localhost:3001/user/test', { data : data.id })

        accessToken && !response.data.data ? window.location.replace('/signup'): window.location.replace('/list')
        dispatch( setSignUpUserData(data) ) // 비회원일 경우, signup 컴포넌트에서 데이터를 사용할수 있게, state변경함!
        setRenderState(true) // 위 동작이 다끝나고 조건부로 main 컴포넌트를 로드함!
      }
      else setRenderState(true)
    }

    useEffect(()=>{
      isMember()
    }, [])

    return { renderState, accessToken }
}