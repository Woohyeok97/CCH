/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components'
// components
import Button from '../../component/common/button'
const SignUpButtonStyled = styled.section`

`

function SignUpButton() {
    const signUpUserData = useSelector( state => state.signUpUserData )

    return (
        <SignUpButtonStyled>
            <Button size="large" color="black" action={ console.log(signUpUserData) }>칭찬 시작해~</Button>
        </SignUpButtonStyled>
    )
}

export default SignUpButton