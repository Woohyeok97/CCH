/* eslint-disable */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// date-fns Library
import { addDays, endOfMonth, endOfWeek, startOfMonth, startOfWeek, isSameMonth, format, } from "date-fns";

//reducers
import { setNextMonth, setPrevMonth} from "../../store/currentDate";


export default function useSetCalendar() {
    const currentDate = useSelector( state => state.currentDate )
    const distpatch = useDispatch();
 
    // Month 변경함수
    const nextMonth = ()=> distpatch(setNextMonth(currentDate))
    const prevMonth = ()=> distpatch(setPrevMonth(currentDate))

    // Days셀 컴포넌트 생성함수
    const weekArray = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    const setDays = ()=>{
        return weekArray.map((item, i) => <div key={`${item}${i}`} className="day">{ item }</div>)
    }

    // date셀 컴포넌트 생성함수
    const monthStartDate = startOfMonth(new Date(currentDate)) // 이번달 시작일
    const monthEndDate = endOfMonth(new Date(currentDate)) // 이번달 마지막일
    const startDate = startOfWeek(monthStartDate) // 이번달 시작주 시작일
    const endDate = endOfWeek(monthEndDate) // 이번달 마지막주 마지막일

    let date = startDate
    let week = []
    let month = []

    const setMonth = ()=> {
        while(date <= endDate) {
            for(let i = 0; i < weekArray.length; i++) {
                week = [...week, date]
                date = addDays(date, 1)
            }
            month = [...month, week]
            week = []
        }
    }
    

    const viewCalendar = ()=> {
        setMonth()
        return month.map((item, i)=> <div key={`${item}${i}`} className="week">{ setDateCell(item) }</div>)
    }

    const setDateCell = (item)=> {
        return item.map((date, i)=> {
            return (
                <div key={`${item}${i}`} className={`cell-item ${isSameMonth(date, new Date(currentDate)) ? '' : 'disabled' }`}>
                { format(date, 'd') }
                </div>
            )
        })
    }


    return { currentDate, nextMonth, prevMonth, setDays, viewCalendar,}
}