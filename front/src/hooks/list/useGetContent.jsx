/* eslint-disable */
import React from "react";
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useCookies } from "react-cookie";

//date-fns
import { startOfWeek, endOfWeek, endOfMonth } from "date-fns";
//reducers
import { setContentState } from "../../store/content";



export default function useGetContent() {
    const currentMonth = useSelector( state => state.currentMonth )
    const dispatch = useDispatch()
    const [ cookie, ] = useCookies(['jwtToken'])
    // 서버에서 content를 받아오는 코드
    // 컨텐츠를 가져올 날짜범위를 담고있는 scopeOfDate객체
    const scopeOfDate = {
        startDate : startOfWeek(new Date(currentMonth)), //해당월 첫째주의 첫날
        endDate : endOfWeek(endOfMonth(new Date(currentMonth))) // 해당월 마지막주의 마지막날
    }

    
    // 서버한테 날짜범위를 주고 데이터를 받아와 content state에 저장해주는 함수
    const getContent = ()=>{
        axios.get('https://port-0-cch-server-p8xrq2mlfs3c9q1.sel3.cloudtype.app/content/get', { 
            params : scopeOfDate ,
            headers : { Authorization: `Bearer ${cookie.jwtToken}` }
        })
        .then((result)=>{ dispatch(setContentState(result.data)) })
        .catch((err)=>{ console.log('요청에러 발생...', err) })     
    }

    
    return { getContent }
}
