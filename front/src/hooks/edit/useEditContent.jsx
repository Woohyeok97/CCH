/* eslint-disable */
import React from "react";
import axios from "axios";

export default function useEditContent() {

// 해당 currendContent의 내용수정시, MongoDB에 put요청을 해주는 함수
    const editContent = ()=> {
        axios.put('http://localhost:3001/content/edit')
        .then((result)=>{ console.log(result) })
        .catch((err)=>{ console.log('컨텐츠 PUT요청 실패...', err) })
    }

    // 해당 currentContent 수정전, 사용자에게 물어보는 함수
    const isEditContent = ()=> {
        confirm('칭찬을 수정할까요?')
        ? editContent()
        : null
    }

    return { isEditContent }
}