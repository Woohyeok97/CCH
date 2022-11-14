/* eslint-disable */
// state(slice)를 생성해주는 createSlice 함수(조각)
import { createSlice } from "@reduxjs/toolkit";

// initialState는 state초기값인데 직관적으로 보일수 있도록 따로 선언해줌
const initialState = {
    _id : '123',
    userId : '123',
    date : '2022년 12월 25일',
    content : '다이어트중에 초밥2판 쳐먹은나, 칭찬헤~',
    image : ''
}

// createSlice({ 필수속성 })메소드로 state를 만들어줌
// 필수속성에는 name(state이름), initialState(초기값), reducerS(state변경함수) 
// reducer 속성에는 state변경함수(기존initialState, 액션)을 등록함
const contentsSlice = createSlice({
    name : 'contentState',
    initialState,
    reducers : {
        getState : (state, action)=> {

        },
    }
})

// state를 만든후, 컴포넌트에서 dispatch할때 쓸수있도록 export해줌
// 마찬가지로 reducers(state변경함수)도 dispatch할때 쓸수있게 구조분해할당 후, export해줌
export default contentsSlice
export const { getState } = contentsSlice.actions
