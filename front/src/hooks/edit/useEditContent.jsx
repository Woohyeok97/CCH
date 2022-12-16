/* eslint-disable */
import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

// reducers
import { editCurrentContent } from "../../store/currentContent";


export default function useEditContent() {
    const currentContent = useSelector( state => state.currentContent )
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // 해당 currentContent의 내용을 수정하는 함수
    const changeCurrentContent = (e)=> {
        const { name, value } = e.target
        dispatch( editCurrentContent({ name, value }) )
    }

    // MongoDB에 수정된 currentContent를 실고, put요청을 해주는 함수
    const editContent = ()=> {
        axios.put('http://localhost:3001/content/edit', currentContent)
        .then((result)=>{ alert(result.data.message, navigate('/list') ) })
        .catch((err)=>{ console.log('컨텐츠 PUT요청 실패...', err) })
    }

    // 해당 currentContent 수정전, 사용자에게 물어보는 함수
    const isEditContent = ()=> {
        confirm('칭찬을 수정할까요?')
        ? editContent()
        : null
    }

    return { isEditContent, changeCurrentContent }
}