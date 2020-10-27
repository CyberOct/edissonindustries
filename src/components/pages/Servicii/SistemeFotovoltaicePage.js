import React from 'react'
import ReusableHero from '../../ReusableSections/ReusableHeroPages/ReusableHero'
import ServiciiSpecificePage from '../../ReusableSections/ServiciiSpecifice/ServiciiSpecificePage'
import { SistemeFotovoltaice} from '../../ReusableSections/ServiciiSpecifice/Data'
const SistemeFotovoltaicePage = () => {
    return (
        <>
            <ReusableHero {...SistemeFotovoltaice}/>
            <ServiciiSpecificePage {...SistemeFotovoltaice} />
        </>
    )
}

export default SistemeFotovoltaicePage
