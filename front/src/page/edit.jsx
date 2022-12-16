/* eslint-disable */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

//components
import AppWrap from "../component/common/appWrap";
import Header from "../component/common/header";
import LayoutBox from "../component/common/layoutBox";
import EditHeader from "../component/edit/editHeader";
import EditWrite from "../component/edit/editWrite";
import EditButton from "../component/edit/editButton";


function Edit() {
    const currentContent = useSelector( state => state.currentContent )
    const navigate = useNavigate()

    useEffect(()=>{
        if(!currentContent._id) navigate('/list')
    },[])

    return (
        <AppWrap background="#FEFBEA">
            <Header>칭찬수정</Header>
            <LayoutBox basis='70%' direction='column' align='center'>
                <EditHeader/>
                <EditWrite/>
                <EditButton/>
            </LayoutBox>
        </AppWrap>
    )
}

export default Edit