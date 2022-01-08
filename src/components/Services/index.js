import React from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard,
         ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';
import Icon1 from '../../images/svg-4.png'
import Icon2 from '../../images/svg-5.png'
import Icon3 from '../../images/svg-1.png'
import Icon4 from '../../images/svg-2.jpg'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Headline 1</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Headline 2 (1)</ServicesH2>
                    <ServicesP>Paragraph(1)</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Headline 2 (2)</ServicesH2>
                    <ServicesP>Paragraph(2)</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Headline 2(3)</ServicesH2>
                    <ServicesP>Paragraph(3)</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>Headline 2(4)</ServicesH2>
                    <ServicesP>Paragraph(4)</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
