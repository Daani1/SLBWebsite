import ImgOne from '../../images/svg-2.jpg'
import ImgTwo from '../../images/svg-1.png'
import ImgThree from '../../images/svg-4.png'
import ImgFour from '../../images/svg-3.png'

export const homeObjOne = 
{
    webLink: 'https://untbetas.wixsite.com/ntxslb/more-about-me',
    buttonName: 'Learn More',
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    location: 'about',
    topLine: 'SLB at UNT',
    headLine: 'The infamous theta beta chapter of sigma lambda beta',
    description: 'Established at the University of North Texas on April 29th, 2001 by 10 men.',
    buttonLabel: 'infoBtn',
    imgStart: false,
    img: ImgOne,
    alt: 'ProfessionalPics',
    dark: true,
    primary: true,
    darkText: false,//for description
}

 // ^SVGs can be pulled from Udraw, tryna see if I can finesse this with pngs
 //dark: true, for Button text
 //darkText: false, for description

 export const homeObjTwo = {
    webLink: 'https://www.sigmalambdabeta.com/history',
    buttonName: 'Learn More',
    id: 'history',
    lightBg: true,
    lightText: false,
    lighttextDesc: false,
    topLine: "History of the Fraternity",
    headLine: "The beginning of Sigma lambda beta",
    description:
      "Sigma Lambda Beta International Fraternity Inc. was founded on April 4th, 1986 at the University of Iowa.",
    buttonLabel: 'infoBtn2',
    imgStart: true,
    img: ImgTwo,
    alt: "LinePic",
    dark: false,
    primary: false,
    darkText: true,
  }

  export const homeObjThree = {
    webLink:'mailto:danijaramillo26@yahoo.com',
    buttonName: 'Email Us!',
    id: 'values',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "UNT SLB Contact Information",
    headLine: "Have more questions? Feel free to reach us out from the following!",
    description: "Instagram: SLB INSTA\nTwitter: SLB Twitter",
    buttonLabel: 'infoBtn',
    imgStart: false,
    img: ImgThree,
    alt: "CommunityService",
    dark: true,
    primary: true,
    darkText: false,
  }

  export const homeObjFour = {
    webLink: 'https://www.sigmalambdabeta.com/join-slb',
    buttonName: 'Learn More',
    id: 'qualifications',
    lightBg: true,
    lightText: false,
    lighttextDesc: false,
    topLine: "How to become a brother",
    headLine: "Qualifications",
    description:
      "Full-time (exceptions based on situation)\n2.5 GPA\nRepresents the four principles.",
    buttonLabel: 'infoBtn2',
    imgStart: true,
    img: ImgFour,
    alt: "LinePic",
    dark: false,
    primary: false,
    darkText: true,
  }