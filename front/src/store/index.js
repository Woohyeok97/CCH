/* eslint-disable */
// state를 store에 등록하는 configureStore() 함수
import { configureStore } from "@reduxjs/toolkit";

// state 모음
import contentSlice from "./content";
import uploadSlice from "./upload";
import dateSlice from "./date";

// state를 만든후, export default로 configureStore 함수에 등록후 내보내준다.
// configureStore함수에 파라미터로 객체를 넣고 그안에 reducer(상태변경기) 속성에 state.reducer들을 등록해준다.
//
export default configureStore({
    reducer : {
        content : contentSlice.reducer,
        upload : uploadSlice.reducer,
        date : dateSlice.reducer,
    }
})

