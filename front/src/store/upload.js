/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";

// useSeletor는 여기서 바로 호출이 안되는것 같은데...? 오류가 생기네
// react hooks는 함수안에서만 호출해야하니까..

// DB에 전송할 Content data를 담을 state 
const initialState = {
    userId : '',
    date : format(new Date(), 'yyyy-MM-dd'),
    text : '',
}


const uploadSlice = createSlice({
    name : 'uploadState',
    initialState,
    reducers : {
        userId : (state, action)=> {
            state.userId = action.payload
        },
        text : (state, action)=> {
            state.text = action.payload
        },
    }
})

export default uploadSlice
export const { text, userId } = uploadSlice.actions