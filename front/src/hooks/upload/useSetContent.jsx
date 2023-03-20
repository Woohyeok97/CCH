/* eslint-disable */
import React from "react";
import { useDispatch } from "react-redux";

//reducers
import { text, userId } from "../../store/upload";

//Custom Hook
export default function useSetContent() {
    const dispatch = useDispatch()

    const setText = (e)=> dispatch( text(e.target.value) )
    const setUserId = (id)=> dispatch( userId(id) )
    

    return { setText, setUserId }
}

