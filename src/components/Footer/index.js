import React from 'react'
import { FaFacebook , FaInstagram, FaMailBulk, FaGithub, FaLinkedin,} from 'react-icons/fa'
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap,
SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElement'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop()
    }
    return (
        <FooterContainer id='signup'>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                          Front-End Developer
                        </SocialLogo>
                        <WebsiteRights>Akylbek Muratbek uulu c {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/akylbek.muratbekuulu.1/" target="_blank"
                            aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/_muratbekov3/" target="_blank"
                            aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="mailto:akylbekmuratbekuulu@gmail.com" 
                            aria-label="Mail">
                                <FaMailBulk/>
                            </SocialIconLink>
                            <SocialIconLink href="https://github.com/muratbekov3" target="_blank"
                            aria-label="Github">
                                <FaGithub/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/akylbek-muratbek-uulu-0419701bb/" target="_blank"
                            aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
                <SocialMedia>
                <SocialMediaWrap>
                <SocialLogo>+48576526862</SocialLogo>
                <WebsiteRights> akylbekmuratbekuulu@gmail.com</WebsiteRights>
                <WebsiteRights> akylbek.muratbekuulu3@gmail.com</WebsiteRights>
                </SocialMediaWrap>

                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
