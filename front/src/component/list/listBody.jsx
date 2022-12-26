/* eslint-disable */
import React from "react";
import styled from 'styled-components'

// components
import LayoutBox from "../common/layoutBox";
import Calendar from "./calendar/calendar";
import Detail from "./detail/detail";
import UploadButton from "./uploadButton";

const ListBodyStyled = styled.section`
    display : flex;
    flex-basis : 90%;
    width : 100%;
`

function ListBody() {
    return (
        <ListBodyStyled>
            <LayoutBox direction="column">
                <Calendar/>
                <UploadButton/>
            </LayoutBox>
            <Detail/>
        </ListBodyStyled>
    )
}

export default ListBody