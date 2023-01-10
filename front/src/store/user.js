/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const initialState = false


const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        setUserMember : (state, action)=> {
            return state = action.payload
        },
    }
})

export default userSlice
export const { setUserMember } = userSlice.actions