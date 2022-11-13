/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { format } from 'date-fns'

const CalendarHeaderStyled = styled.div`
  flex-basis : 7%;
  display : flex;
  justify-content : center;
  background-color : #FDDF3F;
`

const DateBoxStyled = styled.h1`
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

function CalendarHeader({ currentDate, prevMonth, nextMonth }) {

  return (
    <CalendarHeaderStyled justify="center">
      <DateBoxStyled>
        <span className="btn left" onClick={()=>{ prevMonth() }}>◁</span>
        <span className="date">{format(currentDate, 'yyyy')}. {format(currentDate, 'M')}</span>
        <span className="btn right" onClick={()=>{ nextMonth() }}>▷</span>
      </DateBoxStyled>
    </CalendarHeaderStyled>
  )
}

export default CalendarHeader