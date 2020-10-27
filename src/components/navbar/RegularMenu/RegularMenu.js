import React from 'react'
import { NavItem, NavLinks, DropDownWrap } from '../NavigationBarStyle'
import { IoIosArrowDown } from 'react-icons/io'
import DropDownMenu from '../DropDownMenu';
const RegularMenu = (props) => {
    return (
        <>
            <NavItem>
                <NavLinks to="/">Acasa</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='/despre-noi'>Despre noi</NavLinks>
            </NavItem>
            <span>
                <NavItem onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} >
                    <DropDownWrap dropdown={props.dropdown} >
                        <NavLinks to='/servicii' >Servicii<span style={{ width: 20 }}></span></NavLinks>
                        <IoIosArrowDown className='dropdownIcon'  />
                    </DropDownWrap>
                    <DropDownMenu closeDropDown={props.closeDropDown} closeMobileMenu={props.closeMobileMenu} dropdown={props.dropdown} />
                </NavItem>
            </span>
            <NavItem>
                <NavLinks to='/contact'>Contact</NavLinks>
            </NavItem>
        </>
       
    )
}

export default RegularMenu
