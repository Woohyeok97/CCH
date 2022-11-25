/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function usePostContent() {

    const uploadContent = useSelector( state => state.upload )
    const navigate = useNavigate()
    
    // 업로드컨텐츠의 text가 비었는지 체크
    const isUpoadContentText = ()=> {
        return uploadContent.text ? true : false
    }
    // 사용자가 오늘 이미 컨텐츠 업로드를 했는지 체크
    const isTodayupload = ()=> {
        return true
    }
    // 완성된 컨텐츠를 서버로 POST요청
    const postContent = ()=>{
        axios.post('http://localhost:3001/content/upload', uploadContent )
        .then((result)=>{ console.log(result.data.message)})
        .catch((err)=>{ console.log('요청에러발생..!', err) })
    }
    // 업로드 성공여부를 사용자한테 안내하는 함수
    const notifyUpload = ()=> {
        if(isUpoadContentText()) {
            postContent()
            alert('칭찬해~', navigate('/list'))
        }
        else alert('내용을 입력해주세요!')
    }

    return { notifyUpload }
}