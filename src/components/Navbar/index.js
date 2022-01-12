import React from 'react';
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem,
         NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import SLBImage from '../../images/SLB.png';
import './Navbar.css';

const Navbar = ({ toggle }) => {
    const imgClick = () => {
        window.open('google.com');
    }

    return (
        <>
        <Nav>
            <NavbarContainer>
                {/* <NavLogo to='/'>ΣΛΒ</NavLogo> */}
                <img src={SLBImage} className="navbarSLB" onClick={() => imgClick()} ></img>
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
      </>
    );
};

export default Navbar;
