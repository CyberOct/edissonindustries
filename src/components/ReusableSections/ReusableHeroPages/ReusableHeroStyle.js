import styled,{keyframes} from 'styled-components'
import { HiOutlineArrowNarrowDown} from 'react-icons/hi'

export const bounceDown = keyframes`
    0%,20%,53%,100% {
    animation-timing-function:ease;
    transform:translateZ(0) translateX(-50%);
    }
    40%,43% {
        animation-timing-function:ease;
        transform:translate3d(-50%,-30px,0) scaleY(1.1);
    }
   70%{
       animation-timing-function:ease;
       transform:translate3d(-50%,-15px,0) scaleY(1.05);
   }
    80%{
       animation-timing-function:ease;
       transform:translateZ(0) scaleY(1.05) translateX(-50%);;
   }
    90%{
       animation-timing-function:ease;
       transform:translate3d(-50%,-4px,0) scaleY(1.02);
   }
`

export const ArrowDown = styled(HiOutlineArrowNarrowDown)`
    transform:translate(-50%,-20%);
    position:absolute;
    bottom:0;
    left:50%;
    color:#606060;
    font-size:3rem;
    animation-name: ${bounceDown};
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
`
export const ReuseHero = styled.div`
    position:relative;
    width:100%;
    height:320px;
    font-family: Fares;
`
export const ImgWrapper = styled.div`
    width:100%;
    height:100%; 
    span{
        position:absolute;
        top:0;
        left:0;
        background-color:rgba(0,0,0,0.85);
        width:100%;
        height:100%; 
    }
     &:before{
            content: ' ';
            border: 10px solid;
            border-color: #F1A40E;
            z-index:1;
            opacity: .5;
            width: 50%;
            height: 50%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
    }
`
export const HeroImg = styled.img`  
    width:100vw;
    height:320px;    
    object-fit: cover;
    position:fixed;
    top:70px;
    left:0;
    z-index:-1;
`

export const HeroH1 = styled.h1`
    text-align:center;
    position:absolute;
    top:50%;
    left:50%;
    color:white;
    transform:translate(-50%,-50%);
    z-index:3;
    @media screen and (max-width:585px){
        font-size:1.6rem;
    }
    @media screen and (max-width:420px){
        font-size:1.3rem;
    }
   
`