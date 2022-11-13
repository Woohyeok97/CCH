/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { addDays, format, isSameMonth, isSameDay } from "date-fns";



function CalendarCell({ currentDate, selectDate, setSelectDate }) {

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
  
  const result = cell.map((a)=> {
    return <CellRow item={a} monthEnd={monthEnd} selectDate={selectDate} setSelectDate={setSelectDate}/>
  } ) 

  return result

}

const CellRowStyled = styled.div`
  flex-basis : 100%;
  display : flex;
  justify-content : space-around;
  border-bottom : 1px solid #DFE0DF;
  padding-top : 12px;

  > .today {
    background-color : orange;
  }

  > .cell-item {
    width : 14.25%;
    font-size : 1rem;
    font-weight : 600;

    > .selected {
      color : white;
      border : 1px solid transparent;
      border-radius : 1.2rem;
      box-sizing: border-box;
      background-color : red;
    }

    > .not-selected {
      width : 36px;
      height : 36px;
      display : flex;
      justify-content : center;
      align-items : center;
    }
  }

  > .disabled {
    color : #DFE0DF;
  }

`

function CellRow({ item, monthEnd, selectDate, setSelectDate }) {

  return(
    <CellRowStyled>
    { item.map((a)=>{ 
      return <div className={`cell-item ${isSameMonth(a, monthEnd) ? 'cell-item' : 'disabled' }`} onClick={()=>{ setSelectDate(a) }}>
      <div className={`not-selected ${isSameDay(a, selectDate) ? 'selected' : 'not-selected'}`}>{format(a, 'd')}</div></div>
    }) }
    </CellRowStyled>
  )
}

export default CalendarCell