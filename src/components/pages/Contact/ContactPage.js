import React from 'react'
import ReusableHero from '../../ReusableSections/ReusableHeroPages/ReusableHero'
import { pageContactObject } from '../../ReusableSections/ReusableHeroPages/HeroData'
import ReusableSection from '../../ReusableSections/ReusableSection/ReusableSection'
import { contactContentObject, contactContentWithMap} from '../../ReusableSections/ReusableSection/Data'
import ContactSectionWithMap from '../../ReusableSections/ContactSectionWithMap/ContactSectionWithMap'
const ContactPage = () => {
    return (
        <>
            <ReusableHero  {...pageContactObject} />
            <ReusableSection {...contactContentObject} />
            <ContactSectionWithMap {...contactContentWithMap}/>
        </> 
    )
}

export default ContactPage;