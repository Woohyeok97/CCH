/* eslint-disable */
import React, { useEffect } from "react";
import format from "date-fns/format";
import styled from "styled-components";

// custom hooks
import useSetCalendar from "../../../hooks/list/useSetCalendar";
import useSetDetail from "../../../hooks/list/useSetDetail";

const CellRowStyled = styled.div`
  flex-basis : 90%;
  display : flex;
  flex-direction : column;

  > .week {
    flex-basis : 100%;
    display : flex;
    justify-content : space-around;
    border-bottom : 1px solid #DFE0DF;
    padding-top : 6px;

    > .cell-item {
      width : 14.25%;
      display : flex;
      align-items : start;
      padding-left : 12px;
      font-size : 1rem;
      font-weight : 600;  

      > .show-content {
        width : 36px;
        height : 36px;
        display : flex;
        justify-content : center;
        align-items : center;
      }
    }
    
    > .today {
      position : relative;
      > .show-today::after {
        content : 'Today';
        position : absolute;
        bottom : 6px;
        right : 6px;
        color : hotpink;
        font-size : 1.25rem;
        font-weight : 800;
      }
    } 
    > .disabled {
      color : #DFE0DF;
    }
    > .content {
      > .show-content {
        color : white;
        background-color : orange;
        border : 1px solid transparent;
        border-radius : 1.2rem;
        box-sizing: border-box;
      }
      > .show-content::after {
        
      }
    }
    > .content::after {
      color : green;
      content : '칭찬!'
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
  const { setClassName } = useSetCalendar()
  const { changeCurrentContent } = useSetDetail()

  return week.map((item, i)=>{
    
    return (
      <div className={`${setClassName(item)}`} key={`${item.date}${i}`}
        onClick={()=>{ changeCurrentContent(item.content) }}>
        <span className="show-content">{ format(item.date, 'dd') }</span>
        <span className="show-today"></span>
      </div>
    )
  })
}



export default CalendarCell