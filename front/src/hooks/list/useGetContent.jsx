/* eslint-disable */
import React from "react";
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

//reducers
import { setContentState  } from "../../store/content";

export default function useGetContent() {
    const content = useSelector( state => state.content)
    const currentDate = useSelector( state => state.currentDate )
    const selectedDate = useSelector( state => state.selectedDate )
    const dispatch = useDispatch()
    
    
    // 해당달에 사용자가 올린 컨텐츠 GET요청 & content state에 저장
    const getContent = ()=>{
        axios.get('http://localhost:3001/content/get', currentDate )
        .then((result)=>{ dispatch(setContentState (result.data)) })
        .catch((err)=>{ console.log('요청에러 발생...', err) })
        console.log('getContent함수 실행됨!')
    }
    // 사용자가 선택한 컨텐츠를 찾아주는 함수
    const getSelectContent = ()=> {
        console.log(selectedDate)
    }
    return { getContent, getSelectContent }
}
