/* eslint-disable */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../store/userData";

export default function useCheckMember() {
    const userData = useSelector( state => state.userData )
    const dispatch = useDispatch()

    // 구글OAuth에서 받은 Access Token을 변수에 저장
    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = parsedHash.get("access_token");

    // 조건부 렌더링을 위해 렌더링스위치를 만들어줌
    const [renderState, setRenderState] = useState(false)

    // 구글한테 유저정보를 받고 redux로 상태관리
    const getUserData = async ()=> { 
      if(accessToken) {
        const { data } = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`)
        dispatch( setUserData(data) )
      }
        else setRenderState(true) // access token이 없는 경우에도 렌더링스위치를 켜줌
    }

    // 컴포넌트 첫 등장시, getUserData() 함수를 실행함
    useEffect(()=>{
      getUserData()
    }, [])
    // getUserData() 함수로 userData가 변경될때마다 렌더링스위치를 켜줌(조건부렌더링 처럼!)
    useEffect(()=>{
      if(userData) setRenderState(true)
    }, [userData])

   

    return { renderState, accessToken }
}