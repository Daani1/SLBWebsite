import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkContainer,
  FooterLinkTitle,
  FooterLink,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

import { animateScroll as scroll } from "react-scroll";
import SLB from '../../images/SLB.png';
import './Footer.css';


const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          {/* <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact us</FooterLinkTitle>
              <FooterLink to="/">UNT Chapter Email</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Carrers</FooterLink>
              <FooterLink to="/">Investor</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>  */}
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
          <img src ={SLB} className="footerSLB" onClick={toggleHome}></img>
            <SocialLogo to="/" >
            <WebsiteRights>
            ΣΛΒ © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            </SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/untbetas"
                target="_blank"
                arial-label="Facebook"
                title="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/northtexasbetas"
                target="_blank"
                arial-label="Instagram"
                title="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/channel/UCBh8YAfTVhR0LV7AA88e-mg?view_as=subscriber"
                target="_blank"
                arial-label="Youtube"
                title="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com/northtexasbetas"
                target="_blank"
                arial-label="Twitter"
                title="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;