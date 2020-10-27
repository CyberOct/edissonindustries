import React  from 'react'
import ReusableHero from '../../ReusableSections/ReusableHeroPages/ReusableHero'
import { pageDespreNoiObject } from '../../ReusableSections/ReusableHeroPages/HeroData'
import ReusableSection from '../../ReusableSections/ReusableSection/ReusableSection'
import { despreNoiContentObject } from '../../ReusableSections/ReusableSection/Data'
import Testimonials from '../../testimonials/TestimonialsSection'

const DespreNoiPage = () => {
    return(
        <>
            <ReusableHero  {...pageDespreNoiObject}/>
            <ReusableSection {...despreNoiContentObject} />
            <Testimonials />
        </>
    )
}

export default DespreNoiPage;