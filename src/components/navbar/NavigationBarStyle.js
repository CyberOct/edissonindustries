import styled from 'styled-components'
import {NavLink as LinkRouter} from 'react-router-dom'
import image from '../../assets/background-1.jpg'

export const Nav = styled.nav`
 background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1)),
    url(${image});
    background-repeat:no-repeat;
    background-attachment:fixed;
    background-position:center;
    background-size: cover;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top:0;
    z-index:10;
    overflow-x:hidden;
    @media screen and (max-width 960px){
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    ${'' /* background:#343A40; */}
    display: flex;
    justify-content:space-between;
    height:70px;
    z-index:1;
    width: 100vw;
    padding: 0 24px;
    max-width: 1200px;
    @media screen and (max-width:479px){
        margin:0 15px;
    }
`

export const NavLogo = styled(LinkRouter)`
    color: #fff;
    justify-self:flex-start;
    cursor:pointer;
    font-size:1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weght: bold;
    text-decoration: none;
    @media screen and (max-width:479px){
        margin-left: 10px;
    }
`
export const NavLogoImg = styled.img`
   max-height:43px;
`
export const MobileIcon = styled.div`
     display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-self: center;
        border: none;
        padding: 0;
        height:27px;
        width:40px;
        cursor:pointer;
        background: transparent;

        @media (min-width: 769px){
            display:none ;
    }
     div {
            width: 100%;
            height:3px;
            background-color: white;
            border-radius: 10px;
            transition: all 0.3s linear;
            :first-child {
                transform: ${({ click }) => click ? 'rotate(-45deg) translate(-6px,6px)' : 'rotate(0)'};
            }
            :nth-child(2) {
                opacity: ${({ click }) => (click ? '0' : '1')};
                transform: ${({ click }) => (click ? 'translateX(20px)' : 'translateX(0)')};
            }
            :nth-child(3) {
                transform: ${({ click }) => (click ? 'rotate(45deg) translate(-6px,-6px)' : 'rotate(0)')};
            }
        }
    
`
export const NavMenu = styled.ul`
    display: flex;
    align-items:center;
    list-style:none;
    text-align: center;

    @media screen and (max-width:500px){
    
    }
`

export const NavItem = styled.li`
    height: 70px;
`
export const NavLinks = styled(LinkRouter)`
    color: #fff;
    display: flex;
    align-items:center;
    padding: 0 1rem;
    height:100%;
    cursor: pointer;
    transform: scale(1);
    transition: .5s ease;
    &:hover{
        text-decoration: none;
        color:white;
        transform: scale(1.2);
        transition: .5s ease;
    }
    &.active {
        border-bottom: 3px solid  #FFA800;
    }
`

export const DropDownWrap = styled.div`
    display:flex;
    height:70px;
    align-items:center;
    .dropdownIcon{
        cursor:pointer;
        fill:white !important;
        transform:translateX(-100%) scale(1.5) rotate(0deg);
        transition: .5s ease;
        transform:${({ dropdown }) => (dropdown ? 'translateX(-100%) scale(1.8) rotate(180deg)' : 'translateX(-100%) scale(1.5) rotate(0deg)')};
    }
`