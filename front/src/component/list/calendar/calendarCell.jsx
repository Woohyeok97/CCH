/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { addDays, format, isSameMonth, isSameDay } from "date-fns";
import LayoutBox from "../../common/layoutBox";


function CalendarCell({ currentDate, selectDate, setSelectDate }) {

  const CellRow = styled.div`
    flex-basis : 20%;
    display : flex;
    justify-content : space-around;
    padding : 12px;
    border-bottom : 1px solid #DFE0DF;

    > .today {
      background-color : orange;
    }
    
    > .cell-item {
      width : 14.25%;
      font-size : 1.2rem;
      font-weight : 600;
    }

    > .disabled {
      color : #DFE0DF;
    }

    > .same {
      color : red;
    }
  `


  const monthStart = startOfMonth(currentDate) //이번달 시작일
  const monthEnd = endOfMonth(currentDate) //이번달 마지막일
  const startDay = startOfWeek(monthStart) //이번달 시작주, 시작일
  const endDay = endOfWeek(monthEnd) //이번달 마지막주, 마지막일

  let day = startDay
  let days = []
  let cell = []

  while(day <= endDay) {
    for(let i = 0; i < 7; i++) {
      days = [...days, day]
      day = addDays(day, 1)
    }
    cell.push(days)
    days = [];
  }
 

  return(
    <LayoutBox direction="column" basis="70%">
    { cell.map( a => { 
      return <CellRow>{ a.map( a => { 
        return <div className={`${!isSameMonth(a, monthEnd) ? 'disabled' : isSameDay(a, selectDate) ? 'same' : '' } cell-item `}
        onClick={()=>{ setSelectDate(a) }}>{format(a, 'd')}</div> }) }</CellRow>
    }) }
    </LayoutBox>
    
  )
}

export default CalendarCell