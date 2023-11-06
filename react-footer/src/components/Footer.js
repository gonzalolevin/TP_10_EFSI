import React from "react";
import "./Footer.css";
import "./FooterStyles.js"

const Footer = () => {
    return (
        <div className="Footer">
            <div className="FooterContainer">
                <div className="Row">
                    <div className="Column">
                        <h2 className="Heading">Instagram</h2>
                        <a href="https://www.instagram.com/gonzi_levin/" className="FooterLink">
                            <img className="imagen text-center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png" alt="Instagram" />
                        </a>
                    </div>
                    <div className="Column">
                        <h2 className="Heading">Linkedin</h2>
                        <a href="https://www.linkedin.com/in/gonzalo-levin-a663b326b/" className="FooterLink">
                            <img className="imagen text-center" src="https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473" alt="LinkedIn" />
                        </a>
                    </div>
                    <div className="Column">
                        <h2 className="Heading">GitHub</h2>
                        <a href="https://github.com/gonzalolevin" className="FooterLink">
                            <img className="imagen text-center" src="https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png" alt="GitHub" />
                        </a>
                    </div>
                    <div className="Column">
                        <h2 className="Heading">Whatsapp</h2>
                        <a href="https://api.whatsapp.com/send/?phone=5491134777861" className="FooterLink">
                            <img className="imagen text-center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png" alt="WhatsApp" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
