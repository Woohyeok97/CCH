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
        content : (state, action)=> {
            state.content = action.payload
        },
        image : (state, action)=> {
            state.image = action.payload
        }
    }
})

export default uploadSlice
export const { content, image } = uploadSlice.actions