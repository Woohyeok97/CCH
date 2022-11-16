/* eslint-disable */
import { addMonths, subMonths, format} from "date-fns";
import React, { useEffect, useState } from "react";

import LayoutBox from "../../common/layoutBox";
import CalendarHeader from "./calendarHeader";
import CalendarDay from "./calendarDay";
import CalendarCell from "./calendarCell";
import useGetContent from "../../../hooks/list/useGetContent";


function Calendar() {

  const [ currentDate, setCurrentDate ] = useState(new Date())
  const [ selectDate, setSelectDate ] = useState(new Date())
  const prevMonth = ()=> setCurrentDate(subMonths(currentDate, 1))
  const nextMonth = ()=> setCurrentDate(addMonths(currentDate, 1))

  const { getContents } = useGetContent()
  useEffect(()=>{
    getContents()
  })

  return (
    <LayoutBox basis="80%" direction="column" justify="start">
      {/* 캘린더헤더 */}
      <CalendarHeader currentDate={currentDate} prevMonth={prevMonth} nextMonth={nextMonth}/>
      {/* 캘린더요일 */}
      <CalendarDay/>
      {/* 캘린더셀 */}
      <LayoutBox direction="column" basis="90%">
        <CalendarCell currentDate={currentDate}  selectDate={selectDate} setSelectDate={setSelectDate}/>
      </LayoutBox>
    </LayoutBox>
  )
}

export default Calendar