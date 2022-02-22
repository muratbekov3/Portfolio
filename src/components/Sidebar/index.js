import React from 'react'
import {SidebarContainer, 
     Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
    } from './SidebarElementss'

 

const Sidebar = ({isOpen, toggle}) => {
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon/>
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                   <SidebarLink to="about" onClick={toggle}> About me</SidebarLink>
                   <SidebarLink to="discover" onClick={toggle}> Experience</SidebarLink>
                   <SidebarLink to="services" onClick={toggle}>Skills</SidebarLink>
                   <SidebarLink to="works" onClick={toggle}> Projects</SidebarLink>
                   <SidebarLink to="signup" onClick={toggle}> Contacts</SidebarLink>
               </SidebarMenu>
               <SideBtnWrap>
                   <SidebarRoute to="/">Hi</SidebarRoute>
               </SideBtnWrap>
           </SidebarWrapper>
       </SidebarContainer>
    )
}

export default Sidebar;
