import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

const selectedDateSlice = createSlice({
    name : 'selectedDateState',
    initialState,
    reducers : {
        setSeletedDate : (state, action)=>{
            return state = action.payload
        },
    }
})

export default selectedDateSlice
export const { setSeletedDate } = selectedDateSlice.actions