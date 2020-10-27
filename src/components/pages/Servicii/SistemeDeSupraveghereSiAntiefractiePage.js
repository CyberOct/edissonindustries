import React from 'react'
import ReusableHero from '../../ReusableSections/ReusableHeroPages/ReusableHero'
import ServiciiSpecificePage from '../../ReusableSections/ServiciiSpecifice/ServiciiSpecificePage'
import { SistemeDeSupraveghereSiAntiefractie} from '../../ReusableSections/ServiciiSpecifice/Data'
const SistemeDeSupraveghereSiAntiefractiePage = () => {
    return (
        <>
            <ReusableHero {...SistemeDeSupraveghereSiAntiefractie}/>
            <ServiciiSpecificePage {...SistemeDeSupraveghereSiAntiefractie} />
        </>
    )
}

export default SistemeDeSupraveghereSiAntiefractiePage
