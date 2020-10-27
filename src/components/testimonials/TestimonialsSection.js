import React from 'react'
import { CarouselWrapper, CarouselH1, CarouselP, MyCarousel} from './TestimonialsSectionStyle'
import TestimonialsCard from './TestimonialsCard'
import { cardObject1, cardObject2, cardObject3, cardObject4, cardObject5 } from './Data'

const Testimonials = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];
    return (
        <CarouselWrapper>
        <CarouselH1>Testimoniale</CarouselH1>
        <CarouselP>Un client fericiti iti va aduce alti 10.</CarouselP>
            <MyCarousel breakPoints={breakPoints} >
                <TestimonialsCard {...cardObject1} />
                <TestimonialsCard {...cardObject2}/>
                <TestimonialsCard {...cardObject3}/>
                <TestimonialsCard {...cardObject4}/>
                <TestimonialsCard {...cardObject5} />
            </MyCarousel>
      </CarouselWrapper>
    )
}

export default Testimonials
