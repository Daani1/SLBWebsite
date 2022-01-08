import React from 'react';
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem,
         NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>ΣΛΒ</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='history'>History</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='values'>Values</NavLinks>
                    </NavItem>                    
                    <NavItem>
                        <NavLinks to='qualifications'>Qualifications</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink><a href = "https://forms.gle/Rc283LmCSbyqGZJS9">Interest Form</a></NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
      </>
    );
};

export default Navbar;
