/* eslint-disable */
import React from "react";
import styled from "styled-components";

function CalendarDay() {
  const CalendarDay = styled.div`
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

  const 요일 = ['SUN','MON','TUE','WED','THU','FRI','SAT']

  return (
    <CalendarDay>
      { 요일.map((a)=> <div className="day">{a}</div>) }
    </CalendarDay>
  )
}

export default CalendarDay