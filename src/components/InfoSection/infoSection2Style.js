import styled from 'styled-components'
import { FaPhone, FaClock } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
import AnimatedNumber from 'react-animated-number'

export const NumarAnimat = styled(AnimatedNumber)`

`

export const InfoContainer = styled.section`
    background-color: #F9F9F9;
    padding-bottom:30px;
`
export const InfoWrap = styled.div`
    padding: 48px 24px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    max-width:900px;
    margin:0 auto;
    background-color:#00121F;

    @media screen and (max-width:420px)  {
        max-width:300px;
    }
`
export const InfoItemsContainer = styled.div`
    display:flex;
    justify-content: center;

    @media (max-width:300px){
        padding-top:32px;
        flex-direction:column;
    }
`
export const InfoItemsWrapper = styled.div`
    display:flex;
    
    @media (max-width:820px){
        flex-direction:column;
    }
`
export const InfoItem = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    margin: 0px 5px;
    text-align: left;
    width: 100%;
    box-sizing:border-box;
    color:#fff;
    @media (max-width: 420px){
        margin:0;
        padding: 0px 5px;
        width:100%;
    }
`
export const InfoTitle = styled.h1`
    font-size:14px;
    margin-bottom:16px;
`
export const InfoContent = styled.p`
    font-size: 2rem;
    width: 100%;                   
    text-overflow: ellipsis;
    text-align:start;
    word-wrap: break-word;
    hyphens: auto;
    color:#FFA800;
    text-align:center;
    font-weight:bold;
`
export const PhoneIcon = styled(FaPhone)`
     color:#FFA800;
     fill:#FFA800 !important;
     font-size:2rem;
     margin:0 10px;
 `
export const ClockIcon = styled(FaClock)`
     color:#FFA800;
     fill:#FFA800 !important;
     font-size:2rem;
 `
export const LocationIcon = styled(ImLocation2)`
     font-size:2rem;
     color:#FFA800;
     fill:#FFA800 !important;
 `
export const MailIcon = styled(MdEmail)`
     font-size:2rem;
     color:#FFA800;
     fill:#FFA800 !important;
 `

export const Icon = styled.img`
    height:60px;
    margin-bottom:20px;
`

export const TextWrap = styled.div`
    display:flex;
    align-items:center;
`