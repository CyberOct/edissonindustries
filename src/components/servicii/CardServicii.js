import React, { useLayoutEffect, useRef, useState } from 'react'
import Tilt from 'react-tilt'
import { ServicesCard, ServicesIcon, ServicesH2, ServicesP, TextWrapper, ImgWrapper, CardContent} from './CardServiciiStyle'
import {Button} from '../button/ButtonStyle'
const CardServicii = ({ img, alt, titluServiciu, descriereServiciu,to }) => {
    const [show, isShow] = useState({
        itemOne: false
    });
    const ourRef = useRef(null);
    const functie = ()=>{
        const topPos = element => (element.getBoundingClientRect().bottom + element.getBoundingClientRect().top) / 1.9;
        const section1Pos = topPos(ourRef.current);

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
        <Tilt options={{max : 10}}>
            <ServicesCard animate={show.itemOne} ref={ourRef}>
            <CardContent>
                    <ImgWrapper>
                        <ServicesIcon src={img} alt={alt} />
                    </ImgWrapper>
                    <TextWrapper>
                        <ServicesH2>{titluServiciu}</ServicesH2>
                        <ServicesP>{descriereServiciu}</ServicesP>
                    </TextWrapper>
                    <Button to={to} culoareverde="true" ><span></span>Mai mult</Button>
            </CardContent>
            </ServicesCard>
        </Tilt>
    )
}

export default CardServicii
