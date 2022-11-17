/* eslint-disable */
import React from "react";
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setContentState  } from "../../store/content";

export default function useGetContent() {
    const thisMonthContent = useSelector( state => state.content)
    const dispatch = useDispatch()
 
    
    // 해당달에 사용자가 올린 컨텐츠 GET요청 & content state에 저장
    const getContents = ()=>{
        axios.get('http://localhost:3001/content/get')
        .then((result)=>{ dispatch(setContentState (result.data)) })
        .catch((err)=>{ console.log('요청에러 발생...', err) })
        console.log('함수실행')
    }
    // 사용자가 선택한 컨텐츠를 찾아주는 함수
    const getSelectContent = ()=> {

    }
    return { getContents, getSelectContent }
}
