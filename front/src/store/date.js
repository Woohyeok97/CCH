import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const dateSlice = createSlice({
    name : 'dateState',
    initialState,
    reducers : {
        setDate : (state, action)=>{
            state = action.payload
        },

    }
})

export default dateSlice
export const { setDate } = dateSlice.actions

