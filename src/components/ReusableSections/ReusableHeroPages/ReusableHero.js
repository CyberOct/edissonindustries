import React from 'react'
import { ReuseHero, ImgWrapper, HeroH1, HeroImg, ArrowDown} from './ReusableHeroStyle'

function ReusableHero({imagePath,alt,id,pageTitle}) {
    return (
        <>
            <ReuseHero  id={id}>
                <ImgWrapper>
                <span></span>
                <HeroImg src = {imagePath} alt={alt}></HeroImg>
                </ImgWrapper>
                <HeroH1>
                    {pageTitle}
                    </HeroH1>
                <ArrowDown />
            </ReuseHero>
        </>
    )
}

export default ReusableHero;
