/* eslint-disable */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

//components
import LayoutBox from "../../common/layoutBox";
import CalendarHeader from "./calendarHeader";
import CalendarDay from "./calendarDay";
import CalendarCell from "./calendarCell";

//custom hooks
import useGetContent from "../../../hooks/list/useGetContent";


function Calendar() {
  const currentDate = useSelector( state => state.currentDate)
  const { getContent }  = useGetContent()

  // currentDate가 바뀔때마다 해당월의 컨텐츠를 가져올수있게 useEffect()사용
  useEffect(()=>{
    getContent()
  },[currentDate])


  return (
    <LayoutBox basis="80%" direction="column" justify="start">
      {/* 캘린더헤더 */}
      <CalendarHeader/>
      {/* 캘린더요일 */}
      <CalendarDay/>
      {/* 캘린더셀 */}
      <CalendarCell/>
    </LayoutBox>
  )
}

export default Calendar