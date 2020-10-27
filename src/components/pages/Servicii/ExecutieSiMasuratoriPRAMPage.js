import React from 'react'
import ReusableHero from '../../ReusableSections/ReusableHeroPages/ReusableHero'
import ServiciiSpecificePage from '../../ReusableSections/ServiciiSpecifice/ServiciiSpecificePage'
import { ExecutieSiMasuratoriPRAM} from '../../ReusableSections/ServiciiSpecifice/Data'
const ExecutieSiMasuratoriPRAMPage = () => {
    return (
        <>
            <ReusableHero {...ExecutieSiMasuratoriPRAM}/>
            <ServiciiSpecificePage {...ExecutieSiMasuratoriPRAM} />
        </>
    )
}

export default ExecutieSiMasuratoriPRAMPage
