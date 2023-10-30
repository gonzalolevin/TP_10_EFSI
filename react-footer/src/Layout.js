import { Link,Outlet } from "react-router-dom";
import './Layout.css'
import Footer from "./components/Footer";
import "./components/Footer.css";
 
import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./components/FooterStyles";

export default function Layout() {
    return (
        <>
      <nav className="navigation">
        <div
          className="navigation-menu">
          <ul>
          <li>
            <Link to = "home">Home</Link>
            </li>
            <li>
            <Link to ="proyectos">Proyectos</Link>
            </li>
            <li>
            <Link to ="infopersonal">Info Personal</Link>
            </li>
            <li>
            <Link to = "favoritos">Favoritos</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet/>
      <Footer className="Footer">
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
                        <Heading>About Us</Heading>
                        <FooterLink href="#">
                            Aim
                        </FooterLink>
                        <FooterLink href="#">
                            Vision
                        </FooterLink>
                        <FooterLink href="#">
                            Testimonials
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">
                            Writing
                        </FooterLink>
                        <FooterLink href="#">
                            Internships
                        </FooterLink>
                        <FooterLink href="#">
                            Coding
                        </FooterLink>
                        <FooterLink href="#">
                            Teaching
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">
                            Uttar Pradesh
                        </FooterLink>
                        <FooterLink href="#">
                            Ahemdabad
                        </FooterLink>
                        <FooterLink href="#">
                            Indore
                        </FooterLink>
                        <FooterLink href="#">
                            Mumbai
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
      </Footer>
      
    </>
    );
  }