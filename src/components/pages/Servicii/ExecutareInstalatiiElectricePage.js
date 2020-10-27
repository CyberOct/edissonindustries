import React from 'react'
import ReusableHero from '../../ReusableSections/ReusableHeroPages/ReusableHero'
import ServiciiSpecificePage from '../../ReusableSections/ServiciiSpecifice/ServiciiSpecificePage'
import { ExecutareInstalatiiElectrice} from '../../ReusableSections/ServiciiSpecifice/Data'
const ExecutareInstalatiiElectricePage = () => {
    return (
        <>
            <ReusableHero {...ExecutareInstalatiiElectrice}/>
            <ServiciiSpecificePage {...ExecutareInstalatiiElectrice} />
        </>
    )
}

export default ExecutareInstalatiiElectricePage
