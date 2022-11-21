/* eslint-disable */
import React from "react";
import styled from "styled-components";
import useSetCalendar from "../../../hooks/list/useSetCalendar";
import LayoutBox from "../../common/layoutBox";

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
    > .not-selected {
      width : 36px;
      height : 36px;
      display : flex;
      justify-content : center;
      align-items : center;
    }
  }
`

function CalendarCell() {

  const { viewCalendar} = useSetCalendar()

  return (
    <CellRowStyled>
    { viewCalendar() }
    </CellRowStyled>
  )

}



// function CellRow({ item, monthEnd, selectDate, setSelectDate }) {

//   return(
//     <CellRowStyled>
//     { item.map((a)=>{ 
//       return <div className={`cell-item ${isSameMonth(a, monthEnd) ? 'cell-item' : 'disabled' }`} onClick={()=>{ setSelectDate(a) }}>
//       <div className={`not-selected ${isSameDay(a, selectDate) ? 'selected' : 'not-selected'}`}>{format(a, 'd')}</div></div>
//     }) }
//     </CellRowStyled>
//   )
// }

export default CalendarCell