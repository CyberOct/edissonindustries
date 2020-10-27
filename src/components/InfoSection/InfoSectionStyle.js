import styled from 'styled-components'
import { FaPhone, FaClock } from 'react-icons/fa'
import { ImLocation2} from 'react-icons/im'
import{MdEmail} from 'react-icons/md'
import image from '../../assets/background-1.jpg'

export const InfoContainer = styled.section`

    background-color: #101522;
    background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)),
    url(${image});
    background-repeat:no-repeat;
    background-attachment:fixed;
    background-position:center;
    background-size: cover;
`
export const InfoWrap = styled.div`
    padding: 48px 24px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    max-width:1200px;
    margin:0 auto;
`
export const InfoItemsContainer = styled.div`
    display:flex;
    justify-content: center;

    @media (max-width:820px){
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
   transform: translateY(${({ animate }) => (animate ? "0" : "100px")});
    transition: all 1s ease;
    opacity: ${({ animate }) => (animate ? "1" : "0")};

`
export const InfoTitle = styled.h1`
    font-size:14px;
    margin-bottom:16px;
`
export const InfoContent= styled.p`
    font-size: 1.5rem;
    width: 100%;                   
    text-overflow: ellipsis;
    text-align:start;
    word-wrap: break-word;
    hyphens: auto;
    color:#FFA800;
    text-align:center;
    
    @media screen and (max-width:420px){
        font-size:0.8rem;
    }
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




















// export const InfoContainer = styled.div`
//     background-color:black;
// `
// export const HeroInfos = styled.div`
//     padding: 48px 24px;
//     display:flex;
//     flex-direction:column;
//     justify-content:center;
//     align-items:center;
//     max-width:1200px;
//     margin:0 auto;
//     background-color:green;
// `
// // export const HeroInfos = styled.div`
// //     display:flex;
// //     background:#252525;
// //     width:100%;
// //     height:auto;
// //     color:#FFA800;
// //     align-items:center;
// //     justify-content:center;
// //     margin:0;
// //     padding:0px 15px;
// //     flex-direction:column;

// // `
// export const InfoWrapper = styled.div`
//     display:flex;
//     justify-content: center;
//     background-color:red;
//     @media (max-width:820px){
//         padding-top:32px;
//     }
// `
// // export const InfoWrapper = styled.div`
// //     display:flex;
// //     flex-direction:column;
// //     justify-content:center;
// //     width:100%;
// //     max-width:1400px;
// //     align-items: center;
// //     @media (min-width: 768px){
// //         flex-direction:row;
// //         justify-content:space-evenly;
// //         align-items: flex-start;
// //     }
// // `
// export const FooterLinksContainer = styled.div`
//     display:flex;
//     justify-content: center;

//     @media (max-width:820px){
//         padding-top:32px;
//     }
// `
// export const HeroInfo = styled.div`
//     z-index:2;
//     padding:0px 24px;
//     display:flex;
//     flex-direction:column;
//     justify-content:center;
//     align-items:center;
//     p{
//         color:white;
//         font-size: 1rem;
//     }
//     h6{
//         font-size:1.5rem;
//         text-align:center;
//         width:100%;
//     }
//     transition: .5s ease;
//     display:flex;
//     &:hover{
//         svg{
//             color:white !important;
//             fill:white !important;
//             transition: .5s ease;
//         }
//     }
//     @media (max-width:768px) {
//         padding:0px 5px;
//         h6{
//             font-size: 1rem;
//         }
//     }
//     @media  (max-width: 480px){
//         padding:10px 5px;
//         h6{
//             font-size: 0.6rem;
//         }
//     }
//      @media (max-width: 540px){
//         h6{
//             font-size: 0.8rem;
//         }
//     }
//     @media (min-width: 1024px){
//         h6{
//             font-size:1.2rem;
//         }
//          p{
//             font-size:1.3rem;
//         }
//     }
// `
// export const HeroMainInfo = styled.div`
//     display:flex;
//     width:100%;
//     max-width:1200px;
//     justify-content:center;
//     align-items:center;
//     padding: 50px 0px;
//     p{
//         color:white;
//     }
//    h5{
//         font-size:2rem;
//         text-align:end;
//     }
//     transition:.5s ease;
//     &:hover{
//         transition: .5s ease;
//         svg{
//             color:white !important;
//             fill:white !important;
//             transition: .5s ease;
//         }
//     }
//     @media (min-width: 1024px){
//         h5{
//             font-size:2.5rem;
//         }
//         p{
//             font-size:1.5rem;
//         }
//     }
//      @media screen and (max-width: 768px){
//         flex-direction:column;
//          padding:10px 5px;
//     }
// `
// 
