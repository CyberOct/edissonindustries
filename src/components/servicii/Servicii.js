import React, { useLayoutEffect ,useRef,useState} from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesP ,Wrapper} from './ServiciiStyle'
import CardServicii from './CardServicii'
import { serviciiObject1, serviciiObject2, serviciiObject3, serviciiObject4, serviciiObject5, serviciiObject6, serviciiObject7, serviciiObject8} from './Data'


const Servicii = ({lightBg,id})=>{
    const [show, isShow] = useState({
        itemOne: false
    });
    const ourRef = useRef(null);
    useLayoutEffect(() => {
        const topPos = element => (element.getBoundingClientRect().bottom + element.getBoundingClientRect().top) / 1.9;
        const section1Pos = topPos(ourRef.current);

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;
            if (section1Pos < scrollPos) {
                isShow(state => ({ ...state, itemOne: true }));
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll)
        };
    }, [])
    return (
        <ServicesContainer lightBg={lightBg} id={id}>
        <Wrapper>
                <ServicesH1 animate={show.itemOne} ref={ourRef}>Serviciile noastre</ServicesH1>
                <ServicesP animate={show.itemOne} ref={ourRef}>Soluțiile pe care le oferim clienților noștri sunt mereu adaptate cerințelor individuale ale acestora. Fie că este o locuință, o instituție de stat, un complex comercial, noi avem mereu soluția potrivită.
Edisson-Industries este la curent cu ultimele noutăți din domeniu, atât din punct de vedere uman cât și tehnic și material. </ServicesP>
            <ServicesWrapper >
                <CardServicii {...serviciiObject1}/>
                <CardServicii {...serviciiObject2} />
                <CardServicii {...serviciiObject3} />
                <CardServicii {...serviciiObject4} />
                <CardServicii {...serviciiObject5} />
                <CardServicii {...serviciiObject6} />
                <CardServicii {...serviciiObject7} />
                <CardServicii {...serviciiObject8} />
            </ServicesWrapper>
            </Wrapper>
        </ServicesContainer>
    )
}
export default Servicii