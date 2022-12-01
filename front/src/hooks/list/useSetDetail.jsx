/* eslint-disable */
import React, { useState } from "react";
// date-fns
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentContent } from "../../store/currentContent";



export default function useSetDetail() {
    const currentContent = useSelector( state => state.currentContent )
    const dispatch = useDispatch()

    const changeCurrentContent = (item)=> {
        if(item.date) item = {...item, date : format(new Date(item.date), 'yyyy년 M월 d일의나, 칭찬해~') }
        dispatch(setCurrentContent(item))
    }


    return { currentContent, changeCurrentContent }
}