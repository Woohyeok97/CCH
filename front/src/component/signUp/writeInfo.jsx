/* eslint-disable */
import React from "react";
import styled from 'styled-components'

const WriteInfoStyled = styled.section`
    flex-basis : 30%;
    width : 20%;
    display : flex;
    justify-content : center;
    flex-direction : column;

    > input {
        width : 100%;
        height : 60px;
        padding : 4px 12px;
        margin-bottom : 200px;
        font-weight : 800;
        font-size : 1.5rem;
        text-align : center;
        font-family: 'Nanum Gothic', sans-serif;
        border: 1px solid transparent;
        border-radius: 0.5rem;
        box-sizing: border-box;
    }
`

function WriteInfo() {
    return (
        <WriteInfoStyled>
            <input type="text" placeholder="이름이 뭐에요" spellCheck="false"/>
        </WriteInfoStyled>
    )
}

export default WriteInfo