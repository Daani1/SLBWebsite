import ImgCar from '../../images/svg-1.png'
import ImgTest from '../../images/svg-2.svg'

export const homeObjOne = 
{
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Top Line',
    headLine: 'HeadLine',
    description: 'description bl he following download links below contain files of our assets in both vector and commonly u nlike CSS imports, importing a file gives you a string value. This ',
    buttonLabel: 'Button Label',
    imgStart: false,
    img: ImgTest,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,//for description
};

 // ^SVGs can be pulled from Udraw, tryna see if I can finesse this with pngs
 //dark: true, for Button text
 //darkText: false, for description

 export const homeObjTwo = {
    id: "discover",
    lightBg: true,
    lightText: false,
    lighttextDesc: false,
    topLine: "Unlimited Access",
    headline: "Login to your account at any time",
    description:
      "Get access to our exclusive app that allows you to send unlimited transactions whitout getting charged any fees.",
    buttonLabel: "Learn More",
    imgStart: true,
    img: ImgCar,
    alt: "Piggybanck",
    dark: false,
    primary: false,
    darkText: true,
  };