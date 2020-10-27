import styled from 'styled-components'
import image from '../../../assets/electric-22.jpg'
import { NavLink as Link } from 'react-router-dom'
import { PathData } from './Data'
export const MainWrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    background-color:white;
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.8)),
    url(${image});
    background-repeat:no-repeat;
    ${'' /* background-attachment:fixed; */}
    background-position:center;
    background-size: cover;
`
export const ContentWrapper = styled.div`
    width:100%;
    max-width:1200px;
    height:100vh;
    display:flex;
    justify-content:space-evenly;
    align-items:flex-start;
    padding-top:100px;

    @media screen and (max-width:855px){
        flex-direction:column;
        height:auto;
        align-items:center;
        padding-bottom:30px;
    }
      @media screen and (max-width:530px){

    }
    @media screen and (max-width:320px){
        flex-direction:column;

    }
`

export const TextWrapper = styled.div`
    height:800px;
    width:65%;
    background:rgba(255,255,255,0.9);
    padding:30px;
    ${'' /* border:2px solid #9EC10F; */}
    p{
        max-width:100%;
        word-wrap:break-word;
        font-weight:bold;
        color:#636363;
    }
    h1{
        font-size:32px;
    }
     @media screen and (max-width:855px){
        height:auto;
        align-items:center;
        margin-bottom:30px;
        width:90%;
    }
    @media screen and (max-width:425px){
         h1{
            font-size:20px;
        }
        p{
            font-size:14px;
        }
    }
     @media screen and (max-width:320px){
        width:100%;
    }
`
export const ServicesNavWrapper = styled.div`
    height:500px;
    width:30%;
    border:1px solid green;
    background-color:#00121F;
    @media screen and (max-width:855px){
        height:auto;
        align-self:flex-start;
        margin-left:50px;
        width:60%;
    }
    @media screen and (max-width:530px){
        width:70%;
    }
    @media screen and (max-width:320px){
        width:90%;
        margin-left:5%;
    }
`
export const ServicesNavUl = styled.ul`
    list-style-type: none;
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding-top:10px;
    padding-bottom:10px;
`
// export const ServiceListElement = styled.li`
//    height:100%;
//    background:#F1A40E;
//    margin-bottom:5px;
//    margin-top:5px;
//    margin-right:40px;
//    display: flex;
//    justify-content: center;
//    align-items:center;
//    position:relative;
//    z-index:3;
//    transition: .5s ease;
//    cursor:pointer;
//    text-align:center;
//     span{
//         position:absolute;
//         top:0;
//         left:0;
//         height:100%;
//         width:100%;
//         background-color:rgba(0,0,0,0.5);
//         transition: .5s ease;
//         z-index:-1;
//     }
//     &:hover{
//            span{
//                background-color:transparent;
//                 transition: .5s ease;
//            } 
//            transform:scaleX(1.1) scaleY(1.1);
//            transition: .5s ease;
//         }
//     }
// `
export const ServiceLink = styled(Link)`
    color:#7F7F7F;
    font-weight:bold;
    text-transform:upercase;
    text-decoration:none;
    height: 100%;
    transition: .5s ease;
    background:#F1A40E;
    text-align:center;
     margin-bottom:5px;
   margin-top:5px;
   margin-right:40px;
   position:relative;
   z-index:3;
    &:hover{
           span{
               background-color:transparent;
                transition: .5s ease;
           } 
           transform:scaleX(1.1) scaleY(1.1);
           transition: .5s ease;
        }
   span{
        position:absolute;
        top:0;
        left:0;
        height:100%;
        width:100%;
        background-color:rgba(0,0,0,0.5);
        transition: .5s ease;
        z-index:-1;
    }
    &:hover{
        text-decoration:none !important;
        color:white;
        transition: .5s ease;
        padding-top:10px;
    }
    &.active{
      text-decoration:none !important;
        color:white;
        transition: .5s ease;
        padding-top:10px;
        span{
               background-color:transparent;
                transition: .5s ease;
           } 
           transform:scaleX(1.1) scaleY(1.1);
           transition: .5s ease;
        }

        @media screen and (max-width:855px){
            &.active{
              padding:0px;
          }
        }
        @media screen and (max-width:425px){
          font-size:12px;
        }
`