 /* eslint-disable */
 import React from 'react'
 import styled from 'styled-components'
 

 
 function Title({ children, date, basis }) {
 
    return(
        <TitleStyled basis={basis}>
            { children }
            <h3>{date}</h3>
        </TitleStyled>
    )
}

 const TitleStyled = styled.div`
    flex-basis : ${(props)=> props.basis || '100%' };
    display : flex;
    justify-content : space-between;
    align-items : center;
    padding : 16px 0;
    margin-top : 3%;
    border-bottom : 2px solid #DFE0DF;
    box-sizing: border-box;

    > h3 { 
    color : #666666;
    margin : 0;
    }
   `
 
 
 
 
 export default Title