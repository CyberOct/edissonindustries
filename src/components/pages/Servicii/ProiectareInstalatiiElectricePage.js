import React from 'react'
import ReusableHero from '../../ReusableSections/ReusableHeroPages/ReusableHero'
import ServiciiSpecificePage from '../../ReusableSections/ServiciiSpecifice/ServiciiSpecificePage'
import { ProiectareInstalatiiElectrice} from '../../ReusableSections/ServiciiSpecifice/Data'
const ProiectareInstalatiiElectricePage = () => {
    return (
        <>
            <ReusableHero {...ProiectareInstalatiiElectrice}/>
            <ServiciiSpecificePage {...ProiectareInstalatiiElectrice} />
        </>
    )
}

export default ProiectareInstalatiiElectricePage
