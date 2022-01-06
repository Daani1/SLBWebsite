import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, 
        HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';


const HeroSection = () => {
        
    const [hover, setHover] = useState(false)
    
    const onHover = () => {     
        setHover(!hover);
    };
    
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg> 
            <HeroContent>
                <HeroH1>This is hero section header 1</HeroH1>
                <HeroP>
                    This will be the paragraph section of the 
                    hero section
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEner={onHover} onMouseLeave={onHover}>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;