/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";
import axios from 'axios'
// date-fns
import { format } from "date-fns";

export default function usePostContent() {

    const uploadContent = useSelector( state => state.upload )
    
    // 업로드컨텐츠의 text가 비었는지 체크하는 함수
    const isUpoadContentText = ()=> {
        return uploadContent.text ? true : false
    }
    // 사용자가 오늘 이미 컨텐츠 업로드를 했는지 체크하는 함수
    // async & await 스타일로 작성해봄
    const isTodayUpload = async ()=> {
        const submitData = { today : new Date(format(new Date(),' yyyy-MM-dd')) }
        try {
            const response = await axios.get('http://localhost:3001/content/isTodayUpload', { params : submitData })
            response.data ? notifyTodayUpload() : null
        }
        catch(err) {
            alert('요청에러발생!', err)
        }
    }
    // 사용자가 오늘 이미 컨텐츠 업로드를 했다면, 포스트를 올릴수 없다고 안내해주는 함수
    const notifyTodayUpload = () => {
        alert('이미칭찬했음! 자의식과잉이야 뭐야~~')
        window.location.replace('/list')
    }

    // 업로드 성공여부를 사용자한테 안내하는 함수 (내용을 입력했다면 완성된 컨텐츠를 서버로 POST요청)
    // async & await 스타일
    const notifyUpload = async ()=> {
        if(isUpoadContentText()) {
            await axios.post('http://localhost:3001/content/upload', uploadContent )
            alert(`칭찬해~`, window.location.replace('/list'))
        }
        else alert('내용을 입력해주세요!')
    }

    return { notifyUpload, isTodayUpload }
}