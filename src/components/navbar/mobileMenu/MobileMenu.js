import React,{useState} from 'react'
import {SidebarContainer,SidebarWrapper, SidebarMenu,SidebarLink,DropdownIcon} from './MobileMenuStyle'
import DropDownMenu from '../DropDownMenu'
const MobileMenu = (props) => {
    return (
        <SidebarContainer click={props.click} >
            <SidebarMenu>
                <SidebarLink to='/' onClick={props.closeMobileMenu}>Acasa</SidebarLink>
                <SidebarLink to='/despre-noi' onClick={props.closeMobileMenu} >Despre noi</SidebarLink>
                <SidebarWrapper  >
                    <SidebarLink to='/servicii' onClick={props.closeMobileMenu} >Servicii</SidebarLink>
                    <DropdownIcon onClick={props.handleDropDownClick} dropdown={props.dropdown} />
                </SidebarWrapper>
                <DropDownMenu dropdown={props.dropdown} closeDropDown={props.closeDropDown} closeMobileMenu={props.closeMobileMenu}/>
                <SidebarLink to='/contact' onClick={props.closeMobileMenu} >Contact</SidebarLink>
            </SidebarMenu>  
       </SidebarContainer>
    )
}

export default MobileMenu;
