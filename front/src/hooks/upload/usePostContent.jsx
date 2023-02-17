/* eslint-disable */
import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import axios from 'axios'
// date-fns
import { format } from "date-fns";


export default function usePostContent() {

    const uploadContent = useSelector( state => state.upload )
    const navigate = useNavigate()
    
    // 업로드컨텐츠의 text가 비었는지 체크하는 함수
    const isUploadContentText = ()=> !!uploadContent.text
  
    // 사용자가 오늘 업로드 했는지 체크하는 함수
    const checkTodayUpload = async ()=> {
        const submitData = { today : new Date(format(new Date(),' yyyy-MM-dd')) }
        const response = await axios.get('http://localhost:3001/content/isTodayUpload', { params : submitData })
        return response.data
    }
    // 서버에 사용자가 작성한 컨텐츠를 전송하는 함수
    const postUploadContent = async ()=> {
        const isUpload = await checkTodayUpload()
        if(isUpload) {
            alert('오늘 이미 칭찬했어용!')
            navigate('/list')
            return
        }
        if(!isUploadContentText()) {
            alert('내용을 입력해주세요!')
            return
        }

        try {
            await axios.post('http://localhost:3001/content/upload', uploadContent );
            alert(`칭찬해~`)
            navigate('/list')

        } catch(error) {
            alert('요청에러발생!', error)
            navigate('/list')
        }

    }


    return { postUploadContent }
}