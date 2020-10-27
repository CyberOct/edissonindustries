import React from 'react'
import {  TestimonialCard, TestimonialUserName, TestimonialImg, TestimonialP, QuotesLeft, QuotesRight } from './TestimonialsCardStyle'

const TestimonialsCard = ({userName,comment,img,alt}) => {
    return (
        <TestimonialCard>
            <TestimonialImg>
                <span></span>
                <img src={img} alt={alt}></img>
            </TestimonialImg>
            <TestimonialUserName>{userName}</TestimonialUserName>
            <QuotesLeft />
            <TestimonialP>
                {comment}
                        </TestimonialP>
            <QuotesRight />
            <span className="bottomSpan"></span>
        </TestimonialCard>
    )
}

export default TestimonialsCard
