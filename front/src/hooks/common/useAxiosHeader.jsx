/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

// 사용자인증이 필요한 API요청시, 요청헤더에 jwt토큰을 실어주는 커스텀훅
// axios의 intercepter 기능으로 요청전, 응답전에 로직을 추가할수있음
export default function useAxiosHeader() {
    const [ cookie, ] = useCookies(['jwtToken'])
    const [ instance, setInstance ] = useState(null);

    useEffect(()=>{
        const axiosInstance = axios.create({ 
            baseURL : 'http://localhost:3001',
        })

        // 요청을 보내기전 동작하는 intercepter
        // config객체에 쿠키에서 jwt토큰을 가져와 헤더에 추가함
        axiosInstance.interceptors.request.use(
            (config)=> {
                if(cookie.jwtToken)
                config.headers.Authorization = `Bearer ${cookie.jwtToken}`
                return config
            },
            (error) => { throw new Error(error) }
        )

        setInstance(axiosInstance);
    }, [cookie.jwtToken]);

    return { instance };    
}
