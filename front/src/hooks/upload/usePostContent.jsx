/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { isSameDay, format } from "date-fns";

export default function usePostContent() {

    const uploadContent = useSelector( state => state.upload )
    const content = useSelector( state => state.content )
    const navigate = useNavigate()
    
    // 업로드컨텐츠의 text가 비었는지 체크하는 함수
    const isUpoadContentText = ()=> {
        return uploadContent.text ? true : false
    }
    // 사용자가 오늘 이미 컨텐츠 업로드를 했는지 체크하는 함수
    const isTodayUpload = ()=> {
        const submitData = { today : new Date(format(new Date(),' yyyy-MM-dd')) }
        axios.get('http://localhost:3001/content/isTodayUpload', { params : submitData })
        .then((result) => result.data ? notifyTodayUpload() : null )
        .catch((err) => console.log('isTodayUpload함수 요청에러발생..!', err) )
    }
    // 사용자가 오늘 이미 컨텐츠 업로드를 했다면, 포스트를 올릴수 없다고 안내해주는 함수
    const notifyTodayUpload = () => {
        alert('이미칭찬했음! 자의식과잉이야 뭐야~~')
        navigate('/list')
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

    return { notifyUpload, isTodayUpload }
}