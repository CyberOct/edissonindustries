import React from 'react'
import ReusableHero from '../../ReusableSections/ReusableHeroPages/ReusableHero'
import { pageServiciiObject } from '../../ReusableSections/ReusableHeroPages/HeroData'
import ReusableSection from '../../ReusableSections/ReusableSection/ReusableSection'
import { serviciiContentObject1, serviciiContentObject2, serviciiContentObject3, serviciiContentObject4, serviciiContentObject5, serviciiContentObject6, serviciiContentObject7, serviciiContentObject8, serviciiContentObject9 } from '../../ReusableSections/ReusableSection/Data'

const ServiciiPage = () => {
    return (
        <>
            <ReusableHero  {...pageServiciiObject} />
            <ReusableSection {...serviciiContentObject1} />
            <ReusableSection {...serviciiContentObject2} />
            <ReusableSection {...serviciiContentObject3} />
            <ReusableSection {...serviciiContentObject4} />
            <ReusableSection {...serviciiContentObject5} />
            <ReusableSection {...serviciiContentObject6} />
            <ReusableSection {...serviciiContentObject7} />
            <ReusableSection {...serviciiContentObject8} />
            <ReusableSection {...serviciiContentObject9} />
        </>
    )
}

export default ServiciiPage;