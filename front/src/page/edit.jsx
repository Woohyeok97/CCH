/* eslint-disable */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

// common components
import AppWrap from "../component/common/appWrap";
import Header from "../component/common/header";
import LayoutBox from "../component/common/layoutBox";

// components
import EditButton from "../component/edit/editButton";
import EditContent from "../component/edit/editContent";

function Edit() {
    const currentContent = useSelector( state => state.currentContent )
    const navigate = useNavigate()
    const userData = useSelector( state => state.userData )

    useEffect(()=>{
        if(!currentContent._id) navigate('/list')
    },[])

    if(userData) return (
        <AppWrap background="#FEFBEA">
            <Header>칭찬수정</Header>
            <LayoutBox direction="column" width="80%">
                <EditContent basis="60%"/>
                <EditButton basis="30%"/>
            </LayoutBox>
        </AppWrap>
    )
}

export default Edit