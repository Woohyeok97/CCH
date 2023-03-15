/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

// components
import styled from "styled-components";
import Button from "../common/button";

const StartLayoutStyled = styled.section`
    display : flex;
    flex-basis : 20%;
    flex-direction : column;
    justify-content : space-between;

    > div {
        > span { font-size : 1.5rem; }
        > .user-name { font-weight : 600; }
    }
`

function StartLayout() {
    const userData = useSelector( state => state.userData )
    const navigate = useNavigate()
    const [loggedIn, setLoggedIn] = useState(false)
    const movementList = () => navigate('/list')
    console.log(userData)

    useEffect(()=>{
        if(userData) setLoggedIn(true)
    }, [userData])
    

    
    if(loggedIn) return (
        <StartLayoutStyled>
            <div>
                <span className="user-name">{userData.name} </span>
                <span>님 안녕하세요!</span>
            </div>
            <Button size="large" color="brown" action={ movementList } >칭찬 시작하기!</Button>
        </StartLayoutStyled>
    )
}

export default StartLayout