/* eslint-disable */
import React from "react";
import styled from 'styled-components'
// Material
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
// custom hooks
import useEditContent from "../../../hooks/list/useEditContent";

const DropdownStyled = styled.div`
    display : flex;
    align-items : center;
    position : relative;
    > #dropdown {
        display : none;
    }

    > .btn-box {
        display : none;
        flex-direction : column;
        align-items : center;
        width : 120px;
        position : absolute;
        top : 36px;
        right : 0;
        background-color : #FEFBEA;
        font-size : 1.5rem;
        font-weight : 600;
        border : 2px solid #000000;
    
        > div {
            padding : 4px 12px;
            cursor : pointer;
        }

        > .edit {  }
        > .edit:hover { color : #666666; }

        > .delete { color : #FF424B; }
        > .delete:hover { color : #FF7771; }

        > span {
            background-color : #000000;
            width : 100%;
            height : 2px;
        }
    }
    > #dropdown:checked + label + .btn-box {
        display : flex;
    }
`

function Dropdown() {
    const { isDeleteContent } = useEditContent()

    return (
    <DropdownStyled>
        <input id="dropdown" type="checkbox"/>
        <label htmlFor="dropdown">
            <FormatAlignJustifyIcon/>
        </label>

        <div className="btn-box">
            <div className="edit">수정</div>
            <span></span>
            <div className="delete" onClick={()=>{ isDeleteContent() }}>삭제</div>
        </div>
    </DropdownStyled>
    )
}

export default Dropdown