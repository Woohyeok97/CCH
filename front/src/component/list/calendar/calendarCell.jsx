/* eslint-disable */
import React from "react";
import format from "date-fns/format";
import styled from "styled-components";
import useSetCalendar from "../../../hooks/list/useSetCalendar";

const CellRowStyled = styled.div`
  flex-basis : 90%;
  display : flex;
  flex-direction : column;

  > .week {
    flex-basis : 100%;
    display : flex;
    justify-content : space-around;
    border-bottom : 1px solid #DFE0DF;
    padding-top : 12px;

    > .cell-item {
      width : 14.25%;
      font-size : 1rem;
      font-weight : 600;  
      padding-left : 12px;
    }
    > .today {
      background-color : orange;
    }
    > .disabled {
      color : #DFE0DF;
    }
    > .selected {
      color : white;
      border : 1px solid transparent;
      border-radius : 1.2rem;
      box-sizing: border-box;
      background-color : red;
    }
    > .content {
      background-color : yellow;
    }
  }
`

function CalendarCell() {

  return (
    <CellRowStyled>
      <WeekCell/>
    </CellRowStyled>
  )
}


// week셀 컴포넌트
function WeekCell() {
  const { setMonth } = useSetCalendar()
  const month = setMonth()
  
  return month.map((week, i)=>{
    return (
      <div className="week" key={`${week}${i}`}>
        <DateCell week={week} />
      </div> 
    )
  })
}

// date셀 컴포넌트
function DateCell({ week }) {
  const { selectDate, setClassName, } = useSetCalendar()
  
  return week.map((item, i)=>{
    
    return (
      <div className={`${setClassName(item)}`} key={`${item.date}${i}`}
        onClick={()=>{ selectDate(item)} }>
        { format(item.date, 'dd') }
      </div>
    )
  })
}



export default CalendarCell