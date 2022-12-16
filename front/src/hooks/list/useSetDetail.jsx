/* eslint-disable */
import React, { useState } from "react";
// date-fns
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentContent } from "../../store/currentContent";



export default function useSetDetail() {
    const currentContent = useSelector( state => state.currentContent )
    const dispatch = useDispatch()

    // 특정셀 클릭시, 셀에 담겨있는 content를 currentContent로 변경해주는 함수
    // 만약 셀에 content가 있다면, 그중 Date객체는 문자열로 변환후, payload에 실음
    const changeCurrentContent = (item)=> {
        if(item.date) item = {...item, date : format(new Date(item.date), 'yyyy-MM-dd') }
        dispatch(setCurrentContent(item))
    }


    return { currentContent, changeCurrentContent }
}