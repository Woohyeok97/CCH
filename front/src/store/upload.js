/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";


const initialState = {
    userId : '123',
    date : format(new Date(), 'yyyy-MM-dd'),
    text : '',
    image : 'sdf',
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
        }
    }
})

export default uploadSlice
export const { text, image } = uploadSlice.actions