/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useCookies } from "react-cookie";


export default function useDeleteContent() {
    const currentContent = useSelector( state => state.currentContent )
    const [ cookie, ] = useCookies(['jwtToken'])

    // 해당 currendContent 삭제시, MongoDB에 delete요청을 해주는 함수
    const deleteContent = ()=> {
        axios.delete('https://port-0-cch-server-p8xrq2mlfs3c9q1.sel3.cloudtype.app/content/delete', { 
            data : { _id : currentContent._id },
            headers : { Authorization: `Bearer ${cookie.jwtToken}` } 
        })
        .then((result)=>{ alert( result.data.message , window.location.replace('/list')) })
        .catch((err)=>{ console.log(err) })
    }
    // 해당 currentContent 삭제를 사용자한테 물어봐주는 함수
    const isDeleteContent = ()=> {
        confirm(`칭찬을 삭제할까요?
        
(주의! 오늘을 제외한 다른날짜에 다시 칭찬할수 없습니다!)`)
        ? deleteContent()
        : alert('취소! 계속 칭찬해~')
    }

    
    return { isDeleteContent }
}