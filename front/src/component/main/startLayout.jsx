/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

// components
import styled from "styled-components";
import useLogin from "../../hooks/main/useLogin";
import Button from "../common/button";

const StartLayoutStyled = styled.section`
    display : flex;
    flex-basis : 20%;
    flex-direction : column;
    justify-content : space-between;
    position : relative;

    > div {
        > span { font-size : 1.5rem; }
        > .user-name { font-weight : 600; }
    }
`
const LogoutStyled = styled.span`
    position : absolute;
    bottom : -150px;
    width : 100%;
    color : #444444;
    text-align : center;
    font-size : 1rem;
    font-weight : 600;
    cursor : pointer;
    &:hover, active, focus { color : #666666; }
`

function StartLayout() {
    const userData = useSelector( state => state.userData )
    const navigate = useNavigate()
    const movementList = () => navigate('/list')
    const { removeJWTinCookie } = useLogin()
    

    
    if(userData) return (
        <StartLayoutStyled>
            <div>
                <span className="user-name">{userData.name} </span>
                <span>님 안녕하세요!</span>
            </div>
            <Button size="large" color="brown" action={ movementList } >칭찬 시작하기!</Button>
            <LogoutStyled onClick={()=>{ removeJWTinCookie() }}>로그아웃</LogoutStyled>
        </StartLayoutStyled>
    )
}

export default StartLayout