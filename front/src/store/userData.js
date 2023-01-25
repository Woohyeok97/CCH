/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const initialState = ''


const userDataSlice = createSlice({
    name : 'userData',
    initialState,
    reducers : {
        setUserData : (state, action)=> {
            return state = action.payload
        },
    }
})

export default userDataSlice
export const { setUserData } = userDataSlice.actions