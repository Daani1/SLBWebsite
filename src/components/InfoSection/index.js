import React from 'react';
import { Button } from '../ButtonElement';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, 
         TopLine, Heading, Subtitle, BtnWrap, ImgWrap,
         Img } from './InfoElements';
import './info.css'


const InfoSection = ({ webLink, lightBg, id, imgStart, topLine, lightText, headLine,
                        darkText, description, buttonLabel, img, alt, primary,
                        dark, dark2, location}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button 
                                    primary={primary ? 1 : 0 }
                                    dark={dark ? 1 : 0 }
                                    dark2={dark2 ? 1 : 0 }
                                    >
                                    <a href= {webLink} target='_blank' className={buttonLabel}>Learn More</a>
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} /> 
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer> 
        </>
    )
}

export default InfoSection;
