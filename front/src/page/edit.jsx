/* eslint-disable */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

// common components
import AppWrap from "../component/common/appWrap";
import Header from "../component/common/header";
import ImageUploadInput from "../component/common/imageUploadInput";
import LayoutBox from "../component/common/layoutBox";
import Title from "../component/common/title";

// components
import EditButton from "../component/edit/editButton";
import EditContent from "../component/edit/editContent";

function Edit() {
    const currentContent = useSelector( state => state.currentContent )
    const navigate = useNavigate()

    useEffect(()=>{
        if(!currentContent._id) navigate('/list')
    },[])

    return (
        <AppWrap background="#FEFBEA">
            <Header>칭찬수정</Header>
            <LayoutBox direction="column" width="80%">
                <Title basis="10%" date={currentContent.date}>{ <ImageUploadInput>이미지 수정!</ImageUploadInput> }</Title>
                <EditContent basis="60%"/>
                <EditButton basis="30%"/>
            </LayoutBox>
        </AppWrap>
    )
}

export default Edit