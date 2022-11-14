/* eslint-disable */
import React from "react";
import { useDispatch } from "react-redux";

//reducers
import { content, image } from "../../store/upload";

//Custom Hook
export default function useSetContent() {
    const dispatch = useDispatch()

    const setText = (e)=> dispatch(content(e.target.value))
    const setImage = (e)=> dispatch(image(e.target.value))

    return { setText, setImage }
}

