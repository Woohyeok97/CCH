/* eslint-disable */
import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function useEditContent() {
    const currentContent = useSelector( state => state.currentContent )
    const [payloadContent, setPayloadContent] = useState({...currentContent})
    console.log(payloadContent)


// 해당 currendContent의 내용수정시, MongoDB에 put요청을 해주는 함수
    const editContent = ()=> {
        axios.put('http://localhost:3001/content/edit', payloadContent)
        .then((result)=>{ console.log(result) })
        .catch((err)=>{ console.log('컨텐츠 PUT요청 실패...', err) })
    }

    // 해당 currentContent 수정전, 사용자에게 물어보는 함수
    const isEditContent = ()=> {
        confirm('칭찬을 수정할까요?')
        ? editContent()
        : null
    }

    return { isEditContent, payloadContent, setPayloadContent }
}