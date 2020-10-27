import React, { useLayoutEffect, useRef, useState }from 'react'
import MapComponent from '../../googleMap/MapComponent'
import{Button} from '../../button/ButtonStyle'
import {ReuseContainer,ReuseColumn1,TextWrapper,TopLine,Heading,Subtitle,BtnWrap} from '../ReusableSection/ReusableSectionStyle'
import { ReuseRow, ReuseWrapper, ReuseColumn2} from './ContactSectionWithMapStyle'
import ContactForm from '../../ContactForm/ContactForm'

const ContactSectionWithMap = (props) => {
    const [show, isShow] = useState({
        itemOne: false,
        itemTwo: false
    });
    const columnText = useRef(null),
        columnImg = useRef(null);

    useLayoutEffect(() => {
        const topPos = element => (element.getBoundingClientRect().bottom + element.getBoundingClientRect().top) / 1.9;
        const textColumn = topPos(columnText.current),
            imgColumn = topPos(columnImg.current);
        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;
            if (textColumn < scrollPos) {
                isShow(state => ({ ...state, itemOne: true }));
            }
            if (imgColumn < scrollPos) {
                isShow(state => ({ ...state, itemTwo: true }));
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll)
        };
    }, [])
    return (
        <>
            <ReuseContainer lightBg={props.lightBg} id={props.id}>
                <ReuseWrapper >
                    <ReuseRow imgStart={props.imgStart}>
                        <ReuseColumn1 animate={show.itemOne} ref={columnText}>
                            <TextWrapper>
                                <TopLine >{props.topLine}</TopLine>
                                <Heading lightText={props.lightText}>{props.heading}</Heading>
                                <Subtitle lightTextSubtitle={props.lightTextSubtitle}>{props.subtitle}</Subtitle>
                                <ContactForm />
                                <BtnWrap showButton={props.showButton}>
                                    <Button to={props.buttonTo} big='true' >{props.buttonText}<span></span></Button>
                                </BtnWrap>
                            </TextWrapper>
                        </ReuseColumn1>
                        <ReuseColumn2 animate={show.itemTwo} ref={columnImg}>
                   
                            <MapComponent />
                        
                        </ReuseColumn2>
                    </ReuseRow>
                </ReuseWrapper>
            </ReuseContainer>
        </>
    )
}

export default ContactSectionWithMap
