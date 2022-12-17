/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";

// useSeletor는 여기서 바로 호출이 안되는것 같은데...? 오류가 생기네
// react hooks는 함수안에서만 호출해야하니까..

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
    }
})

export default uploadSlice
export const { text, image } = uploadSlice.actions