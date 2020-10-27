import styled,{keyframes} from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import { ReactComponent as EdissonTitle } from '../../assets/EdissonTitle.svg';
import { Container, Row, Col } from 'react-bootstrap';
import image from '../../assets/background-1.jpg'

export const fadeUp = keyframes`
    0% {
    opacity:0;
    transform:translateY(100px);
    }
    90% {
    opacity:0;
    transform:translateY(50px);
    } 
    100% {
    opacity:1;
    transform:translateY(0px);
    }
`

export const HeroContainer = styled.section`
    font-family: Fares;
    background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)),
    url(${image});
    background-repeat:no-repeat;
    background-attachment:fixed;
    background-position:center;
    background-size: cover;
    ${'' /* background: #343A40; */}
    height:80vh;
    position:relative;
    display:flex;
    flex-direction:column;

    @media screen and (max-width:320px){
        height:100vh;
    }
`
export const MyContainer = styled(Container)`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    right:0;
`
export const HeroTitle = styled.div`
    display:flex;
    width:100%;
`

export const HeroH1 = styled.h1`
    color:#fff;
    font-size:48px;
    text-align:center;
    margin-top:50px;
    animation-name: ${fadeUp};
    animation-duration: 3s;
    animation-timing-function:cubic-bezier(0.4, 0, 0, 0.96);
    span{
        color:#F1A40E;
    }
    @media (max-width:768px){
        font-size:45px;
        margin-top:25px;
    }
    @media (max-width:480px){
        font-size:25px;
        margin-top:0;
    }
    @media(max-width:280px){
        font-size:22px;
        margin-top:0;
    }
`
export const HeroP= styled.p`
    margin-top:24px;
    color:#fff;
    text-align:center;
    max-width:600px;
    font-size:28px;
    letter-spacing:2px;
    animation-name: ${fadeUp};
    animation-duration: 3.1s;
    animation-timing-function:cubic-bezier(0.4, 0, 0, 0.96);
    span{
        color:#F1A40E;
    }
    @media screen and(max-width:768px){
        font-size:24px;
    }
    @media (max-width:480px){
        margin-top:15px;
        font-size:18px;
    }
`
export const HeroBtnWrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:end;
    justify-content:space-evenly;
    margin-top:30px;
    animation-name: ${fadeUp};
    animation-duration: 3.3s;
    animation-timing-function:cubic-bezier(0.4, 0, 0, 0.96);
    @media screen and (min-width:375px){
        flex-direction:row;
    }
    @media screen and (min-width: 768px){
        margin-top:180px;
    }
`
