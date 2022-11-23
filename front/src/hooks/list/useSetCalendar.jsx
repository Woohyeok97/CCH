/* eslint-disable */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// date-fns Library
import { addDays, endOfMonth, endOfWeek, startOfMonth, startOfWeek, isSameMonth, format, isSameDay, } from "date-fns";

//reducers
import { setNextMonth, setPrevMonth } from "../../store/currentDate";
import { setSeletedDate } from "../../store/selectedDate";


export default function useSetCalendar() {
    const currentDate = useSelector( state => state.currentDate ) 
    const selectedDate = useSelector( state => state.selectedDate )
    const distpatch = useDispatch();
  
    // Month 변경함수
    const nextMonth = ()=> distpatch(setNextMonth(currentDate))
    const prevMonth = ()=> distpatch(setPrevMonth(currentDate))


    // Days셀 컴포넌트 생성함수
    const weekArray = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    const setDays = ()=>{
        return weekArray.map((item, i) => <div key={`${item}${i}`} className="day">{ item }</div>)
    }


    // date셀을 위한 만들기 위헤 해당월 Array생성
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
        return month
    }

    //date셀한테 className을 부여해주는 함수(해당월의 날짜, selected)
    const setClassName = (date)=>{
        let answer = 
        isSameMonth(date, new Date(currentDate)) 
        ? isSameDay(date, new Date(selectedDate)) 
            ? 'selected' 
            : isSameDay(date, new Date()) ? 'today' : ''
        : 'disabled';
        return answer
    }

    // selectedDate를 변경해주는 함수
    const selectDate = (date)=> {
        distpatch(setSeletedDate(format(date, 'yyyy-MM-dd')))
    }


    return { currentDate, nextMonth, prevMonth, setDays, setMonth, selectDate, setClassName, }
}