import styled from "styled-components"

export const ServicesCard = styled.div`
    background: #F1A40E;
    display:flex;
    flex-direction:column;
    justify-content:center
    align-items:center;
    height:420px;
    padding:10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition:all .2s ease;
    cursor:pointer;
    width:280px;
    position:relative;
    transform: scale(${({ animate }) => (animate ? "1" : "0")});
    transition: all 1s ease;
    opacity: ${({ animate }) => (animate ? "1" : "0")};
    @media screen and (max-width:375px){
        width:350px;
    }
    @media screen and (max-width:320px){
        width:300px;
    }
    @media screen and (max-width:280px){
        width:270px;
    }
`
export const CardContent = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`
export const ImgWrapper = styled.div`
    width:100%;
    height:50%;
    position:relative;
`
export const ServicesIcon = styled.img`
    width:100%;
    height:100%;    
    object-fit: cover;
    position:absolute;
    top:0;
    left:0;
`

export const TextWrapper = styled.div`
    width:100%;
    height:30%;
    overflow-wrap: break-word;
    word-wrap:break-word;
    
`
export const ServicesH2 = styled.h2`
    padding-top:5px;
    font-size:1.1rem;
    margin-bottom:5px;
    text-align:center;
    height:auto;
`
export const ServicesP = styled.p`
    font-size:1rem;
    text-align:center;
    text-align:left;
    word-wrap:break-word;
    max-height:80%;
    min-height:50%;
    overflow:hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
   -webkit-line-clamp: 3; /* number of lines to show */
   -webkit-box-orient: vertical;
`

