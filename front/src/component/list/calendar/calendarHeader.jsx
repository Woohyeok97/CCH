/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { format } from 'date-fns'

function CalendarHeader({ currentDate, prevMonth, nextMonth }) {

  const CalendarHeader = styled.div`
    display : flex;
    justify-content : center;
    background-color : #FDDF3F;

  `
  const DateBox = styled.h1`
    display : flex;
    justify-content : space-between;
    margin : 0;
    font-size : 2rem;

    > .btn {
      padding : 0 12px;
      cursor : pointer;
      color : gray;
    }
    
  `

  return (
    <CalendarHeader justify="center">
      <DateBox>
        <span className="btn left" onClick={()=>{ prevMonth() }}>◁</span>
        <span className="date">{format(currentDate, 'yyyy')}. {format(currentDate, 'M')}</span>
        <span className="btn right" onClick={()=>{ nextMonth() }}>▷</span>
      </DateBox>
    </CalendarHeader>
  )
}

export default CalendarHeader