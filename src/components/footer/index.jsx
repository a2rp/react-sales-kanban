import React from "react";
import { Styled } from "./styled";
import { FiGithub, FiLinkedin, FiGlobe, FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();
    const buildTime =
        typeof __BUILD_TIME__ !== "undefined"
            ? `${new Date(__BUILD_TIME__).toLocaleString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: false,
              })} hrs`
            : "Development";

    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Styled.Top>
                    <Styled.BrandSection>
                        <Styled.BrandTitle>
                            react - sales kanban
                        </Styled.BrandTitle>

                        <Styled.Description>
                            A frontend-only sales pipeline board to manage
                            deals, track stage movement, and review weighted
                            revenue forecasts with reports and settings.
                        </Styled.Description>

                        <span style={{ opacity: 0.7 }}>Build: {buildTime}</span>
                    </Styled.BrandSection>

                    <Styled.NavSection>
                        <Styled.SectionTitle>Navigation</Styled.SectionTitle>
                        <Styled.NavLinks>
                            <Link to="/pipeline">Pipeline</Link>
                            <Link to="/reports">Reports</Link>
                            <Link to="/settings">Settings</Link>
                        </Styled.NavLinks>
                    </Styled.NavSection>

                    <Styled.SocialSection>
                        <Styled.SectionTitle>Connect</Styled.SectionTitle>

                        <Styled.SocialLinks>
                            <a
                                href="https://github.com/a2rp"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiGithub />
                            </a>
                            <a
                                href="https://www.ashishranjan.net"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiGlobe />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/aashishranjan"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiLinkedin />
                            </a>
                            <a
                                href="https://www.facebook.com/theash.ashish/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FiFacebook />
                            </a>
                        </Styled.SocialLinks>
                    </Styled.SocialSection>
                </Styled.Top>

                <Styled.Bottom>
                    <Styled.Copy>
                        © {year} Ashish Ranjan. All rights reserved.
                    </Styled.Copy>

                    <Styled.LegalLinks>
                        <Link to="/privacy">Privacy</Link>
                        <Link to="/terms">Terms</Link>
                        <Link to="/legal">Legal</Link>
                        <Link to="/cookies">Cookies</Link>
                    </Styled.LegalLinks>
                </Styled.Bottom>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default Footer;
