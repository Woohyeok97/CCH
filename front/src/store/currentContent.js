/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";

const initialState = {
    _id: '',
    date: '',
    image: '',
    text: '',
    userId: ''
}

const currentContentSlice = createSlice({
    name : 'currentContentState',
    initialState,
    reducers : {
        setCurrentContent : (state, action)=>{
            if(!action.payload) return state = initialState
            return state = action.payload
        }
    }
})

export default currentContentSlice
export const { setCurrentContent } = currentContentSlice.actions