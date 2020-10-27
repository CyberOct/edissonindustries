import styled from 'styled-components'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

export const TestimonialCard = styled.div`
    width: 300px;
    height:300px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    background-color: white;
    padding: 0 50px;
    margin-left:5px;
    margin-right:5px;
    position:relative;
    &:before{
        position: absolute;
        content: "";
        width: 1px;
        height: 65%;
        bottom: 10%;
        left:10px;
        background-color: grey;
        transition: .5s;
    }
    &:after{
        position: absolute;
        content: "";
        width: 1px;
        height: 65%;
        bottom: 10%;
        right:10px;
        background-color: grey;
        transition: .5s;
    }
    .bottomSpan{
        position: absolute;
        bottom: 0;
        left: 10%;
        height: 1px;
        width: 80%;
        background-color: grey;
    }

    @media screen and (max-width:460px)
    {
        padding: 0 30px; 
    }
    @media screen and (max-width:320px)
    {
        padding: 0 18px; 
    }
`
export const TestimonialImg= styled.div`
    position:relative;
    z-index:2;
    span{
        position:absolute;
        top:50%;
        left:-100%;
        height:1px;
        width:300%;
        background-color:grey;
        z-index:-1;
    }
    img{
        width:80px;
        height:80px;
        border-radius:50%;
    }
    @media screen and (max-width:460px){
       span{
           left:-70%;
           width:250%;
       }    

    @media screen and (max-width:375px){
       span{
           left:-50%;
           width:200%;
       } 
    }
`
export const TestimonialUserName = styled.h4`
    text-transform: uppercase;
    font-size:18px;
    text-align: center;
`
export const TestimonialP = styled.p`
    font-size:14px;
    font-weight: italic !important;
    text-align:center;
`
export const QuotesLeft = styled(ImQuotesLeft)`
    margin-top:10px;
    fill:rgba(255,168,0,0.5) !important;
`
export const QuotesRight = styled(ImQuotesRight)`
    margin-bottom:10px;
    fill:rgba(255,168,0,0.5) !important;
`