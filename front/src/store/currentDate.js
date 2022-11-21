/*eslint-disable*/
import { createSlice } from "@reduxjs/toolkit";
//date-fns 함수
import { format, addMonths, subMonths } from "date-fns";



const initialState = format(new Date, 'yyyy/MM/dd')

const currentDateSlice = createSlice({
    name : 'currentDateState',
    initialState,
    reducers : {
        setNextMonth : (state, action)=>{
            return state = format(addMonths(new Date(action.payload), 1), 'yyyy/MM/dd')
        },
        setPrevMonth : (state, action)=>{
            return state = format(subMonths(new Date(action.payload), 1), 'yyyy/MM/dd')
        }
    }
})

export default currentDateSlice
export const { setNextMonth, setPrevMonth } = currentDateSlice.actions

