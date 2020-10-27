import styled from "styled-components"
import image from '../../assets/small-Hero-4.jpg'
export const ServicesContainer = styled.div`
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#00121F')};
    padding-bottom:60px;
    @media screen and(max-width:768px){
        height: 1100px;
    }
    @media screen and(max-width:480px){
        height: 1300px;
    }
`
export const ServicesWrapper = styled.div`
    max-width:1200px;
    margin: 0 auto;
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 30px;
    padding:30px 30px;
    @media screen and (max-width: 1400px){
        grid-template-columns:1fr 1fr 1fr;
    @media screen and (max-width: 1024px){
        grid-template-columns:1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns:1fr;
        padding: 20px 20px;
    }
    @media screen and (max-width: 375px){
        grid-template-columns:1fr;
        padding: 5px 5px;
    }
    @media screen and (max-width: 280px){
        grid-template-columns:1fr;
        padding: 0 0 ;
    }
`
export const ServicesH1 = styled.h1`
    font-size:2.5rem;
    color:#9EC10F;
    padding-bottom:60px;
    transform: translateY(${({ animate }) => (animate ? "0" : "-30px")});
    transition: all 1s ease;
    opacity: ${({ animate }) => (animate ? "1" : "0")};
    @media screen and (max-width:480px){
        font-size:2rem;
    }
`
export const ServicesP = styled.p`
    font-size:18px;
    ${'' /* color:#00121F; */}
    color:white;
    font-weight:bold;
    text-align:center;
    max-width:600px;
    padding-bottom:60px;
    padding-left:10px;
    padding-right:10px;
    white-space: pre-wrap;
    line-height: 24px;
    transform: translateY(${({ animate }) => (animate ? "0" : "30px")});
    transition: all 1s ease;
    opacity: ${({ animate }) => (animate ? "1" : "0")};
`
export const Wrapper = styled.div`
    height:auto;
    min-heght:400px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
    ${'' /* background-image: url(${image});
    background-size: cover;
    background-repeat:no-repeat;
    background-position:center; */}
`