import React from 'react'
import { PhoneIcon,EmailIcon,FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIconLink} from './footerStyle'
import { FaFacebook, FaInstagram, FaHeart} from 'react-icons/fa';
import SmallLogo from '../../../assets/Logo.png';
const Footer = () => {
   const fbStyle = {
       width:"100%", 
       height:"100%", 
       border: "none",
        overflow: "hidden",
        scrolling:"no",
        frameborder:"0", 
        allowTransparency:"true", 
        allow:"encrypted-media"
   }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contacteaza-ne</FooterLinkTitle>
                            <FooterLink to="/contact"><PhoneIcon /></FooterLink>
                            <FooterLink to="/contact">0746 788 322</FooterLink>
                            <FooterLink href="mailto:edisson.industries@gmail.com" to="/contact"> <EmailIcon /></FooterLink>
                            <FooterLink href="mailto:edisson.industries@gmail.com" to="/contact" className="email">edisson.industries@gmail.com</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Servicii</FooterLinkTitle>
                            <FooterLink to="/">Proiectare</FooterLink>
                            <FooterLink to="/">Interventii rapide</FooterLink>
                            <FooterLink to="/">Evaluare risc</FooterLink>
                            <FooterLink to="/">Revizii</FooterLink>
                            <FooterLink to="/">Protectii supratensiune</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/"><iframe title="embeded Facebook page" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FEdisson-Industries-109064090477411&tabs=timeline&width=180&height=70&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" style={fbStyle}></iframe></FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="//www.edisson-industries.ro">
                            <img src={SmallLogo} alt="Logo"/>
                        </SocialLogo>
                        <WebsiteRights> <FooterLink to="//www.edisson-industries.ro"><span>Edisson-Industires.ro</span></FooterLink> © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/Edisson-Industries-109064090477411" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                        </SocialIcons>
                        <a href="//www.cyber-octopus.com/" target="_blank" rel="noopener noreferrer">Crafted with <FaHeart className="heart" /> by <span>Cyber-Octopus</span></a>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
