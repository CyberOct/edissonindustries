import styled, {keyframes} from 'styled-components'
import {Link} from 'react-router-dom'
import { FaPhone, FaMailBulk} from "react-icons/fa"

export const heartBeatAnimation = keyframes`
    0% {
    transform: scale(1);
    }
    20% {
        transform: scale(1.2);
    }
    40% {
        transform: scale(1);
    }
    60% {
        transform: scale(1.2);
    }
    80% {
        transform: scale(1);
    }
    100% {
        transform: scale(1);
    }
`

export const FooterContainer=styled.footer`
    background-color: #101522;
`
export const FooterWrap = styled.div`
    padding: 48px 24px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    max-width:1200px;
    margin:0 auto;
`
export const FooterLinksContainer = styled.div`
    display:flex;
    justify-content: center;

    @media (max-width:820px){
        padding-top:32px;
    }
`
export const FooterLinksWrapper = styled.div`
    display:flex;

    @media (max-width:820px){
        flex-direction:column;
        max-width:50%;
    }
`
export const FooterLinkItems = styled.div`
    display:flex;
    flex-direction:column;
    align-item:flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing:border-box;
    color:#fff;
    .email{
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    @media (max-width: 420px){
        margin:0;
        padding:10px;
        width:100%;
    }
`
export const FooterLinkTitle = styled.h1`
    font-size:18px;
    margin-bottom:16px;
`
export const FooterLink = styled(Link)`
    color:#fff;
    text-decoration:none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    transition: .5s ease;
    display:flex;
    align-items:flex-start;
    flex-direction:column;
    justify-content:center;
    word-wrap: break-word;
    box-sizing: border-box;
    &:hover{
        color:#01bf71;
        transition: .5s ease;
        text-decoration:none;
        span{
            font-size:1.1rem;
            &:hover{
                color:#01bf71;
            }
            
        }
    
    }
    
`
export const SocialMedia = styled.section`
    max-width:1200px;
    width:100%;
`
export const SocialMediaWrap = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width:1200px;
    margin: 40px auto 0 auto;

    @media (max-width: 820px){
        flex-direction:column;
    }
    a{
        text-decoration:none;
        font-weight:bold;
        color:#AFC7D7;
        span{
            color:#rgb(147,141,111);
            cursor:pointer;
            transition:.5s ease;
            &:hover{
                color:white;
                font-size:1.1rem;
                transition:.5s ease;
            }
        }
    }
    svg{
        transform:scale(1);
        fill:#E91E63 !important;
        transition: .5s ease;
    }
    .heart{
        animation-name: ${heartBeatAnimation};
        animation-duration: .8s;
        animation-iteration-count: infinite;
    }
`

export const SocialLogo = styled(Link)`
    color:#fff;
    justify-self: start;
    cursor:pointer;
    text-decoration:none;
    font-size: 1.5 rem;
    display:flex;
    align-items:center;
    margin-bottom: 16px;
    font-weight: bold;
    transform:scale(1) rotate(0deg);
    transition: .5s ease;
    &:hover{
        transform:scale(1.3) rotate(360deg);
        transition: .7s ease;
    }
    img{
        width:50px;
    }
`
export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
    a{
        text-decoration:none;
        font-weight:bold;
    }
`
export const SocialIcons = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    width:240px;
`
export const SocialIconLink = styled.a`
    color:#fff;
    font-size:30px;
    svg{
        fill:#fff !important;
        transition: .5s ease;
        &:hover{
            fill:#01bf71!important;
            transition: .5s ease;
        }
    }
   
`
export const PhoneIcon = styled(FaPhone)`
    font-size:1.5rem;
    fill:#00C087 !important;
    
`
export const EmailIcon = styled(FaMailBulk)`
    font-size:1.5rem;
    fill:#00C087 !important;
`