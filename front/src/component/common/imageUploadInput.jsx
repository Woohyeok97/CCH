import React from "react";
import styled from "styled-components";
import useSetContent from "../../hooks/upload/useSetContent";
// custom hooks

function ImageUploadInput({ children }) {
    const { setImage } = useSetContent()

    return (
        <ImageUploadInputStyled>
            <input id="file-input" type="file" onChange={(e)=>{ setImage(e) }}/>
            <label htmlFor="file-input" >{ children }</label>
        </ImageUploadInputStyled>
    )
}

const ImageUploadInputStyled = styled.div`
    > #file-input {
        display : none;
    }
    > label {
        padding: 6px 12px;
        color : #FFF9EC;
        background-color : #000000;
        &:hover, active, focus { background-color : #444444; }
        font-weight: 600;
        border: 1px solid transparent;
        border-radius: 0.5rem;
        box-sizing: border-box;
        cursor: pointer;      
    }
`
export default ImageUploadInput