import ImgOne from '../../images/svg-2.jpg'
import ImgTwo from '../../images/svg-1.png'
import ImgThree from '../../images/svg-4.png'
import ImgFour from '../../images/svg-3.png'

export const homeObjOne = 
{
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'SLB at UNT',
    headLine: 'The infamous theta beta chapter of sigma lambda beta',
    description: 'stablished at the University of North Texas on April 29th, 2001 by 10 men.',
    buttonLabel: 'Learn More',
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
    id: 'history',
    lightBg: true,
    lightText: false,
    lighttextDesc: false,
    topLine: "History of the Fraternity",
    headLine: "The beginning of Sigma lambda beta",
    description:
      "Sigma Lambda Beta International Fraternity Inc. was founded on April 4th, 1986 at the University of Iowa.",
    buttonLabel: "Learn More",
    imgStart: true,
    img: ImgTwo,
    alt: "LinePic",
    dark: false,
    primary: false,
    darkText: true,
  }

  export const homeObjThree = {
    id: 'values',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "What SLB Embodies",
    headLine: "The four core principles of Sigma Lambda Beta",
    description: "Cultural Awareness, Scholarship, Community Service, and Brotherhood",
    buttonLabel: "Learn More",
    imgStart: false,
    img: ImgThree,
    alt: "CommunityService",
    dark: true,
    primary: true,
    darkText: false,
  }

  export const homeObjFour = {
    id: 'qualifications',
    lightBg: true,
    lightText: false,
    lighttextDesc: false,
    topLine: "How to become a brother",
    headLine: "Qualifications",
    description:
      "Full-time (exceptions based on situation)\n2.5 GPA\nRepresents the four principles.",
    buttonLabel: "Learn More",
    imgStart: true,
    img: ImgFour,
    alt: "LinePic",
    dark: false,
    primary: false,
    darkText: true,
  }