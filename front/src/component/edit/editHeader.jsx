/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

//common components
import Button from '../common/button'
 
const HeaderStyled = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    width : 80%;
    padding : 16px 0;
    margin-top : 5%;
    border-bottom : 2px solid #DFE0DF;
    box-sizing: border-box;

    > h3 { 
    color : #666666;
    margin : 0;
    }
   `
 
function EditHeader() {
    const currentContent = useSelector( state => state.currentContent )

    return(
        <HeaderStyled>
            <Button size="small" color="black">사진첨부</Button>
            <h3>{currentContent.date} 칭찬 수정중!</h3>
        </HeaderStyled>
    )
}


export default EditHeader