import styled from 'styled-components'

export const ReuseContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#00121F')};
    padding-top:50px;
    @media (max-width: 768px){
        padding: 100px 0;
    }
`
export const ReuseWrapper = styled.div`
    display:grid;
    z-index:1;
    height:auto;
    min-height:500px;
    width:100%;
    max-width:1200px;
    margin-right:auto;
    margin-left:auto;
    padding: 0 24px;
    justify-content:center;
`
export const ReuseRow = styled.div`
    display:grid;
    grid-auto-columns: minmax(auto,1fr);
    align-items:center;
    grid-template-areas : ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    
    @media (max-width:1100px){
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const ReuseColumn1 = styled.div`
    margin-bottom:15px;
    padding: 0 15px;
    grid-area: col1;
    transform: translateX(${({ animate }) => (animate ? "0" : "-10vw")});
    transition: all 1s ease;
    opacity: ${({ animate }) => (animate ? "1" : "0")};
`
export const ReuseColumn2 = styled.div`
    margin-bottom:15px;
    padding: 0 15px;
    grid-area: col2;
    transform: translateX(${({ animate }) => (animate ? "0" : "10vw")});
    transition: all 1s ease;
    opacity: ${({ animate }) => (animate ? "1" : "0")};
    height:100%;
    min-height:500px;
`
export const TextWrapper = styled.div`
    max-width:540px;
    padding-top: 0px;
    padding-bottom: 60px;
`
export const TopLine = styled.p`
    color:#01bf71;
    font-size: 1rem;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom:16px;
    &:after{
            display: block;
            height: 2px;
            background-color: #FFA800;
            content: " ";
            width: 30px;
            margin-top:5px;
            }
`
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    white-space: pre-wrap;
    color: ${({ lightText }) => (lightText ? '#9EC10F' : '#9EC10F')};
    @media (max-width: 480px){
        font-size: 32px;
    }
`
export const Subtitle = styled.p`
        white-space: pre-wrap;
        max-width:440px;
        margin-bottom:35px;
        font-size: 18px;
        line-height: 26px;
        color: ${({ lightTextSubtitle }) => (lightTextSubtitle ? '#fff' : '#010606')}
    
`
export const BtnWrap = styled.div`
    display:${({ showButton }) => (showButton ? 'flex' : 'none')};
    justify-content: flex-start;
`
export const ImgWrap = styled.div`
    max-width: 555px;
    margin-top:50px;
    margin-bottom:50px;
`
export const Img = styled.img`
    width:100%;
    max-height: 500px;
    margin:0 0 10px 0;
    padding-right:0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media (min-width:1500px){
        margin-top:50px
    }
    @media (max-width:768px){
        max-height: 500px;
    }
    max-height: 800px;
    object-fit: cover;
`
