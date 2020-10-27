import React, { useLayoutEffect,useRef,useState} from 'react'
import {NumarAnimat, TextWrap,Icon, InfoContainer, InfoWrap, InfoItemsContainer, InfoItemsWrapper, InfoItem, InfoTitle, InfoContent, PhoneIcon, ClockIcon, MailIcon, LocationIcon } from './infoSection2Style'
import iconClienti from '../../assets/icon-clienti.png'
import iconProiecte from '../../assets/icon-proiecte.png'
import iconAngajati from '../../assets/icon-angajati.png'
import iconExperienta from '../../assets/icon-experienta.png'


const InfoSection2 = () => {  
    const [show, isShow] = useState({
        itemOne: false
    });
    const ourRef = useRef(null);
    const functie = () => {
        const topPos = element => (element.getBoundingClientRect().bottom );
        const section1Pos = topPos(ourRef.current);
        console.log(section1Pos);
        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;
            if (section1Pos < scrollPos) {
                isShow(state => ({ ...state, itemOne: true }));
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll)
        };
    }
    useLayoutEffect(functie, [])  
  
    return (
        <InfoContainer ref={ourRef}>
            <InfoWrap>
                <InfoItemsContainer>
                    <InfoItemsWrapper>
                        <InfoItem>
                            <Icon src={iconClienti} alt="incon clienti" />
                            <TextWrap>
                                <InfoContent>173</InfoContent>
                                <InfoTitle>Clienți fericiți </InfoTitle>
                            </TextWrap>
                        </InfoItem>
                        <InfoItem>
                            <Icon src={iconProiecte} alt="incon proiecte" />
                            <TextWrap>
                                    <InfoContent>149</InfoContent>
                                    <InfoTitle> Proiecte finalizate</InfoTitle>
                            </TextWrap>
                        </InfoItem>
                    </InfoItemsWrapper>
                    <InfoItemsWrapper>
                        <InfoItem>
                            <Icon src={iconAngajati} alt="incon angajati" />
                            <TextWrap>
                                <InfoContent>3</InfoContent>
                                <InfoTitle> Angajati calificati</InfoTitle>
                            </TextWrap>
                        </InfoItem>
                        <InfoItem>
                            <Icon src={iconExperienta} alt="incon experienta" />
                        <TextWrap>
                                <InfoContent >
                                    <NumarAnimat
                                        value={5}
                                        formatValue={n => n.toFixed(0)}
                                        frameStyle={percentage => percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}}
                                        duration={5000}
                                    />
                                </InfoContent>
                                <InfoTitle>Ani Experienta</InfoTitle>
                        </TextWrap>
                        </InfoItem>
                    </InfoItemsWrapper>
                </InfoItemsContainer>
            </InfoWrap>
        </InfoContainer>
    )
}

export default InfoSection2;
