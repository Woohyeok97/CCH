/* eslint-disable */
import React from "react";
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

//date-fns
import { startOfWeek, endOfWeek, endOfMonth } from "date-fns";

//reducers
import { setContentState  } from "../../store/content";

export default function useGetContent() {
    const content = useSelector( state => state.content)
    const currentDate = useSelector( state => state.currentDate )
    const selectedDate = useSelector( state => state.selectedDate )
    const dispatch = useDispatch()
    
    // 서버에서 content를 받아오는 코드
    // 컨텐츠를 가져올 날짜범위를 담고있는 scopeOfDate객체
    const scopeOfDate = {
        startDate : startOfWeek(new Date(currentDate)), //해당월 첫째주의 첫날
        endDate : endOfWeek(endOfMonth(new Date(currentDate))) // 해당월 마지막주의 마지막날
    }
    // 서버한테 날짜범위를 주고 데이터를 받아와 content state에 저장해주는 함수
    const getContent = ()=>{
        axios.get('http://localhost:3001/content/get', { params : scopeOfDate } )
        .then((result)=>{ dispatch(setContentState (result.data)); })
        .catch((err)=>{ console.log('요청에러 발생...', err) })
    }


    // 사용자가 선택한 컨텐츠를 찾아주는 함수
    const getSelectContent = ()=> {
        
    }
    return { getContent, getSelectContent }
}
