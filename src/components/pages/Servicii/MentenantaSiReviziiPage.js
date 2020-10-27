import React from 'react'
import ReusableHero from '../../ReusableSections/ReusableHeroPages/ReusableHero'
import ServiciiSpecificePage from '../../ReusableSections/ServiciiSpecifice/ServiciiSpecificePage'
import { MentenantaSiRevizii} from '../../ReusableSections/ServiciiSpecifice/Data'
const MentenantaSiReviziiPage = () => {
    return (
        <>
            <ReusableHero {...MentenantaSiRevizii}/>
            <ServiciiSpecificePage {...MentenantaSiRevizii} />
        </>
    )
}

export default MentenantaSiReviziiPage
