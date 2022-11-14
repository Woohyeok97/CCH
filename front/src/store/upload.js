/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId : '고나우',
    date : new Date(),
    content : '오늘의 나, 칭찬해~',
    image : '사진',
}

const uploadSlice = createSlice({
    name : 'uploadState',
    initialState,
    reducers : {
        setState : (state, action)=> {

        },
    }
})

export default uploadSlice
export const { setState } = uploadSlice.actions