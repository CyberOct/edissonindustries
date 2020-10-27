import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'

export const Button = styled(LinkRouter)`
    white-space: nowrap;
    text-decoration:none;
    color:white;
    background-color:${({ culoareverde }) => (culoareverde ? '#9EC10F' : '#F1A40E')};
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    letter-spacing:1px;
    transition: .5s ease;
    position:relative;
    z-index:3;
    span{
        position:absolute;
        top:0;
        left:0;
        height:0;
        width:100%;
        background-color:rgba(0,0,0,0.2);
        transition: .5s ease;
        z-index:-1;
    }
    &:hover{
        text-decoration:none;
        color:white;
        letter-spacing:3px;
        transition: .5s ease;
        font-weight:bold;
        span{
            height:100%;
            transition: .5s ease;
        }
    }
    
    @media screen and (max-width: 480px){
        padding: 10px 20px;
        margin-top:20px;
    }
    @media screen and (max-width: 375px){
        padding: 10px 10px;
    }
    
`