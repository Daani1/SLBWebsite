import React, {useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem,
         NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import SLBImage from '../../images/SLB.png';
import './Navbar.css';
import { animateScroll as scroll } from "react-scroll";
import { IconContext } from 'react-icons/lib';

 const Navbar = ({ toggle }) => {
//     const imgClick = () => {
//         window.open('google.com');
//     }

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if (window.scrollY >= 80) {
        setScrollNav(true);
        } else {
        setScrollNav(false);
        }
    };
    
    useEffect(() => {
        window.addEventListener("scroll", changeNav);
      }, []);

    return (
        <>
        <IconContext.Provider value={{ color: "#fff" }}>
            <Nav scrollNav={scrollNav} >
                <NavbarContainer>
                    {/* <NavLogo to='/'>ΣΛΒ</NavLogo> */}
                    <img src={SLBImage} className="navbarSLB" onClick={toggleHome} ></img>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='history'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>History</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='values'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>Values</NavLinks>
                        </NavItem>                    
                        <NavItem>
                            <NavLinks to='qualifications'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>Qualifications</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink><a href = "https://forms.gle/Rc283LmCSbyqGZJS9" className='navbarBtn' target='_blank'>Interest Form</a></NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
      </>
    );
};

export default Navbar;
