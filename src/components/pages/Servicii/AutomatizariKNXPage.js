import React from 'react'
import ReusableHero from '../../ReusableSections/ReusableHeroPages/ReusableHero'
import ServiciiSpecificePage from '../../ReusableSections/ServiciiSpecifice/ServiciiSpecificePage'
import { AutomatizariKNX} from '../../ReusableSections/ServiciiSpecifice/Data'
const AutomatizariKNXPage = () => {
    return (
        <>
            <ReusableHero {...AutomatizariKNX}/>
            <ServiciiSpecificePage {...AutomatizariKNX} />
        </>
    )
}

export default AutomatizariKNXPage
