import React from 'react'
import { Submenu, SidebarLink } from './mobileMenu/MobileMenuStyle'

const DropDownMenu = (props) => {
    function closeDDandMenu(){
        props.closeMobileMenu();
        props.closeDropDown();
    }
    return(
        <Submenu dropdown={props.dropdown}>
            <SidebarLink className="servicesLink" to='/servicii-proiectare-instalatii-electrice' onClick={closeDDandMenu}>Proiectare instalatii electrice</SidebarLink>
            <SidebarLink className="servicesLink" to='/servicii-executare-instalatii-electrice'>Executare instalatii electrice</SidebarLink>
            <SidebarLink className="servicesLink" to='/servicii-bransamente-instalatii-electrice' >Bransamente instalatii electrice</SidebarLink>
            <SidebarLink className="servicesLink" to='/servicii-automatizari-knx' >Automatizari KNX</SidebarLink>
            <SidebarLink className="servicesLink" to='/servicii-executie-si-masuratori-PRAM' >Executie si masuratori PRAM</SidebarLink>
            <SidebarLink className="servicesLink" to='/servicii-montare-protectie-supratensiune-instalatii-electrice' >Sisteme de supraveghere si antiefractie</SidebarLink>
            <SidebarLink className="servicesLink" to='/servicii-montare-protectie-supratensiune-instalatii-electrice' >Mententata si revizii la echipamente si instalatii electrice</SidebarLink>
            <SidebarLink className="servicesLink" to='/servicii-montare-protectie-supratensiune-instalatii-electrice' >Sisteme fotovoltaice</SidebarLink>
        </Submenu>
    )
    
}

export default DropDownMenu;
