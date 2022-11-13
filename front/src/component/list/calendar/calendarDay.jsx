/* eslint-disable */
import React from "react";
import styled from "styled-components";


const CalendarDayStyled = styled.div`
  flex-basis : 3%;
  display : flex;
  padding : 12px;
  background-color : #FDDF3F;
  font-weight : 800;

  > .day {
    width : 14.25%;
    text-align : center;
  }
`


function CalendarDay() {

  const 요일 = ['SUN','MON','TUE','WED','THU','FRI','SAT']

  return (
    <CalendarDayStyled>
      { 요일.map((a)=> <div className="day">{a}</div>) }
    </CalendarDayStyled>
  )
}

export default CalendarDay