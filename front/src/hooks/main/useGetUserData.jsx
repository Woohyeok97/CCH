import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
// jwt토큰 디코딩을 위한 jwt-decode 라이브러리
import jwt_decode from 'jwt-decode'


export default function useGetUserData() {
    const userData = useSelector( state => state.userData )
    const dispatch = useDispatch()
    const [ cookies ] = useCookies(['jwtToken'])

    return {  }
}