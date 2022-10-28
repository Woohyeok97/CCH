/* eslint-disable */
import { addMonths, subMonths} from "date-fns";
import React, { useState } from "react";

import LayoutBox from "../../common/layoutBox";
import CalendarHeader from "./calendarHeader";
import CalendarDay from "./calendarDay";
import CalendarCell from "./calendarCell";


function Calendar() {

  const [ currentDate, setCurrentDate ] = useState(new Date())
  const prevMonth = ()=> setCurrentDate(subMonths(currentDate, 1))
  const nextMonth = ()=> setCurrentDate(addMonths(currentDate, 1))

  return (
    <LayoutBox basis="70%" direction="column" justify="start">
      <CalendarHeader currentDate={currentDate} prevMonth={prevMonth} nextMonth={nextMonth}/>
      <CalendarDay/>
      <CalendarCell currentDate={currentDate} />
    </LayoutBox>
  )
}

export default Calendar