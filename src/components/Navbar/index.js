import React from 'react';
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem,
         NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>dani's website</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover'>Qualifications</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services'>Values</NavLinks>
                    </NavItem>                    
                    <NavItem>
                        <NavLinks to='signup'>Contacts</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Interest Form</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
      </>
    );
};

export default Navbar;
