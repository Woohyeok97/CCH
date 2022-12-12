/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";


export default function useEditContent() {
    const currentContent = useSelector( state => state.currentContent )

    // 해당 currendContent의 내용수정시, MongoDB에 put요청을 해주는 함수
    const editContent = ()=> {
        axios.put('http://localhost:3001/content/edit')
        .then((result)=>{ console.log(result) })
        .catch((err)=>{ console.log('컨텐츠 PUT요청 실패...', err) })
    }

    // 해당 currendContent 삭제시, MongoDB에 delete요청을 해주는 함수
    const deleteContent = ()=> {
        axios.delete('http://localhost:3001/content/delete', { data : { _id : currentContent._id } })
        .then((result)=>{ alert( result.data.message , window.location.replace('/list')) })
        .catch((err)=>{ console.log(err) })
    }
    // 해당 currentContent 삭제를 사용자한테 물어봐주는 함수
    const isDeleteContent = ()=> {
        confirm('칭찬을 삭제할까요?')
        ? deleteContent()
        : alert('취소! 계속 칭찬해~')
    }

    
    return { isDeleteContent }
}