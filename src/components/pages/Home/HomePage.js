import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from '../../heroSection/HeroSection'
import InfoSection from '../../InfoSection/InfoSection'
import InfoSection2 from '../../InfoSection/infoSection2'
import ReusableSection from '../../ReusableSections/ReusableSection/ReusableSection'
import { homeObjectOne, homeObjectTwo, homeObjectThree} from '../../ReusableSections/ReusableSection/Data';
import { serviciiSection} from '../../servicii/Data'
import Servicii from '../../servicii/Servicii';


const HomePage =()=> {
        return (
            <>
                <HeroSection  id='hometop'/>
                <InfoSection />
                <ReusableSection {...homeObjectOne} />
                <ReusableSection {...homeObjectTwo} />
                <Servicii {...serviciiSection} />
                <ReusableSection {...homeObjectThree} />
                <InfoSection2 />
            </>
        );
}

export default HomePage;