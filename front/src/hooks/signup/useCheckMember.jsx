/* eslint-disable */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setUserMember } from "../../store/user";

export default function useCheckMember() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector( state => state.user )

    const isMember = async (user) => {
        try {
            const response = await axios.post('http://localhost:3001/user/isMember', { userId : user })
            response.data ? navigate('/list') : navigate('/signup')
        }
        catch(err) {
            console.log('isMember() 에러발생!', err)
        }
    }

    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = parsedHash.get("access_token");
    const [swit, setSwit] = useState(false)

    const test = async (token)=> { 
      if(token) {
        const { data } = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`);
        const response = await axios.post('http://localhost:3001/user/test', { data : data.id })
        if(token && !response.data.data) navigate('/signup') 
        setSwit(true)
      }
      else setSwit(true)
    }
    return { isMember, test, swit, setSwit }
}