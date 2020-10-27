import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
export const DropdownIcon = styled(IoIosArrowDown)`
        cursor:pointer;
        fill:white !important;
        margin-bottom:0px !important;
        transform:scale(1.5) rotate(0deg);
        transition: .5s ease;
        transform:${({ dropdown }) => (dropdown ? 'scale(1.8) rotate(180deg)' :' scale(1.5) rotate(0deg)')};
`
export const SidebarContainer = styled.aside`
    position:fixed;
    z-index: 9;
    width:100%;
    height:auto;
    padding:70px 0px;
    ${'' /* background: #343A40; */}
    ${'' /* background: linear-gradient(to right, transparent 0% , rgb(52,58,64) 20% ,rgb(52,58,64) 80% , transparent 100%); */}
    background-color: rgba(0,0,0,0.9);
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    left:0;
    opacity:${({ click }) => (click ? '95%':'0')};
    top: ${({ click }) => (click? '70px':'-100%')};
    transition: .5s ease-in-out;
`
export const SidebarWrapper = styled.div`
    color: #fff;
    display:flex;
    flex-direction:row !important;
    align-items:center;
    justify-content:center;
    max-width:150px;
`
export const SidebarMenu = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const SidebarLink = styled(LinkRouter)`
    display:flex;
    flex-direction:column;
    font-size:1.5rem;
    text-decoration:none;
    list-style:none;
    color: #fff;
    cursor:pointer;
    transform: scale(1);
    transition: .5s ease;
    margin:10px 10px;
    text-align:left;
    &:hover{
        transform: scale(1.02);
        transition: .5s ease;
        text-decoration:none;
        color:white;
        &:after{
            display: block;
            height: 2px;
            background-color: #FFA800;
            content: " ";
            width: 100%;
            margin: 0 auto;
            margin-top: 5px;
            }
    }
    
    
`
export const Submenu = styled.div`
    height:auto;
    padding:0px 20px;
    background:white;
    display: ${({ dropdown }) => (dropdown ? 'flex':'none')};
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    opacity:1;
    a{
        color:#343A40;
        &:hover{
            color:#343A40;
        }
    }
    border-radius:5px;

    @media screen and (min-width:769px){
        position:fixed;
        top:70px; 
    }
    .servicesLink{
        font-size:1rem;
    }
`