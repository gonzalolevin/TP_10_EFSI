import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import "./Footer.css";
 
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
                Contactame
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>Instagram</Heading>
                        <FooterLink>
                         <a href ="https://www.instagram.com/gonzi_levin/">
      <img  className="imagen" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png"></img></a>                        
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Linkedin</Heading>
                        <FooterLink>
                        <a href ="https://www.linkedin.com/in/gonzalo-levin-a663b326b/">
      <img  className="imagen" src="https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473"></img></a>    
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>GitHub</Heading>
                        <FooterLink>
                        <a href ="https://github.com/gonzalolevin">
      <img  className="imagen" src="https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png"></img></a>    
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Whatsapp</Heading>
                        <FooterLink href="#">
                        <a href ="https://api.whatsapp.com/send/?phone=5491134777861">
      <img  className="imagen" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"></img></a>    
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;
