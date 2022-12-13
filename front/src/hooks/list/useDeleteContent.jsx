/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";


export default function useDeleteContent() {
    const currentContent = useSelector( state => state.currentContent )

    // 해당 currendContent 삭제시, MongoDB에 delete요청을 해주는 함수
    const deleteContent = ()=> {
        axios.delete('http://localhost:3001/content/delete', { data : { _id : currentContent._id } })
        .then((result)=>{ alert( result.data.message , window.location.replace('/list')) })
        .catch((err)=>{ console.log(err) })
    }
    // 해당 currentContent 삭제를 사용자한테 물어봐주는 함수
    const isDeleteContent = ()=> {
        confirm(`칭찬을 삭제할까요?
        
(주의! 해당날짜에 다시 칭찬할수 없습니다!)`)
        ? deleteContent()
        : alert('취소! 계속 칭찬해~')
    }

    
    return { isDeleteContent }
}