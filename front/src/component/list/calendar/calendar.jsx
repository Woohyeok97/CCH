/* eslint-disable */
import React, { useState } from "react";
import styled from "styled-components";
import { format, addMonths, subMonths, addDays, isSameMonth, isSameDay } from 'date-fns'
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek,} from 'date-fns'
import '../aa.css'

function Calendar() {

  const [현재월, 현재월변경] = useState(new Date());
  const [날짜선택, 날짜선택변경] = useState(new Date())

  const prevMonth = ()=> 현재월변경(subMonths(현재월, 1))
  const nextMonth = ()=> 현재월변경(addMonths(현재월, 1))

  return(
    <CalendarStyle>
      <Header 현재월={현재월} prevMonth={prevMonth} nextMonth={nextMonth}/>
      <Day/>
      <Cell 현재월={현재월} 날짜선택={날짜선택}/>
    </CalendarStyle>
  )
}

function Header({ 현재월, prevMonth, nextMonth }) {

  return(
    <div className="header-box">
      <div className="date">
        <span>{format(현재월, 'M')}</span>
        <br/>
        <span>{format(현재월, 'yyyy')}</span>
      </div>
      <div className="btn-box">
          <button onClick={()=>{ prevMonth() }}>Prev Month</button>
          <button onClick={()=>{ nextMonth() }}>Next Month</button>
      </div>
    </div>
  )
}

function Day() {
  const date = ['일', '월', '화', '수', '목', '금', '토']
  return (
    <div className="전체">
    { date.map((a)=> <div className="요일">{a}</div>) }
    </div>
  )
}

function Cell({ 현재월, 날짜선택 }) {

  const monthStart = startOfMonth(현재월)
  const monthEnd = endOfMonth(현재월)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)

  // console.log(format(startDate, 'd'))
  // console.log(format(endDate, 'd'))

  
  let day = startDate
  let 일주일 = []
  let 전체 = []
  let 날짜표시 = ''

  while(day <= endDate) {
    for(let i = 0; i < 7; i++) {
      날짜표시 = format(day, 'd')
      일주일.push( <div className={`일주일 
      ${isSameMonth(day, monthStart) ? '포함' : '미포함'}`}>{날짜표시}</div> )
      day = addDays(day, 1)
    }
    전체.push(<div className="전체">{일주일}</div>)
    일주일 = []
  }

  // console.log(format(startDate, 'd'))
  // console.log(format(monthStart, 'M'))
  // console.log(isSameMonth(startDate, monthStart))
  


  return(
    <div>{전체}</div>
  )
}

const CalendarStyle = styled.section`
    flex-basis : 70%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
  `

export default Calendar