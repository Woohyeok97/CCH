/* eslint-disable */
import React from "react";
import styled from "styled-components";

//custom hooks
import useSetCalendar from "../../../hooks/list/useSetCalendar";


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

  const { setDays } = useSetCalendar()

  return (
    <CalendarDayStyled>
    { setDays() }
    </CalendarDayStyled>
  )
}

export default CalendarDay