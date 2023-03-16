/* eslint-disable */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
// jwt토큰 디코딩을 위한 jwt-decode 라이브러리
import jwt_decode from 'jwt-decode'
// reducers
import { setUserData } from '../../store/userData'


export default function useGetUserData() {
    const userData = useSelector( state => state.userData )
    const dispatch = useDispatch()
    const [ cookies ] = useCookies(['jwtToken'])

    useEffect(()=>{
        if(cookies.jwtToken) {
            getUserDataFromJwtToken(cookies.jwtToken)
        }
    },[])

    const getUserDataFromJwtToken= async (jwt)=> {
        dispatch( setUserData(jwt_decode(jwt)) )
    }



    return { getUserDataFromJwtToken }
}