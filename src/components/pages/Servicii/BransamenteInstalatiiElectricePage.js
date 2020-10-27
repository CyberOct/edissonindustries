import React from 'react'
import ReusableHero from '../../ReusableSections/ReusableHeroPages/ReusableHero'
import ServiciiSpecificePage from '../../ReusableSections/ServiciiSpecifice/ServiciiSpecificePage'
import { BransamenteInstalatiiElectrice} from '../../ReusableSections/ServiciiSpecifice/Data'
const BransamenteInstalatiiElectricePage = () => {
    return (
        <>
            <ReusableHero {...BransamenteInstalatiiElectrice}/>
            <ServiciiSpecificePage {...BransamenteInstalatiiElectrice} />
        </>
    )
}

export default BransamenteInstalatiiElectricePage
