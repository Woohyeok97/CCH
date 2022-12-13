/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    _id: '',
    date: '',
    image: '',
    text: '',
    userId: ''
}
// 현재 선택한 content 데이터를 담고있는 currentContent state 
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