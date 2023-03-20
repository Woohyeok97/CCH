/* eslint-disable */
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import axios from 'axios'
// date-fns
import { format } from "date-fns";


export default function usePostContent() {

    const uploadContent = useSelector( state => state.upload )
    const userData = useSelector( state => state.userData )
    const navigate = useNavigate()
    const [ isUploading, setIsUploading ] = useState(false)


    // 업로드컨텐츠의 text가 비었는지 체크하는 함수
    const isUploadContentText = ()=> !!uploadContent.text
  
    // 사용자가 오늘 업로드 했는지 체크하는 함수
    const checkTodayUpload = async ()=> {
        const submitData = { userId : userData.userId ,today : new Date(format(new Date(),' yyyy-MM-dd')) }
        const response = await axios.get('http://localhost:3001/content/isTodayUpload', { params : submitData })
        return response.data
    }
    // 서버에 사용자가 작성한 컨텐츠를 전송하는 함수
    const postUploadContent = async ()=> {
        if(isUploading) return // 불필요한 재렌더링을 막기위한 isUploading
        setIsUploading(true) // 이로써 버튼을 여러번 눌러도 한번막 작동하기 때문에 불필여한 재렌더링을 막을수있음

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
        setIsUploading(false)
    }


    return { postUploadContent }
}