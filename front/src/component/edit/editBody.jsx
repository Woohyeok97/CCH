/* eslint-disable */
import React from "react";
import styled from "styled-components";
// component
import EditButton from "./editButton";
import EditHeader from "./editHeader";
import EditWrite from "./editWrite";

const EditBodyStyled = styled.section`
    flex-basis : 90%;
    display : flex;
    flex-direction : column;
    align-items : center;
    width : 100%;
`

function EditBody() {
    return (
        <EditBodyStyled>
            <EditHeader/>
            <EditWrite/>
            <EditButton/>
        </EditBodyStyled>
    )
}

export default EditBody