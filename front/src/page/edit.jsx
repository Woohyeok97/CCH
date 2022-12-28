/* eslint-disable */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

//components
import AppWrap from "../component/common/appWrap";
import Header from "../component/common/header";
import EditBody from "../component/edit/editBody";


function Edit() {
    const currentContent = useSelector( state => state.currentContent )
    const navigate = useNavigate()

    useEffect(()=>{
        if(!currentContent._id) navigate('/list')
    },[])

    return (
        <AppWrap background="#FEFBEA">
            <Header>칭찬수정</Header>
            <EditBody/>
        </AppWrap>
    )
}

export default Edit