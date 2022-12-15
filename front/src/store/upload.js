/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";
import { useSelector } from "react-redux";

const currentContent = useSelector( state => state.currentContent )

// DB에 전송할 Content data를 담을 state 
const initialState = {
    userId : '123',
    date : format(new Date(), 'yyyy-MM-dd'),
    text : '',
    image : '',
}


const uploadSlice = createSlice({
    name : 'uploadState',
    initialState,
    reducers : {
        text : (state, action)=> {
            state.text = action.payload
        },
        image : (state, action)=> {
            state.image = action.payload
        },
        editText : (state, action)=> {
           return state = { ...currentContent, text : action.payload } 
        },
        editImage : (state, action)=> {
           return state = { ...currentContent, image : action.payload }
        },
    }
})

export default uploadSlice
export const { text, image, editText, editImage } = uploadSlice.actions