/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";

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
    
    return (
        <StartLayoutStyled>
            <div>
                <span className="user-name">{userData.name} </span>
                <span>님 안녕하세요!</span>
            </div>
            <Button size="large" color="brown" url="list" >칭찬 시작하기!</Button>
        </StartLayoutStyled>
    )
}

export default StartLayout