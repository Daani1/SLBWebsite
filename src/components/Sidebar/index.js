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
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='history' onClick={toggle}>
                        History
                    </SidebarLink>
                    <SidebarLink to='values' onClick={toggle}>
                        Values
                    </SidebarLink>
                    <SidebarLink to='qualifications' onClick={toggle}>
                        Qualifications
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute><a href="https://forms.gle/Rc283LmCSbyqGZJS9" className='sidebarBtn'>Interest Form</a></SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
