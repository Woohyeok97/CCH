/* eslint-disable */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// date-fns Library
import { addDays, endOfMonth, endOfWeek, startOfMonth, startOfWeek, isSameMonth, isSameDay, } from "date-fns";

//reducers
import { setNextMonth, setPrevMonth } from "../../store/currentMonth";


export default function useSetCalendar() {
    const currentMonth = useSelector( state => state.currentMonth ) 
    const content = useSelector( state => state.content ) 
    const distpatch = useDispatch();
  
    // Month 변경함수
    const nextMonth = ()=> distpatch(setNextMonth(currentMonth))
    const prevMonth = ()=> distpatch(setPrevMonth(currentMonth))


    // Days셀 컴포넌트 생성함수
    const weekArray = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    const setDays = ()=>{
        return weekArray.map((item, i) => <div key={`${item}${i}`} className="day">{ item }</div>)
    }


    // date셀을 위한 만들기 위헤 해당월 Array생성
    const monthStartDate = startOfMonth(new Date(currentMonth)) // 이번달 시작일
    const monthEndDate = endOfMonth(new Date(currentMonth)) // 이번달 마지막일
    const startDate = startOfWeek(monthStartDate) // 이번달 시작주 시작일
    const endDate = endOfWeek(monthEndDate) // 이번달 마지막주 마지막일

     // 각 date셀에 날짜, 컨텐츠를 담기위한 DateObject Class생성
    class DateObject {
        constructor(날짜, 컨텐츠 = '') {
            this.date = 날짜
            this.content = 컨텐츠
        }
        isContent(content) { // 만약 인스턴스의 날짜 프로퍼티와 content의 날짜가 일치한다면 컨텐츠 프로퍼티에 content데이터를 저장
            if(content) content.map( a => { isSameDay(new Date(a.date), this.date) ? this.content = a : null })
        }
    }

    let date = startDate
    let week = []
    let month = []

    // month array생성 함수
    const setMonth = ()=> {
        while(date <= endDate) {
            for(let i = 0; i < weekArray.length; i++) {
                // 만약 content의 날짜객체와 date가 일치한다면(isSameDay)
                let item = new DateObject(date)
                item.isContent(content)
                week = [...week, item]
                date = addDays(date, 1)
            }
            month = [...month, week]
            week = []
        }
        return month
    }
    // setMonth()
    // console.log(month)

    //date셀한테 className을 부여해주는 함수(해당월의 날짜, selected)
    const setClassName = (item)=>{
        let className = `cell-item `
        item.content ? className += ' content' : null
        isSameMonth(item.date, new Date(currentMonth)) ? null : className += ' disabled'
        isSameDay(item.date, new Date()) ? className += ' today' : null
        return className
    }

    return { currentMonth, nextMonth, prevMonth, setDays, setMonth, setClassName, }
}