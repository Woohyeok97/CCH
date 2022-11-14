/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";
import axios from 'axios'

export default function usePostContent() {

    const uploadContent = useSelector( state => state.upload )

    const nullCheck = ()=> {
        // uploadContent의 프로퍼티중 빈값이 있는지 체크
    }
    const todayCheck = ()=> {
        // 사용자가 오늘 이미 포스트를 올렸는지 체크
    }

    const postContent = ()=>{
        axios.post('http://localhost:3001/post/upload')
        .then((result)=>{ console.log(result) })
        .catch((err)=>{ console.log('요청에러발생..!', err) })
    }

    return { postContent, nullCheck, todayCheck }
}