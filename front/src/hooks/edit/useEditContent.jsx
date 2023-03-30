/* eslint-disable */
import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

// reducers
import { editCurrentContent } from "../../store/currentContent";
import { useCookies } from "react-cookie";


export default function useEditContent() {
    const currentContent = useSelector( state => state.currentContent )
    const [ cookie, ] = useCookies(['jwtToken'])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    // 게시글 수정중에 사용자가 중복으로 버튼을 누르는것을 방지하기위한, 에딧팅 state
    // 사용자가 여러번 수정버튼을 눌러, 불필요한 재렌더링을 막기위함
    const [ isEditing, setIsEditing ] = useState(false)

    // 해당 currentContent의 내용을 수정하는 함수
    const changeCurrentContent = (e)=> {
        const { name, value } = e.target
        dispatch( editCurrentContent({ name, value }) )
    }

    // MongoDB에 수정된 currentContent를 실고, put요청을 해주는 함수
    const editContent = async ()=> {
        if(isEditing) return // 이미 수정중이라면 버튼을 눌러도 아무일도 안일어나게함
        setIsEditing(true) // 수정중이 아니라면 isEditing을 true로 바꾸고 수정시작
        try {
            const response = await axios.put('https://port-0-cch-server-p8xrq2mlfs3c9q1.sel3.cloudtype.app/content/edit', 
            currentContent,
            { headers : { Authorization: `Bearer ${cookie.jwtToken}` } })
            alert(response.data.message)
            navigate('/list')
        }
        catch(error) {
            alert(error)
        }
        setIsEditing(false) // 수정작업이 끝나면 다시 false로 바꿔줌
    }

    return { changeCurrentContent, editContent }
}