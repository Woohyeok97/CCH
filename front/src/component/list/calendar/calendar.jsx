/* eslint-disable */
import { addMonths, subMonths, format} from "date-fns";
import React, { useEffect, useState } from "react";

import LayoutBox from "../../common/layoutBox";
import CalendarHeader from "./calendarHeader";
import CalendarDay from "./calendarDay";
import CalendarCell from "./calendarCell";
import { useSelector } from "react-redux";


function Calendar() {

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