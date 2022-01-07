import ImgOne from '../../images/svg-2.jpg'
import ImgTwo from '../../images/svg-1.png'
import ImgThree from '../../images/svg-3.png'

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
    img: ImgOne,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,//for description
}

 // ^SVGs can be pulled from Udraw, tryna see if I can finesse this with pngs
 //dark: true, for Button text
 //darkText: false, for description

 export const homeObjTwo = {
    id: "discover",
    lightBg: true,
    lightText: false,
    lighttextDesc: false,
    topLine: "First Line 2",
    headLine: "Header Line 2",
    description:
      "Description 2",
    buttonLabel: "Button 2",
    imgStart: true,
    img: ImgTwo,
    alt: "Piggybanck",
    dark: false,
    primary: false,
    darkText: true,
  }

  export const homeObjThree = {
    id: "discover",
    lightBg: true,
    lightText: false,
    lighttextDesc: false,
    topLine: "First Line 3",
    headLine: "Header Line 3",
    description: "Description 3",
    buttonLabel: "Button 3",
    imgStart: true,
    img: ImgThree,
    alt: "Piggybanck",
    dark: false,
    primary: false,
    darkText: true,
  }