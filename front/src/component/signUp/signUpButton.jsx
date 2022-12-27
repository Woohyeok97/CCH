/* eslint-disable */
import React from "react";
import styled from 'styled-components'
// components
import Button from '../../component/common/button'
const SignUpButtonStyled = styled.section`

`

function SignUpButton() {
    return (
        <SignUpButtonStyled>
            <Button size="large" color="black">칭찬 시작해~</Button>
        </SignUpButtonStyled>
    )
}

export default SignUpButton