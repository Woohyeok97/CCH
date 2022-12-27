/* eslint-disable */
import axios from "axios";
import React from "react";

export default function useCheckMember() {

    const isMember = async (user) => {
        try {
            const response = await axios.post('http://localhost:3001/user/isMember', user)
            console.log(response)
        }
        catch(err) {
            console.log('isMember() 에러발생!', err)
        }
    }

    return { isMember }
}