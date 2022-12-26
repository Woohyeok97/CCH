/* eslint-disable */
import React from "react";
import styled from "styled-components";
// components
import SetContent from "./setCotent/setContent";
import PostContent from "./postContent";
// custom hooks
import usePostContent from "../../hooks/upload/usePostContent"

const UploadBodyStyled = styled.section`
    flex-basis : 90%;
    display : flex;
    flex-direction : column;
    width : 100%;
`

function UploadBody() {

    const { notifyUpload } = usePostContent()

    return (
        <UploadBodyStyled>
            <SetContent/>
            <PostContent action={ notifyUpload }/>
        </UploadBodyStyled>
    )
}

export default UploadBody