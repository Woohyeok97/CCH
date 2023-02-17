/* eslint-disable */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

//reducers
import { text, image } from "../../store/upload";

//Custom Hook
export default function useSetContent() {
    const upload = useSelector( state => state.upload )
    const dispatch = useDispatch()

    const setText = (e)=> dispatch(text(e.target.value))
    const setImage = (e)=> dispatch(image(e.target.files[0].name))
    
    console.log(upload)

    return { setText, setImage }
}

