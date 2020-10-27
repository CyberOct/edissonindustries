import React, { useState,useEffect, useLayoutEffect } from 'react';
import { Nav, NavbarContainer, NavLogo, NavLogoImg, MobileIcon, NavMenu, NavItem, NavLinks, DropDownWrap } from './NavigationBarStyle'
import { IoIosArrowDown } from 'react-icons/io'
import { Submenu, SidebarLink } from './mobileMenu/MobileMenuStyle'
import logo2 from '../../assets/Logo2Update.png';
import SubmenuContainer from './DropDownMenu'
import MobileMenu from './mobileMenu/MobileMenu'
import RegularMenu from './RegularMenu/RegularMenu';



const NavigationBar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => {
        setDropdown(false);
        setClick(false);
    }
    const handleMobileIconClick = () =>{
        handleClick();
        if(!click){
            setDropdown(false);
        }
    }
    const handleDropDownClick = () => setDropdown(!dropdown);
    const closeDropDown = () => setDropdown(false);
    const onMouseEnter = () => {
        if (windowWidth < 769) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };
    const onMouseLeave = () => {
        if (windowWidth < 769) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };
    useLayoutEffect(() => {
            function updateWindowWidth() {
                setWindowWidth(window.innerWidth);
            }
            window.addEventListener('resize', updateWindowWidth);
            updateWindowWidth();
            return () => window.removeEventListener('resize', updateWindowWidth);
        }, []);
   
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={closeMobileMenu}>
                        <NavLogoImg src={logo2}></NavLogoImg>
                    </NavLogo>
                    <NavMenu>
                        {(windowWidth < 769) ? 
                        <MobileMenu 
                        closeDropDown={closeDropDown}
                         click={click} 
                         closeMobileMenu={closeMobileMenu}
                          dropdown={dropdown} 
                          handleDropDownClick={handleDropDownClick} />
                         :
                            <RegularMenu 
                            dropdown={dropdown}
                            handleDropDownClick={handleDropDownClick}
                            closeMobileMenu={closeMobileMenu}
                                closeDropDown={closeDropDown}
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                                 /> }
                    </NavMenu>
                    <MobileIcon onClick={handleMobileIconClick} click={click} >
                        <div />
                        <div />
                        <div />
                    </MobileIcon>
                </NavbarContainer>
            </Nav>
        </>
    );
}
export default NavigationBar;