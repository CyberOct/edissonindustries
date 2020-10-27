import React, { useLayoutEffect, useRef, useState } from 'react'
import { InfoContainer, InfoWrap, InfoItemsContainer, InfoItemsWrapper, InfoItem, InfoTitle, InfoContent, PhoneIcon, ClockIcon, MailIcon, LocationIcon} from './InfoSectionStyle'

const InfoSection =()=>{
    const [show, isShow] = useState({
        itemOne: false,
    });

    const infoContainer = useRef(null);

    useLayoutEffect(() => {
        const topPos = element => (element.getBoundingClientRect().bottom - element.getBoundingClientRect().top );
        const containerInfo = topPos(infoContainer.current);
        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;
            if (containerInfo < scrollPos) {
                isShow(state => ({ ...state, itemOne: true }));
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll)
        };
    }, [])

    return(
        <InfoContainer >
            <InfoWrap>
                <InfoItemsContainer ref={infoContainer}>
                    <InfoItemsWrapper >
                        <InfoItem animate={show.itemOne}>
                            <InfoTitle> Serviciul Clienți:</InfoTitle>
                            <PhoneIcon />
                            <InfoContent>0746 788 322</InfoContent>
                        </InfoItem>
                        <InfoItem animate={show.itemOne}>
                            <InfoTitle> Adresa:</InfoTitle>
                            <LocationIcon />
                            <InfoContent>Strada Bistriței Nr. 4, Piatra Neamț</InfoContent>
                        </InfoItem> 
                    </InfoItemsWrapper>
                    <InfoItemsWrapper>
                        <InfoItem animate={show.itemOne}>
                            <InfoTitle> Email:</InfoTitle>
                            <MailIcon />
                            <InfoContent>edisson.industries@gmail.com</InfoContent>
                        </InfoItem>
                        <InfoItem animate={show.itemOne}>
                            <InfoTitle> Program:</InfoTitle>
                            <ClockIcon />
                            <InfoContent>Luni-Sambata : 09:00-17:00</InfoContent>
                        </InfoItem>
                    </InfoItemsWrapper>
                </InfoItemsContainer>
            </InfoWrap>
        </InfoContainer>
        // <InfoContainer>
        // <HeroInfos>
        //         <HeroMainInfo>
        //         <p>Serviciul<br></br> Clienți: </p> 
        //             <PhoneIcon />
        //         <h5>   0746 788 322</h5>
        //         </HeroMainInfo>
        //     <InfoWrapper>
        //         <HeroInfo>
        //             <p>PROGRAM:</p>
        //             <ClockIcon />
        //             <h6> L-V 8.00 - 17.00</h6>
        //             <h6>S-D ÎNCHIS</h6>
        //         </HeroInfo>
        //         <HeroInfo>
        //             <p>ADRESĂ:</p>
        //             <LocationIcon />
        //             <h6>Strada Bistriței Nr. 4, Piatra Neamț.</h6>
        //         </HeroInfo>
        //         <HeroInfo>
        //             <p>EMAIL: </p>
        //             <MailIcon />
        //             <h6>edisson.industries@gmail.com</h6>
        //         </HeroInfo>
        //     </InfoWrapper>
            
        // </HeroInfos>
        // </InfoContainer>
    )
}

export default InfoSection;
