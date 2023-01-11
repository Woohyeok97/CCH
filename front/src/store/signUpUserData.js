/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const initialState = ''


const signUpUserDataSlice = createSlice({
    name : 'signUpUserData',
    initialState,
    reducers : {
        setSignUpUserData : (state, action)=> {
            return state = action.payload
        },
    }
})

export default signUpUserDataSlice
export const { setSignUpUserData } = signUpUserDataSlice.actions