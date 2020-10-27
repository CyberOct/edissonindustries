import styled from 'styled-components'
import Carousel from 'react-elastic-carousel';

export const CarouselWrapper = styled.div`
    height:auto;
    background-color: rgb(0,18,31);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const CarouselH1 = styled.h1`
    margin-top:3rem;
    margin-bottom: 24px;
    font-size: 2.5rem;
    line-height: 1.1;
    font-weight: 600;
    white-space: pre-wrap;
    color:#f7f8f1;
    
    @media screen and (max-width:480px){
        padding:20px 20px;
        font-size: 2rem;
    }
`
export const CarouselP= styled.p`
    color:#01bf71;
    font-size: 1rem;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom:3rem;
    text-align:center;
    &:after{
            display: block;
            height: 2px;
            background-color: #FFA800;
            content: "";
            width: 100%;
            margin-top:5px;
            }
    @media screen and (max-width:480px){
        padding:20px 20px;
    }
`

export const MyCarousel = styled(Carousel)`
    max-width:1200px;
    background:white;
    padding: 100px 0px;
    margin-bottom:50px;
    .rec-dot_active{
      background-color:rgba(255,168,0,1);
        box-shadow: 0 0 1px 2px rgb(0,0,0);
    }
    .rec-pagination{
        margin-top:25px;
    }
    .rec-dot:hover{
        box-shadow: 0 0 1px 2px rgb(0,0,0);
    }
    .rec-arrow{
        border-radius:0%;
        width:20px;
        font-size:1rem;
        min-width:20px;
        margin: 0px 10px;
        background-color: rgba(0,0,0,0.3);
        &:hover{
            background-color: rgba(0,0,0,1);
        }
    }
}
`
