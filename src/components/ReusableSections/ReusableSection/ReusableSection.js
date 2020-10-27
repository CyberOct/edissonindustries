import React, { useLayoutEffect, useRef, useState }from 'react'
import {Button} from '../../button/ButtonStyle'
import { UnorderedListWrapper,SubtitleList, SubtitleHeader, UnorderedList, ListElement, ReuseContainer, ReuseWrapper, ReuseRow, ReuseColumn1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ReuseColumn2, ImgWrap, Img, CheckBoxIcon} from './ReusableSectionStyle'
function ReusableSection(props) {
    const [show, isShow] = useState({
        itemOne: false,
        itemTwo:false
    });
    const columnText = useRef(null),
         columnImg = useRef(null);

    useLayoutEffect(() => {
        const topPos = element => (element.getBoundingClientRect().bottom); //+ element.getBoundingClientRect().top)/1.9 
        const textColumn = topPos(columnText.current),
            imgColumn = topPos(columnImg.current);
        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;
            if (textColumn < scrollPos) {
                isShow(state => ({ ...state, itemOne: true }));
            }
            if (imgColumn <scrollPos) {
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
                        <ReuseColumn1 animate={show.itemOne} >
                            <TextWrapper>
                                <TopLine >{props.topLine}</TopLine>
                                <Heading lightText={props.lightText} ref={columnText}>{props.heading}</Heading>
                                <Subtitle lightTextSubtitle={props.lightTextSubtitle}>{props.subtitle}</Subtitle>
                                <SubtitleList showSubtitleList={props.showSubtitleList}>
                                    <SubtitleHeader >{props.subtitleHeader}</SubtitleHeader>
                                    <UnorderedListWrapper>
                                        <UnorderedList>
                                            <ListElement><CheckBoxIcon /><span>abc</span></ListElement>
                                            <ListElement><CheckBoxIcon /><span>abc</span></ListElement>
                                            <ListElement><CheckBoxIcon /><span>abc</span></ListElement>
                                            <ListElement><CheckBoxIcon /><span>abc</span></ListElement>
                                        </UnorderedList>
                                        <UnorderedList>
                                            <ListElement><CheckBoxIcon /><span>abc</span></ListElement>
                                            <ListElement><CheckBoxIcon /><span>abc</span></ListElement>
                                            <ListElement><CheckBoxIcon /><span>abc</span></ListElement>
                                            <ListElement><CheckBoxIcon /><span>abc</span></ListElement>
                                        </UnorderedList>
                                    </UnorderedListWrapper>
                                </SubtitleList>
                                <BtnWrap showButton={props.showButton}>
                                    <Button to={props.buttonTo} big='true' >{props.buttonText}<span></span></Button>
                                </BtnWrap>
                            </TextWrapper>
                        </ReuseColumn1>
                        <ReuseColumn2 animate={show.itemTwo} ref={columnImg}>
                            <ImgWrap >
                                <Img src={props.img} alt={props.alt}/>
                            </ImgWrap>
                        </ReuseColumn2>
                    </ReuseRow>
                </ReuseWrapper>
            </ReuseContainer>
        </>
    )
}

export default ReusableSection
