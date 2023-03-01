/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

const jwtSlice = createSlice({
    name : 'jwtToken',
    initialState,
    reducers : {
        setJwtToken : (state, action) => {
           return state = action.payload
        }
    }
})

export default jwtSlice
export const { setJwtToken } = jwtSlice.actions