/* eslint-disable */
import React from "react";
import format from "date-fns/format";
import styled from "styled-components";
import useSetCalendar from "../../../hooks/list/useSetCalendar";
import useGetContent from "../../../hooks/list/useGetContent";
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

      > span {
        width : 36px;
        height : 36px;
        display : flex;
        justify-content : center;
        align-items : center;
      }
    }
    > .today {
      > span {
        color : white;
        background-color : red;
        border : 1px solid transparent;
        border-radius : 1.2rem;
        box-sizing: border-box;
      }
    }
    > .disabled {
      color : #DFE0DF;
    }
    > .content {
      > span {
        color : white;
        background-color : orange;
        border : 1px solid transparent;
        border-radius : 1.2rem;
        box-sizing: border-box;
      }
    }
    > .content::after {
      color : red;
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
  const { setClassName, } = useSetCalendar()
  const { getSelectContent } = useGetContent()
  const { changeCurrentContent } = useSetDetail()

  return week.map((item, i)=>{
    
    return (
      <div className={`${setClassName(item)}`} key={`${item.date}${i}`}
        onClick={()=>{ changeCurrentContent(item.content), getSelectContent(item.content) }}>
        <span>{ format(item.date, 'dd') }</span>
      </div>
    )
  })
}



export default CalendarCell