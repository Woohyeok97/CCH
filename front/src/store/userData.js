/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

// 근데.. 유저데이터를 redux로 관리하는게 맞나?
// 새로고침하면 어차피 초기화 되는데 다른방법으로 관리해야하는게 맞지않을까?
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