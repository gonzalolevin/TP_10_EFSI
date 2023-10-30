// Filename - components/Footer.js
import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles"; // Make sure to import the necessary components and styles

const Footer = () => {
    return (
        <Box>
            <h1
                style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                A Computer Science Portal for Geeks!
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>Instagram</Heading>
                        <a href="https://www.instagram.com/"><img className="imagen" src="https://i.pinimg.com/originals/3b/21/c7/3b21c7efd2ba9c119fb8d361acacc31d.png" alt="Instagram Logo"/></a>
                    </Column>
                    <Column>
                        <Heading>Linkedin</Heading>
                        <a href="https://www.linkedin.com/feed/"><img className="imagen" src="https://static.vecteezy.com/system/resources/previews/023/986/926/original/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" alt="Instagram Logo"/></a>
                    </Column>
                    <Column>
                        <Heading>Youtube</Heading>
                        <a href="https://www.youtube.com/watch?v=1Mh7fTZKhSs&t=4s"><img className="imagen" src="https://cdn.icon-icons.com/icons2/272/PNG/512/Youtube_30038.png" alt="Instagram Logo"/></a>
                    </Column>
                    <Column>
                        <Heading>wap</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f"></i>
                            <span>Facebook</span>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram"></i>
                            <span>Instagram</span>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter"></i>
                            <span>Twitter</span>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube"></i>
                            <span>Youtube</span>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};

export default Footer;
