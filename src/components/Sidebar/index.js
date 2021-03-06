import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, 
         SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute
       } from './SidebarElements';
import './Sidebar.css'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' 
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80} 
                    onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='history' 
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    onClick={toggle}>
                        History
                    </SidebarLink>
                    <SidebarLink to='values' 
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    onClick={toggle}>
                        Values
                    </SidebarLink>
                    <SidebarLink to='qualifications' 
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    onClick={toggle}>
                        Qualifications
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute><a href="https://forms.gle/Rc283LmCSbyqGZJS9" className='sidebarBtn' target='_blank'>Interest Form</a></SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
