import React ,{useState}from 'react';
import './HeroSection.css';
import Particles from 'react-particles-js';
import {ReactComponent as EdissonTitle} from '../../assets/EdissonTitle.svg';
import { HeroContainer, MyContainer, HeroTitle, HeroH1, HeroP, HeroBtnWrapper} from './HeroSectionStyle'
import {Button} from '../button/ButtonStyle'



const particlesOptions = {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
};

const HeroSection =()=> {
        return(
            <HeroContainer>
                <Particles className="particles"
                    params={particlesOptions}
                />
                <MyContainer fluid="md">
                    <HeroTitle>
                            <EdissonTitle />
                    </HeroTitle>
                    <HeroH1>
                            <span>Servicii electrice profesionale</span> pentru nevoile tale
                    </HeroH1>
                    <HeroP>
                            Prestam <span>servicii complete</span> in domeniu instalatiilor electrice si al automatizarilor.
                    </HeroP>
                        <HeroBtnWrapper>
                        <Button to='Servicii' >
                                Vezi oferta<span></span>
                        </Button>
                            <Button to="Contact">Contacteaza-ne<span></span></Button>
                        </HeroBtnWrapper>
                    </MyContainer>
            </HeroContainer>
            
        );
    }

export default HeroSection;