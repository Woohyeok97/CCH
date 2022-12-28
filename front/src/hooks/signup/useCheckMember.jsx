/* eslint-disable */
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";

export default function useCheckMember() {
    const navigate = useNavigate()

    const isMember = async (user) => {
        try {
            const response = await axios.post('http://localhost:3001/user/isMember', { userId : user })
            response.data ? navigate('/list') : navigate('/signup')
        }
        catch(err) {
            console.log('isMember() 에러발생!', err)
        }
    }

    return { isMember }
}